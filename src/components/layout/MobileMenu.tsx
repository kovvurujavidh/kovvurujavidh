"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  items: readonly NavigationItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {isOpen ? (
          <X aria-hidden="true" size={20} strokeWidth={1.8} />
        ) : (
          <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
        )}
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={cn(
          "absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/30 transition-[max-height,opacity,visibility] duration-200",
          isOpen
            ? "visible max-h-96 opacity-100"
            : "invisible max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 p-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-mono text-sm text-muted transition-colors hover:bg-surface-raised hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
