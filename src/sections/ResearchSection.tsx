import type { ReactNode } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { research, type Publication } from '../data/research'

function RowBody({ pub }: { pub: Publication }) {
  return (
    <>
      <div>
        <div className="work-num">{pub.n}</div>
        <div className="work-meta">
          <span>{pub.type}</span>
          <br />
          <span>{pub.date}</span>
        </div>
      </div>
      <div>
        <div className="work-kicker">{pub.venue}, {pub.location}</div>
        <h3 className="work-title">{pub.title}</h3>
        <p className="work-authors">{pub.authors.join(', ')}</p>
        <br />
        <p className="work-summary">{pub.summary}</p>
        <div className="work-points">
          {pub.highlights.map((point) => (
            <div className="work-point" key={point}>
              {point}
            </div>
          ))}
        </div>
        <ul className="tags">
          {pub.topics.map((t) => (
            <li className="tag" key={t}>
              {t}
            </li>
          ))}
        </ul>
        <br />
        {pub.links.length > 0 ? (
          <ul className="research-links">
            {pub.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}

function ResearchRow({ pub }: { pub: Publication }): ReactNode {
  const primaryHref = pub.links[0]?.href
  if (primaryHref) {
    return (
      <a
        className="work-row work-row--link"
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RowBody pub={pub} />
        <span className="work-row-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    )
  }
  return (
    <div className="work-row">
      <RowBody pub={pub} />
    </div>
  )
}

export function ResearchSection() {
  return (
    <section id="research" className="section section--alt">
      <div className="section-inner">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="section-kicker">Research</div>
            </div>
          </div>
        </Reveal>
        <Reveal stagger>
          {research.map((pub) => (
            <ResearchRow key={pub.title} pub={pub} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
