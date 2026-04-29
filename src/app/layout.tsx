import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customSerif = localFont({
  src: "../fonts/SuisseIntlMonoTrial-Regular.otf", 
  variable: "--font-custom-serif",
  display: "swap",
});

const customMono = localFont({
  src: "../fonts/TestTiemposHeadline-Medium-BF66457a509b4ec.otf", 
  variable: "--font-custom-mono",
  display: "swap",
});

const customSans = localFont({
  src: "../fonts/TestTiemposHeadline-Regular-BF66457a508e31a.otf", 
  variable: "--font-custom-sans",
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
    // --- FIX: The variables are now attached to the HTML tag ---
    <html lang="en" className={`${customSerif.variable} ${customMono.variable} ${customSans.variable}`} suppressHydrationWarning>
      
      {/* --- FIX: The body tag is now clean and only has your base styles --- */}
      <body suppressHydrationWarning className="font-sans antialiased text-[#F9F6EE] bg-[#2A1615]">
        {children}
      </body>
    </html>
  );
}