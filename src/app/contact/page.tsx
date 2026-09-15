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
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <p className="font-mono text-sm text-burgundy">04. Contact</p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl">Get in touch</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The form opens a mail draft. Nothing is stored here.
      </p>

      <div className="mt-10">
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
        <ul className="space-y-4">
          {links.map((item) => (
            <li key={item.href}>
              <p className="font-mono text-xs text-muted-foreground">{item.hint}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm hover:text-burgundy"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
