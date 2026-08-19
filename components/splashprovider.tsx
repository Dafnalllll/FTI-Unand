"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/ui/Loading";

interface SplashProviderProps {
  children: React.ReactNode;
}

export default function SplashProvider({ children }: SplashProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      <div
        className={`transition-all duration-700 ease-out ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>

      <AnimatePresence>{isLoading && <Loading key="splash" />}</AnimatePresence>
    </>
  );
}
