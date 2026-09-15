import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getProject, projects } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) {
    return { title: "Project" }
  }
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pt-28 pb-20 lg:px-8">
      <Link
        href="/work"
        className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Work
      </Link>
      <p className="mt-8 font-mono text-sm text-burgundy">{project.category}</p>
      <h1 className="mt-3 font-heading text-4xl">{project.title}</h1>
      <p className="mt-4 text-muted-foreground">{project.summary}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          nativeButton={false}
          render={<a href={project.github} target="_blank" rel="noreferrer" />}
          className="h-11"
        >
          GitHub <ArrowUpRight />
        </Button>
        {project.live ? (
          <Button
            nativeButton={false}
            render={<a href={project.live} target="_blank" rel="noreferrer" />}
            variant="outline"
            className="h-11 border-border"
          >
            Live <ArrowUpRight />
          </Button>
        ) : null}
      </div>

      {project.metrics ? (
        <dl className="mt-10 grid grid-cols-3 gap-px bg-border">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="bg-charcoal p-4">
              <dt className="font-mono text-[11px] text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="mt-1 font-heading text-xl">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
        {project.problem} {project.description}
      </p>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        {project.stack.join("  ·  ")}
      </p>
      <p className="mt-8 text-sm text-muted-foreground">
        Full write-up and setup:{" "}
        <a
          href={project.github}
          className="text-foreground underline-offset-4 hover:text-burgundy hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {project.github.replace("https://", "")}
        </a>
      </p>
    </div>
  )
}
