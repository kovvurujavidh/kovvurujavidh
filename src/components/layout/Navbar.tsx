import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navigationItems = [
  { href: "/#about", label: "01. About" },
  { href: "/#projects", label: "02. Projects" },
  { href: "/#experience", label: "03. Experience" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-20 max-w-6xl items-center justify-between px-4 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 font-semibold tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="flex size-9 items-center justify-center rounded-lg border border-accent/50 font-mono text-xs text-accent transition-colors group-hover:border-accent group-hover:bg-accent/10">
            KJ
          </span>
          <span className="hidden sm:inline">Kovvuru Javidh</span>
          <span className="sm:hidden">K. Javidh</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-2 py-3 font-mono text-xs text-muted transition-colors after:absolute after:bottom-1 after:left-2 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-200 hover:text-foreground hover:after:w-[calc(100%-1rem)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <MobileMenu items={navigationItems} />
      </nav>
    </header>
  );
}
