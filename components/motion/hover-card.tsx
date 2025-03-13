"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useMotion } from "@/context/motion-context"

interface HoverCardProps {
  header?: ReactNode
  content: ReactNode
  footer?: ReactNode
  className?: string
}

export default function HoverCard({ header, content, footer, className = "" }: HoverCardProps) {
  const { prefersReducedMotion } = useMotion()

  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      <Card className="h-full">
        {header && <CardHeader>{header}</CardHeader>}
        <CardContent>{content}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </motion.div>
  )
}

