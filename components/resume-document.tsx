import { fullName, email, phone, location, contactLinks } from "@/data/portfolio";

export function ResumeDocument({ pdf = false }: { pdf?: boolean }) {
  const headerContent = (
    <header className="font-montserrat text-left">
      <h1 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight uppercase">
        {fullName}
      </h1>
      <div className="text-[11px] text-slate-700 mt-2 leading-relaxed">
        <div>
          <span>{email}</span>
          <span className="mx-2 text-slate-400">|</span>
          <span>{phone}</span>
          <span className="mx-2 text-slate-400">|</span>
          <span className="italic">{location}</span>
        </div>
        <div className="mt-0.5">
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-black underline"
          >
            https://www.linkedin.com/in/jessa-mae-condrillon-8a45573a5/
          </a>
          <span className="mx-2 text-slate-400">|</span>
          <a
            href={contactLinks.onlineJobs}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-black underline"
          >
            https://jessamae.vercel.app/
          </a>
        </div>
      </div>
    </header>
  );

  const summaryContent = (
    <section className="mt-5 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Professional Summary
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      <p className="text-[11.5px] leading-relaxed text-black text-justify">
        Detail-oriented Business Administration graduate major in Financial Management and certified Bookkeeper with 
        4 years of hands-on experience supporting administrative and financial workflows in the Assessment Office 
        of Cor Jesu College. Specializes in virtual bookkeeping, bank reconciliation, ledger management, data cleaning, 
        and invoice/expense tracking. Known for absolute accuracy, double-checking numbers, meeting deadlines, and 
        maintaining strict confidentiality. Proficient in Xero, QuickBooks Online, and advanced Excel formulas to 
        help businesses keep clear and balanced financial records.
      </p>
    </section>
  );

  const skillsContent = (
    <section className="mt-5 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Key Skills
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      <p className="text-[11px] leading-relaxed text-black">
        {[
          "Virtual Bookkeeping", "General Ledger Management", "Accounts Payable (A/P)",
          "Accounts Receivable (A/R)", "Bank & Cash Reconciliation", "Data Cleaning & Entry",
          "Invoice & Billing Processing", "Expense Tracking & Mapping", "Financial Documentation",
          "Microsoft Excel (VLOOKUP, XLOOKUP, Pivot Tables)", "Google Sheets", "Xero (Xero Advisor)",
          "QuickBooks Online", "SOP Development", "Inbox & Calendar Management",
          "Time Management", "Accuracy & Detail Focus", "Confidential Record Handling",
          "Administrative Office Support", "Customer Service & Communication"
        ].join(" | ")}
      </p>
    </section>
  );

  const experienceContent = (
    <section className="mt-5 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Professional Experience
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      
      <div className="text-[11.5px] text-black">
        <h3 className="font-bold">Student Assistant (Assessment Office)</h3>
        <p className="italic text-slate-700 mt-0.5">Cor Jesu College | June 2022 - July 2026</p>
        
        <ul className="list-disc pl-5 mt-2 space-y-1.5 text-[11px] leading-relaxed text-black">
          <li>
            Supported assessment office operations, helping manage daily administrative tasks and bookkeeping-related workflows.
          </li>
          <li>
            Assisted with cashiering support, recording payments, and performing daily transaction reconciliations with high accuracy.
          </li>
          <li>
            Gained exposure to payroll-related workflows by organizing timesheets, verifying hours, and processing payroll documentation.
          </li>
          <li>
            Managed student records and document processing, handling highly confidential academic and financial information securely.
          </li>
          <li>
            Created and maintained organized digital spreadsheets using Microsoft Excel and Google Sheets for administrative tracking.
          </li>
          <li>
            Communicated with students, faculty, and office visitors to resolve inquiries with patience, professionalism, and clarity.
          </li>
          <li>
            Ensured absolute accuracy, privacy compliance, and strict attention to detail in all document verification tasks.
          </li>
        </ul>
      </div>
    </section>
  );

  // Tech Proficiency - Split into Page 1 and Page 2 parts
  const techTablePage1 = (
    <section className="mt-5 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Tech Proficiency
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      
      <table className="w-full border-collapse border border-slate-300 text-[11px] text-black">
        <tbody>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Accounting & Finance
            </td>
            <td className="p-2 align-top">
              Xero (Xero Advisor), QuickBooks Online, Microsoft Excel, Google Sheets, Bank Reconciliation, General Ledger, Accounts Payable (A/P), Accounts Receivable (A/R), Invoicing, Expense Tracking, Basic Payroll Documentation
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Productivity & Admin
            </td>
            <td className="p-2 align-top">
              Google Workspace (Docs, Sheets, Slides, Drive, Calendar, Gmail), Microsoft 365 (Word, Excel, PowerPoint, Outlook), Notion, PDF Tools, Dropbox, OneDrive
            </td>
          </tr>
          <tr>
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Communication
            </td>
            <td className="p-2 align-top">
              Slack, Zoom, Google Meet, Microsoft Teams, Loom, Skype, Discord
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );

  const techTablePage2 = (
    <section className="font-montserrat">
      <table className="w-full border-collapse border border-slate-300 text-[11px] text-black">
        <tbody>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Project Management
            </td>
            <td className="p-2 align-top">
              Asana, Trello, ClickUp, Monday.com, Notion, Airtable
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              AI & Productivity
            </td>
            <td className="p-2 align-top">
              ChatGPT, Google Gemini, Microsoft Copilot, Grammarly, Perplexity
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Customer Service
            </td>
            <td className="p-2 align-top">
              Zendesk, Freshdesk, email management tools, customer support, ticketing systems
            </td>
          </tr>
          <tr>
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Administrative & SOPs
            </td>
            <td className="p-2 align-top">
              Standard Operating Procedures (SOPs) development, database clean-up, filing and records management, spreadsheet calculations
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );

  const educationContent = (
    <section className="mt-6 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Education
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      <div className="text-[11px] text-black">
        <h3 className="font-bold">
          Bachelor of Science in Business Administration Major in Financial Management
        </h3>
        <p className="italic text-slate-700 mt-0.5">
          Cor Jesu College, Inc. | Davao City, Philippines | 2026
        </p>
        <p className="italic text-slate-700 mt-0.5">Annual Awardee</p>
      </div>
    </section>
  );

  const certificationsContent = (
    <section className="mt-6 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Certifications
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      <ul className="list-disc pl-5 space-y-1 text-[11px] text-black">
        <li>Bookkeeping NC III - Technical Education and Skills Development Authority (TESDA) - 2025</li>
      </ul>
    </section>
  );

  const remoteWorkContent = (
    <section className="mt-6 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Remote Work Readiness
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      <div className="space-y-1 text-[11px] leading-relaxed text-black">
        <div>
          <span className="font-bold">Internet: </span>
          <span className="italic">Primary: Converge Fiber 100 Mbps | Backup: Smart 5G mobile hotspot</span>
        </div>
        <div>
          <span className="font-bold">Power Backup: </span>
          <span className="italic">APC UPS 1100VA (3-hour backup) | Generator access in building</span>
        </div>
        <div>
          <span className="font-bold">Equipment: </span>
          <span className="italic">CHUWI / Lenovo LOQ / Dual monitors | Noise-cancelling headset | HD webcam</span>
        </div>
        <div>
          <span className="font-bold">Workspace: </span>
          <span className="italic">Dedicated home office | Quiet environment | Professional video-call background</span>
        </div>
        <div>
          <span className="font-bold">Availability: </span>
          <span className="italic">Full-time | Flexible across US (EST/PST), UK (GMT), AU (AEST) time zones</span>
        </div>
      </div>
    </section>
  );

  const languagesContent = (
    <section className="mt-6 font-montserrat">
      <h2 className="text-[12px] font-bold tracking-wider text-black uppercase">
        Languages
      </h2>
      <div className="h-[1px] w-full bg-[#00c4cc] mt-1 mb-2.5" />
      <div className="text-[11px] leading-relaxed text-black">
        <div>
          <span className="font-bold">English: </span>
          <span>Fluent / Proficient</span>
        </div>
        <div className="mt-0.5">
          <span className="font-bold">Filipino: </span>
          <span>Native / Fluent</span>
        </div>
      </div>
    </section>
  );

  // Output format selection
  if (pdf) {
    return (
      <div className="resume-pdf-layout flex flex-col bg-white">
        {/* Page 1 */}
        <div className="print-page w-[210mm] h-[296mm] box-border px-[24mm] py-[20mm] bg-white border-b border-dashed border-slate-200 print:border-b-0 print:h-[297mm] print:overflow-hidden relative flex flex-col justify-between z-10 page-break-after">
          <div>
            {headerContent}
            {summaryContent}
            {skillsContent}
            {experienceContent}
            {techTablePage1}
          </div>
        </div>
        
        {/* Page 2 */}
        <div className="print-page w-[210mm] h-[296mm] box-border px-[24mm] py-[20mm] bg-white print:h-[297mm] print:overflow-hidden relative flex flex-col justify-between z-10">
          <div>
            {techTablePage2}
            {educationContent}
            {certificationsContent}
            {remoteWorkContent}
            {languagesContent}
          </div>
        </div>
      </div>
    );
  }

  // Web interactive preview container
  return (
    <div className="resume-web-container flex flex-col gap-10 items-center justify-center py-6 px-1 max-w-full overflow-x-auto">
      {/* Page 1 Sheet */}
      <div className="w-[210mm] max-w-full min-h-[297mm] bg-white border border-slate-200 shadow-md rounded-lg px-8 sm:px-14 py-12 flex flex-col justify-between box-border overflow-hidden shrink-0">
        <div>
          {headerContent}
          {summaryContent}
          {skillsContent}
          {experienceContent}
          {techTablePage1}
        </div>
      </div>

      {/* Page 2 Sheet */}
      <div className="w-[210mm] max-w-full min-h-[297mm] bg-white border border-slate-200 shadow-md rounded-lg px-8 sm:px-14 py-12 flex flex-col justify-between box-border overflow-hidden shrink-0">
        <div>
          {techTablePage2}
          {educationContent}
          {certificationsContent}
          {remoteWorkContent}
          {languagesContent}
        </div>
      </div>
    </div>
  );
}
