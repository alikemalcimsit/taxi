// app/hizmetler/HeaderMotionClient.tsx
"use client";

import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";

export default function HeaderMotionClient() {
  return (
    <div
      className="motion-safe:animate-[fadeUp_.35s_ease-out_forwards]"
      // istersen küçük gecikme:
      // style={{ animationDelay: "40ms" }}
    >
      <PageHeader
        title="ERZURUM TAKSİ HİZMETLERİ"
        breadcrumb={
          <>
            <Link href="/" className="hover:text-white">Anasayfa</Link>
            <span className="mx-1 text-[#FFC000]">//</span>
            <span aria-current="page">Hizmetlerimiz</span>
          </>
        }
      />
    </div>
  );
}
