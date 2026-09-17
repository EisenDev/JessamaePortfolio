import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { profileData } from "@/data/profile";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const { projects } = profileData;

  return (
    <section id="projects" className="py-28 md:py-40 bg-background border-t border-border/40">
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="Portfolio Showcase"
            title={projects.title}
            description={projects.description}
            className="mb-20 md:mb-24"
          />
        </MotionWrapper>

        <ul className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2 list-none p-0 m-0">
          {projects.items.map((project, index) => (
            <li key={index} className={index === projects.items.length - 1 ? "lg:col-span-2 max-w-3xl mx-auto w-full" : ""}>
              <MotionWrapper delay={index * 0.08}>
                <Card
                  variant="elevated"
                  className="h-full flex flex-col group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 rounded-lg bg-surface"
                >
                  <CardHeader className="p-6 sm:p-10 flex-1 flex flex-col">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <Badge variant="accent" className="text-[11px] font-bold tracking-wider uppercase">
                        Project {project.number}
                      </Badge>
                      <Badge variant="muted" className="text-[11px] font-medium tracking-wide">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-2xl sm:text-3xl font-bold group-hover:text-accent transition-colors tracking-tight mb-4">
                      {project.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </CardDescription>

                    {/* Tool Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold tracking-wide text-muted/90 border border-border/60 px-3 py-1 rounded-sm bg-background/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Highlights List */}
                    <ul className="space-y-3 mb-4 list-none p-0 mt-auto border-t border-border/40 pt-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-muted">
                          <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-normal">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                </Card>
              </MotionWrapper>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
