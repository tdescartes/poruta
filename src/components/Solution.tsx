import { CheckCircle2 } from "lucide-react";

const Solution = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <CheckCircle2 className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-2xl font-bold">AI-Powered Automation</p>
                  <p className="text-sm mt-2 opacity-90">
                    Watch how Poruta transforms procurement
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How Poruta Solves It
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AI-powered automation delivering{" "}
              <span className="font-semibold text-secondary">5x faster processing</span> and{" "}
              <span className="font-semibold text-secondary">99% accuracy</span>. Built for Africa's growing trade ecosystem.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time predictive analytics",
                "Works offline in low-resource areas",
                "Blockchain transparency",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
