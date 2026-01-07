import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";
import WhatIDoSection from "@/components/home/WhatIDoSection";

export default function Home() {
  return (
    <div className="text-white relative overflow-hidden">

      {/* GLOBAL BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-[2px]"
        style={{ backgroundImage: "url('/images/godswill.jpg')" }}
      />

      {/* GLOBAL FLOATING SVG BLOB */}
      <svg
        className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-20 animate-float"
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
