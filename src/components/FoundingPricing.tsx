import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FoundingPricingProps {
  totalSpots?: number;
}

export function FoundingPricing({ totalSpots = 50 }: FoundingPricingProps) {
  return (
    <section
      id="founding-section"
      className="bg-[#2A1810] text-[#F5EEE1] py-16 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div
          id="founding-eyebrow"
          className="text-[#E8C766] font-bold text-[13.5px] uppercase tracking-wider mb-3.5"
        >
          Strict Founding Member Allocation
        </div>

        {/* Main Section Headline */}
        <h2
          id="founding-heading"
          className="font-extrabold text-[24px] sm:text-[30px] md:text-[34px] leading-snug max-w-[640px] mx-auto mb-4"
        >
          The first <span className="text-[#E8C766]">{totalSpots} people</span> get in at founding
          price. Everyone after pays full price.
        </h2>

        {/* Explanatory Narrative */}
        <p
          id="founding-desc"
          className="text-[#E8DCC8] font-medium text-[15px] sm:text-[16px] max-w-[540px] mx-auto leading-relaxed mb-8"
        >
          Once these {totalSpots} spots are claimed — or 7 days pass, whichever comes
          first — founding pricing closes for good. Group arrival timestamps
          strictly determine priority.
        </p>

        {/* Authentic Scarcity Card (Zero Unverified Numbers) */}
        <div
          id="spot-tracker"
          className="max-w-[500px] mx-auto bg-[#3A2418]/60 border border-[rgba(232,199,102,0.2)] rounded-2xl p-5 sm:p-6 text-left shadow-lg"
        >
          {/* Status Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[rgba(245,238,225,0.1)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5FE377] animate-pulse" />
              <span className="text-[13px] font-bold text-[#E8C766] uppercase tracking-wide">
                Cohort 01 Doors Open
              </span>
            </div>
            <span className="text-[12px] font-bold text-[#F5EEE1] bg-[#D4A828]/20 border border-[#D4A828]/30 px-2.5 py-0.5 rounded-full">
              Hard Cap: {totalSpots} Total
            </span>
          </div>

          {/* Transparent Allocation Rules (Real Scarcity Mechanism) */}
          <div className="space-y-3.5 my-5 text-[13.5px]">
            <div className="flex items-start gap-3">
              <span className="text-[#D4A828] font-bold text-[15px] shrink-0 mt-0.5">
                01
              </span>
              <div>
                <strong className="text-[#F5EEE1] block">
                  Timestamped Entry Priority
                </strong>
                <span className="text-[#C9B79A] text-[12.5px] leading-relaxed block">
                  Your entry time into the WhatsApp group records your position in line.
                  Early joiners get the first window to claim.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#D4A828] font-bold text-[15px] shrink-0 mt-0.5">
                02
              </span>
              <div>
                <strong className="text-[#F5EEE1] block">
                  Private Group-First Release
                </strong>
                <span className="text-[#C9B79A] text-[12.5px] leading-relaxed block">
                  The Career Scorecard drops inside the group 24 hours before any public
                  launch.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#D4A828] font-bold text-[15px] shrink-0 mt-0.5">
                03
              </span>
              <div>
                <strong className="text-[#F5EEE1] block">
                  Automated Cutoff at #{totalSpots}
                </strong>
                <span className="text-[#C9B79A] text-[12.5px] leading-relaxed block">
                  Member #1 through #{totalSpots} lock the founding rate for life.
                  Member #{totalSpots + 1} and beyond pay standard public rates.
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Action inside Card */}
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2.5 w-full bg-[#D4A828] hover:bg-[#E8C766] text-[#2A1810] font-bold text-[14.5px] py-3.5 px-4 rounded-xl transition-all shadow-md active:scale-[0.99]"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Lock Your Founding Priority in WhatsApp</span>
          </a>

          {/* Reassurance footnote */}
          <div
            id="spot-note"
            className="mt-3 text-center text-[12px] font-medium text-[#C9B79A]"
          >
            Shared across all 3 offer tiers — once the roster of {totalSpots} is reached,
            founding pricing is closed permanently.
          </div>
        </div>
      </div>
    </section>
  );
}
