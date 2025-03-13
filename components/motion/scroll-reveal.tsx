"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useMotion } from "@/context/motion-context"

type Direction = "up" | "down" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const { prefersReducedMotion } = useMotion()

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40 }
      case "down":
        return { y: -40 }
      case "left":
        return { x: 40 }
      case "right":
        return { x: -40 }
      case "none":
        return {}
      default:
        return { y: 40 }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

