"use client";

import { useState, useEffect } from "react";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
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
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-muted/30 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/8 to-transparent animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.15),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,119,198,0.12),transparent_40%)]" />

        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-gentle opacity-60" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float-gentle-delayed opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-float-gentle-slow opacity-30" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse-gentle" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse-gentle-delayed" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse-gentle-slow" />

        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/5" />
      </div>

      <div className="relative bg-background/20 backdrop-blur-[0.5px]">
        {/* Same Navigation */}
        <Navigation toggleThemeAction={toggleThemeAction} isDark={isDark} />

        {/* 404 Content */}
        <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              {/* Big 404 */}
              <h1 className="text-[8rem] md:text-[12rem] font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent leading-none">
                404
              </h1>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Page Not Found
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The page you&#39;re looking for doesn&#39;t exist. But hey, you
                found this cool 404 page!
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Badge
                  variant="destructive"
                  className="px-4 py-2 text-sm font-medium"
                >
                  Error 404
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                >
                  Page Missing
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button size="lg" className="group" asChild>
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                    <ArrowLeft className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.reload()}
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Same Footer */}
        <Footer />
      </div>
    </div>
  );
}
