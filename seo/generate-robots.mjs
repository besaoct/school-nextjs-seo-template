// ** don't change this file

import fs from "fs";
import path from "path";
import { BASE_URL} from "./constants.ts";

const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /private/

Sitemap: ${BASE_URL}/sitemap.xml
`;

const filePath = path.join(process.cwd(), "public", "robots.txt");
fs.writeFileSync(filePath, ROBOTS_TXT);

console.log("✅ robots.txt generated in public/");


//* run "node seo/generate-robots.mjs" to generate manually