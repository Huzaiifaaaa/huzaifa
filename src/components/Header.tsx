import { useEffect, useState } from 'react'
import { CvMenu } from './CvMenu'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#products', label: 'Product' },
  { href: '#research', label: 'Research' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]
const SECTION_IDS = LINKS.map((link) => link.href.slice(1))

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" aria-label="Huzaifa — top" onClick={() => setOpen(false)}>
          {/* <span className="nav-seal" aria-hidden="true">MH</span> */}
          <span className="nav-name">
            Muhammad
            <br />
            Huzaifa
          </span>
        </a>

        <div className="nav-end">
          <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Sections">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeId === link.href.slice(1) ? 'is-active' : ''}`}
                aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CvMenu />
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="nav-menu"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
