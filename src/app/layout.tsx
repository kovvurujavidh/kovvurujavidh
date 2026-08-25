import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kovvuru Javidh - Data Analyst",
  description:
    "Portfolio setup for Kovvuru Javidh, a data analyst specializing in SQL, Power BI, and Excel.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-background font-sans text-foreground antialiased">
        <AmbientBackground />
        <SmoothScroll>
          <div className="relative z-10 flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="glass-panel absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="min-h-screen flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
