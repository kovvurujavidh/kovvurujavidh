"use client";

import {
  Briefcase,
  Folder,
  GitBranch,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const navigationItems = [
  { href: "/#about", label: "About", icon: User },
  { href: "/#projects", label: "Projects", icon: Folder },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#github", label: "GitHub", icon: GitBranch },
  { href: "/#contact", label: "Contact", icon: Mail },
] as const;

function getDockScale(index: number, activeIndex: number | null) {
  if (activeIndex === null) {
    return "scale-100";
  }

  const distance = Math.abs(index - activeIndex);

  if (distance === 0) {
    return "z-10 -translate-y-2 scale-[1.16]";
  }

  if (distance === 1) {
    return "-translate-y-1 scale-[1.07]";
  }

  return "scale-100";
}

export function Navbar() {
  const [activeDockIndex, setActiveDockIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="glass-header mx-auto flex min-h-16 max-w-6xl items-center justify-between rounded-full px-3 sm:px-5"
      >
        <Link
          href="/"
          aria-label="Kovvuru Javidh home"
          className="group inline-flex min-h-11 items-center gap-3 rounded-full px-1 py-1 font-semibold tracking-tight text-foreground transition-colors hover:bg-black/[0.03] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="relative isolate flex size-10 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/70 font-mono text-xs text-white shadow-[0_8px_24px_-8px_rgb(200_111_82_/_0.38)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-105">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-warm via-accent to-accent-violet opacity-95"
            />
            <span className="relative font-semibold tracking-[-0.14em]">KJ</span>
            <Sparkles
              aria-hidden="true"
              className="absolute right-1 top-1 size-2.5 text-white"
              strokeWidth={2.2}
            />
          </span>
          <span className="min-w-0 truncate text-sm font-semibold tracking-tight text-foreground">
            <span className="hidden sm:inline">Kovvuru Javidh</span>
            <span className="sm:hidden">K. Javidh</span>
          </span>
        </Link>

        <div
          className="hidden items-end gap-1 rounded-full border border-black/[0.08] bg-black/[0.03] p-1 md:flex"
          onMouseLeave={() => setActiveDockIndex(null)}
        >
          {navigationItems.map((item, index) => {
            const Icon: LucideIcon = item.icon;

            return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              onMouseEnter={() => setActiveDockIndex(index)}
              onFocus={() => setActiveDockIndex(index)}
              className={`group relative isolate flex min-h-11 min-w-11 origin-bottom items-center justify-center gap-2 rounded-full px-2.5 py-2.5 font-mono text-xs text-muted transition-[background-color,color,filter,transform] duration-300 ease-out before:absolute before:inset-1 before:z-0 before:rounded-full before:bg-accent/15 before:opacity-0 before:blur-md before:transition-opacity before:duration-300 after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-300 hover:bg-black/[0.035] hover:text-foreground hover:before:opacity-100 hover:after:w-[calc(100%-1.5rem)] focus-visible:bg-black/[0.035] focus-visible:text-foreground focus-visible:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${getDockScale(index, activeDockIndex)}`}
            >
              <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface/65 transition-[background-color,border-color] duration-300 group-hover:border-accent/35 group-hover:bg-accent/10">
                <Icon
                  aria-hidden="true"
                  className="size-3.5 transition-[filter,color] duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgb(200_111_82_/_0.55)]"
                  strokeWidth={1.8}
                />
              </span>
              <span
                aria-hidden="true"
                className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-[max-width,opacity,transform] duration-300 ease-out group-hover:max-w-24 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:max-w-24 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100"
              >
                {item.label}
              </span>
            </Link>
            );
          })}
        </div>

        <MobileMenu items={navigationItems} />
      </nav>
    </header>
  );
}
