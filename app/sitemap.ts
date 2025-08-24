import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com"; // kendi domaininle değiştir

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/hizmetler`, lastModified: new Date() },
    { url: `${baseUrl}/iletisim`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
  ];
}
