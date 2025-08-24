// components/layout/Header.tsx
"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

const BRAND = "Saraybosna Taksi";

const MENU = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const EMAIL = "alikemalictimaii3@gmail.com";
const PHONE_DISPLAY = "+90 506 023 7736";
const PHONE_TEL = "+905060237736"; // tel: için boşluksuz

export default function Header() {
  const pathname = usePathname();

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

      {/* Üst bar */}
      <div className="flex items-center justify-between px-6 py-2 text-sm border-b border-gray-700">
        <div className="flex gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded"
            aria-label={`E-posta: ${EMAIL}`}
          >
            📧 {EMAIL}
          </a>
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

      {/* Navigation */}
      <div className="flex items-center justify-between px-6 py-4">
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
    </header>
  );
}
