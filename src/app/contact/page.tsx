import type { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"
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
    hint: "Writing",
  },
  { href: site.urls.kaggle, label: "kaggle.com/techrookie", hint: "Kaggle" },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
      <p className="text-sm font-medium tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Open roles, research collaborations, and product work. The form opens a
        mail draft to {site.email} — nothing is stored on this site.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <ContactForm />
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Direct
          </h2>
          <ul className="mt-4 space-y-4">
            {links.map((item) => (
              <li key={item.href}>
                <p className="text-xs text-muted-foreground">{item.hint}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-sm font-medium underline-offset-4 hover:underline"
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
