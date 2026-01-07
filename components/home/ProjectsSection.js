import Link from "next/link"
import FloatingDecor from "@/components/ui/FloatingDecor"

export default function ProjectsSection() {
  return (
    <section className="relative py-32 px-5 overflow-hidden">

      {/* ===== GRADIENT + TRANSPARENT BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-glow3/10 via-transparent to-glow1/10" />

        {/* glow blobs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-glow3/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-glow1/15 rounded-full blur-3xl animate-pulseSoft" />
      </div>

      {/* Floating SVG Decor */}
      <FloatingDecor
        src="/decor/blob.svg"
        className="top-10 left-0 w-40 opacity-30"
        duration={10}
      />
      <FloatingDecor
        src="/decor/circle.svg"
        className="bottom-10 right-10 w-28 opacity-40"
        duration={7}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-glow3 mb-4 glow-text">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            These projects represent my journey in building real-world solutions —
            from AI-powered productivity tools to healthcare-focused digital
            platforms designed to solve practical problems.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* PROJECT 1 */}
          <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-glow1/20 rounded-full blur-3xl animate-glow-pulse"></div>

            <h3 className="text-2xl font-semibold mb-3">
              AI Hustle Partner
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              An AI-powered platform built to help individuals and small business
              owners generate professional CVs, cover letters, business ideas,
              and social media content — especially tailored for emerging markets.
            </p>

            <ul className="text-gray-400 text-sm list-disc list-inside mb-6 space-y-1">
              <li>AI content generation with usage limits</li>
              <li>User authentication & dashboard</li>
              <li>Payment integration for premium access</li>
            </ul>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-glow1 hover:underline"
            >
              View Project Details →
            </Link>
          </div>

          {/* PROJECT 2 */}
          <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-glow2/20 rounded-full blur-3xl animate-glow-pulse"></div>

            <h3 className="text-2xl font-semibold mb-3">
              Tele-Optometry Platform
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              A healthcare-focused digital platform designed to connect patients
              with eye care professionals remotely, reducing barriers to access
              and improving early detection of eye conditions.
            </p>

            <ul className="text-gray-400 text-sm list-disc list-inside mb-6 space-y-1">
              <li>Virtual eye consultations</li>
              <li>Secure patient data handling</li>
              <li>Global-ready architecture</li>
            </ul>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-glow2 hover:underline"
            >
              Explore This Project →
            </Link>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/projects"
            className="px-8 py-4 rounded-full bg-glow3 hover:bg-glow3/80 transition shadow-lg text-white"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  )
}
