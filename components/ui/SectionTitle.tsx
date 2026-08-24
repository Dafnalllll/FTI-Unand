interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-slate-200 px-4 py-1 text-sm font-medium text-slate-600">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold text-slate-800 md:text-5xl">{title}</h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-slate-700" />

      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}
