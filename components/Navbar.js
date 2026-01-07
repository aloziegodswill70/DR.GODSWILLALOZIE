"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">

          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-bold glow-text"
            onClick={closeMenu}
          >
            Dr Godswill
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex gap-10 text-gray-300 font-medium">
            <Link href="/" className="hover:text-glow1 transition">Home</Link>
            <Link href="/about" className="hover:text-glow1 transition">About</Link>
            <Link href="/services" className="hover:text-glow1 transition">Services</Link>
            <Link href="/projects" className="hover:text-glow1 transition">Projects</Link>
            <Link href="/contacts" className="hover:text-glow1 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE DROPDOWN */}
      <div
        className={`
          fixed top-[72px] left-0 w-full z-50 lg:hidden
          bg-black/80 backdrop-blur-lg border-t border-white/10
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-gray-300 text-lg font-medium">
          <Link href="/" onClick={closeMenu} className="hover:text-glow1">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-glow1">
            About
          </Link>
          <Link href="/services" onClick={closeMenu} className="hover:text-glow1">
            Services
          </Link>
          <Link href="/projects" onClick={closeMenu} className="hover:text-glow1">
            Projects
          </Link>
          <Link href="/contacts" onClick={closeMenu} className="hover:text-glow1">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
