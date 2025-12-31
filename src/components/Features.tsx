import { Bot, BarChart3, Smartphone, Lock, Tag, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Driven Process Automation",
    tagline: "Beyond digitizing forms",
    description:
      "Intelligent document extraction with OCR and NLP. AI handles tedious data entry while humans focus on strategic oversight and validation.",
  },
  {
    icon: BarChart3,
    title: "Granular Market Intelligence",
    tagline: "Real-time analytics",
    description:
      "Advanced predictive insights track supply chain trends, enabling strategic decision-making for all stakeholders.",
  },
  {
    icon: Smartphone,
    title: "Human-in-the-Loop Validation",
    tagline: "Empowerment, not replacement",
    description:
      "AI suggests and automates; agents review, confirm, and maintain control. Combining speed with expert oversight.",
  },
  {
    icon: Lock,
    title: "Real-Time Transparency",
    tagline: "Tracking for all parties",
    description:
      "Every stakeholder—importers, agents, institutions—gets full visibility into the process status and progress.",
  },
  {
    icon: Tag,
    title: "Smart HS Codification",
    tagline: "AI-suggested, agent-confirmed",
    description:
      "Automated code suggestions compliant with EU, COMESA, ECOWAS, and EAC standards. Agents validate for accuracy.",
  },
  {
    icon: Globe,
    title: "Unified Data Ecosystem",
    tagline: "Breaking down silos",
    description:
      "A single platform connecting all stakeholders with shared data, eliminating fragmented systems and disjointed views.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-6 transition-all duration-300 border-0 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 overflow-hidden bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{feature.tagline}</p>
              <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
                <p className="text-muted-foreground text-sm leading-relaxed pt-2 border-t border-border/50">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
