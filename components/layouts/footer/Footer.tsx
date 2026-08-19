import Image from "next/image";
import Link from "next/link";

import FooterLink from "./FooterLink";
import FooterSocial from "./FooterSocial";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-br
        from-slate-800
        via-slate-700
        to-slate-600
        text-white
      "
    >
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo-fti.png"
                alt="FTI Unand"
                width={70}
                height={70}
              />

              <div>
                <h3 className="font-bold text-xl">
                  Fakultas Teknologi Informasi
                </h3>

                <p className="text-sm text-white/70">Universitas Andalas</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Menjadi fakultas unggul dalam pengembangan teknologi informasi
              yang inovatif, berkarakter, dan berdaya saing global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>

            <div className="flex flex-col gap-3">
              <FooterLink href="/" label="Beranda" />
              <FooterLink href="/profil" label="Profil" />
              <FooterLink href="/akademik" label="Akademik" />
              <FooterLink href="/berita" label="Berita" />
              <FooterLink href="/kontak" label="Kontak" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>

            <div className="space-y-4 text-white/80">
              <div className="flex gap-3">
                <Mail size={18} />
                <span>sekretariat@it.unand.ac.id</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+62 812-6742-6133</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Kampus Unand Limau Manis, Padang, Sumatera Barat</span>
              </div>
            </div>
          </div>

          {/* Maps */}
          <div>
            <h4 className="font-semibold mb-4">Lokasi</h4>

            <div
              className="
                overflow-hidden
                rounded-2xl
                border border-white/10
                h-[220px]
              "
            >
              <iframe
                title="FTI Unand"
                width="100%"
                height="100%"
                loading="lazy"
                src="https://maps.google.com/maps?q=Fakultas%20Teknologi%20Informasi%20Universitas%20Andalas&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5">
          <p className="text-center text-sm text-white/60">
            © 2026 Fakultas Teknologi Informasi Universitas Andalas. All Rights
            Reserved.
          </p>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="border-t border-white/10 bg-black/10">
        <div
          className="
            container mx-auto
            px-6 py-6
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <Image
            src="/kemendikbud.png"
            alt="Kemendikbud"
            width={250}
            height={80}
          />

          <Image
            src="/ristekdikti.png"
            alt="Ristekdikti"
            width={120}
            height={80}
          />
        </div>
      </div>
    </footer>
  );
}
