import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import { contact, LIVE } from '../data/site'
import '../styles/CTATheme.css'

export default function CTA() {
  const root = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.cta__word .wi')

      gsap.fromTo(
        words,
        { yPercent: 116, rotate: 2 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.35,
          ease: 'zk-expo',
          stagger: 0.045,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 74%',
          },
        }
      )

      gsap.fromTo(
        '.cta__note, .cta__ctas > *',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'zk-expo',
          stagger: 0.08,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 62%',
          },
        }
      )

      gsap.fromTo(
        '.cta__card',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: 'zk-expo',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.cta__cards',
            start: 'top 86%',
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section className="cta" id="contact" ref={root}>
      <div className="shell">
        <span className="kicker">
          Start a project <span className="slash">/</span>
        </span>

        <h2 className="cta__title" style={{ marginTop: '1.2rem' }}>
          <span className="cta__word w">
            <span className="wi">Ready</span>
          </span>{' '}
          <span className="cta__word w">
            <span className="wi">to</span>
          </span>{' '}
          <span className="cta__word w">
            <span className="wi">
              <em>refocus</em>
            </span>
          </span>{' '}
          <span className="cta__word w">
            <span className="wi">on</span>
          </span>{' '}
          <span className="cta__word w">
            <span className="wi">growth?</span>
          </span>
        </h2>

        <div className="cta__grid">
          <div>
            <p className="cta__note lead" style={{ maxWidth: '52ch' }}>
              Tell us what you are building. You will get a reply from a
              strategist — not a bot — within one business day, with a straight
              answer on scope, timeline and budget.
            </p>

            <div
              className="cta__ctas"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginTop: '1.6rem',
              }}
            >
              <a
                className="btn btn--project btn--lg"
                href={`${LIVE}/pages/contact-us.php`}
                data-cursor="contact"
              >
                <span>Book a free consultation</span>
              </a>

              <a
                className="btn btn--lg"
                href={`${LIVE}/pages/pricing.php`}
                data-cursor="pricing"
              >
                <span>See pricing</span>
              </a>
            </div>
          </div>

          <div className="cta__cards">
            <button
              type="button"
              className="cta__card"
              onClick={copy}
              data-cursor={copied ? 'copied' : 'copy'}
            >
              <span>
                <small>Email</small>
                <strong>{contact.email}</strong>
              </span>
              <span className="mono">{copied ? 'Copied ✓' : 'Copy'}</span>
            </button>

            <a
              className="cta__card"
              href={contact.phoneHref}
              data-cursor="call"
            >
              <span>
                <small>Phone</small>
                <strong>{contact.phoneLabel}</strong>
              </span>
              <span className="mono">Call</span>
            </a>

            <a
              className="cta__card"
              href={contact.maps}
              target="_blank"
              rel="noreferrer"
              data-cursor="map"
            >
              <span>
                <small>Studio</small>
                <strong>{contact.address}</strong>
              </span>
              <span className="mono">Map</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}