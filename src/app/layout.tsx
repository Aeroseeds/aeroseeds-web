import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Caslon_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caslon",
  display: "swap",
});

const testTiempos = localFont({
  src: "../fonts/TestTiemposHeadline-Regular-BF66457a508e31a.otf", 
  variable: "--font-tiempos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeroseeds",
  description: "Aerial intelligence for precision farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreCaslon.variable} ${ibmPlexMono.variable} ${testTiempos.variable} scroll-smooth`} suppressHydrationWarning>
      
      <body suppressHydrationWarning className="font-sans antialiased text-[#F9F6EE] bg-[#2A1615]">
        {children}
      </body>
    </html>
  );
}