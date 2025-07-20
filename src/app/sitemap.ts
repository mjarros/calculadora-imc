export const dynamic = "force-dynamic";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://calculadora-imc-adultos-criancas-idosos.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}

// import { NextResponse } from "next/server";

// export async function GET() {
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://calculadora-imc-adultos-criancas-idosos.vercel.app</loc>
//     <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>
//   <!-- Add more <url> entries as needed -->
// </urlset>`;

//   return new NextResponse(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }
