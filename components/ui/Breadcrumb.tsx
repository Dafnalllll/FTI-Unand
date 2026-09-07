"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="
      hidden md:inline-flex
      flex-wrap items-center
      rounded-full
      border border-slate-200
    bg-white/90
      px-4 py-2
      shadow-sm
      backdrop-blur-sm
      "
    >
      <Link
        href="/"
        className="flex items-center text-slate-500 transition-colors hover:text-primary"
      >
        <Home className="h-4 w-4" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            <ChevronRight className="mx-2 h-4 w-4 text-slate-400" />

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-semibold text-primary">
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
