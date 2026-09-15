import type { Metadata } from "next"
import Link from "next/link"

import { Portrait } from "@/components/portrait"
import { Button } from "@/components/ui/button"
import {
  about,
  experience,
  leadership,
  site,
  skills,
  stats,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Portrait />
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-xl font-heading text-4xl sm:text-5xl">
            Building applied machine learning with care
          </h1>
          <p className="mt-3 text-sm text-burgundy">{site.legalName}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {about.intro}
          </p>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="bg-charcoal p-6">
            <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {item.label}
            </dt>
            <dd className="mt-3 font-heading text-2xl">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 space-y-5 text-base leading-relaxed text-muted-foreground">
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-16 divide-y divide-border border-y border-border">
        {about.facts.map((item) => (
          <div
            key={item.label}
            className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:items-baseline"
          >
            <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              {item.label}
            </dt>
            <dd className="text-sm text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-20">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-4 font-heading text-3xl">Curriculum</h2>
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <li
              key={item.role}
              className="grid gap-2 py-6 sm:grid-cols-[200px_1fr]"
            >
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <div>
                <p className="font-heading text-xl">{item.role}</p>
                {item.org ? (
                  <p className="mt-1 text-sm text-burgundy">{item.org}</p>
                ) : null}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <section>
          <p className="eyebrow">Education</p>
          <ul className="mt-6 space-y-6">
            {about.education.map((item) => (
              <li key={item.school} className="border-l-2 border-burgundy pl-4">
                <p className="font-heading text-xl">{item.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.credential}
                </p>
                <p className="text-sm text-muted-foreground">{item.extra}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">Leadership</p>
          <ul className="mt-6 space-y-6">
            {leadership.map((item) => (
              <li key={item.title}>
                <p className="font-heading text-xl">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-16">
        <p className="eyebrow">Skills</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-heading text-xl">{group.group}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 border border-border bg-charcoal p-8 sm:p-10">
        <h2 className="font-heading text-3xl">Ready to work together?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          If you need an ML engineer who can own the data, the model, and the
          interface, write to {site.name.split(" ")[0]} at{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          className="mt-6 h-11 px-6"
        >
          Get in touch
        </Button>
      </div>
    </div>
  )
}
