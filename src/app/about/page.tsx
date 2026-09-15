import type { Metadata } from "next"
import Link from "next/link"

import { Portrait } from "@/components/portrait"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { about, awards, experience, site, skills } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:items-start">
        <Portrait />
        <div>
          <p className="font-mono text-sm text-burgundy">{site.legalName}</p>
          <h1 className="mt-3 font-heading text-4xl">{site.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.role}, {site.employer}
          </p>
          <div className="mt-6">
            <Button
              nativeButton={false}
              render={
                <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
              }
              variant="outline"
              className="h-9 border-burgundy px-4 text-burgundy hover:bg-burgundy hover:text-white"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading index="01">About</SectionHeading>
        <p className="text-base leading-relaxed text-muted-foreground">
          {about.intro}
        </p>
        {about.body.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-4 text-base leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mt-10 divide-y divide-border border-y border-border">
        {about.facts.map((item) => (
          <div
            key={item.label}
            className="grid gap-1 py-3 sm:grid-cols-[140px_1fr]"
          >
            <dt className="font-mono text-xs text-muted-foreground">
              {item.label}
            </dt>
            <dd className="text-sm">{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-16">
        <SectionHeading index="02">Education</SectionHeading>
        <ol className="divide-y divide-border border-y border-border">
          {about.education.map((item) => (
            <li key={item.school} className="py-4">
              <p className="text-sm">{item.credential}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {item.extra}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHeading index="03">Experience</SectionHeading>
        <ol className="divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <li key={item.role} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]">
              <p className="font-mono text-xs text-muted-foreground">
                {item.period}
              </p>
              <div>
                <p className="text-sm">
                  {item.role}
                  {item.org ? ` · ${item.org}` : ""}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHeading index="04">Awards</SectionHeading>
        <ul className="space-y-3 text-sm">
          {awards.map((item) => (
            <li key={item.title}>
              <span className="text-foreground">{item.title}</span>
              <span className="text-muted-foreground"> — {item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <SectionHeading index="05">Skills</SectionHeading>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground sm:grid-cols-3">
          {skills.flatMap((group) => group.items).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-burgundy">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Button
          nativeButton={false}
          render={
            <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
          }
          className="h-11 px-6"
        >
          Download resume
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          variant="outline"
          className="h-11 border-border px-6"
        >
          Contact
        </Button>
      </div>
    </div>
  )
}
