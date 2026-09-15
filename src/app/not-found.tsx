import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-heading text-4xl">
        This page is not in the dataset
      </h1>
      <p className="mt-3 text-muted-foreground">
        The route does not exist. Head home or browse the work.
      </p>
      <div className="mt-8 flex gap-3">
        <Button nativeButton={false} render={<Link href="/" />} className="h-11 px-6">
          Home
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="/work" />}
          variant="outline"
          className="h-11 border-border px-6"
        >
          Work
        </Button>
      </div>
    </div>
  )
}
