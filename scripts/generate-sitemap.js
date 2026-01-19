import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.oakolawole.com'; // Replace with actual domain
const staticRoutes = [
  '/',
  '/about',
  '/team',
  '/practice',
  '/blog',
  '/contact',
];

const articlesPath = path.join(__dirname, '../src/data/articles.ts');
const publicPath = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

try {
  const articlesContent = fs.readFileSync(articlesPath, 'utf-8');
  
  // Regex to extract slugs
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;
  const articleSlugs = [];
  
  while ((match = slugRegex.exec(articlesContent)) !== null) {
    articleSlugs.push(match[1]);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
${articleSlugs
  .map(
    (slug) => `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
}
