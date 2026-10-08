import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { scrollToTarget } from '../hooks/useSmoothScroll'

export function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const el = bar.current
    if (!el) return
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => gsap.set(el, { scaleX: self.progress }),
    })
    return () => st.kill()
  }, [])
  return <div className="progress" ref={bar} />
}

export function ToTop() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > window.innerHeight * 1.2)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      type="button"
      className={`to-top ${on ? 'is-on' : ''}`}
      onClick={() => scrollToTarget(0, { duration: 1.6 })}
      aria-label="Back to top"
      data-cursor="top"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 20V4m0 0L5 11m7-7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  )
}
