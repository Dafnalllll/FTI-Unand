"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

type PageItem = number | "left-ellipsis" | "right-ellipsis";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

/**
 * Builds the list of page numbers and ellipsis separators to display,
 * collapsing long ranges so only relevant pages plus first/last appear.
 */
function buildPageItems(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): PageItem[] {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis) {
    const items: PageItem[] = [];
    for (let page = 1; page <= rightSiblingIndex; page++) items.push(page);
    items.push("right-ellipsis");
    return items;
  }

  if (!shouldShowRightEllipsis) {
    const items: PageItem[] = ["left-ellipsis"];
    for (let page = leftSiblingIndex; page <= totalPages; page++) {
      items.push(page);
    }
    return items;
  }

  const items: PageItem[] = ["left-ellipsis"];
  for (let page = leftSiblingIndex; page <= rightSiblingIndex; page++) {
    items.push(page);
  }
  items.push("right-ellipsis");
  return items;
}

const BASE_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer";

const IDLE_BUTTON_CLASS =
  "border-slate-200 bg-white text-slate-600 hover:border-gray-400 hover:text-gray-600";

const DISABLED_BUTTON_CLASS =
  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageItems = buildPageItems(currentPage, totalPages, siblingCount);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <nav
      aria-label="Navigasi halaman"
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      {/* Previous */}
      <button
        type="button"
        aria-label="Halaman sebelumnya"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${BASE_BUTTON_CLASS} h-11 w-11 ${IDLE_BUTTON_CLASS} ${DISABLED_BUTTON_CLASS}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Page numbers & ellipsis */}
      {pageItems.map((item) => {
        if (item === "left-ellipsis" || item === "right-ellipsis") {
          return (
            <span
              key={item}
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center text-slate-400"
            >
              <MoreHorizontal className="h-5 w-5" />
            </span>
          );
        }

        const isActive = item === currentPage;

        return (
          <button
            key={item}
            type="button"
            aria-label={`Halaman ${item}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => handlePageChange(item)}
            className={`${BASE_BUTTON_CLASS} h-10 w-10 text-sm font-semibold ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                : IDLE_BUTTON_CLASS
            }`}
          >
            {item}
          </button>
        );
      })}

      {/* Next */}
      <button
        type="button"
        aria-label="Halaman berikutnya"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${BASE_BUTTON_CLASS} h-11 w-11 ${IDLE_BUTTON_CLASS} ${DISABLED_BUTTON_CLASS}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}
