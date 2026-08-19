import NavItem from "./NavItem";
import { Search } from "lucide-react";

const menus = [
  {
    label: "Profil",
    href: "/profil",
  },
  {
    label: "Program Studi",
    href: "/program-studi",
  },
  {
    label: "Akademik",
    href: "/akademik",
  },
  {
    label: "Beasiswa",
    href: "/beasiswa",
  },
  {
    label: "Layanan",
    href: "/layanan",
  },
  {
    label: "Belajar Di FTI",
    href: "/belajar",
  },
];

export default function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center gap-10">
      <nav className="flex items-center gap-10">
        {menus.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          bg-slate-100
          px-4
          py-3
        "
      >
        <Search size={18} />

        <input
          type="text"
          placeholder="Pencarian..."
          className="
            bg-transparent
            outline-none
            text-sm
            w-32
          "
        />
      </div>
    </div>
  );
}
