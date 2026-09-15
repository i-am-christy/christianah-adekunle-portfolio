import Image from "next/image"

import { site } from "@/lib/site"

export function Portrait({
  className = "",
  priority = false,
}: {
  className?: string
  priority?: boolean
}) {
  return (
    <figure className={`border border-charcoal bg-charcoal ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden border-l-2 border-burgundy">
        <Image
          src={site.portrait}
          alt={`${site.name}, AI and machine learning engineer`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover object-[center_18%]"
        />
      </div>
      <figcaption className="sr-only">
        Portrait of {site.name}. Photograph by Aso Imagery.
      </figcaption>
    </figure>
  )
}
