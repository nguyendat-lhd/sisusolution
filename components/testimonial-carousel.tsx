"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCard from "./testimonial-card"

interface TestimonialCarouselProps {
  testimonials: Array<{
    id: string
    content: string
    author: string
    position: string
    company: string
    avatar: string
    rating: number
  }>
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex, testimonials.length])

  return (
    <div className="relative">
      <div className="overflow-hidden py-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex justify-center"
            onHoverStart={() => setAutoplay(false)}
            onHoverEnd={() => setAutoplay(true)}
          >
            <div className="w-full max-w-lg">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}

        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

