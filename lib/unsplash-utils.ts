"use server"

import { cache } from "react"

type UnsplashImage = {
  url: string
  alt: string
  photographer: string
  photographerUrl: string
  unsplashUrl: string
}

// Cache the results to avoid hitting rate limits and improve performance
export const getUnsplashImage = cache(async (query: string, width = 800, height = 600): Promise<UnsplashImage> => {
  try {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY
    if (!accessKey) {
      throw new Error("UNSPLASH_ACCESS_KEY is not defined")
    }

    // Build the API URL with query and dimensions
    const apiUrl = "https://api.unsplash.com/photos/random"
    const params = new URLSearchParams({
      client_id: accessKey,
      query: query,
      orientation: width > height ? "landscape" : "portrait",
    })

    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      headers: {
        "Accept-Version": "v1",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    const data = await response.json()

    // Track the download with Unsplash API
    await fetch(data.links.download_location, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })

    return {
      url: `${data.urls.raw}&w=${width}&h=${height}&fit=crop&q=80`,
      alt: data.alt_description || data.description || `Image related to ${query}`,
      photographer: data.user.name,
      photographerUrl: data.user.links.html,
      unsplashUrl: data.links.html,
    }
  } catch (error) {
    console.error("Error fetching Unsplash image:", error)
    // Return a fallback image URL
    return {
      url: `https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=${height}&q=80&w=${width}`,
      alt: `Fallback image for ${query}`,
      photographer: "Unsplash",
      photographerUrl: "https://unsplash.com",
      unsplashUrl: "https://unsplash.com",
    }
  }
})

// Function to get multiple images at once
export const getUnsplashImages = cache(
  async (query: string, count: number, width = 800, height = 600): Promise<UnsplashImage[]> => {
    try {
      const accessKey = process.env.UNSPLASH_ACCESS_KEY
      if (!accessKey) {
        throw new Error("UNSPLASH_ACCESS_KEY is not defined")
      }

      // Build the API URL with query and count
      const apiUrl = "https://api.unsplash.com/photos/random"
      const params = new URLSearchParams({
        client_id: accessKey,
        query: query,
        count: count.toString(),
        orientation: width > height ? "landscape" : "portrait",
      })

      const response = await fetch(`${apiUrl}?${params.toString()}`, {
        headers: {
          "Accept-Version": "v1",
        },
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`)
      }

      const data = await response.json()

      // Process each image
      return data.map((item: any) => {
        // Track the download
        fetch(item.links.download_location, {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }).catch((err) => console.error("Error tracking download:", err))

        return {
          url: `${item.urls.raw}&w=${width}&h=${height}&fit=crop&q=80`,
          alt: item.alt_description || item.description || `Image related to ${query}`,
          photographer: item.user.name,
          photographerUrl: item.user.links.html,
          unsplashUrl: item.links.html,
        }
      })
    } catch (error) {
      console.error("Error fetching multiple Unsplash images:", error)
      // Return fallback images
      return Array(count)
        .fill(null)
        .map((_, i) => ({
          url: `https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=${height}&q=80&w=${width}`,
          alt: `Fallback image ${i + 1} for ${query}`,
          photographer: "Unsplash",
          photographerUrl: "https://unsplash.com",
          unsplashUrl: "https://unsplash.com",
        }))
    }
  },
)

