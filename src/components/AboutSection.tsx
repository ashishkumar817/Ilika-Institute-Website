import { Target, Users, Clapperboard } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Clapperboard, title: "Industry Training", desc: "Real-world projects & storytelling" },
    { icon: Users, title: "Expert Mentors", desc: "Learn from professionals" },
    { icon: Target, title: "Career Focused", desc: "Job-ready & freelancing skills" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-accent">Ilika Institute</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Ilika Institute is a professional video editing training center in Udupi, Karnataka,
          offering practical and career-oriented courses for beginners and aspiring professionals.
          We focus on real-world projects, storytelling, and industry-ready skills.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
