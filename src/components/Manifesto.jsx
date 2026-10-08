import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { splitPlainWords } from '../lib/split'
import { manifesto, LIVE } from '../data/site'

/* SECTION 2 — reference image-2: dark statement block, word-by-word
   scroll highlight next to a parallax media panel. */
export default function Manifesto() {
  const root = useRef(null)
  const media = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* media: clip reveal + parallax drift */
      gsap.fromTo(
        media.current,
        { scale: 1.16, yPercent: 6 },
        {
          scale: 1,
          yPercent: 0,
          duration: 1.6,
          ease: 'zk-expo',
          scrollTrigger: { trigger: media.current, start: 'top 88%' },
        }
      )
      gsap.to('.manifesto__media img', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: media.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })

      /* word-by-word highlight on scroll */
      gsap.utils.toArray('.manifesto__line').forEach((line) => {
        const words = splitPlainWords(line)
        gsap.fromTo(
          words,
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.5,
            scrollTrigger: {
              trigger: line,
              start: 'top 84%',
              end: 'bottom 52%',
              scrub: true,
            },
          }
        )
      })

      gsap.fromTo(
        '.manifesto__outro',
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'zk-expo',
          scrollTrigger: { trigger: '.manifesto__outro', start: 'top 88%' },
        }
      )

      gsap.fromTo(
        ['.manifesto__meta > *', '.manifesto__badge'],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          scrollTrigger: { trigger: '.manifesto__meta', start: 'top 92%' },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section manifesto" id="manifesto" ref={root}>
      <div className="shell">
        <div className="manifesto__grid">
          <div className="manifesto__media" ref={media}>
            <img src={manifesto.media} alt="Design and engineering team at work" loading="lazy" />
            <div className="manifesto__badge">
              <i />
              Studio — Richmond, TX
            </div>
          </div>

          <div className="manifesto__copy">
            <span className="kicker">
              {manifesto.kicker} <span className="slash">/</span>
            </span>

            <div className="manifesto__lines">
              {manifesto.lines.map((line, i) => (
                <p className="manifesto__line" key={i}>
                  {line}
                </p>
              ))}
            </div>

            <p className="manifesto__outro">{manifesto.outro}</p>

            <div className="manifesto__meta">
              <span>Positioning</span>
              <span>Design systems</span>
              <span>Engineering</span>
              <span>Growth</span>
              <a className="tlink" href={`${LIVE}/pages/about-us.php`} data-cursor="about">
                More about the studio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
