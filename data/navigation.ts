// data/navigation.ts

import { ROUTES } from "@/lib/routes";

export const navigation = [
  {
    label: "Profil",
    href: ROUTES.PROFIL,
    children: [
      {
        label: "Visi & Misi",
        href: "/profil/visi-misi",
      },
      {
        label: "Tujuan",
        href: "/profil/tujuan",
      },
    ],
  },
  {
    label: "SDM",
    href: ROUTES.SDM,
    children: [
      {
        label: "Pimpinan",
        href: "/sdm/pimpinan",
      },
      {
        label: "Dosen",
        href: "/sdm/dosen",
      },
      {
        label: "Tenaga Kependidikan",
        href: "/sdm/tenaga-kependidikan",
      },
    ],
  },
  {
    label: "Prodi",
    href: ROUTES.PRODI,
    children: [
      {
        label: "Teknik Komputer",
        href: "/prodi/teknik-komputer",
      },
      {
        label: "Sistem Informasi",
        href: "/prodi/sistem-informasi",
      },
      {
        label: "Informatika",
        href: "/prodi/informatika",
      },
    ],
  },
  {
    label: "Akademik",
    href: ROUTES.AKADEMIK,

    children: [
      {
        label: "Kalender",
        href: "/akademik/kalender",
      },
    ],
  },
  {
    label: "Program",
    href: ROUTES.PROGRAM,
    children: [
      {
        label: "Beasiswa",
        href: "/program/beasiswa",
      },
      {
        label: "Magang",
        href: "/program/magang",
      },
    ],
  },
  {
    label: "Layanan",
    href: ROUTES.LAYANAN,
    children: [
      {
        label: "Kemahasiswaan",
        href: "/layanan/kemahasiswaan",
      },
      {
        label: "Akademik",
        href: "/layanan/akademik",
      },
      {
        label: "Umum",
        href: "/layanan/umum",
      },
      {
        label: "Download",
        href: "/layanan/download",
      }
    ],
  },
  {
    label: "Belajar Di FTI",
    href: ROUTES.BELAJAR,
  },
  {
    label: "Lainnya",
    href: ROUTES.LAIN,
    children: [
      {
        label: "Galeri",
        href: "/lainnya/galeri",
      },
      {
        label: "Berita",
        href: "/lainnya/berita",
      },
    ],
  },
];
