import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, CalendarDays, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  { icon: CalendarDays, title: "Active NSS Member", desc: "Contributed to community service activities" },
  { icon: Award, title: "Events Organizer & Participant", desc: "Organized and participated in college events" },
  { icon: Lightbulb, title: "Hackathon Participant", desc: "Gained problem-solving and teamwork experience" },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 30);
          const id = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(id);
            } else {
              setCount(start);
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="text-4xl font-bold">{count}+</span>;
}

export default function AchievementsSection() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="py-24">
      <div ref={ref} className="container mx-auto px-6 section-fade">
        <p className="text-sm tracking-widest uppercase text-muted-foreground text-center mb-3">
          Leadership & Activities
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Achievements & Activities
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Projects Built", value: 2 },
            { label: "Events Participated", value: 5 },
            { label: "Community Hours", value: 50 },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 border border-border rounded-lg bg-card">
              <Counter target={s.value} />
              <p className="text-base text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((a) => (
            <div key={a.title} className="p-6 rounded-lg border border-border bg-card card-hover">
              <a.icon size={24} className="text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-1">{a.title}</h3>
              <p className="text-base text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
