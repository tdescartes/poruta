import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Twitter, Linkedin, Mail } from "lucide-react";

const CTAFooter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate submission (replace with actual API call)
    setTimeout(() => {
      toast({
        title: "Thank you for signing up!",
        description: "We'll contact you soon to get you started with Poruta.",
      });
      setFormData({ name: "", email: "", company: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Streamline Your Procurement with Poruta?
          </h2>
          <p className="text-lg text-background/80">
            Join thousands of African businesses simplifying procurement with Poruta at{" "}
            <span className="font-semibold">poruta.com</span>. Start free today!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-16 animate-scale-in">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              required
            />
            <Input
              type="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              required
            />
            <Input
              type="text"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6 transition-transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up Now"}
            </Button>
          </div>
        </form>

        <div className="border-t border-background/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Poruta</h3>
              <p className="text-background/70 text-sm">
                Powering Africa's Trade with AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://poruta.com/about" className="text-background/70 hover:text-background transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://poruta.com/features" className="text-background/70 hover:text-background transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="https://poruta.com/pricing" className="text-background/70 hover:text-background transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="https://poruta.com/privacy" className="text-background/70 hover:text-background transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://x.com/poruta"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/poruta"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@poruta.com"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-background/60">
            <p>© 2025 Poruta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
