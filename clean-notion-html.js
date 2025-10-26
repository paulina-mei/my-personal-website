#!/usr/bin/env node

/**
 * Notion HTML Cleaner
 *
 * Cleans up Notion's HTML export to make it ready for your website.
 * Removes Notion-specific markup, classes, and wrappers.
 *
 * Usage: node clean-notion-html.js exported-article.html
 * Output: Cleaned HTML printed to console (pipe to file or copy)
 */

const fs = require('fs');
const path = require('path');

function cleanNotionHTML(html) {
    // Extract body content if full HTML document
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
    if (bodyMatch) {
        html = bodyMatch[1];
    }

    // Remove Notion wrapper divs
    html = html.replace(/<div[^>]*class="[^"]*page[^"]*"[^>]*>/gi, '');
    html = html.replace(/<div[^>]*class="[^"]*block[^"]*"[^>]*>/gi, '');
    html = html.replace(/<article[^>]*>/gi, '');
    html = html.replace(/<\/article>/gi, '');

    // Remove closing divs (be careful - this is aggressive)
    html = html.replace(/<\/div>/g, '');

    // Remove h1 title (we add it separately in the article generator)
    html = html.replace(/<h1[^>]*>.*?<\/h1>/g, '');

    // Remove all class attributes
    html = html.replace(/\s+class="[^"]*"/g, '');

    // Remove all id attributes
    html = html.replace(/\s+id="[^"]*"/g, '');

    // Remove style attributes
    html = html.replace(/\s+style="[^"]*"/g, '');

    // Remove data attributes
    html = html.replace(/\s+data-[^=]*="[^"]*"/g, '');

    // Clean up figure/img tags (Notion uses these for images)
    html = html.replace(/<figure[^>]*>/g, '<figure>');

    // Add article-lead class to first paragraph
    html = html.replace(/<p>/, '<p class="article-lead">');

    // Clean up extra whitespace
    html = html.replace(/\n\s*\n\s*\n/g, '\n\n');
    html = html.replace(/^\s+|\s+$/g, '');

    // Pretty print (add proper indentation)
    html = html.replace(/<h2>/g, '\n<h2>');
    html = html.replace(/<\/h2>/g, '</h2>\n');
    html = html.replace(/<p/g, '\n<p');
    html = html.replace(/<\/p>/g, '</p>\n');
    html = html.replace(/<ul>/g, '\n<ul>\n');
    html = html.replace(/<\/ul>/g, '\n</ul>\n');
    html = html.replace(/<ol>/g, '\n<ol>\n');
    html = html.replace(/<\/ol>/g, '\n</ol>\n');
    html = html.replace(/<li>/g, '    <li>');

    return html;
}

// Main
function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error('\n❌ Error: No input file specified\n');
        console.log('Usage: node clean-notion-html.js <input.html>\n');
        console.log('Example:');
        console.log('  node clean-notion-html.js notion-export.html > cleaned.html\n');
        console.log('Or copy to clipboard (macOS):');
        console.log('  node clean-notion-html.js notion-export.html | pbcopy\n');
        process.exit(1);
    }

    const inputFile = args[0];

    if (!fs.existsSync(inputFile)) {
        console.error(`\n❌ Error: File not found: ${inputFile}\n`);
        process.exit(1);
    }

    try {
        const html = fs.readFileSync(inputFile, 'utf8');
        const cleaned = cleanNotionHTML(html);

        console.log(cleaned);

        // Output instructions to stderr so they don't interfere with piping
        console.error('\n✅ HTML cleaned successfully!\n');
        console.error('Next steps:');
        console.error('  1. Copy the output above');
        console.error('  2. Run: node create-article.js');
        console.error('  3. Paste the HTML when prompted\n');
        console.error('Or save to file:');
        console.error(`  node clean-notion-html.js ${inputFile} > cleaned.html\n`);

    } catch (error) {
        console.error(`\n❌ Error: ${error.message}\n`);
        process.exit(1);
    }
}

main();
