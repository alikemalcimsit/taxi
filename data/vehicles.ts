export type Vehicle = { id: string; name: string; desc: string; img: string };

export const vehicles: Vehicle[] = [
  { id: "lux", name: "Lüks Araçlar", desc: "Ekstra diz mesafesi, üst seviye konfor.", img: "/images/vehicle-lux.png" },
  { id: "std", name: "Standart Araçlar", desc: "Günlük kullanım için ekonomik seçenek.", img: "/images/vehicle-std.png" },
  { id: "van", name: "Geniş Hacimli", desc: "7 kişiye kadar kapasite. Aile/grup transferleri.", img: "/images/vehicle-van.png" },
  { id: "vip", name: "VIP Araçlar", desc: "Şoförlü minivan, premium donanım.", img: "/images/vehicle-vip.png" },
];
