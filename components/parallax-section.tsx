"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
}

export default function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className={`py-16 relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-gray-100/50" style={{ y }} />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

