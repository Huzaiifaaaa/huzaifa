import type { ReactNode } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { certifications, type Certification } from '../data/certifications'

function RowBody({ cert }: { cert: Certification }) {
  return (
    <>
      <div>
        <div className="work-num">{cert.n}</div>
        <div className="work-meta">
          {cert.meta.map((line, i) => (
            <span key={line}>
              {line}
              {i < cert.meta.length - 1 ? <br /> : null}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="work-kicker">{cert.kicker}</div>
        <h3 className="work-title">{cert.title}</h3>
        <div className="work-points">
          {cert.points.map((point) => (
            <div className="work-point" key={point}>
              {point}
            </div>
          ))}
        </div>
        <ul className="tags">
          {cert.tech.map((t) => (
            <li className="tag" key={t}>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function CertRow({ cert }: { cert: Certification }): ReactNode {
  if (cert.href) {
    return (
      <a
        className="work-row work-row--link"
        href={cert.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RowBody cert={cert} />
        <span className="work-row-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    )
  }
  return (
    <div className="work-row">
      <RowBody cert={cert} />
    </div>
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="section-kicker">Certifications</div>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          {certifications.map((cert) => (
            <CertRow key={cert.n} cert={cert} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
