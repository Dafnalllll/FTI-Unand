import NavItem from "./NavItem";
import Input from "@/components/ui/Input";
import { navigation } from "@/data/navigation";

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
        {navigation.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Search */}
      <Input placeholder="Cari..." />
    </div>
  );
}
