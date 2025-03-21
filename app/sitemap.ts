import type { MetadataRoute } from "next"
import { fetchBlogPosts, fetchProjects, fetchServices } from "@/lib/api"

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sisusolution.com"

  // Get dynamic routes
  const services = await fetchServices()
  const projects = await fetchProjects()
  const blogPosts = await fetchBlogPosts()

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.7,
    },
  ]

  // Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.6,
  }))

  // Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.6,
  }))

  // Blog post routes
  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogPostRoutes]
}

