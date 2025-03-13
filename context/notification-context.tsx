"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { v4 as uuidv4 } from "uuid"
import Notification from "@/components/motion/notification"

type NotificationType = "info" | "success" | "warning" | "error"

interface NotificationItem {
  id: string
  title: string
  message: string
  type: NotificationType
  duration: number
}

interface NotificationContextType {
  notifications: NotificationItem[]
  showNotification: (title: string, message: string, type?: NotificationType, duration?: number) => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])

  const showNotification = (title: string, message: string, type: NotificationType = "info", duration = 5000) => {
    const id = uuidv4()
    setNotifications((prev) => [...prev, { id, title, message, type, duration }])
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, removeNotification }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-4 w-80">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            title={notification.title}
            message={notification.message}
            type={notification.type}
            duration={notification.duration}
            onClose={removeNotification}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider")
  }
  return context
}

