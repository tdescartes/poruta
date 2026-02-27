import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Revolutionize Procurement in Africa | Poruta AI",
  description:
    "Revolutionize procurement and import processes in Africa with Poruta AI. Automate documentation, ensure accuracy, and achieve transparency at poruta.com",
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
    title: "Revolutionize Procurement in Africa | Poruta AI",
    description:
      "Revolutionize procurement and import processes in Africa with Poruta AI. Automate documentation, ensure accuracy, and achieve transparency.",
    type: "website",
    url: "https://poruta.com",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@poruta",
    title: "Revolutionize Procurement in Africa | Poruta AI",
    description:
      "Revolutionize procurement and import processes in Africa with Poruta AI. Automate documentation and ensure accuracy.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
