"use client";

import { Code, Server, Shield, Video, Brain, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Full-stack web applications using modern frameworks and technologies. From concept to deployment.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "Modern UI/UX",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Building server-side applications and learning to create APIs and work with databases.",
      features: [
        "Basic API Development",
        "Database Integration",
        "Learning Server Setup",
        "Simple CRUD Operations",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Learning",
      description:
        "Studying cybersecurity fundamentals, exploring security concepts, and learning about protecting digital systems.",
      features: [
        "Security Basics",
        "Learning Penetration Testing",
        "Security Research",
        "Studying Best Practices",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Prompt Engineering",
      description:
        "Expert AI utilization and prompt engineering for generating web images, content, and creative solutions using cutting-edge AI tools.",
      features: [
        "AI Image Generation",
        "Advanced Prompt Crafting",
        "Content Creation",
        "AI Tool Integration",
      ],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description:
        "Video content creation with camera operation, editing, and social media post creation. Still developing storytelling skills.",
      features: [
        "Camera Operation",
        "Video Editing",
        "Social Media Posts",
        "Basic Story Creation",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Android Modification",
      description:
        "Android device customization and troubleshooting services including custom ROM installation, rooting, and system recovery.",
      features: [
        "Custom ROM Installation",
        "Device Rooting",
        "Full Backup Management",
        "Bootloop Fixing",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground">
              What I can help you with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
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
