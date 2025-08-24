import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { site } from "../../config/site";

const menu = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#111316] text-white/80">
      <Container>
        {/* üst bölüm */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 py-10 md:py-14">
          {/* HAKKIMIZDA */}
          <div className="md:col-span-1">
            <h4 className="text-[#FFC000] font-extrabold tracking-wide mb-3">HAKKIMIZDA</h4>
            <p className="text-sm leading-relaxed text-white/70 max-w-prose">
              {site.name} Erzurum’da alanında deneyimli, hızlı, güvenli ve 7/24 hizmet veren bir taksi
              ekibidir. Şehir içi–şehir dışı ulaşım, havaalanı transferleri ve VIP yolculuk ihtiyaçlarınızda
              yanınızdayız. Hedefimiz; zamanında, konforlu ve güvenli ulaşımı uygun fiyata sunmaktır.
            </p>
          </div>

          {/* MENÜ */}
          <div className="md:col-span-1">
            <h4 className="text-[#FFC000] font-extrabold tracking-wide mb-3">MENÜ</h4>
            <ul className="divide-y divide-white/10 rounded-lg overflow-hidden bg-white/5">
              {menu.map((m) => (
                <li key={m.href} className="group">
                  <Link
                    href={m.href}
                    className="flex items-center justify-between px-4 py-3 text-sm hover:bg-white/10 transition"
                  >
                    <span>{m.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BİZE ULAŞIN */}
          <div className="md:col-span-1">
            <h4 className="text-[#FFC000] font-extrabold tracking-wide mb-3">BİZE ULAŞIN</h4>
            <div className="space-y-3 text-sm">
              <LineItem>
                <span className="block">{site.addressTitle ?? "Adres:"}</span>
                <span className="text-white/70">{site.address}</span>
              </LineItem>

              <LineItem>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:underline">
                  {site.phone}
                </a>
              </LineItem>

              {site.email && (
                <LineItem>
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </LineItem>
              )}
            </div>
          </div>

          {/* LOGO */}
          <div className="md:col-span-1 flex md:justify-end items-start">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
          </div>
        </div>

        {/* alt çizgi */}
        <div className="border-t border-white/10 py-6 text-xs md:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {site.name}</div>
          <div className="opacity-80">
            {site.address} • Tel:{" "}
            <a className="hover:underline" href={`tel:${site.phone.replace(/\s+/g, "")}`}>
              {site.phone}
            </a>
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
