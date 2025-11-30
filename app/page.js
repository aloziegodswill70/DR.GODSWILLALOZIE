export default function Home() {
  return (
    <div className="text-white relative">

      {/* ================= BACKGROUND PICTURE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-[2px]"
        style={{ backgroundImage: "url('/images/godswill.jpg')" }}
      ></div>

      {/* ================= FLOATING GLOW ELEMENTS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-glow1/30 rounded-full blur-3xl top-10 left-5 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-glow2/20 rounded-full blur-3xl bottom-10 right-5 animate-ping"></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center px-5">

        {/* MAIN PROFILE PIC */}
        <img
          src="/images/honourable.jpg"
          alt="Dr Godswill Alozie"
          className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-glow2 anim-level-3"
        />

        {/* ================= EXTRA ANGLED PICTURE ================= */}
        <img
          src="/images/AIgodswill.jpg"
          alt="Dr Godswill Alozie"
          className="
            w-36 h-36 object-cover rounded-xl shadow-2xl border border-white/20
            absolute right-5 top-20 rotate-6 
            hover:rotate-0 hover:scale-110 
            transition duration-700 ease-out 
            animate-floating
          "
        />

        {/* NAME */}
        <h1 className="text-4xl sm:text-6xl font-bold glow-text mt-6 anim-fade-in">
          Dr. Godswill Alozie
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl anim-slide-up">
          Optometrist • Web & Mobile Developer • Fullstack Developer
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center anim-zoom">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-glow1 hover:bg-glow1/80 transition shadow-lg anim-level-2"
          >
            View My Projects
          </a>
          <a
            href="/contacts"
            className="px-6 py-3 rounded-full border border-glow2 text-glow2 hover:bg-glow2/20 transition anim-level-2"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="relative z-10 mt-20 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-glow2 anim-fade-in">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Optometry */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition anim-slide-up">
            <h3 className="text-xl font-semibold mb-3 text-glow1">Optometry</h3>
            <p className="text-gray-300 text-sm">
              Clinical eye care, diabetic eye management, and anterior segment care.
            </p>
          </div>

          {/* Web Dev */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition anim-slide-up">
            <h3 className="text-xl font-semibold mb-3 text-glow2">Web Development</h3>
            <p className="text-gray-300 text-sm">
              Responsive websites, dashboards & AI-powered tools for businesses.
            </p>
          </div>

          {/* Mobile Dev */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition anim-slide-up">
            <h3 className="text-xl font-semibold mb-3 text-glow3">Mobile Apps</h3>
            <p className="text-gray-300 text-sm">
              Cross-platform mobile apps with beautiful UI and seamless performance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED LINKS ================= */}
      <section className="relative z-10 mt-20 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-glow1 anim-fade-in">
          Explore My Key Focus Areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <a href="/eye-care" className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center transition anim-level-1">
            <h3 className="text-xl font-semibold text-glow1">Eye Care</h3>
            <p className="text-gray-300 text-sm mt-2">
              Tele-optometry, clinic services & eye health insights.
            </p>
          </a>

          <a href="/dr-godswillalozie" className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center transition anim-level-1">
            <h3 className="text-xl font-semibold text-glow2">About Dr. Godswill</h3>
            <p className="text-gray-300 text-sm mt-2">
              My story, mission, skills & achievements.
            </p>
          </a>

          <a href="/partnership" className="p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center transition anim-level-1">
            <h3 className="text-xl font-semibold text-glow3">Partnership</h3>
            <p className="text-gray-300 text-sm mt-2">
              Let’s build impactful digital solutions together.
            </p>
          </a>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="relative z-10 mt-28 px-5 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-glow1 anim-fade-in">Who I Am</h2>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto leading-relaxed anim-slide-up">
          I am a passionate Optometrist & Tech Builder solving healthcare and
          business problems using modern technology.
        </p>

        <a
          href="/about"
          className="inline-block mt-6 px-6 py-3 rounded-full border border-glow1 text-glow1 hover:bg-glow1/20 transition anim-level-2"
        >
          Learn More About Me
        </a>
      </section>

      {/* ================= PROJECT PREVIEW ================= */}
      <section className="relative z-10 mt-28 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-glow3 anim-fade-in">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition anim-slide-up">
            <h3 className="text-xl font-semibold mb-2">AI Hustle Partner</h3>
            <p className="text-gray-300 text-sm">
              Generates CVs, Instagram content & ideas using AI.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition anim-slide-up">
            <h3 className="text-xl font-semibold mb-2">Tele-Optometry Platform</h3>
            <p className="text-gray-300 text-sm">
              Global virtual consultation system for eye care.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-glow2 text-white hover:bg-glow2/80 transition shadow-lg anim-level-2"
          >
            View More Projects
          </a>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="relative z-10 mt-28 mb-20 text-center px-5">
        <h2 className="text-3xl font-semibold text-glow1 anim-fade-in">
          Let’s Work Together
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto anim-slide-up">
          Whether you're looking for a website, mobile app, or eye care services—
          I’m ready to collaborate.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/contacts"
            className="px-6 py-3 bg-glow3 rounded-full hover:bg-glow3/80 transition anim-level-2"
          >
            Contact Me
          </a>

          <a
            href="https://wa.me/2347067208592"
            className="px-6 py-3 border border-glow2 rounded-full text-glow2 hover:bg-glow2/20 transition anim-level-2"
          >
            WhatsApp Chat
          </a>
        </div>
      </section>

    </div>
  );
}
