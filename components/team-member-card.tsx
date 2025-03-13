import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  member: {
    id: string
    name: string
    position: string
    bio: string
    image: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

const getPlaceholderImage = (width: number, height: number) => {
  return `/placeholder.svg?height=${height}&width=${width}`
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src={member.image || getPlaceholderImage(300, 400)} alt={member.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.position}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        {member.linkedin && (
          <Button variant="ghost" size="icon" asChild>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        )}
        {member.twitter && (
          <Button variant="ghost" size="icon" asChild>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        )}
        {member.email && (
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${member.email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

