"use client"

import { motion } from "framer-motion"
import { useMotion } from "@/context/motion-context"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export default function AnimatedText({ text, className = "", once = true, delay = 0 }: AnimatedTextProps) {
  const { prefersReducedMotion } = useMotion()

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i,
      },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  if (prefersReducedMotion) {
    return <p className={className}>{text}</p>
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

