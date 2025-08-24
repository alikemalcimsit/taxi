// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { site } from "@/config/site";

const menu = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;
  const mailHref = site.email ? `mailto:${site.email}` : undefined;

  return (
    <footer
      className="relative bg-[#111316] text-white/80"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      aria-labelledby="footer-about-title"
    >
      {/* İşletme temel bilgiler (mikrodata) */}
      <meta itemProp="name" content={site.name} />
      {site.url && <meta itemProp="url" content={site.url} />}
      {site.phone && <meta itemProp="telephone" content={site.phone} />}

      <Container>
        {/* üst bölüm */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 py-10 md:py-14">
          {/* HAKKIMIZDA */}
          <div className="md:col-span-1">
            <h4 id="footer-about-title" className="text-[#FFC000] font-extrabold tracking-wide mb-3">
              HAKKIMIZDA
            </h4>
            <p className="text-sm leading-relaxed text-white/70 max-w-prose" itemProp="description">
              {site.name} Erzurum’da alanında deneyimli, hızlı, güvenli ve 7/24 hizmet veren bir taksi
              ekibidir. Şehir içi–şehir dışı ulaşım, havaalanı transferleri ve VIP yolculuk ihtiyaçlarınızda
              yanınızdayız. Hedefimiz; zamanında, konforlu ve güvenli ulaşımı uygun fiyata sunmaktır.
            </p>
          </div>

          {/* MENÜ */}
          <div className="md:col-span-1">
            <h4 className="text-[#FFC000] font-extrabold tracking-wide mb-3">MENÜ</h4>
            <nav aria-label="Alt menü">
              <ul className="divide-y divide-white/10 rounded-lg overflow-hidden bg-white/5">
                {menu.map((m) => (
                  <li key={m.href} className="group">
                    <Link
                      href={m.href}
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <span>{m.label}</span>
                      <span aria-hidden className="opacity-0 group-hover:opacity-100 transition">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* BİZE ULAŞIN */}
          <div className="md:col-span-1">
            <h4 className="text-[#FFC000] font-extrabold tracking-wide mb-3">BİZE ULAŞIN</h4>

            {/* Adres (PostalAddress mikrodata) */}
            <div className="space-y-3 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <LineItem>
                <span className="block">{site.addressTitle ?? "Adres:"}</span>
                <address className="not-italic text-white/70" itemProp="streetAddress">
                  {site.address}
                </address>
              </LineItem>

              {/* Telefon - ContactPoint */}
              {site.phone && (
                <LineItem>
                  <a
                    href={phoneHref}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#FFC000] rounded"
                    itemProp="telephone"
                    aria-label={`Telefon: ${site.phone}`}
                  >
                    {site.phone}
                  </a>
                  <meta itemProp="contactType" content="customer support" />
                </LineItem>
              )}

              {/* E-posta - ContactPoint */}
              {site.email && (
                <LineItem>
                  <a
                    href={mailHref}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#FFC000] rounded"
                    itemProp="email"
                    aria-label={`E-posta: ${site.email}`}
                  >
                    {site.email}
                  </a>
                </LineItem>
              )}
            </div>
          </div>

          {/* LOGO */}
          <div className="md:col-span-1 flex md:justify-end items-start">
            <Link href="/" aria-label={`${site.name} ana sayfa`} className="inline-flex">
              <Image
                src="/images/logo.png"
                alt={`${site.name} logo`}
                width={150}
                height={150}
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 112px, 144px"
              />
            </Link>
          </div>
        </div>

        {/* alt çizgi */}
        <div className="border-t border-white/10 py-6 text-xs md:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} <span itemProp="name">{site.name}</span>
          </div>

          <div className="opacity-80 flex flex-wrap items-center gap-2">
            {site.address && (
              <span className="whitespace-pre-wrap">{site.address}</span>
            )}
            {site.address && site.phone && <span aria-hidden>•</span>}
            {site.phone && (
              <a className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/30 rounded" href={phoneHref}>
                Tel: {site.phone}
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* küçük satır bileşeni */
function LineItem({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start gap-3 leading-snug">{children}</div>;
}
