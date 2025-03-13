import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { fetchCompanyData } from "@/lib/api"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import ScrollReveal from "@/components/motion/scroll-reveal"
import StaggerContainer from "@/components/motion/stagger-container"
import StaggerItem from "@/components/motion/stagger-item"
import AnimatedButton from "@/components/motion/animated-button"
import AnimatedText from "@/components/motion/animated-text"
import ParallaxSection from "@/components/motion/parallax-section"

export const metadata = {
  title: "Sisu Solution - Professional Outsourcing Services",
  description:
    "Expert software development and IT outsourcing services for businesses of all sizes. Discover how our dedicated teams can accelerate your digital transformation.",
}

export default async function Home() {
  const { services, projects, testimonials } = await fetchCompanyData()

  const featuredProjects = projects.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <main className="flex-1">
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
              <AnimatedText
                text="IT Staffing Solutions"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              />
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We connect top IT talent with leading companies through flexible staffing solutions.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <ServiceCard
                service={{
                  id: "temp-staffing",
                  title: "Temporary Staffing",
                  description: "Flexible IT talent solutions for short-term projects and immediate needs",
                  icon: "/assets/temporary-staffing.webp",
                  slug: "temporary-staffing"
                }}
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                service={{
                  id: "permanent-placement",
                  title: "Permanent Placement",
                  description: "Find the perfect full-time IT professionals for your organization",
                  icon: "/assets/permanent-placement.jpeg",
                  slug: "permanent-placement"
                }}
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                service={{
                  id: "temp-to-hire",
                  title: "Temp-To-Hire",
                  description: "Evaluate talent through temporary assignments before making a permanent commitment",
                  icon: "/assets/temp-to-hire.jpg",
                  slug: "temp-to-hire"
                }}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Projects</div>
              <AnimatedText
                text="Featured Projects"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              />
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our successful projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex justify-center mt-10">
            <AnimatedButton asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ParallaxSection className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                  Why Choose Our Outsourcing Services?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Dedicated teams of experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Flexible engagement models tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Transparent communication and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Cost-effective solutions without compromising quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0" />
                    <span>Proven track record of successful projects</span>
                  </li>
                </ul>
                <AnimatedButton variant="secondary" className="mt-8" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </AnimatedButton>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <AnimatedText
                text="What Our Clients Say"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              />
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from businesses that have transformed their operations with our outsourcing services.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal direction="up">
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <AnimatedText
                text="Ready to Accelerate Your Business Growth?"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              />
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Let's discuss how our outsourcing services can help you achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <AnimatedButton size="lg" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}

