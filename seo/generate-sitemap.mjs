// ** don't change this file

import fs from "fs";
import path from "path";
import { BASE_URL, SEO } from "./constants.ts";


const routes = Array.from(new Set(SEO.routes.map(r => r.replace(/\/+$/, "") || "/")));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>`;
  })
  .join("")}
</urlset>
`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap);

console.log("✅ Sitemap successfully generated at public/sitemap.xml");

//* run "node seo/generate-sitemap.mjs" to generate manually