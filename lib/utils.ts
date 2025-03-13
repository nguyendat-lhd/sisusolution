import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPlaceholderImage(width: number, height: number, text?: string) {
  // For production, use a more reliable placeholder service
  return `https://placehold.co/${width}x${height}/F4F4F5/A1A1AA${text ? `?text=${encodeURIComponent(text)}` : ""}`
}

