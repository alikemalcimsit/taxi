import Script from "next/script";
import { faq } from "@/data/faq";

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <section id="sss" className="bg-[#0f1114] text-white py-12 md:py-16 border-t border-white/10" aria-labelledby="faq-title">
      <div className="mx-auto w-full max-w-[960px] px-5 md:px-8 xl:px-0">
        <h2 id="faq-title" className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">Sık Sorulan Sorular</h2>
        <div className="divide-y divide-white/10 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          {faq.map((f, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none select-none px-5 py-4 flex items-start gap-3">
                <span className="mt-1 text-[#FFC000]">❓</span>
                <span className="font-semibold text-sm md:text-base group-open:text-[#FFC000] transition-colors">{f.q}</span>
                <span className="ml-auto mt-1 text-xs opacity-60 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-12 pb-5 -mt-2 text-sm md:text-[15px] leading-relaxed text-white/80">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
      <Script id="ld-json-faq" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
