import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Portrait } from "@/components/portrait"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { about, experience, projects, site, skills, writing } from "@/lib/site"

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
}

export default function HomePage() {
  const skillItems = skills.flatMap((group) => group.items).slice(0, 12)

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 lg:px-8">
          <p className="font-mono text-sm text-burgundy">Hi, my name is</p>
          <h1 className="mt-4 font-heading text-5xl leading-[1.05] text-foreground sm:text-7xl">
            {site.headline}
          </h1>
          <p className="mt-4 font-heading text-3xl text-muted-foreground sm:text-4xl">
            {site.accent}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline} {site.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={
                <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
              }
              className="h-11 px-7"
            >
              Resume
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/work" />}
              variant="outline"
              className="h-11 border-border px-7"
            >
              Work
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-8">
          <div>
            <SectionHeading index="01">About</SectionHeading>
            <p className="text-base leading-relaxed text-muted-foreground">
              {about.intro}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground sm:max-w-md">
              {skillItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-burgundy">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-5 text-sm">
              <Link href="/about" className="text-burgundy hover:underline">
                More about me
              </Link>
              <a
                href={site.resume}
                download="Christianah-Adekunle-Resume.pdf"
                className="hover:text-burgundy"
              >
                Download resume
              </a>
            </div>
          </div>
          <Portrait />
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <SectionHeading index="02">Experience</SectionHeading>
          <ol className="divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li
                key={item.role}
                className="grid gap-1 py-5 sm:grid-cols-[140px_1fr]"
              >
                <p className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </p>
                <div>
                  <p className="font-heading text-lg">
                    {item.role}
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-burgundy hover:underline"
                      >
                        {" "}
                        · {item.org}
                      </a>
                    ) : (
                      <span className="text-burgundy"> · {item.org}</span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm text-burgundy hover:underline"
          >
            Education and awards
          </Link>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <SectionHeading index="03">Work</SectionHeading>
          <ol>
            {projects.slice(0, 4).map((project, index) => (
              <li
                key={project.slug}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr]"
              >
                <p className="font-mono text-sm text-burgundy">
                  0{index + 1}.
                </p>
                <div>
                  <h3 className="font-heading text-xl">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {project.stack.slice(0, 5).join("  ·  ")}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm">
                    <Link
                      href={`/work/${project.slug}`}
                      className="hover:text-burgundy"
                    >
                      Overview
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-burgundy"
                    >
                      GitHub <ArrowUpRight className="size-3.5" />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-burgundy"
                      >
                        Live <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/work"
            className="mt-8 inline-block text-sm text-burgundy hover:underline"
          >
            All projects
          </Link>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="font-mono text-sm text-burgundy">Writing</p>
          <ul className="mt-6 space-y-3">
            {writing.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:text-burgundy"
                >
                  {post.title}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-burgundy">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="font-mono text-sm text-white/80">04. What&apos;s next</p>
          <h2 className="mt-4 font-heading text-4xl text-white">Get in touch</h2>
          <p className="mt-4 max-w-lg text-white/85">{site.email}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-11 border border-white bg-transparent px-6 text-white hover:bg-charcoal"
            >
              Write
            </Button>
            <Button
              nativeButton={false}
              render={
                <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
              }
              className="h-11 border border-white bg-white px-6 text-burgundy hover:bg-charcoal hover:text-white"
            >
              Resume
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
