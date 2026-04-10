import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Artificial Intelligence And Machine Learning",
    period: "2024 – 2028",
    institution: "Aditya University, Surampalem",
    score: "CGPA: 9.27",
    current: true,
  },
  {
    degree: "Intermediate",
    period: "2022 – 2024",
    institution: "Sri Surya Junior College, Andhra Pradesh",
    score: "Score: 981 / 1000",
    current: false,
  },
];

export default function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 bg-card/30">
      <div ref={ref} className="container mx-auto px-6 section-fade">
        <p className="text-sm tracking-widest uppercase text-muted-foreground text-center mb-3">
          Academic Background
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Education
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />

          {education.map((e, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={e.degree}
                className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-5 rounded-lg border border-border bg-[hsl(0,0%,4%)] text-left max-w-[480px] mx-auto md:mx-0">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-semibold text-xl">{e.degree}</h3>
                      {e.current && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-foreground text-primary-foreground">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="space-y-3 text-base text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="shrink-0" />
                        {e.institution}
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar size={14} className="shrink-0" />
                        {e.period}
                      </p>
                      <p className="flex items-center gap-2">
                        <Award size={14} className="shrink-0" />
                        <span className="text-foreground font-medium">{e.score}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border border-border items-center justify-center z-10">
                  <GraduationCap size={16} className="text-muted-foreground" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
