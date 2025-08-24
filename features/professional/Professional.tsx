// features/professional/Professional.tsx
import Image from "next/image";
import Script from "next/script";

export default function Professional() {
  // JSON-LD: Hizmet + hizmet verilen bölgeler
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Profesyonel Taksi ve Transfer Hizmeti",
    provider: {
      "@type": "LocalBusiness",
      name: "Erzurum Saraybosna Taksi",
      telephone: "+90 506 023 77 36",
      areaServed: [
        "Erzurum Merkez", "Yakutiye", "Palandöken", "Aziziye",
        "Atatürk Üniversitesi", "Erzurum Teknik Üniversitesi", "Otogar", "Havalimanı"
      ],
      url: process.env.NEXT_PUBLIC_SITE_URL || ""
    },
    serviceType: "Taksi • Havalimanı Transfer • Şehir içi/Şehirler arası",
    availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: "+90 506 023 77 36" } }
  };

  return (
    <section className="relative bg-[#0B0C0E] min-h-[92vh] flex items-center justify-center text-white overflow-hidden" aria-labelledby="professional-title">
      {/* Dekoratif arka plan parıltıları */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#FFC000]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      {/* JSON-LD */}
      <Script id="ld-json-professional" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container py-12 md:py-16 grid items-center gap-10 md:grid-cols-2">
        {/* Sol: başlık + içerik + CTA */}
        <div className="space-y-0">
          <p className="text-[#FFC000] font-extrabold tracking-wide mb-1 motion-safe:opacity-0 motion-safe:animate-[fadeUp_.4s_ease-out_forwards]">Erzurum Saraybosna Taksi</p>

          <h2 id="professional-title" className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.05s_forwards]">
            Tam Anlamıyla Profesyonel<br />Hizmet
          </h2>

          <p className="text-white/80 leading-7 text-[15px] md:text-base max-w-xl motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.1s_forwards]">
            Erzurum Merkez ve ilçelerine hizmet veriyoruz. Günün her saati 7/24 nöbetçi araçlarımızla güvenilir ve konforlu taşımacılık sağlıyoruz. Yakutiye, Palandöken, Aziziye, Atatürk Üniversitesi, Erzurum Teknik Üniversitesi, Otogar ve Havalimanı transferleri için bizi arayın.
          </p>

          <a
            href="tel:+905060237736"
            aria-label="Hemen ara: 0506 023 77 36"
            className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#FFC000] text-black font-extrabold px-6 py-3 shadow-[0_10px_30px_rgba(255,192,0,.30)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC000] transition hover:-translate-y-0.5 active:translate-y-0 motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.15s_forwards]"
            data-cta="phone"
          >
            Hemen Ara <span className="text-lg">📞</span>
          </a>
        </div>

        {/* Sağ: araç görseli */}
        <div className="relative motion-safe:opacity-0 motion-safe:animate-[fadeUp_.45s_ease-out_.12s_forwards]">
          {/* Sürekli yumuşak dalgalanma */}
          <div className="relative motion-safe:animate-[floatLoop_6s_ease-in-out_infinite]">
            <Image
              src="/images/car-pro.png"
              alt="Saraybosna Taksi aracı ile profesyonel hizmet"
              width={640}
              height={360}
              priority={false}
              sizes="(max-width: 768px) 90vw, 640px"
              className="mx-auto h-auto w-[min(90%,640px)] drop-shadow-[0_36px_90px_rgba(255,192,0,.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
