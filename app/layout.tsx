import { metadata } from "@/lib/metadata";

export { metadata };
import { Plus_Jakarta_Sans } from "next/font/google";

import SplashProvider from "@/components/splashprovider";
import LayoutContent from "@/components/layouts/LayoutContent";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SplashProvider>
          <LayoutContent>{children}</LayoutContent>
        </SplashProvider>
      </body>
    </html>
  );
}
