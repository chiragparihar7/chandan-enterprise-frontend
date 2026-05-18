import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components import
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Chandan Enterprise | Waterproofing Services",
  description:
    "Chandan Enterprise provides professional waterproofing services for roofs, terraces, basements & buildings. Get expert solutions today.",
  keywords: [
    "waterproofing services",
    "roof waterproofing",
    "terrace waterproofing",
    "basement waterproofing",
    "Chandan Enterprise",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">
        
        {/* 🔥 Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* 🔥 Footer */}
        <Footer />
      </body>
    </html>
  );
}