import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { splitWords } from '../lib/split'
import { process, awards } from '../data/site'
import Marquee from './Marquee'

/* SECTION 5 — how the work happens. Sticky heading, stepping list. */
export default function Process() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = splitWords('.process__title')
      gsap.fromTo(
        words,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: 'zk-expo',
          stagger: 0.05,
          scrollTrigger: { trigger: '.process__sticky', start: 'top 80%' },
        }
      )

      gsap.fromTo(
        '.process__aside-text',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: { trigger: '.process__sticky', start: 'top 74%' },
        }
      )

      gsap.utils.toArray('.step').forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.32 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              onEnter: () => step.classList.add('is-in'),
            },
          }
        )
        gsap.fromTo(
          step.querySelectorAll('.step__title, .step__body, .step__meta'),
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'zk-expo',
            stagger: 0.06,
            scrollTrigger: { trigger: step, start: 'top 88%' },
          }
        )
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section process" id="process" ref={root}>
      <div className="shell">
        <div className="process__grid">
          <div className="process__sticky">
            <span className="kicker">
              Process <span className="slash">/</span>
            </span>
            <h2 className="process__title display h2">From first call to launch day</h2>
            <p className="process__aside-text lead">
              Timely delivery, incident-free launches and a team that talks in plain language. Average
              first build ships in nine weeks — with 24/7 support and a money-back guarantee behind it.
            </p>
          </div>

          <div className="process__steps">
            {process.map((p) => (
              <article className="step" key={p.step}>
                <span className="step__dot" aria-hidden="true" />
                <span className="step__num">{p.step}</span>
                <div>
                  <h3 className="step__title">{p.title}</h3>
                  <p className="step__body">{p.body}</p>
                  <span className="step__meta">{p.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="awards">
          <Marquee
            items={awards}
            speed={48}
            renderItem={(a) => (
              <span className="awards__item">
                <Spark />
                {a}
              </span>
            )}
          />
        </div>
      </div>
    </section>
  )
}

function Spark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}
