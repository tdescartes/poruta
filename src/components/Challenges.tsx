import { Package, FileCheck, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const stakeholderChallenges = [
  {
    icon: Package,
    title: "For Importers",
    challenges: [
      {
        label: "Extended Delays",
        description: "Customs declaration can take weeks, with no real-time visibility or tracking",
      },
      {
        label: "Financial Loss",
        description: "Goods stuck in warehouses incur demurrage fees and disrupt supply chains",
      },
      {
        label: "Opaque Process",
        description: "Lengthy back-and-forth communication without clear progress updates",
      },
    ],
  },
  {
    icon: FileCheck,
    title: "For RRA Agents",
    challenges: [
      {
        label: "Error-Prone Workflow",
        description: "Manual data entry and document verification lead to mistakes",
      },
      {
        label: "High-Risk Environment",
        description: "Agents face penalties for errors, forcing slow, cautious work",
      },
      {
        label: "Inefficient Codification",
        description: "Manual HS code lookups are time-consuming and inconsistent",
      },
    ],
  },
  {
    icon: Building2,
    title: "For Institutions & Government",
    challenges: [
      {
        label: "Siloed Data",
        description: "Fragmented systems hinder collaboration and create a disjointed view of trade",
      },
      {
        label: "Limited Analytics",
        description: "Lack of granular, real-time market intelligence for policy and strategic planning",
      },
      {
        label: "Poor Insights",
        description: "Inability to leverage data for accurate forecasting and compliance oversight",
      },
    ],
  },
];

const Challenges = () => {
  return (
    <section id="challenges" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            The Challenges We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cross-border trade in Africa faces unique challenges across all stakeholders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stakeholderChallenges.map((stakeholder, index) => (
            <Card
              key={index}
              className="p-6 border-0 hover:shadow-lg transition-all animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <stakeholder.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{stakeholder.title}</h3>
              </div>

              <div className="space-y-4">
                {stakeholder.challenges.map((challenge, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                    <p className="font-semibold text-foreground text-sm">{challenge.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
