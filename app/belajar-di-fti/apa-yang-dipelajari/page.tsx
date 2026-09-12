"use client";

import Image from "next/image";
import BreadCrumb from "@/components/ui/Breadcrumb";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Brain,
  BarChart3,
  ShieldCheck,
  Network,
  Cpu,
  GraduationCap,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const kompetensi = [
  {
    icon: Code2,
    title: "Pemrograman",
    desc: "Kuasai bahasa pemrograman modern dan rekayasa perangkat lunak untuk membangun aplikasi yang andal.",
    accent: "text-emerald-600",
    bg: "bg-emerald-500/10",
    glow: "bg-emerald-500/20",
  },
  {
    icon: Brain,
    title: "Kecerdasan Buatan",
    desc: "Pelajari machine learning, deep learning, dan sistem cerdas yang menjadi penggerak inovasi digital.",
    accent: "text-cyan-600",
    bg: "bg-cyan-500/10",
    glow: "bg-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Analisis Data",
    desc: "Kemampuan mengolah dan menginterpretasi data besar menjadi insight yang bernilai bagi organisasi.",
    accent: "text-blue-600",
    bg: "bg-blue-500/10",
    glow: "bg-blue-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Siber",
    desc: "Amankan sistem dan jaringan dari ancaman digital melalui teknik keamanan informasi terkini.",
    accent: "text-rose-600",
    bg: "bg-rose-500/10",
    glow: "bg-rose-500/20",
  },
  {
    icon: Network,
    title: "Sistem Informasi",
    desc: "Rancang dan kelola sistem informasi yang mengintegrasikan bisnis, proses, dan teknologi.",
    accent: "text-amber-600",
    bg: "bg-amber-500/10",
    glow: "bg-amber-500/20",
  },
  {
    icon: Cpu,
    title: "Arsitektur & Jaringan",
    desc: "Pahami infrastruktur hardware, jaringan komputer, dan arsitektur sistem sebagai fondasi teknologi.",
    accent: "text-orange-600",
    bg: "bg-orange-500/10",
    glow: "bg-orange-500/20",
  },
];

const galleryItems = [
  {
    src: "/images/belajar/apa-yang-dipelajari/mahasiswa.webp",
    alt: "Mahasiswa FTI",
    title: "Mahasiswa FTI",
    desc: "Suasana belajar dan kolaborasi di lingkungan Fakultas Teknologi Informasi.",
  },
  {
    src: "/images/belajar/karya.webp",
    alt: "Karya Mahasiswa",
    title: "Karya & Inovasi",
    desc: "Proyek teknologi dan penelitian yang dikembangkan oleh mahasiswa.",
  },
  {
    src: "/images/belajar/apa-yang-dipelajari/kolaborasi.webp",
    alt: "Pertukaran Mahasiswa",
    title: "Kolaborasi Global",
    desc: "Peluang pertukaran pelajar dan kerja sama dengan industri.",
  },
];

export default function ApaYangDipelajariPage() {
  const scrollToSection = () => {
    const section = document.getElementById("apa-yang-dipelajari");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Tombol BreadCrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-32">
        <BreadCrumb
          items={[
            {
              label: "Belajar di FTI",
              href: "/belajar-di-fti",
            },
            {
              label: "Apa yang Dipelajari",
            },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Gambar */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              <div className="relative overflow-hidden rounded-4xl border-8 border-white ">
                <Image
                  src="/images/BG FTI.webp"
                  alt="Kampus Fakultas Teknologi Informasi"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Badge mengambang */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
                className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur-sm sm:-left-10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">3 Program Studi</p>
                  <p className="text-sm font-bold text-zinc-900">
                    Siap Menyambutmu
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Konten */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Fondasi Teknologi untuk Masa Depan
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
              Mengenal Kurikulum dan{" "}
              <span className="text-gray-600">Kompetensi FTI</span>
            </h1>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              <p>
                Setiap program studi di Fakultas Teknologi Informasi dirancang
                untuk membekali mahasiswa dengan pengetahuan, keterampilan
                teknis, serta kemampuan berpikir kritis yang dibutuhkan di era
                digital.
              </p>

              <p>
                Mulai dari pemrograman, kecerdasan buatan, analisis data,
                keamanan siber, hingga pengembangan sistem informasi, mahasiswa
                akan mempelajari berbagai bidang yang relevan dengan kebutuhan
                industri dan perkembangan teknologi masa kini.
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
              onClick={scrollToSection}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              Jelajahi Kompetensi
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Kompetensi Section */}
      <section
        id="apa-yang-dipelajari"
        className="relative py-16 sm:py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600">
              Bidang Keahlian
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl md:text-5xl">
              Kompetensi yang Akan Kamu Kuasai
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-zinc-900" />
            <p className="mx-auto mt-5 max-w-2xl text-zinc-600">
              Berbagai bidang keahlian yang akan kamu pelajari dan kuasai selama
              menempuh pendidikan di Fakultas Teknologi Informasi.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kompetensi.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-100 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${item.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${item.accent}`} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600">
              Suasana FTI
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl md:text-5xl">
              Jelajahi Lingkungan Belajarmu
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-zinc-900" />
          </motion.div>

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:items-start">
            {galleryItems.map((item, index) => {
              const offsets = ["lg:mt-0", "lg:mt-16", "lg:mt-32"];
              const floats = [
                { y: [0, -10, 0], duration: 5 },
                { y: [0, 12, 0], duration: 6 },
                { y: [0, -14, 0], duration: 7 },
              ];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: EASE,
                    delay: index * 0.12,
                  }}
                  className={`w-full ${offsets[index]}`}
                >
                  <motion.div
                    animate={floats[index]}
                    transition={{
                      duration: floats[index].duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="group cursor-pointer relative overflow-hidden rounded-3xl border-8 border-white  shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={400}
                      className="
                      h-auto
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                    />

                    <div
                      className="
                      absolute
                      inset-0
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/50
                    "
                    />

                    <div className="absolute inset-x-0 bottom-0 translate-y-6 p-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-white">{item.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
