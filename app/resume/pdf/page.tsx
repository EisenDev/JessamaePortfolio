import { ResumeDocument } from "@/components/resume-document";

export default function ResumePdfPage() {
  return (
    <main className="resume-pdf-root bg-white">
      <div className="resume-pdf-shell mx-auto">
        <ResumeDocument pdf />
      </div>
    </main>
  );
}
