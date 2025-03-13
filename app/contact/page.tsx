import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Sisu Solution Outsourcing",
  description: "Get in touch with our team to discuss your outsourcing needs and how we can help your business grow.",
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Get in touch with our team to discuss your outsourcing needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">US Office</h3>
                    <address className="not-italic text-muted-foreground">
                      5410 Kingsessing Ave
                      <br />
                      Philadelphia, PA 19142
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Vietnam Office</h3>
                    <address className="not-italic text-muted-foreground">
                      LHD TECH
                      <br />4 Binh Loi,
                      <br />
                      Ward 13, Binh Thanh District,
                      <br />
                      HCMC - 717000
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:dat.nguyen@lhd-software.com" className="hover:text-primary">
                        dat.nguyen@lhd-software.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Business Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 aspect-video relative rounded-lg overflow-hidden">
                {/* This would be replaced with an actual map component */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Would Be Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

