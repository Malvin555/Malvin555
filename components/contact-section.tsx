"use client";

import { Github, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&#39;s Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let&#39;s discuss how we
            can work together to bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground mb-4">
                  Check out my latest projects
                </p>
                <Button className="w-full" asChild>
                  <a
                    href="https://github.com/Malvin555"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Let&#39;s discuss opportunities
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:contact@malvin.dev">Send Message</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
