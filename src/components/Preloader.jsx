import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { lockScroll } from '../hooks/useSmoothScroll'
import '../styles/Preloader.css'
/* A tiny dark-purple ball drops onto a black screen, bounces 7 times, and on the final
   touch it bursts into a soft purple glow that melts into the hero.
   Everything animates with transform + opacity only (GPU), no particles, no giant scaled layers. */

const BOUNCE_COUNT = 7 // how many bounces
const BOUNCE_DECAY = 0.6 // each bounce is 60% as high as the one before (first = 50% of the drop)
const DROP_TIME = 0.55 // seconds for the first fall (bigger = slower everything)
const GROUND = 0.72 // ground line position, fraction of screen height (matches `top: 72%` in the CSS)

/* Lenis' own easing curve (easeOutExpo) — same feel as the page scroll */
const LENIS_EASE = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

const BOUNCES = Array.from({ length: BOUNCE_COUNT }, (_, i) => 0.5 * Math.pow(BOUNCE_DECAY, i))

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const ball = useRef(null)
  const shadow = useRef(null)
  const ground = useRef(null)
  const ring = useRef(null)
  const glow = useRef(null)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    const el = root.current
    if (!el) return

    /* hold the page still (Lenis + body) while the loader plays */
    window.scrollTo(0, 0)
    lockScroll(true)

    let finished = false
    let fade = null
    const finish = (skipRefresh = false) => {
      if (finished) return
      finished = true
      lockScroll(false) // Lenis starts again as the hero eases in
      if (!skipRefresh) ScrollTrigger.refresh()
      doneRef.current?.()
    }

    /* reduced motion: skip the show */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const t = gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          el.style.display = 'none'
          finish()
        },
      })
      return () => {
        t.kill()
        lockScroll(false)
      }
    }

    const ctx = gsap.context(() => {
      const H = el.clientHeight
      const ballEl = ball.current
      const size = ballEl.offsetWidth
      const floorY = H * GROUND - size // ball's y when it rests on the ground
      const startY = -size * 2 // parked above the top edge
      const fall = floorY - startY

      gsap.set(ballEl, { y: startY, transformOrigin: '50% 100%' })
      gsap.set(ring.current, { scale: 0, opacity: 0 })
      gsap.set(glow.current, { scale: 0.15, opacity: 0 })
      gsap.set(shadow.current, { opacity: 0 })

      /* the shadow squeezes and fades as the ball rises */
      let bursting = false
      const tl = gsap.timeline({
        onUpdate: () => {
          if (bursting) return
          const y = gsap.getProperty(ballEl, 'y')
          const k = 1 - Math.max(0, Math.min(1, (floorY - y) / fall))
          gsap.set(shadow.current, { scaleX: 0.3 + 0.7 * k, opacity: 0.1 + 0.9 * k })
        },
      })

      tl.fromTo(ground.current, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power3.out' }, 0)

      /* squash on every touch */
      const squash = (t, recover = true) => {
        tl.to(ballEl, { scaleY: 0.72, scaleX: 1.22, duration: 0.06, ease: 'power1.out' }, t)
        if (recover) tl.to(ballEl, { scaleY: 1, scaleX: 1, duration: 0.12, ease: 'power2.out' }, t + 0.06)
      }

      /* drop */
      let t = 0.3
      tl.to(ballEl, { y: floorY, duration: DROP_TIME, ease: 'power2.in' }, t)
      t += DROP_TIME

      /* 7 bounces — the last touch is the burst */
      BOUNCES.forEach((ratio, i) => {
        const last = i === BOUNCES.length - 1
        const d = DROP_TIME * Math.sqrt(ratio) // smaller bounce = shorter hang time
        squash(t)
        tl.to(ballEl, { y: floorY - fall * ratio, duration: d, ease: 'power2.out' }, t)
        tl.to(ballEl, { y: floorY, duration: d, ease: 'power2.in' }, t + d)
        t += d * 2
        if (last) squash(t, false)
      })
      const tb = t // the final touch

      /* ---------- BURST: a soft glow blooms from the impact point ---------- */
      tl.add(() => {
        bursting = true
      }, tb)
      tl.to(shadow.current, { opacity: 0, duration: 0.5, ease: 'sine.out' }, tb)
      tl.to(ballEl, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.in' }, tb + 0.06)

      // thin shockwave ring
      tl.fromTo(
        ring.current,
        { scale: 0, opacity: 0.9 },
        { scale: 1, opacity: 0, duration: 1.3, ease: LENIS_EASE },
        tb + 0.06
      )

      // glow: fades in and grows from the impact point (opacity + scale only)
      tl.to(glow.current, { opacity: 1, duration: 0.55, ease: 'sine.out' }, tb + 0.1)
      tl.to(glow.current, { scale: 2.4, duration: 1.3, ease: LENIS_EASE }, tb + 0.1)

      /* ---------- smooth hand-off to the hero ----------
         1. glow has bloomed -> do the heavy layout work now (hidden)
         2. hand control to the hero (React re-render + entrance setup = one-frame hitch, hidden too)
         3. only AFTER two painted frames start the dissolve, so the fade never skips ahead */
      tl.add(() => ScrollTrigger.refresh(), tb + 0.65)
      tl.add(() => {
        finish(true)
        el.style.pointerEvents = 'none'
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            fade = gsap.to(el, {
              opacity: 0,
              duration: 1.7,
              ease: 'power2.inOut',
              onComplete: () => {
                el.style.display = 'none'
              },
            })
          })
        )
      }, tb + 0.2)
    }, root)

    // hard safety: never trap the visitor behind the loader
    const failsafe = window.setTimeout(() => {
      finish()
      gsap.set(el, { autoAlpha: 0, pointerEvents: 'none' })
    }, 12000)

    return () => {
      window.clearTimeout(failsafe)
      fade?.kill()
      ctx.revert()
      lockScroll(false)
    }
  }, [])

  return (
    <div className="drop-loader" ref={root} aria-hidden="true">
      <div className="drop-loader__glow" ref={glow} />
      <div className="drop-loader__ground" ref={ground} />
      <div className="drop-loader__shadow" ref={shadow} />
      <div className="drop-loader__ball" ref={ball} />
      <i className="drop-loader__ring" ref={ring} />
    </div>
  )
}