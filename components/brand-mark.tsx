export function BrandMark({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#bg)" />
      <rect
        x="4.75"
        y="4.75"
        width="54.5"
        height="54.5"
        rx="17.25"
        stroke="rgba(255,255,255,0.6)"
      />
      <path
        d="M19 22.5C19 19.4624 21.4624 17 24.5 17H39.5C42.5376 17 45 19.4624 45 22.5V41.5C45 44.5376 42.5376 47 39.5 47H24.5C21.4624 47 19 44.5376 19 41.5V22.5Z"
        fill="rgba(255,255,255,0.18)"
      />
      <path
        d="M25.5 22V37.5C25.5 40.5376 27.9624 43 31 43C34.0376 43 36.5 40.5376 36.5 37.5V26.75"
        stroke="white"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.5 26.75L41.5 22V37.5"
        stroke="#FFF6FB"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="47" cy="18" r="4" fill="#FFE29E" />
      <defs>
        <linearGradient id="bg" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D47A9C" />
          <stop offset="0.5" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#7EB6FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
