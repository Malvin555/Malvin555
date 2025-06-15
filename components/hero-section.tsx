"use client";

import { Github, Mail, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-24 h-24 mx-auto mb-6 ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
              <AvatarImage src="/logo.png" alt="Malvin" />
              <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 border-0 p-2">
                <Image
                  src="/logo.png"
                  alt="Malvin Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                />
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Malvin
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-2">
            <p>Full-Stack Developer & Linux Enthusiast</p>
            <p className="text-lg">
              Building the future, one line of code at a time
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              Web Development
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              Cybersecurity
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              Content Creation
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group" asChild>
              <a
                href="https://github.com/Malvin555"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/malvin-cv.pdf";
                link.download = "Malvin_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
