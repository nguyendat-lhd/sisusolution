"use client"

import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"
import { useMotion } from "@/context/motion-context"

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

export default function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const { prefersReducedMotion } = useMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className={className}>
      {children}
    </motion.div>
  )
}

