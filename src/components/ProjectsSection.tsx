import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "Smart Quiz Platform",
    description: "An interactive quiz application with dynamic question generation and real-time score tracking.",
    github: "https://github.com/123lakshmi-majji/smart-quiz-platform",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "MongoDB"],
    features: [
      "Dynamic Quiz Generation",
      "Timer-Based Quizzes",
      "Instant Results & Score Analysis",
      "Randomized Questions",
    ],
    deployed: "Vercel",
  },
  {
    title: "Social Saver Bot",
    description: "A WhatsApp bot that automatically saves, tags, and organizes social media content with AI.",
    github: "https://github.com/123lakshmi-majji/insta-know",
    tech: ["JavaScript", "HTML", "CSS"],
    features: [
      "WhatsApp Bot",
      "AI Auto-Tagging",
      "Smart Search",
      "Live Dashboard",
    ],
    deployed: "Vercel",
  },
];

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="container mx-auto px-6 section-fade">
        <p className="text-sm tracking-widest uppercase text-muted-foreground text-center mb-3">
          Featured Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10 justify-items-center">
          {projects.map((p) => (
            <div
              key={p.title}
              className="relative p-7 rounded-lg border border-border bg-card card-hover flex flex-col min-h-[410px] w-full max-w-[480px] md:max-w-none"
            >
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${p.title} on GitHub`}
              >
                <Github size={18} />
              </a>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-base text-muted-foreground mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-5 text-base text-muted-foreground flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Divider between features and deployed */}
              <div className="border-t border-border my-4" />

              <p className="text-base text-muted-foreground mb-5 flex items-center gap-2">
                <Rocket size={14} className="text-foreground" />
                Deployed on: <span className="text-foreground font-semibold">{p.deployed}</span>
              </p>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors w-full"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
