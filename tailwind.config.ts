import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // Expanded safelist to ensure critical layout classes are preserved
  safelist: [
    // Grid classes
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "gap-4",
    "gap-6",
    "gap-8",
    "gap-12",

    // Flex classes
    "flex",
    "flex-col",
    "md:flex-row",
    "items-start",
    "items-center",
    "justify-start",
    "justify-center",
    "justify-between",
    "space-x-4",
    "space-y-3",
    "space-y-4",
    "space-y-6",

    // Width and height
    "w-full",
    "max-w-xs",
    "max-w-sm",
    "max-w-md",
    "max-w-lg",
    "max-w-xl",
    "max-w-2xl",
    "max-w-3xl",
    "max-w-4xl",
    "max-w-5xl",
    "max-w-6xl",
    "max-w-7xl",

    // Padding and margin
    "p-4",
    "p-6",
    "p-8",
    "px-4",
    "py-4",
    "py-6",
    "py-8",
    "py-12",
    "py-16",
    "md:px-6",
    "md:py-16",
    "md:py-24",

    // Background colors
    "bg-gray-50",
    "bg-primary",
    "bg-primary/10",

    // Text colors
    "text-primary",
    "text-muted-foreground",
    "text-primary-foreground",

    // Border
    "border-t",

    // Container
    "container",
    "mx-auto",
  ],
  plugins: [require("tailwindcss-animate")],
}

export default config

