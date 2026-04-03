"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Home, Folder, Stethoscope, User, Mail, Menu, X } from "lucide-react";

// IMPORT YOUR SECTIONS
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/SkillsSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";

export default function PortfolioApp() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(false);

  // ✅ NEW: sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(true);

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "solutions", label: "Solutions", icon: Stethoscope },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // AUTO DETECT ACTIVE SECTION
  useEffect(() => {
    const sections = ["dashboard", "projects", "solutions", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // ✅ NEW: AUTO HIDE SIDEBAR ON SCROLL
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowSidebar(false); // scroll down
      } else {
        setShowSidebar(true); // scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#020617] p-2 rounded-lg border border-gray-800"
      >
        <Menu size={18} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-[#020617] border-r border-gray-800 p-4 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${showSidebar ? "md:translate-x-0" : "md:-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-lg font-semibold">Menu</h1>
          <button onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <h1 className="text-xl font-semibold mb-6 hidden md:block">
          Dr. GodsWill
        </h1>

        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition ${
                  active === item.id
                    ? "bg-blue-500/20 text-blue-400"
                    : "hover:bg-gray-800"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64 p-4 md:p-6 overflow-x-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <div
        id="dashboard"
        className="card flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div className="space-y-3 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            I Build Systems That Help Clinics & Businesses Run Smarter
          </h2>
          <p className="text-gray-400">
            Healthcare inventory systems, eCommerce platforms, and scalable
            business tools.
          </p>

          <div className="flex gap-3">
            <a href="/contacts" className="btn btn-primary">
              Request System
            </a>
            <a href="/projects" className="btn btn-secondary">
              View Work
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-700">
            <Image
              src="/images/honourable.jpg"
              alt="Dr GodsWill"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MiniCard label="Apps" value="15+" />
          <MiniCard label="Users" value="1K+" />
          <MiniCard label="Focus" value="Health" />
          <MiniCard label="Type" value="SaaS" />
        </div>
      </div>

      {/* Inventory */}
      <div className="card">
        <h3 className="mb-4">Inventory System</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm">
            <thead>
              <tr className="text-gray-400">
                <th>Item</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-800">
                <td>Lens</td>
                <td>Optical</td>
                <td className="text-green-400">In Stock</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td>Drugs</td>
                <td>Pharmacy</td>
                <td className="text-yellow-400">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ecommerce */}
      <div className="card">
        <h3 className="mb-4">Ecommerce</h3>

        <div className="mb-4">
          <a
            href="https://luxellaventures.com"
            target="_blank"
            className="text-blue-400 underline"
          >
            luxellaventures
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PreviewCard title="Product" price="$20" />
          <PreviewCard title="Product" price="$35" />
          <PreviewCard title="Product" price="$50" />
          <PreviewCard title="Product" price="$15" />
        </div>
      </div>

      {/* Websites */}
      <div className="card">
        <h3 className="mb-4">Websites I've Built</h3>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <a href="https://luxellaventures.com" target="_blank">luxellaventures</a>
          <a href="https://mimilashes21.com" target="_blank">mimilashes21</a>
          <a href="https://beyondshelter.org.uk" target="_blank">beyondshelter</a>
          <a href="https://selfbossyouthfoundation.com" target="_blank">selfbossyouthfoundation</a>
          <a href="https://havanaeyeclinic.online" target="_blank">havanaeyeclinic</a>
          <a href="https://godswillonyedikachialozie.online" target="_blank">godswillonyedikachialozie</a>
          <a href="https://luchi25.com" target="_blank">luchi25</a>
          <a href="https://forsteyeclinic.vercel.app" target="_blank">forsteyeclinic</a>
          <a href="https://ngwaday.online" target="_blank">ngwaday</a>

          <a href="https://e-curriculum-pearl.vercel.app">E-Curriculum</a>
          <a href="https://ebs-teal.vercel.app">ebs</a>
          <a href="https://www.gensemai.online">gensemai</a>
        </div>
      </div>

      {/* SECTIONS */}
      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="solutions">
        <WhatIDoSection />
        <ServicesSection />
      </div>

      <div id="about">
        <AboutSection />
        <SkillsSection />
      </div>

      <div id="contact">
        <CTASection />
      </div>
    </div>
  );
}

function MiniCard({ label, value }) {
  return (
    <div className="card">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

function PreviewCard({ title, price }) {
  return (
    <div className="card">
      <p>{title}</p>
      <p className="font-semibold">{price}</p>
    </div>
  );
}