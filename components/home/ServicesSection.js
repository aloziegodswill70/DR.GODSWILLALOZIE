import FloatingDecor from "@/components/ui/FloatingDecor"

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 -z-10">
        {/* dark base */}
        <div className="absolute inset-0 bg-[#0b0f1a]" />

        {/* gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-glow1/10 via-transparent to-glow3/10" />

        {/* glow blobs */}
        <div className="absolute top-24 left-16 w-96 h-96 bg-glow1/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-24 right-16 w-80 h-80 bg-glow3/20 rounded-full blur-3xl animate-pulseSoft" />
      </div>

      {/* Floating Decorations */}
      <FloatingDecor
        src="/decor/circle.svg"
        className="left-6 bottom-10 w-24 opacity-40"
        duration={7}
      />
      <FloatingDecor
        src="/decor/blob.svg"
        className="right-10 top-20 w-40 opacity-30"
        duration={10}
      />

      {/* SECTION HEADER */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-6 text-glow1 glow-text">
          What I Do & Why I Do It
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am an optometrist who found purpose beyond the clinic — using
          technology to solve real-world problems, improve access to care,
          and build digital systems that create impact.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* STORY BLOCK */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-glow2">
              My Journey Into Technology
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              My journey into tech was not planned. While studying and
              practicing optometry, I became deeply interested in how
              digital systems could improve healthcare workflows, patient
              access, and information management.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I started learning web development out of curiosity — often
              late at night, after long academic and clinical days. With
              limited resources, inconsistent power, and no formal tech
              background, progress was slow, but persistence kept me going.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Over time, curiosity turned into skill, and skill turned into
              purpose. Today, I design and build platforms that merge
              healthcare insight with modern software engineering.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg">
            <h4 className="text-xl font-semibold mb-4 text-glow3">
              What I’ve Learned Along the Way
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>• Growth is uncomfortable, but consistency beats talent</li>
              <li>• Real problems create the best software ideas</li>
              <li>• Learning never stops — tech evolves daily</li>
              <li>• Healthcare needs more thoughtful digital solutions</li>
            </ul>
          </div>
        </div>

        {/* SERVICES / SKILLS */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 text-glow1">
            How I Create Impact
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Clinical Eye Care
              </h4>
              <p className="text-gray-300 leading-relaxed">
                As a trained optometrist, I provide professional eye care,
                manage visual disorders, and understand the realities of
                patient-centered healthcare delivery.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
              <h4 className="text-xl font-semibold mb-4 text-glow3">
                Web & Software Development
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I build scalable web applications using modern frameworks,
                focusing on performance, security, and real-world usability —
                especially for healthcare, education, and business systems.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition">
              <h4 className="text-xl font-semibold mb-4 text-glow1">
                Digital Health Innovation
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I explore how technology can bridge healthcare gaps —
                tele-consultation platforms, automation, AI-assisted tools,
                and systems that expand access beyond physical clinics.
              </p>
            </div>
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-glow2">
            Persistence, Growth & Vision
          </h3>
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            My journey has been shaped by persistence — balancing medicine,
            self-learning, failed projects, rewrites, debugging nights, and
            constant improvement. I believe technology is most powerful
            when built by people who deeply understand the problems they
            are solving.
            <br /><br />
            My goal is simple: to keep learning, keep building, and use
            technology to improve lives at scale.
          </p>
        </div>

      </div>
    </section>
  )
}
