"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { useMotion } from "@/context/motion-context"

export function useCounter(end: number, start = 0, duration = 2000, delay = 0) {
  const [count, setCount] = useState(start)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true })
  const { prefersReducedMotion } = useMotion()

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setCount(end)
      return
    }

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp + delay
      }

      const elapsed = timestamp - startTimestamp

      if (elapsed >= 0) {
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(progress * (end - start) + start))
      }

      if (elapsed < duration) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [start, end, duration, delay, isInView, prefersReducedMotion])

  return { count, ref: nodeRef }
}

