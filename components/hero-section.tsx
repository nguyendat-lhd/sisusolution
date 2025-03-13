import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvin-meyer-SYTO3xs06fU-unsplash.jpg-8Q24LV9NUqp2aA6MwpM9nktsEFFvTV.jpeg"
          alt="Modern collaborative workspace with laptops and devices"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with slightly different gradient for better readability with this image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-[640px]">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-white mb-4">
            Trusted by Global Companies
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Transform Your Business with <span className="text-primary">Expert Outsourcing</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-[600px] mb-8">
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

