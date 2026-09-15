import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { writing } from "@/lib/site"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical writing by Christianah Adekunle on surveillance models, chess prediction, and marketing analytics.",
}

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <div className="hero-copy">
        <p className="eyebrow">Writing</p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl">
          Notes from the work
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Articles I published. The matching code is on GitHub.
        </p>
      </div>

      <ul className="mt-12 divide-y divide-border border-y border-border">
        {writing.map((post) => (
          <li key={post.href} className="py-8">
            <p className="text-[12px] text-muted-foreground">{post.date}</p>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-start gap-2 font-heading text-2xl hover:text-burgundy"
            >
              {post.title}
              <ArrowUpRight className="mt-1 size-4 shrink-0" />
            </a>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {post.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
