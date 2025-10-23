import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Save up to 40% on procurement costs",
  "Cut processing from 10+ days to hours",
  "Tap AfCFTA's $1.7T opportunity by 2030",
  "Reduce environmental supply chain risks",
];

const Benefits = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Poruta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1 transition-transform group-hover:scale-110">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
