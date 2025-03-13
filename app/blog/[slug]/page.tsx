import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, Clock, User } from "lucide-react"
import { fetchBlogPostBySlug, fetchBlogPosts } from "@/lib/api"
import { getPlaceholderImage } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Sisu Solution Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex-1">
      <article className="container max-w-4xl px-4 py-12 md:py-20">
        <div className="space-y-4 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage || getPlaceholderImage(1200, 600)}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}

