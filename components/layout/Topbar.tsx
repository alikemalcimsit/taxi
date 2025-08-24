// components/layout/Topbar.tsx
export default function Topbar() {
  return (
    <div className="w-full bg-black/60 border-b border-white/10 text-xs">
      <div className="container flex items-center justify-between h-9">
        <div className="flex gap-5 opacity-90">
          <a href="mailto:info@ornek.com" className="hover:opacity-100">✉️ info@ornek.com</a>
          <span>📞 +90 506 023 77 36</span>
        </div>
        <div className="opacity-90">📍 Saraybosna Taksi / Erzurum</div>
      </div>
    </div>
  );
}
