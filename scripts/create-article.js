#!/usr/bin/env node

/**
 * Article Generator Script
 *
 * This script automates the creation of new blog articles:
 * 1. Prompts for article details (title, description, date, content)
 * 2. Generates HTML file with all meta tags filled in
 * 3. Automatically adds entry to writing-search.js
 *
 * Usage: node create-article.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisify readline question
function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Convert title to URL-friendly slug
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Format date to readable format for display
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Article HTML template
function generateArticleHTML(title, description, url, date, content) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <title>${title} | Paulina Mei</title>

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="../../favicon.svg">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://paulinamei.com/articles/${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="https://paulinamei.com/profile.jpg">
    <meta property="article:published_time" content="${date}T00:00:00Z">
    <meta property="article:author" content="Paulina Mei">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://paulinamei.com/articles/${url}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
    <meta property="twitter:image" content="https://paulinamei.com/profile.jpg">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://paulinamei.com/articles/${url}">

    <link rel="stylesheet" href="../../styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="container">
            <a href="../../index.html" class="logo">Paulina Mei</a>
            <ul class="nav-menu">
                <li><a href="../../index.html" class="nav-link">Home</a></li>
                <li><a href="../../writing.html" class="nav-link">Blog</a></li>
            </ul>
            <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </nav>

    <!-- Article Content -->
    <article class="article-page">
        <div class="container">
            <header class="article-header">
                <a href="../../writing.html" class="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to All Posts
                </a>
                <h1 class="article-title">${title}</h1>
                <div class="article-meta">
                    <time datetime="${date}">${formatDate(date)}</time>
                </div>
            </header>

            <div class="article-content">
                ${content}
            </div>

            <footer class="article-footer">
                <a href="../../writing.html" class="back-link-footer">← Back to All Posts</a>
            </footer>
        </div>
    </article>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; <span id="currentYear"></span> Paulina Mei. All rights reserved.</p>
                <div class="social-links">
                    <a href="mailto:paulinaxmei@gmail.com" class="social-link" aria-label="Email Paulina Mei">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/paulinamei/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script src="../../auto-meta.js"></script>
    <script src="../../script.js"></script>
    <script>
        // Auto-update copyright year
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    </script>
</body>
</html>
`;
}

// Main function
async function main() {
    console.log('\n🎨 Article Generator\n');
    console.log('This script will help you create a new blog post.\n');

    try {
        // Gather article details
        const title = await question('Article title: ');
        const description = await question('Brief description (1-2 sentences): ');
        const dateInput = await question('Publish date (YYYY-MM-DD, or press Enter for today): ');
        const date = dateInput.trim() || new Date().toISOString().split('T')[0];

        console.log('\nArticle content (HTML format):');
        console.log('Tip: You can paste your content below. Type "DONE" on a new line when finished.\n');

        let content = '';
        let line = '';
        while (line !== 'DONE') {
            line = await question('');
            if (line !== 'DONE') {
                content += line + '\n';
            }
        }

        // Generate URL slug
        const slug = slugify(title);
        const articleDir = path.join(__dirname, '..', 'articles', slug);
        const filepath = path.join(articleDir, 'index.html');

        // Create article directory if it doesn't exist
        if (!fs.existsSync(articleDir)) {
            fs.mkdirSync(articleDir, { recursive: true });
        }

        // Generate searchable content (strip HTML tags)
        const searchableContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

        // Create article HTML
        const html = generateArticleHTML(title, description, slug, date, content.trim());

        // Write HTML file
        fs.writeFileSync(filepath, html);
        console.log(`\n✅ Created: articles/${slug}/index.html`);

        // Update writing-search.js
        const searchFilePath = path.join(__dirname, '..', 'writing-search.js');
        let searchFileContent = fs.readFileSync(searchFilePath, 'utf8');

        const newArticle = `    {
        title: "${title}",
        description: "${description}",
        content: "${searchableContent.substring(0, 200)}...",
        url: "articles/${slug}/",
        date: "${date}"
    },`;

        // Insert new article at the beginning of the array
        searchFileContent = searchFileContent.replace(
            /const allArticles = \[\n/,
            `const allArticles = [\n${newArticle}\n`
        );

        fs.writeFileSync(searchFilePath, searchFileContent);
        console.log(`✅ Updated: writing-search.js\n`);

        console.log('🎉 Article created successfully!\n');
        console.log('Next steps:');
        console.log(`1. Edit articles/${slug}/index.html to refine your content`);
        console.log('2. Test your article by opening it in a browser');
        console.log('3. Check the homepage to see it in the blog section\n');

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        rl.close();
    }
}

main();
