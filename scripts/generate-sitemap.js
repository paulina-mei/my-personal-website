#!/usr/bin/env node

/**
 * Sitemap Generator
 *
 * Automatically generates sitemap.xml from your articles list.
 * Run this after adding new articles to update your sitemap for SEO.
 *
 * Usage: node generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Import articles from writing-search.js
const writingSearchPath = path.join(__dirname, '..', 'js', 'writing-search.js');
const writingSearchContent = fs.readFileSync(writingSearchPath, 'utf8');

// Extract articles array using regex (simple approach)
const articlesMatch = writingSearchContent.match(/const allArticles = \[([\s\S]*?)\];/);
if (!articlesMatch) {
    console.error('Error: Could not find allArticles array in writing-search.js');
    process.exit(1);
}

// Parse articles from the matched content
const articlesContent = articlesMatch[1];
const articles = [];

// Remove comments from the content first
const contentWithoutComments = articlesContent.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');

// Extract each article object
const articleMatches = contentWithoutComments.matchAll(/\{[\s\S]*?url:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?\}/g);
for (const match of articleMatches) {
    articles.push({
        url: match[1],
        date: match[2]
    });
}

// Your domain (update this before deploying!)
const DOMAIN = 'https://paulinamei.com';

// Static pages
const staticPages = [
    { path: '', changefreq: 'weekly', priority: '1.0' },  // Homepage
    { path: 'writing.html', changefreq: 'weekly', priority: '0.9' },  // Blog archive
];

// Generate sitemap XML
function generateSitemap() {
    const now = new Date().toISOString().split('T')[0];  // YYYY-MM-DD format

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static pages
    staticPages.forEach(page => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}/${page.path}</loc>\n`;
        xml += `    <lastmod>${now}</lastmod>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += '  </url>\n';
    });

    // Add article pages
    articles.forEach(article => {
        xml += '  <url>\n';
        xml += `    <loc>${DOMAIN}/${article.url}</loc>\n`;
        xml += `    <lastmod>${article.date}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.8</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>\n';

    return xml;
}

// Main function
function main() {
    console.log('\n🗺️  Sitemap Generator\n');

    try {
        const sitemap = generateSitemap();
        const outputPath = path.join(__dirname, '..', 'sitemap.xml');

        fs.writeFileSync(outputPath, sitemap);

        console.log(`✅ Generated sitemap.xml with ${articles.length + staticPages.length} URLs`);
        console.log(`\nPages included:`);
        console.log(`  - Homepage`);
        console.log(`  - Blog archive`);
        console.log(`  - ${articles.length} article${articles.length !== 1 ? 's' : ''}\n`);

        console.log('📋 Next steps:');
        console.log('  1. Verify sitemap.xml looks correct');
        console.log('  2. Deploy your site');
        console.log('  3. Submit to Google Search Console:');
        console.log('     https://search.google.com/search-console\n');

        console.log('⚠️  Important: Update DOMAIN in generate-sitemap.js');
        console.log(`   Current: ${DOMAIN}`);
        console.log('   Update to your actual domain before deploying!\n');

    } catch (error) {
        console.error('❌ Error generating sitemap:', error.message);
        process.exit(1);
    }
}

main();
