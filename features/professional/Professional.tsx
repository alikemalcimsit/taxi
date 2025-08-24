import Image from "next/image";

export default function Professional() {
  return (
    <section className="bg-[#0B0C0E] h-[98vh] flex items-center justify-center text-white">
      <div className="container py-12 md:py-16 grid items-center gap-10 md:grid-cols-2">
        {/* Sol: başlık + içerik + CTA */}
        <div>
          <p className="text-[#FFC000] font-extrabold tracking-wide mb-1">
            Erzurum Saraybosna Taksi
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Tam Anlamıyla Profesyonel
            <br /> Hizmet
          </h2>

          <p className="text-white/80 leading-7 text-[15px] md:text-base">
            Erzurum Merkez ve ilçelerine, hizmet veriyoruz. Günün her saati 7/24
            nöbetçi araçlarımızla profesyonel konforlu güvenilir taşımacılık hizmetiyle
            Yakutiye, Palandöken, Aziziye, Atatürk Üniversitesi, Erzurum Teknik
            Üniversitesi, Otogar, Havalimanı hizmetlerini sunuyoruz. Erzurum Taksi
            her zaman yanınızda.
          </p>

          <a
            href="tel:+905060237736"
            className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#FFC000] text-black
                       font-extrabold px-6 py-3 shadow-[0_10px_30px_rgba(255,192,0,.30)]"
          >
            Hemen Ara <span className="text-lg">📞</span>
          </a>
        </div>

        {/* Sağ: araç görseli */}
        <div className="relative">
          <Image
            src="/images/car-pro.png"      /* sağdaki skoda görseli (png, transparan) */
            alt="Saraybosna Taksi Aracı"
            width={640}
            height={360}
            className="mx-auto h-auto w-[min(90%,640px)]
                       drop-shadow-[0_36px_90px_rgba(255,192,0,.35)]"
            priority
          />
        </div>
      </div>
      
    </section>
  );
}
