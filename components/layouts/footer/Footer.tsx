import Image from "next/image";

import FooterLink from "./FooterLink";
import FooterSocial from "./FooterSocial";
import FooterPattern from "./FooterPattern";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <FooterPattern />
      {/* Decorative Top Accent */}
      <div className="h-1.5 bg-linear-to-r from-gray-500 via-gray-400 to-gray-500" />

      {/* Background Pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)]
          bg-size-[32px_32px]
          pointer-events-none
        "
      />

      {/* Main Footer */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-5">
              <div>
                <Image
                  src="/icons/Logo FTI 2.webp"
                  alt="FTI Unand"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Menjadi fakultas unggul dalam pengembangan teknologi informasi
              yang inovatif, berkarakter, dan berdaya saing global.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <FooterSocial
                href="https://www.instagram.com/ftiunand.official/"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
              <FooterSocial
                href="https://youtube.com/@ftiunand"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                }
              />
              <FooterSocial
                href="https://twitter.com/ftiunand"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Navigasi
            </h4>

            <div className="flex flex-col gap-2.5">
              <FooterLink href="/" label="Beranda" />
              <FooterLink href="/profil" label="Profil" />
              <FooterLink href="/akademik" label="Akademik" />
              <FooterLink href="/berita" label="Berita" />
              <FooterLink href="/kontak" label="Kontak" />
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Kontak Kami
            </h4>

            <div className="space-y-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sekretariat@it.unand.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group flex items-start gap-3
                text-sm text-slate-400
                hover:text-white transition-colors duration-300
              "
              >
                <span
                  className="
                  mt-0.5 shrink-0 w-8 h-8
                  rounded-lg bg-white/5 border border-white/10
                  flex items-center justify-center
                  group-hover:bg-gray-500/10 group-hover:border-gray-500/30
                  transition-all duration-300
                "
                >
                  <Mail size={14} className="text-gray-400" />
                </span>

                <span className="leading-relaxed">
                  sekretariat@it.unand.ac.id
                </span>
              </a>

              <a
                href="https://wa.me/6281267426133?text=Halo%20FTI%20Universitas%20Andalas"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group flex items-start gap-3
                text-sm text-slate-400
                hover:text-white transition-colors duration-300
              "
              >
                <span
                  className="
                  mt-0.5 shrink-0 w-8 h-8
                  rounded-lg bg-white/5 border border-white/10
                  flex items-center justify-center
                  group-hover:bg-gray-500/10 group-hover:border-gray-500/30
                  transition-all duration-300
                "
                >
                  <Phone size={14} className="text-gray-400" />
                </span>

                <span className="leading-relaxed">+62 812-6742-6133</span>
              </a>

              <a
                href="https://maps.google.com/maps?q=Fakultas+Teknologi+Informasi+Universitas+Andalas"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-start gap-3
                  text-sm text-slate-400
                  hover:text-white transition-colors duration-300
                "
              >
                <span
                  className="
                    mt-0.5 shrink-0 w-8 h-8
                    rounded-lg bg-white/5 border border-white/10
                    flex items-center justify-center
                    group-hover:bg-gray-500/10 group-hover:border-gray-500/30
                    transition-all duration-300
                  "
                >
                  <MapPin size={14} className="text-gray-400" />
                </span>
                <span className="leading-relaxed">
                  Kampus Unand Limau Manis,
                  <br />
                  Padang, Sumatera Barat
                </span>
              </a>
            </div>
          </div>

          {/* Maps */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Lokasi Kami
            </h4>

            <div
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/4
              backdrop-blur-sm
              hover:-translate-y-1
              hover:border-gray-300/20
              shadow-[0_12px_40px_rgba(0,0,0,0.25)]
              hover:shadow-[0_24px_80px_rgba(0,0,0,0.4)]
              transition-all duration-500
            "
            >
              {/* Glow */}
              <div
                className="
                absolute
                -top-16
                -right-16
                h-48
                w-48
                rounded-full
                bg-gray-300/10
                blur-3xl
                z-10
              "
              />

              {/* Soft Overlay */}
              <div
                className="
                absolute inset-0 z-10                  
                bg-linear-to-t
                from-black/20
                via-transparent
                to-transparent
                pointer-events-none
              "
              />

              {/* Map */}
              <iframe
                title="FTI Unand"
                width="100%"
                height="260"
                loading="lazy"
                src="https://maps.google.com/maps?q=Fakultas%20Teknologi%20Informasi%20Universitas%20Andalas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="
                h-65
                w-full
                grayscale-10
                brightness-95
                group-hover:brightness-100
                transition-all duration-700
              "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div
            className="
              flex flex-col md:flex-row
              items-center justify-between gap-3
            "
          >
            <p className="text-xs text-slate-500">
              © 2026 Fakultas Teknologi Informasi Universitas Andalas. All
              Rights Reserved.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span>Made by</span>
              <span>FTI Unand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div>
        <div
          className="
            container mx-auto
            px-6 py-5
            flex flex-col md:flex-row
            items-center justify-between
            gap-5
          "
        >
          <div className="flex items-center gap-6">
            <Image
              src="/icons/Kedjajaanbangsa.webp"
              alt="Kedjajaan Bangsa"
              width={180}
              height={60}
            />
            <Image
              src="/icons/RISTEKDIKTI.webp"
              alt="Ristekdikti"
              width={100}
              height={60}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
