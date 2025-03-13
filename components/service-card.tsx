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
      <div className="relative w-full h-48 mb-4">
        <Image
          src={service.icon || getPlaceholderImage(800, 400)}
          alt={service.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 text-sm text-muted-foreground">
          {service.id === "temp-staffing" && (
            <>
              <li>• Quick access to skilled IT professionals</li>
              <li>• Flexible contract durations</li>
              <li>• Immediate project support</li>
            </>
          )}
          {service.id === "permanent-placement" && (
            <>
              <li>• Comprehensive candidate screening</li>
              <li>• Industry-specific expertise</li>
              <li>• Long-term talent solutions</li>
            </>
          )}
          {service.id === "temp-to-hire" && (
            <>
              <li>• Risk-free trial period</li>
              <li>• Performance evaluation</li>
              <li>• Seamless transition to permanent roles</li>
            </>
          )}
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

