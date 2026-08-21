"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const mobileMenus = [
  { label: "Profil", href: "/profil" },
  { label: "Program Studi", href: "/program-studi" },
  { label: "Akademik", href: "/akademik" },
  { label: "Beasiswa", href: "/beasiswa" },
  { label: "Layanan", href: "/layanan" },
  { label: "Belajar Di FTI", href: "/belajar" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = useCallback(() => setOpen(false), []);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) close();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* ── Toggle Button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          relative flex items-center justify-center
          w-10 h-10 rounded-full
          text-gray-100 hover:bg-slate-100
          transition-colors duration-200
        "
        aria-label={open ? "Tutup menu" : "Buka menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* ── Overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
            fixed inset-0 z-40
            bg-slate-900/20
            backdrop-blur-sm
          "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* ── Menu Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
            fixed inset-x-3 top-20 z-50
            bg-gray-600 backdrop-blur-xl
            border border-slate-200/60
            rounded-3xl
            shadow-[0_25px_80px_-20px_rgba(0,0,0,0.18)]
            overflow-y-auto
            max-h-[calc(100vh-6rem)]
            origin-top
          "
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                onClick={close}
                className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-slate-100
                text-slate-600
                hover:bg-slate-200
                hover:text-slate-900
                transition-all duration-200
              "
                aria-label="Close Menu"
              >
                <X size={18} />
              </button>
            </div>
            {/* Search Bar */}
            <motion.div
              className="px-6 pt-6 pb-4"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="
                  relative
                  w-24 h-24
                  overflow-hidden
                  shrink-0
                "
                >
                  <Image
                    src="/icons/Logo FTI 2.webp"
                    alt="Logo FTI"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-black">
                    Fakultas Teknologi Informasi
                  </h3>

                  <p className="text-xs text-white">Universitas Andalas</p>
                </div>
              </div>

              {/* Search Input */}
              <Input
                placeholder="Cari di FTI..."
                className="w-full focus:w-full"
              />
            </motion.div>

            {/* Menu Items */}
            <nav className="flex flex-col px-6 pb-4">
              {mobileMenus.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.05,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`
                      group flex items-center justify-between
                      px-4 py-4
                      rounded-2xl
                      mb-2
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-slate-900 text-white shadow-lg"
                          : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md"
                      }
                    `}
                    >
                      <div className="flex items-center gap-3">
                        {/* Dot indicator */}
                        <span
                          className={`
                            w-1.5 h-1.5 rounded-full shrink-0
                            transition-all duration-300
                            ${
                              isActive
                                ? "bg-white scale-100"
                                : "bg-slate-300 scale-75 group-hover:bg-slate-500 group-hover:scale-100"
                            }
                          `}
                        />
                        <span>{item.label}</span>
                      </div>

                      <ChevronRight
                        size={14}
                        className={`
                          transition-all duration-200
                          ${
                            isActive
                              ? "text-white translate-x-0"
                              : "text-slate-400 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                          }
                        `}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Contact Button */}
            <div className="px-6 pb-6">
              <Button>Hubungi Kami</Button>
            </div>

            {/* Bottom accent */}
            <motion.div
              className="h-1 bg-linear-to-r from-gray-400 via-gray-300 to-gray-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
