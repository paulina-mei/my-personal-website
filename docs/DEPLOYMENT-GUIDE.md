# Deployment Guide 🚀

Complete guide for deploying your personal website to production.

## Pre-Deployment Checklist

Before deploying, make sure you've completed these steps:

### ✅ Content Ready
- [ ] Profile photo added (`profile.jpg`)
- [ ] Resume PDF added (`resume.pdf`)
- [ ] Bio updated in `index.html`
- [ ] At least one blog post created
- [ ] All links tested locally

### ✅ URLs Updated
- [ ] Update all `https://paulinamei.com/` references to your actual domain
- [ ] Check `index.html`, `writing.html`, and all article pages
- [ ] Update Open Graph image URLs
- [ ] Update canonical URLs

### ✅ Meta Tags Verified
- [ ] Each page has unique `<title>` tag
- [ ] Each page has unique meta description
- [ ] Open Graph tags are correct
- [ ] Twitter Card tags are correct

### ✅ Testing
- [ ] All navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] Search functionality works
- [ ] Resume downloads correctly
- [ ] No console errors (F12 → Console)

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

**Why Netlify?**
- ✅ Free tier is generous
- ✅ Automatic HTTPS
- ✅ Super easy setup
- ✅ Drag-and-drop deployment
- ✅ Automatic deployments from GitHub

**Quick Deploy (5 minutes):**

1. **Sign up**: Go to [netlify.com](https://netlify.com) and create account
2. **Deploy**: Drag your entire project folder to Netlify
3. **Done!** You get a URL like `your-name.netlify.app`

**GitHub Auto-Deploy (Recommended):**

1. **Create GitHub repo**:
   ```bash
   cd /Users/paulina.mei/my-personal-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Build settings: Leave blank (static site)
   - Click "Deploy site"

3. **Auto-deployment**: Now every time you push to GitHub, Netlify automatically deploys!

**Custom Domain on Netlify:**

1. Purchase domain (Namecheap, Google Domains, Cloudflare)
2. In Netlify: Site Settings → Domain Management → Add Custom Domain
3. Add your domain (e.g., `paulinamei.com`)
4. Update DNS records as instructed by Netlify
5. Wait 24-48 hours for DNS propagation
6. Netlify automatically provisions SSL certificate

### Option 2: Vercel (Great for Developers)

**Why Vercel?**
- ✅ Lightning fast CDN
- ✅ Excellent developer experience
- ✅ GitHub integration
- ✅ Free tier for personal projects
- ✅ Automatic preview deployments

**Deploy Steps:**

1. **Sign up**: [vercel.com](https://vercel.com) with GitHub
2. **Import project**: Click "New Project" → Import Git Repository
3. **Configure**: Select your repo, leave build settings default
4. **Deploy**: Click "Deploy"
5. **Done!** Get URL like `your-name.vercel.app`

**Custom Domain on Vercel:**

1. Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Automatic HTTPS included

### Option 3: GitHub Pages (Free)

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Hosted on GitHub infrastructure
- ✅ Easy if you already use GitHub
- ✅ Perfect for simple sites

**Deploy Steps:**

1. **Create repo and push code**:
   ```bash
   cd /Users/paulina.mei/my-personal-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Save

3. **Access your site**: `https://yourusername.github.io`

**Custom Domain on GitHub Pages:**

1. Add `CNAME` file to root with your domain:
   ```bash
   echo "paulinamei.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. In repo Settings → Pages → Custom domain: Enter your domain
3. Update DNS at your registrar:
   - Add A records pointing to GitHub IPs
   - Add CNAME record for `www` pointing to `yourusername.github.io`
4. Enable "Enforce HTTPS" after DNS propagates

## Custom Domain Setup

### 1. Purchase Domain

**Recommended Registrars:**
- **Namecheap**: Budget-friendly, good UI
- **Google Domains**: Simple, reliable
- **Cloudflare**: Best for advanced users, free SSL

**Domain Ideas:**
- `paulinamei.com` (professional, matches name)
- `paulina-mei.com` (alternative)
- `pmei.co` (short and memorable)

### 2. Configure DNS

Depends on your host:

**For Netlify:**
- Add A record: `@` → Netlify's IP
- Add CNAME: `www` → `your-site.netlify.app`

**For Vercel:**
- Add A record: `@` → `76.76.21.21`
- Add CNAME: `www` → `cname.vercel-dns.com`

**For GitHub Pages:**
- Add A records pointing to:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add CNAME: `www` → `yourusername.github.io`

### 3. Wait for DNS Propagation

- Usually takes 1-24 hours
- Check status: [whatsmydns.net](https://whatsmydns.net)
- SSL certificate auto-provisions after DNS is live

## Post-Deployment

### Update URLs in Code

After getting your domain, update all references:

1. **Find and replace** in all files:
   - Old: `https://paulinamei.com/`
   - New: `https://yourdomain.com/`

2. **Files to update**:
   - `index.html` (Open Graph URLs)
   - `writing.html` (Open Graph URLs)
   - All article pages in `articles/` folder
   - `auto-meta.js` (if you hardcoded any URLs)

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update URLs to production domain"
   git push
   ```

### Verify Deployment

- [ ] Visit your site and test all pages
- [ ] Check mobile responsiveness
- [ ] Test all links and navigation
- [ ] Verify resume download works
- [ ] Test blog search functionality
- [ ] Check browser console for errors
- [ ] Test social sharing (use Facebook Debugger, LinkedIn Post Inspector)

### Set Up Analytics (Optional)

**Google Analytics:**

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (looks like `G-XXXXXXXXXX`)
3. Add to end of `<head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Commit and push changes

## Continuous Deployment Workflow

Once set up with GitHub + (Netlify/Vercel):

1. **Make changes locally**:
   ```bash
   # Edit files
   node create-article.js  # Add new article
   ```

2. **Test locally**:
   ```bash
   python3 -m http.server 8000
   # Test at localhost:8000
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new article about AI"
   git push
   ```

4. **Automatic deploy**: Your site updates in 1-2 minutes!

## Troubleshooting

**Q: Site shows 404 after deployment**
- Check that `index.html` is in the root folder
- Verify deployment settings (build directory should be root `/`)
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

**Q: Custom domain not working**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct: [whatsmydns.net](https://whatsmydns.net)
- Ensure HTTPS is enabled in hosting platform settings

**Q: Images not loading**
- Check file paths are relative (e.g., `./profile.jpg` not `/profile.jpg`)
- Verify files were included in deployment
- Check browser console for 404 errors

**Q: CSS/JS not loading**
- Verify file paths are correct
- Check files are in root directory
- Clear browser cache

**Q: Social sharing preview not showing**
- Update Open Graph URLs to your domain
- Clear cache using [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- Wait a few minutes for platforms to re-scrape

## Updating Content After Deploy

### Adding New Articles

**Quick workflow:**

```bash
# Generate article
node create-article.js

# Test locally
python3 -m http.server 8000

# Deploy
git add .
git commit -m "Add new article: Your Article Title"
git push
```

### Updating Bio or Resume

1. Edit `index.html` or replace `resume.pdf`
2. Test locally
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update bio"
   git push
   ```

## Performance Optimization

After deployment, consider:

1. **Compress images**: Use [tinypng.com](https://tinypng.com) for profile photo
2. **Minify CSS**: Use [cssminifier.com](https://cssminifier.com) (optional)
3. **Enable caching**: Most hosts do this automatically
4. **Use CDN**: Netlify/Vercel include CDN by default

## Security Best Practices

- ✅ HTTPS enabled (automatic on Netlify/Vercel/GitHub Pages)
- ✅ No sensitive data in public repo
- ✅ Regular dependency updates (if using npm packages)
- ✅ Monitor for suspicious activity

## Backup Strategy

**Recommended:**

1. **Code**: Always in GitHub (automatic backup)
2. **Content**: Keep article drafts in Google Docs or Notion
3. **Images**: Keep originals in Google Drive or Dropbox

## SEO After Deployment

1. **Submit to Google**: [search.google.com/search-console](https://search.google.com/search-console)
2. **Create sitemap**: Use the auto-generated `sitemap.xml` (see SITEMAP guide)
3. **Submit sitemap** to Google Search Console
4. **Monitor rankings**: Check Search Console weekly

---

## Quick Reference

| Platform | Setup Time | Difficulty | Cost | Best For |
|----------|-----------|-----------|------|----------|
| Netlify | 5 min | Easy | Free | Beginners |
| Vercel | 5 min | Easy | Free | Developers |
| GitHub Pages | 10 min | Medium | Free | GitHub users |

**Recommended: Netlify** for easiest setup with best features.

---

**Questions?** Check the main README.md or create an issue on GitHub!
