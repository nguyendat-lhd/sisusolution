import { Suspense } from "react"
import type { Metadata } from "next"
import { fetchTeamMembers } from "@/lib/api"
import TeamMemberCard from "@/components/team-member-card"
import LoadingSpinner from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Our Team | Sisu Solution Outsourcing",
  description: "Meet our team of experienced professionals dedicated to delivering exceptional outsourcing services.",
}

export default async function TeamPage() {
  const teamMembers = await fetchTeamMembers()

  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Team</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Meet the experts behind our successful outsourcing services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Suspense fallback={<LoadingSpinner />}>
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}

