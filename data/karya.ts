export interface KaryaItem {
  title: string;
  description: string;
  image: string;
  badge: string;
  total: string;
}

export const karyaData = [
  {
    title: "Pameran Tugas Akhir",
    badge: "Akademik",
    total: "50+ Karya",
    description:
      "Berbagai proyek tugas akhir dan capstone project mahasiswa yang dipamerkan kepada publik.",
    image: "/images/belajar-fti/karya/tugas-akhir.jpg",
  },

  {
    title: "Kompetisi & Prestasi",
    badge: "Prestasi",
    total: "80+ Penghargaan",
    description:
      "Prestasi mahasiswa dalam kompetisi teknologi, GEMASTIK, hackathon, dan berbagai ajang nasional maupun internasional.",
    image: "/images/belajar-fti/karya/prestasi.jpg",
  },

  {
    title: "Program Kreativitas Mahasiswa",
    badge: "PKM",
    total: "30+ Proposal",
    description:
      "Inovasi dan penelitian mahasiswa melalui Program Kreativitas Mahasiswa yang berdampak bagi masyarakat.",
    image: "/images/belajar/karya-mahasiswa/pkm1.webp",
  },
];
