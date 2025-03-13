"use client"

import type { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export default function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

