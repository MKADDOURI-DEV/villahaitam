export type Lang = "fr" | "en" | "ar";

export const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  "nav.home": { fr: "Accueil", en: "Home", ar: "الرئيسية" },
  "nav.villa": { fr: "La Villa", en: "The Villa", ar: "الفيلا" },
  "nav.chambres": { fr: "Chambres", en: "Rooms", ar: "الغرف" },
  "nav.experience": {
    fr: "Expérience",
    en: "Experience",
    ar: "التجربة",
  },
  "nav.galerie": { fr: "Galerie", en: "Gallery", ar: "معرض الصور" },
  "nav.marrakech": { fr: "Marrakech", en: "Marrakech", ar: "مراكش" },
  "nav.contact": { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
  "nav.reserver": { fr: "Réserver", en: "Book Now", ar: "احجز الآن" },

  // Hero
  "hero.title": {
    fr: "Votre villa privée aux portes de Marrakech",
    en: "Your private villa at the gates of Marrakech",
    ar: "فيلتك الخاصة على أبواب مراكش",
  },
  "hero.subtitle": {
    fr: "Un espace exclusif pour profiter de Marrakech autrement, entre intimité, nature et confort.",
    en: "An exclusive space to experience Marrakech differently, between intimacy, nature and comfort.",
    ar: "مساحة حصرية لتجربة مراكش بطريقة مختلفة، بين الخصوصية والطبيعة والراحة.",
  },
  "hero.cta1": {
    fr: "Réserver votre séjour",
    en: "Book Your Stay",
    ar: "احجز إقامتك",
  },
  "hero.cta2": {
    fr: "Découvrir la villa",
    en: "Discover the Villa",
    ar: "اكتشف الفيلا",
  },
  "hero.whatsapp": {
    fr: "Disponibilités sur WhatsApp",
    en: "Check Availability on WhatsApp",
    ar: "التوفر على واتساب",
  },

  // Intro
  "intro.welcome": {
    fr: "Bienvenue à Villa Haitam",
    en: "Welcome to Villa Haitam",
    ar: "مرحباً بكم في فيلا حيتام",
  },
  "intro.desc": {
    fr: "Villa Haitam est une résidence privée d'exception nichée dans la région de Souihla, à quelques kilomètres de Marrakech. Offrant calme, intimité et espace, elle accueille jusqu'à 9 personnes dans un cadre verdoyant avec piscine privée, jardin et terrasses.",
    en: "Villa Haitam is an exceptional private residence nestled in the Souihla region, a few kilometres from Marrakech. Offering calm, privacy and space, it welcomes up to 9 guests in a lush setting with private pool, garden and terraces.",
    ar: "فيلا حيتام هي إقامة خاصة استثنائية تقع في منطقة سويهلة، على بعد كيلومترات قليلة من مراكش. توفر الهدوء والخصوصية والمساحة، وتستقبل ما يصل إلى 9 أشخاص في إطار خضراء مع مسبح خاص وحديقة وشرفات.",
  },

  // Stats
  "stat.surface": { fr: "2 000 m²", en: "2,000 m²", ar: "٢٠٠٠ م²" },
  "stat.surface.label": {
    fr: "d'espace privé",
    en: "private space",
    ar: "مساحة خاصة",
  },
  "stat.guests": { fr: "9", en: "9", ar: "٩" },
  "stat.guests.label": {
    fr: "personnes max",
    en: "guests max",
    ar: "أشخاص كحد أقصى",
  },
  "stat.rooms": { fr: "3", en: "3", ar: "٣" },
  "stat.rooms.label": {
    fr: "chambres",
    en: "bedrooms",
    ar: "غرف نوم",
  },
  "stat.pool": { fr: "1", en: "1", ar: "١" },
  "stat.pool.label": {
    fr: "piscine privée",
    en: "private pool",
    ar: "مسبح خاص",
  },

  // Pool
  "pool.title": {
    fr: "Votre piscine privée, rien que pour vous",
    en: "Your private pool, just for you",
    ar: "مسبحكم الخاص، لكم وحدكم",
  },
  "pool.desc": {
    fr: "Plongez dans votre piscine privée entourée d'un jardin luxuriant. Un espace de détente exclusif, disponible à toute heure, rien que pour vous et vos proches.",
    en: "Dive into your private pool surrounded by lush gardens. An exclusive relaxation space, available at any hour, just for you and your loved ones.",
    ar: "انغمسوا في مسبحكم الخاص المحاط بحديقة خضراء. مساحة استرخاء حصرية متاحة في أي وقت، لكم ولأحبائكم.",
  },

  // Reservation
  "res.title": {
    fr: "Demande de réservation",
    en: "Reservation Request",
    ar: "طلب حجز",
  },
  "res.subtitle": {
    fr: "Complétez ce formulaire et nous vous répondrons dans les plus brefs délais.",
    en: "Complete this form and we will respond as soon as possible.",
    ar: "أكملوا هذا النموذج وسنرد عليكم في أقرب وقت ممكن.",
  },
  "res.name": { fr: "Nom complet", en: "Full Name", ar: "الاسم الكامل" },
  "res.email": {
    fr: "Adresse email",
    en: "Email Address",
    ar: "البريد الإلكتروني",
  },
  "res.phone": { fr: "Téléphone", en: "Phone", ar: "الهاتف" },
  "res.arrival": {
    fr: "Date d'arrivée",
    en: "Arrival Date",
    ar: "تاريخ الوصول",
  },
  "res.departure": {
    fr: "Date de départ",
    en: "Departure Date",
    ar: "تاريخ المغادرة",
  },
  "res.adults": {
    fr: "Nombre d'adultes",
    en: "Number of Adults",
    ar: "عدد البالغين",
  },
  "res.children": {
    fr: "Nombre d'enfants",
    en: "Number of Children",
    ar: "عدد الأطفال",
  },
  "res.message": { fr: "Message", en: "Message", ar: "رسالة" },
  "res.send": {
    fr: "Envoyer ma demande",
    en: "Send My Request",
    ar: "إرسال طلبي",
  },
  "res.success": {
    fr: "Merci, votre demande a bien été envoyée. Nous vous contacterons prochainement.",
    en: "Thank you, your request has been sent. We will contact you shortly.",
    ar: "شكراً، تم إرسال طلبكم بنجاح. سنتواصل معكم قريباً.",
  },

  // Footer
  "footer.tagline": {
    fr: "Villa privée de luxe à Marrakech",
    en: "Luxury private villa in Marrakech",
    ar: "فيلا خاصة فاخرة في مراكش",
  },
  "footer.legal": {
    fr: "Mentions légales",
    en: "Legal Notice",
    ar: "إشعار قانوني",
  },
  "footer.privacy": {
    fr: "Politique de confidentialité",
    en: "Privacy Policy",
    ar: "سياسة الخصوصية",
  },
  "footer.copyright": {
    fr: "© Villa Haitam Marrakech. Tous droits réservés.",
    en: "© Villa Haitam Marrakech. All rights reserved.",
    ar: "© فيلا حيتام مراكش. جميع الحقوق محفوظة.",
  },

  // Rooms
  "rooms.title": { fr: "Les Chambres", en: "The Rooms", ar: "الغرف" },
  "rooms.cta": { fr: "Réserver", en: "Book", ar: "احجز" },
  "rooms.request": {
    fr: "Demander une réservation",
    en: "Request a Booking",
    ar: "طلب حجز",
  },
  "rooms.capacity": { fr: "Capacité", en: "Capacity", ar: "السعة" },
  "rooms.bathroom": {
    fr: "Salle de bain",
    en: "Bathroom",
    ar: "الحمام",
  },
  "rooms.view": { fr: "Vue", en: "View", ar: "الإطلالة" },
  "rooms.amenities": {
    fr: "Équipements",
    en: "Amenities",
    ar: "المرافق",
  },

  // Contact
  "contact.call": { fr: "Appeler", en: "Call", ar: "اتصل" },
  "contact.whatsapp": { fr: "WhatsApp", en: "WhatsApp", ar: "واتساب" },
  "contact.directions": {
    fr: "Itinéraire",
    en: "Get Directions",
    ar: "الاتجاهات",
  },
  "contact.book": { fr: "Réserver", en: "Book", ar: "احجز" },

  // Services
  "services.title": {
    fr: "Services & Équipements",
    en: "Services & Amenities",
    ar: "الخدمات والمرافق",
  },

  // Experience
  "exp.title": {
    fr: "L'Expérience Villa Haitam",
    en: "The Villa Haitam Experience",
    ar: "تجربة فيلا حيتام",
  },
  "exp.relax": { fr: "Détente", en: "Relaxation", ar: "الاسترخاء" },
  "exp.family": { fr: "En famille", en: "Family", ar: "العائلة" },
  "exp.friends": {
    fr: "Entre amis",
    en: "With Friends",
    ar: "مع الأصدقاء",
  },
  "exp.marrakech": {
    fr: "Marrakech",
    en: "Marrakech",
    ar: "مراكش",
  },

  // Gallery
  "gallery.all": { fr: "Tout", en: "All", ar: "الكل" },
  "gallery.villa": { fr: "Villa", en: "Villa", ar: "الفيلا" },
  "gallery.rooms": { fr: "Chambres", en: "Rooms", ar: "الغرف" },
  "gallery.pool": { fr: "Piscine", en: "Pool", ar: "المسبح" },
  "gallery.garden": { fr: "Jardin", en: "Garden", ar: "الحديقة" },
  "gallery.terrace": {
    fr: "Terrasse",
    en: "Terrace",
    ar: "الشرفة",
  },
  "gallery.exterior": {
    fr: "Extérieurs",
    en: "Exteriors",
    ar: "الخارج",
  },
  "gallery.marrakech": {
    fr: "Marrakech",
    en: "Marrakech",
    ar: "مراكش",
  },
};

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? translations[key]?.["fr"] ?? key;
}