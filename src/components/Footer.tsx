import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <div className="flex gap-5">
          <a href="https://github.com/123lakshmi-majji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/lakshmi-majji-5999a1336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={18} /></a>
          <a href="https://leetcode.com/u/DsiCJMu1lz/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">LC</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Lakshmi Majji · Built with passion & clean code
        </p>
      </div>
    </footer>
  );
}
