# Writing Articles in Notion 📝

Complete guide for writing articles in Notion and easily importing them to your website.

## Why Use Notion?

- ✍️ **Better writing experience** - Rich text editor, no HTML required
- 📝 **Draft management** - Keep all drafts organized
- 🎨 **Preview** - See how it looks before publishing
- 🔄 **Easy export** - Export to HTML with one click

## Method 1: Notion HTML Export (Recommended)

### Step 1: Write in Notion

Create your article in Notion using:
- **Headings** - Use "Heading 2" for sections (these become `<h2>`)
- **Text** - Regular text for paragraphs
- **Bold/Italic** - Format as needed
- **Lists** - Bulleted or numbered lists
- **Quotes** - Use quote blocks

**Example Notion structure:**
```
Title: Building Products Users Love

[Use "Heading 2"] Understanding Your Users
Regular paragraph text here...

[Use "Heading 2"] Solving Real Problems
More content here...

[Bulleted list]
• What problem does this solve?
• How many users have this problem?
• Is this the best solution?

[Use "Heading 2"] Key Takeaways
[Numbered list]
1. Deep empathy and understanding
2. Focus on solving real problems
3. Continuous iteration
```

### Step 2: Export from Notion

1. **Open your Notion page**
2. **Click the ⋯ menu** (top right)
3. **Export** → Format: **HTML**
4. **Export** (downloads a .zip file)
5. **Unzip** and open the `.html` file in a text editor

### Step 3: Copy the Content

Open the exported HTML file and copy **only the body content** (between `<body>` and `</body>`).

You'll see something like:
```html
<article>
  <h1>Your Article Title</h1>
  <h2>First Section</h2>
  <p>Content here...</p>
  <ul>
    <li>List item</li>
  </ul>
</article>
```

### Step 4: Clean Up (Optional)

Notion adds some extra styling you don't need. Here's what to keep/remove:

**Keep:**
- `<p>` - Paragraphs ✅
- `<h2>`, `<h3>` - Headings ✅
- `<ul>`, `<ol>`, `<li>` - Lists ✅
- `<strong>` - Bold ✅
- `<em>` - Italic ✅
- `<a href="">` - Links ✅

**Remove/Replace:**
- `<h1>` → Remove (we'll add title separately) ❌
- `<article>` wrapper → Remove ❌
- `class="..."` attributes → Remove (optional) ❌
- `<div>` wrappers → Keep only if needed ⚠️

### Step 5: Use the Article Generator

```bash
node create-article.js
```

When prompted for content, paste your cleaned HTML.

## Method 2: Notion to Markdown (Advanced)

If you prefer Markdown, you can use this workflow:

### Step 1: Export as Markdown

1. In Notion: **⋯ menu** → **Export** → **Markdown & CSV**
2. Unzip the downloaded file
3. Open the `.md` file

### Step 2: Convert Markdown to HTML

Use an online tool or CLI:

**Online:**
- [Markdown to HTML Converter](https://markdowntohtml.com)
- Paste your markdown, get HTML

**CLI (if you have pandoc):**
```bash
brew install pandoc  # Install pandoc
pandoc article.md -o article.html
```

### Step 3: Use the Generated HTML

Copy the HTML and paste into the article generator.

## Method 3: Notion API (Most Automated)

For the ultimate automation, you could create a script that pulls from Notion API. This is advanced but very powerful.

**Setup required:**
1. Create Notion integration
2. Get API key
3. Create script to fetch and convert

I can help you build this if you want full automation!

## Quick Notion Template

Here's a template to use in Notion for consistent articles:

---

**ARTICLE TEMPLATE** (Copy this to Notion)

```
Title: [Your Article Title]

Meta Description (1-2 sentences):
[Brief description for SEO and social sharing]

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

Final concluding paragraph...
```

---

## HTML Structure You Need

Your final HTML should look like this:

```html
<p class="article-lead">
    Your opening paragraph that hooks the reader.
</p>

<h2>First Section</h2>
<p>
    Your content here...
</p>

<h2>Second Section</h2>
<p>
    More content...
</p>
<ul>
    <li>List item one</li>
    <li>List item two</li>
</ul>

<h2>Key Takeaways</h2>
<ol>
    <li>First takeaway</li>
    <li>Second takeaway</li>
</ol>
```

**Important:**
- First paragraph should have `class="article-lead"` for styling
- Use `<h2>` for section headings (not `<h1>`)
- Wrap text in `<p>` tags

## Cleaning Notion HTML

### Common Issues & Fixes

**Issue 1: Notion adds lots of `<div>` wrappers**
```html
<!-- Notion export -->
<div class="page-body">
  <div class="block">
    <p>Text here</p>
  </div>
</div>

<!-- Clean version -->
<p>Text here</p>
```

**Issue 2: Notion includes `<h1>` title**
```html
<!-- Remove the <h1> -->
<h1>Article Title</h1>  ← Delete this

<!-- Keep only content -->
<h2>First Section</h2>
<p>Content...</p>
```

**Issue 3: Extra classes and IDs**
```html
<!-- Notion export -->
<p class="block-color-default" id="abc123">Text</p>

<!-- Simplified -->
<p>Text</p>
```

## Simple Cleanup Script

Save this as `clean-notion.js`:

```javascript
#!/usr/bin/env node
const fs = require('fs');

const input = process.argv[2];
if (!input) {
    console.log('Usage: node clean-notion.js input.html');
    process.exit(1);
}

let html = fs.readFileSync(input, 'utf8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
if (bodyMatch) {
    html = bodyMatch[1];
}

// Remove Notion wrapper divs
html = html.replace(/<div[^>]*class="page-body"[^>]*>/g, '');
html = html.replace(/<\/div>/g, '');

// Remove h1 (title - we add separately)
html = html.replace(/<h1[^>]*>.*?<\/h1>/g, '');

// Remove class and id attributes
html = html.replace(/\s+class="[^"]*"/g, '');
html = html.replace(/\s+id="[^"]*"/g, '');

// Add article-lead class to first paragraph
html = html.replace(/<p>/, '<p class="article-lead">');

// Clean up extra whitespace
html = html.replace(/\n\s*\n/g, '\n\n');

console.log(html);
```

**Usage:**
```bash
node clean-notion.js exported-article.html > cleaned.html
```

Then copy content from `cleaned.html` and paste into article generator!

## Best Practices

1. **Write in Notion first** - Better writing experience
2. **Keep it simple** - Use basic formatting (headings, lists, bold)
3. **Export to HTML** - Easiest to convert
4. **Clean before import** - Remove Notion's extra markup
5. **Test locally** - View in browser before deploying

## Comparison of Methods

| Method | Effort | Best For |
|--------|--------|----------|
| HTML Export | Low | Most people (recommended) |
| Markdown Export | Medium | Markdown lovers |
| Notion API | High | Full automation |

## Example Workflow

**My recommended workflow:**

1. **Draft in Notion** (30 min)
   - Write using Heading 2, paragraphs, lists
   - Spell check and edit

2. **Export** (1 min)
   - ⋯ menu → Export → HTML
   - Unzip downloaded file

3. **Clean HTML** (2 min)
   - Open HTML file
   - Copy content between `<body>` tags
   - Remove `<h1>` title
   - Remove extra `<div>` wrappers
   - Add `class="article-lead"` to first `<p>`

4. **Generate Article** (2 min)
   ```bash
   node create-article.js
   ```
   - Enter title, description, date
   - Paste cleaned HTML
   - Type "DONE"

5. **Deploy** (1 min)
   ```bash
   node generate-sitemap.js
   git add .
   git commit -m "Add new article"
   git push
   ```

**Total time: ~36 minutes** (mostly writing!)

## Pro Tips

- **Keep a Notion template** - Consistent structure for all articles
- **Draft multiple articles** - Write in batches
- **Use Notion's publish feature** - Preview before exporting
- **Save Notion link** - Easy to update/edit later
- **Backup in Notion** - Your source of truth

---

**Want me to build a fully automated Notion → Website pipeline?** Let me know and I can create a script that:
- Pulls articles directly from Notion API
- Converts formatting automatically
- Publishes to your site with one command

It would require ~30 min setup but then publishing is literally one command! 🚀

