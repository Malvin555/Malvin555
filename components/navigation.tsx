"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  toggleThemeAction: () => void;
  isDark: boolean;
}

export default function Navigation({
  toggleThemeAction,
  isDark,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement("a");
    link.href = "/malvin-cv.pdf"; // You'll need to add your actual CV file
    link.download = "Malvin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              &lt;Malvin/&gt;
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" size="sm" onClick={downloadCV}>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleThemeAction}>
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleThemeAction}>
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={closeMobileMenu}
          />

          {/* Slide-in Menu */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card/60 backdrop-blur-xl border-l border-border/50 shadow-2xl">
            <div className="flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 ">
                <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 border-l-2 border-transparent hover:border-primary pl-4"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="mt-12 space-y-4">
                  <Button
                    className="w-full justify-start"
                    onClick={() => {
                      downloadCV();
                      closeMobileMenu();
                    }}
                  >
                    <Download className="w-4 h-4 mr-3" />
                    Download Resume
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/Malvin555"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:contact@malvin.dev">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  © 2024 Malvin
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
