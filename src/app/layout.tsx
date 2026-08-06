import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUHAS | Fine Dining, Reimagined",
  description: "Where Culinary Art Meets Timeless Elegance.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text selection:bg-brand-gold/30">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
