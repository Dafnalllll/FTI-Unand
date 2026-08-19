import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
}

export default function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="
        text-sm text-white/70
        hover:text-white
        transition-colors duration-300
      "
    >
      {label}
    </Link>
  );
}
