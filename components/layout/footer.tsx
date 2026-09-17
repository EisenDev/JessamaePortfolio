import { profileData } from "@/data/profile";
import { Container } from "./container";

export function Footer() {
  const year = 2026;
  const { contact } = profileData;

  return (
    <footer className="bg-background border-t border-border/40 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <span className="text-2xl font-bold tracking-tighter text-foreground">
              JC<span className="text-accent">.</span>
            </span>
            <p className="text-sm text-muted leading-relaxed max-w-[280px]">
              {profileData.tagline} Professional bookkeeping, financial administration, and reliable virtual support.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-12 grid-cols-2 md:grid-cols-3">
            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-tight text-accent">Navigation</h4>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {[
                  { label: "About", href: "#about" },
                  { label: "Expertise", href: "#expertise" },
                  { label: "Tools & Software", href: "#tools" },
                  { label: "Bookkeeping Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-tight text-accent">Links</h4>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {contact.socials.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.name === "Resume" || link.name === "OnlineJobs.ph" || link.name === "LinkedIn" ? "_blank" : undefined}
                      rel={link.name === "Resume" || link.name === "OnlineJobs.ph" || link.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-semibold tracking-tight text-accent">Status</h4>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
                <span className="text-sm font-semibold text-foreground tracking-tight">
                  Available for Bookkeeper & VA work
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-wide text-muted/70">
            &copy; {year} {profileData.name} | Bookkeeper Virtual Assistant
          </p>
          <div className="text-xs font-medium tracking-wide text-muted/70">
            Accurate Records. Organized Finances. Reliable Support.
          </div>
        </div>
      </Container>
    </footer>
  );
}
