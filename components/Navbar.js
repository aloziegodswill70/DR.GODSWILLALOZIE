"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold glow-text">
          Dr Godswill
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Menu Button"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 text-gray-300">
          <Link href="/" className="hover:text-glow1">Home</Link>
          <Link href="/about" className="hover:text-glow1">About</Link>
          <Link href="/services" className="hover:text-glow1">Services</Link>
          <Link href="/projects" className="hover:text-glow1">Projects</Link>
          <Link href="/contacts" className="hover:text-glow1">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-black/40 border-t border-white/10 text-center py-4 space-y-4 text-gray-300">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contacts" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
