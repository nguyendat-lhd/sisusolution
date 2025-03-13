"use client"

import { useCounter } from "@/hooks/use-counter"

interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const { count, ref } = useCounter(end, start, duration, delay)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

