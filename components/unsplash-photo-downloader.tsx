"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Download, ImageIcon, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { getRandomPhoto, type UnsplashActionResult } from "@/lib/actions/unsplash-actions"
import Image from "next/image"

const formSchema = z.object({
  query: z.string().optional(),
})

export default function UnsplashPhotoDownloader() {
  const [isLoading, setIsLoading] = useState(false)
  const [photoResult, setPhotoResult] = useState<UnsplashActionResult | null>(null)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const result = await getRandomPhoto(values.query)
      setPhotoResult(result)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to download photo",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error in photo download:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Unsplash Random Photo Downloader</CardTitle>
          <CardDescription>Download random photos from Unsplash and store them in your gallery</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Search Term (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. nature, technology, office" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a search term to find specific photos, or leave empty for completely random photos
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Get Random Photo
                  </>
                )}
              </Button>
            </form>
          </Form>

          {photoResult?.photo && (
            <div className="mt-8 space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden border">
                <Image
                  src={photoResult.photo.url || "/placeholder.svg"}
                  alt={photoResult.photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                Photo by{" "}
                <a
                  href={photoResult.photo.photographerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {photoResult.photo.photographer}
                </a>{" "}
                on{" "}
                <a
                  href={photoResult.photo.unsplashUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Unsplash
                </a>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => form.handleSubmit(onSubmit)()}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Get Another Photo
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/unsplash-gallery">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    View Gallery
                  </a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Photos provided by Unsplash API. Please respect the Unsplash license and attribution requirements.
        </CardFooter>
      </Card>
    </div>
  )
}

