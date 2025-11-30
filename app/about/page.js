"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="px-5 sm:px-8 py-24 max-w-4xl mx-auto">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 glow-text"
      >
        About <span className="text-glow2">Dr Godswill</span>
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-glow2 shadow-lg"
      >
        <Image
          src="/images/godswil.jpg" // <-- Replace with your real image path
          width={300}
          height={300}
          alt="Dr Godswill"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-gray-300 text-center max-w-2xl mx-auto leading-relaxed"
      >
        I am an Optometrist and Web Developer, born in <span className="text-glow2">Osisioma, Aba, Abia State</span>,
        and currently living in <span className="text-glow2">Ikeja, Lagos State, Nigeria</span>.
        I combine eye care expertise with modern technology to create useful,
        functional digital solutions.
      </motion.p>

      {/* Body Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="glass mt-10 p-8 rounded-xl"
      >
        {/* Education & Background */}
        <h2 className="text-2xl font-semibold text-glow1 mb-3">Background</h2>
        <p className="text-gray-300 leading-relaxed">
          I graduated from the Federal University of Technology Owerri (FUTO),
          where I received strong scientific and technological training.
          After practicing optometry, I transitioned into tech and became a
          professional web developer in <span className="text-glow2">2024</span>.
          I focus on building fast, clean, and accessible digital experiences
          using Next.js, React Native, Tailwind CSS, Prisma, and PostgreSQL.
        </p>

        {/* Interests */}
        <h3 className="text-xl font-semibold text-glow2 mt-8 mb-2">
          What I Love Building
        </h3>
        <p className="text-gray-300 leading-relaxed">
          I specialize in creating:
          <br />
          • E-commerce platforms  
          • Health and telemedicine applications  
          • AI-powered web apps and automation tools  
          <br />
          My passion is merging healthcare with technology to improve patient
          access, automate workflows, and empower businesses.
        </p>

        {/* Mission */}
        <h3 className="text-xl font-semibold text-glow1 mt-8 mb-2">Mission</h3>
        <p className="text-gray-300 leading-relaxed">
          My mission is to build impactful digital products that enhance healthcare
          delivery, support practitioners, and provide accessible web tools for
          people across Africa and the world.
        </p>
      </motion.div>
    </div>
  );
}
