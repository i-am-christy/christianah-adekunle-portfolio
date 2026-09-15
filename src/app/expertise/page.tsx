import type { Metadata } from "next"

import { expertise, projects } from "@/lib/site"

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Predictive modelling, computer vision, public health ML, voice AI, automation, and data pipelines.",
}

const related: Record<string, string[]> = {
  "predictive-modelling": ["malaria-prediction", "cooperative-rl", "crypto-recommender"],
  "computer-vision": ["testa"],
  "public-health": ["malaria-prediction", "lassa-surveillance"],
  "voice-language": ["whisper-nigerian", "signbridge"],
  "ai-automation": ["signbridge", "lead-pipeline"],
  "data-pipelines": ["lead-pipeline", "crypto-recommender", "lassa-surveillance"],
}

export default function ExpertisePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 lg:px-8">
      <div className="hero-copy">
        <p className="eyebrow">Expertise</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl sm:text-5xl">
          Machine learning with a product spine
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Five lanes I keep returning to. Each one has shipped code on GitHub,
          not just a slide.
        </p>
      </div>

      <div className="mt-14">
        {expertise.map((item) => {
          const relatedProjects = projects.filter((project) =>
            related[item.slug]?.includes(project.slug)
          )
          return (
            <section
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 grid gap-6 border-t border-border py-12 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div>
                <p className="text-[11px] tracking-[0.18em] text-burgundy uppercase">
                  {item.subtitle}
                </p>
                <h2 className="mt-3 font-heading text-3xl">{item.title}</h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {relatedProjects.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {relatedProjects.map((project) => (
                      <li key={project.slug}>
                        <a
                          href={`/work/${project.slug}`}
                          className="font-medium text-foreground hover:text-burgundy"
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
