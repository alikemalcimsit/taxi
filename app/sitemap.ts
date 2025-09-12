import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/hizmetler",
    "/iletisim",
    "/blog",
  ].map(p => ({ url: `${baseUrl}${p}`, lastModified: now }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  // Hizmetler tek sayfada; eğer her hizmet için ayrı path açarsan buraya ekleyebilirsin.
  const serviceEntries: MetadataRoute.Sitemap = services.map(s => ({
    url: `${baseUrl}/hizmetler#${encodeURIComponent(s.title.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified: now,
  }));

  return [
    ...staticPages,
    ...blogEntries,
    ...serviceEntries,
  ];
}
