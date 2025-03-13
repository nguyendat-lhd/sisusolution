import type { Metadata } from "next"
import UnsplashPhotoDownloader from "@/components/unsplash-photo-downloader"

export const metadata: Metadata = {
  title: "Unsplash Gallery | Sisu Solution",
  description: "Download and store random photos from Unsplash",
}

export default async function UnsplashGalleryPage() {
  // In a real implementation, you would fetch stored photos here
  // const { photos } = await listStoredPhotos();

  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Unsplash Gallery</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Download random photos from Unsplash and build your collection
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <UnsplashPhotoDownloader />

          {/* In a future implementation, you would display the gallery of stored photos here */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Your Photo Gallery</h2>
            <p className="text-muted-foreground">
              Photos you download will appear here. Start by downloading your first photo above!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

