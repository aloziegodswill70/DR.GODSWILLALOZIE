export default function CTASection() {
  return (
    <section className="relative z-10 py-28 text-center px-5">
      <h2 className="text-3xl font-semibold text-glow1">
        Let’s Work Together
      </h2>

      <p className="text-gray-300 mt-4 max-w-xl mx-auto">
        Healthcare, web, or mobile — let’s build something impactful.
      </p>

      <div className="mt-8 flex gap-4 justify-center flex-wrap">
        <a href="/contacts" className="px-6 py-3 bg-glow3 rounded-full">
          Contact Me
        </a>
        <a
          href="https://wa.me/2347067208592"
          className="px-6 py-3 border border-glow2 rounded-full text-glow2"
        >
          WhatsApp Chat
        </a>
      </div>
    </section>
  );
}
