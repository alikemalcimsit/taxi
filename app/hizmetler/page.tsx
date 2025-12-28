// app/hizmetler/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

import PageHeader from "@/components/layout/PageHeader";
import Services from "@/features/hizmetler/Services";
import Fleet from "@/features/fleet/Fleet";
import { services } from "@/data/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erzurumtaksici.com";
const BRAND = "Erzurum Taksici";
const TITLE = "Erzurum Taksi Hizmetleri | Havalimanı Transfer, VIP Taksi";
const DESC =
  "Erzurum taksi hizmetleri: 7/24 şehir içi taksi, havalimanı transfer, Palandöken kayak merkezi transfer, VIP taksi ve şehirler arası transfer. Profesyonel sürücüler, konforlu araçlar. Hemen arayın: 0535 365 65 67";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/hizmetler" },
  keywords: [
    "Erzurum taksi hizmetleri",
    "Erzurum havalimanı transfer",
    "Erzurum şehir içi taksi",
    "Palandöken transfer",
    "Erzurum VIP taksi",
    "Erzurum otogar taksi",
    "Erzurum şehirler arası taksi",
    "Yakutiye Palandöken Aziziye taksi",
    "Saraybosna Taksi hizmetler",
    "Erzurum taksici hizmetleri",
  ],
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hizmetler`,
    siteName: "Erzurum Taksici",
    title: TITLE,
    description: DESC,
    locale: "tr_TR",
    images: [{ url: "/og/og-cover.jpg", width: 1200, height: 630, alt: "Erzurum Taksi Hizmetleri" }],
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
  provider: { "@type": "LocalBusiness", name: BRAND, telephone: "+90 535 365 65 67" },
      },
    })),
  };

  return (
    <>
      <PageHeader
        title="ERZURUM TAKSİ HİZMETLERİ"
        breadcrumb={
          <>
            <Link href="/" className="hover:text-white">Anasayfa</Link>
            <span className="mx-1 text-[#FFC000]">//</span>
            <span aria-current="page">Hizmetlerimiz</span>
          </>
        }
      />

      <Services />
      <Fleet />

      <Script id="ld-json-breadcrumbs" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      <Script id="ld-json-collectionpage" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <Script id="ld-json-offercatalog" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOfferCatalog) }} />
    </>
  );
}
