"use client";

import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPhp,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiCodeigniter,
  SiPython,
  SiGnubash,
  SiWondersharefilmora,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import {
  FaShieldAlt,
  FaVideo,
  FaBrain,
  FaCloud,
  FaServer,
  FaLaptopCode,
  FaPalette,
  FaCode,
} from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="w-6 h-6" />,
      color: "from-blue-500/20 to-blue-600/5",
      textColor: "text-blue-500",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-8 h-8" />,
          level: 50,
          color: "#F7DF1E",
        },
        {
          name: "React",
          icon: <SiReact className="w-8 h-8" />,
          level: 35,
          color: "#61DAFB",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8" />,
          level: 35,
          color: "#3178C6",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-8 h-8" />,
          level: 30,
          color: "#000000",
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-8 h-8" />,
          level: 85,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="w-8 h-8" />,
          level: 80,
          color: "#1572B6",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="w-8 h-8" />,
          level: 70,
          color: "#06B6D4",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="w-6 h-6" />,
      color: "from-green-500/20 to-green-600/5",
      textColor: "text-green-500",
      skills: [
        {
          name: "PHP",
          icon: <SiPhp className="w-8 h-8" />,
          level: 75,
          color: "#777BB4",
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="w-8 h-8" />,
          level: 70,
          color: "#FF2D20",
        },
        {
          name: "CodeIgniter",
          icon: <SiCodeigniter className="w-8 h-8" />,
          level: 65,
          color: "#EF4223",
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-8 h-8" />,
          level: 70,
          color: "#339933",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-8 h-8" />,
          level: 77,
          color: "#4479A1",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-8 h-8" />,
          level: 60,
          color: "#336791",
        },
      ],
    },
    {
      title: "System & DevOps",
      icon: <FaCloud className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-600/5",
      textColor: "text-purple-500",
      skills: [
        {
          name: "Linux",
          icon: <SiLinux className="w-8 h-8" />,
          level: 80,
          color: "#FCC624",
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-8 h-8" />,
          level: 65,
          color: "#2496ED",
        },
        {
          name: "Git",
          icon: <SiGit className="w-8 h-8" />,
          level: 75,
          color: "#F05032",
        },
        {
          name: "Bash",
          icon: <SiGnubash className="w-8 h-8" />,
          level: 70,
          color: "#4EAA25",
        },
        {
          name: "Python",
          icon: <SiPython className="w-8 h-8" />,
          level: 2,
          color: "#3776AB",
        },
        {
          name: "Cybersecurity",
          icon: <FaShieldAlt className="w-8 h-8" />,
          level: 53,
          color: "#FF6B6B",
        },
      ],
    },
    {
      title: "Creative & Design",
      icon: <FaPalette className="w-6 h-6" />,
      color: "from-orange-500/20 to-orange-600/5",
      textColor: "text-orange-500",
      skills: [
        {
          name: "Video Editing",
          icon: <SiWondersharefilmora className="w-8 h-8" />,
          level: 60,
          color: "#9999FF",
        },
        {
          name: "After Effects",
          icon: <SiAdobeaftereffects className="w-8 h-8" />,
          level: 45,
          color: "#9999FF",
        },
        {
          name: "UI/UX Design",
          icon: <SiFigma className="w-8 h-8" />,
          level: 79,
          color: "#F24E1E",
        },
        {
          name: "Canva",
          icon: <SiCanva className="w-8 h-8" />,
          level: 85,
          color: "#00C4CC",
        },
        {
          name: "Content Creation",
          icon: <FaVideo className="w-8 h-8" />,
          level: 65,
          color: "#FF4458",
        },
        {
          name: "AI Tools",
          icon: <FaBrain className="w-8 h-8" />,
          level: 80,
          color: "#8B5CF6",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 border border-primary/20">
              <FaCode className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tech Arsenal
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with daily
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="group border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={category.textColor}>{category.icon}</div>
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group/skill text-center p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`,
                        }}
                      >
                        {/* Icon */}
                        <div className="relative mb-3">
                          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-background to-muted/50 flex items-center justify-center group-hover/skill:scale-110 transition-all duration-300 border border-border/50">
                            <div
                              className="group-hover/skill:scale-110 transition-transform duration-300"
                              style={{ color: skill.color }}
                            >
                              {skill.icon}
                            </div>
                          </div>

                          {/* Progress Ring */}
                          <svg
                            className="absolute inset-0 w-16 h-16 mx-auto -rotate-90"
                            viewBox="0 0 64 64"
                          >
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              className="text-muted/30"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke={skill.color}
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 28}`}
                              strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.level / 100)}`}
                              className="transition-all duration-1000 ease-out opacity-80"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        {/* Skill Info */}
                        <h4 className="font-semibold mb-2 text-sm group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{
                            borderColor: skill.color,
                            color: skill.color,
                          }}
                        >
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
