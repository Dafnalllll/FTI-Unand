"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import StrukturCard from "@/components/card/struktur";

import { pimpinanData } from "@/data/pimpinan";

export default function PimpinanPage() {
  const wd1 = pimpinanData.find((p) => p.id === 1);
  const dekan = pimpinanData.find((p) => p.id === 2);
  const wd2 = pimpinanData.find((p) => p.id === 3);
  const senat = pimpinanData.find((p) => p.id === 4);
  const gpm = pimpinanData.find((p) => p.id === 5);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="SDM"
          title="Pimpinan"
          subtitle="Jajaran pimpinan yang berperan dalam pengelolaan dan pengembangan Fakultas Teknologi Informasi Universitas Andalas."
        />

        <>
          {/* Mobile */}
          <div className="mt-16 flex flex-col gap-8 md:hidden">
            <StrukturCard item={dekan!} index={0} visible={true} />
            <StrukturCard item={wd1!} index={1} visible={true} />
            <StrukturCard item={wd2!} index={2} visible={true} />
            <StrukturCard item={senat!} index={3} visible={true} />
            <StrukturCard item={gpm!} index={4} visible={true} />
          </div>

          {/* Desktop Formasi 3-2 */}
          <div className="mt-16 hidden md:block">
            {/* Baris 1 */}
            <div className="grid grid-cols-3 gap-8">
              <StrukturCard item={wd1!} index={0} visible={true} />
              <StrukturCard item={dekan!} index={1} visible={true} />
              <StrukturCard item={wd2!} index={2} visible={true} />
            </div>

            {/* Baris 2 */}
            <div className="mt-12 flex justify-center">
              <div className="grid w-full max-w-3xl grid-cols-2 gap-8">
                <StrukturCard item={senat!} index={3} visible={true} />
                <StrukturCard item={gpm!} index={4} visible={true} />
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
}
