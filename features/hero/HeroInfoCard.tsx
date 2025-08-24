export default function HeroInfoCard() {
  return (
    <div
      className="mx-auto w-[min(760px,92%)] rounded-3xl bg-[#ECEEF1] text-black
                 px-4 md:px-5 py-9 md:py-16 border border-black/5
                 shadow-[0_20px_50px_rgba(0,0,0,.15)]"
    >
      {/* içerik: solda özellikler, ortada puan, sağda CTA */}
      <div className="grid items-center md:items-stretch gap-5 md:gap-6 md:grid-cols-[1fr_auto_auto]">
        {/* SOL: özellikler */}
        <div className="flex flex-wrap items-center gap-2">
          <FeaturePill icon="check">Güvenilir Hizmet</FeaturePill>
          <FeaturePill icon="bolt">Hızlı Ulaşım</FeaturePill>
          <FeaturePill icon="clock">7/24</FeaturePill>
        </div>

        {/* ORTA: Google puanı */}
        <div className="flex items-center gap-3 md:justify-self-center md:pl-5 md:border-l md:border-black/10">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-[#2B2B2B] ring-2 ring-black/10 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFC000" aria-hidden>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-extrabold text-[18px]">4.9 / 5 <span className="font-semibold">Google</span></div>
            <div className="text-xs text-black/60">120+ değerlendirme</div>
          </div>
        </div>

        {/* SAĞ: CTA’lar */}
        <div className="flex items-center gap-2.5 md:justify-self-end">
          <a
            href="tel:+905060237736"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC000] text-black
                       font-extrabold px-5 md:px-6 py-2.5 text-sm md:text-base
                       shadow-[0_10px_30px_rgba(255,192,0,.35)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
            Hemen Ara
          </a>

          <a
            href="https://wa.me/905060237736"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-white/60 text-[#2B2B2B]
                       border border-black/10 px-4 py-2.5 font-semibold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.93 11.93 0 01-1.62-6.01C.122 5.373 5.495 0 12.06 0c3.2 0 6.2 1.246 8.477 3.523A11.86 11.86 0 0124 12.06c-.003 6.564-5.376 11.94-11.94 11.94-2.032 0-4.016-.5-5.78-1.45L.057 24zm6.597-3.807c1.73.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.434 9.89-9.885.003-5.463-4.415-9.89-9.878-9.893-5.45 0-9.885 4.434-9.888 9.884-.002 2.225.651 3.891 1.746 5.61l-.999 3.648 3.737-.957zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.942 1.165-.173.199-.347.223-.644.074-.297-.149-1.253-.462-2.387-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.693.248-1.287.173-1.411z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* küçük yardımcı bileşen: daha sıkı rozetler */
function FeaturePill({ icon, children }: { icon: "check" | "bolt" | "clock"; children: React.ReactNode }) {
  const Icon = () => {
    if (icon === "check")
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC000" aria-hidden>
          <path d="M9 16.17l-3.5-3.5-1.41 1.41L9 19 20.5 7.5 19.09 6.09z" />
        </svg>
      );
    if (icon === "bolt")
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC000" strokeWidth="2" aria-hidden>
          <path d="M13 3l-1 9h9l-9 9 1-9H4l9-9z" />
        </svg>
      );
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC000" strokeWidth="2" aria-hidden>
        <path d="M12 8v5l3 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#2B2B2B] text-white/90 ring-1 ring-black/10 px-3 py-1.5 text-[13px]">
      <Icon />
      <span className="font-semibold">{children}</span>
    </span>
  );
}
