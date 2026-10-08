import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { LIVE, contact, navLinks, menuServices, menuCompany } from '../data/site'
import { lockScroll, scrollToTarget } from '../hooks/useSmoothScroll'

export default function Nav({ soundOn, onSoundChange, onToggleSound }) {
  const bar = useRef(null)
  const menu = useRef(null)
  const menuTl = useRef(null)
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)

  /* sticky + hide-on-scroll-down */
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setStuck(y > 40)
      const el = bar.current
      if (el && !open) {
        if (y > last + 6 && y > 260) el.classList.add('is-hidden')
        else if (y < last - 6) el.classList.remove('is-hidden')
      }
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  /* open / close timeline */
  useEffect(() => {
    const el = menu.current
    if (!el) return

    if (!menuTl.current) {
      gsap.set('.menu__link span', { yPercent: 120 })
      gsap.set('.menu__side > *', { opacity: 0, y: 24 })
      gsap.set('.menu__foot', { opacity: 0 })

      menuTl.current = gsap
        .timeline({ paused: true, defaults: { ease: 'zk-expo' } })
        .to(el, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.95 }, 0)
        .to('.menu__bg', { opacity: 1, duration: 1.4 }, 0.05)
        .to('.menu__link span', { yPercent: 0, duration: 1.05, stagger: 0.07 }, 0.28)
        .to('.menu__side > *', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.5)
        .to('.menu__foot', { opacity: 1, duration: 0.7 }, 0.7)
    }

    open ? menuTl.current.timeScale(1).play() : menuTl.current.timeScale(1.7).reverse()
    lockScroll(open)
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (href) => (e) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setOpen(false)
      setTimeout(() => scrollToTarget(href), 450)
    }
  }

  return (
    <>
      <header className={`nav ${stuck ? 'is-stuck' : ''}`} ref={bar}>
        <div className="nav__left">
          <button type="button" className="btn" onClick={() => setOpen((v) => !v)} data-cursor={open ? 'close' : 'menu'}>
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
          {/* <span className="nav__avail">
            <i />
            Available for new projects
          </span> */}
        </div>

        <div className="nav__center">
          <a
            className="nav__logo"
            href="#home"
            onClick={go('#home')}
            aria-label="ZK Tech Solutions — home"
            data-cursor="top"
          >
            <img className="nav__mark" src="/images/zk-mark.webp" alt="" />
            <span className="nav__wordmark">
              ZK Tech <em>Solutions</em>
            </span>
          </a>
        </div>

        <div className="nav__right">
          <button
            type="button"
            className="btn"
            onClick={onToggleSound}
            aria-pressed={soundOn}
            data-cursor={soundOn ? 'mute' : 'sound'}
          >
            <span>{soundOn ? 'Sound on' : 'Sound off'}</span>
          </button>
          <a className="btn btn--solid" href={`${LIVE}/pages/contact-us.php`} data-cursor="contact">
            <span>Contact</span>
          </a>
        </div>
      </header>

      <aside className="menu" ref={menu} aria-hidden={!open}>
        <div className="menu__bg" />
        <div className="menu__grid">
          <nav className="menu__links">
            {navLinks.map((l, i) => (
              <a className="menu__link" key={l.label} href={l.href} onClick={go(l.href)}>
                <span>{l.label}</span>
                <small>{String(i + 1).padStart(2, '0')}</small>
              </a>
            ))}
          </nav>

          <div className="menu__side">
            <div className="menu__block">
              <h4>Services</h4>
              <ul>
                {menuServices.map((s) => (
                  <li key={s.label}>
                    <a href={s.href}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu__block">
              <h4>Studio</h4>
              <ul>
                {menuCompany.map((s) => (
                  <li key={s.label}>
                    <a href={s.href}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu__block">
              <h4>Get in touch</h4>
              <ul>
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <a href={contact.phoneHref}>{contact.phoneLabel}</a>
                </li>
                <li>
                  <a href={contact.maps} target="_blank" rel="noreferrer">
                    {contact.address}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="menu__foot">
          <span>ZK Tech Solutions — Innovate. Develop. Elevate.</span>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <span>Est. {contact.since}</span>
        </div>
      </aside>
    </>
  )
}
