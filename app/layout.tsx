import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKYWEBIX INFOROTECH LLP - Reliable Internet & Networks Solutions",
  description: "SKYWEBIX INFOROTECH LLP delivers enterprise-grade internet connectivity and IT infrastructure solutions across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <Navbar />
          <div className="flex-grow">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
