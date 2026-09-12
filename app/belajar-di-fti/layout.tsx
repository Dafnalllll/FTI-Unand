"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function BelajarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{
        x: "25vw",
        scale: 0.995,
      }}
      animate={{
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
