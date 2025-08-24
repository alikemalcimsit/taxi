// features/fleet/Fleet.tsx
import Image from "next/image";
import Container from "@/components/layout/Container";
import { vehicles } from "@/data/vehicles";

export default function Fleet() {
  return (
    <section id="araclar" className="bg-[#f6f7f9]  text-black">
      <Container>
        <div className="py-12 md:py-16 flex flex-col h-full justify-center">
          <div className="text-xs  font-extrabold text-[#FFC000] uppercase tracking-wider">
            Hizmet Filomuz
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-2">Araçlarımız</h2>
          <p className="text-sm text-black/60 mb-6">
            İhtiyacınıza uygun aracı seçin. Tümü bakımlı ve klimalıdır.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vehicles.map((v) => (
              <article
                key={v.id}
                className="rounded-2xl border border-black/5 bg-white shadow-soft p-4 flex flex-col"
              >
                <div className="h-28 grid place-items-center rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(255,192,0,.16),transparent_60%)] mb-3">
                  <Image src={v.img} alt={v.name} width={160} height={90} className="h-[90px] w-auto" />
                </div>
                <h3 className="font-bold">{v.name}</h3>
                <p className="text-sm text-black/65 mt-1 mb-3">{v.desc}</p>
                <div className="mt-auto flex gap-2">
                  <a href="tel:+905060237736" className="flex-1 rounded-full bg-[#FFC000] text-black text-sm font-extrabold py-2 text-center">
                    Hemen Ara
                  </a>
                  <a href="#" className="flex-1 rounded-full bg-black/5 text-black text-sm font-extrabold py-2 text-center">
                    Detaylar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <div className="checker" />
    </section>
  );
}
