// app/iletisim/page.tsx (veya kendi yolun)
import Script from "next/script";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { site, telHref } from "../../config/site";

export default function IletisimPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: site.name,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address,
      addressCountry: "TR",
    },
  };

  // WhatsApp linki: tel numarasını sadece rakama çevir
  const waHref = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

  return (
    <>
      {/* Header */}
      <PageHeader
        title="İLETİŞİM"
        breadcrumb={
          <>
            <Link href="/" className="hover:text-white">Anasayfa</Link>
            <span className="mx-1 text-[#FFC000]">//</span>
            <span>İletişim</span>
          </>
        }
      />

      {/* İçerik */}
      <section className="py-12 md:py-16 bg-[#F2F3F5] text-black">
        <div className="max-w-[1184px] mx-auto px-5">
          {/* Kart */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,.08)] p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">Bize Ulaşın</h1>
              <p className="mt-2 text-black/70">
                7/24 hizmet veriyoruz. Hızlıca ulaşmak için arayabilir veya WhatsApp’tan yazabilirsiniz.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <InfoRow label="Telefon">
                  <a href={telHref} className="font-semibold hover:underline">
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
                    <a href={`mailto:${site.email}`} className="hover:underline">
                      {site.email}
                    </a>
                  </InfoRow>
                )}
              </div>

              {/* CTA butonları */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFC000] text-black font-extrabold px-5 py-2.5 shadow-[0_10px_30px_rgba(255,192,0,.35)]"
                >
                  📞 Hemen Ara
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-4 py-2.5 font-semibold"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Harita / görsel alanı (opsiyonel) */}
            <div className="rounded-2xl bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,.08)] p-2">
              {/* İstersen buraya Google Maps embed koy */}
              {/* <iframe
                className="w-full h-[360px] rounded-xl"
                src="https://www.google.com/maps?q=Erzurum%20Saraybosna%20Taksi&output=embed"
                loading="lazy"
              /> */}
              <div className="grid place-items-center w-full h-[320px] md:h-[360px] rounded-xl bg-[#ECEEF1] text-black/50">
                Harita / Konum görseli
              </div>
            </div>
          </div>
        </div>

        {/* JSON-LD */}
        <Script
          id="json-ld-contact"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
    </>
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
