import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Save up to 40% on procurement costs by automating repetitive tasks",
  "Boost efficiency in high-inflation markets (e.g., Nigeria's 32% inflation in 2025)",
  "Cut processing times from 10+ days to hours for exports/imports",
  "Empower SMEs, which comprise 80% of African businesses but face disproportionate trade barriers",
  "Future-proof for AfCFTA: Tap into a $1.7 trillion trade opportunity by 2030",
  "Enhance competitiveness: Navigate Africa's 12-16% intra-regional trade share effectively",
  "Promote Sustainability: Reduce environmental risks in supply chains",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Poruta
            </h2>
            <p className="text-lg text-muted-foreground">
              Tangible benefits backed by real data and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-hero rounded-lg text-white text-center animate-scale-in">
            <p className="text-2xl font-bold mb-2">$88 Billion</p>
            <p className="text-white/90">
              Lost annually to illicit flows – Poruta helps combat corruption with transparency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
