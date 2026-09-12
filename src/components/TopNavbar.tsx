import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

export function TopNavbar() {
  return (
    <header
      id="top-navbar"
      className="sticky top-0 z-40 bg-[#1F120A]/95 backdrop-blur-md border-b border-[#D4A828]/25 text-[#F5EEE1] px-4 sm:px-6 py-2.5 transition-all"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <a
          href="#hero-section"
          className="group flex items-center gap-3 text-decoration-none focus:outline-none"
          aria-label="Beyond Salary Movement - Home"
        >
          {/* Logo Mark with Shimmer & Floating micro-aura */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-[#E8C766] via-[#D4A828] to-[#3A2418] shadow-[0_0_15px_rgba(212,168,40,0.35)] group-hover:shadow-[0_0_22px_rgba(232,199,102,0.55)] transition-all">
            <div className="relative w-full h-full rounded-[10px] bg-[#180D07] overflow-hidden flex items-center justify-center">
              <img
                src="/beyond_salary_logo.jpg"
                alt="Beyond Salary Movement Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              {/* Micro light sweep */}
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-shimmer-sweep"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="font-extrabold text-[13px] sm:text-[14px] tracking-wider text-[#F5EEE1] group-hover:text-[#E8C766] transition-colors leading-tight">
              BEYOND SALARY
            </span>
            <span className="text-[10px] font-semibold text-[#D4A828] tracking-[0.18em] uppercase leading-none">
              Movement
            </span>
          </div>
        </a>

        {/* Right CTA / Cohort Status */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-[12px] font-semibold text-[#E8DCC8] bg-white/5 border border-[#D4A828]/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#5FE377] animate-pulse" />
            <span>Cohort 01 Waitlist Open</span>
          </div>

          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#D4A828] hover:bg-[#E8C766] text-[#2A1810] font-bold text-[12.5px] sm:text-[13px] py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-all shadow-sm hover:shadow-[0_4px_14px_rgba(212,168,40,0.35)] active:scale-98 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden xs:inline">Join</span> Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
