// data/navigation.ts

import { ROUTES } from "@/lib/routes";

export const navigation = [
  {
    label: "Profil",
    href: ROUTES.PROFIL,
  },
  {
    label: "Program Studi",
    href: ROUTES.PRODI,
  },
  {
    label: "Akademik",
    href: ROUTES.AKADEMIK,
  },
  {
    label: "Beasiswa",
    href: ROUTES.BEASISWA,
  },
  {
    label: "Layanan",
    href: ROUTES.LAYANAN,
  },
  {
    label: "Belajar Di FTI",
    href: ROUTES.BELAJAR,
  },
] as const;
