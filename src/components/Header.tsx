import { useState, useEffect, useCallback } from "react";
import { Menu, X, Github, Linkedin, Code2 } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = id === "education" ? 100 : 80;
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass" : ""}`}>
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-foreground/30 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-xl font-semibold tracking-tighter text-foreground">
          Lakshmi<span className="text-muted-foreground">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/123lakshmi-majji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/lakshmi-majji-5999a1336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="https://leetcode.com/u/DsiCJMu1lz/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-muted-foreground hover:text-foreground transition-colors">
            <Code2 size={22} />
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in-up">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 border-t border-border">
              <a href="https://github.com/123lakshmi-majji" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/lakshmi-majji-5999a1336/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={22} /></a>
              <a href="https://leetcode.com/u/DsiCJMu1lz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Code2 size={22} /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
