"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { shortName } from "@/data/portfolio";

type HeaderItem = {
  label: string;
  href: string;
};

export function Header({
  items,
  brandHref = "#home",
}: {
  items: HeaderItem[];
  brandHref?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/80 bg-white/85 px-4 py-3 shadow-[0_18px_45px_rgba(139,148,178,0.18)] backdrop-blur">
        <Link
          href={brandHref}
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-slate-800 uppercase"
        >
          <BrandMark className="h-10 w-10 shrink-0" />
          {shortName}
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[var(--color-soft)] hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-slate-700 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[1.75rem] border border-white/80 bg-white/95 p-3 shadow-[0_18px_45px_rgba(139,148,178,0.18)] backdrop-blur md:hidden">
          <nav className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[var(--color-soft)] hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
