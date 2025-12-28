// app/iletisim/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { site } from "@/config/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erzurumtaksici.com";

export const metadata: Metadata = {
  title: "İletişim | Erzurum Taksi Telefon Numarası",
  description:
    "Erzurum taksi telefon numarası: 0535 365 65 67. 7/24 WhatsApp ve telefon ile hızlıca ulaşın. Erzurum taksici olarak güvenli ve konforlu taksi hizmeti.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/iletisim`,
    title: "İletişim | Erzurum Taksi Numarası",
    description:
      "Erzurum taksi numarası: 0535 365 65 67. Telefon ve WhatsApp ile 7/24 bize ulaşın.",
    images: [{ url: "/og/og-cover.jpg", width: 1200, height: 630, alt: "Erzurum Taksici İletişim" }],
    locale: "tr_TR",
    siteName: "Erzurum Taksici",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Erzurum Taksi",
    description: "Erzurum taksi numarası: 0535 365 65 67. Telefon ve WhatsApp ile bize ulaşın.",
    images: ["/og/og-cover.jpg"],
  },
  keywords: [
    "Erzurum taksi iletişim",
    "Erzurum taksi telefon",
    "Erzurum taksi numarası",
    "Erzurum taksici telefon",
    "Saraybosna Taksi iletişim",
    "Erzurum 7/24 taksi",
    "Erzurum havalimanı taksi telefon",
  ],
};

export default function IletisimPage() {
  // JSON-LD (server’da render)
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim",
    url: `${SITE_URL}/iletisim`,
    about: { "@type": "LocalBusiness", name: site.name },
  };

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: SITE_URL,
    telephone: site.phone,
    image: `${SITE_URL}/images/car-hero.png`,
    address: site.address
      ? {
          "@type": "PostalAddress",
          streetAddress: site.address, // varsa street/city ayrı tutman daha iyi
          addressLocality: "Erzurum",
          addressCountry: "TR",
        }
      : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: site.phone,
        areaServed: "TR",
        availableLanguage: ["tr-TR"],
      },
      {
        "@type": "ContactPoint",
        contactType: "WhatsApp",
        url: `https://wa.me/${site.phone.replace(/\D/g, "")}`,
        areaServed: "TR",
        availableLanguage: ["tr-TR"],
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "İletişim", item: `${SITE_URL}/iletisim` },
    ],
  };

  return (
    <>
      <PageHeader
        title="İLETİŞİM"
        breadcrumb={
          <>
            <Link href="/" className="hover:text-white">Anasayfa</Link>
            <span className="mx-1 text-[#FFC000]">//</span>
            <span aria-current="page">İletişim</span>
          </>
        }
      />

      {/* Animasyonlu içerik ayrı client bileşende */}
      <IletisimContentClient />

      {/* JSON-LD */}
      <Script id="ld-json-contactpage" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContactPage) }} />
      <Script id="ld-json-business" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }} />
      <Script id="ld-json-breadcrumbs" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
    </>
  );
}

// Client component import’u en altta tutmak döngüleri önler
import IletisimContentClient from "./IletisimContentClient";
