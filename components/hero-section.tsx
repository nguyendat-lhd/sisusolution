import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center bg-cover bg-center" 
      style={{ backgroundImage: 'url("/assets/hero-screen.jpg")' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-[640px]">
          <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-white mb-4 backdrop-blur-sm">
            Trusted by Global Companies
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-lg">
            Transform Your Business with <span className="text-primary drop-shadow-lg">Expert Outsourcing</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-[600px] mb-8 drop-shadow-md">
            Accelerate your growth with our professional development teams. From custom software to digital
            transformation, we deliver solutions that drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white text-lg"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Added stats section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-gray-300">Expert Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

