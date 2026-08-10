import { Geist } from "next/font/google";
import GradientBlobs from "@/components/ui/GradientBlobs";
import DotGridBackground from "@/components/ui/DotGridBackground";
import Navbar from "@/components/layout/Navbar";
import Logo from "@/components/ui/Logo";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={geist.variable}>
      <body className="relative min-h-screen antialiased font-sans text-black">
        <GradientBlobs />
        <DotGridBackground />
        <Logo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}