import NavItem from "./NavItem";
import { Search } from "lucide-react";

const menus = [
  { label: "Profil", href: "/profil" },
  { label: "Program Studi", href: "/program-studi" },
  { label: "Akademik", href: "/akademik" },
  { label: "Beasiswa", href: "/beasiswa" },
  { label: "Layanan", href: "/layanan" },
  { label: "Belajar Di FTI", href: "/belajar" },
];

export default function DesktopMenu() {
  return (
    <div className="hidden lg:flex flex-1 items-center">
      {/* Menu Tengah */}
      <nav
        className="
          flex flex-1 items-center justify-center
          gap-10
          ml-16
        "
      >
        {menus.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Search */}
      <div
        className="
          flex items-center gap-2.5
          rounded-full
          border border-slate-200
          bg-slate-50
          px-4 py-2
          transition-all duration-300
          focus-within:border-gray-300
          focus-within:bg-white
          focus-within:shadow-[0_0_0_3px_rgba(148,163,184,0.1)]
        "
      >
        <Search size={16} className="text-slate-400" />

        <input
          type="text"
          placeholder="Cari..."
          className="
            w-28
            bg-transparent
            text-sm text-slate-600
            placeholder:text-slate-400
            outline-none
            transition-all duration-300
            focus:w-40
          "
        />
      </div>
    </div>
  );
}
