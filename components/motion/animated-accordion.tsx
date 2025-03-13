"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useMotion } from "@/context/motion-context"

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AnimatedAccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export default function AnimatedAccordion({ items, allowMultiple = false, className = "" }: AnimatedAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])
  const { prefersReducedMotion } = useMotion()

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id))
    } else {
      if (allowMultiple) {
        setOpenItems([...openItems, id])
      } else {
        setOpenItems([id])
      }
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)

        return (
          <div key={item.id} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full p-4 text-left"
            >
              <span className="font-medium">{item.title}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                >
                  <div className="p-4 pt-0 border-t">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

