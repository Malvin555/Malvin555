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
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/8 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/6 rounded-full blur-lg animate-float" />
      </div>

      <div className="relative bg-background/80 backdrop-blur-sm">
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
