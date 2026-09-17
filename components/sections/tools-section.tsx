import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { cn } from "@/lib/utils";

interface ToolItem {
  name: string;
  category: string;
  badge: string;
  description: string;
  capabilities: string[];
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

const toolsList: { categoryName: string; items: ToolItem[] }[] = [
  {
    categoryName: "Accounting & Bookkeeping",
    items: [
      {
        name: "QuickBooks Online",
        category: "Cloud Accounting",
        badge: "General Ledger & AR/AP",
        description:
          "End-to-end bookkeeping, transaction categorization, bank feed management, account organization, and financial data management.",
        capabilities: ["Transaction Recording", "Invoicing", "Bank Feeds", "AR/AP Tracking"],
        color: "#2CA01C",
        bgColor: "rgba(44, 160, 28, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#2CA01C" />
            <path
              d="M16 7C11.03 7 7 11.03 7 16C7 20.97 11.03 25 16 25C20.97 25 25 20.97 25 16C25 11.03 20.97 7 16 7ZM15 21C12.24 21 10 18.76 10 16C10 13.24 12.24 11 15 11V13C13.34 13 12 14.34 12 16C12 17.66 13.34 19 15 19V21ZM17 21V19C18.66 19 20 17.66 20 16C20 14.34 18.66 13 17 13V11C19.76 11 22 13.24 22 16C22 18.76 19.76 21 17 21Z"
              fill="white"
            />
          </svg>
        ),
      },
      {
        name: "Xero",
        category: "Cloud Accounting",
        badge: "Bank Feeds & Bills",
        description:
          "Comprehensive accounting and bookkeeping platform for organizing financial transactions, reconciliations, and vendor records.",
        capabilities: ["Bank Reconciliations", "Bills Management", "Financial Reports", "Chart of Accounts"],
        color: "#13B5EA",
        bgColor: "rgba(19, 181, 234, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#13B5EA" />
            <circle cx="16" cy="16" r="10" fill="#0D9BC9" />
            <path
              d="M11 11L14.5 16L11 21M14.5 16L18 11M14.5 16L18 21M21 16H20.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    categoryName: "Spreadsheets & Data",
    items: [
      {
        name: "Microsoft Excel",
        category: "Financial Modeling",
        badge: "Advanced Formulas",
        description:
          "Financial data entry, formulas (XLOOKUP, VLOOKUP, SUMIFS), sorting and filtering, expense tracking, and reconciliation worksheets.",
        capabilities: ["XLOOKUP / Formulas", "Pivot Tables", "Reconciliation Worksheets", "Data Filtering"],
        color: "#107C41",
        bgColor: "rgba(16, 124, 65, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#107C41" />
            <path d="M7 9H17V23H7V9Z" fill="#185C37" />
            <path d="M17 9H25V23H17V9Z" fill="#21A366" />
            <rect x="9" y="11" width="14" height="10" rx="1.5" fill="#33C481" opacity="0.3" />
            <path
              d="M11.5 13L15.5 19M15.5 13L11.5 19"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        name: "Google Sheets",
        category: "Cloud Spreadsheets",
        badge: "Collaborative Reporting",
        description:
          "Cloud-based spreadsheet management, financial tracking, data organization, shared workbooks, and collaborative recordkeeping.",
        capabilities: ["Real-Time Tracking", "Collaborative Worksheets", "Dynamic Formulas", "Cloud Sync"],
        color: "#0F9D58",
        bgColor: "rgba(15, 157, 88, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#0F9D58" />
            <path d="M9 8H19L23 12V24H9V8Z" fill="white" />
            <path d="M19 8V12H23" fill="#E8F5E9" />
            <path
              d="M12 14H20M12 17H20M12 20H17"
              stroke="#0F9D58"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    categoryName: "Documentation & File Management",
    items: [
      {
        name: "Microsoft Word",
        category: "Office Suite",
        badge: "Business Reports",
        description:
          "Structured financial documentation, formal office reports, executive summaries, and professional business communications.",
        capabilities: ["Financial Summaries", "SOP Documentation", "Business Letters", "Formal Memorandums"],
        color: "#185ABD",
        bgColor: "rgba(24, 90, 189, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#185ABD" />
            <path d="M7 9H17V23H7V9Z" fill="#103F91" />
            <path d="M17 9H25V23H17V9Z" fill="#2B7CD3" />
            <path
              d="M10.5 13.5L12 18.5L14 14.5L16 18.5L17.5 13.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        name: "Google Docs",
        category: "Cloud Docs",
        badge: "Process Documentation",
        description:
          "Digital documentation, standard operating procedures (SOPs), shared knowledge bases, and collaborative recordkeeping.",
        capabilities: ["Process Walkthroughs", "SOP Repository", "Meeting Notes", "Team Review"],
        color: "#4285F4",
        bgColor: "rgba(66, 133, 244, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#4285F4" />
            <path d="M9 8H19L23 12V24H9V8Z" fill="white" />
            <path d="M19 8V12H23" fill="#E8F0FE" />
            <path
              d="M12 14H18M12 17H20M12 20H16"
              stroke="#4285F4"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        name: "Google Drive",
        category: "Cloud Storage",
        badge: "Audit Archive",
        description:
          "Organizing and securing digital financial documents, folder structures, confidential archiving, and supporting files.",
        capabilities: ["Audit File Storage", "Folder Hierarchies", "Confidential Access", "Quick Retrieval"],
        color: "#FBBC05",
        bgColor: "rgba(251, 188, 5, 0.12)",
        icon: (
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 shrink-0">
            <rect width="32" height="32" rx="8" fill="#1F2937" />
            <path d="M12.5 8L6 19.5H12L18.5 8H12.5Z" fill="#34A853" />
            <path d="M19.5 8L26 19.5L23 25L13.5 8.5H19.5V8Z" fill="#4285F4" />
            <path d="M12 19.5L9 25H22L25 19.5H12Z" fill="#FBBC05" />
          </svg>
        ),
      },
    ],
  },
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-28 md:py-40 bg-surface border-t border-border/40">
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="Tooling & Stack"
            title="Tools & Software"
            description="Industry-standard accounting platforms, spreadsheet suites, and collaborative file management tools I use daily."
            align="center"
            className="mb-20 md:mb-24"
          />
        </MotionWrapper>

        <div className="space-y-16 max-w-6xl mx-auto">
          {toolsList.map((category, catIdx) => (
            <div key={catIdx} className="space-y-8">
              {/* Category Header with Accent Bar */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-accent rounded-full shrink-0" />
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground uppercase">
                  {category.categoryName}
                </h3>
              </div>

              {/* Grid of Visual Tool Cards */}
              <div className={cn(
                "grid gap-6",
                category.items.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2"
              )}>
                {category.items.map((tool, toolIdx) => (
                  <MotionWrapper key={toolIdx} delay={toolIdx * 0.1}>
                    <Card
                      variant="elevated"
                      className="h-full flex flex-col p-6 sm:p-7 group hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 rounded-lg bg-surface border-border/60 hover:shadow-md"
                    >
                      {/* Top Bar: Icon + Titles */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="p-2.5 rounded-lg border border-border/40 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                          style={{ backgroundColor: tool.bgColor }}
                        >
                          {tool.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h4 className="text-lg font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                              {tool.name}
                            </h4>
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-surface-elevated text-muted border border-border/40">
                              {tool.badge}
                            </span>
                          </div>
                          <span className="text-xs text-accent font-semibold tracking-wide block">
                            {tool.category}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                        {tool.description}
                      </p>

                      {/* Feature / Capability Pills */}
                      <div className="pt-4 border-t border-border/40 flex flex-wrap gap-1.5 mt-auto">
                        {tool.capabilities.map((cap, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-sm bg-surface-elevated/70 text-foreground/80 border border-border/30 group-hover:border-accent/20 transition-colors"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
