"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/sections/Belajar/BelajarItem";
import { belajarData } from "@/data/belajar";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BelajarPage() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      {/* ============ CONTENT ============ */}
      <section className="relative  pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="container mx-auto px-6 pt-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <SectionTitle
              badge="Belajar di FTI"
              title="Apa yang Menantimu?"
              subtitle="Dari mata kuliah, karya mahasiswa, hingga peluang magang — temukan semua yang kamu butuhkan untuk sukses selama belajar di FTI."
            />
          </motion.div>

          {/* Timeline */}
          <div className="mt-4 space-y-16 lg:space-y-24">
            {belajarData.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
