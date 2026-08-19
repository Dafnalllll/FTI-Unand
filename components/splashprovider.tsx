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

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading key="splash" />}
      </AnimatePresence>
      {children}
    </>
  );
}
