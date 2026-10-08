import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { footerLinks, contact, LIVE, heroTicker } from '../data/site'
import Marquee from './Marquee'
import '../styles/Footer.css'

export default function Footer() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer__col h4, .footer__col li',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'zk-expo',
          stagger: 0.03,
          scrollTrigger: {
            trigger: '.footer__top',
            start: 'top 90%',
          },
        }
      )

      gsap.fromTo(
        '.footer__brand > *',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'zk-expo',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.footer__top',
            start: 'top 92%',
          },
        }
      )

      gsap.fromTo(
        '.footer__giant',
        { xPercent: 4 },
        {
          xPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: '.footer__giant',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <footer className="footer" ref={root}>
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/images/zk-logo.webp" alt="ZK Tech Solutions" />

            <p>
              Innovate. Develop. Elevate. A full-stack digital studio building
              web platforms, mobile apps and brand identities since{' '}
              {contact.since}.
            </p>

            <a
              className="footer__cta"
              href={`${LIVE}/pages/about-us.php`}
              data-cursor="about"
              aria-label="About the studio"
            >
              <span className="footer__cta-label">About the studio</span>

              <span className="footer__cta-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
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
              <li>
                <a href={contact.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={contact.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__giant" aria-hidden="true">
          ZK TECH SOLUTIONS
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} ZK Tech Solutions — All rights reserved
          </span>

          <div className="footer__socials">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              @
            </a>
          </div>

          <span className="footer__legal">
            {footerLinks.legal.map((link, index) => (
              <span key={link.label}>
                {index > 0 && <span aria-hidden="true"> · </span>}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </span>

          <span className="footer__location">Richmond, TX — USA</span>
        </div>
      </div>
    </footer>
  )
}