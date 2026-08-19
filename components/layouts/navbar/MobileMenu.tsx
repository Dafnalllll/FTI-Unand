"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>

      {open && (
        <div
          className="
            absolute
            left-0
            top-24
            w-full
            border-t
            bg-white
            shadow-lg
          "
        >
          <nav className="flex flex-col p-6">
            <a href="#">Profil</a>
            <a href="#">Program Studi</a>
            <a href="#">Akademik</a>
            <a href="#">Beasiswa</a>
            <a href="#">Layanan</a>
            <a href="#">Belajar Di FTI</a>
          </nav>
        </div>
      )}
    </div>
  );
}
