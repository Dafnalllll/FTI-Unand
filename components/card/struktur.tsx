"use client";

import Image from "next/image";
import { pimpinanData } from "@/data/pimpinan";
import { motion } from "framer-motion";

interface StrukturCardProps {
  item: (typeof pimpinanData)[number];
  index: number;
  visible: boolean;
}

export default function StrukturCard({
  item,
  index,
}: StrukturCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        flex
        flex-col
        items-center
        text-center
        cursor-pointer
      "
    >
      {/* Foto */}
      <div className="relative">
        <div
          className="
            relative
            h-64
            w-64
            overflow-hidden
            rounded-full
            border-8
            border-slate-300
            shadow-lg
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:border-slate-500
          "
        >
          <Image
            src={item.foto}
            alt={item.nama}
            fill
            sizes="(max-width:768px) 256px, 288px"
            className="object-cover"
            style={{
              objectPosition: `${item.posX ?? "50%"} ${item.posY ?? "50%"}`,
            }}
          />
        </div>
      </div>

      {/* Nama */}
      <h3
        className="
          mt-6
          max-w-xs
          text-xl
          font-bold
          text-slate-900
        "
      >
        {item.nama}
      </h3>

      {/* Jabatan */}
      <p
        className="
          mt-2
          text-lg
          text-gray-700
        "
      >
        {item.jabatan}
      </p>
    </motion.article>
  );
}