import { Container } from "@/components/layout/container";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { profileData } from "@/data/profile";
import { Globe, FileText, ArrowUpRight, UserCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { contact } = profileData;

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <Globe className="w-5 h-5" />;
      case "onlinejobs.ph":
        return <UserCircle className="w-5 h-5" />;
      case "resume":
        return <FileText className="w-5 h-5" />;
      case "email":
        return <Mail className="w-5 h-5" />;
      default:
        return <ArrowUpRight className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-40 relative overflow-hidden bg-[#111111] dark:bg-[#F6F3ED] text-[#F6F3ED] dark:text-[#111111] transition-colors duration-300"
    >
      <Container className="relative z-10">
        <MotionWrapper>
          <div className="flex flex-col items-center text-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#A68A64] uppercase mb-6">
              {contact.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight max-w-3xl text-balance">
              {contact.title}
            </h2>

            <p className="text-base sm:text-lg text-[#B8B1A5] dark:text-[#6F6A62] mb-12 max-w-2xl leading-relaxed font-normal text-balance">
              {contact.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center gap-3 h-13 sm:h-14 px-7 sm:px-8 rounded-full transition-all text-sm sm:text-base font-semibold",
                    social.name === "Resume"
                      ? "bg-[#A68A64] text-white hover:scale-105 shadow-md"
                      : social.name === "OnlineJobs.ph"
                      ? "bg-[#F6F3ED] dark:bg-[#111111] text-[#111111] dark:text-[#F6F3ED] hover:scale-105 shadow-md"
                      : "border-2 border-[#F6F3ED]/25 dark:border-[#111111]/20 text-[#F6F3ED] dark:text-[#111111] hover:bg-[#F6F3ED]/10 dark:hover:bg-[#111111]/5"
                  )}
                >
                  {getSocialIcon(social.name)}
                  <span>{social.name}</span>
                  {social.name === "Resume" && <ArrowUpRight className="w-4 h-4 opacity-80" />}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-28 text-center border-t border-[#F6F3ED]/10 dark:border-[#111111]/10 pt-10">
            <p className="text-xs font-medium tracking-widest text-[#F6F3ED]/40 dark:text-[#111111]/40 uppercase">
              &copy; 2026 {profileData.name} | Bookkeeper Virtual Assistant Portfolio
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
