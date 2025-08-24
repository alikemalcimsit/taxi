// components/layout/PageHeader.tsx (SERVER)
import * as React from "react";

export default function PageHeader({
  title,
  breadcrumb,
  className,
}: {
  title: string;
  breadcrumb?: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={`relative bg-[#111316] text-center py-10 md:py-14 ${className ?? ""}`}
      role="region"
      aria-labelledby="page-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0, transparent 6px, #fff 7px, transparent 8px)",
        }}
      />

      <div className="relative z-10 container">
        {breadcrumb && (
          <nav aria-label="Ekmek kırıntısı" className="text-sm text-white/70 mb-3
                      motion-safe:opacity-0 motion-safe:translate-y-[6px]
                      motion-safe:animate-[fadeUp_.35s_ease-out_forwards]">
            {breadcrumb}
          </nav>
        )}

        <h1
          id="page-title"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide
                     motion-safe:opacity-0 motion-safe:translate-y-[8px]
                     motion-safe:animate-[fadeUp_.4s_ease-out_.06s_forwards]"
        >
          {title}
        </h1>
      </div>

      {/* CSS keyframes (global.css’e koyabilirsin; burada inline da olur) */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </header>
  );
}
