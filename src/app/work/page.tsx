import type { Metadata } from "next"

import { ProjectCard } from "@/components/project-card"
import { competitions, projects } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Machine learning and AI systems by Christianah Adekunle — computer vision, public health, reinforcement learning, and data products.",
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 lg:px-8">
      <div className="hero-copy">
        <p className="eyebrow">Work</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl sm:text-5xl">
          Building solutions that matter
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From exam proctoring to outbreak surveillance. Each project is a
          commitment to a real constraint — a camera, a cooperative ledger, a
          household survey — not a toy dataset.
        </p>
      </div>

      <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.slug} className="bg-background">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <section className="mt-20">
        <p className="eyebrow">GitHub</p>
        <h2 className="mt-4 font-heading text-3xl">Competition and task repos</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Public repositories under github.com/i-am-christy. These are personal
          submissions and notebooks, not organisational affiliations.
        </p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {competitions.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-1 py-5 hover:text-burgundy sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-heading text-xl">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.note}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{item.year}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
