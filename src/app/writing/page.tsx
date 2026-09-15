import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { writing } from "@/lib/site"

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical notes by Christianah Adekunle.",
}

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <SectionHeading index="04">Writing</SectionHeading>
      <ul className="divide-y divide-border border-y border-border">
        {writing.map((post) => (
          <li key={post.href} className="flex items-baseline justify-between gap-4 py-4">
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start gap-1 text-sm hover:text-burgundy"
            >
              {post.title}
              <ArrowUpRight className="mt-0.5 size-3.5 shrink-0" />
            </a>
            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              {post.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
