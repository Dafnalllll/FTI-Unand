"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const images = [
  {
    src: "/images/kehidupan-mahasiswa/kost-1.jpg",
    label: "Kost Area 01",
    tag: "Pilihan Hunian",
  },
  {
    src: "/images/kehidupan-mahasiswa/kost-2.jpg",
    label: "Kost Area 02",
    tag: "Pilihan Hunian",
  },
  {
    src: "/images/kehidupan-mahasiswa/kost-3.jpg",
    label: "Kost Area 03",
    tag: "Pilihan Hunian",
  },
];

export default function AkomodasiGallery() {
  return (
    <div className="space-y-8">
      {/* Gallery header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-gray-600" />
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Galeri Hunian
          </span>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
          3 Foto
        </span>
      </motion.div>

      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: index * 0.12 }}
          className="group relative overflow-hidden rounded-3xl border-[6px] border-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-shadow duration-500 hover:shadow-[0_28px_60px_rgba(0,0,0,0.25)]"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.label}
              width={700}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-200">
                {image.tag}
              </p>

              <p className="mt-0.5 text-lg font-bold text-white">
                {image.label}
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-300 group-hover:bg-white/30">
              <MapPin className="h-4 w-4" />
            </span>
          </div>

          <span className="pointer-events-none absolute right-4 top-3 text-5xl font-extrabold tracking-tight text-white/20 transition-colors duration-500 group-hover:text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
