// Central configuration — edit all contact, booking, and content data here
export const SITE_CONFIG = {
  name: "Villa Haitam",
  fullName: "Villa Haitam Marrakech",
  tagline: {
    fr: "Votre villa privée aux portes de Marrakech",
    en: "Your private villa at the gates of Marrakech",
    ar: "فيلتك الخاصة على أبواب مراكش",
  },
  address: {
    line1: "Douar Aarich, Commune Souihla",
    line2: "Marrakech 40000, Maroc",
    full: "Douar Aarich, Commune Souihla, Marrakech 40000, Maroc",
  },
  phone: "+212 661 242 211",
  phoneRaw: "+212661242211",
  whatsapp: "+212661242211",
  whatsappMessage:
    "Bonjour, je souhaite avoir des informations sur Villa Haitam Marrakech et connaître les disponibilités.",
  email: "", // Add email when available
  googleMapsUrl:
    "https://www.google.com/maps/search/Villa+Haitam+Marrakech+Douar+Aarich+Commune+Souihla",
  bookingUrl: "", // Add booking engine URL when available
  instagram: "",
  facebook: "",
  villa: {
    surface: "2 000 m²",
    capacity: 9,
    bedrooms: 3,
    bathrooms: 3,
    features: [
      "piscine_privee",
      "jardin",
      "terrasse",
      "cuisine_equipee",
      "barbecue",
      "wifi",
      "parking",
      "climatisation",
      "aire_jeux",
    ],
  },
  promotions: [] as Array<{
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    active: boolean;
    image: string;
  }>,
};

export const getWhatsAppUrl = (message?: string) => {
  const msg = encodeURIComponent(
    message || SITE_CONFIG.whatsappMessage
  );
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`;
};

export const getPhoneUrl = () => `tel:${SITE_CONFIG.phoneRaw}`;