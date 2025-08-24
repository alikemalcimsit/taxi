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
        url: "/og/og-cover.jpg", // 1200x630 önerilir
        width: 1200,
        height: 630,
        alt: `${BRAND} - Erzurum 7/24 Taksi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESC,
    images: ["/og/og-cover.jpg"],
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
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest", // public/site.webmanifest
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F3F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0E" },
  ],
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
    image: `${SITE_URL}/images/car-hero.png`,
    telephone: "+90 506 023 77 36",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erzurum",
      addressCountry: "TR",
    },
    areaServed: ["Erzurum", "Yakutiye", "Palandöken", "Aziziye"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "00:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "23:59" },
    ],
    sameAs: ["https://wa.me/905060237736"],
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
