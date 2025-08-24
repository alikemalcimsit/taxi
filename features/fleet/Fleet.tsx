// features/fleet/Fleet.tsx
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { vehicles } from "@/data/vehicles";
import { site } from "@/config/site"; // varsa markanız için

// Küçük yardımcı: relative görsel yolunu absolute'a çevir
function toAbsoluteUrl(path: string) {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "";
    return base ? new URL(path, base).toString() : path;
  } catch {
    return path;
  }
}

const variants = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  },
  card: {
    hidden: { opacity: 0, y: 22, filter: "blur(2px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, ease: "easeOut" } },
  },
  header: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  },
};

export default function Fleet() {
  // JSON-LD (ItemList + Vehicle) — SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site?.name || "Saraybosna Taksi"} - Araç Filosu`,
    itemListElement: vehicles.map((v: any, idx: number) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Vehicle",
        name: v.name,
        description: v.desc,
        image: toAbsoluteUrl(v.img),
        brand: site?.name || "Taxi Fleet",
        url: v.href ? toAbsoluteUrl(v.href) : undefined,
        // Hizmet hattı:
        telephone: "+90 506 023 77 36",
      },
    })),
  };

  return (
    <section
      id="araclar"
      className="bg-[#f6f7f9] text-black scroll-mt-24"
      aria-labelledby="fleet-title"
    >
      {/* JSON-LD (arama motorlarına zengin veri) */}
      <Script
        id="ld-json-fleet"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container>
        <div className="py-12 md:py-16 flex flex-col h-full justify-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={variants.header}
          >
            <div className="text-xs font-extrabold text-[#FFC000] uppercase tracking-wider">
              Hizmet Filomuz
            </div>
            <h2 id="fleet-title" className="text-2xl md:text-3xl font-extrabold mt-2 mb-2">
              Araçlarımız
            </h2>
            <p className="text-sm text-black/60 mb-6 max-w-2xl">
              İhtiyacınıza uygun aracı seçin. Tüm araçlarımız düzenli bakımlı, klimalı ve konfor odaklıdır.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={variants.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {vehicles.map((v: any) => (
              <motion.article
                key={v.id}
                variants={variants.card}
                className="rounded-2xl border border-black/5 bg-white shadow-soft p-4 flex flex-col will-change-transform hover:shadow-lg hover:-translate-y-0.5 transition"
                itemScope
                itemType="https://schema.org/Vehicle"
              >
                <div className="h-28 grid place-items-center rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(255,192,0,.16),transparent_60%)] mb-3">
                  <Image
                    src={v.img}
                    alt={`${v.name} — ${v.desc}`}
                    width={160}
                    height={90}
                    className="h-[90px] w-auto"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-bold" itemProp="name">
                  {v.name}
                </h3>
                <p className="text-sm text-black/65 mt-1 mb-3" itemProp="description">
                  {v.desc}
                </p>

                <div className="mt-auto flex gap-2">
                  <a
                    href="tel:+905060237736"
                    aria-label="Hemen ara: +90 506 023 77 36"
                    className="flex-1 rounded-full bg-[#FFC000] text-black text-sm font-extrabold py-2 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC000]"
                    data-cta="phone"
                  >
                    Hemen Ara
                  </a>

                  <a
                    href={v.href || "/araclar"}
                    className="flex-1 rounded-full bg-black/5 text-black text-sm font-extrabold py-2 text-center hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20"
                    aria-label={`${v.name} detayları`}
                    itemProp="url"
                  >
                    Detaylar
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>

      <div className="checker" />
    </section>
  );
}
