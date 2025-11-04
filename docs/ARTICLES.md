# Managing Blog Articles

Complete guide for creating and publishing blog articles on your website.

## Quick Start (Recommended Method)

The easiest way to create articles is using the article generator script:

```bash
cd scripts
node create-article.js
```

The script will prompt you for:
1. Article title
2. Description (1-2 sentences)
3. Publish date (YYYY-MM-DD, or press Enter for today)
4. Content (HTML format, type "DONE" when finished)

**What it does automatically:**
- ✅ Generates complete HTML file with all meta tags
- ✅ Creates URL-friendly filename
- ✅ Adds Open Graph & Twitter Card meta tags
- ✅ Updates `js/writing-search.js` with your article
- ✅ Positions your article at the top (most recent)

Your article will automatically appear on the homepage and in the blog archive!

---

## Method 1: Article Generator Script

### Example Usage

```
🎨 Article Generator

Article title: AI in Product Management
Brief description: How artificial intelligence is transforming product decisions and workflows.
Publish date (YYYY-MM-DD): 2025-11-15

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
✅ Updated: js/writing-search.js
```

### HTML Elements You Can Use

- `<p>` - Paragraphs
- `<p class="article-lead">` - Opening paragraph (larger, styled)
- `<h2>` - Section headings
- `<ul>` / `<ol>` - Bulleted or numbered lists
- `<li>` - List items
- `<strong>` - Bold text
- `<em>` - Italic text
- `<a href="...">` - Links
- `<code>` - Inline code
- `<blockquote>` - Quotes

### Content Structure Template

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

---

## Method 2: Writing in Notion

For a better writing experience, write your articles in Notion and export them!

### Why Use Notion?

- ✍️ Better writing experience - Rich text editor, no HTML required
- 📝 Draft management - Keep all drafts organized
- 🎨 Preview - See how it looks before publishing
- 🔄 Easy export - Export to HTML with one click

### Workflow

#### 1. Write in Notion

Create your article using:
- **Heading 2** for sections (these become `<h2>`)
- **Text** for paragraphs
- **Bold/Italic** for emphasis
- **Lists** - Bulleted or numbered
- **Quotes** - Use quote blocks

#### 2. Export from Notion

1. Open your Notion page
2. Click the **⋯ menu** (top right)
3. **Export** → Format: **HTML**
4. **Export** (downloads a .zip file)
5. Unzip and open the `.html` file

#### 3. Clean the HTML

Notion adds extra markup. You can use the cleanup script:

```bash
cd scripts
node clean-notion-html.js exported-article.html > cleaned.html
```

Or manually remove:
- `<h1>` title (we add this separately)
- `<article>` wrapper
- `class="..."` attributes (optional)
- Extra `<div>` wrappers

**Keep:**
- `<p>`, `<h2>`, `<h3>` - Paragraphs and headings
- `<ul>`, `<ol>`, `<li>` - Lists
- `<strong>`, `<em>` - Bold and italic
- `<a href="">` - Links

#### 4. Generate Article

```bash
node create-article.js
```

Paste your cleaned HTML when prompted for content.

#### 5. Example Notion Template

```
Title: [Your Article Title]

Meta Description (1-2 sentences):
[Brief description for SEO]

Date: [YYYY-MM-DD]

---

[Heading 2] Introduction
Opening paragraph that hooks the reader...

[Heading 2] Main Section 1
Your first major point...

[Heading 2] Main Section 2
Your second major point...

[Heading 2] Key Takeaways
[Numbered list]
1. First takeaway
2. Second takeaway
3. Third takeaway
```

---

## Method 3: Manual Process

If you prefer full control, you can add articles manually:

### Step 1: Create Article HTML File

1. Copy an existing article from `articles/` folder
2. Rename it (e.g., `my-new-article.html`)
3. Update:
   - Title and meta tags
   - Article content
   - Date

### Step 2: Add to `js/writing-search.js`

Add your article **at the TOP** of the array:

```javascript
const allArticles = [
    {
        title: "Your New Article Title",
        description: "Brief 1-2 sentence description",
        content: "Searchable text from your article...",
        url: "articles/your-new-article.html",
        date: "2025-11-15"  // ISO format (YYYY-MM-DD)
    },
    // ← Existing articles below
    {
        title: "Existing Article",
        // ...
    }
];
```

**Important:** Always add new articles to the **top** of the array!

---

## How the System Works

### Automatic Homepage Updates

Your homepage automatically displays the **3 most recent** articles from `js/writing-search.js`.

```javascript
// Homepage loads first 3 items from array
const recentArticles = allArticles.slice(0, 3);
```

### Article Order

- Articles at the **top** of the array are considered most recent
- Homepage shows positions [0], [1], [2] (first 3)
- Blog archive shows all articles
- Always add new articles to the **top**

### Date Formatting

- Use ISO format: `"2025-11-15"` (YYYY-MM-DD)
- Automatically displays as "Nov 2025" on the site
- No manual formatting needed!

### Search Functionality

The `content` field enables search:
- Copy key phrases from your article
- Doesn't need to be the full article
- Just include searchable keywords

---

## Testing Your Article

After adding an article:

1. **Homepage**: Open `index.html` - new article should appear
2. **Blog archive**: Open `writing.html` - article should be in list
3. **Search**: Search for keywords - article should appear
4. **Article page**: Click the link - should open correctly

---

## Troubleshooting

**Article isn't showing on homepage**
- Make sure it's at the TOP of the `allArticles` array
- Check file path is correct
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

**Homepage shows old articles**
- Clear browser cache
- Check order in `js/writing-search.js`

**Search isn't finding article**
- Add relevant keywords to `content` field
- Check spelling in title and description

**Article link is broken (404)**
- Verify URL in `js/writing-search.js` matches filename
- Check file is in `articles/` folder
- Look for typos

**Script says "command not found"**
- Make sure Node.js is installed: `node --version`
- Run from project root or `scripts/` directory

---

## Best Practices

1. **Write in Notion first** - Better writing experience
2. **Use the generator** - Saves time and prevents errors
3. **Test locally** - View in browser before deploying
4. **Keep it simple** - Use basic formatting
5. **Update sitemap** - Run `node generate-sitemap.js` after adding articles

---

## Pro Tips

- **Batch write** - Draft multiple articles in Notion
- **Keep template** - Use consistent structure
- **Save Notion link** - Easy to update later
- **Pre-write content** - Have it ready before running script

---

Need help? Check the main README.md for more information!
