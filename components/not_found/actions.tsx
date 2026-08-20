"use client";

import { useRouter } from "next/navigation";
import { Home, RotateCcw } from "lucide-react";

/**
 * Action buttons for the 404 page.
 * "use client" is required for the Next.js router hooks.
 */
export default function NotFoundActions() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleReload = () => {
    router.refresh();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        type="button"
        onClick={handleGoHome}
        className="
          group inline-flex h-12 w-full sm:w-auto items-center justify-center
          gap-2.5 rounded-full bg-slate-900 px-7 text-sm font-semibold text-white
          shadow-[5px_5px_0px_0px_rgba(156,163,175,0.65)]
          hover:bg-slate-800 hover:shadow-[6px_6px_0px_0px_rgba(107,114,128,0.9)]
          active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
          transition-all duration-200 cursor-pointer
        "
      >
        <Home
          size={17}
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        />
        Kembali ke Beranda
      </button>

      <button
        type="button"
        onClick={handleReload}
        className="
          inline-flex h-12 w-full sm:w-auto items-center justify-center
          gap-2.5 rounded-full border-2 border-slate-300 bg-white px-7
          text-sm font-semibold text-slate-700
          hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900
          transition-colors duration-200 cursor-pointer
        "
      >
        <RotateCcw
          size={16}
          className="transition-transform duration-500 group-hover:-rotate-180"
        />
        Muat Ulang Halaman
      </button>
    </div>
  );
}
