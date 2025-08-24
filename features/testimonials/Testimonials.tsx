import Container from "../../components/layout/Container";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section id="yorumlar" className="bg-[#0e1014]  text-white py-12 md:py-16 border-y border-white/10">
      <Container>
        <div className="text-xs font-extrabold text-[#FFC000] uppercase tracking-wider">Mutlu Müşteri</div>
        <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-2">Müşteri Yorumları</h2>
        <p className="text-sm text-white/70 mb-6">Gerçek yolcu deneyimleri. Ortalama 4.9/5 ⭐</p>

        <div className="grid md:grid-cols-3 gap-4  ">
          {testimonials.map((t) => (
            <article key={t.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <div className="text-[#FFC000] mb-2">{"★".repeat(t.stars ?? 5)}</div>
              <p className="text-sm text-white/90">{t.text}</p>
              <div className="mt-4 text-sm text-white/80 font-semibold">{t.name}</div>
              <div className="text-xs text-white/60">{t.area}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
