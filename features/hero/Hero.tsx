// features/hero/Hero.tsx
import Image from "next/image";
import Script from "next/script";
import HeroInfoCard from "./HeroInfoCard";

export default function Hero() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erzurumtaksici.com";
  
  // JSON-LD: TaxiService (local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Erzurum Taksici - 7/24 Taksi Hizmeti",
    alternateName: ["Erzurum Taksi", "Saraybosna Taksi", "Erzurum Taksici"],
    description: "Erzurum'da 7/24 güvenilir taksi hizmeti. Havalimanı transferi, şehir içi taksi, şehirler arası VIP transfer. Profesyonel sürücüler ile konforlu yolculuk.",
    areaServed: {
      "@type": "City",
      name: "Erzurum",
      containedInPlace: {
        "@type": "Country",
        name: "Türkiye"
      }
    },
    url: SITE_URL,
    telephone: "+90 535 365 65 67",
    image: `${SITE_URL}/images/car-hero.png`,
    logo: `${SITE_URL}/images/logo.png`,
    serviceType: ["Taksi", "Havalimanı Transfer", "Şehir İçi Taksi", "Şehirler Arası Transfer", "VIP Transfer", "Palandöken Transfer"],
    availableLanguage: ["Turkish"],
    priceRange: "₺₺",
    paymentAccepted: "Nakit, Havale",
    openingHours: "Mo-Su 00:00-23:59",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.9055,
      longitude: 41.2658
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erzurum",
      addressRegion: "Erzurum",
      postalCode: "25000",
      addressCountry: "TR"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <section className="relative overflow-visible -mb-12 md:-mb-16 min-h-[700px] md:min-h-[850px] bg-[#F2F3F5]" aria-labelledby="hero-title">
      {/* JSON-LD */}
      <Script id="ld-json-taxi" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ARKA PLAN + overlay */}
      <div className="absolute inset-0 z-0 h-[700px] md:h-[850px] overflow-hidden" aria-hidden>
        <Image src="/images/erzurum-bg.jpg" alt="Erzurum şehir manzarası - Erzurum taksi hizmeti bölgesi" fill priority sizes="100vw" className="object-cover opacity-90" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F2F3F5]" />
      </div>

      {/* içerik */}
      <div className="relative z-10 container pt-6 pb-24 md:pb-32">
        {/* TELEFON PILL */}
        <div className="mx-auto relative top-6 md:top-10 w-fit rounded-full border border-white/25 bg-black/35 backdrop-blur px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,.35)] z-20 motion-safe:opacity-0 motion-safe:animate-[fadeUp_.4s_ease-out_forwards]">
          <a href="tel:+905353656567" className="inline-flex items-center gap-3 font-extrabold text-[18px] text-[#FFC000] focus:outline-none focus:ring-2 focus:ring-[#FFC000] rounded-full" aria-label="Hemen ara: 0535 365 65 67">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-[#FFC000] text-black">📞</span>
            0535 365 65 67
          </a>
        </div>

        {/* BAŞLIKLAR - SEO için optimize edildi */}
        <header className="mt-20 mb-20 text-center motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.05s_forwards]">
          <p className="text-[#FFC000] font-extrabold tracking-wide">Erzurum'un Güvenilir Taksicisi</p>
          <h1 id="hero-title" className="mt-1 text-3xl md:text-5xl font-extrabold text-white">
            ERZURUM TAKSİ | ERZURUM TAKSİCİ
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-white text-lg">
            <strong>Erzurum taksi</strong> hizmeti arayanlar için doğru adres! 7/24 güvenli ve konforlu ulaşım. 
            Havalimanı transferi, şehir içi taksi ve şehirler arası VIP transfer.
          </p>
        </header>

        {/* dev TAKSİ yazısı */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[145px] md:top-[250px] select-none font-extrabold text-white/5 z-0 motion-safe:opacity-0 motion-safe:animate-[fadeIn_.5s_ease-out_.05s_forwards]" style={{ fontSize: "200px", WebkitTextStroke: "2px rgba(255,255,255,.08)", lineHeight: 1 }}>
          TAKSİ
        </div>

        {/* ARABA */}
        <figure className="mt-4 flex justify-center relative z-50 motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.08s_forwards]">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded px-2 py-1 text-[12px] font-extrabold bg-[#FFC000] text-black">ERZURUM TAKSİ</span>
          <div className="motion-safe:animate-[floatY_5s_ease-in-out_infinite]">
            <Image src="/images/car-hero.png" alt="Erzurum Taksi - Erzurum Taksici aracı, 7/24 güvenilir taksi hizmeti" width={680} height={400} priority sizes="(max-width: 768px) 92vw, 680px" className="h-auto w-[min(92%,680px)] drop-shadow-[0_36px_90px_rgba(255,192,0,.35)]" />
          </div>
        </figure>

        {/* KART */}
        <div className="relative z-30 -translate-y-6 md:-translate-y-10 motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.12s_forwards]">
          <HeroInfoCard />
        </div>
      </div>
    </section>
  );
}
