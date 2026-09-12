import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  statusBadge?: string;
}

export function Hero({
  statusBadge = 'Cohort 01 Doors Open • First 50 Entries Lock Founding Rates',
}: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden text-center px-6 pt-16 pb-24 md:pt-20 md:pb-28"
      style={{
        background:
          'radial-gradient(120% 140% at 50% -10%, #3A2418 0%, #2A1810 55%, #180D07 100%)',
        color: '#F5EEE1',
      }}
    >
      {/* Background Gold Ambient Glow */}
      <div
        className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[900px] h-[280px] pointer-events-none opacity-80"
        style={{
          background:
            'radial-gradient(closest-side, rgba(212,168,40,0.28), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Brandmark */}
        <div
          id="hero-brandmark"
          className="inline-flex items-center gap-2.5 font-bold text-[15px] tracking-wider text-[#E8C766] opacity-95 mb-10"
        >
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#D4A828] shadow-[0_0_0_4px_rgba(212,168,40,0.22)]"
            aria-hidden="true"
          />
          <span>BEYOND SALARY MOVEMENT</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-headline"
          className="font-extrabold text-[32px] sm:text-[44px] md:text-[54px] leading-[1.14] max-w-[820px] tracking-[-0.01em] text-[#F5EEE1] mb-5 animate-rise-in"
        >
          If Your Salary Stopped Tomorrow,{' '}
          <span className="text-[#E8C766]">How Long Would You Survive?</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="font-medium text-[16px] sm:text-[18px] text-[#E8DCC8] max-w-[580px] leading-relaxed mb-10 animate-rise-in [animation-delay:200ms]"
        >
          You're one of 4 income profiles. Most are already exposed — just one bad
          month away from real trouble — and don't know it. Find out which one you are
          before you find out the hard way.
        </p>

        {/* CTA Capture Area */}
        <div
          id="hero-capture"
          className="w-full max-w-[420px] mx-auto animate-rise-in [animation-delay:400ms]"
        >
          <a
            id="joinBtn"
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#D4A828] text-[#2A1810] font-bold text-[16px] py-[18px] px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(212,168,40,0.4)] active:translate-y-0 active:shadow-none"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Join the WhatsApp Group</span>
          </a>

          <p
            id="hero-trust-text"
            className="mt-4 text-[13px] text-[#C9B79A] font-medium leading-normal"
          >
            Free. First access + a personalised next step — before this opens to
            everyone else.
          </p>

          {statusBadge && (
            <div
              id="memberCount"
              className="mt-3.5 inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C766]/10 border border-[#E8C766]/25 text-[12.5px] font-semibold text-[#E8C766]"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#5FE377] animate-pulse" />
              <span>{statusBadge}</span>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div
          id="hero-badges"
          className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap mt-7 animate-rise-in [animation-delay:600ms]"
        >
          <div className="flex items-center gap-1.5 text-[#E8DCC8] font-semibold text-[12.5px]">
            <span>✅</span>
            <span>100% Free</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#C9B79A] hidden sm:inline-block" />
          <div className="flex items-center gap-1.5 text-[#E8DCC8] font-semibold text-[12.5px]">
            <span>⏱️</span>
            <span>~5 Minutes</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#C9B79A] hidden sm:inline-block" />
          <div className="flex items-center gap-1.5 text-[#E8DCC8] font-semibold text-[12.5px]">
            <span>🔒</span>
            <span>100% Confidential</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#C9B79A] hidden sm:inline-block" />
          <div className="flex items-center gap-1.5 text-[#E8DCC8] font-semibold text-[12.5px]">
            <span>⚡</span>
            <span>Instant Result</span>
          </div>
        </div>
      </div>
    </section>
  );
}
