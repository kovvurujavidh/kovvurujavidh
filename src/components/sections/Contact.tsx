import { ArrowUpRight, ExternalLink, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    label: "Email",
    value: "javidhkovvuru@gmail.com",
    href: "mailto:javidhkovvuru@gmail.com",
    icon: Mail,
    iconColor: "text-accent",
  },
  {
    label: "Phone",
    value: "+91 7670860094",
    href: "tel:+917670860094",
    icon: Phone,
    iconColor: "text-accent",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kovvurujavidh",
    href: "https://www.linkedin.com/in/kovvurujavidh",
    icon: ExternalLink,
    iconColor: "text-accent",
  },
  {
    label: "GitHub",
    value: "github.com/kovvurujavidh",
    href: "https://github.com/kovvurujavidh",
    icon: ExternalLink,
    iconColor: "text-accent",
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border/70 px-6 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              05. Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 max-w-lg text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              Let&apos;s make the numbers useful.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Open to Data Analyst and MIS Reporting opportunities. Reach out
              directly and I&apos;ll get back to you.
            </p>
            <a
              href="mailto:javidhkovvuru@gmail.com"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              const external = contact.href.startsWith("http");

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="glass-panel group rounded-3xl border-black/10 bg-card/70 p-5 backdrop-blur-xl transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="icon-tile flex size-9 items-center justify-center rounded-full">
                      <Icon
                        aria-hidden="true"
                        className={cn("size-4", contact.iconColor)}
                        strokeWidth={1.8}
                      />
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-muted transition-colors group-hover:text-accent"
                      strokeWidth={1.8}
                    />
                  </div>
                  <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    {contact.label}
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-foreground">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
