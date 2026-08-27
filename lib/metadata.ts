import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FTI Universitas Andalas",
    template: "%s | FTI Universitas Andalas",
  },
  description: "Website Resmi Fakultas Teknologi Informasi Universitas Andalas",

  keywords: [
    "FTI",
    "Fakultas Teknologi Informasi",
    "Universitas Andalas",
    "UNAND",
    "Teknologi Informasi",
  ],

  authors: [{ name: "FTI Universitas Andalas" }],

  openGraph: {
    title: "FTI Universitas Andalas",
    description:
      "Website Resmi Fakultas Teknologi Informasi Universitas Andalas",
    type: "website",
    locale: "id_ID",
  },
};
