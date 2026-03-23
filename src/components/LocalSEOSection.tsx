import { MapPin } from "lucide-react";

const LocalSEOSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
            <MapPin className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Video Editing Classes in <span className="text-accent">Udupi</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you are searching for video editing classes near you in Udupi, Ilika Institute
            provides hands-on training with expert mentors and real-world projects. Located in
            the heart of Udupi, our institute is easily accessible and offers flexible batch
            timings for students and working professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSection;
