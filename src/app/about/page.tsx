import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { about, highlights, leadership, site, stats } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
      <p className="text-sm font-medium tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
        About
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Building the future of applied machine learning
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {about.intro}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Education
            </h2>
            <ul className="mt-4 space-y-4">
              {about.education.map((item) => (
                <li key={item.school}>
                  <p className="font-medium text-foreground">{item.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.credential}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.extra}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Leadership
            </h2>
            <ul className="mt-4 space-y-4">
              {leadership.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-muted/40 p-8 sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight">
          Ready to work together?
        </h2>
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
          className="mt-6 h-10 px-5"
        >
          Get in touch
        </Button>
      </div>
    </div>
  )
}
