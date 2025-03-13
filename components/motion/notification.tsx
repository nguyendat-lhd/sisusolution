"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useMotion } from "@/context/motion-context"

interface NotificationProps {
  id: string
  title: string
  message: string
  type?: "info" | "success" | "warning" | "error"
  duration?: number
  onClose: (id: string) => void
}

export default function Notification({
  id,
  title,
  message,
  type = "info",
  duration = 5000,
  onClose,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const { prefersReducedMotion } = useMotion()

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onClose(id)
    }
  }

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-500 text-green-700"
      case "warning":
        return "bg-yellow-50 border-yellow-500 text-yellow-700"
      case "error":
        return "bg-red-50 border-red-500 text-red-700"
      default:
        return "bg-blue-50 border-blue-500 text-blue-700"
    }
  }

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className={`rounded-lg border-l-4 p-4 shadow-md ${getTypeStyles()}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-sm">{message}</p>
            </div>
            <button onClick={handleClose} className="ml-4 inline-flex rounded-md p-1.5 hover:bg-gray-100">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

