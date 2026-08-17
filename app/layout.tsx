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

// INI YANG HILANG - wajib ada supaya browser mobile render sesuai lebar asli device
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={geist.variable}>
      <body className="relative min-h-screen w-full max-w-full overflow-x-clip bg-background font-sans text-black">
        <GradientBlobs />
        <DotGridBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}