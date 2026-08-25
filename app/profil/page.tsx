import Link from "next/link";
import VisiMisi from "@/components/sections/Profil/VisiMisi";

export default function ProfilPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl font-bold">
            Profil Fakultas Teknologi Informasi
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Fakultas Teknologi Informasi Universitas Andalas berkomitmen
            menghasilkan lulusan yang unggul, inovatif, dan berdaya saing
            global.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <VisiMisi />

      {/* Navigasi */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <Link
            href="/profil/sejarah"
            className="rounded-3xl border p-8 transition hover:shadow-xl"
          >
            <h3 className="mb-3 text-2xl font-bold">Sejarah Fakultas</h3>

            <p className="text-slate-600">
              Pelajari perjalanan berdirinya Fakultas Teknologi Informasi.
            </p>
          </Link>

          <Link
            href="/profil/struktur"
            className="rounded-3xl border p-8 transition hover:shadow-xl"
          >
            <h3 className="mb-3 text-2xl font-bold">Struktur Organisasi</h3>

            <p className="text-slate-600">
              Lihat struktur pimpinan dan organisasi fakultas.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
