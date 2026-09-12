export interface MagangItem {
  id: number;
  logo: string;
  alt: string;
  company: string;
  title: string;
  location: string;
  type: "Magang" | "Pertukaran";
  duration: string;
  mode?: string;
  closingDate: string;
}

export const magangData: MagangItem[] = [
  {
    id: 1,
    logo: "/images/logo/polytron.png",
    alt: "Polytron",
    company: "PT Hartono Istana Teknologi",
    title: "Account Executive Internship",
    location: "Kota Adm. Jakarta Pusat",
    type: "Magang",
    duration: "5 Bulan",
    mode: "Onsite",
    closingDate: "31 Mei 2026",
  },
  {
    id: 2,
    logo: "/images/logo/ibaraki.png",
    alt: "Ibaraki University",
    company: "Ibaraki University",
    title: "Student Exchange",
    location: "Jepang",
    type: "Pertukaran",
    duration: "1 Semester",
    closingDate: "12 Agustus 2026",
  },
  {
    id: 3,
    logo: "/images/logo/pfn.png",
    alt: "PFN",
    company: "PT Produksi Film Negara",
    title: "Digital Marketing & Content",
    location: "Kota Adm. Jakarta Timur",
    type: "Magang",
    duration: "6 Bulan",
    mode: "Onsite",
    closingDate: "1 Juni 2026",
  },
  {
    id: 4,
    logo: "/images/logo/telkom.png",
    alt: "Telkom Indonesia",
    company: "PT Telkom Indonesia",
    title: "Software Engineer Internship",
    location: "Kota Bandung",
    type: "Magang",
    duration: "4 Bulan",
    mode: "Hybrid",
    closingDate: "15 Juni 2026",
  },
  {
    id: 5,
    logo: "/images/logo/kansai.png",
    alt: "Kansai University",
    company: "Kansai University",
    title: "Student Exchange Program",
    location: "Jepang",
    type: "Pertukaran",
    duration: "1 Semester",
    closingDate: "20 Juli 2026",
  },
  {
    id: 6,
    logo: "/images/logo/gojek.png",
    alt: "Gojek",
    company: "PT Aplikasi Karya Anak Bangsa",
    title: "Data Analyst Internship",
    location: "Kota Adm. Jakarta Selatan",
    type: "Magang",
    duration: "6 Bulan",
    mode: "Onsite",
    closingDate: "10 Juni 2026",
  },
  {
    id: 7,
    logo: "/images/logo/bca.png",
    alt: "BCA",
    company: "PT Bank Central Asia Tbk",
    title: "IT Support Internship",
    location: "Kota Padang",
    type: "Magang",
    duration: "3 Bulan",
    mode: "Onsite",
    closingDate: "25 Mei 2026",
  },
  {
    id: 8,
    logo: "/images/logo/tsukuba.png",
    alt: "University of Tsukuba",
    company: "University of Tsukuba",
    title: "Summer Exchange Program",
    location: "Jepang",
    type: "Pertukaran",
    duration: "2 Bulan",
    closingDate: "5 Agustus 2026",
  },
  {
    id: 9,
    logo: "/images/logo/pertamina.png",
    alt: "Pertamina",
    company: "PT Pertamina (Persero)",
    title: "UI/UX Design Internship",
    location: "Kota Adm. Jakarta Pusat",
    type: "Magang",
    duration: "5 Bulan",
    mode: "Hybrid",
    closingDate: "18 Juni 2026",
  },
];
