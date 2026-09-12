"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import LowonganCard from "@/components/card/lowongan";
import LowonganFilter, {
  type FilterType,
} from "@/components/sections/Belajar/LowonganFilter";
import Pagination from "@/components/ui/Pagination";
import { magangData } from "@/data/magang";

const ITEMS_PER_PAGE = 6;

export default function MagangPertukaranSection() {
  const [activeType, setActiveType] = useState<FilterType>("Semua");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = magangData.filter((item) => {
    const matchesType = activeType === "Semua" || item.type === activeType;

    const query = search.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      item.title.toLowerCase().includes(query) ||
      item.company.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);

    const matchesLocation =
      location === "" ||
      (location === "Indonesia" && item.location !== "Jepang") ||
      (location === "Luar Negeri" && item.location === "Jepang");

    return matchesType && matchesSearch && matchesLocation;
  });

  const handleTypeChange = (type: FilterType) => {
    setActiveType(type);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
  const paginatedList = filteredList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Peluang Mahasiswa"
          title="Magang dan Pertukaran Mahasiswa"
          subtitle="Temukan berbagai peluang pengembangan diri melalui program magang industri, pertukaran mahasiswa, dan kerja sama internasional."
        />

        <div className="mt-16 rounded-4xl border border-gray-200 p-6 ">
          <LowonganFilter
            activeType={activeType}
            search={search}
            location={location}
            onTypeChange={handleTypeChange}
            onSearchChange={handleSearchChange}
            onLocationChange={handleLocationChange}
          />

          <div className="mt-14">
            <div className="grid gap-8 lg:grid-cols-3">
              {paginatedList.map((item, index) => (
                <LowonganCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="mt-14"
          />
        </div>
      </div>
    </section>
  );
}
