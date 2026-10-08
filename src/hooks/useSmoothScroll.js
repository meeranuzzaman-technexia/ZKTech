import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

let lenis = null
export const getLenis = () => lenis

/**
 * Buttery smooth scrolling (Lenis) wired into GSAP's ticker + ScrollTrigger,
 * so pins, scrubs and parallax all stay perfectly in sync.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const instance = new Lenis({
      duration: 1.15,
      lerp: 0.085,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothWheel: true,
      gestureOrientation: 'vertical',
    })
    lenis = instance
    window.__lenis = instance

    instance.on('scroll', ScrollTrigger.update)

    const raf = (time) => instance.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

    return () => {
      gsap.ticker.remove(raf)
      instance.destroy()
      lenis = null
      window.__lenis = null
    }
  }, [])
}

export function scrollToTarget(target, opts = {}) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.5, ...opts })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export function lockScroll(locked) {
  document.body.classList.toggle('is-locked', locked)
  if (lenis) locked ? lenis.stop() : lenis.start()
}
