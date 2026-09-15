import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://christianahadekunle.vercel.app"),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  authors: [{ name: site.name, url: site.urls.github }],
  keywords: [
    "Christianah Adekunle",
    "AI engineer",
    "machine learning",
    "FUTA",
    "Nigeria",
    "computer vision",
    "public health ML",
  ],
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    type: "website",
    locale: "en_NG",
    images: [{ url: site.portrait }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    creator: "@luna_is_alleh",
    images: [site.portrait],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: [site.legalName, site.nickname],
  jobTitle: `${site.role}, ${site.employer}`,
  image: site.portrait,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Federal University of Technology, Akure",
  },
  worksFor: {
    "@type": "Organization",
    name: site.employer,
    url: site.urls.veenode,
  },
  sameAs: [
    site.urls.github,
    site.urls.linkedin,
    site.urls.x,
    site.urls.instagram,
    site.urls.hashnode,
    site.urls.kaggle,
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} h-full`}>
      <body className={`${inter.className} flex min-h-full flex-col bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
