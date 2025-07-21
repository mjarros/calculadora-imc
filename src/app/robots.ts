import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://calculadora-imc-adultos-criancas-idosos.vercel.app/sitemap.xml",
  };
}
