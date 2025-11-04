# Website Guides

Collection of guides for managing your personal website.

## Table of Contents
- [SEO & Sitemap](#seo--sitemap)
- [Social Media Meta Tags](#social-media-meta-tags)
- [Image Optimization](#image-optimization)
- [Deployment](#deployment)

---

## SEO & Sitemap

### What is a Sitemap?

A sitemap is an XML file that lists all pages on your website. It helps search engines discover and index your content faster.

### Generating Your Sitemap

Your website includes an automated sitemap generator:

```bash
cd scripts
node generate-sitemap.js
```

This automatically:
- Reads all articles from `js/writing-search.js`
- Includes static pages (homepage, blog archive)
- Generates `sitemap.xml` with all URLs
- Includes last modified dates
- Sets priority and change frequency

### When to Regenerate

Run the sitemap generator:
- After adding new articles
- Before deploying your site
- After updating important pages
- Monthly for maintenance

### Configuration

Before deploying, update the domain in `scripts/generate-sitemap.js`:

```javascript
const DOMAIN = 'https://paulinamei.com';  // Change to your domain
```

### What's Included

**Static Pages:**
- Homepage (`/`) - Priority: 1.0, Weekly
- Blog Archive (`/writing.html`) - Priority: 0.9, Weekly

**Article Pages:**
- All articles from `js/writing-search.js`
- Priority: 0.8
- Change frequency: Monthly

### Submitting to Search Engines

After generating and deploying:

1. **Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your property (website)
   - Submit sitemap URL: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster Tools**
   - Go to https://www.bing.com/webmasters
   - Add your site
   - Submit sitemap

---

## Social Media Meta Tags

### What Are Meta Tags?

Open Graph and Twitter Card meta tags control how your links appear when shared on social media.

### Platforms That Use These Tags

- ✅ LinkedIn (Open Graph)
- ✅ Facebook (Open Graph)
- ✅ Twitter/X (Twitter Cards)
- ✅ WhatsApp, Slack, Discord (Open Graph)

### What's Included

**Homepage:**
- Type: `website`
- Title: "Paulina Mei | Senior Product Manager"
- Description: Your bio
- Image: Profile photo

**Blog Archive:**
- Type: `website`
- Title: "Blog | Paulina Mei"
- Description: Blog description
- Image: Profile photo

**Article Pages:**
- Type: `article`
- Title: Article title
- Description: Article description
- Image: Profile photo (can customize per article)
- Additional: Publication date and author

### Configuration

All meta tag URLs are now managed through `config.js`:

```javascript
const SITE_CONFIG = {
    url: 'https://paulinamei.com',
    title: 'Paulina Mei | Senior Product Manager',
    description: '...',
    profileImage: 'profile.jpg',
    // ...
};
```

Update this file to change all meta tags site-wide!

### Testing Your Meta Tags

**Before Deployment:**
1. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/
   - Shows how links appear on LinkedIn

2. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Shows Open Graph data

3. **Social Share Preview**
   - https://socialsharepreview.com/
   - Preview multiple platforms at once

**After Deployment:**
1. Share on LinkedIn/Twitter - preview will show
2. Paste URL in Slack - link will unfurl
3. Use validation tools above

---

## Image Optimization

### Why Optimize Images?

- Faster loading times
- Better SEO rankings
- Lower bandwidth usage
- Better user experience

### Profile Photo (`assets/profile.jpg`)

**Current specs:**
- Display size: 550px width
- Used on homepage and as OG image

**Optimization steps:**

1. **Recommended dimensions:**
   - Width: 1100px (2x for retina displays)
   - Height: Proportional
   - Format: JPG or WebP

2. **Compress the image:**

   **Online tools:**
   - [TinyPNG](https://tinypng.com) - Best compression
   - [Squoosh](https://squoosh.app) - Google's optimizer
   - [Compressor.io](https://compressor.io) - Simple tool

   **Command line:**
   ```bash
   # Install ImageMagick
   brew install imagemagick  # macOS
   sudo apt install imagemagick  # Linux

   # Resize and compress
   convert profile-original.jpg -resize 1100x -quality 85 profile.jpg
   ```

3. **Target file size:** Under 200KB (ideally under 100KB)

### Favicon (`assets/favicon.svg`)

**Current specs:**
- Format: SVG (vector-based)
- Already optimized!

No optimization needed - SVG files are tiny and scalable.

### Social Sharing Image

**Option 1: Use profile photo (current)**
- Keep file under 200KB
- Minimum 1200x630px for best quality

**Option 2: Create custom social card**
- Size: 1200x630px (optimal for Facebook/LinkedIn)
- Include: Name, title, branded design
- Save as `social-card.jpg` in `/assets/`
- Update `config.js` to reference it

### Optimization Workflow

1. **Prepare image** - High-quality original, good lighting
2. **Resize** - To recommended dimensions
3. **Compress** - Using TinyPNG or similar
4. **Verify** - File size under 200KB
5. **Replace** - Update in `/assets/` folder

### WebP Format (Advanced)

For even better compression:

```bash
# Convert to WebP
cwebp -q 85 profile.jpg -o profile.webp

# Add to HTML with fallback
<picture>
  <source srcset="assets/profile.webp" type="image/webp">
  <img src="assets/profile.jpg" alt="Paulina Mei">
</picture>
```

---

## Deployment

### Before Deploying

1. **Update `config.js`:**
   - Set correct site URL
   - Verify all metadata

2. **Generate sitemap:**
   ```bash
   cd scripts
   node generate-sitemap.js
   ```

3. **Test locally:**
   - Open all HTML files in browser
   - Check links work
   - Verify images load
   - Test search functionality

4. **Optimize images:**
   - Compress profile photo
   - Check file sizes

### Deployment Options

**Option 1: GitHub Pages (Recommended)**
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main`)
4. Your site will be live at `https://username.github.io/repo-name`

**Option 2: Netlify**
1. Connect GitHub repository
2. Auto-deploys on every push
3. Free SSL and custom domain

**Option 3: Vercel**
1. Import GitHub repository
2. Zero configuration needed
3. Automatic deployments

**Option 4: Custom Hosting**
- Upload all files via FTP
- Ensure `index.html` is in root
- Configure `.htaccess` for clean URLs

### After Deployment

1. **Test the live site:**
   - Visit all pages
   - Test social sharing
   - Check mobile responsiveness

2. **Submit sitemap:**
   - Google Search Console
   - Bing Webmaster Tools

3. **Verify meta tags:**
   - Use LinkedIn Post Inspector
   - Use Facebook Sharing Debugger

4. **Set up analytics (optional):**
   - Google Analytics
   - Plausible Analytics (privacy-friendly)

### Custom Domain Setup

If using a custom domain:

1. **Update `config.js`:**
   ```javascript
   url: 'https://yourdomain.com',
   ```

2. **Regenerate sitemap:**
   ```bash
   node generate-sitemap.js
   ```

3. **Configure DNS:**
   - Add CNAME record pointing to hosting provider
   - Wait for DNS propagation (up to 48 hours)

4. **Enable SSL:**
   - Most hosting providers offer free SSL
   - Enable in hosting settings

---

## Tips & Best Practices

### SEO
- Generate sitemap after every article
- Use descriptive page titles
- Write compelling meta descriptions
- Include alt text for images

### Performance
- Compress all images
- Minimize CSS/JS when possible
- Use browser caching
- Consider CDN for assets

### Social Sharing
- Test meta tags before sharing
- Use high-quality preview images
- Write engaging descriptions
- Keep titles under 60 characters

### Maintenance
- Update sitemap monthly
- Check for broken links
- Keep dependencies updated
- Backup your site regularly

---

Need more help? Check the main README.md or ARTICLES.md for related information!
