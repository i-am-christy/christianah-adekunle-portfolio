import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Christianah Adekunle, home"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-sm font-bold tracking-tight text-white">
        CA
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
        Christianah Adekunle
      </span>
    </Link>
  )
}
