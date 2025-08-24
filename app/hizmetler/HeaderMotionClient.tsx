// app/hizmetler/HeaderMotionClient.tsx
"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function HeaderMotionClient() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
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
    </motion.div>
  );
}
