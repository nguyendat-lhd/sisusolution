import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { fetchBlogPosts } from "@/lib/api"
import { getPlaceholderImage } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog | Sisu Solution",
  description: "Read our latest blog posts and insights",
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts()
  
  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Insights, trends, and news from the outsourcing industry
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group relative flex flex-col space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage || getPlaceholderImage(800, 450)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                  <span className="sr-only">View {post.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

