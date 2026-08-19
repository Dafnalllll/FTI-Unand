"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const LOGO_SRC = "/icons/Logo FTI.webp";
const RING_SIZE = 320;
const RING_STROKE = 5;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const COUNT_DURATION = 2.1;
const STATUS_MESSAGES = [
  "Menyiapkan antarmuka",
  "Memuat data",
  "Hampir selesai",
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const EASE_IN_QUAD = [0.76, 0, 0.24, 1] as const;

interface LoadingProps {
  label?: string;
  subtitle?: string;
  fullScreen?: boolean;
}

export default function Loading({
  label = "Fakultas Teknologi Informasi",
  subtitle = "Universitas Andalas",
  fullScreen = true,
}: LoadingProps) {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      progress.set(1);
      return;
    }
    const controls = animate(progress, 1, {
      duration: COUNT_DURATION,
      ease: [...EASE_OUT_EXPO],
    });
    return () => controls.stop();
  }, [progress, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(
      () => setStatusIndex((index) => (index + 1) % STATUS_MESSAGES.length),
      900,
    );
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const dashOffset = useTransform(
    progress,
    (value) => RING_CIRCUMFERENCE * (1 - value),
  );
  const percent = useTransform(
    progress,
    (value) => `${Math.round(value * 100)}`,
  );

  const containerClass = fullScreen
    ? "fixed inset-0 z-[100] flex items-center justify-center"
    : "flex min-h-[60vh] w-full items-center justify-center";

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Memuat konten"
      className={`${containerClass} overflow-hidden bg-white`}
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={
        reduceMotion
          ? { opacity: 0, transition: { duration: 0.3 } }
          : {
              clipPath: "inset(0% 0% 100% 0%)",
              transition: { duration: 0.7, ease: [...EASE_IN_QUAD] },
            }
      }
    >
      {/* Aurora background */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-40 -top-40 h-112 w-md rounded-full bg-white "
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.25, 1] }
        }
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 h-120 w-120 rounded-full bg-white "
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -70, 0], y: [0, -40, 0], scale: [1.1, 1, 1.1] }
        }
        transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(156,163,175,0.08)_1px,transparent_1px)] bg-size-[26px_26px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(31,41,55,0.65)_100%)]"
      />

      {/* Exit flash */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0, scale: 0.1 }}
        exit={
          reduceMotion
            ? { opacity: 0 }
            : {
                opacity: [0, 1, 0],
                scale: [0.1, 1.2, 1.5],
                transition: { duration: 0.7, ease: "easeOut" },
              }
        }
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        exit={
          reduceMotion
            ? { opacity: 0 }
            : {
                opacity: 0,
                scale: 0.9,
                filter: "blur(10px)",
                transition: { duration: 0.45, ease: "easeIn" },
              }
        }
      >
        {/* Progress ring + logo */}
        <div
          className="relative"
          style={{ width: RING_SIZE, height: RING_SIZE }}
        >
          {/* Orbiting satellites */}
          <motion.div
            className="absolute inset-0"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            aria-hidden="true"
          ></motion.div>
          <motion.div
            className="absolute inset-7"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
            aria-hidden="true"
          >
            <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gray-300 " />
          </motion.div>

          <svg
            className="absolute inset-0 -rotate-90"
            viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RING_RADIUS}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={RING_STROKE}
            />
            <motion.circle
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RING_RADIUS}
              stroke="url(#loadingRingGradient)"
              strokeWidth={RING_STROKE}
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              style={{ strokeDashoffset: dashOffset }}
            />
            <defs>
              <linearGradient
                id="loadingRingGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <motion.div
              className="absolute h-40 w-40 rounded-full bg-white "
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }
              }
              transition={{
                repeat: Infinity,
                duration: 2.4,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
            <div className="relative h-24 w-24 sm:h-28 sm:w-28">
              <motion.div
                className="relative h-full w-full"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.2,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-full w-full items-center justify-center overflow-hidden  p-2 ">
                  <span className="relative block h-full w-full">
                    <Image
                      src={LOGO_SRC}
                      alt="Logo Fakultas Teknologi Informasi Universitas Andalas"
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-contain"
                    />
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="font-mono text-3xl font-bold tabular-nums tracking-tight text-gray-600">
              <motion.span>{percent}</motion.span>
              <span className="text-gray-600">%</span>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <motion.h2
            className="bg-clip-text text-lg font-bold tracking-[0.2em] text-transparent sm:text-xl"
            style={{
              backgroundImage:
                "linear-gradient(100deg,#6b7280,#ffffff 45%,#d1d5db 60%,#6b7280)",
              backgroundSize: "200% 100%",
            }}
            animate={
              reduceMotion
                ? undefined
                : { backgroundPosition: ["0% 0%", "200% 0%"] }
            }
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
          >
            {label.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35 + index * 0.03,
                  duration: 0.5,
                  ease: [...EASE_OUT_EXPO],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Cycling status text */}
        <div className="mt-7 h-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              className="text-xs text-zinc-500"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {STATUS_MESSAGES[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
