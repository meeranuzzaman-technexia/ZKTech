import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Infinite marquee — the track holds the items twice, we translate exactly
 * half of the scrollWidth and loop. Speed is px/second.
 */
export default function Marquee({ items, speed = 60, className = '', renderItem }) {
  const track = useRef(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    let tween
    const raf = requestAnimationFrame(() => {
      const half = el.scrollWidth / 2
      if (!half) return
      gsap.set(el, { x: 0 })
      tween = gsap.to(el, { x: -half, duration: half / speed, ease: 'none', repeat: -1 })
    })
    return () => {
      cancelAnimationFrame(raf)
      tween?.kill()
    }
  }, [speed, items])

  const list = [...items, ...items]

  return (
    <div className={`marquee ${className}`}>
      <div className="marquee__track" ref={track}>
        {list.map((item, i) => (
          <div className="marquee__group" key={i}>
            {renderItem ? renderItem(item, i) : <span>{typeof item === 'string' ? item : item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
