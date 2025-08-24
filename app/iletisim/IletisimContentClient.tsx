// app/iletisim/IletisimContentClient.tsx
"use client";

import { site, telHref } from "@/config/site";

export default function IletisimContentClient() {
  const waHref = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

  return (
    <section className="py-12 md:py-16 bg-[#F2F3F5] text-black" aria-labelledby="contact-title">
      <div className="max-w-[1184px] mx-auto px-5">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Kart */}
          <div
            className="rounded-2xl bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,.08)] p-6 md:p-8
                       motion-safe:animate-[fadeUp_.4s_ease-out_forwards]"
          >
            <h1 id="contact-title" className="text-2xl md:text-3xl font-extrabold tracking-wide">
              Bize Ulaşın
            </h1>
            <p className="mt-2 text-black/70">
              7/24 hizmet veriyoruz. Hızlıca ulaşmak için arayabilir veya WhatsApp’tan yazabilirsiniz.
            </p>

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
          </div>

          {/* Harita / görsel alanı */}
          <div
            className="rounded-2xl bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,.08)] p-2
                       motion-safe:animate-[fadeUp_.4s_ease-out_forwards]"
            style={{ animationDelay: "60ms" }}
          >
            <div className="grid place-items-center w-full h-[320px] md:h-[360px] rounded-xl bg-[#ECEEF1] text-black/50">
              Harita / Konum görseli
            </div>
          </div>
        </div>
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
