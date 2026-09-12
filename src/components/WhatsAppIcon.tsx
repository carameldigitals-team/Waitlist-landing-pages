export function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5FE377" />
          <stop offset="100%" stopColor="#20B858" />
        </linearGradient>
        <linearGradient id="waShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="25" r="20" fill="#0B6B32" opacity="0.25" />
      <circle cx="24" cy="24" r="20" fill="url(#waBg)" />
      <circle cx="24" cy="24" r="20" fill="url(#waShine)" />
      <path
        d="M24 12.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.03.53 3.98 1.53 5.7L12.5 35.5l5.98-1.57a11.44 11.44 0 0 0 5.52 1.41h.01c6.35 0 11.5-5.15 11.5-11.5S30.35 12.5 24 12.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M24 14.3c-5.35 0-9.7 4.35-9.7 9.7 0 1.83.51 3.55 1.4 5.02l.22.36-.93 3.4 3.49-.91.35.2a9.63 9.63 0 0 0 4.87 1.33h.01c5.35 0 9.7-4.35 9.7-9.7s-4.35-9.7-9.7-9.7Z"
        fill="url(#waBg)"
      />
      <path
        d="M20.4 18.9c-.22-.5-.46-.51-.67-.52-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.06 3.15 5.06 4.42.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35-.3-.15-1.75-.87-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.6-1.5-.85-2.06Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
