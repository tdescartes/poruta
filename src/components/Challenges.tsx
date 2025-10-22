import { AlertTriangle, TrendingDown, Clock, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Inconsistent Data",
    description:
      "Fragmented records and bureaucratic red tape cause errors in 30-50% of procurement processes in Africa, leading to delays and cost overruns of up to $10 billion annually. Paper-based systems and siloed data exacerbate inefficiencies, particularly for SMEs (80% of African businesses).",
  },
  {
    icon: TrendingDown,
    title: "Inaccurate Analytics",
    description:
      "Poor data visibility limits market insights, with intra-African trade at only 12-16% of total trade due to supply chain disruptions. This hinders competitiveness in AfCFTA's $3.4 trillion market, where SMEs struggle to access real-time trends.",
  },
  {
    icon: Clock,
    title: "Manual Codification Inefficiency",
    description:
      "Manual classification of goods (e.g., HS codes) wastes hours per transaction. Border delays in Southern Africa average 36 hours, costing $48 million annually in lost productivity. Complex regulations across 54 African countries add further delays.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Infrastructure Gaps",
    description:
      "Resource constraints, including cost implications and knowledge gaps, hinder sustainable procurement adoption. Infrastructure deficits create a $50-90B annual financing gap, with fragmented logistics and risks like customs delays, volatile FX, and power interruptions.",
  },
];

const Challenges = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Procurement Pain Points Holding Africa Back
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These challenges are compounded by systemic issues: corruption (Africa loses $88 billion
            annually to illicit financial flows), low digitization (20% of African SMEs use digital
            tools), and inconsistent import regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <challenge.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
