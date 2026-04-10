import { ArrowDown, Send } from "lucide-react";
import { useMemo } from "react";

// Change this line to use your own image
const portrait = "/lakshmi.jpeg";   // Image must be in the public folder

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const bubbles = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        width: Math.random() * 250 + 40,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: i * 0.9,
        duration: 5 + i * 1.3,
      })),
    []
  );

  const particles = useMemo(
    () =>
      [...Array(30)].map((_, i) => ({
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: i * 0.5,
        duration: 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,hsl(0_0%_14%/0.6),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,hsl(0_0%_12%/0.5),transparent_60%)]" />

      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-foreground/[0.04] animate-float"
            style={{
              width: `${b.width}px`,
              height: `${b.width}px`,
              left: `${b.left}%`,
              top: `${b.top}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
        {/* Tiny particles */}
        {particles.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-foreground/20 animate-float"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter shimmer animate-fade-in-up">
              Lakshmi Majji
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Aspiring Full-Stack Developer&nbsp;|&nbsp;AIML Enthusiast&nbsp;|&nbsp;Intelligent Solution Builder
            </p>
            <p className="text-secondary-foreground/70 max-w-md animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              Building scalable web applications and AI-driven solutions that solve real-world problems with creativity and precision.
            </p>
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors"
              >
                View Projects
                <ArrowDown size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <Send size={16} />
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Light highlight glow around photo */}
              <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,hsl(0_0%_40%/0.35),transparent_70%)] blur-xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/10 to-transparent" />
              <img
  src={portrait}
  alt="Lakshmi Majji – Full-Stack Developer"
  className="relative w-full h-full object-cover object-[50%_10%] rounded-full border border-border grayscale-[30%]"
  loading="eager"
  width={384}
  height={384}
/>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium animate-bounce">scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}