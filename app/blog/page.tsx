import { Suspense } from "react"
import type { Metadata } from "next"
import { fetchBlogPosts } from "@/lib/api"
import BlogPostCard from "@/components/blog-post-card"
import LoadingSpinner from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Blog | Sisu Solution Outsourcing",
  description: "Stay updated with the latest insights, trends, and news in the outsourcing industry.",
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
            <Suspense fallback={<LoadingSpinner />}>
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}

