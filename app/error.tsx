"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
    console.error("Application Error:", error);
  }, [error]);

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
      {/* Same Background */}
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

      <div className="relative bg-background/85 backdrop-blur-[0.5px]">
        {/* Same Navigation */}
        <Navigation toggleThemeAction={toggleThemeAction} isDark={isDark} />

        {/* Error Content */}
        <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              {/* Error Icon */}
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center border border-destructive/20">
                <AlertTriangle className="w-12 h-12 text-destructive" />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Something Went Wrong
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                An unexpected error occurred. Don&#39;t worry, it happens to the
                best of us!
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Badge
                  variant="destructive"
                  className="px-4 py-2 text-sm font-medium"
                >
                  Application Error
                </Badge>
                {error.digest && (
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    ID: {error.digest.slice(0, 8)}
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" onClick={reset}>
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Go Home
                  </Link>
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
