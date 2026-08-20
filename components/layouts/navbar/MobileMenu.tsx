"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronRight } from "lucide-react";

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
          text-slate-600 hover:bg-slate-100
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
            className="fixed inset-0   z-40"
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
              fixed inset-x-0 top-21 z-50
              bg-white/95 backdrop-blur-xl
              border-b border-slate-200/60
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]
              origin-top
            "
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Search Bar */}
            <motion.div
              className="px-6 pt-6 pb-4"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div
                className="
                  flex items-center gap-2.5
                  bg-slate-50 rounded-full
                  border border-slate-200
                  px-4 py-2.5
                  focus-within:border-gray-800
                  transition-all duration-300
                "
              >
                <Search size={15} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Cari di FTI..."
                  className="
                    bg-transparent outline-none
                    text-sm text-slate-600
                    placeholder:text-slate-400
                    w-full
                  "
                />
              </div>
            </motion.div>

            {/* Menu Items */}
            <nav className="flex flex-col px-6 pb-6">
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
                        py-3.5
                        border-b border-slate-100 last:border-b-0
                        text-[15px] font-medium
                        transition-colors duration-200
                        ${
                          isActive
                            ? "text-gray-600"
                            : "text-slate-600 hover:text-slate-900"
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
                                ? "bg-gray-900 scale-100"
                                : "bg-gray-400 scale-75 group-hover:bg-gray-300 group-hover:scale-100"
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
                              ? "text-gray-600 translate-x-0"
                              : "text-gray-400 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                          }
                        `}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

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
