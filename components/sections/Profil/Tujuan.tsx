"use client";

import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  GraduationCap,
  Smartphone,
  Users,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tujuan = [
  {
    icon: GraduationCap,
    text: "Menghasilkan lulusan yang berwawasan luas, berkemampuan profesional, berakhlak mulia dan berjiwa technopreneur di bidang teknologi informasi.",
  },
  {
    icon: Award,
    text: "Mendapatkan peringkat akreditasi unggul untuk semua program studi.",
  },
  {
    icon: FlaskConical,
    text: "Melaksanakan penelitian untuk menghasilkan publikasi ilmiah dan paten yang bermutu dan inovatif yang bermanfaat untuk pengembangan ilmu pengetahuan, teknologi dan pembangunan masyarakat madani.",
  },
  {
    icon: Smartphone,
    text: "Menerapkan teknologi informasi kepada masyarakat luas untuk meningkatkan kesejahteraan sosial dan ekonomi.",
  },
  {
    icon: Users,
    text: "Membangun kerjasama yang berkelanjutan dengan masyarakat, sektor swasta, pemerintah dan lembaga-lembaga nasional serta internasional.",
  },
];

export default function Tujuan() {
  return (
    <section
      id="tujuan"
      className="relative overflow-hidden py-24 scroll-mt-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionTitle
            badge="Profil"
            title="Tujuan"
            subtitle="Tujuan strategis Fakultas Teknologi Informasi Universitas Andalas dalam mendukung pendidikan, penelitian, pengabdian, dan kerja sama."
          />
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tujuan.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.12,
                  ease: EASE,
                }}
                className="group relative overflow-hidden cursor-pointer rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-slate-700 via-slate-500 to-slate-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                {/* Decor blob */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-slate-100/70 blur-2xl transition-transform duration-500 group-hover:scale-150"
                  aria-hidden
                />

                <div className="relative mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-slate-700 to-slate-900 text-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    {index + 1}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-900 group-hover:rotate-12">
                    <Icon
                      size={20}
                      className="text-slate-600 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                <p className="relative leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
