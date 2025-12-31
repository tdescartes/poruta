import { TrendingUp, Users, Globe, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: "1.7B",
    label: "People in AfCFTA Market",
    description: "The world's largest free trade area by member states",
  },
  {
    icon: TrendingUp,
    value: "$6.7T",
    label: "Consumer Spending by 2030",
    description: "Massive growth opportunity across the continent",
  },
  {
    icon: Globe,
    value: "54",
    label: "African Countries",
    description: "Complex regulations driving need for automation",
  },
  {
    icon: Rocket,
    value: "MVP Ready",
    label: "Traction & Roadmap",
    description: "Developed and seeking pilot partnerships",
  },
];

const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            The Market Opportunity
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            AfCFTA is unlocking unprecedented opportunities. Rising trade complexity and volume 
            as Africa's economy grows creates the perfect conditions for Poruta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-white/90 font-semibold mb-2">{stat.label}</p>
              <p className="text-white/70 text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-white/80 max-w-3xl mx-auto">
            With rising trade complexity and volume as Rwanda and Africa's economies grow, 
            Poruta is positioned to become the essential infrastructure for cross-border trade automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
