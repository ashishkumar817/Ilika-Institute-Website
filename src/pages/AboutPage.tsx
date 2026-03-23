import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import FloatingButtons from "@/components/FloatingButtons";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="pb-14 md:pb-0">
      <SEOHead
        title="About Ilika Institute | Video Editing Training in Udupi"
        description="Learn about Ilika Institute — Udupi's top video editing training center. Expert mentors, real-world projects, and career-focused courses for beginners."
        canonical="https://ilikainstitute.com/about"
      />
      <Navbar />
      <div className="pt-24 pb-4 bg-secondary">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link> / <span className="text-foreground">About</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            About <span className="text-accent">Ilika Institute</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Udupi's leading video editing training center with expert mentors and hands-on learning.
          </p>
        </div>
      </div>
      <AnimateOnScroll><AboutSection /></AnimateOnScroll>
      <AnimateOnScroll><TestimonialsSection /></AnimateOnScroll>
      <Footer />
      <StickyBottomBar />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
