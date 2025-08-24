// app/hizmetler/page.tsx  veya pages/hizmetler/index.tsx
import PageHeader from "@/components/layout/PageHeader";
import Services from "@/features/hizmetler/Services";
import Fleet from "@/features/fleet/Fleet";

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        title="ERZURUM TAKSİ HİZMETLERİ"
        breadcrumb={
          <>
            Anasayfa <span className="text-[#FFC000]">// Hizmetlerimiz</span>
          </>
        }
      />

      {/* alt içerikler */}
      <Services />
      <Fleet />
    </>
  );
}
