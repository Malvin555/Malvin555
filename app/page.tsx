"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";
import CVSection from "@/components/cv-section";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleThemeAction = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isDark ? "dark" : ""}`}
    >
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Multi-layer gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-muted/10 to-transparent" />

        {/* Dynamic radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,119,198,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.05),transparent_70%)]" />

        {/* Animated grid patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse delay-1000" />

        {/* Large floating orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-primary/15 via-primary/8 to-transparent rounded-full blur-3xl animate-float-delayed opacity-40" />
        <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-gradient-to-tr from-primary/18 via-primary/9 to-transparent rounded-full blur-3xl animate-float-slow opacity-50" />
        <div className="absolute -bottom-20 -right-40 w-88 h-88 bg-gradient-to-tl from-primary/12 via-primary/6 to-transparent rounded-full blur-3xl animate-float opacity-35" />

        {/* Medium floating elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl animate-float-delayed opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-gradient-to-bl from-primary/12 to-transparent rounded-full blur-2xl animate-float-slow opacity-45" />
        <div className="absolute top-1/2 left-1/6 w-40 h-40 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-xl animate-float opacity-70" />
        <div className="absolute top-1/3 right-1/6 w-44 h-44 bg-gradient-to-tl from-primary/16 to-transparent rounded-full blur-xl animate-float-delayed opacity-55" />

        {/* Small animated particles */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-bounce opacity-80" />
        <div className="absolute top-40 right-40 w-6 h-6 bg-primary/40 rounded-full blur-sm animate-bounce delay-500 opacity-70" />
        <div className="absolute bottom-40 left-40 w-10 h-10 bg-primary/25 rounded-full blur-sm animate-bounce delay-1000 opacity-60" />
        <div className="absolute bottom-20 right-20 w-7 h-7 bg-primary/35 rounded-full blur-sm animate-bounce delay-1500 opacity-75" />
        <div className="absolute top-1/2 left-10 w-5 h-5 bg-primary/45 rounded-full blur-sm animate-bounce delay-2000 opacity-65" />
        <div className="absolute top-1/3 right-10 w-9 h-9 bg-primary/30 rounded-full blur-sm animate-bounce delay-2500 opacity-70" />

        {/* Pulsing dots */}
        <div className="absolute top-16 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-700 opacity-90" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-pulse delay-1400 opacity-70" />
        <div className="absolute bottom-16 left-1/5 w-2.5 h-2.5 bg-primary/55 rounded-full animate-pulse delay-2100 opacity-85" />
        <div className="absolute top-2/3 right-1/5 w-3.5 h-3.5 bg-primary/45 rounded-full animate-pulse delay-2800 opacity-75" />

        {/* Geometric shapes */}
        <div className="absolute top-32 left-1/2 w-12 h-12 border border-primary/20 rotate-45 animate-spin-slow opacity-60" />
        <div className="absolute bottom-32 right-1/2 w-16 h-16 border border-primary/15 rotate-12 animate-spin-reverse opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-8 h-8 border border-primary/25 rotate-45 animate-spin-slow delay-1000 opacity-70" />
        <div className="absolute top-3/4 right-1/3 w-10 h-10 border border-primary/20 rotate-12 animate-spin-reverse delay-1500 opacity-65" />

        {/* Floating lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse opacity-60" />
        <div className="absolute top-1/2 right-0 w-40 h-px bg-gradient-to-l from-transparent via-primary/25 to-transparent animate-pulse delay-1000 opacity-50" />
        <div className="absolute bottom-1/4 left-0 w-28 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent animate-pulse delay-2000 opacity-70" />
        <div className="absolute bottom-1/3 right-0 w-36 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent animate-pulse delay-3000 opacity-55" />

        {/* Vertical lines */}
        <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-primary/25 to-transparent animate-pulse delay-1500 opacity-50" />
        <div className="absolute top-0 left-3/4 w-px h-20 bg-gradient-to-b from-transparent via-primary/35 to-transparent animate-pulse delay-2500 opacity-70" />
        <div className="absolute bottom-0 right-3/4 w-px h-28 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse delay-3500 opacity-55" />

        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/5 via-transparent to-background/5" />
      </div>

      <div className="relative bg-background/75 backdrop-blur-[1px]">
        <Navigation toggleThemeAction={toggleThemeAction} isDark={isDark} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <CVSection />
        <Footer />
      </div>
    </div>
  );
}
