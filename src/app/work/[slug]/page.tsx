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
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <Link
        href="/work"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All work
      </Link>
      <p className="eyebrow mt-8">
        {project.category} · {project.status}
      </p>
      <h1 className="mt-4 font-heading text-4xl sm:text-5xl">{project.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          nativeButton={false}
          render={<a href={project.github} target="_blank" rel="noreferrer" />}
          variant="outline"
          className="h-11 border-border"
        >
          {project.github.includes("huggingface.co")
            ? "Hugging Face"
            : "GitHub"}{" "}
          <ArrowUpRight />
        </Button>
        {project.live && project.live !== project.github ? (
          <Button
            nativeButton={false}
            render={<a href={project.live} target="_blank" rel="noreferrer" />}
            className="h-11"
          >
            {project.live.includes("huggingface.co") ? "Demo" : "Live demo"}{" "}
            <ArrowUpRight />
          </Button>
        ) : null}
      </div>

      {project.metrics ? (
        <dl className="mt-10 grid grid-cols-3 gap-px bg-border">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="bg-charcoal p-5">
              <dt className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {metric.label}
              </dt>
              <dd className="mt-2 font-heading text-2xl">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <section className="mt-12 space-y-3">
        <h2 className="font-heading text-2xl">The problem</h2>
        <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
      </section>
      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">What I built</h2>
        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-heading text-2xl">Key features</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">Impact</h2>
        <p className="leading-relaxed text-muted-foreground">{project.impact}</p>
      </section>
      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">My role</h2>
        <p className="leading-relaxed text-muted-foreground">{project.role}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-heading text-2xl">Stack</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.stack.join("  ·  ")}
        </p>
      </section>
    </div>
  )
}
