// components/layout/Topbar.tsx
import { site } from "@/config/site";

export default function Topbar() {
  const email = site.email || "info@ornek.com";
  const phoneDisplay = site.phone || "+90 506 023 77 36";
  const phoneHref = `tel:${phoneDisplay.replace(/\D/g, "")}`;

  return (
    <div
      className="w-full bg-black/60 border-b border-white/10 text-xs text-white"
      role="region"
      aria-label="Hızlı iletişim bilgileri"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      {/* Mikrodata */}
      <meta itemProp="contactType" content="customer support" />
      <meta itemProp="areaServed" content="TR" />
      <meta itemProp="availableLanguage" content="tr-TR" />

      <div className="container flex items-center justify-between h-9">
        {/* Sol: e-posta + telefon */}
        <div className="flex gap-5 opacity-90">
          <a
            href={`mailto:${email}`}
            className="hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#FFC000]/60 rounded px-1"
            aria-label={`E-posta: ${email}`}
            itemProp="email"
          >
            ✉️ {email}
          </a>

          <a
            href={phoneHref}
            className="hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#FFC000]/60 rounded px-1"
            aria-label={`Telefon: ${phoneDisplay}`}
            itemProp="telephone"
          >
            📞 {phoneDisplay}
          </a>
        </div>

        {/* Sağ: konum/marka bilgisi */}
        <div className="opacity-90">
          <span>{site.name || "Saraybosna Taksi"} / Erzurum</span>
        </div>
      </div>
    </div>
  );
}
