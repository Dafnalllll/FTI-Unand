"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BACKGROUNDS = [
  {
    src: "/images/BG FTI.webp",
    alt: "Gedung Fakultas Teknologi Informasi Universitas Andalas",
  },
  {
    src: "/images/BG FTI 2.webp",
    alt: "Suasana Fakultas Teknologi Informasi Universitas Andalas",
  },
];

const SLIDE_DURATION = 7000;

export default function HeroImageMobile() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BACKGROUNDS.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % BACKGROUNDS.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + BACKGROUNDS.length) % BACKGROUNDS.length,
    );
  };

  return (
    <div className="relative lg:hidden w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
          initial={{
            opacity: 0,
            x: 50,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -50,
            scale: 0.95,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            h-[320px]
            w-full
            overflow-hidden
            rounded-[32px]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          "
        >
          {/* IMAGE */}
          <motion.div
            animate={{
              scale: [1, 1.08],
            }}
            transition={{
              duration: SLIDE_DURATION / 1000,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <Image
              src={BACKGROUNDS[activeSlide].src}
              alt={BACKGROUNDS[activeSlide].alt}
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* GRADIENT OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/50
              via-black/10
              to-transparent
            "
          />

          {/* LIGHT REFLECTION */}
          <motion.div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* BADGE */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-5
              left-5
              right-5
              rounded-3xl
              bg-white/90
              px-5
              py-4
              backdrop-blur-xl
              shadow-xl
            "
          >
            <p className="text-xs font-medium text-slate-500">
              Fakultas Teknologi Informasi
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">
              Universitas Andalas
            </h3>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* PREMIUM INDICATOR */}
      <div className="mt-5 flex justify-center gap-3">
        {BACKGROUNDS.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              width: activeSlide === index ? 40 : 10,
              scale: activeSlide === index ? 1 : 0.9,
            }}
            transition={{
              duration: 0.35,
            }}
            className={
              activeSlide === index
                ? "h-2 rounded-full bg-slate-900"
                : "h-2 rounded-full bg-slate-300"
            }
          />
        ))}
      </div>
    </div>
  );
}
