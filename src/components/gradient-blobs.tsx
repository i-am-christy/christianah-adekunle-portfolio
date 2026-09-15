export function GradientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -right-40 size-96 opacity-60">
        <div className="size-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-3xl" />
      </div>
      <div className="absolute top-20 -left-32 size-80 opacity-40">
        <div className="size-full rounded-full bg-gradient-to-tr from-purple-500 via-blue-400 to-cyan-300 blur-2xl" />
      </div>
    </div>
  )
}
