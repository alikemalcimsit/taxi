// app/blog/BlogListClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import { blogPosts } from "@/data/blog";

export default function BlogListClient() {
  const reduce = useReducedMotion();

  const v = {
    wrap:  { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } },
    head:  { hidden: { opacity: 0, y: reduce ? 0 : 10 }, show: { opacity: 1, y: 0, transition: { duration: .35 } } },
    card:  { hidden: { opacity: 0, y: reduce ? 0 : 18, filter: reduce ? "none" : "blur(2px)" },
             show:   { opacity: 1, y: 0, filter: "none", transition: { duration: .38, ease: "easeOut" } } },
  };

  return (
    <>
      {/* Başlık (animasyonlu) */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={v.head}>
        <PageHeader
          title="ERZURUM TAKSİ BLOG"
          breadcrumb={
            <>
              <Link href="/" className="hover:text-white">Anasayfa</Link>
              <span className="mx-1 text-[#FFC000]">//</span>
              <span aria-current="page">Blog</span>
            </>
          }
        />
      </motion.div>

      {/* Liste */}
      <section className="py-16 bg-[#F2F3F5]" aria-labelledby="blog-title">
        <div className="max-w-[1184px] mx-auto px-5">
          <h1 id="blog-title" className="sr-only">Erzurum Taksi Blog Yazıları</h1>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={v.wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {blogPosts.map((post: any) => (
              <motion.article
                key={post.slug}
                variants={v.card}
                className="rounded-xl bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,.08)]
                           overflow-hidden flex flex-col hover:-translate-y-0.5 transition will-change-transform"
                itemScope
                itemType="https://schema.org/BlogPosting"
                aria-label={post.title}
              >
                {/* Kapak görseli */}
                <Link href={`/blog/${post.slug}`} aria-label={`${post.title} yazısını oku`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/images/blog/placeholder.jpg"}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={false}
                    />
                  </div>
                </Link>

                {/* İçerik */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-black/60 mb-3">
                    <time dateTime={post.date}><span className="mr-1">🕓</span>{post.date}</time>
                  </div>

                  <h2 className="font-extrabold text-[16px] leading-snug mb-2" itemProp="headline">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-black/20 rounded"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-black/70 flex-1" itemProp="description">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block rounded-md bg-[#FFC000] text-black font-extrabold px-4 py-2 text-sm text-center hover:bg-[#e6ae00] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC000]"
                    aria-label={`${post.title} yazısını okumaya devam et`}
                    itemProp="url"
                  >
                    Daha fazla
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
