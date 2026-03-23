import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Navya Saya",
    text: "I recently completed my editing course in ilika institute in udupi. There editing skills are excellent and i had a good experience in this institute. highly recommended for beginners 🤗❤️",
    initial: "N",
    color: "bg-pink-600",
  },
  {
    name: "Prajwal Kotian",
    text: "I recently completed my Photo editing course at Ilika institute Udupi. Ilika institute is the best Videos & Photo editing institute in the town. They have incredible knowledge of faculties who have experience in Media channels and editing.",
    initial: "P",
    color: "bg-purple-600",
  },
  {
    name: "Manjunath Poojary",
    text: "I been to ilika institute to learn video editing and trust me this is one of the best place to learn the video editing. I got to edit my travel video here in ilika though adobe premiere and the final result of the video was very satisfying.",
    initial: "M",
    color: "bg-green-600",
  },
  {
    name: "Gagan R Rao",
    text: "I recently completed my course at ILIKA in Udupi, the instructors are incredibly knowledgeable and passionate about video editing and are always ready to help and share their insights. I highly recommend ILIKA to anyone interested in video editing.",
    initial: "G",
    color: "bg-emerald-700",
  },
  {
    name: "Sanjay Naik",
    text: "Ilika institute is the best Video editing institute. The faculties are highly knowledgeable and very supportive. Best experience, happy to learn more and more.",
    initial: "S",
    color: "bg-teal-600",
  },
  {
    name: "Subhash Manglore",
    text: "Thanks to Ilika Institute for a wonderful Opportunity, learn a Editing skill with Build Our Career as a Freelance Editor, and a Great Teachers with a great skills, Learn with Our mother tongue Tulu, Or Our native language Teaching.",
    initial: "S",
    color: "bg-indigo-600",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          What Our <span className="text-accent">Students Say</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 shadow-sm"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
