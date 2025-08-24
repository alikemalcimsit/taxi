import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      {/* Üst bar */}
      <div className="flex items-center justify-between px-6 py-2 text-sm border-b border-gray-700">
        <div className="flex gap-6">
          <span>📧 alikemalictimaii3@gmail.com</span>
          <span>📞 +90 506 023 7736</span>
        </div>
        <div>
          <span>Saraybosna Taksi / Erzurum</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-yellow-400">
          Saraybosna Taksi
        </Link>

        {/* Menü */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-400">
            Anasayfa
          </Link>
          <Link href="/hizmetler" className="hover:text-yellow-400">
            Hizmetlerimiz
          </Link>
          <Link href="/blog" className="hover:text-yellow-400">
            Blog
          </Link>
          <Link href="/iletisim" className="hover:text-yellow-400">
            İletişim
          </Link>
        </nav>

        {/* CTA Buton */}
        <Link
          href="tel:+905060237736"
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Taksi Çağır !
        </Link>
      </div>
    </header>
  );
}
