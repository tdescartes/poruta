import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Poruta transformed our supply chain in Kenya, cutting documentation time by 50%!",
    author: "Jane M.",
    role: "Logistics Manager",
    location: "Nairobi",
    initials: "JM",
  },
  {
    quote:
      "The analytics gave us a competitive edge in Nigeria's import market. A must-have!",
    author: "Adebayo K.",
    role: "SME Owner",
    location: "Lagos",
    initials: "AK",
  },
  {
    quote:
      "Offline mode saved our operations in rural Uganda. Poruta is a game-changer.",
    author: "Sarah T.",
    role: "Procurement Officer",
    location: "Kampala",
    initials: "ST",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            What Our Users Say About Poruta
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from businesses across Africa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden border-0 shadow-sm bg-white">
            <Quote className="absolute top-4 right-4 w-16 h-16 text-foreground/5" />
            
            <div className="relative z-10 animate-fade-in" key={currentIndex}>
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-foreground font-semibold text-lg">
                    {testimonials[currentIndex].initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
