import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPlaceholderImage } from "@/lib/utils"

interface BlogPostProps {
  post: {
    id: string
    title: string
    excerpt: string
    coverImage: string
    date: string
    author: string
    readingTime: number
    slug: string
  }
}

export default function BlogPostCard({ post }: BlogPostProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={post.coverImage || getPlaceholderImage(600, 400)} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">{/* Additional content could go here */}</CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

