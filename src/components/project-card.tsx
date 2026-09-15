import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/lib/site"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border bg-charcoal px-5 py-3">
        <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          {project.category}
        </p>
        <p className="text-[11px] tracking-[0.14em] text-burgundy uppercase">
          {project.status}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-2xl tracking-tight">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-5 pt-2 text-sm">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-foreground hover:text-burgundy"
          >
            Case study <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            {project.github.includes("huggingface.co")
              ? "Hugging Face"
              : "GitHub"}{" "}
            <ArrowUpRight className="size-4" />
          </a>
          {project.live && project.live !== project.github ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              {project.live.includes("huggingface.co") ? "Demo" : "Live"}{" "}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
