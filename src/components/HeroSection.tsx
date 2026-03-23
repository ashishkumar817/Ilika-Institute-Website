import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ilika-logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Decorative timeline elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-1 bg-accent rounded-full" />
        <div className="absolute top-32 left-10 w-20 h-1 bg-accent/60 rounded-full" />
        <div className="absolute top-44 left-10 w-24 h-1 bg-accent/40 rounded-full" />
        <div className="absolute bottom-32 right-10 w-40 h-1 bg-primary-foreground/40 rounded-full" />
        <div className="absolute bottom-44 right-10 w-28 h-1 bg-primary-foreground/30 rounded-full" />
      </div>

      {/* Logo on desktop - prominent and enlarged */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
        <div className="w-80 h-80 rounded-full border-2 border-accent/30 flex items-center justify-center bg-primary-foreground/10 backdrop-blur-sm shadow-2xl">
          <img src={logo} alt="Ilika Institute of Editing Logo" className="w-80 h-80 object-contain drop-shadow-2xl" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1.5 mb-6">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Rated 5/5 by students
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Best Video Editing Institute in{" "}
            <span className="text-accent">Udupi</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
            Learn professional video editing, YouTube content creation, and cinematic video editing in just{" "}
            <strong className="text-primary-foreground">20–30 days</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-base h-14 px-8" asChild>
              <a href="tel:+919901849548">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" className="text-base h-14 px-8" asChild>
              <a href="https://wa.me/919901849548" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 text-primary-foreground/60 text-sm">
            <span>✓ 100% Practical</span>
            <span>✓ Expert Mentors</span>
            <span>✓ Job Ready</span>
            <Link to="/courses" className="text-accent hover:underline font-medium">
              View All Courses →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
