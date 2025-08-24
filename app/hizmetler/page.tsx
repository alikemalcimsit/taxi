// app/hizmetler/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
// ❌ framer-motion importunu kaldır
// import { motion } from "framer-motion";

import Services from "@/features/hizmetler/Services";
import Fleet from "@/features/fleet/Fleet";
import { services } from "@/data/services";
import HeaderMotionClient from "./HeaderMotionClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const BRAND = "Saraybosna Taksi";
const TITLE = "Erzurum Taksi Hizmetleri | Saraybosna Taksi";
const DESC =
  "Erzurum’da 7/24 taksi, havalimanı/otogar transfer, şehir içi ve şehirler arası yolculuk. Profesyonel ve güvenilir hizmetlerimizi keşfedin.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/hizmetler" },
  keywords: [
    "Erzurum taksi hizmetleri",
    "Erzurum havalimanı transfer",
    "Erzurum şehir içi taksi",
    "Saraybosna Taksi",
    "Yakutiye Palandöken Aziziye taksi",
  ],
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hizmetler`,
    siteName: BRAND,
    title: TITLE,
    description: DESC,
    locale: "tr_TR",
    images: [{ url: "/og/og-cover.jpg", width: 1200, height: 630, alt: BRAND }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og/og-cover.jpg"],
  },
};

export default function HizmetlerPage() {
  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
    ],
  };

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Erzurum Taksi Hizmetleri",
    url: `${SITE_URL}/hizmetler`,
    about: { "@type": "LocalBusiness", name: BRAND },
  };

  const jsonLdOfferCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${BRAND} - Hizmetler`,
    url: `${SITE_URL}/hizmetler`,
    itemListElement: services.map((it: any, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: it.title,
        description: it.desc,
        image: it.icon ? new URL(it.icon, SITE_URL).toString() : undefined,
        areaServed: "Erzurum, Türkiye",
        provider: { "@type": "LocalBusiness", name: BRAND, telephone: "+90 506 023 77 36" },
      },
    })),
  };

  return (
    <>
      {/* Header animasyonu client bileşende */}
      <HeaderMotionClient />

      {/* İçerik */}
      <Services />
      <Fleet />

      {/* JSON-LD */}
      <Script id="ld-json-breadcrumbs" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <Script id="ld-json-collectionpage" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <Script id="ld-json-offercatalog" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOfferCatalog) }} />
    </>
  );
}
