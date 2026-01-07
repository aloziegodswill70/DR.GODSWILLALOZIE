// app/partnership/page.js
"use client";

import { motion } from "framer-motion";

const webOfferings = [
  { title: "E-commerce Stores", desc: "Full-stack stores with product, cart, payments, and admin." },
  { title: "Telehealth Portals", desc: "Scheduling, video consults, patient records & secure messaging." },
  { title: "Admin Dashboards", desc: "Analytics, order-management and operational tools." },
];

const mobileOfferings = [
  { title: "React Native Apps", desc: "Cross-platform native-feeling mobile apps." },
  { title: "Patient Mobile Portals", desc: "Appointments, prescriptions, reminders." },
  { title: "Push + Offline Sync", desc: "Offline-first experience with background sync & notifications." },
];

export default function PartnershipPage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-7xl mx-auto">
      <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-4xl font-bold glow-text">Partnerships — Web & Mobile</h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Work together to build products that scale for clinics and businesses.</p>
      </motion.header>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-glow1">Web Applications</h2>
          <p className="text-gray-300 mt-2">Robust web platforms optimized for performance and accessibility.</p>

          <div className="mt-6 grid gap-4">
            {webOfferings.map((w) => (
              <motion.div key={w.title} whileHover={{ x: 4 }} className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-glow2">{w.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-glow1">Mobile Applications</h2>
          <p className="text-gray-300 mt-2">Native-like experiences for patients and staff using React Native.</p>

          <div className="mt-6 grid gap-4">
            {mobileOfferings.map((m) => (
              <motion.div key={m.title} whileHover={{ x: -4 }} className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-glow3">{m.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 glass p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-glow2">Why partner with me?</h3>
        <ul className="mt-3 text-gray-300 list-disc ml-5 space-y-2">
          <li>Clinical knowledge + technical execution — domain expertise for health apps.</li>
          <li>End-to-end delivery: design, development, testing, deployment.</li>
          <li>Focus on accessibility, data privacy and scalable architecture.</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="/contacts" className="px-5 py-2 bg-glow2 rounded-full text-black font-semibold">Start Partnership</a>
          <a href="mailto:aloziegodswill70@gmail.com" className="px-5 py-2 border border-glow1 rounded-full text-glow1">Email Me</a>
        </div>
      </section>
    </div>
  );
}
