import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aboli | Interactive Developer Portfolio",
  description: "Explore the digital world of Aboli. Frontend Developer building digital experiences that feel alive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased dark bg-black text-white h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
