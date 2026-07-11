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
        Administrative and Finance professional with 4 years of experience supporting finance office
        operations, bookkeeping, and administrative processes in a fast-paced environment. I
        triple-check every financial document before submission, keep confidential records organized,
        and consistently deliver work on time without requiring follow-ups. Experienced in coordinating
        administrative tasks, preparing reports, managing documentation, and providing dependable
        support using Microsoft Excel, Google Workspace, and AI productivity tools. Currently expanding
        my expertise in Xero, QuickBooks Online, and Shopify to support Executive Assistant,
        Administrative Assistant, Bookkeeper, and E-commerce Virtual Assistant roles.
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
          "Bookkeeping", "Accounts Payable", "Accounts Receivable", "Bank Reconciliation",
          "Data Entry", "Invoice Processing", "Financial Record Management", "Microsoft Excel",
          "Google Sheets", "Xero", "QuickBooks Online", "Shopify", "Inventory Management",
          "Order Processing", "Customer Support", "Email Management", "Google Workspace",
          "Canva", "ChatGPT", "Time Management", "Attention to Detail", "Administrative Support"
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
        <h3 className="font-bold">Finance Office Student Assistant</h3>
        <p className="italic text-slate-700 mt-0.5">Cor Jesu College, Inc. | June 2022 - July 2026</p>
        
        <ul className="list-disc pl-5 mt-2 space-y-1.5 text-[11px] leading-relaxed text-black">
          <li>
            Assisted the finance office with daily bookkeeping and administrative operations,
            maintaining accurate financial records and confidential documents.
          </li>
          <li>
            Processed 100+ financial documents, payment records, and invoices weekly while ensuring
            completeness and accuracy.
          </li>
          <li>
            Maintained digital and physical filing systems, improving document retrieval and
            organization for finance personnel.
          </li>
          <li>
            Prepared reports, spreadsheets, and financial documentation using Microsoft Excel and
            Microsoft Word.
          </li>
          <li>
            Assisted students, faculty, and staff with finance-related inquiries while providing professional
            customer service.
          </li>
          <li>
            Supported cash collection, payment recording, and other finance office administrative tasks.
          </li>
          <li>
            Collaborated with finance staff to ensure timely processing of office transactions and
            documentation.
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
              Productivity & Admin
            </td>
            <td className="p-2 align-top">
              Google Workspace (Docs, Sheets, Slides, Drive, Calendar, Gmail), Microsoft 365 (Excel, Word, PowerPoint, Outlook), Notion, Airtable, Dropbox, OneDrive
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Communication
            </td>
            <td className="p-2 align-top">
              Slack, Zoom, Google Meet, Microsoft Teams, Loom, Calendly, Skype, Discord
            </td>
          </tr>
          <tr>
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              CRM & Marketing
            </td>
            <td className="p-2 align-top">
              HubSpot CRM, Zoho CRM, Salesforce (Basic), Mailchimp, Klaviyo, GoHighLevel (Basic), Buffer
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
              AI & Automation
            </td>
            <td className="p-2 align-top">
              ChatGPT, Google Gemini, Microsoft Copilot, Grammarly, Zapier (Basic), Make.com (Basic), Google Apps Script (Basic), Perplexity
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              Design & Content
            </td>
            <td className="p-2 align-top">
              Canva, CapCut, Adobe Express, Figma (Basic), Meta Business Suite, Pinterest, TinyPNG
            </td>
          </tr>
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
              Finance & Bookkeeping
            </td>
            <td className="p-2 align-top">
              Xero, QuickBooks Online, Wave Accounting, Microsoft Excel, Google Sheets, Bank Reconciliation, Accounts Payable, Accounts Receivable, Invoice Processing, Expense Tracking, Journal Entries, General Ledger, Financial Reporting
            </td>
          </tr>
          <tr>
            <td className="w-[180px] p-2 border-r border-slate-300 font-bold bg-slate-50/20 align-top">
              E-commerce
            </td>
            <td className="p-2 align-top">
              Shopify (Basic), WooCommerce (Basic), Amazon Seller Central (Basic), Etsy (Basic), Product Listing, Inventory Management, Order Processing, Order Tracking, Customer Support
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
        <li>Practicing Data Privacy in the Workplace - TESDA - 2025</li>
        <li>Introduction to Content Creation - TESDA - 2025</li>
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
