import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Now />
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <GithubActivity />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}
