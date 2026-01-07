"use client"

export default function FixedCallButton() {
  return (
    <a
      href="tel:+2347067208592"
      aria-label="Call Dr. Godswill Alozie"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-glow1 text-black
        flex items-center justify-center
        shadow-2xl
        animate-glow-pulse
        hover:scale-110 transition
      "
    >
      {/* Phone SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-1.27.64a11.04 11.04 0 005.52 5.52l.64-1.27a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  )
}
