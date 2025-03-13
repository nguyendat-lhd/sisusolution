"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type MotionContextType = {
  prefersReducedMotion: boolean
  toggleReducedMotion: () => void
}

const MotionContext = createContext<MotionContextType | undefined>(undefined)

export function MotionProvider({ children }: { children: ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for user's system preference on mount
  useState(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  })

  const toggleReducedMotion = () => {
    setPrefersReducedMotion((prev) => !prev)
  }

  return (
    <MotionContext.Provider value={{ prefersReducedMotion, toggleReducedMotion }}>{children}</MotionContext.Provider>
  )
}

export function useMotion() {
  const context = useContext(MotionContext)
  if (context === undefined) {
    throw new Error("useMotion must be used within a MotionProvider")
  }
  return context
}

