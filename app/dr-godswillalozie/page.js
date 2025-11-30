// app/dr-godswillalozie/page.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DrProfilePage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold glow-text">Dr. Godswill Alozie</h1>
        <p className="text-gray-300 mt-2">Optometrist • Web Developer • Health-tech Innovator</p>
      </motion.div>

      <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-glow2 shadow-lg">
            <Image src="/images/godswil.jpg" alt="Dr Godswill" width={300} height={300} className="object-cover w-full h-full"/>
          </div>
        </div>

        <div className="md:col-span-2 glass p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-glow1">Bio</h3>
          <p className="text-gray-300 mt-2 leading-relaxed">
            Born in <strong>Osisioma, Aba, Abia State</strong>, I now live in <strong>Ikeja, Lagos State</strong>.
            I trained at the Federal University of Technology Owerri (FUTO) and practiced as an optometrist.
            In 2024 I became a web developer, building e-commerce, health, and AI web applications.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-gray-400">Profession</p>
              <p className="font-semibold">Optometrist & Developer</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Based in</p>
              <p className="font-semibold">Ikeja, Lagos</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-4 py-2 bg-glow2 rounded-full text-black font-semibold">Contact Me</a>
            <a href="/CV-Dr-Godswill-Alozie.pdf" className="px-4 py-2 border border-glow1 rounded-full text-glow1">Download CV</a>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-glow2">Timeline</h3>
        <ol className="mt-4 space-y-4 text-gray-300">
          <li>
            <strong>FUTO</strong> — Undergraduate training (Optometry)
          </li>
          <li>
            <strong>Clinical practice</strong> — Eye care & patient management
          </li>
          <li>
            <strong>2024</strong> — Transitioned to web development (Next.js, React Native)
          </li>
          <li>
            <strong>Present</strong> — Building e-commerce, health, and AI web apps
          </li>
        </ol>
      </section>
    </div>
  );
}
