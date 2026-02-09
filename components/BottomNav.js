"use client";

import { usePathname } from "next/navigation";
import {
  FaFileAlt,
  FaWhatsapp,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";

export default function BottomNav() {
  const pathname = usePathname();

  const linkClass = (path, glow = "text-glow1") =>
    `
    flex flex-col items-center text-xs transition-all duration-300
    ${pathname === path ? `${glow} scale-110` : "text-gray-300"}
    hover:${glow} hover:scale-110
  `;

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-black/90 backdrop-blur-md
        border-t border-white/10
        sm:hidden
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div className="flex justify-around items-center py-3">

        {/* CV */}
        <a href="/cv" className={linkClass("/cv", "text-glow1")}>
          <FaFileAlt size={22} />
          <span className="mt-1">CV</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2347067208592"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex flex-col items-center text-green-400
            hover:scale-110 transition-transform duration-300
          "
        >
          <FaWhatsapp size={24} />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>

        {/* Projects */}
        <a href="/projects" className={linkClass("/projects", "text-glow2")}>
          <FaProjectDiagram size={22} />
          <span className="mt-1">Projects</span>
        </a>

        {/* Partnership */}
        <a
          href="/partnership"
          className={linkClass("/partnership", "text-glow3")}
        >
          <FaHandshake size={22} />
          <span className="mt-1">Partner</span>
        </a>

      </div>
    </nav>
  );
}
