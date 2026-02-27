"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Missing information",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append("entry.89711842", formData.name);
      formBody.append("entry.432833327", formData.email);
      if (formData.company) formBody.append("entry.666677065", formData.company);
      if (formData.phone) formBody.append("entry.974077450", formData.phone);
      if (formData.message) formBody.append("entry.65402589", formData.message);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSci4iYnLMagsWzDEsWcqaN5Pxp6vrXg4kBbAxuauauHrZqi7g/formResponse",
        {
          method: "POST",
          body: formBody,
          mode: "no-cors",
        }
      );

      toast({
        title: "Request submitted",
        description: "We'll be in touch within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact submission error:", error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-surface-300 focus:outline-none focus:border-poruta-700 focus:ring-1 focus:ring-poruta-700 bg-surface-50 text-sm font-mono placeholder:text-surface-400 transition-colors";

  return (
    <section id="demo" className="py-24 bg-surface-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-surface-900 mb-4 tracking-tighter">Getting Started</h2>
          <p className="text-lg text-surface-600 max-w-2xl">
            Fill out the form below to register your company, and you can expect to hear from us shortly to schedule your personalized walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-white border-2 border-surface-900 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-mono text-surface-600 mb-2 uppercase">01. Full_Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-surface-600 mb-2 uppercase">02. Work_Email</label>
                  <input
                    type="email"
                    placeholder="e.g., jane@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-mono text-surface-600 mb-2 uppercase">03. Company_Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Acme Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-surface-600 mb-2 uppercase">04. Phone_No</label>
                  <input
                    type="tel"
                    placeholder="e.g., +250 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-xs font-mono text-surface-600 mb-2 uppercase">05. Your_Needs</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current challenges and needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-surface-900 hover:bg-poruta-700 text-white font-bold py-4 transition-colors text-sm uppercase tracking-widest btn-strict disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="border-l-2 border-surface-200 pl-8 space-y-8">
              <div>
                <h4 className="font-mono text-xs text-surface-500 uppercase tracking-widest mb-2">Comms_Channel</h4>
                <a href="mailto:sales@poruta.com" className="text-surface-900 font-bold text-lg hover:text-poruta-700 transition-colors">
                  sales@poruta.com
                </a>
              </div>
              <div>
                <h4 className="font-mono text-xs text-surface-500 uppercase tracking-widest mb-2">Direct_Line</h4>
                <span className="text-surface-900 font-bold text-lg">+250 787 567 656</span>
              </div>
              <div>
                <h4 className="font-mono text-xs text-surface-500 uppercase tracking-widest mb-2">HQ_Node</h4>
                <span className="text-surface-900 font-bold text-base leading-snug block">
                  Kigali, Rwanda<br />Serving the African Continent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
