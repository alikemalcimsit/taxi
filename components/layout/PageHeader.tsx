// components/layout/PageHeader.tsx
export default function PageHeader({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb?: React.ReactNode;
}) {
  return (
    <div className="relative bg-[#111316] text-center py-10 md:py-14">
      {/* diagonal pattern (opsiyonel) */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0, transparent 6px, #fff 7px, transparent 8px)",
        }}
      />

      <div className="relative z-10">
        {breadcrumb && (
          <div className="text-sm text-white/70 mb-3">
            {breadcrumb}
          </div>
        )}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  );
}
