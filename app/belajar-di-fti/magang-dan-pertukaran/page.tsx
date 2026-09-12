"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MagangPertukaranSection from "@/components/sections/Belajar/MagangPertukaran";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function MagangPertukaranPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-32">
        <Breadcrumb
          items={[
            {
              label: "Belajar di FTI",
              href: "/belajar-di-fti",
            },
            {
              label: "Magang dan Pertukaran",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:py-10">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* IMAGE - KIRI */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="order-1"
            >
              <div className="overflow-hidden rounded-4xl border-8 border-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/belajar-fti/magang-hero.jpg"
                  alt="Program Magang Mahasiswa"
                  width={900}
                  height={650}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* CONTENT - KANAN */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: EASE,
              }}
              className="order-2"
            >
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-indigo-700">
                Pengalaman Global & Industri
              </span>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-zinc-800 md:text-6xl">
                Perluas Pengalaman di Tingkat Nasional dan Internasional
              </h1>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600">
                <p>
                  FTI menghadirkan berbagai program magang, kerja sama industri,
                  pertukaran mahasiswa, dan aktivitas akademik internasional.
                </p>

                <p>
                  Mahasiswa dapat mengembangkan pengalaman profesional,
                  memperluas relasi, dan meningkatkan wawasan global untuk dunia
                  kerja.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lowongan & Pertukaran */}
      <MagangPertukaranSection />
    </main>
  );
}
