import NavItem from "./NavItem";
import Input from "@/components/ui/Input";

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
      <Input placeholder="Cari..." />
    </div>
  );
}
