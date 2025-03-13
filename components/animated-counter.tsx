"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const countRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(countRef, { once: true, margin: "-100px" })
  const frameRate = 1000 / 60
  const totalFrames = Math.round(duration * 60)

  useEffect(() => {
    if (!isInView) return

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(from + (to - from) * progress)

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(to)
      } else {
        setCount(currentCount)
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [from, to, totalFrames, isInView])

  return (
    <div ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

