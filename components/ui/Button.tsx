"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <button
        type={type}
        onClick={onClick}
        className={`
          w-full
          py-3.5
          rounded-2xl
          bg-slate-900
          text-white
          font-medium
          shadow-lg
          hover:bg-slate-800
          transition-all
          ${className}
        `}
      >
        {children}
      </button>
    </motion.div>
  );
}
