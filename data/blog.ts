export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  content: string; // HTML veya markdown benzeri düz string
  image: string; // /images/... relative path
  imageAlt?: string; // erişilebilirlik + SEO
  author?: string;
  readTime?: string; // "4 dk" gibi
  updatedAt?: string; // future modifications
  keywords?: string[]; // long-tail odaklı
};

export const blogPosts: BlogPost[] = [
  {
    slug: "erzurumda-taksi-ucretleri-2025",
    title: "Erzurum’da Taksi Ücretleri 2025 (Güncel Fiyat Rehberi)",
    excerpt: "2025 Erzurum taksi açılış ücreti, kilometre başı fiyat, gece tarifesi ve havalimanı transfer sabit ücretleri.",
    date: "2025-01-15",
    updatedAt: "2025-02-28",
    image: "/images/image (1).jpeg",
    imageAlt: "Erzurum şehir içi bir taksi durakta beklerken - ücret rehberi",
    author: "Saraybosna Taksi",
    readTime: "5 dk",
    keywords: ["Erzurum taksi ücretleri 2025", "Erzurum taksi açılış ücreti", "Erzurum kilometre taksi fiyatı"],
    content: `
<h2>2025 Erzurum Taksi Ücretleri</h2>
<p>Erzurum’da 2025 yılı <strong>taksi açılış ücreti 25 TL</strong>, kilometre başına ücret ise <strong>22 TL</strong> olarak uygulanmaktadır. Bekleme ücreti, resmi tatil/özel gece tarifeleri ve <strong>Erzurum Havalimanı</strong> – şehir merkezi sabit transfer bedelleri de güncellenmiştir. Bu rehberde şehir içi – şehirler arası yolculuk tahmini maliyet hesaplama yöntemini, sürpriz ödemelerden kaçınma ipuçlarını ve doğru taksiyi seçmenin püf noktalarını bulacaksınız.</p>
<h3>Standart Tarife Kalemleri</h3>
<ul>
 <li><strong>Açılış Ücreti:</strong> 25 TL</li>
 <li><strong>Kilometre Ücreti:</strong> 22 TL</li>
 <li><strong>Bekleme (dakika):</strong> 3 TL (trafik ışığı / trafik yoğunluğu dahil)</li>
 <li><strong>Gece Tarifesi:</strong> Ayrı tarife yok, aynı fiyat (00:00–06:00)</li>
 <li><strong>Havalimanı – Merkez:</strong> Ortalama 450–500 TL (trafik ve hava durumuna göre)</li>
 <li><strong>Otogar – Merkez:</strong> 170–220 TL</li>
</ul>
<h3>Örnek Mesafe – Fiyat Tablosu</h3>
<table>
 <thead><tr><th>Mesafe (km)</th><th>Tahmini Fiyat (TL)</th></tr></thead>
 <tbody>
  <tr><td>3 km</td><td>≈ 90 – 95</td></tr>
  <tr><td>5 km</td><td>≈ 135 – 145</td></tr>
  <tr><td>10 km</td><td>≈ 250 – 260</td></tr>
  <tr><td>15 km</td><td>≈ 360 – 380</td></tr>
 </tbody>
 </table>
<p>Fiyatlar; yolun eğimi, kar durumu ve bekleme süresine bağlı olarak değişebilir. Özellikle <strong>kış aylarında lastik zinciri</strong> gerektiren güzergâhlarda süre uzayabilir.</p>
<h3>Şehirler Arası Örnek Transferler</h3>
<ul>
 <li>Erzurum – Palandöken Kayak Merkezi: 15–18 dk / 350–400 TL</li>
 <li>Erzurum – Tortum Gölü: 1 saat 10 dk / 2.000–2.300 TL</li>
 <li>Erzurum – Oltu: 1 saat 30 dk / 2.800–3.200 TL</li>
 <li>Erzurum – Kars: 2 saat 30 dk / 5.500–6.200 TL</li>
</ul>
<h3>Fiyat Hesaplama Formülü</h3>
<pre>Açılış + (Mesafe x km ücreti) + Bekleme süresi x dakika bekleme bedeli</pre>
<p><strong>Örnek:</strong> 8 km şehir içi yolculuk + 4 dk bekleme: 25 + (8 x 22) + (4 x 3) = 25 + 176 + 12 = 213 TL (yuvarlanabilir).</p>
<h3>Şeffaflık İçin Öneriler</h3>
<ol>
 <li>Taksimetre çalıştığından emin olun.</li>
 <li>Havalimanı ve uzun yol için binmeden <strong>tahmini fiyat</strong> isteyin.</li>
 <li>Kış şartlarında ek ücret (zincir vb.) sorulup sorulmadığını teyit edin.</li>
 <li>Bagaj / evcil hayvan ekstra ücretini baştan konuşun.</li>
</ol>
<p>Daha kapsamlı yolculuk planı yapıyorsanız <a href="/hizmetler">hizmetler sayfamıza</a> bakabilir veya bizi hemen arayabilirsiniz.</p>
<blockquote><strong>Hızlı İletişim:</strong> <a href="tel:+905353656567">0535 365 65 67</a> – 7/24 Erzurum taksi ve transfer.</blockquote>
`,
  },
  {
    slug: "erzurum-havalimani-transfer",
    title: "Erzurum Havalimanı Transfer Hizmeti (7/24 Konforlu Ulaşım)",
    excerpt: "Erzurum Havalimanı geliş–gidiş transferi: VIP araç, kar güvenliği, sabit fiyat ve rezervasyon ipuçları.",
    date: "2025-02-02",
    updatedAt: "2025-02-28",
    image: "/images/image (2).jpeg",
    imageAlt: "Erzurum Havalimanı terminali önünde transfer aracı",
    author: "Saraybosna Taksi",
    readTime: "4 dk",
    keywords: ["Erzurum havalimanı transfer", "Erzurum airport taxi", "Erzurum VIP transfer"],
    content: `
<h2>Neden Özel Havalimanı Transferi?</h2>
<p><strong>Erzurum Havalimanı – şehir merkezi</strong> arası kış aylarında yoğun kar ve buzlanma sebebiyle riskli olabilir. Zincirli, bakımlı ve deneyimli şoföre sahip araçla yolculuk etmek hem güvenli hem zaman kazandırıcıdır.</p>
<h3>Hizmet Özellikleri</h3>
<ul>
 <li>7/24 karşılama – Gece uçuşlarında ek ücret yok</li>
 <li>Beklenen gecikmeli inişlerde ücretsiz makul bekleme</li>
 <li>Bagaj ve kayak ekipmanı desteği</li>
 <li>VIP / Geniş bagajlı araç opsiyonları</li>
 <li>Çocuk koltuğu talebi (önceden belirtin)</li>
</ul>
<h3>Transfer Süresi ve Ücret Aralığı</h3>
<p>Normal şartlarda 15–20 dakika sürer. Yoğun kar + tipide 30 dakikayı bulabilir. 2025 dönemi için ortalama sabit ücret aralığı <strong>450–500 TL</strong>.</p>
<h3>Rezervasyon Tavsiyeleri</h3>
<ol>
 <li>Uçuş kodunu paylaşın – Rötar takibi kolaylaşır.</li>
 <li>Bagaj sayısı + ekipman (kayak seti vb.) belirtin.</li>
 <li>Gidiş-dönüş birlikte planlayın, fiyat avantajı alın.</li>
 <li>Palandöken’e devam edecekseniz tek paket fiyat isteyin.</li>
</ol>
<h3>Palandöken Otel Transferi</h3>
<p>Havalimanından direkt Palandöken otelinize konforlu, zincirli araçlarla ulaşım sağlıyoruz. Erken sabah uçuşlarında önceden plan yapmanız yer bulma açısından kritiktir.</p>
<p>Daha fazla bilgi için <a href="/hizmetler">hizmetler</a> sayfamızı inceleyin veya şimdi arayın.</p>
<blockquote><strong>Transfer Rezervasyon:</strong> <a href="tel:+905353656567">0535 365 65 67</a></blockquote>
`,
  },
  {
    slug: "kis-aylarinda-taksi-hizmeti",
    title: "Kış Aylarında Taksi Hizmeti (Güvenli Yolculuk Rehberi)",
    excerpt: "Erzurum kış şartlarında güvenli taksi yolculuğu için lastik, zincir, rota ve hazırlık önerileri.",
    date: "2025-02-20",
    updatedAt: "2025-02-28",
    image: "/images/image (3).jpeg",
    imageAlt: "Karlı Erzurum yolunda kış lastikli taksi",
    author: "Saraybosna Taksi",
    readTime: "4 dk",
    keywords: ["Erzurum kış taksi", "karda güvenli ulaşım", "Erzurum zincirli taksi"],
    content: `
<h2>Zorlu Kış Koşullarına Hazırlık</h2>
<p>Erzurum; uzun, sert ve karlı kışlarıyla bilinir. Bu dönemde <strong>deneyimli şoför + doğru ekipman</strong> kombinasyonu hayati önem taşır. Zincirsiz veya bakımsız araçta hem zaman kaybı hem güvenlik riski oluşur.</p>
<h3>Kritik Güvenlik Unsurları</h3>
<ul>
 <li>Kış lastiği diş derinliği &gt; 4 mm</li>
 <li>Hazır takılabilir kar zinciri</li>
 <li>Dolu antifriz ve cam suyu</li>
 <li>ABS + ESP aktif kontrol</li>
 <li>Erken fren yerine motor freni tekniği</li>
</ul>
<h3>Yolculuk Öncesi Yolcuya Tavsiyeler</h3>
<ol>
 <li>Varış saatini ve hassas uçuş bağlantılarını şoföre önceden iletin.</li>
 <li>Yoğun kar günlerinde ekstra süre bırakın.</li>
 <li>Kayak ekipmanı taşıyacaksanız araç tipini önceden seçin.</li>
 <li>Çocuk koltuğu gerekiyorsa en az 2 saat önce bildirin.</li>
</ol>
<h3>Palandöken ve Yayla Rotaları</h3>
<p>Palandöken ve yüksek rakımlı yaylalara çıkışlarda anlık rüzgâr + buzlanma görülebilir. Tecrübeli sürücü toparlama (counter-steer) refleksi ile kaymayı minimize eder.</p>
<p>Kış boyunca <a href="/hizmetler">özel transfer ve kayak ekipmanı taşımaya uygun araç</a> taleplerinizi karşılıyoruz.</p>
<blockquote><strong>7/24 Destek:</strong> <a href="tel:+905353656567">0535 365 65 67</a> — Güvenli kış yolculuğu.</blockquote>
`,
  },
  {
    slug: "palandoken-transfer-rehberi",
    title: "Palandöken Transfer Rehberi (Kayak Otelleri Ulaşım)",
    excerpt: "Havalimanından Palandöken otellerine güvenli, zincirli ve hızlı transfer ipuçları.",
    date: "2025-02-28",
    image: "/images/image (4).jpeg",
    imageAlt: "Palandöken kayak merkezine giden yol ve araç",
    author: "Saraybosna Taksi",
    readTime: "4 dk",
    keywords: ["Palandöken transfer", "Palandöken taksi", "Erzurum kayak ulaşım"],
    content: `
<h2>Palandöken’e En Konforlu Ulaşım</h2>
<p>Kayak tatilinizin ilk dakikası stresli başlamasın. Erzurum Havalimanı – Palandöken arası <strong>15–25 dakika</strong> sürer. Kar yoğunluğu arttığında zincirli araç kullanımı kritik hale gelir.</p>
<h3>Neden Özel Transfer?</h3>
<ul>
 <li>Kayak ekipmanı için geniş bagaj</li>
 <li>Gece geç inişlerde hazır karşılama</li>
 <li>Çocuk koltuğu opsiyonu</li>
 <li>VIP / konfor sınıfı seçenek</li>
 <li>Hızlı ve güvenli sürüş</li>
</ul>
<h3>Otel Bilgisi ile Rezervasyon</h3>
<p>Otel adı + iniş saati + kişi sayısı + ekipman bilgisi ilettiğinizde bekleme süresi en aza iner. Gidiş-dönüş planlıyorsanız tek paket fiyat avantajı sağlayabilirsiniz.</p>
<p><a href="/hizmetler">Hizmetler</a> sayfamızda diğer transfer türlerini de inceleyin.</p>
<blockquote><strong>Palandöken Transfer Hattı:</strong> <a href="tel:+905353656567">0535 365 65 67</a></blockquote>
`,
  },
  {
    slug: "gece-taksi-erzurum",
    title: "Gece Taksi Hizmeti Erzurum (00:00 – 06:00 Güvenli Ulaşım)",
    excerpt: "Gece saatlerinde Erzurum’da güvenli, hızlı ve şeffaf taksi kullanımı rehberi.",
    date: "2025-02-28",
    image: "/images/image (5).jpeg",
    imageAlt: "Gece Erzurum caddesinde hareket eden taksi",
    author: "Saraybosna Taksi",
    readTime: "3 dk",
    keywords: ["gece taksi erzurum", "erzurum 24 saat taksi", "gece ulaşım"],
    content: `
<h2>Gece Yolculuklarında Güvenlik</h2>
<p>Erzurum’da gece ulaşımında temel öncelik <strong>güvenlik ve zamanında varış</strong>. Gece tarifesi farklı değildir; fakat yoğun kar + buzlanma süreyi uzatabilir.</p>
<h3>İpuçları</h3>
<ul>
 <li>Binmeden önce hedef konumu net söyleyin.</li>
 <li>Taksimetreyi görünür doğrulayın.</li>
 <li>Çevrimiçi konum paylaşımı yapabilirsiniz.</li>
 <li>Karlı zeminde ani kapı açmayın.</li>
 </ul>
<p>Uzun mesafe planlıyorsanız <a href="/hizmetler">şehirler arası transfer</a> opsiyonumuzu sorun.</p>
<blockquote><strong>Gece Çağrı:</strong> <a href="tel:+905353656567">0535 365 65 67</a></blockquote>
`,
  },
  {
    slug: "vip-transfer-erzurum",
    title: "VIP Transfer Erzurum (Konfor & Prestij)",
    excerpt: "Lüks ve geniş araçlarla havalimanı, Palandöken ve şehir içi VIP transfer çözümleri.",
    date: "2025-02-28",
    image: "/images/image (6).jpeg",
    imageAlt: "VIP siyah lüks araç yan profilden",
    author: "Saraybosna Taksi",
    readTime: "3 dk",
    keywords: ["erzurum vip transfer", "erzurum lüks taksi", "vip palandöken ulaşım"],
    content: `
<h2>VIP Transfer Kimler İçin?</h2>
<p>İş seyahati, özel misafir karşılama, toplantı – organizasyon transferleri için yüksek konforlu araçlarımız hazır.</p>
<h3>Öne Çıkan Ayrıcalıklar</h3>
<ul>
 <li>Geniş diz mesafesi</li>
 <li>Bagaj hacmi yüksek</li>
 <li>İsteğe bağlı rota durakları</li>
 <li>Gece – erken sabah esnekliği</li>
 <li>Profesyonel sürücü disiplini</li>
 </ul>
<p><a href="/hizmetler">Hizmetler</a> sayfasından diğer transfer türleriyle karşılaştırın.</p>
<blockquote><strong>VIP Rezervasyon:</strong> <a href="tel:+905353656567">0535 365 65 67</a></blockquote>
`,
  },
  {
    slug: "sehirler-arasi-taksi-erzurum",
    title: "Şehirler Arası Taksi Erzurum (Konforlu Uzun Yol)",
    excerpt: "Erzurum çıkışlı şehirler arası taksi ile bireysel veya küçük grup güvenli yolculuk rehberi.",
    date: "2025-02-28",
    image: "/images/image (7).jpeg",
    imageAlt: "Uzun yolda ilerleyen konforlu taksi aracı",
    author: "Saraybosna Taksi",
    readTime: "4 dk",
    keywords: ["şehirler arası taksi erzurum", "erzurum uzun yol taksi", "erzurum kars taksi"],
    content: `
<h2>Neden Şehirler Arası Taksi?</h2>
<p>Otobüs kalabalığını veya aktarma stresini istemeyen yolcular için direkt kapıdan kapıya ulaşım sağlar. Kars, Artvin, Ardahan gibi rotalar sık tercih edilir.</p>
<h3>Planlama Tavsiyeleri</h3>
<ul>
 <li>Kalkış saatini trafik + hava durumuna göre optimize edin.</li>
 <li>Bagaj / ekipman (kayak, enstrüman) önceden bildirilirse araç seçimi kolaylaşır.</li>
 <li>Gidiş-dönüş rezervasyonunda fiyat avantajı alabilirsiniz.</li>
 <li>Uzun yol mola duraklarını konuşarak belirleyin.</li>
 </ul>
<p>Şehir dışı planlarınız için <a href="/hizmetler">transfer çözümlerimize</a> göz atın.</p>
<blockquote><strong>Rezervasyon:</strong> <a href="tel:+905353656567">0535 365 65 67</a></blockquote>
`,
  },
  {
    slug: "guvenli-yolculuk-ipuclari",
    title: "Güvenli Taksi Yolculuğu İpuçları (Erzurum Özelinde)",
    excerpt: "Erzurum’da kış, gece ve uzun mesafe taksi yolculuklarında güvenlik ve maliyet kontrolü önerileri.",
    date: "2025-02-28",
    image: "/images/image (8).jpeg",
    imageAlt: "Sürücü yol bilgisini ekrandan kontrol ederken",
    author: "Saraybosna Taksi",
    readTime: "5 dk",
    keywords: ["güvenli taksi erzurum", "taksi ipuçları", "kış yolculuk güvenliği"],
    content: `
<h2>Ön Hazırlık</h2>
<p>Konum paylaşımı, sürüş rotası ve tahmini süre bilgisi sizi rahatlatır. Hava durumuna göre kıyafet + ekipman hazırlığı yapın.</p>
<h3>Sürücü ve Araç Kontrol Listesi</h3>
<ul>
 <li>Taksimetre aktif mi?</li>
 <li>Arka lastik dişleri eşit mi?</li>
 <li>Zincir / çekme halatı mevcut mu?</li>
 <li>Acil durum numarası (0535 365 65 67) kaydedildi mi?</li>
 </ul>
<h3>Taksimetre / Ücret Şeffaflığı</h3>
<p>Uzun yol veya havalimanı transferlerinde tahmini ücret isteyin. Şüpheli durumlarda belge talep edebilirsiniz.</p>
<h3>Bagaj & Ekipman</h3>
<p>Kırılabilir eşyalar için sabitleme rica edin. Kayak setleri dik konumda ve sabitlenmiş olmalı.</p>
<p>Daha fazla rota ve hizmet için <a href="/hizmetler">hizmetler</a> sayfasına bakın.</p>
<blockquote><strong>7/24 Destek Hattı:</strong> <a href="tel:+905353656567">0535 365 65 67</a></blockquote>
`,
  },
];
