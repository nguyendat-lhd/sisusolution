import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    categories: string[]
    slug: string
  }
}

const getPlaceholderImage = (width: number, height: number) => {
  return `/placeholder.svg?height=${height}&width=${width}`
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={project.image || getPlaceholderImage(600, 400)} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">{/* Project details could go here */}</CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/projects/${project.slug}`}>View Case Study</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

