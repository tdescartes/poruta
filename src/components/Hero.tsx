import BookDemoModal from "@/components/BookDemoModal";
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
            AI-Powered Procurement for Africa's Trade
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Automate documentation, ensure accuracy, and unlock insights—even offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookDemoModal 
              size="lg" 
              className="text-lg px-8 py-6 transition-transform hover:scale-105 hover:shadow-xl"
            />
            <a 
              href="#features"
              className="inline-flex items-center justify-center h-11 px-8 py-6 text-lg rounded-md border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          <p className="text-base text-white/90 font-medium mt-6">
            Faster, Transparent, and Efficient – Built for Africa's Future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
