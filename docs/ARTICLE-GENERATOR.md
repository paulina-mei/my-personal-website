# Article Generator Script 🎨

The easiest way to create new blog posts on your website!

## Quick Start

```bash
node create-article.js
```

The script will ask you for:
1. **Article title** - e.g., "Building Products Users Love"
2. **Description** - A brief 1-2 sentence summary
3. **Date** - ISO format (YYYY-MM-DD), or press Enter for today
4. **Content** - Paste your HTML-formatted content, type "DONE" when finished

## What It Does Automatically

✅ Generates complete HTML file with all meta tags
✅ Creates URL-friendly filename (e.g., "building-products-users-love.html")
✅ Adds Open Graph & Twitter Card meta tags
✅ Includes proper canonical URLs
✅ Auto-updates `writing-search.js` with your article
✅ Positions your article at the top (most recent)

## Example Usage

```
🎨 Article Generator

This script will help you create a new blog post.

Article title: AI in Product Management
Brief description (1-2 sentences): How artificial intelligence is transforming product decisions and workflows.
Publish date (YYYY-MM-DD, or press Enter for today): 2025-11-15

Article content (HTML format):
Tip: You can paste your content below. Type "DONE" on a new line when finished.

<p class="article-lead">
    Artificial intelligence is revolutionizing how we build products...
</p>

<h2>The AI Revolution</h2>
<p>
    In the past year, AI has transformed from a buzzword to an essential tool...
</p>

DONE

✅ Created: articles/ai-in-product-management.html
✅ Updated: writing-search.js

🎉 Article created successfully!
```

## Content Formatting Tips

### Basic Structure
```html
<p class="article-lead">
    Your opening paragraph that hooks the reader.
</p>

<h2>First Section</h2>
<p>
    Your first section content...
</p>

<h2>Second Section</h2>
<p>
    Your second section content...
</p>

<h2>Key Takeaways</h2>
<ol>
    <li>First takeaway</li>
    <li>Second takeaway</li>
    <li>Third takeaway</li>
</ol>
```

### HTML Elements You Can Use
- `<p>` - Paragraphs
- `<h2>` - Section headings
- `<ul>` / `<ol>` - Bulleted or numbered lists
- `<li>` - List items
- `<strong>` - Bold text
- `<em>` - Italic text
- `<a href="...">` - Links
- `<code>` - Inline code
- `<blockquote>` - Quotes

## After Generation

The script creates:
1. **HTML file** in `articles/` folder
2. **Entry in writing-search.js** at the top of the array

Your article will automatically appear:
- On the homepage (if it's in the top 3 most recent)
- In the blog archive (writing.html)
- In search results

## Manual Editing

After generation, you can:
- Edit the HTML file to refine content
- Update meta tags if needed (though they're auto-generated correctly)
- Add images or other media
- Adjust formatting

## Troubleshooting

**Q: Script says "command not found"**
Make sure you have Node.js installed: `node --version`

**Q: Permission denied**
Run: `chmod +x create-article.js`

**Q: Article doesn't appear on homepage**
The homepage shows the 3 most recent articles. If you have more than 3, older ones won't show (but they're still in the blog archive).

**Q: Want to change the date format?**
The script uses ISO dates (YYYY-MM-DD) which auto-format to "Month Year" on display.

## Benefits

🚀 **Fast** - Create articles in seconds
✨ **No mistakes** - All meta tags auto-generated correctly
🎯 **Consistent** - Every article follows the same structure
🔄 **Auto-updates** - Homepage and blog archive update automatically
📱 **SEO ready** - All Open Graph and Twitter Card tags included

---

**Pro tip:** Keep your content pre-written in a separate document. When you're ready to publish, just run the script and paste!
