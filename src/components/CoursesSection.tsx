import { Button } from "@/components/ui/button";
import { Clock, IndianRupee, MessageCircle } from "lucide-react";

const courses = [
  { title: "Video Editing Course in Udupi", desc: "Complete video editing fundamentals to advanced techniques" },
  { title: "Reels & Vlogs  Editing Course", desc: "Create viral short-form content for social media" },
  { title: "Teaser & Promo Editing Training", desc: "Master teaser and promo  creation growth" },
  { title: "Wedding Video Editing", desc: "Cinematic wedding films & event videography" },
  { title: "Cinematic Editing & Color Grading", desc: "DaVinci Resolve color grading & film-look techniques" },
  { title: "Visual Effects & VFX Compositing", desc: "Visual Effects and VFX Compositing" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-accent">Courses</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Hands-on training designed to make you industry-ready
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group bg-card rounded-xl border border-border p-6 hover:border-accent/40 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-10 h-1 bg-accent rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> 20–30 days
                </span>
                <span className="flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" /> From ₹4,999
                </span>
              </div>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <a href="https://wa.me/919901849548" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Enquire Now
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
