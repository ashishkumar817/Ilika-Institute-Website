import { CheckCircle } from "lucide-react";

const reasons = [
  "100% Practical Training",
  "Real-world Projects",
  "Motion Graphics & Color Grading",
  "Freelancing Guidance",
  "Expert Mentors ",
  "Small Batch Sizes",
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-accent">Us?</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {reasons.map((r) => (
            <div key={r} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
