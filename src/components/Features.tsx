import { Bot, BarChart3, Smartphone, Lock, Tag, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    tagline: "80% reduction in manual entry",
    description:
      "Instantly scan import documents with OCR and NLP. Supports English, French, Swahili, Arabic, and Amharic.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    tagline: "Unlock AfCFTA's $3.4T market",
    description:
      "Predictive insights track supply chain trends and optimize sourcing for SMEs and traders.",
  },
  {
    icon: Smartphone,
    title: "Low-Resource Optimization",
    tagline: "Works offline on basic devices",
    description:
      "Operates on budget Android phones with offline mode. Syncs when connectivity is restored.",
  },
  {
    icon: Lock,
    title: "Transparency Tools",
    tagline: "Blockchain audit trails",
    description:
      "Ensures transparency and reduces fraud risks in public procurement contracts.",
  },
  {
    icon: Tag,
    title: "Custom Codification",
    tagline: "70% faster HS code classification",
    description:
      "Automates export/import codes compliant with EU, COMESA, ECOWAS, and EAC standards.",
  },
  {
    icon: Globe,
    title: "Sustainability Tracking",
    tagline: "Monitor environmental impact",
    description:
      "AI-driven green procurement tools for compliance and resource optimization.",
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
