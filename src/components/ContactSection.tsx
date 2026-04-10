import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download, Loader2, CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const ref = useScrollReveal();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Replace with actual email sending logic (e.g., EmailJS, Netlify Forms, etc.)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate sending – replace with real API call
    setTimeout(() => setStatus("success"), 1500);
  };

  // Make sure your resume file is placed in the `public` folder and the name matches exactly.
  const resumeFile = "/Lakshmi_Majji_Resume.pdf"; // ← Change if your file name is different

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div ref={ref} className="container mx-auto px-6 section-fade">
        <p className="text-sm tracking-widest uppercase text-muted-foreground text-center mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:lakshmi112006u@gmail.com" className="text-base text-foreground hover:text-muted-foreground transition-colors">
                    lakshmi112006u@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a href="tel:+919346583466" className="text-base text-foreground hover:text-muted-foreground transition-colors">
                    +91 9346583466
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <span className="text-base text-foreground">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Download resume button */}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>

            <div className="flex gap-4 pt-2">
              <a href="https://github.com/123lakshmi-majji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/lakshmi-majji-5999a1336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/morning112006/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 bg-[hsl(0,0%,4%)] border border-border rounded-lg text-base text-foreground placeholder-transparent focus:outline-none focus:border-foreground/40 transition-colors"
                />
                <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all pointer-events-none">
                  {field.label}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                name="message"
                required
                rows={4}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 bg-[hsl(0,0%,4%)] border border-border rounded-lg text-base text-foreground placeholder-transparent focus:outline-none focus:border-foreground/40 transition-colors resize-none"
              />
              <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all pointer-events-none">
                Message
              </label>
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "success" && <CheckCircle2 size={16} />}
              {status === "idle" && <Send size={16} />}
              {status === "idle" ? "Send Message" : status === "loading" ? "Sending..." : "Sent!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}