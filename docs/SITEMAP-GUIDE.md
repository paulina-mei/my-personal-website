# Sitemap Generation Guide 🗺️

Complete guide for automatically generating and managing your sitemap.xml for SEO.

## What is a Sitemap?

A sitemap is an XML file that lists all pages on your website. It helps search engines:
- Discover all your pages
- Understand your site structure
- Index your content faster
- Improve SEO rankings

## Auto-Generated Sitemap

Your website includes an automated sitemap generator that creates `sitemap.xml` from your articles list.

### Quick Generate

```bash
node generate-sitemap.js
```

This will:
- ✅ Read all articles from `writing-search.js`
- ✅ Include static pages (homepage, blog archive)
- ✅ Generate `sitemap.xml` with all URLs
- ✅ Include last modified dates
- ✅ Set priority and change frequency

## When to Regenerate

Run the sitemap generator:
- ✅ After adding new articles
- ✅ Before deploying your site
- ✅ After updating important pages
- ✅ Monthly for maintenance

## What's Included

The generator automatically includes:

### Static Pages
1. **Homepage** (`/`)
   - Priority: 1.0 (highest)
   - Change frequency: Weekly
   - Most important page

2. **Blog Archive** (`/writing.html`)
   - Priority: 0.9
   - Change frequency: Weekly
   - Updated when articles are added

### Article Pages
- All articles from `writing-search.js`
- Priority: 0.8
- Change frequency: Monthly
- Last modified date from article date

## Configuration

### Update Domain

**IMPORTANT:** Before deploying, update the domain in `generate-sitemap.js`:

```javascript
// Line 29 in generate-sitemap.js
const DOMAIN = 'https://paulinamei.com';  // ← Change to your domain
```

### Customize Priority

Edit `generate-sitemap.js` to adjust page priorities:

```javascript
const staticPages = [
    { path: '', changefreq: 'weekly', priority: '1.0' },  // Homepage (highest)
    { path: 'writing.html', changefreq: 'weekly', priority: '0.9' },  // Blog
];

// Article priority is set at line 57:
priority: 0.8  // You can adjust this
```

**Priority guidelines:**
- `1.0` - Homepage (most important)
- `0.9` - Main sections (blog archive)
- `0.8` - Individual articles
- `0.5` - Less important pages
- `0.3` - Least important pages

### Customize Change Frequency

```javascript
// How often pages are updated
changefreq: 'always'   // Updated constantly
changefreq: 'hourly'   // Every hour
changefreq: 'daily'    // Every day
changefreq: 'weekly'   // Every week (good for blog)
changefreq: 'monthly'  // Every month (good for articles)
changefreq: 'yearly'   // Rarely updated
changefreq: 'never'    // Static/archived
```

## Example Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://paulinamei.com/</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://paulinamei.com/writing.html</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://paulinamei.com/articles/building-products-users-love.html</loc>
    <lastmod>2025-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Submit to Search Engines

### Google Search Console

1. **Set up Search Console**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property (domain)
   - Verify ownership

2. **Submit sitemap**:
   - In Search Console, go to "Sitemaps"
   - Enter: `sitemap.xml`
   - Click "Submit"

3. **Monitor**:
   - Check indexing status weekly
   - View which pages are indexed
   - See any errors

### Bing Webmaster Tools

1. **Set up Bing Webmaster**:
   - Go to [bing.com/webmasters](https://bing.com/webmasters)
   - Add your site
   - Verify ownership

2. **Submit sitemap**:
   - Navigate to "Sitemaps"
   - Submit: `https://yourdomain.com/sitemap.xml`

## Automated Workflow

### After Adding Articles

```bash
# Generate new article
node create-article.js

# Regenerate sitemap
node generate-sitemap.js

# Commit and deploy
git add .
git commit -m "Add new article and update sitemap"
git push
```

### Optional: Git Hook

Create `.git/hooks/pre-commit` to auto-generate sitemap:

```bash
#!/bin/bash
# Auto-regenerate sitemap before commit

node generate-sitemap.js
git add sitemap.xml
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

Now sitemap updates automatically on every commit!

## Troubleshooting

**Q: Sitemap not showing all articles**
- Check `writing-search.js` has all articles
- Verify article objects have `url` and `date` fields
- Regenerate sitemap: `node generate-sitemap.js`

**Q: Search Console says "Couldn't fetch sitemap"**
- Verify `sitemap.xml` is in root directory
- Check sitemap is accessible: `https://yourdomain.com/sitemap.xml`
- Ensure site is deployed
- Wait 24-48 hours for DNS propagation

**Q: Domain is wrong in sitemap**
- Update `DOMAIN` constant in `generate-sitemap.js`
- Regenerate sitemap
- Redeploy site

**Q: Articles not getting indexed**
- Wait 1-2 weeks after submitting sitemap
- Check Search Console for errors
- Verify pages are accessible
- Ensure robots.txt isn't blocking

## SEO Best Practices

1. **Update regularly**: Regenerate after adding articles
2. **Submit to search engines**: Google and Bing at minimum
3. **Monitor indexing**: Check Search Console weekly
4. **Fix errors**: Address any crawl errors promptly
5. **Keep URLs stable**: Don't change article URLs after publishing

## robots.txt (Optional)

Create `robots.txt` in root to guide search engines:

```
User-agent: *
Allow: /

Sitemap: https://paulinamei.com/sitemap.xml
```

This tells crawlers:
- Allow crawling all pages
- Location of sitemap

## Verification

After generating, verify your sitemap:

1. **Validate XML**:
   - Open in browser: `file:///path/to/sitemap.xml`
   - Should display as formatted XML
   - No syntax errors

2. **Test online**:
   - [xml-sitemaps.com/validate-xml-sitemap.html](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
   - Paste your sitemap content
   - Check for errors

3. **Check all URLs**:
   - Each article should have an entry
   - URLs should be absolute (full domain)
   - Dates should be ISO format (YYYY-MM-DD)

## Performance Impact

Sitemaps have **zero** impact on site performance:
- Only read by search engine crawlers
- Not loaded by visitors
- File size is minimal (under 10KB typically)

## Future: Dynamic Sitemap

For sites with 100+ articles, consider:
- Server-side generation
- Automatic updates on article publish
- Compressed sitemap (`.xml.gz`)
- Sitemap index for multiple sitemaps

---

## Quick Reference

| Task | Command |
|------|---------|
| Generate sitemap | `node generate-sitemap.js` |
| Update domain | Edit `DOMAIN` in `generate-sitemap.js` |
| Submit to Google | [search.google.com/search-console](https://search.google.com/search-console) |
| Validate sitemap | [xml-sitemaps.com/validate-xml-sitemap.html](https://www.xml-sitemaps.com/validate-xml-sitemap.html) |

---

**Pro tip:** Add sitemap generation to your deployment checklist. Run it every time before deploying to ensure search engines find all your latest content!
