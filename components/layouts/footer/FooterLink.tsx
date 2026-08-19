import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FooterLinkProps {
  href: string;
  label: string;
}

export default function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="
        group relative flex items-center gap-1.5
        text-sm text-slate-400
        hover:text-white
        transition-colors duration-300
      "
    >
      <ChevronRight
        size={12}
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
        bg-linear-to-r from-white via-gray-300 to-gray-500
        group-hover:w-full
        transition-all duration-300
      "
      />
    </Link>
  );
}
