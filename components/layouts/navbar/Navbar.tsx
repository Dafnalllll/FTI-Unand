import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import NavbarPattern from "./NavbarPattern";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          rounded-2xl
          bg-gray-600
          border border-white/50
          shadow-lg
          overflow-visible
        "
      >
        {/* Corak dekoratif bertema IT */}
        <NavbarPattern />

        <div className="relative flex h-20 items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/icons/Logo FTI 2.webp"
              alt="FTI"
              width={75}
              height={75}
              className="transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop */}
          <DesktopMenu />

          {/* Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
