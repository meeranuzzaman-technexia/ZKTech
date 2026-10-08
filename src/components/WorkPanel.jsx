import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { featured, projects } from '../data/site'
import '../styles/WorkPanel.css'

function getProjectTags(project) {
  if (Array.isArray(project.tags) && project.tags.length > 0) {
    return project.tags
  }

  if (project.name === featured.name) {
    return featured.tags
  }

  return (project.category || '').split(' · ').filter(Boolean)
}

function getProjectImages(project) {
  let suppliedImages = []

  if (Array.isArray(project.gallery) && project.gallery.length > 0) {
    suppliedImages = project.gallery
  } else if (Array.isArray(project.images) && project.images.length > 0) {
    suppliedImages = project.images
  } else {
    suppliedImages = [
      project.image ||
        (project.name === featured.name ? featured.cover : null),
    ]
  }

  return suppliedImages
    .filter(Boolean)
    .slice(0, 3)
    .map((item, index) => {
      if (typeof item === 'string') {
        return {
          src: item,
          alt: `${project.name} project preview ${index + 1}`,
        }
      }

      return {
        src: item.src,
        alt: item.alt || `${project.name} project preview ${index + 1}`,
      }
    })
    .filter((image) => image.src)
}

export default function WorkPanel() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      section.querySelectorAll('.work-panel__inner, .work-project__inner').forEach((element) => {
        gsap.fromTo(
          element,
          {
            x: 88,
            y: 38,
            opacity: 0,
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 74% 100%)',
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.2,
            ease: 'zk-expo',
            clearProps: 'transform,opacity,clipPath',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section className="work-panel" id="work" aria-label="Selected projects" ref={sectionRef}>
      <div className="work-panel__inner">
        <div className="work-intro">
          <p className="work-intro__eyebrow">Our Portfolio</p>

          <div className="work-intro__content">
            <h2 className="work-intro__title">
              Boost Your Brand with Exceptional Logos, Web Designs &amp;
              Development Solutions
            </h2>

            <p className="work-intro__description">
              At ZK Tech Solutions, we pride ourselves on technical know-how
              tailored to solve our clients’ consumer engagement agendas.
              Building up from your recognition, we have a solid history of
              designing and developing thousands of logos and websites for
              leaders in their field.
            </p>

            <ul
              className="work-intro__categories"
              aria-label="Portfolio categories"
            >
              <li>Website Development</li>
              <li>Logo Designing</li>
              <li>App Development</li>
              <li>Books &amp; Learning</li>
              <li>Stationery</li>
            </ul>
          </div>
        </div>
      </div>

      {projects.map((project) => {
        const tags = getProjectTags(project)
        const images = getProjectImages(project)
        const location = [project.location, project.year]
          .filter(Boolean)
          .join(' — ')

        return (
          <article
            className="work-project"
            key={project.index || project.name}
          >
            <div className="work-project__inner">
              <div className="work-project__head">
                <div className="work-project__identity">
                  <h3 className="work-project__title">{project.name}</h3>

                  <a
                    className="work-project__link"
                    href={project.href || '#'}
                    aria-label={`View the ${project.name} case study`}
                  >
                    <span>View Case Study</span>
                    <span className="work-project__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>

                <p className="work-project__summary">
                  {project.description}
                </p>

                <div className="work-project__details">
                  <div className="work-project__tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {location && (
                    <span className="work-project__place">{location}</span>
                  )}
                </div>
              </div>

              {images.length > 0 && (
                <div className="work-project__gallery-reveal">
                  <div className="work-project__gallery-inner">
                    <div
                      className={`work-project__gallery work-project__gallery--${images.length}`}
                      role="group"
                      aria-label={`${project.name} project previews`}
                    >
                      {images.map((image, index) => (
                        <figure
                          className={`work-project__frame ${
                            index === 0 ? 'work-project__frame--lead' : ''
                          }`}
                          key={`${project.index || project.name}-${index}`}
                        >
                          <img
                            className="work-project__image"
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        )
      })}
    </section>
  )
}
