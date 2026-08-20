"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();

  const hiddenFooterRoutes = ["/not-found"];

  const hideFooter = hiddenFooterRoutes.includes(pathname);

  return (
    <>
      <Navbar />

      <main className="flex-1">{children}</main>

      {!hideFooter && <Footer />}
    </>
  );
}
