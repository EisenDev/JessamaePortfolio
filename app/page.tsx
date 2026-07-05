"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, Briefcase, CheckCircle, Star, Users, Monitor, Calculator, Folder,
  MessageSquare, Calendar, Landmark
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Tools", href: "#tools" },
  { name: "Work", href: "#work" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/75 backdrop-blur-md border-b border-gold/10 shadow-sm transition-all">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-10 xl:px-16 py-5 flex items-center justify-between">
        <Link href="#home" className="text-[1.6rem] lg:text-[1.8rem] font-serif text-foreground tracking-wide hover:text-gold transition-colors flex items-center gap-2">
          Jessa Mae Condrillon
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold shrink-0">
            <path d="M2 22C12 22 17 12 17 2" />
            <path d="M9 14c1.5-1 3-3 3-5" />
          </svg>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href} className="text-[15px] xl:text-[16px] font-serif text-foreground hover:text-gold transition-colors tracking-wide">
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[850px] w-full flex items-end overflow-hidden">
      
      {/* Decorative Left Branch */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-16 bottom-0 w-[450px] opacity-30 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />

      {/* Main Grid Layout to align perfectly with the header */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-10 xl:px-16 flex flex-col lg:flex-row items-center lg:items-end justify-between h-full relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center space-y-8 pb-32 pt-16 w-full max-w-[55%] lg:mb-[12vh]">
          <div className="flex flex-col space-y-4">
            <span className="text-[2.2rem] lg:text-[2.6rem] font-serif text-gold font-light tracking-wide italic">Jessa Mae Condrillon</span>
            <div className="flex items-center gap-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold shrink-0">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              <div className="h-[1.5px] w-64 bg-gold/50 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-gold/70 transform rotate-45" />
              </div>
            </div>
          </div>
          
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-serif leading-[1.05] text-foreground tracking-tight whitespace-nowrap overflow-visible">
            Your Right Hand <br />
            in Business Success.
          </h1>
          
          <p className="text-[17px] lg:text-[18px] text-foreground/80 max-w-[520px] leading-[1.8] pl-1">
            Supporting organizations through dependable<br/>
            administrative assistance, financial awareness,<br/>
            and professional office operations.
          </p>
          
          <div className="pt-6 pl-1">
            <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-6 px-10 py-5 bg-btn text-[#EFEBE4] text-[13px] tracking-[0.2em] uppercase hover:bg-[#3E4339] transition-colors">
              VIEW RESUME
              <ArrowRight className="w-5 h-5" strokeWidth={1} />
            </a>
          </div>
        </div>
        
        {/* Right Image Frame */}
        <div className="relative w-full lg:w-[45%] h-[65vh] lg:h-[85vh] flex justify-end items-end z-10">
          <div className="relative w-full max-w-[600px] h-full">
            
            {/* Right Floral Decoration BEHIND the frame */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-24 top-[15%] w-[450px] opacity-30 mix-blend-multiply pointer-events-none z-0 transform scale-x-[-1] -rotate-12" />

            {/* Gold Outline Frame */}
            <div className="absolute -inset-x-5 -top-5 bottom-0 border border-gold/70 rounded-t-[1000px] border-b-0 z-10 pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-t-[1000px] overflow-hidden bg-[#e0d6c8] z-20 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Jessa Mae Condrillon" className="w-full h-full object-cover object-top" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      
      {/* Decorative Left Branch */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-16 top-[15%] w-[450px] opacity-40 mix-blend-multiply pointer-events-none transform -rotate-12 z-0" />

      {/* Main Container: justify-start keeps the content close together on the left, leaving empty space on the right */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:items-start gap-16 lg:gap-24 relative z-10">
        
        {/* Left Image Frame */}
        <div className="w-full lg:w-auto shrink-0 flex justify-start pl-4 pb-4">
          <div className="relative w-[340px] sm:w-[380px] xl:w-[420px] aspect-[1/1.4]">
            {/* Gold Outline Frame (static behind the image) */}
            <div className="absolute inset-0 border border-gold/70 rounded-t-[1000px] z-0 pointer-events-none" />
            
            {/* Image Container (shifted top-right) */}
            <div className="absolute inset-0 rounded-t-[1000px] overflow-hidden bg-[#e0d6c8] z-10 shadow-lg transform translate-x-4 -translate-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Jessa Mae" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="w-full lg:max-w-[750px] flex flex-col justify-center space-y-6 pt-10 lg:pt-0">
          <h2 className="text-[4.5rem] lg:text-[7rem] signature text-foreground transform -rotate-2 origin-left whitespace-nowrap">Hi, I&apos;m Jessa!</h2>
          <h3 className="text-4xl lg:text-5xl xl:text-[52px] font-serif text-foreground leading-[1.15]">Your Trusted Partner <br/>in Business Success.</h3>
          
          <div className="flex items-center gap-4 py-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="h-[1px] w-full max-w-[350px] bg-gold/50" />
          </div>
          
          <p className="text-foreground/80 leading-[1.8] text-[17px] xl:text-[18px] max-w-[720px]">
            I&apos;m an organized, detail-oriented, and dependable Business Administration professional<br className="hidden md:inline" />
            with a strong foundation in Financial Management. With 4 years of hands-on experience in<br className="hidden md:inline" />
            assessment office operations, cashiering support, payroll assistance, and e-commerce marketing,<br className="hidden md:inline" />
            I help organizations maintain accurate records, smooth operations, and excellent service every day.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 pt-10 mt-4 border-t border-gold/10 max-w-2xl w-full">
            <div className="flex flex-col items-center justify-between h-[160px] text-center px-4">
              <Briefcase className="w-9 h-9 text-gold shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col items-center justify-center flex-1 my-2">
                <span className="text-3xl lg:text-4xl font-serif text-foreground leading-none">4+</span>
                <span className="text-[16px] lg:text-[17px] font-serif text-foreground leading-tight mt-1">Years</span>
              </div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-foreground/60 uppercase shrink-0">Experience</p>
            </div>
            
            <div className="flex flex-col items-center justify-between h-[160px] text-center border-t sm:border-t-0 sm:border-l border-gold/30 px-4">
              <Landmark className="w-9 h-9 text-gold shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col items-center justify-center flex-1 my-2">
                <h4 className="text-[16px] lg:text-[17px] font-serif text-foreground leading-tight">
                  Assessment Office<br />& Administrative
                </h4>
              </div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-foreground/60 uppercase shrink-0">Specialization</p>
            </div>

            <div className="flex flex-col items-center justify-between h-[160px] text-center border-t sm:border-t-0 sm:border-l border-gold/30 px-4">
              <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center text-gold shrink-0">
                <Star className="w-5 h-5 fill-gold" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-center justify-center flex-1 my-2">
                <h4 className="text-[16px] lg:text-[17px] font-serif text-foreground leading-tight">
                  Service-Oriented<br />& Detail-Focused
                </h4>
              </div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-foreground/60 uppercase shrink-0">Work Ethic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContributionSection() {
  const contributions = [
    {
      icon: <Folder className="w-8 h-8 text-gold" strokeWidth={1.5} />,
      title: "Administrative Support",
      desc: "Managing documents, student records, filing, and office processes with accuracy and confidentiality to ensure smooth daily operations."
    },
    {
      icon: <Calculator className="w-8 h-8 text-gold" strokeWidth={1.5} />,
      title: "Finance & Bookkeeping Support",
      desc: "Assisting with payroll-related tasks, cashiering support, transaction handling, and maintaining accurate financial records and reports."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" strokeWidth={1.5} />,
      title: "Client & Office Coordination",
      desc: "Communicating professionally with students, staff, and stakeholders while coordinating office activities and providing excellent service."
    },
    {
      icon: <Monitor className="w-8 h-8 text-gold" strokeWidth={1.5} />,
      title: "Digital & Productivity Support",
      desc: "Using Microsoft Office, Google Workspace, and e-commerce marketing knowledge to streamline tasks and support business operations efficiently."
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto text-center relative">
      <div className="mb-20">
        <p className="uppercase tracking-[0.2em] text-gold text-sm font-medium mb-6">HOW I CAN CONTRIBUTE</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-24 bg-gold/40" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gold/40" />
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif text-foreground mb-8">I help organizations run <br/>smoother behind the scenes.</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto leading-[1.8] text-[17px]">
          With a strong foundation in Financial Management and hands-on<br/>
          experience in office operations, I bring reliability, accuracy, and dedication<br/>
          to every task that supports the success of your team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 text-left max-w-5xl mx-auto">
        {contributions.map((item, i) => (
          <div key={i} className="flex gap-8 items-start relative group">
            <div className="w-24 h-24 shrink-0 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/5 transition-colors">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-serif text-foreground flex items-center gap-3 mb-4">
                {item.title}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </h3>
              <p className="text-foreground/70 leading-[1.8] text-[15px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Center divider lines for desktop */}
      <div className="hidden md:block absolute left-1/2 top-[45%] bottom-20 w-[1px] bg-gold/20 -translate-x-1/2" />
      <div className="hidden md:block absolute top-[65%] left-[20%] right-[20%] h-[1px] bg-gold/20" />
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Decorative floral background assets */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[40%] w-[380px] opacity-20 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-28 top-[10%] w-[450px] opacity-15 mix-blend-multiply pointer-events-none transform scale-x-[-1] -rotate-12 z-0" />

      {/* Top Header Part */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20 mb-20 relative z-10">
        {/* Left Side Header */}
        <div className="w-full lg:w-[52%] flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-gold text-sm font-semibold">WORK EXPERIENCE</span>
            <div className="h-[1px] w-48 bg-gold/50" />
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-foreground leading-[1.15]">
            Four years of practical office experience built through consistency, professionalism, and dependable support.
          </h2>
        </div>
        
        {/* Vertical Divider for desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center self-stretch relative px-2">
          <div className="w-[1px] h-full bg-gold/30 flex-1" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold my-4 shrink-0">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="w-[1px] h-full bg-gold/30 flex-1" />
        </div>

        {/* Right Side Description */}
        <div className="w-full lg:w-[42%] lg:pt-14">
          <p className="text-foreground/80 leading-[1.8] text-[17px] xl:text-[18px]">
            My experience in the Assessment Office has strengthened my ability to handle important tasks with accuracy, efficiency, and integrity—while providing excellent service to students, faculty, and office staff every day.
          </p>
        </div>
      </div>

      {/* Main Experience Card */}
      <div className="w-full bg-[#FAF7F2] border border-gold/30 rounded-[2.5rem] p-10 lg:p-14 relative z-10 shadow-sm mb-20">
        
        {/* Row 1: Role Overview */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 pb-12 border-b border-gold/20">
          
          {/* Left Side: Role details */}
          <div className="flex items-center gap-6 w-full lg:w-auto">
            {/* Circular Emblem with briefcase icon */}
            <div className="relative w-24 h-24 rounded-full bg-[#F3ECE0] border border-gold/40 flex items-center justify-center shrink-0">
              <Briefcase className="w-10 h-10 text-gold" strokeWidth={1.2} />
              {/* Overlay floral icon or design if needed */}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-3xl lg:text-4xl font-serif text-foreground leading-none">
                Student Assistant<br />Assessment Office
              </h3>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-foreground/80 pt-1">
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <strong>Cor Jesu College</strong>
                </span>
                <span className="text-gold font-serif">2021 — 2025</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider for desktop */}
          <div className="hidden lg:block w-[1px] self-stretch bg-gold/20" />

          {/* Right Side: Quick stats */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-serif text-gold">4</span>
              <span className="text-2xl font-serif text-foreground">Years</span>
            </div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] text-foreground/60 uppercase font-semibold my-3">
              <div className="h-[1px] w-6 bg-gold/50" />
              Professional Experience
              <div className="h-[1px] w-6 bg-gold/50" />
            </div>
            <p className="text-sm font-serif italic text-foreground/75">Dedicated. Reliable. Detail-Oriented.</p>
          </div>

        </div>

        {/* Row 2: Three columns representing detailed functions */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 pt-12">
          
          {/* Column 1: Office Administration */}
          <div className="flex-1 flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>
              <h4 className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">OFFICE ADMINISTRATION</h4>
            </div>
            <ul className="space-y-4 pl-6 text-[15px] text-foreground/80 leading-relaxed list-disc marker:text-gold/80">
              <li>Managed assessment office operations and daily administrative tasks</li>
              <li>Processed documents, maintained student records, and handled filing with accuracy</li>
              <li>Ensured organized, confidential, and efficient office workflow</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="w-[1px] bg-gold/20 self-stretch mx-8 hidden lg:block" />
          <div className="block lg:hidden border-t border-gold/20 w-full my-2" />

          {/* Column 2: Finance Support */}
          <div className="flex-1 flex flex-col space-y-6 lg:pl-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <Calculator className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">FINANCE SUPPORT</h4>
            </div>
            <ul className="space-y-4 pl-6 text-[15px] text-foreground/80 leading-relaxed list-disc marker:text-gold/80">
              <li>Provided cashiering assistance and supported daily financial transactions</li>
              <li>Assisted with payroll-related tasks and documentation</li>
              <li>Maintained accurate records and supported financial processes</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="w-[1px] bg-gold/20 self-stretch mx-8 hidden lg:block" />
          <div className="block lg:hidden border-t border-gold/20 w-full my-2" />

          {/* Column 3: Professional Skills */}
          <div className="flex-1 flex flex-col space-y-6 lg:pl-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <Users className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">PROFESSIONAL SKILLS</h4>
            </div>
            <ul className="space-y-4 pl-6 text-[15px] text-foreground/80 leading-relaxed list-disc marker:text-gold/80">
              <li>Provided assistance to students, faculty, and office personnel</li>
              <li>Demonstrated strong communication, customer service, and interpersonal skills</li>
              <li>Uphold confidentiality, time management, and a strong work ethic</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar: 3 Columns of core areas */}
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 border-t border-gold/20 pt-16 relative z-10">
        
        {/* Core 1 */}
        <div className="flex-1 flex items-start gap-5">
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-[#FAF7F2]">
            <Folder className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-serif text-foreground">Administrative Operations</h4>
            <p className="text-[14px] text-foreground/70 leading-relaxed">
              Supporting daily office workflows with accuracy and organization.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-gold/20 self-stretch mx-8 hidden lg:block" />
        <div className="block lg:hidden border-t border-gold/20 w-full my-2" />

        {/* Core 2 */}
        <div className="flex-1 flex items-start gap-5 lg:pl-4">
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-[#FAF7F2]">
            <Calculator className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-serif text-foreground">Finance Exposure</h4>
            <p className="text-[14px] text-foreground/70 leading-relaxed">
              Cashiering support, payroll assistance, and financial documentation.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-gold/20 self-stretch mx-8 hidden lg:block" />
        <div className="block lg:hidden border-t border-gold/20 w-full my-2" />

        {/* Core 3 */}
        <div className="flex-1 flex items-start gap-5 lg:pl-4">
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-[#FAF7F2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M19 12a3 3 0 0 1 3-3 3 3 0 0 1 3 3c0 2.2-3 4-3 4s-3-1.8-3-4Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-serif text-foreground">Professional Service</h4>
            <p className="text-[14px] text-foreground/70 leading-relaxed">
              Providing dependable support to students, faculty, and office staff.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

function SkillsSection() {
  const categories = [
    {
      num: "01",
      title: "Administrative Expertise",
      image: "/skills_admin.jpg",
      bullets: [
        "Assessment office operations",
        "Document management & filing",
        "Student records & data management",
        "Office organization & workflow",
        "Confidentiality & attention to detail"
      ]
    },
    {
      num: "02",
      title: "Finance & Bookkeeping Knowledge",
      image: "/skills_finance.jpg",
      bullets: [
        "Cashiering support",
        "Payroll-related tasks",
        "Transaction handling",
        "Financial documentation",
        "Strong foundation in Financial Management"
      ]
    },
    {
      num: "03",
      title: "Digital & Productivity Proficiency",
      image: "/skills_digital.jpg",
      bullets: [
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Google Workspace (Docs, Sheets, Gmail)",
        "E-commerce marketing knowledge",
        "Online tools & platforms",
        "Fast learner & tech-savvy"
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Decorative background branches */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[60%] w-[380px] opacity-15 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-20 top-[20%] w-[420px] opacity-20 mix-blend-multiply pointer-events-none transform scale-x-[-1] -rotate-12 z-0" />

      {/* Header Part */}
      <div className="w-full text-center mb-20 relative z-10">
        <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-4">SKILLS & EXPERTISE</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-24 bg-gold/40" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gold/40" />
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif text-foreground mb-6">
          The skills I bring to support <br /> efficient and effective operations.
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto leading-[1.8] text-[17px]">
          A blend of administrative, financial, and digital skills <br className="hidden md:inline" />
          that help me deliver accuracy, organization, and value every day.
        </p>
      </div>

      {/* Three Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 relative z-10 max-w-[1500px] mx-auto mb-20">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white border border-gold/25 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] bg-[#EFEBE4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
            </div>
            
            {/* Card Content */}
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              {/* Card Title */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl lg:text-4xl font-serif text-gold leading-none">{cat.num}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-foreground leading-tight">{cat.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-[1px] w-full bg-gold/30" />
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold shrink-0">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-4 pl-4 text-[15px] lg:text-[16px] text-foreground/80 leading-relaxed list-disc marker:text-gold/80 flex-1">
                {cat.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="w-full bg-[#FAF7F2] border border-gold/30 rounded-full py-5 px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5 text-left flex-1">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0 bg-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
            <p className="text-[15px] lg:text-[16px] text-foreground/80 leading-relaxed">
              I continuously develop my skills and stay updated with new tools <br className="hidden lg:inline" />
              so I can provide better support and contribute to your team&apos;s success.
            </p>
          </div>
          
          <div className="hidden md:block h-12 w-[1px] bg-gold/20" />

          <div className="shrink-0">
            <span className="text-2xl lg:text-3xl signature text-gold whitespace-nowrap">
              Always Learning. Always Growing.
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}

function ToolsSection() {
  const tools = [
    {
      title: "Microsoft Excel",
      desc: "Spreadsheet analysis, data organization, formulas, and financial reporting.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E5645] mb-6">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 4v16" />
          <path d="M4 9h16" />
          <path d="M4 14h16" />
          <path d="M6.5 10.5l2 3m0-3l-2 3" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Microsoft Word",
      desc: "Creating professional documents, reports, letters, and other business materials.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E5645] mb-6">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 4v16" />
          <path d="M4 9h16" />
          <path d="M4 14h16" />
          <path d="M5.5 10.5l1 3 0.75-2 0.75 2 1-3" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Google Workspace",
      desc: "Cloud-based productivity tools for collaboration, file management, and real-time sharing.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E5645] mb-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        </svg>
      )
    },
    {
      title: "Gmail",
      desc: "Professional email communication, organization, and inbox management.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E5645] mb-6">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M19 6l-7 7-7-7" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Canva",
      desc: "Designing simple visual content, presentations, and marketing materials.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E5645] mb-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12a4 4 0 1 1 8 0" />
          <path d="M12 8v8" />
        </svg>
      )
    },
    {
      title: "Xero",
      desc: "Cloud accounting software for invoice management, transaction reconciliation, and financial records.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4E5645] mb-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 9l6 6m0-6l-6 6" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="tools" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Decorative background branches */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[40%] w-[380px] opacity-15 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-20 top-[60%] w-[420px] opacity-20 mix-blend-multiply pointer-events-none transform scale-x-[-1] -rotate-12 z-0" />

      {/* Header Part */}
      <div className="w-full text-center mb-20 relative z-10">
        <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-4">TOOLS & SYSTEMS</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-24 bg-gold/40" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gold/40" />
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif text-foreground mb-6">
          The tools I use to stay <br /> organized, efficient, and productive.
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto leading-[1.8] text-[17px]">
          These tools and systems help me manage tasks, organize information, <br className="hidden md:inline" />
          collaborate with teams, and deliver accurate results every day.
        </p>
      </div>

      {/* Grid wrapper with absolute lines and diamonds */}
      <div className="relative z-10 max-w-[1400px] mx-auto mb-28 border border-gold/15 md:border-none rounded-[2rem] md:rounded-none p-6 md:p-0">
        
        {/* Horizontal divider line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold/20 -translate-y-1/2 hidden md:block" />
        
        {/* Vertical divider lines */}
        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gold/20 hidden md:block" />
        <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-gold/20 hidden md:block" />

        {/* Diamond stars at intersections */}
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-1.5 z-20 hidden md:block">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>
        <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-1.5 z-20 hidden md:block">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0">
          {tools.map((tool, idx) => (
            <div key={idx} className="text-center p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col items-center justify-start min-h-[280px]">
              {tool.icon}
              <h3 className="text-2xl font-serif text-foreground mb-4">{tool.title}</h3>
              
              <div className="flex items-center gap-2 mb-4 w-32">
                <div className="h-[1px] w-full bg-gold/30" />
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <div className="h-[1px] w-full bg-gold/30" />
              </div>

              <p className="text-[15px] text-foreground/80 leading-relaxed max-w-[280px]">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="w-full bg-[#FAF7F2] border border-gold/30 rounded-full py-5 px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5 text-left flex-1">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0 bg-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
            <p className="text-[15px] lg:text-[16px] text-foreground/80 leading-relaxed">
              I continuously learn and adapt to new tools and technologies <br className="hidden lg:inline" />
              to improve my work and support my team effectively.
            </p>
          </div>
          
          <div className="hidden md:block h-12 w-[1px] bg-gold/20" />

          <div className="shrink-0">
            <span className="text-2xl lg:text-3xl signature text-gold whitespace-nowrap">
              Always Learning. Always Growing.
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}

function QuoteSection() {
  return (
    <section className="bg-dark text-white py-32 px-6 text-center relative overflow-hidden mt-20">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl lg:text-7xl font-serif mb-6 leading-tight">
          Behind every <br/> successful business is a <br/>
          <div className="flex items-center justify-center gap-6 mt-6 text-[#D2B58A]">
             <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#D2B58A]">
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
             <span className="font-serif">reliable executive</span>
             <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#D2B58A]">
               <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
             </svg>
          </div>
        </h2>
        <div className="text-7xl lg:text-9xl signature text-[#D2B58A] mb-24 -mt-4 transform -rotate-2">
          Virtual Assistant!
        </div>

        <div className="bg-[#2B3024] border border-[#D2B58A]/30 rounded-[2rem] p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between text-left gap-10">
          <div className="flex gap-8 items-center">
            <div className="w-24 h-24 shrink-0 bg-[#EFEBE4] rounded-full flex items-center justify-center text-dark">
               <MessageSquare className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-2 text-[#EFEBE4]">Not sure what kind of <br/> support you need yet?</h3>
              <p className="signature text-5xl text-[#D2B58A] mb-4">Let&apos;s Talk!</p>
              <p className="text-[15px] text-[#EFEBE4]/70 max-w-sm leading-relaxed">Every business is unique. Tell me about your goals and I&apos;ll help you find the right support for you.</p>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-[#D2B58A]/20 pt-10 md:pt-0 md:pl-12 w-full md:w-auto space-y-6">
             <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-4 text-[15px] text-[#EFEBE4]"><CheckCircle className="w-5 h-5 text-[#D2B58A]"/> Flexible & Personalized Support</li>
               <li className="flex items-center gap-4 text-[15px] text-[#EFEBE4]"><CheckCircle className="w-5 h-5 text-[#D2B58A]"/> Confidential & Professional</li>
               <li className="flex items-center gap-4 text-[15px] text-[#EFEBE4]"><CheckCircle className="w-5 h-5 text-[#D2B58A]"/> Committed to Your Success</li>
             </ul>
             <div className="flex items-center gap-4 text-[#D2B58A]/50 mb-6 justify-center">
               <div className="h-[1px] w-12 bg-current" />
               <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#D2B58A]">
                 <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
               </svg>
               <div className="h-[1px] w-12 bg-current" />
             </div>
             <a href="#contact" className="inline-flex items-center justify-center w-full gap-3 px-8 py-5 bg-[#CBAE85] text-dark font-medium rounded-full hover:bg-[#DBC39E] transition-colors text-[15px]">
               <Calendar className="w-5 h-5" /> Book a Chat with Me
             </a>
          </div>
        </div>

        <p className="mt-16 text-[#EFEBE4]/60 text-[17px]">
          Let&apos;s work together and make your business <br/> more organized, efficient, and successful.
        </p>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      num: "01",
      title: "Administrative Documentation",
      image: "/highlights_doc.jpg",
      desc: "Preparing, organizing, and maintaining documents and student records with accuracy and confidentiality.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
      tags: ["Document Preparation", "Record Keeping", "File Organization"]
    },
    {
      num: "02",
      title: "Financial Spreadsheet",
      image: "/highlights_sheet.jpg",
      desc: "Using Excel to encode data, perform calculations, track expenses, and generate reports for better financial monitoring.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      tags: ["Data Encoding", "Calculations", "Reporting"]
    },
    {
      num: "03",
      title: "Office Workflow & Coordination",
      image: "/highlights_workflow.jpg",
      desc: "Coordinating schedules, managing tasks, and supporting smooth daily operations across the office.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      tags: ["Scheduling", "Task Coordination", "Follow-Up"]
    }
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Decorative background branches */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[40%] w-[380px] opacity-15 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-20 top-[60%] w-[420px] opacity-20 mix-blend-multiply pointer-events-none transform scale-x-[-1] -rotate-12 z-0" />

      {/* Header Part */}
      <div className="w-full text-center mb-20 relative z-10">
        <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-4">PROFESSIONAL WORK HIGHLIGHTS</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-24 bg-gold/40" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gold/40" />
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif text-foreground mb-6">
          A glimpse of the work I do <br /> behind the scenes.
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto leading-[1.8] text-[17px]">
          These are representative samples inspired by my actual experience. <br className="hidden md:inline" />
          All information shown is for demonstration purposes only.
        </p>
      </div>

      {/* Three Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 relative z-10 max-w-[1500px] mx-auto mb-20">
        {highlights.map((item, idx) => (
          <div key={idx} className="bg-white border border-gold/25 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] bg-[#EFEBE4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            
            {/* Card Content */}
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              
              {/* Card Title Block */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-serif text-gold leading-none">{item.num}</span>
                <span className="text-gold/40 text-xl font-light">|</span>
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-[#FAF7F2]">
                  {item.icon}
                </div>
                <h3 className="text-xl xl:text-2xl font-serif text-foreground leading-snug flex-1">{item.title}</h3>
              </div>

              {/* Gold Diamond Line */}
              <div className="flex items-center gap-2 mb-6 w-full">
                <div className="h-[1px] w-full bg-gold/30" />
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <div className="h-[1px] w-full bg-gold/30" />
              </div>

              {/* Description */}
              <p className="text-[15px] xl:text-[16px] text-foreground/85 leading-relaxed text-center max-w-[290px] mx-auto flex-1 mb-8">
                {item.desc}
              </p>

              {/* Footer Tags Row */}
              <div className="border-t border-gold/15 pt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
                {item.tags.map((tag, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-1 text-[11px] font-bold tracking-wider text-foreground/60 uppercase">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="w-full bg-[#FAF7F2] border border-gold/30 rounded-[2rem] py-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6 text-left flex-1">
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-white">
              <span className="font-serif text-3xl leading-none -mt-2">&ldquo;</span>
            </div>
            <p className="text-[16px] lg:text-[17px] text-foreground/80 leading-relaxed max-w-xl">
              I take pride in bringing order to processes and supporting teams <br className="hidden lg:inline" />
              so they can focus on what truly matters.
            </p>
          </div>
          
          <div className="hidden md:block h-14 w-[1px] bg-gold/20" />

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-2xl lg:text-3xl signature text-gold whitespace-nowrap">
              Detail-Oriented. Reliable. Committed.
            </span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold hidden lg:block opacity-80">
              <path d="M2 22C12 22 17 12 17 2" />
              <path d="M9 14c1.5-1 3-3 3-5" />
              <path d="M6 17c1.5-1 2.5-3 2.5-4.5" />
              <path d="M12 11c1.5-1 2.5-2.5 2.5-4" />
              <path d="M15 8c1.5-1 2-2 2-3" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}

function CertificatesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Certificates", icon: <Users className="w-4 h-4" /> },
    { id: "administrative", name: "Administrative", icon: <Briefcase className="w-4 h-4" /> },
    { id: "finance", name: "Finance & Accounting", icon: <Calculator className="w-4 h-4" /> },
    { id: "digital", name: "Digital & Productivity", icon: <Monitor className="w-4 h-4" /> },
  ];

  const certs = [
    {
      title: "Excel Essentials",
      issuer: "Microsoft",
      date: "May 2025",
      category: "digital",
      logo: "Microsoft",
      logoColor: "text-[#2F7037]",
      type: "microsoft"
    },
    {
      title: "Financial Accounting Basics",
      issuer: "Great Learning",
      date: "March 2025",
      category: "finance",
      logo: "Great Learning",
      logoColor: "text-[#005691]",
      type: "greatlearning"
    },
    {
      title: "Google Workspace Fundamentals",
      issuer: "Google",
      date: "January 2025",
      category: "digital",
      logo: "Google",
      logoColor: "text-[#4285F4]",
      type: "google"
    },
    {
      title: "Canva for Work",
      issuer: "Canva",
      date: "January 2025",
      category: "digital",
      logo: "Canva",
      logoColor: "text-[#00C4CC]",
      type: "canva"
    },
    {
      title: "Customer Service Excellence",
      issuer: "Coursera",
      date: "December 2024",
      category: "administrative",
      logo: "Coursera",
      logoColor: "text-[#0056D2]",
      type: "coursera"
    },
    {
      title: "Office Administration and Management",
      issuer: "ATC Training Center",
      date: "November 2024",
      category: "administrative",
      logo: "ATC Training Center",
      logoColor: "text-[#A8201A]",
      type: "atc"
    }
  ];

  const filteredCerts = activeTab === "all" ? certs : certs.filter(c => c.category === activeTab);

  return (
    <section id="certificates" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Background floral assets */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[30%] w-[380px] opacity-15 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-20 top-[60%] w-[420px] opacity-20 mix-blend-multiply pointer-events-none transform scale-x-[-1] -rotate-12 z-0" />

      {/* Top Header Part */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20 mb-20 relative z-10">
        {/* Left Side Header */}
        <div className="w-full lg:w-[50%] flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-gold text-sm font-semibold">PROFESSIONAL DEVELOPMENT</span>
            <div className="h-[1px] w-48 bg-gold/50" />
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-foreground leading-[1.15]">
            Investing in continuous learning to grow, improve, and deliver reliable support.
          </h2>
          <p className="text-foreground/70 max-w-xl leading-[1.8] text-[17px]">
            I continuously develop my knowledge and skills through relevant training and certifications.
          </p>
        </div>

        {/* Right Side learning journey card */}
        <div className="w-full lg:w-[45%]">
          <div className="bg-[#FAF7F2] border border-gold/30 rounded-[2rem] p-8 lg:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-serif text-foreground">My Learning Journey</h3>
                <div className="h-[1px] w-24 bg-gold/30 mt-1" />
              </div>
            </div>

            <ul className="space-y-4 text-[15px]">
              <li className="flex items-center gap-3 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-[#2F7037] shrink-0" />
                <span>Administrative Excellence</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-[#2F7037] shrink-0" />
                <span>Financial Management</span>
              </li>
              <li className="flex items-center gap-3 text-gold font-medium">
                <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3 h-3 text-gold" strokeWidth={2.5} />
                </div>
                <span>Bookkeeping (In Progress)</span>
              </li>
            </ul>

            <div className="border-t border-gold/25 pt-6">
              <h4 className="text-[12px] font-bold tracking-[0.15em] text-[#8C6D3E] uppercase mb-4">Future Certifications I&apos;m Working Towards</h4>
              <ul className="space-y-2 text-[14px] text-foreground/70 list-disc pl-5 marker:text-gold">
                <li>NC II Bookkeeping</li>
                <li>QuickBooks Online</li>
                <li>Xero Advisor Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-[#4E5645] text-white shadow-md"
                : "bg-white text-foreground/70 border border-gold/20 hover:border-gold/50"
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 relative z-10 max-w-[1500px] mx-auto mb-20">
        {filteredCerts.map((cert, idx) => (
          <div key={idx} className="bg-white border border-gold/25 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
            {/* HTML Certificate Thumbnail */}
            <div className="relative w-full aspect-[1.4/1] bg-[#FAF8F5] border-b border-gold/20 p-6 flex flex-col justify-between overflow-hidden select-none group-hover:bg-[#FDFCFB] transition-colors shadow-inner">
              <div className="absolute inset-3 border border-[#E6DCCF]/50 pointer-events-none" />
              
              {/* Top Row: Logo */}
              <div className="flex justify-between items-center z-10">
                <span className={`text-[10px] font-extrabold tracking-wider ${cert.logoColor} uppercase`}>{cert.logo}</span>
                {cert.type === "google" && (
                  <div className="w-8 h-8 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/30 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-[#4285F4]">G</span>
                  </div>
                )}
                {cert.type === "microsoft" && (
                  <div className="w-8 h-8 bg-[#2F7037]/10 border border-[#2F7037]/30 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-[#2F7037]">MS</span>
                  </div>
                )}
              </div>

              {/* Certificate content text */}
              <div className="text-center z-10 my-auto flex flex-col items-center py-2">
                <p className="text-[7px] tracking-[0.25em] uppercase text-foreground/40 font-bold mb-1.5">Certificate of Completion</p>
                <h4 className="text-xl signature text-gold mb-1">Jessa Mae Condrillon</h4>
                <div className="h-[0.5px] w-24 bg-gold/20 mb-2" />
                <p className="text-[12px] font-serif text-foreground font-semibold leading-tight max-w-[85%] text-center">
                  {cert.title}
                </p>
              </div>

              {/* Footer row */}
              <div className="flex justify-between items-end z-10 pt-2">
                <div className="text-left">
                  <p className="text-[6px] uppercase tracking-[0.15em] text-foreground/40 font-semibold">Verified Credential</p>
                  <p className="text-[9px] font-serif font-bold text-foreground/75">{cert.issuer}</p>
                </div>
                {/* Gold Seal */}
                <div className="w-8 h-8 rounded-full bg-gold/5 border border-gold/40 flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 rounded-full border border-dashed border-gold/30" />
                </div>
              </div>
            </div>

            {/* Card Info Details */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif text-foreground leading-snug mb-2">{cert.title}</h3>
                <p className="text-[14px] text-foreground/60 mb-4">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between border-t border-gold/15 pt-6 mt-4">
                <div className="flex items-center gap-2 text-foreground/50 text-[13px]">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Issued: {cert.date}</span>
                </div>
                <a href="#" className="flex items-center gap-1.5 text-[13px] text-gold hover:text-[#8C6D3E] font-medium transition-colors">
                  View Credential
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="w-full bg-[#FAF7F2] border border-gold/30 rounded-[2rem] py-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6 text-left flex-1">
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-white">
              <span className="font-serif text-3xl leading-none -mt-2">&ldquo;</span>
            </div>
            <p className="text-[16px] lg:text-[17px] text-foreground/80 leading-relaxed max-w-xl">
              I believe continuous learning is essential to delivering <br className="hidden lg:inline" />
              accurate, efficient, and professional support every day.
            </p>
          </div>
          
          <div className="hidden md:block h-14 w-[1px] bg-gold/20" />

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-2xl lg:text-3xl signature text-gold whitespace-nowrap">
              Always Learning. Always Growing.
            </span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold hidden lg:block opacity-80">
              <path d="M2 22C12 22 17 12 17 2" />
              <path d="M9 14c1.5-1 3-3 3-5" />
              <path d="M6 17c1.5-1 2.5-3 2.5-4.5" />
              <path d="M12 11c1.5-1 2.5-2.5 2.5-4" />
              <path d="M15 8c1.5-1 2-2 2-3" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}

function ProcessSection() {
  const stepsRow1 = [
    {
      num: "01",
      title: "Let's Connect",
      image: "/process_step1.jpg",
      desc: "We'll have a conversation about your business, your goals, and the kind of support you're looking for."
    },
    {
      num: "02",
      title: "Understanding Your Business",
      image: "/process_step2.jpg",
      desc: "I'll learn your workflow, priorities, and preferred ways of working to ensure a smooth collaboration."
    },
    {
      num: "03",
      title: "Planning the Support",
      image: "/process_step3.jpg",
      desc: "Together, we'll identify where I can add the most value to help your business run efficiently."
    }
  ];

  const stepsRow2 = [
    {
      num: "04",
      title: "Working Together",
      image: "/process_step4.jpg",
      desc: "I'll integrate into your workflow with professionalism, clear communication, and attention to detail from day one."
    },
    {
      num: "05",
      title: "Growing with Your Business",
      image: "/process_step5.jpg",
      desc: "As your business grows, I'll continue refining my support to help you achieve long-term success."
    }
  ];

  return (
    <section id="process" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Decorative background branches */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[30%] w-[380px] opacity-15 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -right-20 top-[65%] w-[420px] opacity-20 mix-blend-multiply pointer-events-none transform scale-x-[-1] -rotate-12 z-0" />

      {/* Header Part */}
      <div className="w-full text-center mb-24 relative z-10">
        <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-4">HOW WE&apos;LL WORK TOGETHER</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-24 bg-gold/40" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gold/40" />
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif text-foreground mb-6">
          A simple & professional process <br /> from our first conversation to <br /> long-term collaboration.
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto leading-[1.8] text-[17px]">
          Clear communication, organized systems, and dependable support <br className="hidden md:inline" />
          — that&apos;s how we&apos;ll achieve great results together.
        </p>
      </div>

      {/* Process Flow Cards Container */}
      <div className="relative z-10 max-w-[1550px] mx-auto mb-20">
        
        {/* Row 1: Steps 1, 2, 3 */}
        <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-10 xl:gap-14 mb-0 md:mb-12">
          {stepsRow1.map((step, idx) => (
            <div key={idx} className="w-full md:w-[31%] flex flex-col items-center relative">
              {/* Image box */}
              <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#EFEBE4] shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                {/* Overlapping circle number */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-white border border-gold/35 flex items-center justify-center shadow-md z-20">
                  <span className="text-xl font-serif text-gold font-semibold">{step.num}</span>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-center mt-10 px-4">
                <h3 className="text-2xl font-serif text-foreground leading-snug mb-3">{step.title}</h3>
                
                {/* Diamond line divider */}
                <div className="flex items-center justify-center gap-2 mb-4 w-32 mx-auto">
                  <div className="h-[0.5px] w-full bg-gold/30" />
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                  <div className="h-[0.5px] w-full bg-gold/30" />
                </div>

                <p className="text-[15px] text-foreground/80 leading-relaxed max-w-[340px] mx-auto">{step.desc}</p>
              </div>

              {/* Vertical connector line pointing down to horizontal timeline */}
              <div className="absolute left-1/2 bottom-0 w-[1px] h-12 border-l border-dashed border-gold/30 translate-y-[48px] hidden md:block" />
            </div>
          ))}
        </div>

        {/* Timeline Horizontal Line & Dots for desktop */}
        <div className="w-full relative py-6 hidden md:block my-2">
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gold/20 -translate-y-1/2" />
          <div className="flex justify-between px-[15.5%] max-w-[1300px] mx-auto">
            {/* 5 Dots aligned with the 5 steps */}
            <div className="w-3 h-3 rounded-full bg-gold border-2 border-background z-20 -translate-x-1" />
            <div className="w-3 h-3 rounded-full bg-gold border-2 border-background z-20" />
            <div className="w-3 h-3 rounded-full bg-gold border-2 border-background z-20 translate-x-1" />
            <div className="w-3 h-3 rounded-full bg-gold border-2 border-background z-20 -translate-x-16" />
            <div className="w-3 h-3 rounded-full bg-gold border-2 border-background z-20 translate-x-16" />
          </div>
        </div>

        {/* Row 2: Steps 4, 5 */}
        <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-10 xl:gap-14 mt-12 md:mt-6">
          {stepsRow2.map((step, idx) => (
            <div key={idx} className="w-full md:w-[31%] flex flex-col items-center relative">
              {/* Vertical connector line pointing up to horizontal timeline */}
              <div className="absolute left-1/2 top-0 w-[1px] h-12 border-l border-dashed border-gold/30 -translate-y-[48px] hidden md:block" />

              {/* Image box */}
              <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#EFEBE4] shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                {/* Overlapping circle number */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-white border border-gold/35 flex items-center justify-center shadow-md z-20">
                  <span className="text-xl font-serif text-gold font-semibold">{step.num}</span>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-center mt-10 px-4">
                <h3 className="text-2xl font-serif text-foreground leading-snug mb-3">{step.title}</h3>
                
                {/* Diamond line divider */}
                <div className="flex items-center justify-center gap-2 mb-4 w-32 mx-auto">
                  <div className="h-[0.5px] w-full bg-gold/30" />
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                  <div className="h-[0.5px] w-full bg-gold/30" />
                </div>

                <p className="text-[15px] text-foreground/80 leading-relaxed max-w-[340px] mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Banner */}
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="w-full bg-[#FAF7F2] border border-gold/30 rounded-full py-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6 text-left flex-1">
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-white shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8a4 4 0 0 0-4 4" />
                <path d="M12 12h.01" />
              </svg>
            </div>
            <p className="text-[16px] lg:text-[17px] text-foreground/80 leading-relaxed max-w-xl">
              I treat every business with care, respect, and confidentiality. <br className="hidden lg:inline" />
              My goal is to make your day easier and your operations more organized.
            </p>
          </div>
          
          <div className="hidden md:block h-14 w-[1px] bg-gold/20" />

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-2xl lg:text-3xl signature text-gold whitespace-nowrap">
              Organized. Reliable. Committed to You.
            </span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold hidden lg:block opacity-80">
              <path d="M2 22C12 22 17 12 17 2" />
              <path d="M9 14c1.5-1 3-3 3-5" />
              <path d="M6 17c1.5-1 2.5-3 2.5-4.5" />
              <path d="M12 11c1.5-1 2.5-2.5 2.5-4" />
              <path d="M15 8c1.5-1 2-2 2-3" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are you available for remote work?",
      a: "Yes, I am open to remote, hybrid, and on-site opportunities depending on the role and employer's requirements."
    },
    {
      q: "What type of work do you specialize in?",
      a: "I specialize in administrative support, document processing, student record assistance, financial tasks (including payroll assistance, cashiering support), and general office communication."
    },
    {
      q: "Do you have experience in bookkeeping?",
      a: "Yes, I have practical experience in cashiering support and payroll assistance. I am also currently working towards my NC II Bookkeeping and Xero Advisor certifications."
    },
    {
      q: "What tools and software are you comfortable using?",
      a: "I am highly comfortable with Microsoft Excel, Microsoft Word, Google Workspace, Gmail, Canva, and Xero."
    },
    {
      q: "Are you open to full-time or part-time positions?",
      a: "Yes, I am open to both full-time and part-time positions where I can provide administrative and financial value."
    },
    {
      q: "What makes you different from other candidates?",
      a: "My combination of a Bachelor's degree in Business Administration major in Financial Management, 4 years of hands-on student assistant experience at Cor Jesu College, and high attention to detail and confidentiality."
    },
    {
      q: "How do you ensure confidentiality and data security?",
      a: "I strictly follow privacy protocols when handling student records and financial documentation. I treat all business data with extreme care, integrity, and respect."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 lg:px-10 xl:px-16 max-w-[1800px] mx-auto relative overflow-hidden">
      {/* Decorative background branches */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/floral_branch.jpg" alt="floral decoration" className="absolute -left-20 top-[50%] w-[380px] opacity-15 mix-blend-multiply pointer-events-none transform rotate-12 z-0" />

      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Header info */}
        <div className="w-full lg:w-[42%] flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-gold text-sm font-semibold">BEFORE WE CONNECT</span>
            <div className="h-[1px] w-36 bg-gold/50" />
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-foreground leading-[1.15]">
            Everything you may be wondering before reaching out.
          </h2>
          <p className="text-foreground/75 leading-[1.8] text-[17px] pb-6">
            Here are some common questions about working with me.
          </p>

          {/* Small Info Card */}
          <div className="bg-[#FAF7F2] border border-gold/25 rounded-[2rem] p-6 flex items-center gap-5 max-w-[420px]">
            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-white shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8a4 4 0 0 0-4 4" />
                <path d="M12 12h.01" />
              </svg>
            </div>
            <p className="text-[14px] text-foreground/80 leading-relaxed">
              If you have any other questions, feel free to reach out. I&apos;d be happy to help!
            </p>
          </div>

          {/* Leaf outline behind */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/floral_branch.jpg" alt="floral branch outline" className="w-[300px] opacity-20 pointer-events-none mt-10" />
        </div>

        {/* Right Side: Accordion list */}
        <div className="w-full lg:w-[54%] space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border border-gold/20 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "bg-[#FAF7F2] border-gold/35" : "bg-white hover:border-gold/35"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 px-8 flex justify-between items-center text-left"
                >
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-serif text-gold">{idx + 1}.</span>
                    <span className="text-[17px] xl:text-[18px] font-serif text-foreground font-semibold">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-gold/45 flex items-center justify-center text-gold shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    {isOpen ? (
                      <span className="text-xl font-semibold leading-none">-</span>
                    ) : (
                      <span className="text-lg leading-none">+</span>
                    )}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[160px] opacity-100 border-t border-gold/15" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-8 text-[15px] xl:text-[16px] text-foreground/85 leading-relaxed bg-[#FAF7F2]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ContactFooterSection() {
  return (
    <section id="contact" className="bg-[#191E15] text-white pt-28 relative overflow-hidden">
      
      {/* Decorative leaf branch in background - transparent SVG */}
      <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="absolute right-0 bottom-0 text-gold/10 pointer-events-none transform scale-x-[-1] z-0">
        <path d="M2 22C12 22 17 12 17 2" />
        <path d="M9 14c1.5-1 3-3 3-5c-1.5 1-3 3-3 5" />
        <path d="M6 17c1.5-1 2.5-3 2.5-4.5c-1.5 1-2.5 3-2.5 4.5" />
        <path d="M12 11c1.5-1 2.5-2.5 2.5-4c-1.5 1-2.5 2.5-2.5 4" />
        <path d="M15 8c1.5-1 2-2 2-3c-1.5 1-2 2-2 3" />
      </svg>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 xl:px-16 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-16 lg:gap-24">
          
          {/* Left Column: Still life image & text */}
          <div className="w-full lg:w-[50%] flex flex-col md:flex-row items-center gap-10">
            {/* Moody desk still life image */}
            <div className="w-full md:w-[42%] aspect-[3/4] rounded-[2rem] overflow-hidden shrink-0 shadow-lg bg-[#2E3328]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/contact_desk.jpg" alt="mood desk flowers" className="w-full h-full object-cover" />
            </div>
            
            {/* Text info */}
            <div className="flex-1 flex flex-col space-y-6">
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-[0.2em] text-[#CBAE85] text-sm font-semibold">LET&apos;S CONNECT</span>
                <div className="h-[1px] w-24 bg-[#CBAE85]/40" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#FAF7F2] leading-tight">
                Let&apos;s build something meaningful together.
              </h2>
              <p className="text-[#EFEBE4]/70 leading-relaxed text-[15px] xl:text-[16px]">
                I&apos;m excited to learn more about your business and how I can support your goals with reliable and professional assistance.
              </p>
              
              <a 
                href="mailto:jessamaecondrillon@gmail.com" 
                className="inline-flex items-center gap-4 px-8 py-4 bg-[#CBAE85] text-[#191E15] font-bold rounded-xl hover:bg-[#DBC39E] transition-colors w-fit shadow-md text-sm tracking-wide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send Me a Message
                <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Vertical Divider line */}
          <div className="hidden lg:block w-[1px] bg-[#FAF7F2]/10 self-stretch" />

          {/* Right Column: Contact Details */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center space-y-10 lg:pl-10">
            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-[#CBAE85]/30 flex items-center justify-center text-[#CBAE85] shrink-0 bg-[#252C20]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#EFEBE4]/55 font-bold">Email</span>
                <p className="text-[17px] font-serif text-[#FAF7F2] font-semibold">
                  jessamaecondrillon@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-[#CBAE85]/30 flex items-center justify-center text-[#CBAE85] shrink-0 bg-[#252C20]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#EFEBE4]/55 font-bold">Phone</span>
                <p className="text-[17px] font-serif text-[#FAF7F2] font-semibold">
                  +63 912 345 6789
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-[#CBAE85]/30 flex items-center justify-center text-[#CBAE85] shrink-0 bg-[#252C20]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#EFEBE4]/55 font-bold">Location</span>
                <p className="text-[17px] font-serif text-[#FAF7F2] font-semibold">
                  Philippines <span className="text-sm font-normal text-[#EFEBE4]/60">(Open to Global Opportunities)</span>
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full border border-[#CBAE85]/30 flex items-center justify-center text-[#CBAE85] shrink-0 bg-[#252C20]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#EFEBE4]/55 font-bold">Availability</span>
                <p className="text-[17px] font-serif text-[#FAF7F2] font-semibold">
                  Monday – Friday, 8:00 AM – 6:00 PM (PHT)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full bg-[#12160F] border-t border-[#FAF7F2]/10 py-10 relative z-10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo initials */}
          <div className="flex items-center gap-4">
            <span className="text-3xl signature text-[#CBAE85] font-extrabold tracking-wider">JMC</span>
            <span className="text-[#FAF7F2]/20 font-light hidden md:inline">|</span>
            <span className="text-xs signature text-[#CBAE85]/80 hidden md:inline">
              Organized. Reliable. Committed to Excellence.
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[13px] text-[#EFEBE4]/50 text-center">
            &copy; 2025 Jessa Mae Condrillon. All Rights Reserved.
          </p>

          {/* Socials link icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a 
              href="#" 
              target="_blank" 
              className="w-10 h-10 rounded-full border border-[#CBAE85]/20 flex items-center justify-center text-[#CBAE85]/70 hover:text-[#CBAE85] hover:border-[#CBAE85] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:jessamaecondrillon@gmail.com" 
              className="w-10 h-10 rounded-full border border-[#CBAE85]/20 flex items-center justify-center text-[#CBAE85]/70 hover:text-[#CBAE85] hover:border-[#CBAE85] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/639123456789" 
              target="_blank" 
              className="w-10 h-10 rounded-full border border-[#CBAE85]/20 flex items-center justify-center text-[#CBAE85]/70 hover:text-[#CBAE85] hover:border-[#CBAE85] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <IntroSection />
        <ContributionSection />
        <ExperienceSection />
        <SkillsSection />
        <ToolsSection />
        <HighlightsSection />
        <CertificatesSection />
        <QuoteSection />
        <ProcessSection />
        <FaqSection />
        <ContactFooterSection />
      </main>
    </div>
  );
}
