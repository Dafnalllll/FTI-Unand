"use client";

import EstimasiBiayaCard from "@/components/card/estimasibiaya";
import OpsiAkomodasiCard from "@/components/card/opsiakomodasi";
import AkomodasiGallery from "@/components/card/akomodasigallery";

export default function AkomodasiSection() {
  return (
    <div className="relative">
      <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="space-y-10">
          <EstimasiBiayaCard />
          <OpsiAkomodasiCard />
        </div>

        <AkomodasiGallery />
      </div>
    </div>
  );
}
