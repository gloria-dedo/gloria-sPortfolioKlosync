import type { Metadata } from "next";
import { Alatsi, Anton, Jost, Miss_Fajardose, Rubik } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--f-jost" });
const rubik = Rubik({ subsets: ["latin"], variable: "--f-rubik" });
const alatsi = Alatsi({ subsets: ["latin"], weight: "400", variable: "--f-alatsi" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--f-anton" });
const fajardose = Miss_Fajardose({ subsets: ["latin"], weight: "400", variable: "--f-fajardose" });

export const metadata: Metadata = {
  title: { default: "Home", template: "%s | Gloria Dede Tetteh" },
  description: "Portfolio of Gloria Dede Tetteh, UI/UX designer and frontend developer based in Ghana.",
  icons: { icon: "/images/gloriaLogo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = [jost, rubik, alatsi, anton, fajardose].map((font) => font.variable).join(" ");

  return (
    <html lang="en">
      <body className={fonts}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
