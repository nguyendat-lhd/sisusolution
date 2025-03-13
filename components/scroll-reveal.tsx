"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const getDirection = () => {
    switch (direction) {
      case "up":
        return { y: 50 }
      case "down":
        return { y: -50 }
      case "left":
        return { x: 50 }
      case "right":
        return { x: -50 }
      default:
        return { y: 50 }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirection(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants}>
      {children}
    </motion.div>
  )
}

