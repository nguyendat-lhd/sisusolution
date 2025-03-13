"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { useMotion } from "@/context/motion-context"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const { prefersReducedMotion } = useMotion()

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={prefersReducedMotion ? {} : "hidden"}
        animate={prefersReducedMotion ? {} : "enter"}
        exit={prefersReducedMotion ? {} : "exit"}
        variants={variants}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.3,
        }}
        className="min-h-[calc(100vh-4rem)]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

