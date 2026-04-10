import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="container mx-auto px-6 section-fade">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden border border-border bg-secondary/30 flex items-center justify-center h-72 lg:h-[420px]">
            <img
              src="/about.png"
              alt="Lakshmi Majji – Developer workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Rest of your content – unchanged */}
          <div className="space-y-6">
            <p className="text-xs tracking-widest uppercase text-muted-foreground">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
              Passionate about building digital experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a results-driven developer with hands-on experience in React, Node.js, Express.js, and MongoDB, with a strong interest in Generative AI.
              </p>
              <p>
                I enjoy building real-world applications, designing secure APIs, and learning scalable backend systems.
              </p>
              <p>
                I am currently preparing for software engineering roles while strengthening my problem-solving skills through DSA and project-based learning.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">2+</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects Built</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">MERN</p>
                  <p className="text-xs text-muted-foreground mt-1">Stack Focus</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">2028</p>
                  <p className="text-xs text-muted-foreground mt-1">Graduating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}