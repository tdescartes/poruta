import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Privacy Policy | Poruta AI",
  description:
    "Learn how Poruta collects, uses, and protects your personal data. Read our comprehensive privacy policy.",
};

const privacySections = [
  {
    title: "Data Collection",
    content:
      "We collect information you provide directly, such as name, email, company details, and usage data. This helps us deliver and improve our services. We also collect technical data like IP addresses and device information for security and optimization purposes.",
  },
  {
    title: "How We Use Your Data",
    content:
      "Your data is used to provide Poruta's services, process transactions, send updates, improve our platform, and ensure security. We analyze usage patterns to enhance features and user experience. Marketing communications are sent only with your consent.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell your personal data. We may share data with trusted service providers (e.g., cloud hosting, analytics) under strict confidentiality agreements. Data may be disclosed if required by law or to protect our rights and users' safety.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures including encryption, blockchain audit trails, and access controls. While we strive to protect your data, no system is 100% secure. We continuously monitor and update our security practices.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. You can opt out of marketing communications and request data portability. For data protection requests, contact us at privacy@poruta.com. We respond within 30 days.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "We use cookies to enhance user experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings. Essential cookies are required for platform functionality.",
  },
  {
    title: "International Transfers",
    content:
      "Your data may be transferred to servers outside your country. We ensure adequate protection through standard contractual clauses and comply with GDPR and African data protection laws.",
  },
  {
    title: "Updates to This Policy",
    content:
      "We may update this policy periodically. Changes will be posted on this page with an updated effective date. Continued use of Poruta after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    content:
      "For privacy questions or concerns, contact us at privacy@poruta.com or through our support channels. Our data protection officer is available to address your inquiries.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-4">
              <strong>Effective Date:</strong> January 2025
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              At Poruta, we respect your privacy and are committed to protecting
              your personal data. This policy explains how we collect, use, and
              safeguard your information.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {privacySections.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                By using Poruta, you acknowledge that you have read and
                understood this Privacy Policy. If you do not agree, please
                discontinue use of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
