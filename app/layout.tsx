// app/layout.tsx (veya src/app/layout.tsx)
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// .env: NEXT_PUBLIC_SITE_URL=https://www.ornekalanadi.com
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const BRAND = "Saraybosna Taksi";
const TITLE_DEFAULT = `${BRAND} | Erzurum 7/24`;
const DESC =
  "Erzurum’da 7/24 güvenli ve konforlu taksi. Havalimanı, otogar ve şehir içi/şehirler arası transfer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${BRAND}`,
  },
  description: DESC,
  keywords: [
    "Erzurum taksi",
    "Erzurum havaalanı transfer",
    "Erzurum otogar taksi",
    "Saraybosna Taksi",
    "Yakutiye taksi",
    "Palandöken taksi",
    "Aziziye taksi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    title: TITLE_DEFAULT,
    description: DESC,
    locale: "tr_TR",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: `${BRAND} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE_DEFAULT,
    description: DESC,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    // Google'a özel: tarama sınırlarını açıkça tanımla
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      // Gerçek /icons klasörü yok; geçici olarak logo.png farklı boyutlarda kullanılıyor
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180" }
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest", // public/site.webmanifest
  applicationName: BRAND,
  category: "transportation",
  // DNS prefetch / preconnect için <Head> gerekmez; Next otomatik optimize eder.
  // İstersen fonts için _document kullanmadan link preload da ekleyebiliriz.
};

// Ek viewport (CLS/LCP ve notch desteği)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#F2F3F5",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Site geneli LocalBusiness JSON-LD (arama motorları için)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url: SITE_URL,
    image: [
      `${SITE_URL}/images/logo.png`,
      `${SITE_URL}/images/car-hero.png`
    ],
    logo: `${SITE_URL}/images/logo.png`,
  telephone: "+90 535 365 65 67",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erzurum",
      addressCountry: "TR",
    },
    areaServed: ["Erzurum", "Yakutiye", "Palandöken", "Aziziye"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90 535 365 65 67",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr-TR"]
      }
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "23:59" },
    ],
    sameAs: [
      "https://wa.me/905353656567"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Saraybosna Taksi Hizmet Kataloğu",
      url: `${SITE_URL}/hizmetler`
    },
  };

  return (
    <html lang="tr" dir="ltr">
      <body>
        {/* JSON-LD site geneli */}
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: BRAND,
              url: SITE_URL,
              inLanguage: "tr-TR",
              publisher: {
                "@type": "Organization",
                name: BRAND,
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/images/logo.png`,
                  width: 512,
                  height: 512
                }
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/blog?query={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND,
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo.png`,
              sameAs: [
                "https://wa.me/905353656567"
              ]
            })
          }}
        />
        <Script
          id="ld-json-breadcrumbs-global"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
                { "@type": "ListItem", position: 3, name: "Blog", item: `${SITE_URL}/blog` },
                { "@type": "ListItem", position: 4, name: "İletişim", item: `${SITE_URL}/iletisim` },
              ]
            })
          }}
        />
        {/* Erişilebilirlik: Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
        >
          İçeriğe geç
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
