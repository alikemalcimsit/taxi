// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import { blogPosts } from "@/data/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

type Params = Promise<{ slug: string }>;

function abs(path?: string) {
  if (!path) return undefined;
  try { return new URL(path, SITE_URL).toString(); } catch { return path; }
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

// ✅ SEO (Next 15: params -> Promise, await gerekiyor)
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog | Saraybosna Taksi",
      description: "Erzurum Saraybosna Taksi blog yazıları.",
      alternates: { canonical: "/blog" },
    };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image ? abs(post.image) : `${SITE_URL}/og/og-cover.jpg`;

  return {
    title: `${post.title} | Saraybosna Taksi`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | Saraybosna Taksi`,
      description: post.excerpt,
      siteName: "Saraybosna Taksi",
      locale: "tr_TR",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
      authors: post.author ? [post.author] : undefined,
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Saraybosna Taksi`,
      description: post.excerpt,
      images: [image],
    },
    keywords: ["Erzurum taksi", "taksi blog", "transfer", "Saraybosna Taksi"],
  };
}

export default async function BlogPostPage(
  { params }: { params: Params }
) {
  const { slug } = await params;

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? blogPosts[index] : undefined;
  if (!post) return notFound();

  const prev = blogPosts[index - 1];
  const next = blogPosts[index + 1];

  // JSON-LD: Article + Breadcrumbs
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? abs(post.image) : undefined,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: "Saraybosna Taksi" },
    publisher: { "@type": "Organization", name: "Saraybosna Taksi", logo: { "@type": "ImageObject", url: `${SITE_URL}/icons/apple-touch-icon.png` } },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      {/* Üst başlık */}
      <PageHeader
        title={post.title}
        breadcrumb={
          <>
            <Link href="/" className="hover:text-white">Anasayfa</Link>{" "}
            <span className="mx-1 text-[#FFC000]">//</span>{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </>
        }
      />

      {/* Kapak görseli (varsa) */}
      {post.image && (
        <div className="bg-[#0f1114]">
          <div className="max-w-[1184px] mx-auto px-5">
            <div className="relative h-60 md:h-80 w-full rounded-xl overflow-hidden -mt-6 md:-mt-8 shadow-[0_20px_60px_rgba(0,0,0,.25)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 1184px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* İçerik */}
      <section className="py-12 md:py-16 bg-[#F2F3F5] text-black">
        <div className="mx-auto px-5 md:px-8 xl:px-16">
          <div className="max-w-[960px] mx-auto flex justify-center flex-col">
            {/* Meta satırı */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-black/60 mb-6">
              <span className="inline-flex items-center gap-1">
                <span>📅</span> {formatDate(post.date)}
              </span>
              {post.author && (
                <span className="inline-flex items-center gap-1">
                  <span>✍️</span> {post.author}
                </span>
              )}
              {post.readTime && (
                <span className="inline-flex items-center gap-1">
                  <span>⏱️</span> {post.readTime} okuma
                </span>
              )}
            </div>

            {/* Paylaşım butonları */}
            <div className="flex items-center gap-3 mb-6">
              <ShareButton
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                label="Twitter"
              />
              <ShareButton
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                label="Facebook"
              />
              <ShareButton
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${SITE_URL}/blog/${post.slug}`)}`}
                label="WhatsApp"
              />
            </div>

            {/* Makale */}
            <article className="prose max-w-none prose-p:leading-relaxed prose-headings:font-extrabold prose-h2:text-[22px] prose-h3:text-[18px] prose-a:text-[#111316] prose-a:underline text-justify">
              {post.content}
            </article>

            {/* Ayraç */}
            <div className="my-10 h-px bg-black/10" />

            {/* Önceki / Sonraki */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prev ? (
                <NavCard title={prev.title} href={`/blog/${prev.slug}`} direction="prev" />
              ) : (
                <div className="opacity-50 text-sm">Önceki yazı yok</div>
              )}
              {next ? (
                <NavCard title={next.title} href={`/blog/${next.slug}`} direction="next" />
              ) : (
                <div className="opacity-50 text-sm md:text-right">Sonraki yazı yok</div>
              )}
            </div>

            {/* Geri linki */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-block rounded-md bg-[#FFC000] text-black font-extrabold px-4 py-2 text-sm hover:bg-[#e6ae00] transition"
              >
                ← Tüm yazılar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <Script id="ld-json-article" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Script id="ld-json-breadcrumbs" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
    </>
  );
}

/* Paylaşım butonu */
function ShareButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs md:text-sm rounded-full border border-black/10 bg-white px-3 py-1.5 hover:bg-black/5 transition"
    >
      {label}
    </a>
  );
}

/* Prev/Next kartları */
function NavCard({
  title,
  href,
  direction,
}: {
  title: string;
  href: string;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={href}
      className={`group rounded-lg border border-black/10 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,.06)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,.08)] transition ${direction === "next" ? "md:text-right" : ""}`}
    >
      <div className="text-[11px] tracking-wide text-black/60 mb-1">
        {direction === "prev" ? "← Önceki Yazı" : "Sonraki Yazı →"}
      </div>
      <div className="font-bold">{title}</div>
    </Link>
  );
}
