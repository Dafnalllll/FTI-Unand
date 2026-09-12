"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ComponentType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface BelajarTimelineItemData {
  title: string;
  description: string;
  image: string;
  align: "left" | "right";
  href: string;
  icon: ComponentType<{ className?: string }>;
  accentBg: string;
  accentText: string;
  accentBar: string;
}

interface TimelineItemProps {
  item: BelajarTimelineItemData;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = item.icon;
  const reversed = item.align === "right";

  return (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: EASE, delay: index * 0.12 }}
      className={`relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Circular image */}
      <div className="flex justify-center md:justify-start">
        <div className="cursor-pointer relative h-40 w-40 overflow-hidden rounded-full border-8 border-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105 md:h-52 md:w-52">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1">
        <div className="group cursor-pointer relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.15)] sm:rounded-3xl sm:p-7 md:p-9">
          {/* Accent glow */}
          <div
            className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${item.accentBg} blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
          />

          {/* Top accent bar */}
          <div
            className={`absolute left-0 top-0 h-1.5 w-full ${item.accentBar}`}
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl ${item.accentBg}`}
              >
                <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${item.accentText}`} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-1 text-xl font-bold text-zinc-900 sm:text-2xl md:text-3xl">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>

            <Link
              href={item.href}
              className="
                group/link
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-zinc-900
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:bg-zinc-800
                hover:shadow-xl
                lg:w-auto
                lg:min-w-42.5
            "
            >
              Selengkapnya
              <ArrowRight
                className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover/link:translate-x-1.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
