import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

import FloatingButtons from "@/components/FloatingButtons";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div className="pb-14 md:pb-0">
      <SEOHead
        title="Video Editing Courses in Udupi | Ilika Institute"
        description="Explore professional video editing courses at Ilika Institute, Udupi. Instagram Reels, YouTube editing, wedding films & color grading. 20–30 days, from ₹4,999."
        canonical="https://ilikainstitute.com/courses"
      />
      <Navbar />
      <div className="pt-24 pb-4 bg-secondary">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link> / <span className="text-foreground">Courses</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Video Editing <span className="text-accent">Courses</span> in Udupi
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Explore our range of professional video editing courses designed to make you industry-ready in just 20–30 days.
          </p>
        </div>
      </div>
      <AnimateOnScroll><CoursesSection /></AnimateOnScroll>
      <AnimateOnScroll><WhyChooseUs /></AnimateOnScroll>
      <Footer />
      
      <FloatingButtons />
    </div>
  );
};

export default CoursesPage;
