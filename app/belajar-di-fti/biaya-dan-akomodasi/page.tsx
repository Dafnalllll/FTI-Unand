"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import AkomodasiSection from "@/components/sections/Belajar/Akomodasi";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function BiayaAkomodasiPage() {
  const scrollToSection = () => {
    const section = document.getElementById("akomodasi-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-32">
        <Breadcrumb
          items={[
            {
              label: "Belajar di FTI",
              href: "/belajar-di-fti",
            },
            {
              label: "Biaya Akomodasi",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-10 lg:py-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full border  bg-gray-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 "
            >
              Kehidupan Mahasiswa
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl"
            >
              Persiapan Kehidupan Kuliah di FTI
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-zinc-600"
            >
              Menjadi mahasiswa rantau memerlukan perencanaan finansial yang
              baik. Halaman ini menyediakan informasi biaya hidup, tempat
              tinggal, serta transportasi yang dapat membantu mahasiswa baru.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg leading-relaxed text-zinc-600"
            >
              Informasi disusun untuk memberikan gambaran awal mengenai
              kebutuhan selama masa perkuliahan di kawasan Limau Manis.
            </motion.p>

            <motion.button
              variants={fadeUp}
              onClick={scrollToSection}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              Lihat Informasi
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </motion.button>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-[0_35px_80px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="/images/kehidupan-mahasiswa/akomodasi-hero.jpg"
                alt="Biaya Akomodasi"
                width={800}
                height={500}
                className="h-85 w-full object-cover lg:h-107.5"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-900/35 via-transparent to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                <MapPin className="h-5 w-5" />
              </span>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Kota Padang
                </p>

                <p className="text-sm font-bold text-zinc-800">
                  Biaya Hidup Terjangkau
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section */}
      <section id="akomodasi-section" className="relative py-20 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <SectionTitle
              badge="Biaya & Akomodasi"
              title="Informasi Tempat Tinggal dan Biaya Hidup"
              subtitle="Panduan umum mengenai kebutuhan hidup mahasiswa selama menempuh pendidikan di Kota Padang."
            />
          </motion.div>

          <AkomodasiSection />
        </div>
      </section>
    </main>
  );
}
