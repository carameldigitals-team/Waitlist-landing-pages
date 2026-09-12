import { useState } from 'react';
import { INCOME_PROFILES } from '../data/profiles';

export function QuickCheckModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!isOpen) return null;

  const questions = [
    {
      text: 'If your employer closed its doors by surprise, your personal finances would:',
      options: [
        { label: 'Panic within 30 days due to high monthly commitments', profile: 'Salary Survivor' },
        { label: 'Survive several months, but no secondary revenue stream exists', profile: 'Income Explorer' },
        { label: 'Be okay, but my high-value skills remain completely unmonetized', profile: 'Ready But Stuck' },
        { label: 'Be supported by active side ventures that need better automation', profile: 'Income Builder' },
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-rise-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#2A1810] border border-[#E8C766]/30 rounded-2xl max-w-lg w-full p-6 sm:p-7 text-[#F5EEE1] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C9B79A] hover:text-[#E8C766] text-xl font-bold p-1 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E8C766] bg-[#D4A828]/20 px-2.5 py-0.5 rounded-full mb-3">
          Instant 15-Second Pulse Check
        </div>

        <h3 className="text-xl font-bold text-[#F5EEE1] mb-2">
          Which scenario closest matches your current reality?
        </h3>
        <p className="text-xs text-[#C9B79A] mb-5">
          Select one to instantly see which archetype fits:
        </p>

        <div className="space-y-2.5">
          {questions[0].options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedAnswer(idx)}
                className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#E8C766] bg-[#E8C766]/15 text-[#F5EEE1]'
                    : 'border-white/10 bg-white/5 text-[#E8DCC8] hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center text-[10px] ${
                      isSelected
                        ? 'border-[#E8C766] bg-[#E8C766] text-[#2A1810]'
                        : 'border-white/30'
                    }`}
                  >
                    {isSelected ? '✓' : ''}
                  </span>
                  <span>{opt.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-5 p-4 rounded-xl bg-[#E8C766]/10 border border-[#E8C766]/30 text-xs text-[#F5EEE1] animate-rise-in">
            <span className="font-bold text-[#E8C766] block text-sm mb-1">
              Your Primary Likely Match: {questions[0].options[selectedAnswer].profile}
            </span>
            <span>
              The full 5-minute scorecard gives you your exact numerical rating, vulnerability breakdown, and personalized action blueprint inside the WhatsApp group.
            </span>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#C9B79A] hover:text-white cursor-pointer"
          >
            Close
          </button>
          <a
            href="https://chat.whatsapp.com/CHJvSYr2jxdBgzW7REnOX5?s=sh&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-bold bg-[#D4A828] hover:bg-[#E8C766] text-[#2A1810] rounded-lg transition-colors cursor-pointer"
          >
            Get Full Scorecard in WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
