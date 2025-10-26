# How to Add New Blog Posts (Easy 2-Step Process!)

This guide shows you the super simple process for adding new blog posts to your website.

## The Magic ✨

Your homepage **automatically** displays the 3 most recent articles from `writing-search.js`. You don't need to touch `index.html` at all!

## Step-by-Step Guide

### Step 1: Create the Article HTML File

1. **Copy the template**:
   - Go to `articles/` folder
   - Copy `building-products-users-love.html`
   - Rename it (e.g., `my-new-article.html`)

2. **Update the HTML**:
   ```html
   <!-- Update the title -->
   <title>Your Article Title | Paulina Mei</title>

   <!-- Update meta tags -->
   <meta property="og:url" content="https://yourdomain.com/articles/your-article.html">
   <meta property="og:title" content="Your Article Title">
   <meta property="og:description" content="Your article description">

   <!-- Update the article header -->
   <h1 class="article-title">Your Article Title</h1>
   <time datetime="2025-11-15">November 15, 2025</time>

   <!-- Write your content -->
   <div class="article-content">
       <!-- Your article content here -->
   </div>
   ```

### Step 2: Add to `writing-search.js`

Open `writing-search.js` and add your article **at the TOP** of the array:

```javascript
const allArticles = [
    {
        title: "Your New Article Title",
        description: "Brief 1-2 sentence description that appears in the list",
        content: "Full searchable text - copy key phrases from your article for search",
        url: "articles/your-new-article.html",
        date: "2025-11-15"  // Use ISO format (YYYY-MM-DD) - auto-formats to "Nov 2025"
    },
    // ↓ Existing articles stay below ↓
    {
        title: "Building Products Users Love",
        description: "Key principles for creating products...",
        content: "Key principles for creating products...",
        url: "articles/building-products-users-love.html",
        date: "2025-10-25"  // Auto-formats to "Oct 2025"
    },
    // ... more articles
];
```

**That's it! You're done!** 🎉

## What Happens Automatically

When you add an article to the top of `writing-search.js`:

✅ **Homepage** - Shows your 3 most recent articles (top 3 in the array)
✅ **Blog Archive** (`writing.html`) - Shows all articles with search and infinite scroll
✅ **Search** - Your article is immediately searchable by title and content

## Visual Workflow

```
┌─────────────────────────────────────┐
│  1. Create article HTML file        │
│     (copy template)                 │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  2. Add to top of allArticles[]     │
│     in writing-search.js            │
└─────────────┬───────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  ✨ AUTOMATIC UPDATES ✨            │
│                                     │
│  • Homepage shows 3 most recent     │
│  • Blog archive shows all posts     │
│  • Search works immediately         │
└─────────────────────────────────────┘
```

## Pro Tips

### Ordering Articles
- Articles at the **top** of the array are considered most recent
- Homepage shows positions [0], [1], [2] (first 3)
- Always add new articles to the **top** of the array

### Date Format ⚡ AUTOMATED
- Use **ISO format**: `"2025-11-15"` (YYYY-MM-DD)
- Will **automatically** display as "Nov 2025" on the site
- No manual formatting needed - just use the ISO date!

### Description
- Keep it 1-2 sentences
- Should be engaging and descriptive
- Shows up in blog list and search results

### Content Field
- Copy key phrases and sentences from your article
- Used for search functionality
- Doesn't need to be the full article, just searchable text

### URLs
- Use lowercase, hyphenated filenames
- Example: `my-article-title.html` (not `My-Article-Title.html`)
- Keep URLs descriptive and readable

## Example: Adding Your 4th Article

Let's say you want to add an article about AI in product management:

**Step 1**: Create `articles/ai-in-product-management.html`

**Step 2**: Add to `writing-search.js`:

```javascript
const allArticles = [
    {
        title: "AI in Product Management",                    // ← NEW ARTICLE
        description: "How artificial intelligence is transforming product decisions and workflows.",
        content: "AI artificial intelligence transforming product management decisions workflows automation tools",
        url: "articles/ai-in-product-management.html",
        date: "2025-11-15"  // Auto-formats to "Nov 2025"
    },
    {
        title: "Building Products Users Love",               // ← Existing article (now 2nd)
        description: "Key principles for creating products...",
        content: "Key principles...",
        url: "articles/building-products-users-love.html",
        date: "2025-10-25"  // Auto-formats to "Oct 2025"
    },
    {
        title: "Data-Driven Decision Making",               // ← Existing article (now 3rd)
        description: "How to leverage data...",
        content: "How to leverage...",
        url: "articles/data-driven-decision-making.html",
        date: "2025-10-20"  // Auto-formats to "Oct 2025"
    },
    {
        title: "My Journey in Product Management",          // ← Existing article (now 4th)
        description: "Lessons learned...",
        content: "Lessons learned...",
        url: "articles/my-journey-in-product-management.html",
        date: "2025-10-15"  // Auto-formats to "Oct 2025"
    }
];
```

Now your homepage will show:
1. AI in Product Management (newest)
2. Building Products Users Love
3. Data-Driven Decision Making

The blog archive will show all 4 articles.

## Testing Your Article

After adding an article:

1. **Test Homepage**: Open `index.html` - you should see your new article in the blog section
2. **Test Blog Archive**: Open `writing.html` - your article should appear in the list
3. **Test Search**: Search for a word from your article - it should appear in results
4. **Test Article Link**: Click on your article - it should open correctly

## Troubleshooting

**Q: My article isn't showing on the homepage**
- Make sure it's at the TOP of the `allArticles` array
- Check that the file path is correct
- Refresh your browser (Cmd+R or Ctrl+R)

**Q: The homepage shows old articles**
- Clear your browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check the order in `writing-search.js` array

**Q: Search isn't finding my article**
- Make sure the `content` field has relevant keywords
- Check spelling in the title and description

**Q: Article link is broken (404)**
- Check the URL in `writing-search.js` matches your filename
- Make sure the file is in the `articles/` folder
- Check for typos in the filename

## Benefits of This System

✅ **No duplicate work** - Update one file, updates everywhere
✅ **Automatic homepage** - Always shows 3 most recent
✅ **Easy to maintain** - Just edit one array
✅ **Search ready** - Instant search functionality
✅ **Scalable** - Add unlimited articles with same process

---

**Questions?** Check the main README.md for more details!
