import type { Metadata } from "next"
import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { expertise } from "@/lib/site"

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Predictive modelling, computer vision, public health ML, voice AI, automation, and data pipelines.",
}

export default function ExpertisePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 lg:px-8">
      <SectionHeading index="01">Expertise</SectionHeading>
      <p className="mb-10 max-w-xl text-muted-foreground">
        Lanes I keep returning to. Projects live on the{" "}
        <Link href="/work" className="text-burgundy hover:underline">
          work
        </Link>{" "}
        page.
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {expertise.map((item) => (
          <li key={item.slug} id={item.slug} className="scroll-mt-24 py-5">
            <p className="font-heading text-lg">{item.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
