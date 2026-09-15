import type { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.name} at ${site.email}.`,
}

const links = [
  { href: `mailto:${site.email}`, label: site.email, hint: "Email" },
  {
    href: site.urls.linkedin,
    label: "linkedin.com/in/christianah-adekunle",
    hint: "LinkedIn",
  },
  { href: site.urls.github, label: "github.com/i-am-christy", hint: "GitHub" },
  {
    href: site.urls.hashnode,
    label: "i-am-christy.hashnode.dev",
    hint: "Blog",
  },
  { href: site.urls.kaggle, label: "kaggle.com/techrookie", hint: "Profile" },
  {
    href: site.urls.huggingface,
    label: "huggingface.co/spaces/AllehellA/nigerian-speech-to-sign",
    hint: "Demo",
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 lg:px-8">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl">Get in touch</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Open roles, research collaborations, and product work. The form opens a
        mail draft to {site.email} — nothing is stored on this site.
      </p>
      <div className="mt-8">
        <Button
          nativeButton={false}
          render={
            <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
          }
          variant="outline"
          className="h-11 border-burgundy px-6 text-burgundy hover:bg-burgundy hover:text-white"
        >
          Download resume
        </Button>
      </div>

      <div className="mt-12 grid gap-12 border-t border-border pt-12 lg:grid-cols-2">
        <ContactForm />
        <div>
          <p className="eyebrow">Direct</p>
          <ul className="mt-6 space-y-5">
            {links.map((item) => (
              <li key={item.href}>
                <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {item.hint}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-sm font-medium hover:text-burgundy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
