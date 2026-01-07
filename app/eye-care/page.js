// app/eye-care/page.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EyeCarePage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-6xl mx-auto">
      <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold glow-text">Eye Care Services</h1>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Comprehensive eye care — clinical consultations, diagnostics, diabetic eye screening, and tele-optometry.
        </p>
      </motion.header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-glow1">Clinical Consultations</h2>
          <p className="text-gray-300 mt-3">
            Full eye examinations, refraction, anterior segment checks, glaucoma screening, and management plans.
            We combine evidence-based ophthalmic care with patient-centered counseling.
          </p>

          <ul className="mt-4 text-gray-300 space-y-2">
            <li>• Comprehensive eye exam</li>
            <li>• Refraction & vision correction</li>
            <li>• Diabetic eye screening</li>
            <li>• Dry eye & anterior segment care</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="/contacts" className="px-5 py-2 bg-glow2 rounded-full text-black font-semibold">Book Consultation</a>
            <a href="mailto:aloziegodswill70@gmail.com" className="px-5 py-2 border border-glow1 rounded-full text-glow1">Email Clinic</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="rounded-xl overflow-hidden">
          <Image src="/eye-care-hero.jpg" alt="Eye care" width={800} height={520} className="object-cover w-full h-full rounded-xl" />
        </motion.div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-glow2 mb-4">Tele-Optometry & Remote Care</h3>
        <p className="text-gray-300 max-w-3xl">
          Tele-consultation workflows for remote screening, follow-ups, and triage. Patients can share images, reports
          and schedule video consults. Perfect for follow-up diabetic eye checks and post-op reviews.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="glass p-5 rounded-xl">
            <h4 className="font-semibold text-glow1">Video Consults</h4>
            <p className="text-gray-300 text-sm mt-2">Secure, scheduled video calls with pre-visit questionnaires.</p>
          </div>

          <div className="glass p-5 rounded-xl">
            <h4 className="font-semibold text-glow1">Screening Tools</h4>
            <p className="text-gray-300 text-sm mt-2">Integrate simple retinal photography and AI-assisted flagging for referral.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-glow3">Locations</h3>
        <p className="text-gray-300 mt-2">I practice in Ikeja, Lagos — appointments by booking only. Telehealth available nationwide.</p>
      </section>
    </div>
  );
}
