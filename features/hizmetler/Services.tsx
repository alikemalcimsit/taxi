// features/hizmetler/ServicesIntro.tsx
import Image from "next/image";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-[#F2F3F5] text-black ">
      <Container>
        {/* başlık */}
        <div className="py-12 md:py-16  text-center flex flex-col h-full justify-center">
          <div className="text-[#FFC000] font-extrabold tracking-wider uppercase text-[11px] md:text-xs">
            SARAYBOSNA TAKSİYE HOŞGELDİNİZ
          </div>
          <h2 className="mt-1 font-extrabold tracking-wide text-[22px] md:text-[26px]">
            HİZMETLERİMİZ
          </h2>

          {/* kartlar */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10 justify-items-center">
            {services.map((it) => (
              <article
                key={it.title}
                className="w-full h-full max-w-[280px] rounded-2xl bg-white p-6 md:p-7
                           border border-black/5 shadow-[0_14px_36px_rgba(0,0,0,.08)]
                           transition duration-200 hover:-translate-y-1
                           hover:shadow-[0_24px_60px_rgba(0,0,0,.12)]"
              >
                <div className="mx-auto mb-4 grid place-items-center w-14 h-14 rounded-full bg-[#FFF3C4] ring-1 ring-[#FFC000]/40">
                  <div className="relative w-9 h-9">
                    <Image src={it.icon} alt={it.title} fill className="object-contain" />
                  </div>
                </div>

                <h3 className="text-center font-extrabold text-[14px] md:text-[15px] tracking-wide">
                  {it.title}
                </h3>
                <div className="mx-auto mt-2 h-[6px] w-[46px] rounded-full bg-[#FFC000]/90" />
                <p className="mt-3 text-center text-[13px] leading-relaxed text-black/70">
                  {it.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>

      {/* dama şerit */}
      <div className="checker" />
    </section>
  );
}
