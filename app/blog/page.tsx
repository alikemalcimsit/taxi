// app/blog/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import BlogListClient from "./BlogListClient";
import { blogPosts } from "@/data/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const BRAND = "Saraybosna Taksi";

export const metadata: Metadata = {
  title: "Erzurum Taksi Blog | Saraybosna Taksi",
  description:
    "Erzurum’da taksi ve transfer hakkında ipuçları, güzergâhlar, fiyatlar ve faydalı bilgiler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: BRAND,
    title: "Erzurum Taksi Blog | Saraybosna Taksi",
    description:
      "Taksi ve transfer rehberleri, ipuçları ve güncel içerikler.",
    images: [{ url: "/og/og-cover.jpg", width: 1200, height: 630, alt: BRAND }],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erzurum Taksi Blog | Saraybosna Taksi",
    description:
      "Taksi ve transfer rehberleri, ipuçları ve güncel içerikler.",
    images: ["/og/og-cover.jpg"],
  },
  keywords: [
    "Erzurum taksi blog",
    "Erzurum transfer rehberi",
    "taksi fiyatları Erzurum",
    "Saraybosna Taksi blog",
  ],
};

export default function BlogPage() {
  // JSON-LD: Blog + ItemList + Breadcrumbs
  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Erzurum Taksi Blog",
    url: `${SITE_URL}/blog`,
    blogPost: blogPosts.map((p: any) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      image: p.image ? new URL(p.image, SITE_URL).toString() : undefined,
      datePublished: p.date,           // mümkünse ISO format ver
      dateModified: p.updatedAt ?? p.date,
      url: `${SITE_URL}/blog/${p.slug}`,
      author: p.author
        ? { "@type": "Person", name: p.author }
        : { "@type": "Organization", name: BRAND },
    })),
  };

  const jsonLdList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((p: any, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${p.slug}`,
      item: {
        "@type": "BlogPosting",
        name: p.title,
        description: p.excerpt,
        url: `${SITE_URL}/blog/${p.slug}`,
      },
    })),
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <>
      <BlogListClient />

      {/* JSON-LD */}
      <Script id="ld-blog" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }} />
      <Script id="ld-itemlist" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdList) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
    </>
  );
}
