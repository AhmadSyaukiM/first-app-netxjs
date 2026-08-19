// app/layout.tsx
import { Geist } from "next/font/google";
import type { Metadata, Viewport } from "next";
import GradientBlobs from "@/components/ui/GradientBlobs";
import DotGridBackground from "@/components/ui/DotGridBackground";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Syauki. — Portfolio",
  description: "Portfolio Ahmad Syauki Mubarok",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // overflow-x-clip SEKARANG di <html>, bukan di <body>
    <html lang="id" className={`${geist.variable} overflow-x-clip`}>
      <body className="relative min-h-screen w-full max-w-full bg-background font-sans text-black">
        <GradientBlobs />
        <DotGridBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}