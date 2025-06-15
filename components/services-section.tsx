"use client";

import {
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaVideo,
  FaLaptopCode,
  FaCloud,
  FaLinux,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaCoffee,
  FaLightbulb,
  FaFire,
  FaPushed,
  FaClock,
  FaCheckCircle,
  FaSpinner,
  FaEye,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CurrentFocusSection() {
  const currentProjects = [
    {
      icon: <SiNextdotjs className="w-6 h-6" />,
      title: "PuService NextJS Version",
      description: "Convert Laravel application to NextJS.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
        { name: "React", icon: <SiReact className="w-4 h-4" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
      ],
      status: "In Progress",
      progress: 75,
      statusIcon: <FaSpinner className="w-4 h-4 animate-spin" />,
      priority: "High",
      timeline: "Q1 2024",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Portfolio Dashboard",
      description:
        "Advanced analytics dashboard for portfolio management with real-time data visualization.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" /> },
      ],
      status: "Planning",
      progress: 25,
      statusIcon: <FaEye className="w-4 h-4" />,
      priority: "Medium",
      timeline: "Q2 2024",
    },
    {
      icon: <FaLinux className="w-6 h-6" />,
      title: "Linux NextCloud Server",
      description:
        "NextCloud server setup and configuration using Linux automation tools.",
      tech: [
        { name: "Bash", icon: <FaCode className="w-4 h-4" /> },
        { name: "Python", icon: <FaBrain className="w-4 h-4" /> },
        { name: "Docker", icon: <SiDocker className="w-4 h-4" /> },
      ],
      status: "Active",
      progress: 90,
      statusIcon: <FaCheckCircle className="w-4 h-4" />,
      priority: "High",
      timeline: "Ongoing",
    },
  ];

  const focusAreas2024 = [
    {
      area: "Advanced Security Certifications",
      icon: <FaShieldAlt className="w-5 h-5" />,
      priority: "High",
      description: "CEH, CISSP, and penetration testing certifications",
      color: "from-red-500/20 to-red-600/5",
      textColor: "text-red-500",
    },
    {
      area: "Cloud Architecture Mastery",
      icon: <FaCloud className="w-5 h-5" />,
      priority: "High",
      description: "AWS Solutions Architect and Azure fundamentals",
      color: "from-blue-500/20 to-blue-600/5",
      textColor: "text-blue-500",
    },
    {
      area: "Full-Stack Performance",
      icon: <FaRocket className="w-5 h-5" />,
      priority: "High",
      description: "Advanced optimization and scalability patterns",
      color: "from-green-500/20 to-green-600/5",
      textColor: "text-green-500",
    },
    {
      area: "Open Source Leadership",
      icon: <FaUsers className="w-5 h-5" />,
      priority: "Medium",
      description: "Contributing to major projects and maintaining libraries",
      color: "from-purple-500/20 to-purple-600/5",
      textColor: "text-purple-500",
    },
    {
      area: "Content Creation Empire",
      icon: <FaVideo className="w-5 h-5" />,
      priority: "High",
      description: "YouTube channel growth and course development",
      color: "from-orange-500/20 to-orange-600/5",
      textColor: "text-orange-500",
    },
    {
      area: "AI Integration Expertise",
      icon: <FaBrain className="w-5 h-5" />,
      priority: "Medium",
      description: "Machine learning in web applications",
      color: "from-pink-500/20 to-pink-600/5",
      textColor: "text-pink-500",
    },
  ];

  const quickStats = [
    {
      label: "Active Projects",
      value: "2",
      icon: <FaFire className="w-5 h-5" />,
      color: "text-red-500",
    },
    {
      label: "Learning Goals",
      value: "6",
      icon: <FaPushed className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      label: "Coffee Consumed",
      value: "0",
      icon: <FaCoffee className="w-5 h-5" />,
      color: "text-orange-500",
    },
    {
      label: "Ideas Generated",
      value: "10",
      icon: <FaLightbulb className="w-5 h-5" />,
      color: "text-yellow-500",
    },
  ];

  return (
    <section id="current-focus" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 border border-primary/20">
              <FaRocket className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I&#39;m Building
            </h2>
            <p className="text-xl text-muted-foreground">
              Current projects, goals, and explorations
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickStats.map((stat, index) => (
              <Card
                key={stat.label}
                className="border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${stat.color} mb-3`}>{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Current Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <FaLaptopCode className="w-6 h-6 mr-3 text-primary" />
                Active Projects
              </h3>
              <div className="space-y-6">
                {currentProjects.map((project, index) => (
                  <Card
                    key={project.title}
                    className="group border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-primary">{project.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span>{project.title}</span>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  project.status === "Active"
                                    ? "default"
                                    : project.status === "In Progress"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="text-xs flex items-center gap-1"
                              >
                                {project.statusIcon}
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                project.priority === "High"
                                  ? "border-red-500 text-red-500"
                                  : project.priority === "Medium"
                                    ? "border-yellow-500 text-yellow-500"
                                    : "border-green-500 text-green-500"
                              }`}
                            >
                              {project.priority} Priority
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <FaClock className="w-3 h-3" />
                              {project.timeline}
                            </span>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="secondary"
                            className="text-xs flex items-center gap-1"
                          >
                            {tech.icon}
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-semibold">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Focus Areas 2024 */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <FaPushed className="w-6 h-6 mr-3 text-primary" />
                2025 Focus Areas
              </h3>
              <div className="space-y-4">
                {focusAreas2024.map((focus, index) => (
                  <Card
                    key={focus.area}
                    className="border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${focus.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <div className={focus.textColor}>{focus.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{focus.area}</h4>
                            <Badge
                              variant={
                                focus.priority === "High"
                                  ? "default"
                                  : focus.priority === "Medium"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {focus.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {focus.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
