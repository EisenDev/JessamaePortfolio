import type { Metadata } from "next";
import Link from "next/link";
import { CvDocument } from "@/components/cv-document";
import { Header } from "@/components/header";
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
  title: `${fullName} | CV`,
  description: `Curriculum vitae page for ${fullName}.`,
};

export default function CvPage() {
  return (
    <>
      <Header items={navigationItems} brandHref="/#home" />
      <main className="mx-auto flex w-full max-w-7xl flex-1 px-5 pt-32 pb-16 sm:px-8 lg:px-10">
        <div className="w-full rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(127,145,181,0.12)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                Curriculum Vitae
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">
                {fullName}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                This CV page presents the confirmed education, experience, and
                skill background in a more detailed format.
              </p>
            </div>
            <Link
              href="/#cv"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
            >
              Back to Portfolio
            </Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-[rgba(171,143,214,0.2)] bg-[linear-gradient(180deg,#fdfbff_0%,#ffffff_100%)] p-4 shadow-[0_28px_70px_rgba(130,112,178,0.12)] sm:p-8">
            <CvDocument />
          </div>
        </div>
      </main>
    </>
  );
}
