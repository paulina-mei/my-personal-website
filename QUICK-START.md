# Quick Start Guide 🚀

The absolute fastest way to get started with your personal website.

## Your Writing Workflow (Notion → Website)

```
┌─────────────────────────────────────────────────────────────┐
│  Step 1: Write in Notion                                    │
│  ✍️  Use headings, lists, bold - no HTML needed            │
│  ⏱️  Time: 20-30 minutes                                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Step 2: Export from Notion                                 │
│  📤  ⋯ menu → Export → HTML                                 │
│  ⏱️  Time: 30 seconds                                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Step 3: Clean Notion HTML                                  │
│  🧹  node scripts/clean-notion-html.js notion-export.html   │
│  ⏱️  Time: 10 seconds                                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Step 4: Generate Article                                   │
│  🎨  node scripts/create-article.js                         │
│  📋  Enter title, description, date, paste HTML             │
│  ⏱️  Time: 2 minutes                                        │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Step 5: Update Sitemap & Deploy                            │
│  🗺️  node scripts/generate-sitemap.js                      │
│  🚀  git add . && git commit -m "New article" && git push   │
│  ⏱️  Time: 1 minute                                         │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    ✅ Article Live!
```

**Total time: ~35 minutes** (mostly writing!)

---

## Commands You'll Use

### Adding a New Article

```bash
# 1. Clean Notion export
node scripts/clean-notion-html.js your-export.html

# 2. Generate article (follow prompts)
node scripts/create-article.js

# 3. Update sitemap
node scripts/generate-sitemap.js

# 4. Deploy
git add .
git commit -m "Add article: Your Title"
git push
```

### Testing Locally

```bash
# Start local server
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

---

## File Structure Quick Reference

```
📦 Your Website
├── 📄 index.html          - Homepage
├── 📄 writing.html        - Blog archive
├── 🎨 styles.css          - All styling
├── ⚙️ script.js           - Navigation
│
├── 📁 scripts/            - Automation tools
│   ├── create-article.js       - Generate articles
│   ├── clean-notion-html.js    - Clean Notion exports
│   └── generate-sitemap.js     - Create sitemap.xml
│
├── 📁 articles/           - Your blog posts
│   └── your-article.html
│
└── 📚 Guides
    ├── NOTION-TO-ARTICLE.md    - Notion workflow
    ├── ARTICLE-GENERATOR.md    - Script usage
    ├── DEPLOYMENT-GUIDE.md     - How to deploy
    └── README.md               - Main docs
```

---

## 5-Minute Setup Checklist

Starting from scratch? Here's what to do:

### First Time Setup

- [ ] **Add profile photo** - Save as `profile.jpg` in root
- [ ] **Add resume** - Save as `resume.pdf` in root
- [ ] **Update bio** - Edit `index.html` lines 60-70
- [ ] **Test locally** - Run `python3 -m http.server 8000`
- [ ] **Write first article** - Use Notion workflow above
- [ ] **Deploy** - See `DEPLOYMENT-GUIDE.md`

### Before Each Article

- [ ] Write in Notion using template (see `NOTION-TO-ARTICLE.md`)
- [ ] Include: Title, meta description, date, content
- [ ] Use Heading 2 for sections
- [ ] Use lists, bold, italic as needed

### After Each Article

- [ ] Export from Notion as HTML
- [ ] Run `node scripts/clean-notion-html.js`
- [ ] Run `node scripts/create-article.js`
- [ ] Run `node scripts/generate-sitemap.js`
- [ ] Commit and push
- [ ] Verify live site

---

## Common Tasks

### Update Your Bio

1. Open `index.html`
2. Find lines 60-70 (the bio section)
3. Update text
4. Save and push

### Change Profile Photo

1. Replace `profile.jpg` with new photo
2. Keep filename as `profile.jpg`
3. Optimize first (see `IMAGE-OPTIMIZATION-GUIDE.md`)
4. Recommended: 1100px wide, under 200KB

### Update Resume

1. Replace `resume.pdf` with new version
2. Keep filename as `resume.pdf`
3. Push to deploy

### Test Before Deploying

```bash
# Start server
python3 -m http.server 8000

# Check in browser
open http://localhost:8000

# Test:
✓ Homepage loads
✓ Blog archive works
✓ Search works
✓ New article displays
✓ Resume downloads
✓ Mobile responsive (resize window)
```

---

## Troubleshooting

### "Command not found: node"

Install Node.js:
```bash
# macOS
brew install node

# Or download from nodejs.org
```

### "Can't find writing-search.js"

Make sure you're in the project directory:
```bash
cd /Users/paulina.mei/my-personal-website
```

### Article not showing on homepage

- Check it's at the **top** of the `allArticles` array
- Refresh with cache clear (Cmd+Shift+R or Ctrl+Shift+R)

### Navigation not working

- Clear browser cache
- Check browser console for errors (F12)

### Notion HTML looks wrong

- Use the `node scripts/clean-notion-html.js` script
- Make sure you exported as HTML (not Markdown)
- Remove the `<h1>` title manually if needed

---

## Pro Tips

💡 **Keep a Notion template** - Create a template page in Notion with your standard article structure

💡 **Batch write articles** - Write 3-4 articles at once, publish on a schedule

💡 **Save Notion links** - Keep links to Notion pages for easy editing later

💡 **Test locally first** - Always test on localhost before pushing

💡 **Use git branches** - For major changes, create a branch first

💡 **Backup regularly** - Your GitHub repo is your backup, but keep article drafts in Notion too

---

## Getting Help

- 📖 **Full docs**: See `README.md`
- ✍️ **Notion workflow**: See `NOTION-TO-ARTICLE.md`
- 🚀 **Deployment**: See `DEPLOYMENT-GUIDE.md`
- 🎨 **Customization**: See `README.md` → Customization section

---

## Next Steps

Once you're comfortable:

1. **Add more articles** - Keep your blog active
2. **Customize design** - Change colors in `styles.css`
3. **Set up analytics** - Track visitors (see `DEPLOYMENT-GUIDE.md`)
4. **Submit to search engines** - Get indexed (see `SITEMAP-GUIDE.md`)
5. **Share on social media** - LinkedIn, Twitter, etc.

---

**Ready to write?** Open Notion and start your first article! ✍️

