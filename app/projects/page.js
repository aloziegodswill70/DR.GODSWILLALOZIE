"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Havana Eye Clinic",
    desc: "An Eye Clinic Website in the city of Asaba",
    link: "https://www.havanaeyeclinic.online"
  },
  {
    title: "Luchi25 AI",
    desc: "AI content & CV generator with payment gating and history",
    link: "https://www.luchi25.com"
  },
  {
    title: "gensemai",
    desc: "An AI website developed to generate seminar and thesis papers",
    link: "https://www.gensemai.online"
  },
  {
    title: "chicomotors",
    desc: "E-commerce website for selling fairly used cars",
    link: "https://www.chicomotors.store"
  },
  {
    title: "Focus Eye Clinic",
    desc: "Eye clinic website design",
    link: "https://focuseye-wzqs.vercel.app"
  },
  {
    title: "E Bank Solution",
    desc: "Your trusted online banking web app",
    link: "https://ebs-teal.vercel.app"
  },
  {
    title: "Ancilla Eye Hospital",
    desc: "Eye hospital website",
    link: "https://ancillahospital.vercel.app"
  },
  {
    title: "E-curriculum",
    desc: "A web app for teachers with complete lesson notes and scheme of work",
    link: "https://e-curriculum-pearl.vercel.app"
  },
  {
    title: "forsteyeclinic",
    desc: "A website for Forst Eye Clinic",
    link: "https://forsteyeclinic.vercel.app"
  },
  {
    title: "selfbossyouthfoundation",
    desc: "NGO website for youth empowerment",
    link: "https://www.selfbossyouthfoundation.org"
  },
  {
    title: "Ngwaday-cultural promotion",
    desc: "Cultural website to promote culture",
    link: "https://www.ngwaday.online"
  },
];

export default function ProjectsPage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-white mb-6 glow-text"
      >
        Selected Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.45)" }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-glow1">{p.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{p.desc}</p>

            <div className="mt-4">
              <a
                className="text-sm text-glow2 hover:underline"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
