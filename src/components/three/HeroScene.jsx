import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Lightformer, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

/* ---------------------------------------------------------------------------
   The hero object: the ZK monogram (built from the cover artwork) with floating pixel cubes, lit like a
   product shot. Reliability notes (why this file looks paranoid):

   1. The render loop is NEVER switched off while the page is visible. Pausing
      it used to leave a transparent canvas behind (the object "disappearing"
      after a few seconds on some GPUs / in iframes).
   2. A context-loss handler exists so a dropped GPU context self-heals: we
      preventDefault(), ask the browser to restore, and re-upload the scene.
   3. <Heartbeat> reports every rendered frame, so the parent can detect a
      frozen canvas and remount the scene automatically.
   --------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------
   ZK monogram. Every piece is traced from the cover artwork (1584x672 px image),
   so the coordinates below are IMAGE PIXELS, converted to world units by toWorld().
   Each piece is a 2D rounded shape extruded with a bevel (rounded, glossy edges).
   z = depth layer: the Z bars sit in front of the K stem, the Z diagonal tucks behind it.
   --------------------------------------------------------------------------- */
const CX = 795 // artwork center (px)
const CY = 340
const S = 0.0115 // world units per artwork pixel (raise to make the whole logo bigger)
const DEPTH = 0.5 // extrusion depth
const BEVEL = 0.09 // edge rounding

const toWorld = ([x, y]) => [(x - CX) * S, (CY - y) * S]
const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]
/* rotated rectangle: center, length, width, angle in degrees (counter-clockwise, y up) */
const rotRect = (cx, cy, L, w, deg) => {
  const a = (deg * Math.PI) / 180
  const d = [Math.cos(a), -Math.sin(a)]
  const p = [Math.sin(a), Math.cos(a)]
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sl, sw]) => [
    cx + (d[0] * L * sl) / 2 + (p[0] * w * sw) / 2,
    cy + (d[1] * L * sl) / 2 + (p[1] * w * sw) / 2,
  ])
}

const PIECES = [
  // K stem (full height, partly hidden behind the Z bars)
  { id: 'stem', pts: rect(782, 112, 856, 568), z: 0, c: '#7c4dff', r: 0.24 },
  // Z diagonal (tucks behind the stem)
  { id: 'z-diag', pts: [[727, 258], [838, 258], [713, 420], [602, 420]], z: -0.28, c: '#6d3bf5', r: 0.16 },
  // Z top bar
  { id: 'z-top', pts: rect(592, 177, 832, 240), z: 0.34, c: '#8b5cff', r: 0.22 },
  // Z bottom bar
  { id: 'z-bot', pts: rect(594, 432, 846, 496), z: 0.34, c: '#4a1fd0', r: 0.22 },
  // K upper arm
  { id: 'k-up', pts: rotRect(915, 248, 145, 62, 41), z: 0.12, c: '#7c4dff', r: 0.2 },
  // K lower arm
  { id: 'k-dn', pts: rotRect(932, 422, 162, 66, -48), z: 0.12, c: '#5f30ea', r: 0.2 },
]

/* polygon -> Shape with rounded corners (points are local, centered on the piece) */
function roundedShape(pts, radius) {
  const shape = new THREE.Shape()
  const n = pts.length
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const v1 = new THREE.Vector2(p0[0] - p1[0], p0[1] - p1[1])
    const v2 = new THREE.Vector2(p2[0] - p1[0], p2[1] - p1[1])
    const rr = Math.min(radius, v1.length() / 2, v2.length() / 2)
    v1.normalize()
    v2.normalize()
    const a = [p1[0] + v1.x * rr, p1[1] + v1.y * rr]
    const b = [p1[0] + v2.x * rr, p1[1] + v2.y * rr]
    if (i === 0) shape.moveTo(a[0], a[1])
    else shape.lineTo(a[0], a[1])
    shape.quadraticCurveTo(p1[0], p1[1], b[0], b[1])
  }
  shape.closePath()
  return shape
}

const PIXELS = [
  [-3.9, 2.6, -1.4], [-3.1, 3.35, -0.8], [-1.9, 3.6, -1.7], [-0.4, 3.9, -2.1],
  [1.3, 3.5, -1.5], [2.4, 3.9, -2.3], [3.7, 3.0, -1.2], [4.3, 1.6, -1.9],
  [-4.35, -0.6, -1.6], [-3.8, -2.9, -1.3], [1.0, -3.4, -1.8], [2.9, -3.65, -1.1],
  [4.2, -2.4, -1.7], [3.35, -3.15, -2.2], [-1.2, -3.9, -2.4], [0.35, -3.2, -1.2],
]

const PIXEL_COLORS = ['#35b9f0', '#1e7bd6', '#7c4dff', '#a98cff', '#2f9be0']

/* used when no reveal ref is passed: everything visible */
const SHOW_ALL = { left: 1, right: 1 }

function ZKPiece({ data, index }) {
  const mesh = useRef()
  const phase = useMemo(() => index * 1.37, [index])

  const { geometry, center } = useMemo(() => {
    const world = data.pts.map(toWorld)
    const cx = world.reduce((sum, p) => sum + p[0], 0) / world.length
    const cy = world.reduce((sum, p) => sum + p[1], 0) / world.length
    const local = world.map(([x, y]) => [x - cx, y - cy])
    const geo = new THREE.ExtrudeGeometry(roundedShape(local, data.r ?? 0.2), {
      depth: DEPTH,
      bevelEnabled: true,
      bevelThickness: BEVEL,
      bevelSize: BEVEL,
      bevelOffset: -BEVEL, // keeps the outer silhouette exactly on the traced outline
      bevelSegments: 5,
      curveSegments: 10,
    })
    geo.translate(0, 0, -DEPTH / 2)
    return { geometry: geo, center: [cx, cy] }
  }, [data])

  useEffect(() => () => geometry.dispose(), [geometry])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!mesh.current) return
    mesh.current.position.y = center[1] + Math.sin(t * 0.62 + phase) * 0.06
    mesh.current.rotation.z = Math.sin(t * 0.5 + phase) * 0.012
  })

  return (
    <mesh ref={mesh} geometry={geometry} position={[center[0], center[1], data.z]}>
      <meshPhysicalMaterial
        color={data.c}
        roughness={0.22}
        metalness={0.62}
        clearcoat={0.85}
        clearcoatRoughness={0.22}
        envMapIntensity={1.15}
      />
    </mesh>
  )
}

/* floating cubes — each one belongs to the left or right half (by its x position)
   and pops in/out by scaling when that half of the hero is hovered */
function Pixels({ count, reveal }) {
  const group = useRef()
  const vis = useRef({ left: 0, right: 0 }) // smoothed visibility per side
  const items = useMemo(
    () =>
      PIXELS.slice(0, count).map((p, i) => ({
        p,
        size: 0.16 + ((i * 37) % 5) * 0.05,
        color: PIXEL_COLORS[i % PIXEL_COLORS.length],
        phase: i * 0.83,
      })),
    [count]
  )
  useFrame((state, dt) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const target = reveal?.current || SHOW_ALL
    const k = Math.min(1, dt * 5) // lower = slower fade
    vis.current.left += (target.left - vis.current.left) * k
    vis.current.right += (target.right - vis.current.right) * k

    group.current.children.forEach((child, i) => {
      const it = items[i]
      if (!it) return
      const v = it.p[0] < 0 ? vis.current.left : vis.current.right
      child.visible = v > 0.01
      child.scale.setScalar(Math.max(0.0001, v))
      child.position.y = it.p[1] + Math.sin(t * 0.7 + it.phase) * 0.26
      child.position.x = it.p[0] + Math.cos(t * 0.42 + it.phase) * 0.14
      child.rotation.x = t * 0.32 + it.phase
      child.rotation.y = t * 0.24 + it.phase
    })
  })
  return (
    <group ref={group}>
      {items.map((it, i) => (
        <RoundedBox key={i} args={[it.size, it.size, it.size]} radius={0.02} smoothness={2} position={it.p}>
          <meshPhysicalMaterial
            color={it.color}
            roughness={0.2}
            metalness={0.35}
            emissive={it.color}
            emissiveIntensity={0.14}
          />
        </RoundedBox>
      ))}
    </group>
  )
}

/* frame heartbeat — parent uses it to detect a frozen canvas.
   A lost / dead GL context is deliberately NOT reported as a healthy beat. */
function Heartbeat({ onBeat }) {
  const gl = useThree((s) => s.gl)
  useFrame(() => {
    const ctx = gl.getContext?.()
    if (ctx && typeof ctx.isContextLost === 'function' && ctx.isContextLost()) return
    onBeat?.()
  })
  return null
}

/* self-healing GPU context + a renderer that keeps the last frame */
function GlGuard({ onContextLost }) {
  const { gl, invalidate, setFrameloop } = useThree()

  useMemo(() => {
    const canvas = gl.domElement
    const onLost = (e) => {
      // must be prevented so the browser is allowed to restore the context
      e.preventDefault()
      setFrameloop('always')
      onContextLost?.()
    }
    const onRestored = () => {
      gl.resetState?.()
      invalidate?.()
      setFrameloop('always')
    }
    canvas.addEventListener('webglcontextlost', onLost, false)
    canvas.addEventListener('webglcontextrestored', onRestored, false)
    return () => {
      canvas.removeEventListener('webglcontextlost', onLost)
      canvas.removeEventListener('webglcontextrestored', onRestored)
    }
  }, [gl, invalidate, setFrameloop, onContextLost])

  return null
}

/* Pulls the camera back so the whole object fits inside the canvas box,
   whatever size the box is. halfH / halfW = half the object's height / width
   in world units, including breathing room. Bigger numbers = smaller object.
   offsetY > 0 lifts the object up inside the canvas. */
function FitCamera({ halfH = 4.6, halfW = 5.0, offsetY = 0 }) {
  const { camera, size } = useThree()
  useLayoutEffect(() => {
    const aspect = size.width / Math.max(1, size.height)
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
    const z = Math.max(halfH / t, halfW / (t * aspect)) // the tighter axis wins
    camera.position.set(0, -offsetY, z)
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height, halfH, halfW, offsetY])
  return null
}

function Scene({ reduced, active, onBeat, reveal }) {
  const group = useRef()

  useFrame((state, dt) => {
    onBeat?.()
    const g = group.current
    if (!g) return

    const t = state.clock.elapsedTime
    // when the hero is scrolled away we keep rendering, but stop doing work
    if (!active) return

    const scroll =
      typeof window !== 'undefined' ? Math.min(1, window.scrollY / Math.max(1, window.innerHeight)) : 0
    const px = state.pointer.x
    const py = state.pointer.y

    const targetY = reduced ? 0.18 : px * 0.5 + scroll * 0.55
    const targetX = reduced ? 0.06 : -py * 0.22 - scroll * 0.28
    const k = Math.min(1, dt * 2.4)

    g.rotation.y += (targetY - g.rotation.y) * k
    g.rotation.x += (targetX - g.rotation.x) * k
    g.rotation.z += (scroll * 0.14 - g.rotation.z) * k * 0.6
    g.position.y = (reduced ? 0 : Math.sin(t * 0.55) * 0.12) - scroll * 1.1
    g.position.z = -scroll * 2.4
  })

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 6]} intensity={1.15} color="#c9b8ff" />
      <directionalLight position={[-7, -2, -4]} intensity={0.7} color="#2f7fd6" />

      <group ref={group}>
        <Float
          speed={reduced ? 0 : 1.15}
          rotationIntensity={reduced ? 0 : 0.22}
          floatIntensity={reduced ? 0 : 0.5}
        >
          {PIECES.map((d, i) => (
            <ZKPiece key={d.id} data={d} index={i} />
          ))}
        </Float>
        <Pixels count={reduced ? 6 : PIXELS.length} reveal={reveal} />
      </group>

      {/* studio lighting built from lightformers — no external HDR fetch */}
      <Environment resolution={192} frames={1}>
        <color attach="background" args={['#050507']} />
        <Lightformer intensity={2.6} form="rect" color="#a98cff" position={[-5, 4, 4]} scale={[8, 8, 1]} target={[0, 0, 0]} />
        <Lightformer intensity={2} form="rect" color="#35b9f0" position={[5, -3, 3]} scale={[7, 7, 1]} target={[0, 0, 0]} />
        <Lightformer intensity={1.4} form="circle" color="#ffffff" position={[0, 6, -6]} scale={[6, 6, 1]} target={[0, 0, 0]} />
        <Lightformer intensity={0.9} form="rect" color="#ff4a00" position={[-6, -5, -3]} scale={[6, 6, 1]} target={[0, 0, 0]} />
      </Environment>
    </>
  )
}

export function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')))
  } catch {
    return false
  }
}

export default function HeroScene({
  reduced = false,
  quality = 'high',
  active = true,
  reveal,
  onBeat,
  onContextLost,
}) {
  const dpr = quality === 'low' ? [1, 1.25] : [1, 1.75]
  return (
    <Canvas
      /* always — the loop must never stop while the page is on screen */
      frameloop="always"
      dpr={dpr}
      camera={{ position: [0, 0, 9.4], fov: 34, near: 0.1, far: 60 }}
      gl={{
        antialias: quality !== 'low',
        alpha: true,
        powerPreference: 'high-performance',
        /* keeps the last rendered frame on screen even if the loop is throttled */
        preserveDrawingBuffer: true,
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.05
        gl.setClearAlpha(0)
      }}
    >
      <GlGuard onContextLost={onContextLost} />
      <Heartbeat onBeat={onBeat} />
      <FitCamera />
      <Suspense fallback={null}>
        <Scene reduced={reduced} active={active} reveal={reveal} onBeat={onBeat} />
      </Suspense>
    </Canvas>
  )
}