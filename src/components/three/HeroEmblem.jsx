import { useMemo } from 'react'

/**
 * Static, CSS-only version of the hero object.
 * Shown when WebGL is unavailable, when the GPU context can't be recovered,
 * and as the visible layer while the WebGL scene boots.
 * (Also the preferred look when the visitor asked for reduced motion.)
 */
export default function HeroEmblem({ spinning = true }) {
  const pixels = useMemo(
    () =>
      [
        [10, 14, 9, 0.35], [24, 6, 7, 0.5], [40, 22, 11, 0.3], [58, 4, 8, 0.45],
        [72, 24, 10, 0.35], [86, 10, 7, 0.5], [16, 78, 9, 0.4], [34, 90, 12, 0.3],
        [62, 84, 8, 0.45], [80, 68, 11, 0.35], [92, 46, 7, 0.4], [4, 46, 8, 0.3],
      ].map(([x, y, s, o], i) => ({ x, y, s, o, d: i * 0.35 })),
    []
  )

  return (
    <div className="emblem" aria-hidden="true">
      <div className={`emblem__inner ${spinning ? 'is-spinning' : ''}`}>
        <span className="emblem__bar emblem__bar--top" />
        <span className="emblem__bar emblem__bar--mid" />
        <span className="emblem__bar emblem__bar--bot" />
        <span className="emblem__pill emblem__pill--right" />
        <span className="emblem__pill emblem__pill--left" />
        {pixels.map((p, i) => (
          <i
            key={i}
            className="emblem__pixel"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s,
              height: p.s,
              opacity: p.o,
              animationDelay: `${p.d}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}