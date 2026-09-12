import { useEffect, useState } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '06',
    hours: '23',
    mins: '48',
    secs: '12',
  });

  useEffect(() => {
    // Check or set target launch date in localStorage so it stays stable across reloads
    const key = 'career_scorecard_launch_time';
    let target = localStorage.getItem(key);
    if (!target) {
      const now = new Date();
      now.setDate(now.getDate() + 7);
      target = now.toISOString();
      localStorage.setItem(key, target);
    }

    const launchDate = new Date(target);

    const updateTimer = () => {
      const now = new Date();
      let diff = launchDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00', secs: '00' });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        mins: String(m).padStart(2, '0'),
        secs: String(s).padStart(2, '0'),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="countdown-strip"
      className="bg-[#2A1810] text-[#F5EEE1] py-10 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <div
          id="countdown-tag"
          className="font-semibold text-[14px] tracking-wide text-[#E8C766] mb-5 uppercase"
        >
          Career Scorecard™ opens in
        </div>

        <div id="countdown-timer" className="flex justify-center gap-3 sm:gap-7 flex-wrap">
          {/* Days */}
          <div className="flex flex-col items-center min-w-[64px]">
            <div
              id="days"
              className="font-extrabold text-[28px] sm:text-[36px] bg-[#F5EEE1] text-[#2A1810] py-2.5 px-3.5 rounded-[10px] min-w-[64px] leading-none shadow-sm"
            >
              {timeLeft.days}
            </div>
            <div className="mt-2 font-semibold text-[12px] text-[#E8DCC8]">Days</div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center min-w-[64px]">
            <div
              id="hours"
              className="font-extrabold text-[28px] sm:text-[36px] bg-[#F5EEE1] text-[#2A1810] py-2.5 px-3.5 rounded-[10px] min-w-[64px] leading-none shadow-sm"
            >
              {timeLeft.hours}
            </div>
            <div className="mt-2 font-semibold text-[12px] text-[#E8DCC8]">Hours</div>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center min-w-[64px]">
            <div
              id="mins"
              className="font-extrabold text-[28px] sm:text-[36px] bg-[#F5EEE1] text-[#2A1810] py-2.5 px-3.5 rounded-[10px] min-w-[64px] leading-none shadow-sm"
            >
              {timeLeft.mins}
            </div>
            <div className="mt-2 font-semibold text-[12px] text-[#E8DCC8]">Minutes</div>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center min-w-[64px]">
            <div
              id="secs"
              className="font-extrabold text-[28px] sm:text-[36px] bg-[#F5EEE1] text-[#2A1810] py-2.5 px-3.5 rounded-[10px] min-w-[64px] leading-none shadow-sm"
            >
              {timeLeft.secs}
            </div>
            <div className="mt-2 font-semibold text-[12px] text-[#E8DCC8]">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
