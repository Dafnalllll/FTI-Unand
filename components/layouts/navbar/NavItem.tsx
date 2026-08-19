import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="
        text-[17px]
        font-medium
        text-slate-600
        transition-colors
        hover:text-sky-600
      "
    >
      {label}
    </Link>
  );
}
