import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/** Custom cursor: dot + ring that morphs into a labelled pill on interactive elements. */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    document.body.classList.add('has-cursor')

    const ringEl = ring.current
    const dotEl = dot.current
    const xTo = gsap.quickTo(ringEl, 'x', { duration: 0.52, ease: 'power3.out' })
    const yTo = gsap.quickTo(ringEl, 'y', { duration: 0.52, ease: 'power3.out' })
    const dxTo = gsap.quickTo(dotEl, 'x', { duration: 0.12, ease: 'power2.out' })
    const dyTo = gsap.quickTo(dotEl, 'y', { duration: 0.12, ease: 'power2.out' })

    const onMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      dxTo(e.clientX)
      dyTo(e.clientY)
    }

    const isInteractive = (t) =>
      t.closest(
        'a, button, [data-cursor], input, textarea, select, .svc, .work__card, .chip, .badge, .menu__link'
      )

    const onOver = (e) => {
      const hit = isInteractive(e.target)
      if (!hit) return
      const text = hit.dataset?.cursor || (hit.tagName === 'A' && hit.target === '_blank' ? 'open' : '')
      if (label.current) label.current.textContent = text || 'view'
      ringEl.classList.toggle('is-hover', true)
      gsap.to(dotEl, { scale: 0.4, duration: 0.3 })
    }
    const onOut = (e) => {
      if (!isInteractive(e.target)) return
      ringEl.classList.remove('is-hover')
      gsap.to(dotEl, { scale: 1, duration: 0.3 })
    }
    const onDown = () => gsap.to(ringEl, { scale: 0.86, duration: 0.25 })
    const onUp = () => gsap.to(ringEl, { scale: 1, duration: 0.3 })
    const onLeave = () => gsap.to('.cursor', { opacity: 0, duration: 0.3 })
    const onEnter = () => gsap.to('.cursor', { opacity: 1, duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__ring" ref={ring}>
        <span className="cursor__label" ref={label} />
      </div>
      <div className="cursor__dot" ref={dot} />
    </div>
  )
}
