import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FooterLinkProps {
  href: string;
  label: string;
  isChild?: boolean;
}

export default function FooterLink({ href, label, isChild = false, }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={`
      group relative flex items-center gap-1.5
      transition-colors duration-300
    ${
      isChild
        ? "pl-4 text-xs text-white hover:text-slate-300"
        : "text-sm font-medium text-slate-400 hover:text-white"
    }
  `}
    >
      <ChevronRight
        size={isChild ? 10 : 12}
        className="
      text-gray-300 opacity-0 -ml-4
        group-hover:opacity-100 group-hover:ml-0
        transition-all duration-300
      "
      />

      <span>{label}</span>

      <span
        className="
        absolute bottom-0 left-0 w-0 h-px
        group-hover:w-full
        transition-all duration-300
      "
      />
    </Link>
  );
}
