import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { BackgroundElements } from '@/components/main/landing/background-elements';
import { Navbar } from "@/components/main/landing/Navbar";
import { Footer } from "@/components/main/landing/Footer";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import Script from "next/script";
import "./style.css";
import favicon from "./favicon.ico";


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Ensolite Technologies Pvt Ltd - Landing Page</title>
        <meta property="og:title" content="Top Signal AI - AI Agents & Automations for Business Operations" />
        <meta property="og:description" content="Expert AI Agents & Automations for Business Operations. Transform your business with smart AI solutions that scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ensolite.in" />
        <meta property="og:image" content="https://ensolite.in/assets/icon-full.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ensolite Technologies Pvt Ltd" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/icon.svg" />
        <link rel="apple-touch-icon" href="/assets/icon-full.png" />
        <link rel="shortcut icon" href="/assets/icon-full.png" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}>
        <BackgroundElements />
        <Navbar />
        
        {children}
        <Footer />
        
        {/* Load custom scripts */}
        
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
