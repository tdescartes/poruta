import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import BookDemoModal from "@/components/BookDemoModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing | Poruta AI Procurement Platform",
  description:
    "Simple pricing for African businesses. Start free, scale as you grow with Poruta's AI-powered procurement platform.",
};

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for startups testing the waters",
    features: [
      "Unlimited document scans",
      "Basic analytics dashboard",
      "Email support",
      "1 user account",
    ],
  },
  {
    name: "Premium",
    price: "$49",
    period: "/month",
    description: "Ideal for growing SMEs",
    features: [
      "Everything in Free",
      "Advanced AI analytics",
      "Offline mode",
      "5 user accounts",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Premium",
      "Unlimited users",
      "Dedicated account manager",
      "SLA guarantees",
      "Custom development",
      "On-premise deployment",
    ],
  },
];

const faqs = [
  {
    question: "How does Poruta handle offline use?",
    answer:
      "Poruta stores data locally when offline and automatically syncs when connectivity is restored. This ensures uninterrupted workflows in areas with unstable internet.",
  },
  {
    question: "Is Poruta AfCFTA-compliant?",
    answer:
      "Yes, Poruta automates HS code classification compliant with EU, COMESA, ECOWAS, and EAC standards, streamlining cross-border trade under AfCFTA.",
  },
  {
    question: "What about data security?",
    answer:
      "We use blockchain-integrated audit trails and end-to-end encryption. All data is stored securely with compliance to international data protection standards.",
  },
  {
    question: "Can it integrate with existing systems?",
    answer:
      "Yes, Poruta offers API access for seamless integration with existing e-procurement systems and enterprise software.",
  },
  {
    question: "What languages does Poruta support?",
    answer:
      "Poruta supports multilingual documents including English, French, Swahili, Arabic, and Amharic to serve diverse African markets.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Simple Pricing for African Businesses
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. Start free, scale as you
              grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  tier.popular ? "border-primary border-2 shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <BookDemoModal
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                />
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
