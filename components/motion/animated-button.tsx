"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useMotion } from "@/context/motion-context"
import { Slot } from "@radix-ui/react-slot"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  asChild?: boolean
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
  asChild = false,
}: AnimatedButtonProps) {
  const { prefersReducedMotion } = useMotion()
  const Comp = asChild ? Slot : Button

  const buttonVariants = {
    hover: {
      scale: prefersReducedMotion ? 1 : 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: prefersReducedMotion ? 1 : 0.95,
    },
  }

  return (
    <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
      <Comp onClick={onClick} className={className} variant={variant} size={size} disabled={disabled} type={type}>
        {children}
      </Comp>
    </motion.div>
  )
}

