"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavItemProps {
  href?: string;
  label: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export default function NavItem({ href, label, children }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 120;

    const y =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const isActive = href
    ? pathname === href || pathname.startsWith(href + "/")
    : false;

  return (
    <div className="relative group">
      {href ? (
        <Link
          href={href}
          className={`
            relative flex items-center gap-1
            text-[14px] font-medium
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
      ) : (
        <div
          className="
            relative flex items-center gap-1
            text-[14px] font-medium
            text-gray-100
            cursor-pointer
          "
        >
          <span>{label}</span>

          {children && (
            <ChevronDown
              size={14}
              className="transition-transform duration-300 group-hover:rotate-180"
            />
          )}
        </div>
      )}

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
            <button
              key={child.href}
              type="button"
              onClick={() => {
                // Menu section landing page
                if (child.href.startsWith("/#")) {
                  const id = child.href.replace("/#", "");

                  // Jika sedang berada di landing page
                  if (pathname === "/") {
                    scrollToSection(id);
                  } else {
                    router.push(child.href);
                  }

                  return;
                }

                // Route biasa
                router.push(child.href);
              }}
              className="
                block
                w-full
                rounded-xl
                px-4
                py-3
                text-left
                text-sm
                text-slate-700
                transition-colors
                hover:bg-gray-200
                cursor-pointer
              "
            >
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
