"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SejarahCardProps {
  item: {
    year: string;
    title: string;
    date: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}

export default function SejarahCard({ item, index }: SejarahCardProps) {
  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      className={`relative mb-14 flex w-full items-start md:mb-20 ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div className="absolute left-5 top-7 z-10 -translate-x-1/2 md:left-1/2">
        <motion.span
          animate={{ scale: [1, 1.8], opacity: [0.35, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: index * 0.45,
          }}
          className="absolute inset-0 rounded-full bg-slate-800"
        />

        <span
          className="
            relative block h-5 w-5 rounded-full
            border-4 border-white bg-slate-900
          "
        />

        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gray-400 ring-2 ring-white" />
      </div>

      <motion.article
        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 16,
        }}
        whileHover={{ y: -6 }}
        className="
          group relative ml-12 w-full overflow-hidden cursor-pointer
          rounded-2xl border border-slate-200
          bg-white p-6 shadow-md
          md:ml-0 md:w-[44%]
        "
      >
        <span className="absolute inset-x-0 top-0 h-1 bg-gray-600" />

        <div className="flex items-center gap-3">
          <div
            className="
            flex h-12 w-12 items-center justify-center
            rounded-xl bg-gray-200
            text-slate-700 
            "
          >
            <Icon size={22} />
          </div>

          <span className="rounded-xl bg-slate-900 px-4 py-1.5 text-sm font-bold text-white">
            {item.year}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-800">{item.title}</h3>

        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {item.date}
        </p>

        <p className="mt-4 leading-relaxed text-slate-600">
          {item.description}
        </p>

        <span
          className="
            pointer-events-none absolute
            top-5 right-4
            text-5xl font-medium
            text-gray-400
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.article>
    </div>
  );
}
