"use client";

import { Code, Terminal, Shield, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a diverse skill set spanning web
              development, system administration, and creative content
              production.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I&#39;m a passionate student with a deep interest in
                    technology, particularly drawn to open-source solutions,
                    Linux systems, Android custom ROMs, web development, and
                    ethical hacking.
                  </p>
                  <p>
                    My journey began as a self-taught learner, using internet
                    resources to explore and understand various technologies.
                    What started as curiosity has grown into a genuine passion
                    for understanding how systems work and how to improve them.
                  </p>
                  <p>
                    Through continuous self-directed learning, my knowledge and
                    skills continue to expand across multiple domains, from
                    customizing Android experiences to exploring cybersecurity
                    concepts and building web applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 bg-card/30 backdrop-blur-sm p-6 text-center hover:bg-card/50 transition-colors">
                <Code className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Full-Stack</h4>
                <p className="text-sm text-muted-foreground">
                  End-to-end development
                </p>
              </Card>
              <Card className="border-0 bg-card/30 backdrop-blur-sm p-6 text-center hover:bg-card/50 transition-colors">
                <Terminal className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Linux Expert</h4>
                <p className="text-sm text-muted-foreground">
                  System administration
                </p>
              </Card>
              <Card className="border-0 bg-card/30 backdrop-blur-sm p-6 text-center hover:bg-card/50 transition-colors">
                <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-sm text-muted-foreground">
                  Cybersecurity junior
                </p>
              </Card>
              <Card className="border-0 bg-card/30 backdrop-blur-sm p-6 text-center hover:bg-card/50 transition-colors">
                <Video className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Creator</h4>
                <p className="text-sm text-muted-foreground">
                  Content creation
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
