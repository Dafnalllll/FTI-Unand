import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/public/icons/Logo FTI.webp" alt="FTI" className="h-16" />
        </div>

        {/* Desktop */}
        <DesktopMenu />

        {/* Mobile */}
        <MobileMenu />
      </div>
    </header>
  );
}
