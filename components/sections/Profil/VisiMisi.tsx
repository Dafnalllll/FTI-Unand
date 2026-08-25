"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const misi = [
  "Menyelenggarakan pendidikan yang bereputasi global dan bermartabat untuk menghasilkan lulusan bidang teknologi informasi yang berakhlak mulia dan kompetitif.",
  "Menyelenggarakan penelitian yang bermanfaat bagi pelayanan publik dan industri serta berkontribusi nyata untuk pengembangan ilmu pengetahuan dan teknologi di bidang teknologi informasi.",
  "Menyelenggarakan pengabdian kepada masyarakat dalam bidang teknologi informasi untuk berkontribusi nyata dalam peningkatan kesejahteraan ekonomi dan sosial masyarakat.",
];

export default function VisiMisi() {
  return (
    <section
      id="visi-misi"
      className="relative overflow-hidden py-24 scroll-mt-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionTitle
            badge="Profil"
            title="Visi & Misi"
            subtitle="Landasan dan arah pengembangan Fakultas Teknologi Informasi Universitas Andalas."
          />
        </motion.div>

        <div className="space-y-10">
          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative overflow-hidden cursor-pointer rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10"
          >
            {/* Decor blob */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-slate-100/70 blur-3xl transition-transform duration-500 group-hover:scale-125"
              aria-hidden
            />

            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-slate-700 to-slate-900 shadow-lg">
                  <Eye size={36} className="text-white" />
                </div>
              </motion.div>

              {/* Text */}
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-md">
                  <Eye size={13} />
                  Visi
                </span>

                <p className="mt-5 text-xl font-semibold leading-relaxed text-slate-700 md:text-xl">
                  Menjadi Fakultas Teknologi Informasi yang bermutu dan
                  bereputasi nasional pada tahun 2028.
                </p>
              </div>
            </div>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative overflow-hidden cursor-pointer rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10"
          >
            {/* Decor blob */}
            <div
              className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-slate-100/70 blur-3xl transition-transform duration-500 group-hover:scale-125"
              aria-hidden
            />

            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-slate-700 to-slate-900 shadow-lg">
                  <Target size={36} className="text-white" />
                </div>
              </motion.div>

              {/* Text */}
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-md">
                  <Target size={13} />
                  Misi
                </span>

                <div className="mt-6 space-y-5">
                  {misi.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: EASE,
                      }}
                      className="group/item flex items-start gap-4 text-left"
                    >
                      <div className="mt-0.5 cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-slate-700 to-slate-900 text-sm font-bold text-white shadow-md transition-transform duration-300 group-hover/item:scale-110">
                        {index + 1}
                      </div>

                      <p className="text-lg leading-relaxed text-slate-600">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
