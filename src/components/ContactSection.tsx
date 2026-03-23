import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const text = encodeURIComponent(
      `New Inquiry from Website:\nName: ${form.name}\nPhone: ${form.phone}\nCourse: ${form.course || "Not specified"}\nMessage: ${form.message || "N/A"}`
    );
    window.open(`https://wa.me/919901849548?text=${text}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "Our team will respond shortly." });
    setForm({ name: "", phone: "", course: "", message: "" });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact info + Map */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+919901849548" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 99018 49548
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">
                  First Floor, K M Marg, Near Mother Care,<br />
                  Brahmagiri, Udupi, Karnataka 576101
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Working Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday to Saturday: 10:00 AM – 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+919901849548">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/919901849548" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </Button>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-border h-64 md:h-72">
              <iframe
                title="Ilika Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.198292283497!2d74.7455236750828!3d13.337937987012165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb58b1e388dd%3A0xd0e48348d293fc8!2sIlika%20Institute!5e0!3m2!1sen!2sin!4v1774274457005!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm" style={{ boxShadow: "var(--card-shadow)" }}>
            <h3 className="text-xl font-bold mb-2">Send an Inquiry</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill in your details and we'll get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="block text-sm font-medium mb-1.5">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="inquiry-phone" className="block text-sm font-medium mb-1.5">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  maxLength={15}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="inquiry-course" className="block text-sm font-medium mb-1.5">
                  Interested Course
                </label>
                <select
                  id="inquiry-course"
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                >
                  <option value="">Select a course</option>
                  <option>Video Editing Course</option>
                  <option>Instagram Reels Editing</option>
                  <option>YouTube Video Editing</option>
                  <option>Wedding Video Editing</option>
                  <option>Cinematic Editing & Color Grading</option>
                </select>
              </div>
              <div>
                <label htmlFor="inquiry-message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Any questions or details..."
                  maxLength={500}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={submitting}>
                <Send className="h-5 w-5" /> Send Inquiry via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
