import { unstable_cache } from "next/cache"
import { getPlaceholderImage } from "@/lib/utils"

// Types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  categories: string[]
  slug: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

export interface Testimonial {
  id: string
  content: string
  author: string
  position: string
  company: string
  avatar: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: string
  readingTime: number
  slug: string
}

// Fetch functions with caching
export const fetchCompanyData = unstable_cache(
  async () => {
    try {
      // In a real implementation, this would fetch from lhd-software.com
      // For now, we'll return mock data
      return {
        services: mockServices,
        projects: mockProjects,
        testimonials: mockTestimonials,
      }
    } catch (error) {
      console.error("Error fetching company data:", error)
      return {
        services: [],
        projects: [],
        testimonials: [],
      }
    }
  },
  ["company-data"],
  { revalidate: 3600 }, // Revalidate every hour
)

export const fetchServices = unstable_cache(
  async () => {
    try {
      // In a real implementation, this would fetch from lhd-software.com
      return mockServices
    } catch (error) {
      console.error("Error fetching services:", error)
      return []
    }
  },
  ["services"],
  { revalidate: 3600 },
)

export const fetchProjects = unstable_cache(
  async () => {
    try {
      // In a real implementation, this would fetch from lhd-software.com
      return mockProjects
    } catch (error) {
      console.error("Error fetching projects:", error)
      return []
    }
  },
  ["projects"],
  { revalidate: 3600 },
)

export const fetchTeamMembers = unstable_cache(
  async () => {
    try {
      // In a real implementation, this would fetch from lhd-software.com
      return mockTeamMembers
    } catch (error) {
      console.error("Error fetching team members:", error)
      return []
    }
  },
  ["team-members"],
  { revalidate: 3600 },
)

export const fetchBlogPosts = unstable_cache(
  async () => {
    try {
      // In a real implementation, this would fetch from lhd-software.com
      return mockBlogPosts
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      return []
    }
  },
  ["blog-posts"],
  { revalidate: 3600 },
)

export const fetchBlogPostBySlug = unstable_cache(
  async (slug: string) => {
    try {
      // In a real implementation, this would fetch from lhd-software.com
      return mockBlogPosts.find((post) => post.slug === slug) || null
    } catch (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error)
      return null
    }
  },
  ["blog-post"],
  { revalidate: 3600 },
)

// Mock data (in a real implementation, this would come from lhd-software.com)
const mockServices: Service[] = [
  {
    id: "1",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    icon: getPlaceholderImage(48, 48),
    slug: "software-development",
  },
  {
    id: "2",
    title: "Web Development",
    description: "Responsive and user-friendly web applications.",
    icon: getPlaceholderImage(48, 48),
    slug: "web-development",
  },
  {
    id: "3",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    icon: getPlaceholderImage(48, 48),
    slug: "mobile-development",
  },
  {
    id: "4",
    title: "QA & Testing",
    description: "Comprehensive quality assurance and testing services.",
    icon: getPlaceholderImage(48, 48),
    slug: "qa-testing",
  },
  {
    id: "5",
    title: "DevOps Services",
    description: "Streamline your development and operations processes.",
    icon: getPlaceholderImage(48, 48),
    slug: "devops",
  },
  {
    id: "6",
    title: "IT Consulting",
    description: "Expert advice on technology strategy and implementation.",
    icon: getPlaceholderImage(48, 48),
    slug: "it-consulting",
  },
]

const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A comprehensive e-commerce solution for a retail client.",
    image: getPlaceholderImage(600, 400),
    categories: ["Web Development", "E-commerce"],
    slug: "e-commerce-platform",
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description: "A secure platform for managing patient data and appointments.",
    image: getPlaceholderImage(600, 400),
    categories: ["Software Development", "Healthcare"],
    slug: "healthcare-management-system",
  },
  {
    id: "3",
    title: "Fintech Mobile App",
    description: "A mobile banking application with advanced security features.",
    image: getPlaceholderImage(600, 400),
    categories: ["Mobile Development", "Fintech"],
    slug: "fintech-mobile-app",
  },
  {
    id: "4",
    title: "Supply Chain Management",
    description: "An end-to-end solution for tracking and managing supply chains.",
    image: getPlaceholderImage(600, 400),
    categories: ["Software Development", "Logistics"],
    slug: "supply-chain-management",
  },
  {
    id: "5",
    title: "Real Estate Platform",
    description: "A platform connecting property buyers, sellers, and agents.",
    image: getPlaceholderImage(600, 400),
    categories: ["Web Development", "Real Estate"],
    slug: "real-estate-platform",
  },
  {
    id: "6",
    title: "Educational Learning System",
    description: "An interactive learning platform for schools and universities.",
    image: getPlaceholderImage(600, 400),
    categories: ["Software Development", "Education"],
    slug: "educational-learning-system",
  },
]

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Smith",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in software development and IT consulting.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "john@lhd-software.com",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "CTO",
    bio: "Expert in software architecture and emerging technologies.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sarah@lhd-software.com",
  },
  {
    id: "3",
    name: "Michael Chen",
    position: "Lead Developer",
    bio: "Specializes in full-stack development and cloud solutions.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    email: "michael@lhd-software.com",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    position: "UX/UI Designer",
    bio: "Creates intuitive and engaging user experiences for web and mobile applications.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "emily@lhd-software.com",
  },
  {
    id: "5",
    name: "David Kim",
    position: "Project Manager",
    bio: "Experienced in managing complex software projects and client relationships.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    email: "david@lhd-software.com",
  },
  {
    id: "6",
    name: "Lisa Wang",
    position: "QA Lead",
    bio: "Ensures the highest quality standards for all software deliverables.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    email: "lisa@lhd-software.com",
  },
  {
    id: "7",
    name: "Robert Taylor",
    position: "DevOps Engineer",
    bio: "Specializes in CI/CD pipelines and cloud infrastructure.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    email: "robert@lhd-software.com",
  },
  {
    id: "8",
    name: "Jennifer Lee",
    position: "Marketing Director",
    bio: "Drives brand awareness and lead generation for the company.",
    image: getPlaceholderImage(300, 400),
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "jennifer@lhd-software.com",
  },
]

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    content:
      "Working with Sisu Solution has been a game-changer for our business. Their team delivered a high-quality solution on time and within budget.",
    author: "Mark Wilson",
    position: "CTO",
    company: "TechCorp Inc.",
    avatar: getPlaceholderImage(40, 40),
    rating: 5,
  },
  {
    id: "2",
    content:
      "The expertise and professionalism of the Sisu Solution team exceeded our expectations. They truly understood our business needs.",
    author: "Jessica Brown",
    position: "CEO",
    company: "Innovate Solutions",
    avatar: getPlaceholderImage(40, 40),
    rating: 5,
  },
  {
    id: "3",
    content:
      "We've been working with Sisu Solution for over three years now, and they continue to be our trusted technology partner.",
    author: "Thomas Clark",
    position: "Product Manager",
    company: "Global Retail",
    avatar: getPlaceholderImage(40, 40),
    rating: 4,
  },
  {
    id: "4",
    content:
      "Their attention to detail and commitment to quality is impressive. The mobile app they developed for us has received excellent user feedback.",
    author: "Amanda Martinez",
    position: "Marketing Director",
    company: "HealthPlus",
    avatar: getPlaceholderImage(40, 40),
    rating: 5,
  },
  {
    id: "5",
    content:
      "Sisu Solution helped us modernize our legacy systems, resulting in significant improvements in efficiency and cost savings.",
    author: "Richard Thompson",
    position: "IT Director",
    company: "Finance Group",
    avatar: getPlaceholderImage(40, 40),
    rating: 4,
  },
]

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Benefits of IT Outsourcing for Small Businesses",
    excerpt: "Discover how small businesses can leverage IT outsourcing to compete with larger enterprises.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverImage: getPlaceholderImage(600, 400),
    date: "2023-05-15",
    author: "John Smith",
    readingTime: 5,
    slug: "benefits-it-outsourcing-small-businesses",
  },
  {
    id: "2",
    title: "How to Choose the Right Outsourcing Partner",
    excerpt: "Key factors to consider when selecting an outsourcing partner for your next project.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverImage: getPlaceholderImage(600, 400),
    date: "2023-06-22",
    author: "Sarah Johnson",
    readingTime: 7,
    slug: "choose-right-outsourcing-partner",
  },
  {
    id: "3",
    title: "The Future of Software Development: Trends to Watch",
    excerpt: "Explore the emerging trends that will shape the future of software development.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverImage: getPlaceholderImage(600, 400),
    date: "2023-07-10",
    author: "Michael Chen",
    readingTime: 6,
    slug: "future-software-development-trends",
  },
  {
    id: "4",
    title: "Agile vs. Waterfall: Choosing the Right Methodology",
    excerpt: "A comparison of two popular software development methodologies and when to use each.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverImage: getPlaceholderImage(600, 400),
    date: "2023-08-05",
    author: "David Kim",
    readingTime: 8,
    slug: "agile-vs-waterfall-methodology",
  },
  {
    id: "5",
    title: "Cybersecurity Best Practices for Outsourced Projects",
    excerpt: "Essential security measures to protect your data when working with outsourcing partners.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverImage: getPlaceholderImage(600, 400),
    date: "2023-09-18",
    author: "Lisa Wang",
    readingTime: 6,
    slug: "cybersecurity-best-practices-outsourced-projects",
  },
  {
    id: "6",
    title: "How Digital Transformation is Reshaping Industries",
    excerpt: "Explore how businesses across various sectors are embracing digital transformation.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    coverImage: getPlaceholderImage(600, 400),
    date: "2023-10-30",
    author: "Jennifer Lee",
    readingTime: 5,
    slug: "digital-transformation-reshaping-industries",
  },
]

