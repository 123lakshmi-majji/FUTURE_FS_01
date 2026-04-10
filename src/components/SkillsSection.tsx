import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Layout, Server, Database, Wrench, Users } from "lucide-react";

const categories = [
  { title: "Languages", icon: Code2, skills: ["C++", "Python", "Java", "Data Structures"] },
  { title: "Frontend", icon: Layout, skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "TypeScript"] },
  { title: "Databases", icon: Database, skills: ["MongoDB", "MySQL"] },
  { title: "Tools & Frameworks", icon: Wrench, skills: ["Git", "GitHub"] },
  { title: "Soft Skills", icon: Users, skills: ["Problem Solving", "Communication", "Team Collaboration"] },
];

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div ref={ref} className="container mx-auto px-6 section-fade">
        <p className="text-sm tracking-widest uppercase text-muted-foreground text-center mb-3">
          Technical Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Skills & Technologies
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-8 rounded-lg border border-border bg-background card-hover min-h-[180px]"
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon size={22} className="text-muted-foreground" />
                <h3 className="font-semibold text-lg tracking-wide">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
