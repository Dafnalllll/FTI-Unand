"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Network } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import SejarahCard from "@/components/card/sejarah";

import { sejarahData } from "@/data/sejarah";

/* ---------------- Section ---------------- */

export default function Sejarah() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Garis yang terisi mengikuti progres scroll
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="sejarah"
      className="relative overflow-hidden py-24 scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          badge="Profil"
          title="Sejarah"
          subtitle="Perjalanan Fakultas Teknologi Informasi dari awal berdirinya hingga menjadi pusat pendidikan teknologi informasi yang terus berkembang."
        />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-20 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
        >
          <span className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-slate-800 via-slate-400 to-gray-400" />
          <p className="text-center leading-relaxed text-slate-600 md:text-lg">
            Fakultas Teknologi Informasi Universitas Andalas resmi berdiri pada{" "}
            <span className="font-semibold text-slate-900">
              16 Oktober 2012
            </span>{" "}
            sebagai hasil penggabungan Program Studi Teknik Komputer dan Program
            Studi Sistem Informasi yang sebelumnya berada di fakultas berbeda
            dalam lingkungan Universitas Andalas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          {/* Garis dasar */}
          <div className="absolute left-5 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-slate-200 md:left-1/2" />

          {/* Garis progres animasi */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="
              absolute left-5 top-0 h-full w-1 origin-top -translate-x-1/2
              rounded-full bg-linear-to-b from-slate-800 via-slate-500 to-gray-400
              md:left-1/2
            "
          />

          {sejarahData.map((item, index) => (
            <SejarahCard key={item.year} item={item} index={index} />
          ))}

          {/* Penutup garis */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="
            relative z-10 mx-auto
            flex h-14 w-14 items-center justify-center
            rounded-full border-4 border-white
            bg-slate-900 shadow-lg
          "
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Network className="h-6 w-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
