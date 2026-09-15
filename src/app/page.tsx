import type { Metadata } from "next"
import Link from "next/link"
import {
  Brain,
  Eye,
  HeartPulse,
  AudioLines,
  Workflow,
} from "lucide-react"

import { CommunityMarquee } from "@/components/community-marquee"
import { GradientBlobs } from "@/components/gradient-blobs"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import {
  about,
  expertise,
  highlights,
  leadership,
  projects,
  site,
  stats,
  writing,
} from "@/lib/site"

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
}

const icons = [Brain, Eye, HeartPulse, AudioLines, Workflow]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GradientBlobs />
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col px-6 pt-24 pb-16 lg:px-8">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {site.headline}
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {site.accent}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                className="h-11 border-2 border-border bg-transparent px-8 text-sm font-semibold text-foreground hover:bg-muted"
                variant="outline"
              >
                Work with me
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/work" />}
                className="h-11 px-8 text-sm font-semibold"
              >
                See the work
              </Button>
            </div>
          </div>
          <div className="mt-12 pb-4">
            <CommunityMarquee />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 p-8 text-white shadow-xl">
            <p className="text-sm tracking-widest uppercase opacity-80">About</p>
            <p className="mt-6 text-5xl font-bold tracking-tight">CA</p>
            <p className="mt-4 max-w-sm text-lg font-medium">
              Building intelligent systems at the intersection of language, data,
              and automation.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs tracking-wide uppercase opacity-80">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Creating systems that actually ship
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {about.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {about.body[0]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/about" />}
              variant="outline"
              className="mt-8 h-10 px-5"
            >
              Full story
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">How I work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Applied machine learning with a product spine: data in, a decision
            out, and an interface someone can actually use.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {expertise.map((item, index) => {
              const Icon = icons[index] ?? Brain
              return (
                <Link
                  key={item.slug}
                  href={`/expertise#${item.slug}`}
                  className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/20"
                >
                  <Icon className="size-6 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Building solutions that matter
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                From exam integrity to outbreak surveillance. Each project is a
                complete slice: data, model, and a surface a person can open.
              </p>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Leadership</h2>
            <p className="mt-3 text-muted-foreground">
              The first female president of NACOSS FUTA did not wait for a
              permission slip. The same energy shows up in the repos.
            </p>
            <ul className="mt-8 space-y-6">
              {leadership.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-background p-8">
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Values
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Rigor", "Clarity", "Impact", "Access"].map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 px-4 py-2 text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Prefer a model you can explain, a dashboard a cooperative treasurer
              can open, and a paper trail when the camera flags a phone.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Writing</h2>
          <p className="mt-3 text-muted-foreground">
            Technical notes on models that left the notebook.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {writing.map((post) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border p-6 transition-colors hover:border-foreground/20"
              >
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <h3 className="mt-3 font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="mt-3 max-w-xl text-white/80">
            Roles, collaborations, and hard modelling problems. Write to{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="mt-8 h-11 bg-white px-6 text-sm font-semibold text-slate-900 hover:bg-white/90"
          >
            Start a conversation
          </Button>
        </div>
      </section>
    </>
  )
}
