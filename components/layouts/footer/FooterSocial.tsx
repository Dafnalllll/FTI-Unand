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
      rel="noopener noreferrer"
      className="
      group flex items-center justify-center
      w-10 h-10
      rounded-xl
      bg-white/5 border border-white/10
      text-slate-400
      hover:text-white
      hover:bg-gray-500/10 hover:border-gray-500/30
      shadow-[2px_2px_0px_0px_rgba(156,163,175,0)]
      hover:shadow-[2px_2px_0px_0px_rgba(156,163,175,0.2)]
      transition-all duration-300
    "
    >
      {icon}
    </Link>
  );
}
