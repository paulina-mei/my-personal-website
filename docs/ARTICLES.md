# Managing Blog Articles

Complete guide for creating and publishing blog articles on your website.

## 🎯 Important: No More Manual Duplication!

Your website now uses **automatic search data generation**. You only need to create/edit article HTML files - the search data is generated automatically!

**What changed:**
- ✅ `js/writing-search.js` is now **auto-generated** - DO NOT edit manually
- ✅ Article HTML files are the **single source of truth**
- ✅ No more syncing content between two files!

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
- ✅ **Auto-regenerates** `js/writing-search.js` from all articles
- ✅ Sorts articles by date (newest first)

Your article will automatically appear on the homepage and in the blog archive!

### How Auto-Generation Works

When you create or update articles, the system:
1. Reads all HTML files in `/articles/` folder
2. Extracts title, description, date, and content
3. Generates `js/writing-search.js` with all articles
4. Automatically sorts by date (newest first)

**Benefits:**
- ✅ No manual editing of `js/writing-search.js`
- ✅ No content duplication
- ✅ Always in sync
- ✅ Automatic sorting by date

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

### Step 2: Regenerate Search Data

After creating your article HTML file, regenerate the search data:

```bash
cd scripts
node generate-search-data.js
```

**What this does:**
- Scans all articles in `/articles/` folder
- Extracts title, description, date, and content
- Auto-generates `js/writing-search.js`
- Sorts articles by date (newest first)

**Important:** Never edit `js/writing-search.js` manually - always regenerate it!

---

## How the System Works

### Automatic Homepage Updates

Your homepage automatically displays the **3 most recent** articles from `js/writing-search.js`.

```javascript
// Homepage loads first 3 items from array
const recentArticles = allArticles.slice(0, 3);
```

### Article Order

- Articles are **automatically sorted by date** (newest first)
- Homepage shows the 3 most recent articles
- Blog archive shows all articles
- No manual ordering needed!

### Date Formatting

- Use ISO format in HTML `<time datetime="2025-11-15">`
- Automatically displays as "Nov 2025" on the site
- Generator script extracts dates automatically

### Search Functionality

- Content is **auto-extracted** from article HTML
- First 500 characters used for search
- Includes title, description, and article text
- No manual content copying needed!

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
- Run `node scripts/generate-search-data.js` to regenerate search data
- Check that article date is set correctly in HTML
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

**Homepage shows old articles**
- Regenerate search data: `node scripts/generate-search-data.js`
- Clear browser cache
- Check article dates in HTML files

**Search isn't finding article**
- Regenerate search data to pick up latest content
- Check that article has text in `<div class="article-content">`
- Verify article file is in `articles/` folder

**Article link is broken (404)**
- Check file is in `articles/` folder
- Verify filename matches URL
- Regenerate search data if needed

**Script says "command not found"**
- Make sure Node.js is installed: `node --version`
- Run from project root or `scripts/` directory

**Changes to article not showing**
- After editing an article HTML file, run: `node scripts/generate-search-data.js`
- This updates the search index with your changes

---

## Best Practices

1. **Write in Notion first** - Better writing experience
2. **Use create-article.js** - Automatically generates everything
3. **Never edit js/writing-search.js** - Always auto-generate it
4. **Test locally** - View in browser before deploying
5. **Keep it simple** - Use basic formatting
6. **Update after edits** - Run `generate-search-data.js` if you edit article HTML

---

## Regenerating Search Data

If you ever edit article HTML files directly or need to refresh the search index:

```bash
cd scripts
node generate-search-data.js
```

This will:
- ✅ Scan all articles in `/articles/`
- ✅ Extract current data from HTML
- ✅ Regenerate `js/writing-search.js`
- ✅ Sort by date automatically

**When to regenerate:**
- After editing article content
- After changing article titles/descriptions
- After adding articles manually (without create-article.js)
- If search seems out of sync

---

## Pro Tips

- **Batch write** - Draft multiple articles in Notion
- **Keep template** - Use consistent structure
- **Save Notion link** - Easy to update later
- **Pre-write content** - Have it ready before running script
- **Single source of truth** - Article HTML files are authoritative
- **Let scripts do the work** - Don't manually edit generated files

---

Need help? Check the main README.md for more information!
