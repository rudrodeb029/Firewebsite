// Pre-render the index page and all subroutes to generate static HTML files for static hosting
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  '/',
  '/tournaments',
  '/modes',
  '/how-it-works',
  '/leaderboard',
  '/faq',
  '/join',
  '/terms',
  '/privacy',
  '/refund',
  '/responsible-gaming'
];

async function prerender() {
  // Start the server
  const server = await import('./.output/server/index.mjs');
  
  // Wait for server to start
  await new Promise(r => setTimeout(r, 2000));
  
  for (const route of ROUTES) {
    try {
      const response = await fetch(`http://localhost:3000${route}`);
      const html = await response.text();
      
      let targetPath;
      if (route === '/') {
        targetPath = join(__dirname, '.output', 'public', 'index.html');
      } else {
        const dir = join(__dirname, '.output', 'public', route);
        mkdirSync(dir, { recursive: true });
        targetPath = join(dir, 'index.html');
      }
      
      writeFileSync(targetPath, html);
      console.log(`Successfully pre-rendered ${route} -> ${targetPath}`);
    } catch (error) {
      console.error(`Failed to pre-render ${route}:`, error.message);
      if (route === '/') {
        console.log('Creating fallback SPA shell...');
        createFallbackShell();
      }
    }
  }
  
  process.exit(0);
}

function createFallbackShell() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JXM Tour Club</title>
  <meta name="description" content="JXM Tour Club - Free Fire Tournaments" />
  <link rel="stylesheet" href="/assets/styles-DrXF0yFN.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-CdWKNMMU.js"></script>
</body>
</html>`;

  writeFileSync(join(__dirname, '.output', 'public', 'index.html'), html);
  console.log('Fallback SPA shell created');
}

prerender().catch(err => {
  console.error('Pre-render failed:', err);
  createFallbackShell();
  process.exit(0);
});
