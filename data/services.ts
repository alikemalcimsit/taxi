export type Service = { 
  id: string; 
  title: string; 
  desc: string; 
  longDesc?: string;
  icon?: string;
  keywords?: string[];
};

export const services: Service[] = [
  {
    id: "sehirici-taksi",
    title: "ERZURUM ŞEHİR İÇİ TAKSİ",
    desc: "Erzurum merkez ve ilçelerde 7/24 güvenilir taksi hizmeti.",
    longDesc: "Erzurum şehir içi taksi hizmeti ile Yakutiye, Palandöken, Aziziye ve tüm merkez ilçelerde güvenli ulaşım. Profesyonel sürücülerimiz ile konforlu yolculuk.",
    icon: "/images/hizmet-1.png",
    keywords: ["Erzurum şehir içi taksi", "Erzurum merkez taksi", "Yakutiye taksi"],
  },
  {
    id: "havalimani-transfer",
    title: "ERZURUM HAVALİMANI TRANSFER",
    desc: "Erzurum Havalimanı'na ve havalimanından 7/24 transfer hizmeti.",
    longDesc: "Erzurum Havalimanı transfer hizmeti ile uçuşunuza zamanında, konforlu ulaşım. Gece uçuşlarında ek ücret yok. Sabit fiyat garantisi.",
    icon: "/images/hizmet-2.png",
    keywords: ["Erzurum havalimanı taksi", "Erzurum airport transfer", "Erzurum havaalanı taksi"],
  },
  {
    id: "palandoken-transfer",
    title: "PALANDÖKEN KAYAK MERKEZİ TRANSFER",
    desc: "Palandöken kayak merkezine güvenli transfer. Kış lastikli araçlar.",
    longDesc: "Palandöken kayak merkezi transfer hizmeti. Kış lastikli ve zincirli araçlarımızla kar şartlarında bile güvenli ulaşım. Kayak ekipmanı taşıma imkanı.",
    icon: "/images/hizmet-3.png",
    keywords: ["Palandöken transfer", "Palandöken taksi", "kayak merkezi transfer"],
  },
  {
    id: "vip-taksi",
    title: "ERZURUM VIP TAKSİ",
    desc: "Lüks ve VIP araçlarla konforlu yolculuk deneyimi.",
    longDesc: "Erzurum VIP taksi hizmeti ile iş toplantıları, özel günler ve konforlu yolculuklar için lüks araç seçenekleri. Geniş bagaj kapasitesi.",
    icon: "/images/hizmet-1.png",
    keywords: ["Erzurum VIP taksi", "Erzurum lüks taksi", "Erzurum özel araç"],
  },
  {
    id: "sehirlerarasi-transfer",
    title: "ŞEHİRLER ARASI TRANSFER",
    desc: "Erzurum'dan Kars, Trabzon ve çevre illere transfer.",
    longDesc: "Erzurum'dan Kars, Trabzon, Ağrı, Iğdır ve çevre illere şehirler arası taksi ve VIP transfer. Uzun yol deneyimli sürücüler.",
    icon: "/images/hizmet-2.png",
    keywords: ["Erzurum şehirler arası taksi", "Erzurum Kars taksi", "Erzurum uzun yol"],
  },
  {
    id: "otogar-transfer",
    title: "ERZURUM OTOGAR TRANSFER",
    desc: "Erzurum otogarından şehir merkezine ve tüm noktalara transfer.",
    longDesc: "Erzurum otogar taksi hizmeti ile terminalden şehir merkezine, otellere ve istediğiniz her noktaya güvenli ulaşım.",
    icon: "/images/hizmet-3.png",
    keywords: ["Erzurum otogar taksi", "Erzurum terminal taksi", "Erzurum bus station taxi"],
  },
];
