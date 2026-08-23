"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export default function NavItem({ href, label, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`
        relative flex items-center gap-1
        text-[15px] font-medium
        transition-colors duration-300
        ${isActive ? "text-gray-400" : "text-gray-100"}
      `}
      >
        <span>{label}</span>

        {children && (
          <ChevronDown
            size={14}
            className="transition-transform duration-300 group-hover:rotate-180"
          />
        )}

        <span
          className={`
          absolute -bottom-1 left-0 h-0.5
          rounded-full
          bg-gray-400
          transition-all duration-300 ease-out
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
        />
      </Link>

      {children && (
        <div
          className="
          invisible
          absolute
          left-1/2
          top-full
          z-50
          mt-4
          w-56
          -translate-x-1/2
          rounded-xl
          bg-white
          opacity-0
          shadow-lg
          transition-all
          duration-300
          group-hover:visible
          group-hover:opacity-100
        "
        >
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="
              block
              px-4
              py-3
              text-sm
              rounded-xl
              text-slate-700
              transition-colors
              hover:bg-gray-200
            "
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
