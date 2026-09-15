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
      <p className="text-sm font-medium tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
        Writing
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Notes from the work
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Longer pieces on Hashnode. The code that backs them lives on GitHub.
      </p>

      <ul className="mt-12 space-y-8">
        {writing.map((post) => (
          <li key={post.href} className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">{post.date}</p>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-start gap-2 text-xl font-semibold tracking-tight hover:underline"
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
