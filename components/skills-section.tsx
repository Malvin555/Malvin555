"use client";

import {
  Code,
  Server,
  Globe,
  Terminal,
  Shield,
  Video,
  Database,
  Brain,
  GitBranch,
  Cloud,
  Cpu,
  Monitor,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: <Code className="w-8 h-8" />, level: 50 },
        { name: "React", icon: <Globe className="w-8 h-8" />, level: 35 },
        { name: "TypeScript", icon: <Code className="w-8 h-8" />, level: 35 },
        { name: "Next.js", icon: <Monitor className="w-8 h-8" />, level: 30 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "PHP", icon: <Server className="w-8 h-8" />, level: 75 },
        { name: "Node.js", icon: <Terminal className="w-8 h-8" />, level: 70 },
        { name: "Database", icon: <Database className="w-8 h-8" />, level: 77 },
        { name: "API Design", icon: <Cloud className="w-8 h-8" />, level: 58 },
      ],
    },
    {
      title: "System & Security",
      skills: [
        { name: "Linux", icon: <Terminal className="w-8 h-8" />, level: 80 },
        {
          name: "Cybersecurity",
          icon: <Shield className="w-8 h-8" />,
          level: 53,
        },
        { name: "DevOps", icon: <Cpu className="w-8 h-8" />, level: 75 },
        { name: "Git", icon: <GitBranch className="w-8 h-8" />, level: 75 },
      ],
    },
    {
      title: "Creative & Mobile",
      skills: [
        {
          name: "Video Production",
          icon: <Video className="w-8 h-8" />,
          level: 60,
        },
        { name: "AI", icon: <Brain className="w-8 h-8" />, level: 80 },
        {
          name: "UI/UX Design",
          icon: <Monitor className="w-8 h-8" />,
          level: 79,
        },
        {
          name: "Content Creation",
          icon: <Video className="w-8 h-8" />,
          level: 65,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with daily
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="border-0 bg-card/40 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-8 text-center">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group text-center"
                        style={{
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`,
                        }}
                      >
                        {/* Icon Circle */}
                        <div className="relative mb-4">
                          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-primary/20">
                            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                          </div>

                          {/* Progress Ring */}
                          <svg
                            className="absolute inset-0 w-20 h-20 mx-auto -rotate-90"
                            viewBox="0 0 80 80"
                          >
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              className="text-muted/20"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 36}`}
                              strokeDashoffset={`${2 * Math.PI * 36 * (1 - skill.level / 100)}`}
                              className="text-primary transition-all duration-1000 ease-out"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        {/* Skill Info */}
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
