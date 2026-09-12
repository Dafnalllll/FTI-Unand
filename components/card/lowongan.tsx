"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MagangItem } from "@/data/magang";

interface LowonganCardProps {
  item: MagangItem;
  index?: number;
}

export default function LowonganCard({ item }: LowonganCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.25,
      }}
      className="
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-lg
        transition-shadow
        duration-300
        hover:shadow-xl
      "
    >
      {/* Logo */}
      <div className="flex h-20 items-center justify-center">
        <Image
          src={item.logo}
          alt={item.alt}
          width={180}
          height={80}
          className="max-h-16 w-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-sm text-slate-500">{item.company}</p>

        <h3
          className="
            mt-2
            min-h-[72px]
            text-2xl
            font-bold
            text-slate-800
          "
        >
          {item.title}
        </h3>

        <p className="mt-2 text-slate-500">{item.location}</p>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span
          className="
            rounded-full
            bg-green-100
            px-3
            py-1
            text-sm
            font-semibold
            text-green-700
          "
        >
          {item.type}
        </span>

        <span
          className="
            rounded-full
            bg-slate-100
            px-3
            py-1
            text-sm
            font-semibold
          "
        >
          {item.duration}
        </span>

        {item.mode && (
          <span
            className="
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-sm
              font-semibold
            "
          >
            {item.mode}
          </span>
        )}
      </div>

      {/* Divider */}
      <hr className="my-6" />

      {/* Closing Date */}
      <p className="text-sm">
        Penutupan:
        <span className="ml-1 font-semibold text-red-600">
          {item.closingDate}
        </span>
      </p>

      {/* Button */}
      <button
        className="
          mt-auto
          w-full
          rounded-xl
          bg-gray-600
          py-3
          font-semibold
          text-white
          transition
          duration-300
          hover:bg-gray-700
          cursor-pointer
        "
      >
        Lihat Detail →
      </button>
    </motion.div>
  );
}
