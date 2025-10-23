import { useState } from "react";
import { AlertTriangle, TrendingDown, Clock, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Inconsistent Data",
    summary: "Fragmented records cause 30-50% error rates, costing $10B annually.",
    description:
      "Paper-based systems and bureaucratic red tape lead to delays and cost overruns across African procurement. Siloed data particularly impacts SMEs, preventing efficient cross-border trade.",
  },
  {
    icon: TrendingDown,
    title: "Inaccurate Analytics",
    summary: "Limited visibility keeps intra-African trade at just 12-16%.",
    description:
      "Poor data insights hinder market intelligence and competitiveness in AfCFTA's $3.4 trillion opportunity. Supply chain disruptions compound the problem, leaving businesses reactive instead of proactive.",
  },
  {
    icon: Clock,
    title: "Manual Codification",
    summary: "Manual HS code entry creates 36-hour border delays.",
    description:
      "Classifying goods manually wastes hours per transaction, costing Southern Africa $48M annually in lost productivity. Complex regulations across 54 countries add further friction.",
  },
  {
    icon: Leaf,
    title: "Infrastructure Gaps",
    summary: "Resource constraints create a $50-90B financing gap.",
    description:
      "Sustainability adoption faces barriers from costs and knowledge gaps. Fragmented logistics, power interruptions, and volatile FX rates further strain procurement efficiency.",
  },
];

const Challenges = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="challenges" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Procurement Challenges in Africa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group perspective-1000 min-h-[280px] overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative h-full preserve-3d transition-transform duration-700 ${
                flippedCard === index ? "rotate-y-180" : "group-hover:rotate-y-180"
              }`}>
                {/* Front of card */}
                <Card className="absolute inset-0 p-6 backface-hidden border-0 hover:border-primary/30 hover:shadow-lg transition-all bg-white">
                  <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <challenge.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{challenge.summary}</p>
                  <p className="text-xs text-muted-foreground/60 mt-4 lg:hidden">Tap for details</p>
                </Card>

                {/* Back of card */}
                <Card className="absolute inset-0 p-6 backface-hidden rotate-y-180 bg-gradient-hero border-primary/50">
                  <div className="flex flex-col h-full justify-center">
                    <h3 className="text-lg font-semibold text-white mb-3">{challenge.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
