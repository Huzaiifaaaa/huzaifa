import { Header } from './components/Header'
import { SiteFooter } from './components/SiteFooter'
import { Hero } from './sections/Hero'
import { WorkSection } from './sections/WorkSection'
import { PathSection } from './sections/PathSection'
import { ResearchSection } from './sections/ResearchSection'
import { ProductSection } from './sections/ProductSection'
import { ContactSection } from './sections/ContactSection'

/** Single-page portfolio: hero → work → path → research → product → contact. */
export function Portfolio() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WorkSection />
        <PathSection />
        <ResearchSection />
        <ProductSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
