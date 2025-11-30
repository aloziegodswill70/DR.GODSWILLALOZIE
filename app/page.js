export default function Home() {
  return (
    <div className="text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5">
        <h1 className="text-4xl sm:text-6xl font-bold glow-text">
          Dr. Godswill Alozie
        </h1>

        <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl">
          Optometrist • Web & Mobile Developer • Health Tech Innovator  
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-glow1 hover:bg-glow1/80 transition shadow-lg"
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
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="mt-20 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-glow2">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* Optometry */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3 text-glow1">Optometry</h3>
            <p className="text-gray-300 text-sm">
              Professional eye care services, diagnosis and management of ocular 
              conditions including diabetic eye health and anterior segment care.
            </p>
          </div>

          {/* Web Dev */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3 text-glow2">Web Development</h3>
            <p className="text-gray-300 text-sm">
              I design responsive websites, dashboards, and AI-powered digital tools 
              for healthcare and business sectors across Nigeria and globally.
            </p>
          </div>

          {/* Mobile Dev */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3 text-glow3">Mobile Apps</h3>
            <p className="text-gray-300 text-sm">
              High-performance mobile apps with clean UI using React Native 
              and modern development patterns.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SPECIAL FEATURED PAGES ================= */}
      <section className="mt-20 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-glow1">
          Explore My Key Focus Areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          {/* Eye Care */}
          <a href="/eye-care" className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition block text-center">
            <h3 className="text-xl font-semibold text-glow1">Eye Care</h3>
            <p className="text-gray-300 text-sm mt-2">
              Explore my clinical services, tele-optometry solutions, and eye health insights.
            </p>
          </a>

          {/* Dr Godswill Page */}
          <a href="/dr-godswillalozie" className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition block text-center">
            <h3 className="text-xl font-semibold text-glow2">Dr. Godswill Alozie</h3>
            <p className="text-gray-300 text-sm mt-2">
              A dedicated Optometrist and Tech Builder shaping the future of digital healthcare.
            </p>
          </a>

          {/* Partnership */}
          <a href="/partnership" className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition block text-center">
            <h3 className="text-xl font-semibold text-glow3">Partnership</h3>
            <p className="text-gray-300 text-sm mt-2">
              Work with me to build world-class web & mobile applications.
            </p>
          </a>

        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="mt-28 px-5 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-glow1">Who I Am</h2>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I am a passionate Optometrist and a Creative Tech Builder solving real-life 
          problems in healthcare and business through modern technology.
        </p>

        <a
          href="/about"
          className="inline-block mt-6 px-6 py-3 rounded-full border border-glow1 text-glow1 hover:bg-glow1/20 transition"
        >
          Learn More About Me
        </a>
      </section>

      {/* ================= PROJECT PREVIEW ================= */}
      <section className="mt-28 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-glow3">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

          {/* Project 1 */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">AI Hustle Partner</h3>
            <p className="text-gray-300 text-sm">
              A platform that generates CVs, IG content, and business ideas using AI.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-2">Tele-Optometry Platform</h3>
            <p className="text-gray-300 text-sm">
              A global consultation system offering virtual eye exams.
            </p>
          </div>

        </div>

        <div className="text-center mt-8">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-glow2 text-white hover:bg-glow2/80 transition shadow-lg"
          >
            View More Projects
          </a>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="mt-28 mb-20 text-center px-5">
        <h2 className="text-3xl font-semibold text-glow1">
          Let’s Work Together
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Whether you're looking for a website, mobile app, or eye care services,  
          I’m ready to collaborate.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/contacts"
            className="px-6 py-3 bg-glow3 rounded-full hover:bg-glow3/80 transition"
          >
            Contact Me
          </a>

          <a
            href="https://wa.me/2347067208592"
            className="px-6 py-3 border border-glow2 rounded-full text-glow2 hover:bg-glow2/20 transition"
          >
            WhatsApp Chat
          </a>
        </div>
      </section>

    </div>
  );
}
