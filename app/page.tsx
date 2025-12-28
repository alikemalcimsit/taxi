// app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import Hero from "@/features/hero/Hero";
import Services from "@/features/hizmetler/Services";
import Professional from "@/features/professional/Professional";
import Fleet from "@/features/fleet/Fleet";
import Testimonials from "@/features/testimonials/Testimonials";
import FAQ from "@/features/faq/FAQ";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erzurumtaksici.com";
const BRAND = "Erzurum Taksici";
const TITLE = "Erzurum Taksi | Erzurum Taksici - 7/24 Güvenilir Taksi Hizmeti";
const DESC =
  "Erzurum'da taksi mi arıyorsunuz? Erzurum taksici olarak 7/24 havalimanı transferi, şehir içi taksi ve şehirler arası VIP transfer hizmeti sunuyoruz. Profesyonel sürücüler, konforlu araçlar. ☎ 0535 365 65 67";

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
    siteName: "Erzurum Taksici",
    title: TITLE,
    description: DESC,
    locale: "tr_TR",
    images: [
      {
        url: "/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `Erzurum Taksi - Erzurum Taksici 7/24`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og/og-cover.jpg"],
  },
  keywords: [
    // Ana anahtar kelimeler
    "Erzurum taksi",
    "Erzurum taksici",
    "Erzurum taksi numarası",
    "Erzurum taksi telefon",
    // Havalimanı
    "Erzurum havalimanı taksi",
    "Erzurum havalimanı transfer",
    "Erzurum airport taxi",
    // Otogar
    "Erzurum otogar taksi",
    "Erzurum terminal taksi",
    // İlçeler
    "Yakutiye taksi",
    "Palandöken taksi",
    "Aziziye taksi",
    "Erzurum merkez taksi",
    // Özel hizmetler
    "Erzurum VIP taksi",
    "Erzurum 7/24 taksi",
    "Erzurum gece taksi",
    "Erzurum şehirlerarası taksi",
    "Palandöken kayak merkezi transfer",
    // Marka
    "Saraybosna Taksi",
    "erzurumtaksici.com",
  ],
};

export default function HomePage() {
  // JSON-LD: WebSite + SearchAction (Sitelinks Search Box için)
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Erzurum Taksici",
    alternateName: ["Erzurum Taksi", "Saraybosna Taksi"],
    url: SITE_URL,
    description: "Erzurum'da 7/24 taksi hizmeti. Havalimanı transferi, şehir içi ve şehirler arası taksi.",
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // JSON-LD: FAQPage (Google'da zengin sonuçlar için)
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Erzurum'da 7/24 taksi hizmeti veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, Erzurum taksici olarak günün her saati 7/24 kesintisiz taksi hizmeti sunuyoruz. Gece veya gündüz fark etmeksizin Erzurum merkez ve tüm ilçelerde hizmetinizdeyiz."
        }
      },
      {
        "@type": "Question",
        name: "Erzurum havalimanı transfer ücreti ne kadar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Erzurum Havalimanı - şehir merkezi arası transfer ücreti 2025 yılında ortalama 450-500 TL arasındadır. Sabit fiyat politikası uyguluyoruz."
        }
      },
      {
        "@type": "Question",
        name: "Erzurum taksi numarası nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Erzurum taksici telefon numaramız: 0535 365 65 67. WhatsApp üzerinden de ulaşabilirsiniz."
        }
      },
      {
        "@type": "Question",
        name: "Palandöken kayak merkezine transfer yapıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, Erzurum Havalimanı'ndan veya şehir merkezinden Palandöken kayak merkezine güvenli transfer hizmeti sunuyoruz. Kış lastikli ve zincirli araçlarımızla güvenle ulaştırıyoruz."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="ld-json-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <Hero />
      <Services />
      <Professional />
      <Fleet />
      <Testimonials />
  <FAQ />
    </>
  );
}
