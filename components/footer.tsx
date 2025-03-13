import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t w-full">
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 1rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First column - Company Info */}
          <div>
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold">Sisu Solution</span>
              </Link>
              <p className="text-muted-foreground mb-4">
                Empowering businesses through innovative software solutions. We deliver excellence in outsourcing services with a focus on quality, efficiency, and customer satisfaction.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Second column - Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Third column - Services */}
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/services/software-development" className="text-muted-foreground hover:text-primary">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-muted-foreground hover:text-primary">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/qa-testing" className="text-muted-foreground hover:text-primary">
                  QA & Testing
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-muted-foreground hover:text-primary">
                  DevOps Services
                </Link>
              </li>
              <li>
                <Link href="/services/it-consulting" className="text-muted-foreground hover:text-primary">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth column - Contact Us */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">US Office</p>
                  <address className="not-italic text-muted-foreground">
                    5410 Kingsessing Ave
                    <br />
                    Philadelphia, PA 19142
                  </address>
                </div>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Vietnam Office</p>
                  <address className="not-italic text-muted-foreground">
                    4 Binh Loi, Ward 13, <br />
                    Binh Thanh District, HCMC
                    
                  </address>
                </div>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:dat.nguyen@lhd-software.com" className="text-muted-foreground hover:text-primary">
                  dat.nguyen@lhd-software.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary">
                  +84 0906.339.495
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            marginTop: "3rem",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sisu Solution. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}