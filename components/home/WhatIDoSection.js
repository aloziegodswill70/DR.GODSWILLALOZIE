import FloatingDecor from "@/components/ui/FloatingDecor"

export default function WhatIDoSection() {
  return (
    <section className="relative overflow-hidden py-32 px-6">

      {/* ===== BACKGROUND SYSTEM ===== */}
      <div className="absolute inset-0 -z-10">
        {/* dark base */}
        <div className="absolute inset-0 bg-[#0b0f1a]" />

        {/* gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-glow1/10 via-transparent to-glow3/10" />

        {/* glow blobs */}
        <div className="absolute top-24 left-20 w-96 h-96 bg-glow2/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-24 w-80 h-80 bg-glow1/20 rounded-full blur-3xl animate-pulseSoft" />
      </div>

      {/* Floating Decorations */}
      <FloatingDecor
        src="/decor/blob.svg"
        className="top-16 right-10 w-44 opacity-30"
        duration={12}
      />
      <FloatingDecor
        src="/decor/circle.svg"
        className="bottom-16 left-10 w-28 opacity-40"
        duration={8}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-glow3 glow-text">
            What I Do & How I Create Impact
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My work sits at the intersection of healthcare, technology, and
            real-world problem solving. I don’t just build systems — I design
            solutions shaped by lived experience, persistence, and a deep
            understanding of human needs.
          </p>
        </div>

        {/* STORY INTRO */}
        <div className="max-w-5xl mx-auto mb-24 text-center">
          <p className="text-gray-300 leading-relaxed text-lg">
            Trained as an optometrist, I saw first-hand how limited access,
            inefficient processes, and lack of digital tools affect patient
            outcomes. Rather than accept these limitations, I began teaching
            myself technology — learning late at night, failing often, and
            rebuilding until ideas became usable systems.
          </p>
        </div>

        {/* CORE AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* OPTOMETRY */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition animate-float">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-glow1/20 rounded-full blur-3xl" />

            <h3 className="text-2xl font-semibold mb-4 text-glow1">
              Clinical Eye Care
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              As a licensed optometrist, I provide professional eye care,
              manage refractive errors, and understand the realities of
              conditions such as diabetic eye disease and preventable vision
              loss.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              This clinical foundation gives me insight into patient journeys,
              healthcare workflows, and the real challenges faced in practice.
            </p>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition animate-float">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-glow2/20 rounded-full blur-3xl" />

            <h3 className="text-2xl font-semibold mb-4 text-glow2">
              Web & Software Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              I design and build full-stack web applications — from clean,
              responsive interfaces to secure backend systems, APIs, and
              databases.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              My focus is not flashy code, but reliable systems that solve
              real problems, scale properly, and serve real users.
            </p>
          </div>

          {/* DIGITAL HEALTH & MOBILE */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition animate-float">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-glow3/20 rounded-full blur-3xl" />

            <h3 className="text-2xl font-semibold mb-4 text-glow3">
              Digital Health & Mobile Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              I explore how technology can bridge healthcare gaps — from
              tele-optometry platforms to AI-assisted tools and mobile-friendly
              systems.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              The goal is simple: extend care beyond physical locations and
              make quality services more accessible.
            </p>
          </div>

        </div>

        {/* PHILOSOPHY */}
        <div className="mt-28 max-w-5xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-glow1">
            My Working Philosophy
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            I believe the best technology is built by people who deeply
            understand the problems they are solving. My journey — from
            healthcare to self-taught software development — allows me to
            build systems that are not just functional, but meaningful,
            practical, and human-centered.
          </p>
        </div>

      </div>
    </section>
  )
}
