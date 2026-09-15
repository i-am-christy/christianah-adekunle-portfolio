import Link from "next/link"
import { Mail } from "lucide-react"

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons"
import { site } from "@/lib/site"

const socials = [
  { href: site.urls.github, label: "GitHub", icon: GitHubIcon },
  { href: site.urls.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: site.urls.x, label: "X", icon: XIcon },
  { href: site.urls.instagram, label: "Instagram", icon: InstagramIcon },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-heading text-lg text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} · {site.employer}
          </p>
          <a
            href={site.resume}
            download="Christianah-Adekunle-Resume.pdf"
            className="mt-2 inline-block text-sm text-burgundy hover:underline"
          >
            Download resume
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <item.icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
