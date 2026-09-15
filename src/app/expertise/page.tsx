import type { Metadata } from "next"
import {
  AudioLines,
  Brain,
  Eye,
  HeartPulse,
  Workflow,
} from "lucide-react"

import { expertise, projects } from "@/lib/site"

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Predictive modelling, computer vision, public health ML, voice AI, and data pipelines.",
}

const icons = {
  "predictive-modelling": Brain,
  "computer-vision": Eye,
  "public-health": HeartPulse,
  "voice-language": AudioLines,
  "data-pipelines": Workflow,
}

const related: Record<string, string[]> = {
  "predictive-modelling": ["malaria-prediction", "cooperative-rl", "crypto-recommender"],
  "computer-vision": ["testa"],
  "public-health": ["malaria-prediction", "lassa-surveillance"],
  "voice-language": ["signbridge"],
  "data-pipelines": ["lead-pipeline", "crypto-recommender", "lassa-surveillance"],
}

export default function ExpertisePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
      <p className="text-sm font-medium tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
        Expertise
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Machine learning with a product spine
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Five lanes I keep returning to. Each one has shipped code on GitHub,
        not just a slide.
      </p>

      <div className="mt-14 space-y-16">
        {expertise.map((item) => {
          const Icon = icons[item.slug]
          const relatedProjects = projects.filter((project) =>
            related[item.slug]?.includes(project.slug)
          )
          return (
            <section
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <Icon className="size-8 text-cyan-600 dark:text-cyan-400" />
                <h2 className="mt-4 text-2xl font-bold">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {relatedProjects.length > 0 ? (
                  <ul className="mt-6 space-y-2">
                    {relatedProjects.map((project) => (
                      <li key={project.slug}>
                        <a
                          href={`/work/${project.slug}`}
                          className="text-sm font-medium underline-offset-4 hover:underline"
                        >
                          {project.title}
                        </a>
                        <span className="text-sm text-muted-foreground">
                          {" "}
                          — {project.summary}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
