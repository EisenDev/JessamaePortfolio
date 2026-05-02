import { contactLinks, fullName, roleTitle, shortName } from "@/data/portfolio";

const summaryPoints = [
  "Fresh graduate in Business Administration major in Financial Management with four years of hands-on student assistant experience.",
  "Experienced in assessment office support, document processing, student record assistance, cashiering support, and payroll-related exposure.",
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
      "Office communication",
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
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-resume-accent)]">
          {title}
        </h3>
        <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-resume-accent),rgba(171,143,214,0.12))]" />
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function ResumeDocument({ compact = false }: { compact?: boolean }) {
  return (
    <article className="resume-document mx-auto w-full max-w-4xl rounded-[1.75rem] border border-[rgba(171,143,214,0.2)] bg-white px-5 py-8 text-slate-700 shadow-[0_30px_80px_rgba(128,107,178,0.1)] sm:px-10 sm:py-10">
      <header className="border-b border-[rgba(171,143,214,0.18)] pb-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {fullName}
        </h2>
        <p className="mt-2 text-base font-medium text-[var(--color-resume-accent)]">
          {roleTitle}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
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

      <div className="mt-8 space-y-8">
        <ResumeSection title="Summary">
          <ul className="space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {summaryPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-resume-accent)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          <div className="rounded-[1.25rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-xl font-semibold text-slate-950">
                  Student Assistant
                </h4>
                <p className="text-sm font-medium text-[var(--color-resume-accent)]">
                  Cor Jesu College - Assessment Office
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">4 years</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
              <li>Supported assessment office operations and daily document processing.</li>
              <li>Assisted with student record handling and confidential office tasks.</li>
              <li>Helped with cashiering-related workflows and basic transaction support.</li>
              <li>Gained payroll-related exposure while maintaining accuracy and professionalism.</li>
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className={`grid gap-5 ${compact ? "lg:grid-cols-2" : "md:grid-cols-2"}`}>
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.25rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] p-5"
              >
                <h4 className="text-base font-semibold text-slate-900">
                  {group.title}
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="rounded-[1.25rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] p-5">
            <h4 className="text-xl font-semibold text-slate-950">
              Bachelor of Science in Business Administration
            </h4>
            <p className="mt-1 text-sm font-medium text-[var(--color-resume-accent)]">
              Major in Financial Management
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Fresh graduate with a foundation in financial management and
              practical office experience developed through long-term student
              assistant work.
            </p>
          </div>
        </ResumeSection>
      </div>
    </article>
  );
}
