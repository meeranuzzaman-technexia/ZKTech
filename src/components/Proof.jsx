  import { useEffect, useRef, useState } from 'react'
  import { gsap } from '../lib/gsap'
  import { splitWords } from '../lib/split'
  import { stats, badges, testimonials, industries } from '../data/site'

  /* SECTION 6 — the receipts: counters, client words, trust badges, industries. */
  export default function Proof() {
    const root = useRef(null)
    const [active, setActive] = useState(0)

    useEffect(() => {
      const ctx = gsap.context(() => {
        const words = splitWords('.proof__title')
        gsap.fromTo(
          words,
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: 'zk-expo',
            stagger: 0.05,
            scrollTrigger: { trigger: '.proof__head', start: 'top 84%' },
          }
        )

        /* counters */
        gsap.utils.toArray('.stat').forEach((stat) => {
          const numEl = stat.querySelector('.stat__num')
          const target = Number(numEl.dataset.value || 0)
          const proxy = { v: 0 }
          gsap.to(proxy, {
            v: target,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: stat, start: 'top 90%' },
            onUpdate: () => {
              numEl.textContent = Math.round(proxy.v)
            },
          })
        })

        gsap.fromTo(
          '.stat',
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'zk-expo',
            stagger: 0.08,
            scrollTrigger: { trigger: '.proof__stats', start: 'top 88%' },
          }
        )

        gsap.fromTo(
          '.badge',
          { opacity: 0, x: -26 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'zk-expo',
            stagger: 0.09,
            scrollTrigger: { trigger: '.badges', start: 'top 88%' },
          }
        )

        gsap.fromTo(
          '.chip',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'zk-expo',
            stagger: 0.025,
            scrollTrigger: { trigger: '.industries', start: 'top 90%' },
          }
        )
      }, root)

      return () => ctx.revert()
    }, [])

    /* auto-rotating testimonial */
    useEffect(() => {
      const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 6500)
      return () => clearInterval(id)
    }, [])

    useEffect(() => {
      gsap.fromTo(
        '.quote__text, .quote__who',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'zk-expo', stagger: 0.06 }
      )
    }, [active])

    const q = testimonials[active]

    return (
      <section className="section proof" id="proof" ref={root}>
        <div className="shell">
          <div className="proof__head" style={{ marginBottom: 'clamp(2rem,4vw,3rem)' }}>
            <span className="kicker">
              Track record <span className="slash">/</span>
            </span>
            <h2 className="proof__title display h2" style={{ marginTop: '1rem' }}>
              Numbers keep score, clients keep coming back
            </h2>
          </div>

          <div className="proof__stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">
                  <span className="stat__num" data-value={s.value}>
                    0
                  </span>
                  <sup>{s.suffix}</sup>
                </div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="proof__grid">
            <div>
              <div className="quote">
                <span className="quote__mark">“</span>
                <p className="quote__text">{q.quote}</p>
                <div>
                  <div className="quote__who">
                    <b>{q.name}</b>
                    <span>— {q.company}</span>
                  </div>
                  <div className="quote__dots">
                    {testimonials.map((t, i) => (
                      <button
                        key={t.company}
                        type="button"
                        className={i === active ? 'is-on' : ''}
                        onClick={() => setActive(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="badges">
                {badges.map((b) => (
                  <div className="badge" key={b.label}>
                    <img src={b.image} alt="" loading="lazy" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="industries">
                {industries.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
