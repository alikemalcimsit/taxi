// components/layout/Header.tsx
"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

const BRAND = "Erzurum Taksi";

const MENU = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

// Email tamamen kaldırıldı (müşteri isteği)
const PHONE_DISPLAY = "0535 365 65 67"; // UI gösterimi
const PHONE_TEL = "+905353656567"; // tel: için boşluksuz

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ESC ile kapat
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKey);
      // body scroll kilitle (sadece mobil menü açıkken)
      document.documentElement.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKey);
      document.documentElement.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, handleKey]);

  // Route değişince menüyü kapat
  useEffect(() => { setOpen(false); }, [pathname]);

  // JSON-LD: SiteNavigationElement
  const siteNavJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: MENU.map((m) => m.label),
    url: MENU.map((m) => `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}${m.href}`),
  };

  return (
    <header className="bg-black text-white" role="banner">
      {/* JSON-LD (menü) */}
      <Script
        id="ld-site-navigation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavJsonLd) }}
      />

      {/* Üst bar (küçük ekranlarda sadeleştir) */}
      <div className="hidden sm:flex items-center justify-between px-6 py-2 text-sm border-b border-gray-700">
        <div className="flex gap-6 flex-wrap">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded"
            aria-label={`Telefon: ${PHONE_DISPLAY}`}
          >
            📞 {PHONE_DISPLAY}
          </a>
        </div>
        <div className="opacity-90">
          <span>{BRAND} / Erzurum</span>
        </div>
      </div>
      {/* Mobile compact bar */}
      <div className="flex sm:hidden items-center justify-between px-4 py-3 border-b border-gray-700 text-sm">
        <Link
          href="/"
            className="text-lg font-bold text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded"
            aria-label={`${BRAND} ana sayfa`}
        >
          {BRAND}
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="bg-yellow-400/10 text-yellow-400 px-3 py-1.5 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400/60 hover:bg-yellow-400/20 text-xs"
            aria-label="Telefonla ara"
          >
            Ara
          </a>
          <button
            type="button"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen(o => !o)}
            className="relative z-[110] inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            <span className="sr-only">Menü</span>
            <div className="grid place-items-center">
              {/* Hamburger / Close icon (CSS çizim) */}
              <div className="relative h-3.5 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation (desktop ana satır) */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        {/* Logo / Marka */}
        <Link
          href="/"
          className="text-xl font-bold text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded"
          aria-label={`${BRAND} ana sayfa`}
        >
          {BRAND}
        </Link>

        {/* Menü */}
        <nav className="hidden md:flex gap-6" aria-label="Ana menü">
          {MENU.map((m) => {
            const isActive = pathname === m.href || (m.href !== "/" && pathname?.startsWith(m.href));
            return (
              <Link
                key={m.href}
                href={m.href}
                aria-current={isActive ? "page" : undefined}
                className={`hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded ${
                  isActive ? "text-yellow-400" : ""
                }`}
              >
                {m.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buton (tel) */}
        <a
          href={`tel:${PHONE_TEL}`}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          aria-label="Taksi çağır: telefon"
        >
          Taksi Çağır!
        </a>
      </div>

      {/* Mobil açılır panel */}
      {(
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className={`md:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
          aria-hidden={!open}
        >
          {/* Arka plan */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
            <div className={`absolute top-0 right-0 h-full w-[78%] max-w-xs bg-black shadow-[-6px_0_24px_rgba(0,0,0,.35)] border-l border-white/10 flex flex-col translate-x-0 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
              role="dialog" aria-modal="true" aria-label="Mobil menü"
            >
              <div className="px-5 pt-16 pb-6 overflow-y-auto flex-1">
                <nav className="flex flex-col gap-4" aria-label="Mobil ana menü">
                  {MENU.map(m => {
                    const isActive = pathname === m.href || (m.href !== '/' && pathname?.startsWith(m.href));
                    return (
                      <Link
                        key={m.href}
                        href={m.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`text-base font-medium rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                      >
                        {m.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-8 space-y-3 text-sm border-t border-white/10 pt-6">
                  <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 rounded-md bg-yellow-400 text-black font-semibold px-4 py-2 shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60" aria-label="Telefonla ara">
                    📞 {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="mt-10 text-[11px] text-white/40">
                  {BRAND} / Erzurum
                </div>
              </div>
            </div>
        </div>
      )}
    </header>
  );
}
