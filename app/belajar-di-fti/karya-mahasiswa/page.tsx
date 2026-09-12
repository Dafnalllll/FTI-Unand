"use client";

import Image from "next/image";
import { Rocket, Microscope } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import Breadcrumb from "@/components/ui/Breadcrumb";
import KaryaCard from "@/components/card/karya";

import { karyaData } from "@/data/karya";

export default function KaryaMahasiswaPage() {
    const scrollToKarya = () => {
      const section = document.getElementById("karya-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
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
              label: "Karya Mahasiswa",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-slate-500">
              Etalase Inovasi Mahasiswa
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl">
              Inovasi dan Kreativitas dalam Aksi
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600">
              <p>
                Mahasiswa Fakultas Teknologi Informasi aktif menghasilkan
                berbagai aplikasi, penelitian, solusi digital, serta inovasi
                teknologi yang memberikan dampak nyata bagi masyarakat.
              </p>

              <p>
                Berbagai karya ini merupakan hasil kolaborasi akademik, riset
                laboratorium, kompetisi, dan pengembangan startup teknologi.
              </p>
            </div>
            <button
              onClick={scrollToKarya}
              className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-slate-900
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-slate-700
              hover:translate-y-0.5
            "
            >
              Lihat Karya Mahasiswa ↓
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mx-auto
                max-w-sm
                overflow-hidden
                rounded-3xl
                border-4
                border-slate-200
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                lg:max-w-md
              "
            >
              <Image
                src="/images/belajar-fti/karya-hero.jpg"
                alt="Karya Mahasiswa"
                width={600}
                height={400}
                className="
                  h-55
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  md:h-70
                  lg:h-80
                "
              />
            </motion.div>

            {/* Feature Cards */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-100
                  p-5
                  shadow-md
                "
              >
                <div className="mb-3 inline-flex rounded-xl bg-white p-3">
                  <Rocket className="h-6 w-6 text-slate-700" />
                </div>

                <h3 className="font-bold">Pengembangan Startup</h3>

                <p className="mt-2 text-sm text-zinc-600">
                  Transformasi ide menjadi produk digital.
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-md
                "
              >
                <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-3">
                  <Microscope className="h-6 w-6 text-slate-700" />
                </div>

                <h3 className="font-bold">Riset Komputasi Terapan</h3>

                <p className="mt-2 text-sm text-zinc-600">
                  Solusi teknologi berbasis penelitian.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kategori Karya */}
      <section id="karya-section" className="relative py-20 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            badge="Karya Mahasiswa"
            title="Eksplorasi Karya dan Prestasi Mahasiswa"
            subtitle="Berbagai kegiatan akademik, kompetisi, dan inovasi yang menjadi wadah pengembangan kompetensi mahasiswa Fakultas Teknologi Informasi."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {karyaData.map((item, index) => (
              <KaryaCard
                key={index}
                title={item.title}
                badge={item.badge}
                description={item.description}
                image={item.image}
                total={item.total}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
