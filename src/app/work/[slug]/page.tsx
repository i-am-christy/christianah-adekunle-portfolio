import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
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
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <Link
        href="/work"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All work
      </Link>
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge variant="outline">{project.category}</Badge>
        <Badge variant="secondary">{project.status}</Badge>
      </div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          nativeButton={false}
          render={
            <a href={project.github} target="_blank" rel="noreferrer" />
          }
          variant="outline"
          className="h-10"
        >
          GitHub <ArrowUpRight />
        </Button>
        {project.live ? (
          <Button
            nativeButton={false}
            render={<a href={project.live} target="_blank" rel="noreferrer" />}
            className="h-10"
          >
            Live demo <ArrowUpRight />
          </Button>
        ) : null}
      </div>

      {project.metrics ? (
        <dl className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-border p-6">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-xs text-muted-foreground">{metric.label}</dt>
              <dd className="mt-1 text-xl font-semibold">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">The problem</h2>
        <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">What I built</h2>
        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Key features</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Impact</h2>
        <p className="leading-relaxed text-muted-foreground">{project.impact}</p>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">My role</h2>
        <p className="leading-relaxed text-muted-foreground">{project.role}</p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}
