"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMotion } from "@/context/motion-context"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const { prefersReducedMotion } = useMotion()

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 200 * speed])

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </section>
  )
}

