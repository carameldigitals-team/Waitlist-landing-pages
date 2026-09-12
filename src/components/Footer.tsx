import { useState } from 'react';
import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_GROUP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <footer
      id="footer-section"
      className="bg-[#2A1810] text-[#F5EEE1] text-center pt-14 pb-16 px-6 border-t border-[rgba(245,238,225,0.08)]"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Beyond Salary Movement Brand Badge */}
        <div className="flex items-center gap-2.5 mb-3.5 opacity-90">
          <div className="w-7 h-7 rounded-lg overflow-hidden border border-[#D4A828]/40 shadow-sm bg-[#180D07]">
            <img
              src="/beyond_salary_logo.jpg"
              alt="Beyond Salary Movement Emblem"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-bold text-[13px] tracking-wider text-[#E8C766] uppercase">
            Beyond Salary Movement
          </span>
        </div>

        {/* Pacifico Tagline */}
        <div
          id="footer-tagline"
          className="font-['Pacifico',cursive] text-[20px] sm:text-[24px] md:text-[26px] text-[#E8C766] mb-3.5 tracking-wide"
        >
          Your salary is your foundation, not your ceiling.
        </div>

        <div className="flex items-center gap-3 my-4">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-[#E8DCC8] hover:text-[#E8C766] transition-colors py-1 px-3 rounded-md bg-white/5 hover:bg-white/10"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Open WhatsApp Group</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="text-[13px] text-[#E8DCC8] hover:text-[#E8C766] transition-colors py-1 px-3 rounded-md bg-white/5 hover:bg-white/10 cursor-pointer"
          >
            {copied ? '✓ Link Copied' : '📋 Copy Link'}
          </button>
        </div>

        {/* Fine Print */}
        <div id="footer-fine" className="font-medium text-[13px] text-[#C9B79A] mt-2">
          © Beyond Salary Movement — Caramel Digital Academy
        </div>
      </div>
    </footer>
  );
}
