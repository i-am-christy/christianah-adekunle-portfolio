import { communities } from "@/lib/site"

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {communities.map((name) => (
        <div
          key={name}
          className="flex h-12 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-background px-3"
        >
          <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export function CommunityMarquee() {
  return (
    <div className="w-full">
      <p className="mb-6 text-center text-sm tracking-wider text-muted-foreground uppercase">
        Communities and platforms
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  )
}
