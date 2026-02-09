import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="relative text-white overflow-hidden">

      {/* ================= GLOBAL BACKGROUND ================= */}

      {/* Soft Background Image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/godswill.jpg')" }}
      />

      {/* Gradient Glow Blobs */}
      <div className="pointer-events-none absolute top-[-120px] left-[-120px] h-[380px] w-[380px] rounded-full bg-glow1/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-[30%] right-[-140px] h-[420px] w-[420px] rounded-full bg-glow2/20 blur-3xl animate-pulseSoft" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[20%] h-[460px] w-[460px] rounded-full bg-glow3/20 blur-3xl animate-floatSlow" />

      {/* SVG Blob Accent */}
      <svg
        className="pointer-events-none absolute -top-52 -left-52 w-[620px] h-[620px] opacity-15 animate-float"
        viewBox="0 0 200 200"
      >
        <path
          fill="#7cf0ff"
          d="M40,-60C55,-55,70,-45,75,-30C80,-15,75,5,65,20C55,35,40,45,20,55C0,65,-25,70,-45,60C-65,50,-80,30,-85,10C-90,-10,-85,-35,-70,-50C-55,-65,-30,-70,-5,-65C20,-60,25,-65,40,-60Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* ================= PAGE SECTIONS ================= */}

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <SkillsSection />

      <ProjectsSection />

      <WhatIDoSection />

      <CTASection />

    </div>
  );
}
