import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamic OG image per blog post
export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  const title = post?.title || "Saraybosna Taksi Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#111316,#1f2226)",
          color: "white",
          fontFamily: 'Arial, "Helvetica Neue", sans-serif',
          padding: 60,
        }}
      >
        <div style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontSize: 24, opacity: 0.85, maxWidth: 900 }}>
          Erzurum taksi ve transfer rehberi.
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: 26, fontWeight: 600 }}>
          <span style={{ color: '#FFC000' }}>Saraybosna Taksi</span>
          <span style={{ fontSize: 22 }}>+90 535 365 65 67</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
