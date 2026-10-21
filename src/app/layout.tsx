import type { Metadata } from "next";
import { Alatsi, Anton, Jost, Miss_Fajardose, Rubik } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--f-jost" });
const rubik = Rubik({ subsets: ["latin"], variable: "--f-rubik" });
const alatsi = Alatsi({ subsets: ["latin"], weight: "400", variable: "--f-alatsi" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--f-anton" });
const fajardose = Miss_Fajardose({ subsets: ["latin"], weight: "400", variable: "--f-fajardose" });

export const metadata: Metadata = {
  title: { default: "Home", template: "%s | Gloria Dede Tetteh" },
  description: "Portfolio of Gloria Dede Tetteh, product designer and frontend engineer based in Ghana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = [jost, rubik, alatsi, anton, fajardose].map((font) => font.variable).join(" ");

  return (
    <html lang="en" data-theme="dark" className={fonts}>
      <body>
        <NextTopLoader color="#FF99FF" height={3} showSpinner={false} shadow="0 0 10px #FF99FF,0 0 5px #FF99FF" />
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
