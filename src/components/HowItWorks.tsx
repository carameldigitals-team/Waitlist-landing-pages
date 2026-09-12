import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Join the Private Group',
      desc: 'Lock in your Cohort 01 priority line before the 50 founding access spots are filled.',
      time: 'Instant • 30 seconds',
    },
    {
      num: '02',
      title: 'Complete the 5-Min Scorecard',
      desc: 'Answer intuitive, focused diagnostic questions assessing your financial runway and skill assets.',
      time: '~5 minutes',
    },
    {
      num: '03',
      title: 'Receive Your Custom Roadmap',
      desc: 'Uncover your exact profile archetype, immediate risk exposure, and step-by-step monetization action plan.',
      time: 'Immediate report',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#2A1810] text-[#F5EEE1] py-18 px-6 border-t border-[#E8C766]/15 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#E8C766] font-bold text-[13px] uppercase tracking-wider block mb-2">
            The Process
          </span>
          <h2 className="font-extrabold text-[26px] sm:text-[34px] text-[#F5EEE1] max-w-xl mx-auto">
            From Unknown Vulnerability to <span className="text-[#E8C766]">Clear Direction</span>
          </h2>
          <p className="text-[#E8DCC8] font-medium text-[15px] sm:text-[16px] max-w-lg mx-auto mt-2.5">
            A simple, high-impact diagnostic built for busy professionals with zero time to waste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#3A2418]/60 border border-[#E8C766]/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#E8C766]/45 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[32px] font-black text-[#D4A828] group-hover:text-[#E8C766] transition-colors leading-none">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9B79A] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
                <h3 className="font-bold text-[18px] sm:text-[19px] text-[#F5EEE1] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#C9B79A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#D4A828] hover:bg-[#E8C766] text-[#2A1810] font-bold text-[15px] py-3.5 px-7 rounded-xl transition-all shadow-lg hover:shadow-[0_8px_20px_rgba(212,168,40,0.35)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Join the WhatsApp Group Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
