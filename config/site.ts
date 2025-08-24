// config/site.ts
export const site = {
  name: "Saraybosna Taksi",
  phone: "+90 506 023 77 36",
  email: "info@ornek.com",
  address: "Erzurum",
  addressTitle: "Adres",
  social: {
    whatsapp: "https://wa.me/905060237736",
  },
};

// tel: linki için
export const telHref = site.phone.replace(/\s+/g, "").replace(/^0/, "+90");
