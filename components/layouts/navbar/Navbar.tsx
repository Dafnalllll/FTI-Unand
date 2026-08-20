import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border border-slate-200/60
          bg-white/80
          backdrop-blur-xl
          shadow-lg
        "
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">
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
