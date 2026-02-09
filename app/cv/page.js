import Link from "next/link";

const cv = {
  name: "Alozie, Godswill Onyedikachi",
  title: "Doctor of Optometry • Web & App Developer",
  locationLine: "Osokwa, Aba (Abia) • Based in Ikeja, Lagos • Nigeria",
  phoneDisplay: "07067208592",
  phoneTel: "+2347067208592",
  email: "aloziegodswill70@gmail.com",
  links: [
    { label: "Luchi25", href: "https://www.luchi25.com" },
    { label: "Gensemai", href: "https://www.gensemai.online" },
  ],
  summary:
    "Licensed Doctor of Optometry (FUTO, Class of 2023) with hands-on clinical experience in public and private eye care sectors. Skilled in comprehensive patient management, advanced diagnostics, and ophthalmic equipment. Consistent attendee of scientific conferences and CPD programs with strong commitment to excellence and lifelong learning.",
  competencies: [
    "Excellent mastery of ophthalmic instruments and equipment",
    "High emotional intelligence and empathy in patient care",
    "Strong verbal and written communication skills",
    "Experienced with electronic medical records (EMR) systems",
    "Team-oriented with a proactive attitude",
    "Refraction and contact lens fitting",
    "Foreign body removal",
    "Interprofessional collaboration and patient referrals",
  ],
  experience: [
    {
      role: "Intern Optometrist",
      org: "Forst Eye Clinic, Ogba, Ikeja, Lagos State",
      period: "2023 – 2024",
      bullets: [
        "Conducted consultations, refractions, and comprehensive eye exams",
        "Diagnosed and managed vision and ocular health problems",
        "Prescribed medications and eyeglasses; supported frame selection",
        "Operated/interpreted equipment: Central Visual Field Analyser, Auto Refractor, iCare Tonometer, Retinoscope, OCT, Fundus Camera, Pachymeter",
        "Worked under supervision of a licensed optometrist",
      ],
    },
    {
      role: "NYSC Optometrist",
      org: "Delta State Hospital Management Board, General Hospital, Ogwashi-Uku",
      period: "2024 – 2025",
      bullets: [
        "Delivered consultations and thorough eye examinations",
        "Diagnosed and treated eye disorders using medications",
        "Performed accurate refractions and dispensed prescription lenses",
        "Managed contact lens fittings; minor procedures like foreign body removals",
        "Referred cases appropriately for multidisciplinary care",
      ],
    },
    {
      role: "Part-time NYSC Optometrist",
      org: "Christian Medical Eye Clinic, Okpanam, Asaba, Delta State",
      period: "2024 – 2025",
      bullets: [
        "Conducted consultations and diagnosis of eye conditions",
        "Provided medical and optical treatments; dispensed glasses",
        "Specialized equipment use: Auto Refractor, Phoropter, Air-puff Tonometer, Fundus Camera",
        "Ensured professional optical frame selection and patient education",
      ],
    },
  ],
  additionalSkills: [
    "Expert Web & App Development (built Luchi25 and Gensemai)",
    "Proficient in Microsoft Word, Excel, and PowerPoint",
    "Electronic Medical Records (EMR) management",
  ],
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">
      {children}
    </span>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        {title}
      </h2>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
        {children}
      </div>
    </section>
  );
}

export default function CVPage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-6xl mx-auto text-white">
      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
        {/* soft glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-glow1/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-glow2/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-gray-300 text-sm">{cv.title}</p>
            <h1 className="text-3xl sm:text-5xl font-bold glow-text">
              {cv.name}
            </h1>
            <p className="text-gray-300">{cv.locationLine}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${cv.phoneTel}`}
              className="px-5 py-2 rounded-full bg-glow1 text-black font-semibold hover:opacity-90 transition shadow-lg"
            >
              Call
            </a>
            <a
              href={`mailto:${cv.email}`}
              className="px-5 py-2 rounded-full border border-glow2 text-glow2 hover:bg-glow2/10 transition"
            >
              Email
            </a>
            <a
              href={`https://wa.me/${cv.phoneTel.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-glow3 text-glow3 hover:bg-glow3/10 transition"
            >
              WhatsApp
            </a>
            <a
              href="/cv/Alozie_Godswill_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full border border-white/15 text-gray-200 hover:bg-white/10 transition"
            >
              Open PDF
            </a>
            <a
              href="/cv/alozie cv.pdf"
              download
              className="px-5 py-2 rounded-full border border-white/15 text-gray-200 hover:bg-white/10 transition"
            >
              Download PDF
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-gray-300">
            <Pill>📞 {cv.phoneDisplay}</Pill>
            <Pill>✉ {cv.email}</Pill>
            {cv.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Pill>🌐 {l.label}</Pill>
              </a>
            ))}
          </div>

          <div className="text-gray-300 leading-relaxed max-w-3xl">
            {cv.summary}
          </div>
        </div>
      </div>

      {/* CORE COMPETENCIES */}
      <Section title="Core Competencies">
        <div className="flex flex-wrap gap-2">
          {cv.competencies.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-gray-200"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Professional Experience">
        <div className="space-y-6">
          {cv.experience.map((x) => (
            <div
              key={x.role + x.org}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {x.role}
                  </h3>
                  <p className="text-gray-300">{x.org}</p>
                </div>
                <span className="text-sm text-gray-300">{x.period}</span>
              </div>

              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ADDITIONAL SKILLS */}
      <Section title="Additional Skills">
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          {cv.additionalSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      {/* QUICK NAV */}
      <div className="mt-10 text-center text-gray-300">
        <Link href="/projects" className="text-glow1 hover:underline">
          View my Projects →
        </Link>
      </div>

      {/* EMBED PDF */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          CV Preview (PDF)
        </h2>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="Alozie Godswill CV"
            src="/cv/alozie cv.pdf"
            className="w-full h-[75vh]"
          />
        </div>
        <p className="text-gray-400 text-sm mt-3">
          If the PDF doesn’t show on some phones, use “Open PDF” above.
        </p>
      </section>
    </div>
  );
}
