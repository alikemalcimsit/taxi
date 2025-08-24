// features/hero/Hero.tsx
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import HeroInfoCard from "./HeroInfoCard";

const v = {
  fadeUp: { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } },
  fade:   { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } } },
  stagger:{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } },
};

export default function Hero() {
  // JSON-LD: TaxiService (local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Erzurum Saraybosna Taksi",
    areaServed: "Erzurum, Türkiye",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    telephone: "+90 506 023 77 36",
    image: (process.env.NEXT_PUBLIC_SITE_URL || "") + "/images/car-hero.png",
    serviceType: "Taksi • Havalimanı Transfer • Şehir İçi/Uzak Yol",
    availableLanguage: ["tr-TR"],
  };

  return (
    <section
      className="relative overflow-visible -mb-12 md:-mb-16 min-h-[700px] md:min-h-[850px] bg-[#F2F3F5]"
      aria-labelledby="hero-title"
    >
      {/* JSON-LD */}
      <Script id="ld-json-taxi" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ARKA PLAN + overlay */}
      <div className="absolute inset-0 z-0 h-[700px] md:h-[850px] overflow-hidden" aria-hidden>
        <Image
          src="/images/bg-erzurum.jpg"
          alt=""
          fill
          priority   /* LCP görseli */
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F2F3F5]" />
      </div>

      {/* içerik */}
      <div className="relative z-10 container pt-6 pb-24 md:pb-32">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={v.stagger}>
          {/* TELEFON PILL */}
          <motion.div variants={v.fadeUp}
            className="mx-auto relative top-6 md:top-10 w-fit rounded-full border border-white/25
                       bg-black/35 backdrop-blur px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,.35)] z-20">
            <a
              href="tel:+905060237736"
              className="inline-flex items-center gap-3 font-extrabold text-[18px] text-[#FFC000] focus:outline-none focus:ring-2 focus:ring-[#FFC000] rounded-full"
              aria-label="Hemen ara: 0506 023 77 36"
            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-[#FFC000] text-black">📞</span>
              0506 023 77 36
            </a>
          </motion.div>

          {/* BAŞLIKLAR */}
          <motion.div className="mt-20 mb-20 text-center" variants={v.fadeUp}>
            <div className="text-[#FFC000] font-extrabold tracking-wide">Erzurum’un En İyi Taksisi</div>
            <h1 id="hero-title" className="mt-1 text-3xl md:text-5xl font-extrabold">
              ERZURUM SARAYBOSNA TAKSİ
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-white/85">
              7/24 güvenli ve konforlu ulaşım. Havalimanı transferi, şehir içi ve şehirler arası hizmet.
            </p>
          </motion.div>

          {/* dev TAKSİ yazısı */}
          <motion.div
            variants={v.fade}
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[145px] md:top-[250px] select-none font-extrabold text-white/5 z-0"
            style={{ fontSize: "200px", WebkitTextStroke: "2px rgba(255,255,255,.08)", lineHeight: 1 }}
          >
            TAKSİ
          </motion.div>

          {/* ARABA */}
          <motion.div
            className="mt-4 flex justify-center relative z-50"
            variants={v.fadeUp}
            whileHover={{ scale: 1.01 }}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded px-2 py-1 text-[12px] font-extrabold bg-[#FFC000] text-black">
              TAXI
            </span>

            {/* yumuşak float animasyonu */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/car-hero.png"
                alt="Erzurum Saraybosna Taksi aracı"
                width={680}
                height={400}
                priority  /* muhtemelen ikinci LCP görseli */
                sizes="(max-width: 768px) 92vw, 680px"
                className="h-auto w-[min(92%,680px)] drop-shadow-[0_36px_90px_rgba(255,192,0,.35)]"
              />
            </motion.div>
          </motion.div>

          {/* KART */}
          <motion.div className="relative z-30 -translate-y-6 md:-translate-y-10" variants={v.fadeUp}>
            <HeroInfoCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
