"use client";

import { ArrowUpRight, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { DataGraph } from "@/components/ui/DataGraph";

export function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6 py-32 sm:px-8 lg:px-12"
    >
      <DataGraph />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-5xl">
          <FadeIn>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
              Hi, I am Kovvuru Javidh
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              id="hero-heading"
              className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            >
              Turning raw data into{" "}
              <span className="text-accent">decision-ready insights.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Data Analyst skilled in SQL, Power BI, and Excel. Currently building
              operational efficiency at India Post.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#projects"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-[0_0_24px_-6px_rgb(200_111_82_/_0.3)] transition-all duration-300 hover:bg-accent-warm hover:shadow-[0_0_32px_-4px_rgb(200_111_82_/_0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                View Projects
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF in a new tab"
                className="glass-panel inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-surface/70 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                Resume
                <FileText aria-hidden="true" size={17} strokeWidth={1.8} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-white/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                Contact
                <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
