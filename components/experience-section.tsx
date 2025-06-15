"use client";

import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Content Creator",
      company: "Vanwinkle",
      location: "Jl. Tukad Banyupoh Gg. I No.9",
      period: "2025 - present",
      description:
        "Managing and creating engaging content across multiple platforms. Responsible for content editing, video production, and camera work to deliver high-quality visual and written materials for brand storytelling and marketing campaigns.",
      technologies: [
        "Capcut",
        "Spring",
        "Camera Operation",
        "Content Management",
        "Video Editing",
      ],
      achievements: [
        "Increased content engagement by 45%",
        "Produced 10+ good-quality video content pieces",
        "Streamlined content creation workflow",
      ],
    },
    {
      title: "Project Manager & Team Leader",
      company: "Sevanam Enterprise",
      location: "Jl. Raya Kerobokan No.212, Kerobokan Kelod",
      period: "2025 ",
      description:
        "Led a comprehensive school project to develop HydroWash, a complete laundry management application. Served as project manager and team leader while contributing to all aspects of development. Responsible for ideation, team coordination, and ensuring successful project delivery from concept to completion.",
      technologies: [
        "Laravel",
        "MariaDB",
        "PHP",
        "MySQL",
        "Project Management",
        "Team Leadership",
      ],
      achievements: [
        "Successfully completed project with 100% completion rate",
        "Led and coordinated entire development team",
        "Created all core project ideas and concepts",
        "Delivered fully functional laundry management application",
      ],
    },
    {
      title: "Cameraman & Video Production Team Member",
      company: "School Video Competition Program",
      location: "SMK Triatma Jaya",
      period: "2024",
      description:
        "Served as cameraman for school's short movie competition, responsible for filming and video production for the project 'Coba Aja Dulu'. Gained hands-on experience in camera operation, video composition, and collaborative film production.",
      technologies: [
        "Camera Operation",
        "Video Production",
        "Film Composition",
        "Team Collaboration",
      ],
      achievements: [
        "Achieved 3rd place in school short movie competition",
        "Successfully filmed complete short movie 'Coba Aja Dulu'",
        "Learned professional camera operation techniques",
      ],
    },
    {
      title: "Student",
      company: "SMK Triatma Jaya",
      location: "Jl. Kubu Gn, Dalung, Kabupaten Badung, Bali",
      period: "2024 - 2026",
      description:
        "Currently studying at high school while learning web development and backend technologies. Developing coding skills through personal projects and building websites using modern development tools like Zed editor.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Zed Editor"],
      achievements: [
        "Built personal skill-showcase website",
        "Learned web development and backend fundamentals",
        "Achieved coding milestones through self-directed projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-20 border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
