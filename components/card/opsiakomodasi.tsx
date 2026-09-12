"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Building2,
  Home,
  Lightbulb,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface AccommodationOption {
  name: string;
  icon: LucideIcon;
}

const options: AccommodationOption[] = [
  { name: "Asrama Kampus", icon: Home },
  { name: "Kost Pasar Baru", icon: MapPin },
  { name: "Kost Kapalo Koto", icon: MapPin },
  { name: "Kost Limau Manis", icon: MapPin },
  { name: "Dan Kost Lainnya", icon: BedDouble },
];

export default function OpsiAkomodasiCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100  p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(79,70,229,0.15)] sm:p-8"
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-100/70 blur-3xl" />

      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gray-100" />

      {/* Header */}
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100/10 text-gray-600">
          <Building2 className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
            Opsi Akomodasi
          </h3>

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
            Hunian sekitar kampus
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="relative mt-5 leading-relaxed text-gray-100">
        Berbagai pilihan hunian tersedia di sekitar kawasan kampus.
      </p>

      {/* Option chips */}
      <div className="relative mt-6 flex flex-wrap gap-3">
        {options.map(({ name, icon: Icon }, index) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE, delay: index * 0.06 }}
            whileHover={{ y: -3, scale: 1.05 }}
            className="group/chip cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition-colors duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white"
          >
            <Icon className="h-4 w-4 text-gray-400 transition-colors duration-300 group-hover/chip:text-white" />
            {name}
          </motion.span>
        ))}
      </div>

      {/* Tip */}
      <div className="relative mt-6 flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50/50 p-4">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />

        <p className="text-sm leading-relaxed text-gray-600">
          Tips: Kunjungi langsung kawasan sekitar kampus untuk survei harga dan
          kondisi kost sebelum memutuskan.
        </p>
      </div>
    </motion.div>
  );
}
