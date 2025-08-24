// app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import Hero from "@/features/hero/Hero";
import Services from "@/features/hizmetler/Services";
import Professional from "@/features/professional/Professional";
import Fleet from "@/features/fleet/Fleet";
import Testimonials from "@/features/testimonials/Testimonials";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const BRAND = "Saraybosna Taksi";
const TITLE = "Erzurum 7/24 Taksi | Saraybosna Taksi";
const DESC =
  "Erzurum’da 7/24 güvenli ve konforlu taksi. Havalimanı, otogar ve şehir içi/şehirler arası transfer. Hızlı ulaşım, profesyonel sürücüler.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE, // Ana sayfada tam başlık
  },
  description: DESC,
  alternates: {
    canonical: "/", // Ana sayfa kanonik
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: TITLE,
    description: DESC,
    locale: "tr_TR",
    images: [
      {
        url: "/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND} - Erzurum 7/24`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og/og-cover.jpg"],
  },
  // İsteğe bağlı: sayfaya özel anahtar kelimeler
  keywords: [
    "Erzurum taksi",
    "Erzurum havaalanı transfer",
    "Erzurum otogar taksi",
    "Saraybosna Taksi",
    "Yakutiye taksi",
    "Palandöken taksi",
    "Aziziye taksi",
    "Erzurum 7/24 taksi",
  ],
};

export default function HomePage() {
  // JSON-LD: WebSite + SearchAction (Sitelinks Search Box için)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  return (
    <>
      <Script
        id="ld-json-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Services />
      <Professional />
      <Fleet />
      <Testimonials />
    </>
  );
}
