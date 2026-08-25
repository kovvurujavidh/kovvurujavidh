import Link from "next/link";

const footerLinks = [
  {
    href: "https://www.linkedin.com/in/kovvurujavidh",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/kovvurujavidh",
    label: "GitHub",
    external: true,
  },
  { href: "mailto:javidhkovvuru@gmail.com", label: "Email", external: false },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="font-mono text-xs text-muted">&copy; 2026 Kovvuru Javidh</p>
          <p className="mt-2 text-sm text-muted/80">Data, decisions, and direction.</p>
        </div>

        <nav aria-label="Footer navigation" className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="group relative rounded-lg py-2 text-sm text-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-200 hover:text-foreground hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
