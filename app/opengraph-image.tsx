import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#0b0c0e,#17191d)",
          color: "white",
          fontFamily: 'Arial, "Helvetica Neue", sans-serif',
          padding: 64,
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.15 }}>
          Erzurum 7/24 Taksi
        </div>
        <div style={{ fontSize: 24, opacity: 0.9, maxWidth: 880 }}>
          Havalimanı – Otogar – Şehir içi & şehirler arası güvenli transfer.
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: 28,
          fontWeight: 600
        }}>
          <span style={{ color: '#FFC000' }}>Saraybosna Taksi</span>
          <span style={{ fontSize: 22 }}>+90 535 365 65 67</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
