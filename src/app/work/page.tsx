import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { competitions, projects } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work",
  description: "Selected machine learning projects by Christianah Adekunle.",
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <SectionHeading index="03">Work</SectionHeading>
      <p className="mb-10 max-w-xl text-muted-foreground">
        One-line notes. Code and write-ups live on GitHub.
      </p>

      <ol>
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr]"
          >
            <p className="font-mono text-sm text-burgundy">
              {String(index + 1).padStart(2, "0")}.
            </p>
            <div>
              <h2 className="font-heading text-xl">{project.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.summary}
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {project.stack.slice(0, 6).join("  ·  ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link href={`/work/${project.slug}`} className="hover:text-burgundy">
                  Overview
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-burgundy"
                >
                  GitHub <ArrowUpRight className="size-3.5" />
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-burgundy"
                  >
                    Live <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-16">
        <p className="font-mono text-sm text-burgundy">Also on GitHub</p>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {competitions.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between gap-4 py-3 text-sm hover:text-burgundy"
              >
                <span>{item.title}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
