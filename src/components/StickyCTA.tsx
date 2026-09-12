import { WHATSAPP_GROUP_URL } from '../data/profiles';
import { WhatsAppIcon } from './WhatsAppIcon';

export function StickyCTA() {
  return (
    <div
      id="sticky-cta"
      className="fixed bottom-0 left-0 right-0 bg-[#2A1810] p-3 sm:px-4 shadow-[0_-6px_24px_rgba(0,0,0,0.35)] z-50 md:hidden border-t border-[rgba(245,238,225,0.1)]"
    >
      <a
        id="sticky-join-btn"
        href={WHATSAPP_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 bg-[#D4A828] active:bg-[#E8C766] text-[#2A1810] font-bold text-[14.5px] py-3.5 px-4 rounded-[10px] w-full shadow-md text-center transition-transform active:scale-[0.99]"
      >
        <WhatsAppIcon className="w-5 h-5 shrink-0" />
        <span>Join the WhatsApp Group</span>
      </a>
    </div>
  );
}
