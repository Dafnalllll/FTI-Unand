import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SplashProvider from "@/components/splashprovider";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FTI Universitas Andalas",
  description: "Website Resmi Fakultas Teknologi Informasi Universitas Andalas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}
