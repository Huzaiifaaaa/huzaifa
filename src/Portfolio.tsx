import { Header } from './components/Header'
import { SiteFooter } from './components/SiteFooter'
import { StatsBar } from './components/StatsBar'
import { Hero } from './sections/Hero'
import { WorkSection } from './sections/WorkSection'
import { PathSection } from './sections/PathSection'
import { ResearchSection } from './sections/ResearchSection'
import { ProductSection } from './sections/ProductSection'
import { ContactSection } from './sections/ContactSection'

/** Single-page sumi-e portfolio: hero → stats → work → path → research → product → contact. */
export function Portfolio() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <StatsBar />
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
