// app/iletisim/IletisimContentClient.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, telHref } from "@/config/site";

export default function IletisimContentClient() {
  const reduce = useReducedMotion();
  const waHref = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

  const v = {
    wrap: { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } },
    head: { hidden: { opacity: 0, y: reduce ? 0 : 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } },
    card: {
      hidden: { opacity: 0, y: reduce ? 0 : 18, filter: reduce ? "none" : "blur(2px)" },
      show:   { opacity: 1, y: 0, filter: "none", transition: { duration: 0.4, ease: "easeOut" } },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-[#F2F3F5] text-black" aria-labelledby="contact-title">
      <div className="max-w-[1184px] mx-auto px-5">
        <motion.div
          variants={v.wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Kart */}
          <motion.div
            variants={v.card}
            className="rounded-2xl bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,.08)] p-6 md:p-8"
            role="complementary"
            aria-label="İletişim bilgileri"
          >
            <motion.h1 id="contact-title" variants={v.head} className="text-2xl md:text-3xl font-extrabold tracking-wide">
              Bize Ulaşın
            </motion.h1>
            <motion.p variants={v.head} className="mt-2 text-black/70">
              7/24 hizmet veriyoruz. Hızlıca ulaşmak için arayabilir veya WhatsApp’tan yazabilirsiniz.
            </motion.p>

            <div className="mt-6 space-y-4 text-sm">
              <InfoRow label="Telefon">
                <a
                  href={telHref}
                  className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#FFC000] rounded"
                  aria-label={`Telefon: ${site.phone}`}
                >
                  {site.phone}
                </a>
              </InfoRow>

              {site.address && (
                <InfoRow label="Adres">
                  <span className="text-black/70">{site.address}</span>
                </InfoRow>
              )}

              {site.email && (
                <InfoRow label="E-posta">
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                    aria-label={`E-posta: ${site.email}`}
                  >
                    {site.email}
                  </a>
                </InfoRow>
              )}
            </div>

            {/* CTA butonları */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC000] text-black font-extrabold px-5 py-2.5 shadow-[0_10px_30px_rgba(255,192,0,.35)]
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC000] transition"
                aria-label="Hemen ara: telefon"
                data-cta="phone"
              >
                📞 Hemen Ara
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2.5 font-semibold
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20 transition"
                aria-label="WhatsApp ile yazın"
                data-cta="whatsapp"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Harita / görsel alanı */}
          <motion.div
            variants={v.card}
            className="rounded-2xl bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,.08)] p-2"
          >
            {/* <iframe ... /> yerine placeholder */}
            <div className="grid place-items-center w-full h-[320px] md:h-[360px] rounded-xl bg-[#ECEEF1] text-black/50">
              Harita / Konum görseli
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* Küçük satır bileşeni */
function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="w-20 shrink-0 text-black/60">{label}</span>
      <div className="font-medium">{children}</div>
    </div>
  );
}
