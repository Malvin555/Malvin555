"use client";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
            &lt;Malvin/&gt;
          </div>
          <p className="text-muted-foreground">Developer & Designer</p>
        </div>
        <Separator className="mb-6 opacity-50" />
        <p className="text-sm text-muted-foreground">
          © {currentYear} Malvin. Built with React, TypeScript, and shadcn/ui.
        </p>
      </div>
    </footer>
  );
}
