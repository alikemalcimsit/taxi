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
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const site: SiteConfig = {
  name: "Saraybosna Taksi",
  phone: "+90 506 023 77 36",
  address: "Erzurum",
  addressTitle: "Adres:",
  url: SITE_URL,           // <- eklendi
  social: {
    whatsapp: "https://wa.me/905060237736",
  },
};

export const telHref = `tel:${site.phone.replace(/\D/g, "")}`;