export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5">

      {/* MAIN PROFILE IMAGE */}
      <img
        src="/images/honourable.jpg"
        alt="Dr Godswill Alozie"
        className="w-40 h-40 rounded-full object-cover border-4 border-glow2 shadow-xl animate-glow-pulse"
      />

      {/* NAME */}
      <h1 className="text-4xl sm:text-6xl font-bold glow-text mt-6">
        Dr. Godswill Alozie
      </h1>

      {/* TAGLINE */}
      <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl">
        Optometrist • Web & Mobile Developer • Full-Stack Engineer
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="/projects"
          className="px-6 py-3 rounded-full bg-glow1 shadow-lg hover:bg-glow1/80 transition"
        >
          View My Projects
        </a>
        <a
          href="/contacts"
          className="px-6 py-3 rounded-full border border-glow2 text-glow2 hover:bg-glow2/20 transition"
        >
          Contact Me
        </a>
      </div>

      {/* SECOND IMAGE – SAFE POSITION */}
      <div className="mt-16 hidden sm:block">
        <img
          src="/images/AIgodswill.jpg"
          alt="Dr Godswill Alozie"
          className="
            w-44 h-44 object-cover rounded-2xl
            border border-white/20 shadow-2xl
            rotate-3 animate-float
          "
        />
      </div>

    </section>
  );
}
