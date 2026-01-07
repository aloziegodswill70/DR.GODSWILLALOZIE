import FloatingDecor from "@/components/ui/FloatingDecor"

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 -z-10">
        {/* dark base */}
        <div className="absolute inset-0 bg-[#0b0f1a]" />

        {/* gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-glow2/10 via-transparent to-glow1/10" />

        {/* glow blobs */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-glow1/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-24 w-80 h-80 bg-glow3/20 rounded-full blur-3xl animate-pulseSoft" />
      </div>

      {/* Floating Decorations */}
      <FloatingDecor
        src="/decor/blur-spot.png"
        className="top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2 opacity-40"
        duration={12}
      />
      <FloatingDecor
        src="/decor/blob.svg"
        className="top-20 right-10 w-40 opacity-30"
        duration={9}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6  text-glow2 glow-text">
            Skills, Tools & Growth
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My skills were not acquired overnight. They were built through
            years of curiosity, self-learning, trial and error, failed
            projects, rewrites, and constant improvement — while balancing
            a demanding medical career.
          </p>
        </div>

        {/* STORY + SKILLS GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* STORY SIDE */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              How I Built My Technical Skillset
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I started from the basics — learning how the web works, how
              interfaces are built, and how systems communicate. With no
              formal tech background, I relied on documentation, online
              communities, and real projects to sharpen my skills.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Over time, I moved from simple static pages to dynamic web
              applications, authentication systems, databases, APIs, and
              full-stack platforms used by real people.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, my focus is not just writing code — but building
              reliable, scalable, and user-centered systems that solve
              real problems.
            </p>
          </div>

          {/* SKILLS CARD */}
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-lg">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Core Technologies I Work With
            </h4>

            <div className="space-y-6">

              <div>
                <h5 className="font-semibold mb-2 text-glow1">Frontend</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  HTML, CSS, JavaScript, React, CSS —
                  building responsive, accessible, and modern user
                  interfaces.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-glow2">Backend</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Node.js, API design, authentication, PostgreSQL,
                  server logic, and secure data handling.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-glow3">
                  Mobile & Cross-Platform
                </h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cross-platform app concepts, mobile-first design thinking,
                  and performance optimization.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-glow1">
                  Healthcare & Digital Systems
                </h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Clinical workflow understanding, digital health platforms,
                  tele-consultation systems, and healthcare-focused solutions.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* SKILL PHILOSOPHY */}
        <div className="mt-24 backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            My Approach to Learning & Technology
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            I believe technology is a lifelong journey. Every project teaches
            something new, every bug improves understanding, and every
            challenge refines problem-solving skills. My goal is not to
            chase trends, but to master foundations and apply them where
            they matter most.
          </p>
        </div>

      </div>
    </section>
  )
}
