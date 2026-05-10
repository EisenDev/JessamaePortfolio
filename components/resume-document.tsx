import { contactLinks, fullName, roleTitle, shortName } from "@/data/portfolio";

const summaryPoints = [
  "Business Administration professional major in Financial Management with four years of hands-on student assistant experience.",
  "Experienced in assessment office support, document processing, student record assistance, cashiering support, payroll-related exposure, and e-commerce marketing.",
  "Known for accuracy, professionalism, confidentiality, time management, and dependable office coordination.",
];

const skillGroups = [
  {
    title: "Core Skills",
    items: [
      "Document processing",
      "Student record assistance",
      "Administrative support",
      "Cashiering support",
      "Payroll-related exposure",
      "E-commerce marketing",
    ],
  },
  {
    title: "Tools",
    items: [
      "Microsoft Word",
      "Microsoft Excel",
      "Google Workspace",
      "Email communication",
      "Basic office systems",
    ],
  },
];

function ResumeSection({
  title,
  children,
  pdf = false,
}: {
  title: string;
  children: React.ReactNode;
  pdf?: boolean;
}) {
  return (
    <section>
      <div className={`flex items-center ${pdf ? "gap-3" : "gap-4"}`}>
        <h3
          className={`font-semibold uppercase text-[var(--color-resume-accent)] ${
            pdf ? "text-[11px] tracking-[0.22em]" : "text-sm tracking-[0.26em]"
          }`}
        >
          {title}
        </h3>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-resume-accent),rgba(171,143,214,0.12))]" />
      </div>
      <div className={pdf ? "mt-2.5" : "mt-4"}>{children}</div>
    </section>
  );
}

export function ResumeDocument({
  compact = false,
  pdf = false,
}: {
  compact?: boolean;
  pdf?: boolean;
}) {
  return (
    <article
      className={`resume-document mx-auto w-full max-w-4xl border border-[rgba(171,143,214,0.2)] bg-white text-slate-700 shadow-[0_30px_80px_rgba(128,107,178,0.1)] ${
        pdf
          ? "rounded-none px-6 py-5"
          : "rounded-[1.75rem] px-5 py-8 sm:px-10 sm:py-10"
      }`}
    >
      <header
        className={`border-b border-[rgba(171,143,214,0.18)] text-center ${
          pdf ? "pb-3" : "pb-6"
        }`}
      >
        <h2
          className={`font-semibold tracking-tight text-slate-950 ${
            pdf ? "text-[30px]" : "text-4xl sm:text-5xl"
          }`}
        >
          {fullName}
        </h2>
        <p
          className={`font-medium text-[var(--color-resume-accent)] ${
            pdf ? "mt-1 text-[13px]" : "mt-2 text-base"
          }`}
        >
          {roleTitle}
        </p>
        <div
          className={`flex flex-wrap items-center justify-center text-slate-500 ${
            pdf ? "mt-2 gap-x-3 gap-y-1 text-[11px]" : "mt-4 gap-x-4 gap-y-2 text-sm"
          }`}
        >
          <span>{shortName}</span>
          <span className="hidden sm:inline">•</span>
          <a
            href={contactLinks.onlineJobs}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-resume-accent)] underline decoration-[rgba(171,143,214,0.35)] underline-offset-4"
          >
            OnlineJobs.ph Profile
          </a>
        </div>
      </header>

      <div className={`${pdf ? "mt-3 space-y-3.5" : "mt-8 space-y-8"}`}>
        <ResumeSection title="Summary" pdf={pdf}>
          <ul
            className={`text-slate-600 ${
              pdf ? "space-y-2 text-[13px] leading-6" : "space-y-3 text-sm leading-7 sm:text-base"
            }`}
          >
            {summaryPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className={`shrink-0 rounded-full bg-[var(--color-resume-accent)] ${
                    pdf ? "mt-2 h-1.5 w-1.5" : "mt-2 h-2 w-2"
                  }`}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Work Experience" pdf={pdf}>
          <div
            className={`rounded-[1.25rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] ${
              pdf ? "p-4" : "p-5"
            }`}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4
                  className={`font-semibold text-slate-950 ${
                    pdf ? "text-lg" : "text-xl"
                  }`}
                >
                  Student Assistant
                </h4>
                <p
                  className={`font-medium text-[var(--color-resume-accent)] ${
                    pdf ? "text-[12px]" : "text-sm"
                  }`}
                >
                  Cor Jesu College - Assessment Office
                </p>
              </div>
              <p
                className={`font-medium text-slate-500 ${
                  pdf ? "text-[12px]" : "text-sm"
                }`}
              >
                4 years
              </p>
            </div>
            <ul
              className={`text-slate-600 ${
                pdf ? "mt-3 space-y-2 text-[13px] leading-6" : "mt-4 space-y-3 text-sm leading-7 sm:text-base"
              }`}
            >
              <li>Supported assessment office operations and daily document processing.</li>
              <li>Assisted with student record handling and confidential office tasks.</li>
              <li>Helped with cashiering-related workflows and basic transaction support.</li>
              <li>Gained payroll-related exposure while maintaining accuracy and professionalism.</li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection title="Skills" pdf={pdf}>
          <div
            className={`grid ${pdf ? "gap-3 md:grid-cols-2" : `gap-5 ${compact ? "lg:grid-cols-2" : "md:grid-cols-2"}`}`}
          >
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-[1.25rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] ${
                  pdf ? "p-4" : "p-5"
                }`}
              >
                <h4
                  className={`font-semibold text-slate-900 ${
                    pdf ? "text-[14px]" : "text-base"
                  }`}
                >
                  {group.title}
                </h4>
                <ul
                  className={`text-slate-600 ${
                    pdf ? "mt-2 space-y-1 text-[12px] leading-5" : "mt-3 space-y-2 text-sm leading-7"
                  }`}
                >
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education" pdf={pdf}>
          <div
            className={`rounded-[1.25rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] ${
              pdf ? "p-4" : "p-5"
            }`}
          >
            <h4
              className={`font-semibold text-slate-950 ${
                pdf ? "text-lg" : "text-xl"
              }`}
            >
              Bachelor of Science in Business Administration
            </h4>
            <p
              className={`font-medium text-[var(--color-resume-accent)] ${
                pdf ? "mt-1 text-[12px]" : "mt-1 text-sm"
              }`}
            >
              Major in Financial Management
            </p>
            <p
              className={`text-slate-600 ${
                pdf ? "mt-2 text-[13px] leading-6" : "mt-3 text-sm leading-7 sm:text-base"
              }`}
            >
              Degree in Business Administration with a major in Financial
              Management and four years of practical office experience developed
              through long-term student assistant work.
            </p>
          </div>
        </ResumeSection>
      </div>
    </article>
  );
}
