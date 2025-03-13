"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: number
  color?: string
  className?: string
}

export default function LoadingSpinner({ size = 40, color = "currentColor", className = "" }: LoadingSpinnerProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `4px solid ${color}`,
          borderTopColor: "transparent",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}

