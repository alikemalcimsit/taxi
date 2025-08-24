// features/blog/BlogListPage.tsx
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import { blogPosts } from "../../data/blog";

export default function BlogListPage() {
  return (
    <>
      <PageHeader
        title="ERZURUM TAKSİ BLOG"
        breadcrumb={
          <>
            Anasayfa <span className="text-[#FFC000]">// Blog</span>
          </>
        }
      />

      <section className="py-16 bg-[#F2F3F5]">
        <div className="max-w-[1184px] mx-auto px-5">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,.08)] overflow-hidden flex flex-col"
              >
                {/* Kapak görseli */}
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/images/blog/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={false}
                  />
                </div>

                {/* İçerik */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* tarih */}
                  <div className="flex items-center text-xs text-black/60 mb-3">
                    <span className="mr-1">🕓</span> {post.date}
                  </div>

                  {/* başlık */}
                  <h2 className="font-extrabold text-[16px] leading-snug mb-2">
                    {post.title}
                  </h2>

                  {/* özet */}
                  <p className="text-sm text-black/70 flex-1">{post.excerpt}</p>

                  {/* buton */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block rounded-md bg-[#FFC000] text-black font-extrabold px-4 py-2 text-sm text-center hover:bg-[#e6ae00] transition"
                  >
                    daha fazla
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
