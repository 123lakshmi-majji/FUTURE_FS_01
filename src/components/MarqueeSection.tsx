import { Github, Code2, Flame, Terminal, Database, Globe, Triangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { name: string; icon: LucideIcon }[] = [
  { name: "GitHub", icon: Github },
  { name: "LeetCode", icon: Code2 },
  { name: "CodeChef", icon: Flame },
  { name: "HackerRank", icon: Terminal },
  { name: "React", icon: Globe },
  { name: "Node.js", icon: Terminal },
  { name: "MongoDB", icon: Database },
  { name: "Vercel", icon: Triangle },
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <section id="marquee" className="py-12 border-y border-border overflow-hidden bg-secondary/60">
      <p className="text-center text-xs tracking-widest uppercase text-muted-foreground mb-8">
        Platforms I Use / Technologies I Work With
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-2 text-lg font-medium text-foreground/60 hover:text-foreground transition-colors duration-300 select-none hover:grayscale-0"
          >
            <item.icon size={22} className="text-foreground/70" />
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}
