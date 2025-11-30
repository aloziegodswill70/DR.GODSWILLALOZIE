// app/services/page.js
"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Responsive, fast websites and admin dashboards (Next.js, Tailwind, Prisma)."
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform apps built with React Native — performant & native-feeling."
  },
  {
    title: "Telehealth & Consultation Platforms",
    desc: "Secure video consultation flows, scheduling, and patient management."
  },
  {
    title: "AI-Powered Tools",
    desc: "Content generation, automation and data-driven features for products."
  },
  {
    title: "E-commerce & Payments",
    desc: "Complete stores with payment integration, admin panel and product management."
  },
  {
    title: "Technical Consultation",
    desc: "Architecture reviews, MVP planning, and technical mentorship."
  }
];

export default function ServicesPage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-white mb-6 glow-text"
      >
        Services
      </motion.h1>

      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
        I provide end-to-end services for startups and clinics — from design to deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.02 }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-glow2 mb-2">{s.title}</h3>
            <p className="text-gray-300 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
