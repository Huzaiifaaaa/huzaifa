import { useEffect, useState } from 'react'

/** Tracks which of the given section ids is currently in view, for nav scroll-spy. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      // Thin horizontal band near vertical-center of the viewport: whichever
      // section's boundary crosses it becomes active, so exactly one wins.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
