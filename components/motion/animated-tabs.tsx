"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useMotion } from "@/context/motion-context"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface AnimatedTabsProps {
  tabs: Tab[]
  defaultTabId?: string
  className?: string
}

export default function AnimatedTabs({ tabs, defaultTabId, className = "" }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id)
  const { prefersReducedMotion } = useMotion()

  return (
    <div className={className}>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 relative ${
              activeTab === tab.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && !prefersReducedMotion && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

