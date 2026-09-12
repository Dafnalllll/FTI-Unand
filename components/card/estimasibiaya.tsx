"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  BusFront,
  CircleDollarSign,
  ShieldCheck,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface CostItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

const costs: CostItem[] = [
  {
    label: "Tempat Tinggal (Kos/Bulan)",
    value: "Rp 400rb - 1,5jt",
    icon: BedDouble,
  },
  {
    label: "Makan & Kebutuhan (Bulan)",
    value: "Rp 1jt - 2jt",
    icon: Utensils,
  },
  {
    label: "Transportasi Lokal",
    value: "Bus Kampus & Trans Padang",
    icon: BusFront,
  },
];

export default function EstimasiBiayaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(79,70,229,0.15)] sm:p-8"
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gray-100" />

      {/* Header */}
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-600 text-gray-100">
          <CircleDollarSign className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
            Estimasi Biaya Hidup
          </h3>

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
            Perkiraan bulanan
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="relative mt-5 leading-relaxed text-gray-100">
        Padang dikenal sebagai salah satu kota pendidikan dengan biaya hidup
        yang relatif terjangkau bagi mahasiswa.
      </p>

      {/* Cost rows */}
      <div className="relative mt-6 space-y-1">
        {costs.map(({ label, value, icon: Icon }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: index * 0.1 }}
            className="group/row flex items-center justify-between gap-4 border-b border-indigo-100/80 py-3 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition-colors duration-300 group-hover/row:bg-gray-500 group-hover/row:text-white">
                <Icon className="h-4 w-4" />
              </span>

              <span className="text-sm font-medium text-zinc-600 sm:text-base">
                {label}
              </span>
            </div>

            <span className="whitespace-nowrap text-sm font-bold text-gray-100 sm:text-base">
              {value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="relative mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />

          <div>
            <p className="text-sm font-semibold text-gray-600">
              Kisaran total kebutuhan
            </p>

            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Estimasi keseluruhan biasanya berada di bawah{" "}
              <span className="font-bold text-gray-600">
                Rp 3,5 juta / bulan
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
