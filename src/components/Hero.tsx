import BookDemoModal from "@/components/BookDemoModal";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Poruta: The AI-Powered Procurement Control Tower
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Faster, Accurate, Transparent, and Compliant Cross-Border Trade
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <BookDemoModal 
              size="lg" 
              className="text-lg px-6 py-6 transition-transform hover:scale-105 hover:shadow-xl rounded-sm"
            />
            <a 
              href="#features"
              className="inline-flex items-center justify-center h-11 px-6 py-6 text-lg rounded-sm border border-white text-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          <p className="text-sm text-white/70 font-medium mt-6">
            Intelligent Automation Meets Expert Validation – Built for Africa's Future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
