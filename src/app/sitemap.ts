import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/la-villa`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/chambres`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/exp-rience`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/galerie`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
}