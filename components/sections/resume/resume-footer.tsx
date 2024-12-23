'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export function ResumeFooter() {
  return (
    <footer className="mt-8 pt-4 border-t">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Doe
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/johndoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a 
            href="https://linkedin.com/in/johndoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href="mailto:john@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}