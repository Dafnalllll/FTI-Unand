"use client";

import { useRef } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
import StrukturCard from "@/components/card/struktur";

import { dosenData } from "@/data/dosen";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

function DosenSection({
  title,
  data,
}: {
  title: string;
  data: typeof dosenData;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mt-24">
      <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
        {title}
      </h2>

      {/* ================= MOBILE ================= */}
      <div className="relative lg:hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          centeredSlides
          slidesPerView={1.15}
          spaceBetween={24}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <StrukturCard item={item} index={index} visible={true} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            absolute
            left-2
            top-[35%]
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/80
            p-2
            shadow-lg
            backdrop-blur-sm
            transition
            hover:scale-110
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Next */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            absolute
            right-2
            top-[35%]
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/80
            p-2
            shadow-lg
            backdrop-blur-sm
            transition
            hover:scale-110
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10">
        {data.map((item, index) => (
          <StrukturCard
            key={item.id}
            item={item}
            index={index}
            visible={true}
          />
        ))}
      </div>
    </div>
  );
}

export default function DosenPage() {
  const tk = dosenData.filter((item) => item.prodi === "Teknik Komputer");

  const si = dosenData.filter((item) => item.prodi === "Sistem Informasi");

  const ifm = dosenData.filter((item) => item.prodi === "Informatika");

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="SDM"
          title="Dosen"
          subtitle="Akademisi Fakultas Teknologi Informasi Universitas Andalas yang berperan dalam pengembangan ilmu pengetahuan, teknologi, dan inovasi."
        />

        {tk.length > 0 && <DosenSection title="Teknik Komputer" data={tk} />}

        {si.length > 0 && <DosenSection title="Sistem Informasi" data={si} />}

        {ifm.length > 0 && <DosenSection title="Informatika" data={ifm} />}
      </div>
    </section>
  );
}
