import { Package, FileCheck, Building2, Zap, DollarSign, Eye, Shield, Target, Users, Database, BarChart3, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const stakeholderBenefits = [
  {
    icon: Package,
    title: "For Importers",
    color: "from-blue-500 to-blue-600",
    benefits: [
      { icon: Zap, label: "Speed", description: "Reduce declaration processing from weeks to hours" },
      { icon: DollarSign, label: "Cost Savings", description: "Eliminate warehouse demurrage and financial losses from delays" },
      { icon: Eye, label: "Predictability", description: "Know tax liabilities upfront for better financial planning" },
      { icon: Shield, label: "Peace of Mind", description: "Real-time tracking and a fully transparent process" },
    ],
  },
  {
    icon: FileCheck,
    title: "For Custom Agents",
    color: "from-green-500 to-green-600",
    benefits: [
      { icon: Users, label: "Empowerment", description: "AI handles tedious tasks; agents focus on high-value review and oversight" },
      { icon: Target, label: "Accuracy", description: "Drastically reduce errors and associated penalties" },
      { icon: Zap, label: "Efficiency", description: "Streamlined workflow dramatically increases productivity" },
    ],
  },
  {
    icon: Building2,
    title: "For Institutions & Government",
    color: "from-purple-500 to-purple-600",
    benefits: [
      { icon: Database, label: "Unified Data", description: "Break down silos for a single source of truth" },
      { icon: BarChart3, label: "Powerful Analytics", description: "Gain granular, real-time market insights for strategic decision-making" },
      { icon: Shield, label: "Enhanced Compliance", description: "Improve oversight and foster inter-agency collaboration" },
      { icon: Sparkles, label: "Strategic Foundation", description: "A cornerstone for a national 'AI for Public Good' strategy" },
    ],
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Value for Every Stakeholder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poruta delivers tailored benefits across the entire trade ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stakeholderBenefits.map((stakeholder, index) => (
            <Card
              key={index}
              className="p-6 border-0 hover:shadow-xl transition-all animate-fade-in overflow-hidden relative bg-white"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stakeholder.color}`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stakeholder.color} flex items-center justify-center`}>
                  <stakeholder.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{stakeholder.title}</h3>
              </div>

              <div className="space-y-4">
                {stakeholder.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{benefit.label}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
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

export default Benefits;
