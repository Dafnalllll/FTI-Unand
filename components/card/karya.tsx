"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface KaryaProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  total: string;
}

export default function Karya({
  title,
  description,
  image,
  badge,
  total,
}: KaryaProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      onClick={() => setIsOpen(!isOpen)}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-4xl
        bg-white
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        transition-all
        duration-1000
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
    "
    >
      <div className="relative h-128 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-1200
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-105
        "
        />

        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-black/80
            via-black/30
            to-transparent
            transition-all
            duration-1200
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:from-black/95
            group-hover:via-black/80
        "
        />
      </div>

      <div
        className="
        absolute inset-0
        flex flex-col justify-end
        px-6
        pr-10
        pb-8
        lg:px-8
        lg:pr-12
        lg:pb-8
        text-white
    "
      >
        <div
          className="
            mb-4
            inline-flex
            w-fit
            rounded-full
            border
            border-white/20
            bg-white/20
            px-4
            py-2
            text-sm
            font-semibold
            backdrop-blur-md
          "
        >
          {badge}
        </div>

        <h3
          className="
            text-2xl
            lg:text-3xl
            font-bold
            leading-tight
            transition-all
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:-translate-y-2
        "
        >
          {title}
        </h3>

        <div
          className={`
          mt-4
          transition-all
          duration-1200
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          group-hover:opacity-100
          group-hover:translate-y-0
        `}
        >
          <p
            className={`
            mt-4
            text-sm
            leading-relaxed
            text-white/85
            transition-all
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            group-hover:opacity-100
            group-hover:translate-y-0
          `}
          >
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-semibold">{total}</span>

            <button
              className={`
              shrink-0
              rounded-full
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-900
              transition-all
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              group-hover:opacity-100
              group-hover:translate-y-0
              group-hover:translate-x-1
            `}
            >
              Lihat Detail →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
