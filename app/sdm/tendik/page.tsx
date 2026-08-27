"use client";

import { useRef } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
import StrukturCard from "@/components/card/struktur";

import { tendikData } from "@/data/tendik";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function TendikPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="SDM"
          title="Tenaga Kependidikan"
          subtitle="Sumber daya kependidikan yang berperan dalam penyelenggaraan layanan akademik dan administrasi di Fakultas Teknologi Informasi Universitas Andalas."
        />

        {/* ================= MOBILE ================= */}
        <div className="relative mt-16 lg:hidden">
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
            {tendikData.map((item, index) => (
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
              left-1
              top-[35%]
              z-20
              -translate-y-1/2
              rounded-full
              bg-slate-900/80
              p-2
              text-white
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
              right-1
              top-[35%]
              z-20
              -translate-y-1/2
              rounded-full
              bg-slate-900/80
              p-2
              text-white
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
        <div className="mt-16 hidden lg:grid lg:grid-cols-3 lg:gap-10">
          {tendikData.map((item, index) => (
            <StrukturCard
              key={item.id}
              item={item}
              index={index}
              visible={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
