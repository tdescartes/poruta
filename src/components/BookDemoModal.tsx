import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface BookDemoModalProps {
  trigger?: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "lg";
  className?: string;
}

const BookDemoModal = ({ trigger, variant = "default", size = "default", className }: BookDemoModalProps) => {
  const [open, setOpen] = useState(false);
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
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Error",
        description: "Name and email are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Google Forms
      const formBody = new URLSearchParams();
      formBody.append('entry.2139731301', formData.name);
      formBody.append('emailAddress', formData.email);
      if (formData.company) formBody.append('entry.COMPANY_ID', formData.company);
      if (formData.phone) formBody.append('entry.PHONE_ID', formData.phone);
      if (formData.message) formBody.append('entry.MESSAGE_ID', formData.message);

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdPPYSsIe6_U8ihWJqBJVI85buydCDxLB1ecYFD5Z_b5_TyZgbs/formResponse',
        {
          method: 'POST',
          body: formBody,
          mode: 'no-cors', // Required for Google Forms
        }
      );

      toast({
        title: "Demo Booked!",
        description: "We'll contact you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error('Demo submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant={variant} size={size} className={className}>
            Book Demo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Demo</DialogTitle>
          <DialogDescription>
            See how Poruta transforms procurement. We'll reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@company.com"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+234 XXX XXX XXXX"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="message">Tell us about your needs</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="What challenges are you facing?"
              rows={3}
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Book Demo"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;
