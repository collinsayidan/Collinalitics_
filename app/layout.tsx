import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import PageTransition from "./components/PageTransition";
import NewsletterPopup from "./components/NewsletterPopup";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToHash from "./ScrollToHash";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collinalitics — Analytics, Engineering & Automation",
  description:
    "Portfolio of Collins Ayidan — Analytics Consultant, System Engineer, and Data Specialist.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Collinalitics",
    description:
      "Analytics, engineering, automation, and data-driven solutions by Collins Ayidan.",
    images: ["/og-image.png"],
    url: "https://your-domain.com",
    siteName: "Collinalitics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* These are client components — allowed inside body */}
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <NewsletterPopup />
        <PageTransition>
        <ScrollToHash />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
