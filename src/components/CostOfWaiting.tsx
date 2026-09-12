export function CostOfWaiting() {
  const costs = [
    {
      id: 'cost-1',
      text: 'You find out your profile last, after the crowd has already claimed the founding spots.',
    },
    {
      id: 'cost-2',
      text: 'You pay full price later for the same next step that costs a fraction of that today.',
    },
    {
      id: 'cost-3',
      text: 'You stay another month wondering which of the 4 profiles you are — instead of knowing.',
    },
  ];

  return (
    <section
      id="cost-section"
      className="bg-[#EFE3CE] py-13 px-6 text-center border-b border-[#E2D3B8]"
    >
      <div className="max-w-4xl mx-auto">
        <div
          id="cost-kicker"
          className="font-bold text-[14px] text-[#2A1810] mb-7 tracking-wide uppercase"
        >
          If you don't join before this opens to everyone
        </div>

        <div
          id="cost-grid"
          className="flex justify-center gap-8 md:gap-10 flex-wrap max-w-[840px] mx-auto"
        >
          {costs.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="max-w-[240px] text-left flex flex-col items-start"
            >
              <span
                className="text-[#D4A828] font-extrabold text-[22px] leading-none mb-2.5 select-none"
                aria-hidden="true"
              >
                ✕
              </span>
              <p className="font-semibold text-[14.5px] text-[#2A1810] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
