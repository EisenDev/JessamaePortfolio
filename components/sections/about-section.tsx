import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const { about } = profileData;

  return (
    <section id="about" className="py-28 md:py-40 bg-surface-elevated/30 border-t border-border/40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Introduction & Bio */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <MotionWrapper>
              <SectionHeader
                eyebrow="Introduction"
                title={about.title}
                description="A detail-oriented background in Financial Management and practical hands-on experience supporting daily finance and administrative workflows."
              />
            </MotionWrapper>

            <div className="mt-8 space-y-5 text-muted leading-relaxed text-base">
              {about.description.map((paragraph, idx) => (
                <MotionWrapper key={idx} delay={0.1 * (idx + 1)}>
                  <p>{paragraph}</p>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Numbered Focus Cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {about.highlights.map((highlight, index) => (
                <MotionWrapper key={index} delay={index * 0.12}>
                  <Card
                    variant={index === 0 ? "elevated" : "default"}
                    className="h-full group hover:border-accent/40 transition-all duration-300"
                  >
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center text-accent font-bold mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl tracking-tight leading-snug group-hover:text-accent transition-colors">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted leading-relaxed italic text-sm">
                        &quot;{highlight.description}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Closing Statement */}
        <MotionWrapper delay={0.4} className="mt-20 pt-12 border-t border-border/60 text-center">
          <p className="text-sm font-medium text-muted max-w-2xl mx-auto leading-relaxed">
            {about.closingStatement}
          </p>
        </MotionWrapper>
      </Container>
    </section>
  );
}
