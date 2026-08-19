import Link from "next/link";
import { ReactNode } from "react";

interface FooterSocialProps {
  href: string;
  icon: ReactNode;
}

export default function FooterSocial({ href, icon }: FooterSocialProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        flex items-center justify-center
        w-10 h-10
        rounded-full
        border border-white/20
        text-white/70
        hover:text-white
        hover:border-white/40
        transition-all duration-300
      "
    >
      {icon}
    </Link>
  );
}
