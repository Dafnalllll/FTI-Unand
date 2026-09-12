import { BookOpen, Rocket, Wallet, Briefcase } from "lucide-react";
import type { BelajarTimelineItemData } from "@/components/sections/Belajar/BelajarItem";

export const belajarData: BelajarTimelineItemData[] = [
  {
    title: "Apa yang Dipelajari",
    description:
      "Pelajari mata kuliah, bidang keahlian, dan kompetensi yang akan kamu kuasai selama menempuh pendidikan di setiap program studi FTI.",
    image: "/images/belajar/pelajar.webp",
    align: "left",
    href: "/belajar-di-fti/apa-yang-dipelajari",
    icon: BookOpen,
    accentBg: "bg-emerald-500/15",
    accentText: "text-emerald-600",
    accentBar: "bg-emerald-500",
  },
  {
    title: "Karya Mahasiswa",
    description:
      "Lihat berbagai aplikasi, proyek teknologi, penelitian, dan inovasi yang telah berhasil dikembangkan oleh mahasiswa FTI.",
    image: "/images/belajar/karya.webp",
    align: "right",
    href: "/belajar-di-fti/karya-mahasiswa",
    icon: Rocket,
    accentBg: "bg-orange-500/15",
    accentText: "text-orange-600",
    accentBar: "bg-orange-500",
  },
  {
    title: "Biaya Hidup & Akomodasi",
    description:
      "Ketahui estimasi dana yang perlu kamu siapkan untuk biaya hidup, tempat tinggal, transportasi, dan kebutuhan sehari-hari selama kuliah di Padang.",
    image: "/images/belajar/biaya.webp",
    align: "left",
    href: "/belajar-di-fti/biaya-dan-akomodasi",
    icon: Wallet,
    accentBg: "bg-amber-500/15",
    accentText: "text-amber-600",
    accentBar: "bg-amber-500",
  },
  {
    title: "Magang & Pertukaran",
    description:
      "Temukan peluang magang, kerja sama industri, dan program pertukaran pelajar yang dapat memperluas pengalaman akademik maupun profesionalmu.",
    image: "/images/belajar/pertukaran.webp",
    align: "right",
    href: "/belajar-di-fti/magang-dan-pertukaran",
    icon: Briefcase,
    accentBg: "bg-blue-500/15",
    accentText: "text-blue-600",
    accentBar: "bg-blue-500",
  },
];
