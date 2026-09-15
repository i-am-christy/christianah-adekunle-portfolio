import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Christianah Adekunle, home"
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="flex size-8 items-center justify-center border border-burgundy bg-charcoal text-[11px] font-semibold tracking-[0.18em] text-foreground">
        CA
      </span>
      <span className="hidden font-heading text-lg tracking-tight text-foreground sm:inline">
        Christianah Adekunle
      </span>
    </Link>
  )
}
