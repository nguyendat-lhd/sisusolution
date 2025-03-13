import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialProps {
  testimonial: {
    id: string
    content: string
    author: string
    position: string
    company: string
    avatar: string
    rating: number
  }
}

function getPlaceholderImage(width: number, height: number): string {
  return `/placeholder.svg?height=${height}&width=${width}`
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="italic text-muted-foreground">{testimonial.content}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar || getPlaceholderImage(40, 40)}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

