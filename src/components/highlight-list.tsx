"use client"

import { highlights } from "@/lib/site"

import { Reveal } from "@/components/reveal"

export function HighlightList() {
  return (
    <ul className="grid gap-px bg-border sm:grid-cols-2">
      {highlights.map((item, index) => (
        <li key={`${item.kicker}-${item.title}`} className="bg-charcoal">
          <Reveal delay={index * 90}>
            <article className="highlight-card group relative h-full px-4 py-4">
              <span className="highlight-accent" aria-hidden />
              <div className="flex items-start justify-between gap-3">
                <p className="text-[10px] tracking-[0.18em] text-burgundy uppercase">
                  {item.kicker}
                </p>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <p className="mt-2 font-heading text-xl leading-tight">
                {item.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
