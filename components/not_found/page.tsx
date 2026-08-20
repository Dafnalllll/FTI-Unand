import NotFoundIllustration from "./illustration";
import NotFoundActions from "./actions";

export default function NotFoundPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-4xl">
        <div
          className="
            rounded-3xl border border-slate-200/70 bg-gray-300 px-6 py-12
            shadow-[8px_8px_0px_0px_rgba(226,232,240,1)]
            sm:px-12 sm:py-16
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
            {/* Illustration */}
            <div className="mx-auto w-full max-w-sm lg:max-w-md">
              <NotFoundIllustration />
            </div>

            {/* Text + actions */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-amber-200 bg-amber-50 px-3.5 py-1
                  text-xs font-semibold uppercase tracking-widest text-amber-700
                "
              >
                Error 404
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Halaman Tidak Ditemukan
              </h1>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                Sepertinya halaman yang Anda cari telah dipindahkan, dihapus,
                atau tidak pernah ada.
              </p>

              <div className="mt-8">
                <NotFoundActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
