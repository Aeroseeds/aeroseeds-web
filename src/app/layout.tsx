import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Caslon_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 1. New Google Font: IBM Plex Mono
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

// 2. New Google Font: Libre Caslon Text
const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caslon",
  display: "swap",
});

// 3. Kept your exact Test Tiempos path
const testTiempos = localFont({
  src: "../fonts/TestTiemposHeadline-Regular-BF66457a508e31a.otf", 
  variable: "--font-tiempos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeroseeds",
  description: "Farming intelligence from above",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Injected the new variables into the HTML tag exactly as you had it before
    <html lang="en" className={`${libreCaslon.variable} ${ibmPlexMono.variable} ${testTiempos.variable} scroll-smooth`} suppressHydrationWarning>
      
      {/* Kept your exact background and text colors */}
      <body suppressHydrationWarning className="font-sans antialiased text-[#F9F6EE] bg-[#2A1615]">
        {children}
      </body>
    </html>
  );
}