"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { ArrowRight, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="cover" className="relative min-h-[100dvh] flex items-center pt-24 sm:pt-20 overflow-hidden bg-background">
      {/* Background Image Container with Soft Gradient Masks & Rich Colors */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[68%] lg:w-[58%] z-0 pointer-events-none">
        <Image
          src="/profile.jpg"
          alt={profileData.name}
          fill
          priority
          quality={95}
          className="object-cover object-[center_top] md:object-[center_20%] opacity-[0.88] dark:opacity-[0.78] contrast-[1.04] saturate-[1.06] transition-all duration-500"
        />
        {/* Soft directional edge feathering so the portrait blends cleanly into the background */}
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-background from-5% via-background/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-background from-15% via-background/70 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background via-background/40 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[45%] md:w-[40%] bg-gradient-to-r from-background from-15% via-background/75 to-transparent" />
      </div>

      <Container className="relative z-10 w-full py-12">
        <div className="w-full max-w-3xl">
          <MotionWrapper delay={0.05}>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4">
              {profileData.role}
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <h1 className="text-[2.2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.8rem] font-light tracking-[0.08em] sm:tracking-[0.12em] text-foreground uppercase leading-[1.08] mb-8">
              Jessa Mae <br className="hidden sm:inline" />
              Condrillon
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.25}>
            <div className="h-[1px] w-16 bg-accent mb-8 opacity-80" />
          </MotionWrapper>

          <MotionWrapper delay={0.35}>
            <p className="text-foreground/85 dark:text-muted text-lg sm:text-xl font-light tracking-wide max-w-xl mb-12 leading-relaxed">
              {profileData.tagline}
              <span className="block mt-2 text-sm sm:text-base text-muted font-normal">
                Finance Management graduate with 4 years of experience supporting finance office operations, ledger accuracy, and administrative workflows.
              </span>
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.45}>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Link
                href="#projects"
                className="inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors group font-medium text-base sm:text-lg"
              >
                <span>View Bookkeeping Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <div className="hidden sm:block h-4 w-[1px] bg-border" />

              <Link
                href={profileData.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors text-sm sm:text-base font-medium"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Open Resume PDF</span>
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
