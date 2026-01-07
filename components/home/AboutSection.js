"use client"

import Link from "next/link"
import FloatingDecor from "@/components/ui/FloatingDecor"

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* ===== GRADIENT + TRANSPARENT BACKDROP (LIKE HERO) ===== */}
      <div className="absolute inset-0 -z-10">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-glow1/10 via-transparent to-glow2/10" />

        {/* glow blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-glow1/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-glow2/15 rounded-full blur-3xl animate-pulseSoft" />
      </div>

      {/* ===== FLOATING SVG DECOR ===== */}
      <FloatingDecor
        src="/decor/dot-grid.svg"
        className="top-10 right-10 w-32 opacity-40"
        duration={10}
      />
      <FloatingDecor
        src="/decor/soft-blob.svg"
        className="bottom-10 left-10 w-44 opacity-30"
        duration={14}
      />

      {/* ===== CONTENT CARD (GLASS EFFECT) ===== */}
      <div className="relative z-10 max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-14 shadow-2xl">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-glow1 shadow-lg">
          My Journey
        </h2>

        {/* Story */}
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          I am <span className="font-semibold text-white">Dr. Godswill Alozie</span>, an
          Optometrist who discovered early that technology could extend the
          impact of healthcare beyond physical clinic walls. While building
          my clinical skills in eye care, I found myself increasingly drawn to
          problem-solving through software.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          My journey into tech was not linear. I learned through late nights,
          failed projects, rewrites, and constant learning. From simple
          websites to full-stack platforms, I stayed consistent — not because
          it was easy, but because I saw how technology could improve access,
          efficiency, and outcomes in healthcare and business.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-10">
          Today, I work at the intersection of{" "}
          <strong className="text-white">eye care</strong>,{" "}
          <strong className="text-white">web development</strong>, and{" "}
          <strong className="text-white">health technology</strong>,
          building solutions that are practical, scalable, and human-centered.
        </p>

        {/* CTA */}
        <Link
          href="/about"
          className="inline-block px-8 py-4 rounded-full border border-glow1 text-glow1 hover:bg-glow1/20 transition duration-300"
        >
          Read My Full Story
        </Link>

      </div>
    </section>
  )
}
