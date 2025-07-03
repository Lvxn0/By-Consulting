import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/components/Lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Geist Sans font with CSS variable for global use
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Load Geist Mono font with CSS variable for global use
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the entire site (used by Next.js for SEO, etc.)
export const metadata: Metadata = {
  title: "By Consulting",
  description: "Your Vision, Your Expertise.",
};

// RootLayout component wraps all pages and provides shared layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ReactLenis provides smooth scrolling context */}
      <ReactLenis root>
        <body
          // Apply Geist font CSS variables and enable antialiasing
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Global header component */}
          <Header />
          {/* Render page content */}
          {children}
          {/* Global footer component */}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
