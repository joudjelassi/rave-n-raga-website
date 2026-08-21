import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rave N Raga",
  description: "Creating space for sound, soul & connection — raves, bands & community events in Kelowna, BC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20 relative bg-gradient-to-b from-[#050518] to-[#01010d] text-white overflow-x-hidden min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
