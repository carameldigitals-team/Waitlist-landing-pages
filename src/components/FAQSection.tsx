import { useState } from 'react';
import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    q: 'What is the Career Scorecard™ and how does it work?',
    a: 'The Career Scorecard™ is a proprietary 5-minute diagnostic designed specifically for salaried professionals. It analyzes your income reliance, market leverage, transferable skill assets, and cashflow buffers to categorize you into one of 4 exact income profiles — revealing your biggest blind spots and the single next move that fits your situation.',
  },
  {
    id: 'faq-2',
    q: 'Why is the waitlist hosted on WhatsApp instead of an email list?',
    a: 'Email open rates hover around 20% and launch emails frequently get buried in spam or promotions folders. The WhatsApp group gives you direct, real-time priority access the second Cohort 01 opens, ensuring you don’t miss the founding pricing window. The group is strictly moderated — no spam, zero chatter, just announcement drops and your scorecard link.',
  },
  {
    id: 'faq-3',
    q: 'How does the Founding Member rate work?',
    a: 'When Cohort 01 launches, the scorecard and its accompanying tailored strategy plan are offered at a steep founding discount to the first 50 participants who take action from the group. Once those 50 spots are claimed (or the launch countdown reaches zero), public pricing takes effect for all subsequent applicants.',
  },
  {
    id: 'faq-4',
    q: 'Is my financial and salary information kept confidential?',
    a: '100% confidential. Your diagnostic responses and profile results are private to you. Neither your salary numbers nor your individual answers are ever made public or shared with other group members.',
  },
  {
    id: 'faq-5',
    q: 'What if I already have a side business or investments?',
    a: 'That indicates you may already be an "Income Builder" or "Ready But Stuck". The Scorecard will identify whether you are trading more hours for diminishing returns or sitting on unmonetized expertise, and give you the operational architecture to scale without burning out.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="bg-[#EFE3CE] py-20 px-6 border-t border-[#E2D3B8]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#D4A828] font-bold text-[13px] uppercase tracking-wider block mb-2">
            Got Questions?
          </span>
          <h2 className="font-extrabold text-[26px] sm:text-[32px] text-[#2A1810]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A3628] font-medium text-[15px] mt-2">
            Everything you need to know about Career Scorecard™ and Cohort 01.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white/80 border border-[#E2D3B8] rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 font-bold text-[15px] sm:text-[16px] text-[#2A1810] hover:text-[#D4A828] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-[#D4A828] text-xl font-bold transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-[14px] text-[#4A3628] leading-relaxed border-t border-[#E2D3B8]/50 animate-rise-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small Bottom Prompt */}
        <div className="mt-10 p-5 rounded-xl bg-[#2A1810] text-[#F5EEE1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-[15px] text-[#E8C766]">
              Still have a question?
            </h3>
            <p className="text-[13px] text-[#C9B79A] mt-0.5">
              Ask directly inside the group — our team is on standby.
            </p>
          </div>
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4A828] hover:bg-[#E8C766] text-[#2A1810] font-bold text-[13px] py-2.5 px-4 rounded-lg transition-all shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Join & Ask in WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
