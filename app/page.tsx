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
      {/* Optimized Eye-Catching Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-muted/30 transition-all duration-1000" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/8 to-transparent animate-pulse-slow" />

        {/* Subtle radial gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.15),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,119,198,0.12),transparent_40%)]" />

        {/* Minimal floating elements - only 3 for performance */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-gentle opacity-60" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float-gentle-delayed opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-float-gentle-slow opacity-30" />

        {/* Simple grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Subtle accent dots - minimal for performance */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse-gentle" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse-gentle-delayed" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse-gentle-slow" />

        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/5" />
      </div>

      <div className="relative bg-background/20 backdrop-blur-[0.5px]">
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
