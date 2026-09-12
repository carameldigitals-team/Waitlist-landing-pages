import { useState, useEffect, useRef } from 'react';
import { INCOME_PROFILES, WHATSAPP_GROUP_URL } from '../data/profiles';
import { IncomeProfile } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

export function ProfileScale() {
  const [litIndices, setLitIndices] = useState<number[]>([0, 1, 2, 3]);
  const [fillWidth, setFillWidth] = useState('100%');
  const [activeProfile, setActiveProfile] = useState<IncomeProfile>(INCOME_PROFILES[0]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check intersection to light up nodes progressively
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setFillWidth('100%');
          INCOME_PROFILES.forEach((_, i) => {
            setTimeout(() => {
              setLitIndices((prev) => (prev.includes(i) ? prev : [...prev, i]));
            }, 300 + i * 220);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scale-section"
      className="py-20 md:py-24 px-6 max-w-[960px] mx-auto text-center"
    >
      <h2
        id="scale-heading"
        className="font-bold text-[22px] sm:text-[28px] md:text-[30px] text-[#2A1810] max-w-[620px] mx-auto leading-snug mb-3"
      >
        Somewhere on this scale is you. Not knowing where is exactly how people stay
        stuck for years.
      </h2>

      <p
        id="scale-desc"
        className="text-[#4A3628] font-medium text-[15px] sm:text-[16px] max-w-[520px] mx-auto leading-relaxed mb-16"
      >
        The Scorecard doesn't guess. It tells you your exact profile, what it's
        quietly costing you, and the one next step that actually fits — in 5 minutes.
      </p>

      {/* Progress Track */}
      <div className="relative px-2 sm:px-4 max-w-[840px] mx-auto mb-12">
        {/* Track Line */}
        <div className="relative h-[6px] bg-[#E2D3B8] rounded-full mx-5 sm:mx-7 overflow-visible">
          <div
            id="trackFill"
            className="absolute left-0 top-0 bottom-0 rounded-full transition-all duration-[1400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              width: fillWidth,
              background: 'linear-gradient(90deg, #D4A828, #2A1810)',
            }}
          />
        </div>

        {/* 4 Stops */}
        <div id="stops" className="flex justify-between relative mt-0">
          {INCOME_PROFILES.map((profile, idx) => {
            const isLit = litIndices.includes(idx);
            const isSelected = activeProfile.id === profile.id;
            const isLast = idx === INCOME_PROFILES.length - 1;

            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setActiveProfile(profile)}
                className="flex-1 flex flex-col items-center relative -top-[21px] group cursor-pointer text-center bg-transparent border-0 p-0 focus:outline-none"
                aria-pressed={isSelected}
                aria-label={`View details for ${profile.title}`}
              >
                {/* Node Circle */}
                <div
                  className={`w-[20px] h-[20px] rounded-full bg-white border-[3px] transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-[#D4A828]/30 scale-125'
                      : 'group-hover:scale-110'
                  } ${
                    isLit
                      ? isLast
                        ? 'border-[#2A1810] bg-[#2A1810]'
                        : 'border-[#D4A828] bg-[#D4A828]'
                      : 'border-[#E2D3B8] bg-white'
                  }`}
                />

                {/* Stop Label */}
                <div
                  className={`mt-4 font-bold text-[13px] sm:text-[14px] leading-tight transition-colors ${
                    isSelected
                      ? 'text-[#D4A828] underline underline-offset-4'
                      : 'text-[#2A1810]'
                  } max-w-[90px] sm:max-w-[130px]`}
                >
                  {profile.title}
                </div>

                {/* Stop Short Description */}
                <div className="mt-1.5 font-medium text-[11.5px] sm:text-[12px] text-[#4A3628] max-w-[125px] leading-normal hidden sm:block">
                  {profile.shortDesc}
                </div>

                {/* Mobile tap cue */}
                <span className="text-[10px] text-[#D4A828] font-semibold mt-1 sm:hidden">
                  {isSelected ? '● Active' : 'Tap to inspect'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Profile Detail Box */}
      {activeProfile && (
        <div
          id="profile-detail-card"
          className="mt-6 text-left bg-[#EFE3CE] border border-[#E2D3B8] rounded-2xl p-6 sm:p-8 max-w-[780px] mx-auto shadow-sm transition-all animate-rise-in"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2D3B8]">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#2A1810] bg-[#D4A828]/30 px-2.5 py-1 rounded-md mb-2">
                {activeProfile.scoreRange}
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#2A1810]">
                Profile: {activeProfile.title}
              </h3>
              <p className="text-[13.5px] text-[#4A3628] font-semibold mt-0.5">
                "{activeProfile.shortDesc}"
              </p>
            </div>
            <div className="self-start sm:self-center">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#2A1810] text-[#E8C766]">
                {activeProfile.badge}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Common Symptoms */}
            <div>
              <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#2A1810] mb-2.5">
                Common Signs & Patterns:
              </h4>
              <ul className="space-y-2 text-[13.5px] text-[#4A3628]">
                {activeProfile.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4A828] font-bold shrink-0">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Hidden Cost & Next Step */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="bg-white/60 p-3.5 rounded-xl border border-[#E2D3B8]">
                <h4 className="text-[12px] font-bold uppercase tracking-wide text-[#2A1810] mb-1">
                  ⚠️ What It's Quietly Costing You:
                </h4>
                <p className="text-[13px] text-[#4A3628] leading-relaxed">
                  {activeProfile.hiddenCost}
                </p>
              </div>

              <div className="bg-[#2A1810] text-[#F5EEE1] p-3.5 rounded-xl">
                <h4 className="text-[12px] font-bold uppercase tracking-wide text-[#E8C766] mb-1">
                  🎯 The Prescribed Next Step:
                </h4>
                <p className="text-[13px] text-[#E8DCC8] leading-relaxed">
                  {activeProfile.nextStep}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E2D3B8] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12.5px] text-[#4A3628] font-medium text-center sm:text-left">
              Think you might be this profile? Take the free Career Scorecard in the
              WhatsApp group.
            </p>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4A828] hover:bg-[#E8C766] text-[#2A1810] font-bold text-[13.5px] py-2.5 px-5 rounded-lg transition-all shadow-sm shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Verify My Profile</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
