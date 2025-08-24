import Image from "next/image";
import HeroInfoCard from "./HeroInfoCard";

export default function Hero() {
  return (
    // overflow-hidden -> overflow-visible + alt negatif margin
    <section className="relative overflow-visible -mb-12 md:-mb-16 min-h-[700px] md:min-h-[850px] bg-[#F2F3F5]">
      {/* ARKA PLAN + overlay */}
      <div className="absolute inset-0 z-0 h-[700px] md:h-[850px] overflow-hidden">
        <Image src="/images/bg-erzurum.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F2F3F5]" />
      </div>


      {/* biraz daha alt padding ver ki kart içeriden aşağı taşıp görünür olsun */}
      <div className="relative z-10 container   pt-6 pb-24 md:pb-32">
        {/* TELEFON PILL */}
        <div
          className="mx-auto relative top-6 md:top-10 w-fit rounded-full border border-white/25
             bg-black/35 backdrop-blur px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,.35)] z-20"
        >
          <span className="inline-flex items-center gap-3 font-extrabold text-[18px] text-[#FFC000]">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-[#FFC000] text-black">📞</span>
            05060237736
          </span>
        </div>

        {/* BAŞLIKLAR */}
        <div className="mt-20 mb-20 text-center">
          <div className="text-[#FFC000] font-extrabold tracking-wide">Erzurum’un En İyi Taksisi</div>
          <h1 className="mt-1 text-3xl md:text-5xl font-extrabold">ERZURUM SARAYBOSNA TAKSİ</h1>
        </div>

        {/* dev TAXI yazısı */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[145px] md:top-[250px] select-none font-extrabold text-white/5 z-0"
          style={{ fontSize: "200px", WebkitTextStroke: "2px rgba(255,255,255,.08)", lineHeight: 1 }}
        >
          TAKSİ
        </div>

        {/* ARABA */}
        <div className="mt-4 flex justify-center relative z-50">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded px-2 py-1 text-[12px] font-extrabold bg-[#FFC000] text-black">
            TAXI
          </span>

          <Image
            src="/images/car-hero.png"
            alt="Taksi"
            width={680}
            height={400}
            priority
            className="h-auto w-[min(92%,680px)]  drop-shadow-[0_36px_90px_rgba(255,192,0,.35)]"
          />
        </div>

        {/* KART – dışarı taşır */}
        <div className="relative z-30 -translate-y-6 md:-translate-y-10">
          <HeroInfoCard />
        </div>
      </div>
    </section>
  );
}
