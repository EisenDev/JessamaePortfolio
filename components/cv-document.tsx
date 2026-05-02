import {
  administrativeSkills,
  digitalSkills,
  experienceAreas,
  financeSkills,
  fullName,
  professionalSkills,
} from "@/data/portfolio";

const groupedSkills = [
  { title: "Administrative", items: administrativeSkills },
  { title: "Finance / Cashiering", items: financeSkills },
  { title: "Professional", items: professionalSkills },
  { title: "Tools", items: digitalSkills },
];

export function CvDocument({ compact = false }: { compact?: boolean }) {
  return (
    <article className="mx-auto w-full max-w-5xl rounded-[1.75rem] border border-[rgba(171,143,214,0.18)] bg-white px-5 py-8 shadow-[0_30px_80px_rgba(128,107,178,0.08)] sm:px-10 sm:py-10">
      <header className="border-b border-[rgba(171,143,214,0.16)] pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-resume-accent)]">
          Curriculum Vitae
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl">
          {fullName}
        </h2>
      </header>

      <div className="mt-8 grid gap-8">
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-resume-accent)]">
            Profile
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            I am a fresh graduate with a Bachelor of Science in Business
            Administration major in Financial Management. My background includes
            four years of student assistant experience in the Assessment Office
            of Cor Jesu College, where I developed practical strengths in office
            support, document handling, student assistance, and finance-related
            workflows.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-resume-accent)]">
              Education
            </h3>
            <p className="mt-4 text-lg font-semibold text-slate-950">
              Bachelor of Science in Business Administration
            </p>
            <p className="mt-1 text-sm font-medium text-slate-600">
              Major in Financial Management
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Status: Fresh graduate
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-resume-accent)]">
              Experience
            </h3>
            <p className="mt-4 text-lg font-semibold text-slate-950">
              Student Assistant
            </p>
            <p className="mt-1 text-sm font-medium text-slate-600">
              Cor Jesu College - Assessment Office
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Duration: 4 years
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-resume-accent)]">
            Experience Areas
          </h3>
          <div className={`mt-4 grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {experienceAreas.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[rgba(171,143,214,0.12)] bg-[linear-gradient(180deg,#ffffff_0%,#fcfbff_100%)] px-4 py-4 text-sm leading-7 text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-resume-accent)]">
            Skills
          </h3>
          <div className={`mt-4 grid gap-5 ${compact ? "md:grid-cols-2" : "lg:grid-cols-2"}`}>
            {groupedSkills.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] bg-[linear-gradient(180deg,#fcfbff_0%,#ffffff_100%)] p-6"
              >
                <h4 className="text-base font-semibold text-slate-900">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
