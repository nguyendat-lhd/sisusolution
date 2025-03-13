import { Suspense } from "react"
import type { Metadata } from "next"
import { fetchServices } from "@/lib/api"
import ServiceCard from "@/components/service-card"
import LoadingSpinner from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Our Services | Sisu Solution Outsourcing",
  description:
    "Explore our comprehensive range of outsourcing services including software development, QA testing, DevOps, and more.",
}

export default async function ServicesPage() {
  const services = await fetchServices()

  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive outsourcing solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<LoadingSpinner />}>
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}

