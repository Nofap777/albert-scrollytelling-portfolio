import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/LenisProvider";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albert Afriando Santoso | Web Developer",
  description: "A passionate Web Developer focused on building modern and interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${manrope.variable} antialiased bg-black text-white font-manrope`}
      >
        <LenisProvider>
          <Preloader />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
