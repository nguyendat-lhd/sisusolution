import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
    slug: string
  }
}

const getPlaceholderImage = (width: number, height: number) => {
  return `/placeholder.svg?height=${height}&width=${width}`
}

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10">
          <Image src={service.icon || getPlaceholderImage(48, 48)} alt={service.title} width={24} height={24} />
        </div>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <Link href={`/services/${service.slug}`} className="flex items-center text-primary">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

