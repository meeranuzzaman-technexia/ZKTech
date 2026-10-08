import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { splitWords } from '../lib/split'
import { heroWords, heroIntro, heroTicker, contact, LIVE } from '../data/site'
import { startAmbient, stopAmbient } from '../lib/ambient'
import { scrollToTarget } from '../hooks/useSmoothScroll'
import HeroScene, { isWebGLAvailable } from './three/HeroScene'
import HeroEmblem from './three/HeroEmblem'
import Marquee from './Marquee'
// import '../styles/Hero.css'

const WORD_SPEED = [1.35, 1, 1.2, 0.75]

export default function Hero({ ready, soundOn, onSoundChange }) {
  const root = useRef(null)
  const canvasWrap = useRef(null)
  const railsA = useRef(null)
  const railsB = useRef(null)
  const introRef = useRef(null)

  /* 0..1 per side, read by the 3D scene to show / hide the floating cubes */
  const reveal = useRef({ left: 0, right: 0 })

  const [inView, setInView] = useState(true)
  const [reduced, setReduced] = useState(false)
  const [quality, setQuality] = useState('high')
  const [webgl, setWebgl] = useState(true)

  /* scene health: heartbeat watchdog keeps the 3D object on screen, period */
  const [sceneKey, setSceneKey] = useState(0)
  const [sceneAlive, setSceneAlive] = useState(false) // first healthy frame flips this on
  const lastBeat = useRef(performance.now())
  const recovering = useRef(false)
  const remounts = useRef(0)
  const aliveRef = useRef(false)
  const canvasFaded = useRef(false)

  const onBeat = useCallback(() => {
    lastBeat.current = performance.now()
    if (!aliveRef.current) {
      aliveRef.current = true
      setSceneAlive(true)
    }
  }, [])

  /* ---------- device capability ---------- */
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const small = window.innerWidth < 900
    const cores = navigator.hardwareConcurrency || 4
    setQuality(small || cores <= 4 ? 'low' : 'high')
    setWebgl(isWebGLAvailable())
  }, [])

  /* ---------- GPU context died: cover with the emblem and rebuild the scene ---------- */
  const remountScene = useCallback(() => {
    aliveRef.current = false
    setSceneAlive(false)
    if (remounts.current >= 2) return // emblem stays — never a blank hero
    remounts.current += 1
    recovering.current = true
    window.setTimeout(() => {
      lastBeat.current = performance.now()
      setSceneKey((k) => k + 1)
      window.setTimeout(() => {
        recovering.current = false
      }, 3000)
    }, 700)
  }, [])

  /* ---------- watchdog: if the canvas stops drawing, remount it ---------- */
  useEffect(() => {
    if (!webgl) return
    const id = window.setInterval(() => {
      if (document.hidden || !inView) return
      const canvasEl = canvasWrap.current?.querySelector('canvas')
      let contextLost = false
      try {
        const ctx = canvasEl?.getContext('webgl2') || canvasEl?.getContext('webgl')
        contextLost = !!ctx?.isContextLost?.()
      } catch {
        contextLost = false
      }
      const age = performance.now() - lastBeat.current
      if ((contextLost || age > 2600) && !recovering.current) remountScene()
    }, 1200)
    return () => window.clearInterval(id)
  }, [webgl, inView, remountScene])

  /* ---------- keep ScrollTrigger honest on tab/size changes ---------- */
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    const onVisibility = () => {
      if (!document.hidden) {
        // coming back from a hidden tab: nudge the scene so it repaints
        lastBeat.current = performance.now()
        ScrollTrigger.refresh()
      }
    }
    window.addEventListener('resize', refresh)
    window.addEventListener('orientationchange', refresh)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('resize', refresh)
      window.removeEventListener('orientationchange', refresh)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  /* ---------- pause the *animation work* (never the renderer) ---------- */
  useEffect(() => {
    const el = root.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => setInView(entries[0].isIntersecting), {
      threshold: 0.02,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* ---------- entrance (waits for the preloader) ---------- */
  useLayoutEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.hero__word')
      const introLines = splitWords(introRef.current)
      const tl = gsap.timeline({ defaults: { ease: 'zk-expo' } })

      tl.fromTo('.hero__bg', { opacity: 0 }, { opacity: 1, duration: 1.4 }, 0)
        .fromTo(
          words,
          { opacity: 0, yPercent: 120, filter: 'blur(12px)' },
          { opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: 1.5, stagger: 0.11, clearProps: 'filter' },
          0.35
        )
        .fromTo('.hero__sound', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.9 }, 1.1)
        .fromTo(introLines, { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.035 }, 0.75)
        .fromTo('.hero__name', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 0.7)
        .fromTo(
          ['.hero__ctas > *', '.hero__rail > *', '.hero__stats > *'],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.08 },
          0.95
        )
        .fromTo('.ticker', { opacity: 0 }, { opacity: 1, duration: 1 }, 1.1)
    }, root)
    return () => ctx.revert()
  }, [ready])

  /* ---------- hand-off: fade the live 3D canvas in over the CSS emblem ---------- */
  useEffect(() => {
    if (!ready || !webgl || !sceneAlive || canvasFaded.current) return
    canvasFaded.current = true
    const tween = gsap.fromTo(
      canvasWrap.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 1.6, ease: 'zk-expo', clearProps: 'filter' }
    )
    return () => tween.kill()
  }, [ready, webgl, sceneAlive])

  /* ---------- scroll parallax ---------- */
  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.hero__word')
      words.forEach((el, i) => {
        gsap.to(el, {
          y: () => -180 * WORD_SPEED[i % WORD_SPEED.length],
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
      })
      /* the object only drifts — never fades out while the hero is still on screen */
      gsap.to(canvasWrap.current, {
        y: -110,
        scale: 0.92,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to(railsA.current, {
        yPercent: -14,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to(railsB.current, {
        yPercent: 10,
        xPercent: -4,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero__foot', {
        y: -40,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: '60% top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [ready])

  /* ---------- pointer parallax on the floating words ---------- */
  useEffect(() => {
    if (!ready || reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const words = gsap.utils.toArray('.hero__word')
    const setters = words.map((el) => ({
      x: gsap.quickTo(el, 'x', { duration: 1.1, ease: 'power3.out' }),
      r: gsap.quickTo(el, 'rotation', { duration: 1.4, ease: 'power3.out' }),
    }))
    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      setters.forEach((s, i) => {
        const f = WORD_SPEED[i % WORD_SPEED.length]
        s.x(-nx * 70 * f)
        s.r(-nx * 2.4 * f)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [ready, reduced])

  /* ---------- hover reveal: left half shows left words + cubes + bg glow, right half shows right ---------- */
  useEffect(() => {
    if (!ready) return

    // no hover (touch devices): show everything
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      reveal.current.left = 1
      reveal.current.right = 1
      return
    }

    const section = root.current
    const rails = Array.from(section.querySelectorAll('.hero__rails'))
    const words = gsap.utils.toArray('.hero__word')
    let sides = []
    let current = null

    // smooth pointer: mousemove only stores the position; one rAF loop does all the work
    const ptr = { x: 0, y: 0, has: false }
    const target = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }
    let raf = 0

    // which side of the stage each word sits on (offset-based, so parallax transforms don't matter)
    const measure = () => {
      sides = words.map((el) => {
        const parentW = el.offsetParent?.clientWidth || window.innerWidth
        return el.offsetLeft + el.offsetWidth / 2 < parentW / 2 ? 'left' : 'right'
      })
    }

    const apply = (side) => {
      if (side === current) return
      current = side
      words.forEach((el, i) => el.classList.toggle('is-revealed', side !== null && sides[i] === side))
      reveal.current.left = side === 'left' ? 1 : 0
      reveal.current.right = side === 'right' ? 1 : 0
      section.dataset.side = side || '' // data attribute so React re-renders can't wipe it
    }

    const tick = () => {
      raf = 0
      const r = section.getBoundingClientRect()
      const inside = ptr.has && ptr.y >= r.top && ptr.y <= r.bottom
      apply(inside ? (ptr.x < window.innerWidth / 2 ? 'left' : 'right') : null)
      if (inside) {
        target.x = ptr.x / window.innerWidth - 0.5
        target.y = (ptr.y - r.top) / r.height - 0.5
      }
      // ease toward the pointer (this is what makes the glow feel smooth)
      cur.x += (target.x - cur.x) * 0.14
      cur.y += (target.y - cur.y) * 0.14
      // write ONLY to the two rails elements, not the whole hero subtree
      rails.forEach((el) => {
        el.style.setProperty('--mx', cur.x.toFixed(4))
        el.style.setProperty('--my', cur.y.toFixed(4))
      })
      const settled = Math.abs(target.x - cur.x) < 0.0008 && Math.abs(target.y - cur.y) < 0.0008
      if (!settled) raf = requestAnimationFrame(tick)
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      ptr.x = e.clientX
      ptr.y = e.clientY
      ptr.has = true
      schedule()
    }
    const onLeave = () => {
      ptr.has = false
      schedule()
    }

    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      words.forEach((el) => el.classList.remove('is-revealed'))
      section.dataset.side = ''
    }
  }, [ready])

  const toggleSound = () => {
    if (soundOn) {
      stopAmbient()
      onSoundChange(false)
    } else {
      startAmbient()
      onSoundChange(true)
    }
  }

  return (
    <section className={`hero ${webgl && sceneAlive ? 'has-scene' : ''}`} id="home" ref={root}>
      <div className="hero__bg">
        <div className="hero__glow" />
        <div className="hero__rails" ref={railsA} />
        <div className="hero__rails hero__rails--b" ref={railsB} />
      </div>

      <div className="hero__stage">
        {/* CSS emblem: visible while the GPU scene boots, and whenever it can't run */}
        <HeroEmblem spinning={!reduced} />

        <div className={`hero__canvas ${webgl && sceneAlive ? '' : 'is-dead'}`} ref={canvasWrap}>
          {webgl && (
            <HeroScene
              key={sceneKey}
              reduced={reduced}
              quality={quality}
              active={inView}
              reveal={reveal}
              onBeat={onBeat}
              onContextLost={remountScene}
            />
          )}
        </div>

        {heroWords.map((w, i) => (
          <div className={`hero__word ${w.pos}`} key={w.label}>
            <span>{w.label}</span>
            <small>0{i + 1} — service</small>
          </div>
        ))}

        <button
          type="button"
          className={`hero__sound ${soundOn ? 'is-gone' : ''}`}
          onClick={toggleSound}
          data-cursor="sound"
        >
          <SoundGlyph on={soundOn} />
          {soundOn ? 'Sound on' : 'Click to enable sound'}
        </button>
      </div>

      <div className="hero__foot shell">
        <div className="hero__foot-grid">
          <p className="hero__intro" ref={introRef}>
            <b>ZK Tech Solutions</b> is the studio founders call when their brand and website need to
            catch up to the business they are building.
          </p>

          <div className="hero__ctas">
            <a className="btn btn--solid" href={`${LIVE}/pages/contact-us.php`} data-cursor="let's talk">
              <span>Start a project</span>
            </a>
            <button type="button" className="btn" onClick={() => scrollToTarget('#work')} data-cursor="scroll">
              <span>See our work</span>
            </button>
            <button type="button" className="btn" onClick={toggleSound}>
              <span>{soundOn ? 'Mute' : 'Enable sound'}</span>
            </button>
          </div>
        </div>

        <div className="hero__rail">
          <button type="button" className="hero__scroll" onClick={() => scrollToTarget('#manifesto')}>
            <i />
            Scroll to explore
          </button>
          <div className="hero__stats">
            <div className="hero__stat">
              <b>400+</b>
              <span>Projects ordered</span>
            </div>
            <div className="hero__stat">
              <b>Since 1999</b>
              <span>Building online</span>
            </div>
            <div className="hero__stat">
              <b>24/7</b>
              <span>Support desk</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <Marquee items={heroTicker} speed={55} renderItem={(item) => <span className="ticker__item">{item}</span>} />
      </div>
    </section>
  )
}

function SoundGlyph({ on }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9h3l4.5-3.5v13L7 15H4V9Z" fill="currentColor" />
      {on ? (
        <path
          d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path d="m16 9.5 5 5m0-5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  )
}