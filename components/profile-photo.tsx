"use client";

import { useState } from "react";

export function ProfilePhoto({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[1.8rem] bg-[linear-gradient(180deg,#fff3f8_0%,#f5f3ff_100%)] shadow-[inset_0_0_0_1px_rgba(200,107,144,0.12)]">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-semibold tracking-[0.22em] text-[var(--color-accent-strong)] shadow-[0_18px_35px_rgba(210,122,156,0.18)]">
            {initials}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#fff3f8_0%,#f5f3ff_100%)] shadow-[inset_0_0_0_1px_rgba(200,107,144,0.12)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="aspect-[4/5] h-full w-full object-cover"
      />
    </div>
  );
}
