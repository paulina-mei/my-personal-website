# Social Media Meta Tags Guide

This guide explains the Open Graph and Twitter Card meta tags added to your website and how to test them.

## What Are These Tags?

Open Graph and Twitter Card meta tags control how your links appear when shared on social media platforms. They allow you to specify:
- Title and description
- Preview image
- URL
- Content type (website, article, etc.)

## Platforms That Use These Tags

✅ **LinkedIn** - Uses Open Graph tags
✅ **Facebook** - Uses Open Graph tags
✅ **Twitter/X** - Uses Twitter Card tags (falls back to Open Graph)
✅ **WhatsApp** - Uses Open Graph tags
✅ **Slack** - Uses Open Graph tags
✅ **Discord** - Uses Open Graph tags
✅ **iMessage** - Uses Open Graph tags

## Meta Tags on Each Page

### Homepage (`index.html`)
- **Type**: `website`
- **Title**: "Paulina Mei | Senior Product Manager"
- **Description**: "Senior Product Manager at Teachable. Building products that empower creators and educators."
- **Image**: Your profile photo

### Blog Archive (`writing.html`)
- **Type**: `website`
- **Title**: "Blog | Paulina Mei"
- **Description**: "Read articles on product management, leadership, and career growth"
- **Image**: Your profile photo

### Article Pages (`articles/*.html`)
- **Type**: `article`
- **Title**: Article title
- **Description**: Article description
- **Image**: Your profile photo (you can customize per article)
- **Additional**: Publication date and author metadata

## Testing Your Meta Tags

### Option 1: Online Tools (Before Deployment)

**LinkedIn Post Inspector**
- URL: https://www.linkedin.com/post-inspector/
- Paste your URL (once deployed)
- Shows how your link will appear on LinkedIn
- Can refresh cache if needed

**Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Paste your URL (once deployed)
- Shows Open Graph data
- Can scrape fresh data

**Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Paste your URL (once deployed)
- Shows how your card will appear
- Note: Requires Twitter account

**Social Share Preview**
- URL: https://socialsharepreview.com/
- Shows previews for multiple platforms at once
- Good for quick testing

### Option 2: Manual Testing (After Deployment)

1. **Share on LinkedIn**:
   - Create a new post
   - Paste your website URL
   - LinkedIn will automatically fetch the preview
   - You'll see your title, description, and image

2. **Share on Twitter/X**:
   - Create a new tweet
   - Paste your website URL
   - Preview will show in the composer

3. **Share in Slack**:
   - Paste your URL in any channel
   - Slack will automatically unfurl the link

## Before Deploying: Update URLs

⚠️ **IMPORTANT**: The meta tags currently use `https://paulinamei.com/` as a placeholder.

Before deploying, update these URLs in:
- `index.html` (homepage)
- `writing.html` (blog archive)
- `articles/building-products-users-love.html` (article template)
- Any other article pages you create

### Find and Replace:
1. Open each file
2. Find: `https://paulinamei.com/`
3. Replace with: `https://your-actual-domain.com/`

### Update Image URLs:
Change `https://paulinamei.com/profile.jpg` to point to your deployed profile photo URL.

## Customizing Meta Tags for New Articles

When creating a new article, update these meta tags:

```html
<!-- Open Graph -->
<meta property="og:url" content="https://yourdomain.com/articles/your-article.html">
<meta property="og:title" content="Your Article Title">
<meta property="og:description" content="Your article description">
<meta property="article:published_time" content="2025-10-25T00:00:00Z">

<!-- Twitter -->
<meta property="twitter:url" content="https://yourdomain.com/articles/your-article.html">
<meta property="twitter:title" content="Your Article Title">
<meta property="twitter:description" content="Your article description">

<!-- Canonical URL -->
<link rel="canonical" href="https://yourdomain.com/articles/your-article.html">
```

## Tips for Best Results

### Title
- **Length**: 60-70 characters max
- **Format**: "Article Title | Paulina Mei"
- **Avoid**: Emojis, special characters

### Description
- **Length**: 150-160 characters max
- **Content**: Clear, engaging summary
- **CTA**: Optional call-to-action

### Image
- **Size**: 1200×630 pixels (recommended)
- **Format**: JPG or PNG
- **Content**: High quality, good contrast
- **Text**: Readable if image contains text
- **File size**: < 1MB for fast loading

### Pro Tips
- Test on multiple platforms before major launches
- Clear cache if you update meta tags
- Use absolute URLs (https://...) not relative URLs
- Keep descriptions engaging and benefit-focused

## What If The Preview Looks Wrong?

1. **Check the URL**: Make sure you updated placeholder URLs
2. **Clear cache**: Use debug tools to refresh
3. **Wait**: Some platforms cache for 24 hours
4. **Check file paths**: Ensure image URLs are accessible
5. **Validate HTML**: Use W3C validator to check for errors

## Current Meta Tag Status

✅ Homepage - Ready (update domain URL)
✅ Blog archive - Ready (update domain URL)
✅ Article template - Ready (update domain URL)
✅ 404 page - Uses noindex/nofollow (correct)

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

**Need Help?**
If your previews aren't showing correctly after deployment, double-check:
1. URLs are absolute (https://...)
2. Image is publicly accessible
3. HTML is valid
4. Meta tags are in `<head>` section
