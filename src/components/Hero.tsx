import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionize Procurement and Import Processes in Africa with Poruta AI
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Poruta automates documentation, ensures accuracy, and delivers insights – even in
            low-resource settings across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 transition-transform hover:scale-105"
              asChild
            >
              <a href="https://poruta.com/signup">Get Started Free</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all"
              asChild
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>
          <p className="text-sm text-white/80 italic mt-6">
            Faster, Transparent, and Efficient – Built for Africa's Future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
