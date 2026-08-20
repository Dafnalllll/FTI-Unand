"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`
        relative text-[15px] font-medium
        transition-colors duration-300
        group
        ${isActive ? "text-gray-400" : "text-gray-100"}
      `}
    >
      <span>{label}</span>

      {/* Underline indicator */}
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
  );
}
