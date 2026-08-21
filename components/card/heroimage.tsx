"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroImage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % BACKGROUNDS.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative hidden lg:block h-140 w-130"
      style={{
        perspective: "1500px",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;

        setMousePosition({ x, y });
      }}
      onMouseLeave={() => {
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {/* BACK CARD */}
      <motion.div
        className="
          absolute
          right-0
          top-20
          h-105
          w-80
          overflow-hidden
          rounded-[16px_48px_16px_48px]
          shadow-2xl
        "
        animate={{
          rotate: [4, 14, 4],

          y: [0, -20, 0],

          x: [
            mousePosition.x * 0.4,
            mousePosition.x * 0.4 + 30,
            mousePosition.x * 0.4,
          ],

          scale: [0.92, 1.02, 0.92],

          rotateY: [0, 18, 0],

          rotateX: [
            -mousePosition.y * 0.25,
            -mousePosition.y * 0.15,
            -mousePosition.y * 0.25,
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
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
            src={BACKGROUNDS[(activeSlide + 1) % BACKGROUNDS.length].src}
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* FRONT CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          whileHover={{
            scale: 1.04,
            z: 120,
            rotateY: 8,
          }}
          key={activeSlide}
          initial={{
            opacity: 0,
            scale: 1.15,
            x: 100,
            rotate: 8,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,

            scale: 1 + Math.abs(mousePosition.x) * 0.002,

            x: mousePosition.x * 1.4,
            y: mousePosition.y * 1.4,

            z: 80,

            rotate: -6,
            rotateY: mousePosition.x * 0.9,
            rotateX: -mousePosition.y * 0.9,

            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            x: -100,
            rotate: -12,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
            ease: EASE,
            type: "spring",
            stiffness: 90,
            damping: 20,
          }}
          className="
            absolute
            left-0
            top-0
            h-125
            w-90
            overflow-hidden
            rounded-[48px_16px_48px_16px]
            shadow-[0_40px_80px_rgba(0,0,0,0.18)]
          "
        >
          {/* KEN BURNS */}
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
              className="object-cover"
            />
          </motion.div>

          {/* LIGHT REFLECTION */}
          <motion.div
            className="
              absolute
              inset-0
              bg-linear-to-r
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
        </motion.div>
      </AnimatePresence>

      {/* PREMIUM SLIDE INDICATOR */}
      <div
        className="absolute left-0 bottom-0 flex items-center gap-3 z-20"
        style={{
          transform: "translate(220px, 40px)",
        }}
      >
        {BACKGROUNDS.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              width: activeSlide === index ? 42 : 10,
              scale: activeSlide === index ? 1 : 0.9,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
        h-2 rounded-full
        ${
          activeSlide === index
            ? "bg-white shadow-[0_0_24px_rgba(255,255,255,0.7)]"
            : "bg-white/30"
        }
      `}
          />
        ))}
      </div>

      {/* FLOATING BADGE */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-8
          right-6
          rounded-3xl
          bg-white/90
          px-6
          py-4
          backdrop-blur-xl
          shadow-[0_20px_40px_rgba(59,130,246,0.15)]
        "
      >
        <p className="text-sm font-medium text-slate-500">
          Fakultas Teknologi Informasi
        </p>

        <h3 className="mt-1 text-xl font-bold text-slate-900">
          Universitas Andalas
        </h3>
      </motion.div>
    </div>
  );
}
