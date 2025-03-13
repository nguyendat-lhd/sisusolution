import { Suspense } from "react"
import type { Metadata } from "next"
import { fetchProjects } from "@/lib/api"
import ProjectCard from "@/components/project-card"
import LoadingSpinner from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Our Projects | Sisu Solution Outsourcing",
  description:
    "Explore our portfolio of successful projects and see how we've helped businesses achieve their goals through outsourcing.",
}

export default async function ProjectsPage() {
  const projects = await fetchProjects()

  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Projects</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore our portfolio of successful projects across various industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<LoadingSpinner />}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}

