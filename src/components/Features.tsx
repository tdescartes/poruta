import { Bot, BarChart3, Smartphone, Lock, Tag, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Instantly scan and process import documents using OCR and NLP, reducing manual entry by 80%. Supports multilingual documents (English, French, Swahili, Arabic, Amharic) for diverse African markets.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Unlock market intelligence with predictive insights. Track supply chain trends and optimize sourcing in AfCFTA's $3.4 trillion market, critical for SMEs and traders.",
  },
  {
    icon: Smartphone,
    title: "Low-Resource Optimization",
    description:
      "Operates on basic Android devices with offline mode, ideal for remote regions where 35% of Sub-Saharan Africa lacks 4G. Syncs data when connectivity is restored.",
  },
  {
    icon: Lock,
    title: "Transparency Tools",
    description:
      "Blockchain-integrated audit trails ensure transparency, reducing fraud risks in procurement (20% of African public contracts face corruption).",
  },
  {
    icon: Tag,
    title: "Custom Codification",
    description:
      "Automates HS code classification for exports/imports, compliant with EU, COMESA, ECOWAS, and EAC standards. Cuts codification time by 70%, streamlining cross-border trade.",
  },
  {
    icon: Globe,
    title: "Sustainability Tracking",
    description:
      "AI-driven tools for green procurement, monitoring environmental impact and compliance to overcome resource constraints.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Key Features of Poruta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed specifically for African businesses to overcome procurement
            challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
