// config/site.ts

export type SiteConfig = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  addressTitle?: string;
  url?: string;            // <- eklendi
  social?: {
    whatsapp?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
};
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://erzurumtaksici.com";

export const site: SiteConfig = {
  name: "Erzurum Taksici | Saraybosna Taksi",
  // Updated phone number (previous: +90 506 023 77 36)
  phone: "+90 535 365 65 67",
  address: "Erzurum Merkez, Türkiye",
  addressTitle: "Adres:",
  url: SITE_URL,
  social: {
    // Updated WhatsApp link to match new number (international format without +)
    whatsapp: "https://wa.me/905353656567",
  },
};

export const telHref = `tel:${site.phone.replace(/\D/g, "")}`; // => tel:+905353656567