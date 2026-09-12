"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Check,
  ChevronDown,
  Globe,
  LayoutGrid,
  MapPin,
  Search,
  type LucideIcon,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type FilterType = "Semua" | "Magang" | "Pertukaran";

interface LowonganFilterProps {
  activeType: FilterType;
  search: string;
  location: string;
  onTypeChange: (type: FilterType) => void;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

interface TabOption {
  value: FilterType;
  label: string;
  icon: LucideIcon;
}

const TABS: TabOption[] = [
  { value: "Semua", label: "Semua Lowongan", icon: LayoutGrid },
  { value: "Magang", label: "Magang", icon: Briefcase },
  { value: "Pertukaran", label: "Pertukaran", icon: Globe },
];

const LOCATION_OPTIONS = [
  { value: "", label: "Semua Lokasi" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Luar Negeri", label: "Luar Negeri" },
];

export default function LowonganFilter({
  activeType,
  search,
  location,
  onTypeChange,
  onSearchChange,
  onLocationChange,
}: LowonganFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLocation =
    LOCATION_OPTIONS.find((option) => option.value === location) ??
    LOCATION_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="grid gap-5">
      {/* Type tabs */}
      <div className="flex flex-wrap gap-3">
        {TABS.map(({ value, label, icon: Icon }) => {
          const isActive = activeType === value;

          return (
            <button
              key={value}
              onClick={() => onTypeChange(value)}
              className={`
                inline-flex items-center gap-2 rounded-full px-6 py-3
                text-sm font-semibold transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "bg-gray-600 text-white "
                    : "border border-slate-200 bg-white text-slate-600 hover:border-gray-400 hover:text-gray-600"
                }
              `}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          );
        })}
      </div>

      {/* Search + Location */}
      <div className="grid gap-4 lg:grid-cols-[1fr_250px]">
        {/* Search input */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari lowongan, perusahaan, atau lokasi..."
            className="
              w-full rounded-2xl border border-slate-200 bg-slate-50
              py-4 pl-12 pr-5 text-sm text-slate-700 outline-none
              transition-all duration-300
              placeholder:text-slate-400
              focus:border-gray-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]
            "
          />
        </div>

        {/* Custom location dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`
              flex w-full items-center justify-between gap-2 rounded-2xl border
              px-5 py-4 text-sm font-medium transition-all duration-300
              ${
                isOpen || location
                  ? "border-gray-400 bg-white text-gray-600 shadow-[0_0_0_4px_rgba(0,0,0,0.12)]"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-gray-300"
              }
            `}
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {activeLocation.label}
            </span>

            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="
                  absolute z-30 mt-2 w-full overflow-hidden rounded-2xl
                  border border-slate-200 bg-white p-1.5
                  shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                "
              >
                {LOCATION_OPTIONS.map((option) => {
                  const isSelected = location === option.value;

                  return (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => {
                          onLocationChange(option.value);
                          setIsOpen(false);
                        }}
                        className={`
                          flex w-full items-center justify-between gap-2
                          rounded-xl px-4 py-3 text-sm font-medium
                          transition-colors duration-200
                          ${
                            isSelected
                              ? "bg-indigo-50 text-indigo-700"
                              : "text-slate-600 hover:bg-slate-100"
                          }
                        `}
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {option.label}
                        </span>

                        {isSelected && <Check className="h-4 w-4" />}
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
