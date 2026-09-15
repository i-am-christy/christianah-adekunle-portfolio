"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav, site } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7" aria-label="Primary">
            {nav.map((item, index) => {
              const path = item.href.split("#")[0] || "/"
              const active =
                path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(path)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-[13px] transition-colors ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-burgundy">0{index + 1}. </span>
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <Button
            nativeButton={false}
            render={
              <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
            }
            variant="outline"
            className="h-9 border-burgundy px-4 text-burgundy hover:bg-burgundy hover:text-white"
          >
            Resume
          </Button>
        </div>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {nav.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 font-mono text-sm text-foreground hover:bg-charcoal"
                  >
                    <span className="text-burgundy">0{index + 1}. </span>
                    {item.label}
                  </Link>
                ))}
                <Button
                  nativeButton={false}
                  render={
                    <a href={site.resume} download="Christianah-Adekunle-Resume.pdf" />
                  }
                  className="mt-4 h-10"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
