// features/hizmetler/ServicesIntro.tsx
import Image from "next/image";
import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";

function toAbs(path: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  try { return base ? new URL(path, base).toString() : path; } catch { return path; }
}

export default function Services() {
  const reduce = useReducedMotion();

  const v = {
    wrap:  { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } },
    head:  { hidden: { opacity: 0, y: reduce ? 0 : 12 }, show: { opacity: 1, y: 0, transition: { duration: .35 } } },
    card:  { hidden: { opacity: 0, y: reduce ? 0 : 18, filter: reduce ? "none" : "blur(2px)" },
             show:   { opacity: 1, y: 0, filter: "none", transition: { duration: .35, ease: "easeOut" } } },
  };

  // JSON-LD: OfferCatalog -> Service listesi (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Erzurum Saraybosna Taksi - Hizmetler",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    itemListElement: services.map((it: any, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: it.title,
        description: it.desc,
        image: toAbs(it.icon),
        areaServed: "Erzurum, Türkiye",
        provider: {
          "@type": "LocalBusiness",
          name: "Erzurum Saraybosna Taksi",
          telephone: "+90 506 023 77 36",
        },
      },
    })),
  };

  return (
    <section className="bg-[#F2F3F5] text-black" aria-labelledby="services-title">
      <Script id="ld-json-services" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Container>
        {/* başlık */}
        <motion.div
          className="py-12 md:py-16 text-center flex flex-col h-full justify-center"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={v.wrap}
        >
          <motion.div variants={v.head} className="text-[#FFC000] font-extrabold tracking-wider uppercase text-[11px] md:text-xs">
            SARAYBOSNA TAKSİYE HOŞGELDİNİZ
          </motion.div>
          <motion.h2 id="services-title" variants={v.head} className="mt-1 font-extrabold tracking-wide text-[22px] md:text-[26px]">
            HİZMETLERİMİZ
          </motion.h2>

          {/* kartlar */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10 justify-items-center">
            {services.map((it: any) => (
              <motion.article
                key={it.title}
                variants={v.card}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                className="w-full h-full max-w-[280px] rounded-2xl bg-white p-6 md:p-7
                           border border-black/5 shadow-[0_14px_36px_rgba(0,0,0,.08)]
                           transition duration-200 hover:-translate-y-1
                           hover:shadow-[0_24px_60px_rgba(0,0,0,.12)] will-change-transform"
                itemScope itemType="https://schema.org/Service"
                aria-label={`${it.title} hizmeti`}
              >
                <meta itemProp="provider" content="Erzurum Saraybosna Taksi" />
                <div className="mx-auto mb-4 grid place-items-center w-14 h-14 rounded-full bg-[#FFF3C4] ring-1 ring-[#FFC000]/40">
                  <div className="relative w-9 h-9">
                    <Image
                      src={it.icon}
                      alt={`${it.title} ikonu`}
                      fill
                      sizes="36px"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="text-center font-extrabold text-[14px] md:text-[15px] tracking-wide" itemProp="name">
                  {it.title}
                </h3>
                <div className="mx-auto mt-2 h-[6px] w-[46px] rounded-full bg-[#FFC000]/90" />
                <p className="mt-3 text-center text-[13px] leading-relaxed text-black/70" itemProp="description">
                  {it.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* dama şerit */}
      <div className="checker" />
    </section>
  );
}
