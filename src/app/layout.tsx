import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Poruta: Intelligent Trade & Procurement Control Tower",
  description:
    "Frictionless cross-border trade. Protect margins, guarantee compliance, and clear shipments in hours, not weeks.",
  authors: [{ name: "Poruta" }],
  keywords:
    "procurement automation Africa, import documentation AI, AfCFTA trade solutions, African supply chain efficiency, Poruta AI",
  metadataBase: new URL("https://poruta.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Poruta: Intelligent Trade & Procurement Control Tower",
    description:
      "Frictionless cross-border trade. Protect margins, guarantee compliance, and clear shipments in hours, not weeks.",
    type: "website",
    url: "https://poruta.com",
    // TODO: Add /og-image.jpg (1200x630px) to public/ for social share previews
  },
  twitter: {
    card: "summary_large_image",
    site: "@poruta",
    title: "Poruta: Intelligent Trade & Procurement Control Tower",
    description:
      "Frictionless cross-border trade. Protect margins, guarantee compliance, and clear shipments in hours, not weeks.",
    // TODO: Add /og-image.jpg (1200x630px) to public/ for social share previews
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
