import Link from "next/link";
import { Header } from "@/components/header";
import { ProfilePhoto } from "@/components/profile-photo";
import { ResumeDocument } from "@/components/resume-document";
import { SectionHeading } from "@/components/section-heading";
import {
  aboutParagraphs,
  administrativeSkills,
  contactLinks,
  digitalSkills,
  experiencePoints,
  financeSkills,
  fullName,
  heroHighlights,
  professionalSkills,
  roleTitle,
  shortName,
} from "@/data/portfolio";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <article className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_50px_rgba(181,138,153,0.14)] backdrop-blur">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Header items={navigationItems} />
      <main className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(243,190,207,0.45),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(192,210,255,0.4),_transparent_28%),linear-gradient(180deg,_#fffaf8_0%,_#ffffff_72%)]" />

        <section
          id="home"
          className="mx-auto max-w-7xl px-5 pt-32 pb-12 sm:px-8 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-[var(--color-border)] bg-white/90 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_12px_30px_rgba(226,190,150,0.18)] backdrop-blur">
                {roleTitle}
              </div>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  {fullName}
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  I am a fresh graduate with 4 years of hands-on experience in
                  assessment office support, administrative work, cashiering
                  support, payroll-related tasks, and e-commerce marketing.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  My goal is to bring dependable office support, financial
                  management knowledge, and a service-oriented work ethic to a
                  professional team.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#resume"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(210,122,156,0.32)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View Resume
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
                >
                  Open Resume Page
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_30px_70px_rgba(169,132,152,0.18)] backdrop-blur">
                <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                  <ProfilePhoto
                    src="/profile.jpg"
                    alt={`${fullName} profile photo`}
                    initials="JMC"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                      Professional Profile
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                      {shortName}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      I offer practical office experience, professionalism, and
                      attention to detail shaped by four years of consistent
                      support work in the Assessment Office of Cor Jesu College.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_30px_70px_rgba(169,132,152,0.18)] backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                  Career Snapshot
                </p>
                <div className="mt-6 grid gap-4">
                  {heroHighlights.map((card) => (
                    <div
                      key={card}
                      className="rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-4 text-base font-medium text-slate-700 shadow-[0_15px_35px_rgba(232,200,165,0.14)]"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(127,145,181,0.12)]">
            <SectionHeading
              eyebrow="About"
              title="I bring practical office experience together with a strong academic foundation in financial management"
              description="I completed my Bachelor of Science in Business Administration major in Financial Management while building hands-on experience through student assistant work."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(127,145,181,0.12)]">
              <SectionHeading
                eyebrow="Experience"
                title="Student Assistant, Cor Jesu College - Assessment Office"
                description="I spent 4 years supporting daily office operations in an academic environment that required professionalism, accuracy, and consistent service."
              />
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-[var(--color-soft)] px-4 py-2 font-medium text-slate-700">
                  Role: Student Assistant
                </span>
                <span className="rounded-full bg-[var(--color-soft-blue)] px-4 py-2 font-medium text-slate-700">
                  Duration: 4 years
                </span>
              </div>
              <ul className="mt-8 space-y-4 text-base leading-8 text-slate-600">
                {experiencePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(127,145,181,0.12)]">
              <SectionHeading
                eyebrow="Finance & Marketing"
                title="Cashiering, payroll, and e-commerce marketing"
                description="My background also includes support work connected to cashiering, payroll, and e-commerce marketing initiatives."
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  I assisted with cashiering-related workflows, basic transaction
                  handling, and office coordination that required care and
                  accuracy.
                </p>
                <p>
                  I gained payroll-related exposure and e-commerce marketing knowledge through administrative
                  support responsibilities that involved confidentiality,
                  timeliness, and attention to detail.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(127,145,181,0.12)]">
            <SectionHeading
              eyebrow="Skills"
              title="My strengths are organized into clear, job-ready categories"
              description="Each skill group below reflects the work habits, support experience, and practical office abilities I can bring to a professional role."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <SkillCard
                title="Administrative Skills"
                skills={administrativeSkills}
              />
              <SkillCard
                title="Finance / Cashiering Skills"
                skills={financeSkills}
              />
              <SkillCard title="Professional Skills" skills={professionalSkills} />
              <SkillCard
                title="Tools / Basic Digital Skills"
                skills={digitalSkills}
              />
            </div>
          </div>
        </section>

        <section
          id="resume"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(127,145,181,0.12)]">
            <SectionHeading
              eyebrow="Resume"
              title="A clear one-page resume preview for quick review"
              description="This embedded resume view is designed to be easy to scan while still giving recruiters direct access to a printable version."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f0c987,#e0a96d)] px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_35px_rgba(224,169,109,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Resume PDF
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
              >
                View Resume
              </Link>
            </div>
            <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-[rgba(171,143,214,0.22)] bg-[linear-gradient(180deg,#fbf8ff_0%,#fefefe_18%,#ffffff_100%)] p-4 shadow-[0_28px_70px_rgba(130,112,178,0.16)] sm:p-6">
              <ResumeDocument compact />
            </div>
          </div>
        </section>

        {/*
        <section
          id="cv"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10"
        >
          CV section commented out for now.
        </section>
        */}

        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 pt-12 pb-20 sm:px-8 lg:px-10"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(127,145,181,0.12)]">
            <SectionHeading
              eyebrow="Contact"
              title="I am open to opportunities and recruiter inquiries"
              description="For work opportunities and profile review, my confirmed external profile is available below."
            />
            <div className="mt-8">
              <a
                href={contactLinks.onlineJobs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-[1.5rem] border border-[var(--color-border)] bg-white px-6 py-4 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
              >
                View OnlineJobs.ph Profile
              </a>
            </div>
            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600">
              I am open to entry-level opportunities in administrative support,
              office operations, cashiering-related work, e-commerce marketing, and finance-related
              roles where I can contribute with professionalism, accuracy, and a
              strong willingness to learn.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-white/80 px-5 py-6 text-center text-sm text-slate-500 backdrop-blur sm:px-8 lg:px-10">
        © 2026 {fullName}. All rights reserved.
      </footer>
    </>
  );
}
