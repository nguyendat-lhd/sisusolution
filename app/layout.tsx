import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { MotionProvider } from "@/context/motion-context"
import { NotificationProvider } from "@/context/notification-context"
import PageTransition from "@/components/motion/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sisu Solution - Professional Outsourcing Services",
    template: "%s | Sisu Solution",
  },
  description: "Expert software development and IT outsourcing services for businesses of all sizes.",
  keywords: ["outsourcing", "software development", "IT services", "web development", "mobile development"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: "100vh", width: "100%" }}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionProvider>
            <NotificationProvider>
              <div
                style={{
                  display: "flex",
                  minHeight: "100vh",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Header />
                <PageTransition>{children}</PageTransition>
                <Footer />
              </div>
            </NotificationProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'