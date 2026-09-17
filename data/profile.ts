export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  role: string;
  tagline: string;
  location: string;
  resumeHref: string;
  about: {
    title: string;
    description: string[];
    highlights: {
      title: string;
      description: string;
    }[];
    closingStatement: string;
  };
  expertise: {
    title: string;
    description: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  tools: {
    title: string;
    description: string;
    categories: {
      name: string;
      items: {
        name: string;
        description: string;
      }[];
    }[];
  };
  projects: {
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      category: string;
      description: string;
      highlights: string[];
      tools: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    socials: {
      name: string;
      href: string;
    }[];
  };
}

export const profileData: ProfileData = {
  name: "Jessa Mae R. Condrillon",
  shortName: "Jessa Mae",
  monogram: "JC.",
  role: "Bookkeeper Virtual Assistant",
  tagline: "Accurate Records. Organized Finances. Reliable Support.",
  location: "Davao City, Philippines",
  resumeHref: "/resume",

  about: {
    title: "About Me",
    description: [
      "I'm a Finance Management graduate with 4 years of experience supporting finance office operations. My background has given me practical exposure to Accounts Receivable (AR), Accounts Payable (AP), transaction recording, journaling, data entry, and financial recordkeeping.",
      "I also completed Accounting 1 and Accounting 2, which helped me build a strong foundation in accounting principles, journal entries, and financial transactions.",
      "I'm detail-oriented, organized, and comfortable working with numbers and financial records. As a Bookkeeper Virtual Assistant, I'm focused on keeping records accurate, organized, and up to date while providing reliable support to businesses and accounting teams.",
    ],
    highlights: [
      {
        title: "Financial & Accounting Knowledge",
        description: "Completed Accounting 1 and Accounting 2, building a strong foundation in accounting principles, journal entries, and financial operations.",
      },
      {
        title: "AR & AP Support",
        description: "Practical exposure to accounts receivable, accounts payable, payment verification, invoicing, and receipt tracking.",
      },
      {
        title: "Transaction Recording & Journaling",
        description: "Dedicated to precision in general journals, daily ledger posting, cash receipts, and meticulous recordkeeping.",
      },
      {
        title: "Excel & Spreadsheet Management",
        description: "Skilled in financial data entry, formulas, sorting, filtering, expense tracking, and reconciliation worksheets with high confidentiality.",
      },
    ],
    closingStatement:
      "I keep financial records accurate, organized, and up to date while providing reliable, confidential support to businesses and accounting teams.",
  },

  expertise: {
    title: "My Expertise",
    description:
      "Practical core proficiencies across bookkeeping cycles, administrative office operations, and spreadsheet-driven financial reporting.",
    categories: [
      {
        name: "Bookkeeping",
        items: [
          "Accounts Receivable (AR)",
          "Accounts Payable (AP)",
          "Transaction Recording",
          "Journal Entries & Journaling",
          "General Ledger Maintenance",
          "Double-entry Bookkeeping",
        ],
      },
      {
        name: "Financial Admin",
        items: [
          "Client Invoicing",
          "Cash Receipts & Disbursements",
          "Data Entry & Records Filing",
          "Cashiering & Cash Balancing",
          "Timesheet & Payroll Support",
          "Confidential Record Handling",
        ],
      },
      {
        name: "Reporting & Excel",
        items: [
          "Microsoft Excel (Formulas, Pivot)",
          "Google Sheets Collaboration",
          "Expense Tracking Reports",
          "Profit & Loss (P&L) Statements",
          "Bank & Account Reconciliation",
          "Financial Summary Sheets",
        ],
      },
    ],
  },

  tools: {
    title: "Tools & Software",
    description:
      "Industry-standard accounting platforms, spreadsheet suites, and collaborative file management tools I use daily.",
    categories: [
      {
        name: "Accounting & Bookkeeping",
        items: [
          {
            name: "QuickBooks Online",
            description: "Bookkeeping, transaction recording, account organization, and financial data management.",
          },
          {
            name: "Xero",
            description: "Accounting and bookkeeping platform for organizing financial transactions and records.",
          },
        ],
      },
      {
        name: "Spreadsheets & Data",
        items: [
          {
            name: "Microsoft Excel",
            description: "Financial data entry, formulas, sorting and filtering, expense tracking, reconciliation worksheets, and basic financial reporting.",
          },
          {
            name: "Google Sheets",
            description: "Cloud-based spreadsheet management, financial tracking, data organization, and collaborative recordkeeping.",
          },
        ],
      },
      {
        name: "Documentation & File Management",
        items: [
          {
            name: "Microsoft Word",
            description: "Financial documentation, reports, and professional business documents.",
          },
          {
            name: "Google Docs",
            description: "Digital documentation, standard operating procedures (SOPs), and collaborative recordkeeping.",
          },
          {
            name: "Google Drive",
            description: "Organizing and managing digital financial documents, folder structures, and supporting archives.",
          },
        ],
      },
    ],
  },

  projects: {
    title: "Bookkeeping Projects",
    description:
      "Hands-on project workflows demonstrating core double-entry cycles, receivables, payables, reconciliations, and financial reporting.",
    items: [
      {
        number: "01",
        title: "Project 01: General Journal",
        category: "Double-Entry Bookkeeping",
        description:
          "Systematic recording of daily business transactions using double-entry principles, debit and credit validation, and chronological journal entries with proper account classification.",
        highlights: [
          "Accurate debit and credit transaction recording with clear audit trails",
          "Detailed transaction descriptions referencing source documents and receipts",
          "Structured chart of accounts adherence for balanced ledger postings",
        ],
        tools: ["General Journal", "Double-Entry", "Excel", "Chart of Accounts"],
      },
      {
        number: "02",
        title: "Project 02: Accounts Receivable",
        category: "Invoicing & Cash Receipts",
        description:
          "End-to-end receivables management: issuing client invoices, recording cash receipts, tracking outstanding balances, and maintaining customer sub-ledgers.",
        highlights: [
          "Accurate customer invoice preparation and prompt delivery tracking",
          "Accounts Receivable aging schedule review to monitor overdue collections",
          "Prompt matching of client payments with invoices and bank deposit logs",
        ],
        tools: ["QuickBooks Online", "Invoicing", "AR Aging", "Customer Ledgers"],
      },
      {
        number: "03",
        title: "Project 03: Accounts Payable",
        category: "Bills & Disbursements",
        description:
          "Verification of vendor bills against purchase orders, tracking payment due dates, preparing disbursement schedules, and maintaining vendor sub-ledgers.",
        highlights: [
          "Bill verification and 3-way matching of receipts, invoices, and purchase orders",
          "Payment voucher compilation and scheduled disbursement tracking",
          "Vendor ledger reconciliation to prevent duplicate payments or late penalties",
        ],
        tools: ["Xero", "Vendor Ledgers", "Payment Vouchers", "Disbursements"],
      },
      {
        number: "04",
        title: "Project 04: Bank Reconciliation",
        category: "Cash Verification & Control",
        description:
          "Detailed reconciliation of bank account statements against internal general ledger cash accounts, identifying deposits in transit, outstanding checks, and bank charges.",
        highlights: [
          "Line-by-line verification between bank feeds and recorded company transactions",
          "Clear accounting for outstanding checks, deposits in transit, and bank fees",
          "Formulation of adjusting journal entries for accurate end-of-month cash balances",
        ],
        tools: ["Bank Statements", "Excel Formulas", "Cash Control", "Adjusting Entries"],
      },
      {
        number: "05",
        title: "Project 05: Income & Expense Tracker",
        category: "Cash Flow Management",
        description:
          "Comprehensive spreadsheet tracking system to categorize revenue streams, monitor recurring operating expenses, and provide real-time visibility into business spending.",
        highlights: [
          "Custom categorization for direct and indirect operating expenditures",
          "Automated dynamic formulas (SUMIFS, XLOOKUP, Filter) for instant summaries",
          "Monthly variance analysis to help business owners monitor budget thresholds",
        ],
        tools: ["Google Sheets", "Expense Reports", "Spreadsheet Formulas", "Budget Tracking"],
      },
      {
        number: "06",
        title: "Project 06: Profit & Loss",
        category: "Financial Performance Reporting",
        description:
          "Compilation of periodic financial performance reports summarizing revenue, cost of goods sold (COGS), and operating expenses to calculate gross margin and net profit.",
        highlights: [
          "Clear breakdown of operational revenue, COGS, and overhead expenses",
          "Accurate computation of Gross Profit Margin and Net Operating Income",
          "Clean executive-level presentation designed for management decision-making",
        ],
        tools: ["Financial Statements", "P&L Reporting", "Excel", "Performance Review"],
      },
      {
        number: "07",
        title: "Project 07: Month-End Bookkeeping",
        category: "Closing Cycle & Finalization",
        description:
          "Structured month-end closing workflow encompassing trial balance verification, accruals, prepayments, ledger balance finalization, and reporting packet preparation.",
        highlights: [
          "Unadjusted to adjusted trial balance verification and error detection",
          "Preparation and posting of month-end adjusting and closing entries",
          "Compilation of an organized month-end financial summary and reconciliation binder",
        ],
        tools: ["Month-End Close", "Trial Balance", "Adjusting Entries", "Financial Pack"],
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Accurate Records. Organized Finances. Reliable Support.",
    description:
      "Looking for a detail-oriented Bookkeeper Virtual Assistant to keep your financial records audit-ready and up to date? Reach out through the platforms below to connect.",
    socials: [
      {
        name: "OnlineJobs.ph",
        href: "https://www.onlinejobs.ph/jobseekers/info/4691529",
      },
      {
        name: "Resume",
        href: "/resume",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jessa-mae-condrillon-8a45573a5/",
      },
      {
        name: "Email",
        href: "mailto:jessamaeramirezcondrillon2026@gmail.com",
      },
    ],
  },
};
