"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Define the response schema for type safety
const UnsplashPhotoSchema = z.object({
  id: z.string(),
  urls: z.object({
    raw: z.string().url(),
    full: z.string().url(),
    regular: z.string().url(),
    small: z.string().url(),
    thumb: z.string().url(),
  }),
  alt_description: z.string().nullable(),
  description: z.string().nullable(),
  user: z.object({
    name: z.string(),
    username: z.string(),
    links: z.object({
      html: z.string().url(),
    }),
  }),
  links: z.object({
    download: z.string().url(),
    download_location: z.string().url(),
  }),
})

type UnsplashPhoto = z.infer<typeof UnsplashPhotoSchema>

export type UnsplashActionResult = {
  success: boolean
  message: string
  photo?: {
    id: string
    url: string
    blurDataUrl?: string
    alt: string
    photographer: string
    photographerUrl: string
    unsplashUrl: string
  }
  error?: string
}

export async function getRandomPhoto(query?: string): Promise<UnsplashActionResult> {
  try {
    // Validate environment variable
    const accessKey = process.env.UNSPLASH_ACCESS_KEY
    if (!accessKey) {
      throw new Error("UNSPLASH_ACCESS_KEY environment variable is not set")
    }

    // Build the API URL
    const apiUrl = "https://api.unsplash.com/photos/random?"
    const params = new URLSearchParams({
      client_id: accessKey,
    })

    if (query) {
      params.append("query", query)
    }

    // Fetch random photo from Unsplash
    const response = await fetch(`${apiUrl}${params.toString()}`, {
      headers: {
        "Accept-Version": "v1",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Unsplash API error: ${response.status} ${errorData.errors?.[0] || response.statusText}`)
    }

    const data = await response.json()

    // Validate the response data
    const validatedData = UnsplashPhotoSchema.parse(data)

    // Download the image
    const imageResponse = await fetch(validatedData.urls.regular)
    if (!imageResponse.ok) {
      throw new Error("Failed to download image from Unsplash")
    }

    const imageBlob = await imageResponse.blob()

    // Create a unique filename
    const filename = `unsplash-${validatedData.id}-${Date.now()}.jpg`

    // Upload to Vercel Blob
    const { url } = await put(filename, imageBlob, {
      access: "public",
      contentType: imageBlob.type,
    })

    // Track the download with Unsplash API
    await fetch(validatedData.links.download_location, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })

    // Revalidate the path to show the new image
    revalidatePath("/unsplash-gallery")

    return {
      success: true,
      message: "Photo downloaded and stored successfully",
      photo: {
        id: validatedData.id,
        url: url,
        alt: validatedData.alt_description || validatedData.description || "Unsplash photo",
        photographer: validatedData.user.name,
        photographerUrl: validatedData.user.links.html,
        unsplashUrl: `https://unsplash.com/photos/${validatedData.id}`,
      },
    }
  } catch (error) {
    console.error("Error fetching random photo:", error)
    return {
      success: false,
      message: "Failed to fetch and store random photo",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

export async function listStoredPhotos() {
  // This would be implemented to list photos from your storage
  // For now, we'll return a placeholder
  return {
    success: true,
    message: "Photos retrieved successfully",
    photos: [],
  }
}

