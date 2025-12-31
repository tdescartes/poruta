import { CheckCircle2, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    feature: "Core Function",
    existing: "Digital Form Submission",
    poruta: "AI-Driven Process Automation",
  },
  {
    feature: "Data Entry",
    existing: "Manual by Agents",
    poruta: "AI Extraction + Human Validation",
  },
  {
    feature: "HS Code Lookup",
    existing: "Manual, Expert-Dependent",
    poruta: "AI-Suggested + Agent-Confirmed",
  },
  {
    feature: "Transparency",
    existing: "Limited for Importer",
    poruta: "Real-Time Tracking for All Parties",
  },
  {
    feature: "Analytics",
    existing: "Basic Reporting",
    poruta: "Advanced, Granular Market Intelligence",
  },
  {
    feature: "Stakeholder Role",
    existing: "Data Entry Clerks",
    poruta: "Strategic Oversight and Validation",
  },
];

const CompetitiveAdvantage = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Our Competitive Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Poruta's AI Control Tower compares to existing solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="rounded-lg overflow-hidden border border-border bg-white shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold text-foreground w-1/3">Feature</TableHead>
                  <TableHead className="font-bold text-foreground w-1/3">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-destructive" />
                      Existing "Single Window" System
                    </div>
                  </TableHead>
                  <TableHead className="font-bold text-foreground w-1/3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Poruta AI Control Tower
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow 
                    key={index}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                    <TableCell className="text-muted-foreground">{row.existing}</TableCell>
                    <TableCell className="text-primary font-medium">{row.poruta}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
