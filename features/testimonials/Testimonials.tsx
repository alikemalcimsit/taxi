// features/testimonials/Testimonials.tsx
import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../../components/layout/Container";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const reduce = useReducedMotion();

  const v = {
    wrap: { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } },
    head: { hidden: { opacity: 0, y: reduce ? 0 : 10 }, show: { opacity: 1, y: 0, transition: { duration: .35 } } },
    card: {
      hidden: { opacity: 0, y: reduce ? 0 : 18, filter: reduce ? "none" : "blur(2px)" },
      show:   { opacity: 1, y: 0, filter: "none", transition: { duration: .35, ease: "easeOut" } },
    },
  };

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
    <section
      id="yorumlar"
      className="bg-[#0e1014] text-white py-12 md:py-16 border-y border-white/10"
      aria-labelledby="testimonials-title"
    >
      <Script
        id="ld-json-testimonials"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={v.wrap}
        >
          <motion.div variants={v.head} className="text-xs font-extrabold text-[#FFC000] uppercase tracking-wider">
            Mutlu Müşteri
          </motion.div>
          <motion.h2
            id="testimonials-title"
            variants={v.head}
            className="text-2xl md:text-3xl font-extrabold mt-2 mb-2"
          >
            Müşteri Yorumları
          </motion.h2>
          <motion.p variants={v.head} className="text-sm text-white/70 mb-6">
            Gerçek yolcu deneyimleri. Ortalama {avg}/5 ⭐
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <motion.article
                key={t.id}
                variants={v.card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5
                           hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,.25)]
                           transition will-change-transform"
                itemScope
                itemType="https://schema.org/Review"
                aria-label={`${t.name} yorumu`}
              >
                {/* Yıldızlar */}
                <div className="text-[#FFC000] mb-2" aria-label={`${t.stars ?? 5} yıldız`}>
                  {"★".repeat(t.stars ?? 5)}
                </div>

                {/* Metin */}
                <p className="text-sm text-white/90" itemProp="reviewBody">
                  {t.text}
                </p>

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
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
