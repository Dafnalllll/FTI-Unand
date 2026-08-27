"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import StrukturCard from "@/components/card/struktur";

import { pimpinanData } from "@/data/struktur";

export default function Struktur() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="struktur"
      className="relative overflow-hidden py-24 scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            badge="Profil"
            title="Jajaran Dekanat"
            subtitle="Dekan dan Wakil Dekan Fakultas Teknologi Informasi Universitas Andalas yang memimpin pengembangan pendidikan, penelitian, pengabdian kepada masyarakat, serta tata kelola fakultas."
          />
        </motion.div>

        {/* Cards */}
        <div
          ref={sectionRef}
          className="relative mt-20 grid gap-12 md:grid-cols-3"
        >
          {pimpinanData.map((item, index) => {
            let mobileOrder = "";

            if (item.id === 2) mobileOrder = "order-1 md:order-2";
            if (item.id === 1) mobileOrder = "order-2 md:order-1";
            if (item.id === 3) mobileOrder = "order-3 md:order-3";

            return (
              <div key={item.id} className={mobileOrder}>
                <StrukturCard item={item} index={index} visible={true} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
