export function SectionHeading({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <h2 className="mb-10 flex items-center gap-3 font-heading text-2xl text-foreground sm:text-3xl">
      <span className="font-mono text-sm font-normal text-burgundy">{index}.</span>
      <span>{children}</span>
      <span className="hidden h-px flex-1 bg-border sm:block" />
    </h2>
  )
}
