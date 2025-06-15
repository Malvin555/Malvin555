"use client";

import {
  Download,
  FileText,
  Award,
  Briefcase,
  Star,
  Code,
  Users,
  Calendar,
  Github,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CVSection() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/malvin-cv.pdf";
    link.download = "Malvin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cvStats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "1+",
      label: "Years",
      description: "Junior Experience",
      color: "from-blue-500/20 to-blue-600/5",
      iconColor: "text-blue-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "3+",
      label: "Projects",
      description: "Successfully Delivered",
      color: "from-green-500/20 to-green-600/5",
      iconColor: "text-green-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "2+",
      label: "Clients",
      description: "Satisfied Worldwide",
      color: "from-purple-500/20 to-purple-600/5",
      iconColor: "text-purple-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "100%",
      label: "Success",
      description: "Project Completion Rate",
      color: "from-orange-500/20 to-orange-600/5",
      iconColor: "text-orange-500",
    },
  ];

  const skillCategories = [
    { name: "Frontend", skills: ["React", "TypeScript", "Next.js"] },
    { name: "Backend", skills: ["PHP", "Laravel", "CodeIgniter", "MySQL"] },
    { name: "DevOps", skills: ["Linux", "Docker", "Git", "Podman"] },
    { name: "Security", skills: ["Cybersecurity", "Wifi Hacking"] },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 border border-primary/20">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my experience, skills, and achievements
              in software development
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cvStats.map((stat, index) => (
              <Card
                key={index}
                className="group border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={stat.iconColor}>{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main CV Card */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skills Overview */}
            <div className="lg:col-span-2">
              <Card className="border-0 bg-card/40 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-primary" />
                    Technical Expertise
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="font-semibold text-primary">
                          {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-lg bg-muted/30 border border-border/50">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-primary" />
                      Career Highlights
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Contributed to web application development with
                        responsive design
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Applied security best practices and learned
                        vulnerability prevention
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Collaborated with team members and followed coding
                        standards
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        Shared learning journey through technical content
                        creation
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download Section */}
            <div className="space-y-6">
              <Card className="border-0  from-primary">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-primary/20">
                    <Download className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    Complete Resume
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Get the full detailed version with project descriptions,
                    certifications, and references.
                  </p>

                  <Button
                    size="lg"
                    onClick={downloadCV}
                    className="w-full group bg-gradient-to-r from-primary to-primary/80 ease-in-out hover:from-primary/90 hover:to-primary/70 transition-all duration-700"
                  >
                    <Download className="w-5 h-5 mr-2 " />
                    Download PDF Resume
                  </Button>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        PDF Format
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Updated June 2025
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 bg-card/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-center">
                    Quick Contact
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a href="mailto:malvinbrine475@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Me
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href="https://github.com/Malvin555"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
