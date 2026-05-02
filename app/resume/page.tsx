import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { ResumeDocument } from "@/components/resume-document";
import { fullName } from "@/data/portfolio";

const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export const metadata: Metadata = {
  title: `${fullName} | Resume`,
  description: `Resume page for ${fullName}.`,
};

export default function ResumePage() {
  return (
    <>
      <Header items={navigationItems} brandHref="/#home" />
      <main className="resume-page-shell mx-auto flex w-full max-w-7xl flex-1 px-5 pt-32 pb-16 sm:px-8 lg:px-10">
        <div className="resume-page-frame w-full rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(127,145,181,0.12)] sm:p-8">
          <div className="resume-page-toolbar flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                Resume
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">
                {fullName}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                This page is formatted as the full resume layout used for the
                downloadable PDF.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f0c987,#e0a96d)] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_35px_rgba(224,169,109,0.28)]"
              >
                Download Resume PDF
              </a>
              <Link
                href="/#resume"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
          <div className="resume-print-stage mt-8 overflow-hidden rounded-[2.2rem] border border-[rgba(171,143,214,0.22)] bg-[linear-gradient(180deg,#fbf8ff_0%,#fefefe_18%,#ffffff_100%)] p-4 shadow-[0_28px_70px_rgba(130,112,178,0.16)] sm:p-8">
            <ResumeDocument />
          </div>
        </div>
      </main>
    </>
  );
}
