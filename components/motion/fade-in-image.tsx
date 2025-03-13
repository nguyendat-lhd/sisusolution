"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMotion } from "@/context/motion-context"

interface FadeInImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function FadeInImage({ src, alt, width, height, className = "" }: FadeInImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { prefersReducedMotion } = useMotion()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isLoaded ? 1 : 0,
      }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className={`relative ${className}`}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className="object-cover"
      />
    </motion.div>
  )
}

