// features/testimonials/Testimonials.tsx
import Script from "next/script";
import Container from "../../components/layout/Container";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  // SEO: AggregateRating + Review JSON-LD
  const avg =
    testimonials.length > 0
      ? (testimonials.reduce((s, t) => s + (t.stars ?? 5), 0) / testimonials.length).toFixed(1)
      : "5.0";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Erzurum Saraybosna Taksi",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    telephone: "+90 506 023 77 36",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg,
      reviewCount: String(testimonials.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
      reviewRating: { "@type": "Rating", ratingValue: String(t.stars ?? 5), bestRating: "5", worstRating: "1" },
      locationCreated: t.area,
    })),
  };

  return (
    <section id="yorumlar" className="bg-[#0e1014] text-white py-12 md:py-16 border-y border-white/10" aria-labelledby="testimonials-title">
      <Script id="ld-json-testimonials" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Container>
        {/* başlıklar */}
        <div className="motion-safe:opacity-0 motion-safe:animate-[fadeUp_.35s_ease-out_forwards]">
          <div className="text-xs font-extrabold text-[#FFC000] uppercase tracking-wider">Mutlu Müşteri</div>
          <h2 id="testimonials-title" className="text-2xl md:text-3xl font-extrabold mt-2 mb-2">Müşteri Yorumları</h2>
          <p className="text-sm text-white/70 mb-6">Gerçek yolcu deneyimleri. Ortalama {avg}/5 ⭐</p>
        </div>

        {/* kartlar */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,.25)] transition will-change-transform motion-safe:opacity-0 motion-safe:animate-[fadeUp_.35s_ease-out_forwards]"
              style={{ animationDelay: `calc(${i} * 80ms)` }}
              itemScope
              itemType="https://schema.org/Review"
              aria-label={`${t.name} yorumu`}
            >
              {/* Yıldızlar */}
              <div className="text-[#FFC000] mb-2" aria-label={`${t.stars ?? 5} yıldız`}>
                {"★".repeat(t.stars ?? 5)}
              </div>

              {/* Metin */}
              <p className="text-sm text-white/90" itemProp="reviewBody">{t.text}</p>

              {/* İmza */}
              <div className="mt-4 text-sm text-white/80 font-semibold" itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{t.name}</span>
              </div>
              <div className="text-xs text-white/60">{t.area}</div>

              {/* Mikrodata: rating */}
              <meta itemProp="itemReviewed" content="Erzurum Saraybosna Taksi" />
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="sr-only">
                <meta itemProp="ratingValue" content={String(t.stars ?? 5)} />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
