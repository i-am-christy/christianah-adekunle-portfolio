import type { Metadata } from "next"
import Link from "next/link"

import { Portrait } from "@/components/portrait"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import {
  about,
  expertise,
  experience,
  projects,
  site,
  stats,
  writing,
} from "@/lib/site"

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
}

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-32 lg:pb-20">
          <div>
            <p className="eyebrow">{site.title}</p>
            <h1 className="mt-5 font-heading text-5xl leading-[1.05] text-foreground sm:text-6xl">
              {site.headline}
              <span className="mt-2 block text-muted-foreground">{site.accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                className="h-11 px-7"
              >
                Work with me
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/work" />}
                variant="outline"
                className="h-11 border-border px-7"
              >
                See the work
              </Button>
            </div>
          </div>
          <Portrait priority />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 font-heading text-4xl text-foreground">
              Systems that leave the notebook
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {about.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {about.body[0]}
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/about" />}
              variant="outline"
              className="mt-8 h-11 border-border px-6"
            >
              Full story
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-px bg-border">
            {stats.map((item) => (
              <div key={item.label} className="bg-charcoal p-6">
                <dt className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {item.label}
                </dt>
                <dd className="mt-3 font-heading text-2xl text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="eyebrow">Practice</p>
          <h2 className="mt-4 font-heading text-4xl">How I work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Applied machine learning with a product spine: data in, a decision
            out, and an interface someone can actually use.
          </p>
          <div className="mt-10 divide-y divide-border border border-border">
            {expertise.map((item) => (
              <Link
                key={item.slug}
                href={`/expertise#${item.slug}`}
                className="grid gap-2 px-6 py-6 transition-colors hover:bg-charcoal sm:grid-cols-[220px_1fr]"
              >
                <h3 className="font-heading text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 font-heading text-4xl">
                Building solutions that matter
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm text-foreground underline-offset-4 hover:text-burgundy hover:underline"
            >
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            {projects.slice(0, 6).map((project) => (
              <div key={project.slug} className="bg-background">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="eyebrow">Path</p>
          <h2 className="mt-4 font-heading text-4xl">Experience</h2>
          <ol className="mt-10 divide-y divide-border border-y border-border">
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
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="eyebrow">Writing</p>
          <h2 className="mt-4 font-heading text-4xl">Notes from the work</h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {writing.map((post) => (
              <li key={post.href} className="py-6">
                <p className="text-[12px] text-muted-foreground">{post.date}</p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-heading text-2xl hover:text-burgundy"
                >
                  {post.title}
                </a>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-burgundy">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="font-heading text-4xl text-white">Get in touch</h2>
          <p className="mt-4 max-w-xl text-white/85">
            Roles, collaborations, and hard modelling problems. Write to{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="mt-8 h-11 border border-white bg-transparent px-6 text-white hover:bg-charcoal"
          >
            Start a conversation
          </Button>
        </div>
      </section>
    </>
  )
}
