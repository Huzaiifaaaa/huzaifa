import { Header } from './components/Header'
import { SiteFooter } from './components/SiteFooter'
import { Hero } from './sections/Hero'
import { WorkSection } from './sections/WorkSection'
import { PathSection } from './sections/PathSection'
import { ContactSection } from './sections/ContactSection'

/** Single-page sumi-e portfolio: hero → work → pond → path → lab → voices → contact. */
export function Portfolio() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WorkSection />
        <PathSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
