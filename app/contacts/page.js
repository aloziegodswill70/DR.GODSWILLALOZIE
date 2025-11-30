// app/contact/page.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // For now just simulate send
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <div className="px-5 sm:px-8 py-24 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-white mb-4 glow-text"
      >
        Get in Touch
      </motion.h1>

      <p className="text-gray-300 text-center mb-8">
        Email, WhatsApp or use the form below — I reply fast.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="glass p-6 rounded-xl grid gap-4"
      >
        <input name="name" placeholder="Your name" required className="p-3 rounded bg-black/20 border border-white/6 text-white" />
        <input name="email" placeholder="Email" type="email" required className="p-3 rounded bg-black/20 border border-white/6 text-white" />
        <textarea name="message" placeholder="Message" rows="6" required className="p-3 rounded bg-black/20 border border-white/6 text-white" />
        <div className="flex gap-3 items-center">
          <button type="submit" className="px-5 py-3 bg-glow2 text-black rounded-full font-semibold">
            {sent ? "Sent!" : "Send Message"}
          </button>

          <a href="https://wa.me/2347067208592" target="_blank" className="px-4 py-3 border border-glow1 text-glow1 rounded-full">
            WhatsApp
          </a>
        </div>
      </motion.form>
    </div>
  );
}
