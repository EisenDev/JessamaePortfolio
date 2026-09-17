import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 01 — COVER */}
      <HeroSection />

      {/* 02 — ABOUT ME */}
      <AboutSection />

      {/* 03 — MY EXPERTISE */}
      <SkillsSection />

      {/* 04 — TOOLS & SOFTWARE */}
      <ToolsSection />

      {/* 05 to 12 — BOOKKEEPING PROJECTS (Projects 01 to 07) */}
      <ProjectsSection />

      {/* 13 — CONTACT */}
      <ContactSection />
    </div>
  );
}
