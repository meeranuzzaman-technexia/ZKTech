import { useRef } from 'react'
import { flushSync } from 'react-dom'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const buttonRef = useRef(null)
  const overlayRef = useRef(null)
  const transitioning = useRef(false)

  const handleToggle = async () => {
    if (transitioning.current) return

    const overlay = overlayRef.current
    const button = buttonRef.current
    if (!overlay || !button || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onToggle()
      return
    }

    transitioning.current = true
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.ceil(Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)))
    const origin = `${x}px ${y}px`
    let switched = false

    overlay.style.visibility = 'visible'
    try {
      await overlay.animate(
        [{ clipPath: `circle(0px at ${origin})` }, { clipPath: `circle(${radius}px at ${origin})` }],
        { duration: 600, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'forwards' },
      ).finished

      overlay.style.clipPath = 'inset(0 0 0 0)'
      overlay.getAnimations().forEach((animation) => animation.cancel())
      flushSync(onToggle)
      switched = true

      await overlay.animate(
        [{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(100% 0 0 0)' }],
        { duration: 650, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'forwards' },
      ).finished
    } catch {
      if (!switched) flushSync(onToggle)
    } finally {
      overlay.getAnimations().forEach((animation) => animation.cancel())
      overlay.style.visibility = 'hidden'
      overlay.style.clipPath = ''
      transitioning.current = false
    }
  }

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
        onClick={handleToggle}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        data-cursor="theme"
      >
        <span className="theme-toggle__inner">
          <span className="theme-toggle__icon" aria-hidden="true">
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19.2 15.9A8 8 0 0 1 8.1 4.8 8 8 0 1 0 19.2 15.9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </span>
          <span className="theme-toggle__label">{theme}</span>
        </span>
      </button>
      <div className="theme-transition" ref={overlayRef} aria-hidden="true" />
    </>
  )
}
