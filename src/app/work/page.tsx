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
    <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
      <p className="text-sm font-medium tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
        Work
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Building solutions
        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          {" "}
          that matter
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        From exam proctoring to outbreak surveillance. Each project is a
        commitment to a real constraint — a camera, a cooperative ledger, a
        household survey — not a toy dataset.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight">Competitions</h2>
        <p className="mt-2 text-muted-foreground">
          Timed, public, and judged. The notebooks are on GitHub.
        </p>
        <ul className="mt-8 divide-y divide-border rounded-2xl border border-border">
          {competitions.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-muted/50 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
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
