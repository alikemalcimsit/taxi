// app/robots/route.ts
import { NextResponse } from "next/server";

const FALLBACK_SITE = "https://example.com";

function getBaseUrl(req: Request) {
  // 1) .env üzerinden verilmişse onu kullan
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/+$/, "");

  // 2) Header'lardan üret (Vercel / proxy uyumlu)
  const headers = new Headers(req.headers);
  const host = headers.get("x-forwarded-host") || headers.get("host");
  const proto = headers.get("x-forwarded-proto") || "https";
  if (host) return `${proto}://${host}`.replace(/\/+$/, "");

  // 3) Son çare fallback
  return FALLBACK_SITE;
}

export async function GET(req: Request) {
  const base = getBaseUrl(req);

  const lines: string[] = [
    "User-agent: *",
    "Allow: /",
    "",
    // Örnek dışlamalar (kullanmak istersen aç):
    // "Disallow: /api/private",
    // "Disallow: /admin",
    // "Disallow: /draft/",
    // "Disallow: /*?preview=",
    // TARANMASINI İSTEMEDİĞİN query patternleri için (Google wildcards sınırlı)
    // "Disallow: /*?*utm_",
    "",
    `Sitemap: ${base}/sitemap.xml`,
    `Host: ${base}`,
  ];

  const content = lines.join("\n");

  return new NextResponse(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
