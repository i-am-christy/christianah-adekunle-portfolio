import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/site"

const accents: Record<string, string> = {
  testa: "from-cyan-500 via-blue-600 to-indigo-700",
  signbridge: "from-violet-500 via-purple-600 to-fuchsia-600",
  "cooperative-rl": "from-emerald-500 via-teal-600 to-cyan-700",
  "malaria-prediction": "from-rose-500 via-orange-500 to-amber-500",
  "lassa-surveillance": "from-sky-500 via-blue-600 to-slate-700",
  "crypto-recommender": "from-amber-400 via-orange-500 to-yellow-600",
  "lead-pipeline": "from-slate-500 via-blue-600 to-cyan-500",
  "co2-emissions": "from-lime-500 via-green-600 to-emerald-700",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div
        className={`h-36 bg-gradient-to-br ${accents[project.slug] ?? "from-cyan-500 via-blue-600 to-purple-600"}`}
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.category}</Badge>
          <Badge variant="secondary">{project.status}</Badge>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-foreground hover:underline"
          >
            Case study <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            GitHub <ArrowUpRight className="size-4" />
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              Live <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
