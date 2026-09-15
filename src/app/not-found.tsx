import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 pt-28 text-center">
      <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight">
        This page is not in the dataset
      </h1>
      <p className="mt-3 text-muted-foreground">
        The route does not exist. Head home or browse the work.
      </p>
      <div className="mt-8 flex gap-3">
        <Button nativeButton={false} render={<Link href="/" />} className="h-10 px-5">
          Home
        </Button>
        <Button
          nativeButton={false}
          render={<Link href="/work" />}
          variant="outline"
          className="h-10 px-5"
        >
          Work
        </Button>
      </div>
    </div>
  )
}
