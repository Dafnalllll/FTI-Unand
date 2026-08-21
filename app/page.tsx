"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import HeroImageCard from "@/components/card/heroimage";
import HeroImageMobile from "@/components/card/heroimagemobile";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TITLE_LINES = ["Membentuk Generasi Unggul", "di Era Digital."];

const SCROLL_INDICATOR = {
  x: 0,
  y: -85,
};

const DESCRIPTION =
  "Fakultas Teknologi Informasi hadir untuk menjawab tantangan masa depan melalui inovasi, riset teknologi mutakhir, dan ekosistem pendidikan berstandar global.";

export default function Home() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(DESCRIPTION.slice(0, index + 1));

      index++;

      if (index >= DESCRIPTION.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Decorative Blur */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-125 w-125 rounded-full bg-blue-200/30 blur-[120px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-0 bottom-0 h-112.5 w-112.5 rounded-full bg-slate-300/30 blur-[120px]"
        aria-hidden
      />

      <section
        className="
        relative z-10
        flex
        items-center
        min-h-[90vh]
        lg:min-h-screen
        lg:-translate-y-17.5
        "
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div
            className="
            flex
            flex-col
            items-center
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-20
          "
          >
            {/* LEFT CONTENT */}
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                {TITLE_LINES.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span
                      className="block"
                      initial={{ y: "115%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.25 + index * 0.18,
                        ease: EASE,
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                }}
                className="
                mt-6
                mx-auto
                max-w-xl
                text-base
                leading-relaxed
                text-slate-600
                md:text-lg
                lg:mx-0
                "
              >
                {typedText}

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="ml-1 inline-block"
                >
                  |
                </motion.span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: EASE,
                }}
                className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-4
                lg:justify-start
                "
              >
                <a
                  href="#"
                  className="
                    group inline-flex items-center gap-2
                    rounded-xl bg-slate-900
                    px-7 py-3.5
                    text-sm font-semibold text-white
                    shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-slate-800
                  "
                >
                  Telusuri FTI
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#"
                  className="
                    group inline-flex items-center gap-3
                    rounded-xl border border-slate-300
                    bg-white/80
                    px-7 py-3.5
                    text-sm font-semibold text-slate-900
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white
                  "
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                  Video Profil
                </a>
              </motion.div>
            </div>

            {/* RIGHT PHOTO CARD */}
            <HeroImageCard />

            {/* RIGHT PHOTO CARD MOBILE */}
            <HeroImageMobile />
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.6,
        }}
        className="
        absolute
        left-1/2
        bottom-8
        z-10
        hidden
        flex-col
        items-center
        gap-2
        text-slate-600
        xl:flex
      "
        style={{
          transform: `
      translateX(calc(-50% + ${SCROLL_INDICATOR.x}px))
      translateY(${SCROLL_INDICATOR.y}px)
    `,
        }}
      >
        <span className="text-[12px] font-medium uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </main>
  );
}
