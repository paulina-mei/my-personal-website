# Paulina Mei - Personal Website

A minimal, dark-themed personal website built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## 📚 Documentation

**Root Level (Start Here):**
- **README.md** (this file) - Quick start guide and overview
- **QUICK-START.md** - Fast setup instructions
- **CHANGELOG.md** - Version history

**Detailed Guides** (`docs/` folder):
- [Article Generator Guide](docs/ARTICLE-GENERATOR.md) - Using the article creation script
- [Notion Workflow](docs/NOTION-TO-ARTICLE.md) - Write in Notion, import to your site
- [Adding Articles Manually](docs/ADDING-ARTICLES.md) - Manual article creation steps
- [Deployment Guide](docs/DEPLOYMENT-GUIDE.md) - Deploy to Netlify, Vercel, or GitHub Pages
- [Meta Tags Guide](docs/META-TAGS-GUIDE.md) - Social media sharing setup
- [Image Optimization](docs/IMAGE-OPTIMIZATION-GUIDE.md) - Optimize images for web
- [Sitemap Guide](docs/SITEMAP-GUIDE.md) - SEO and sitemap generation
- [Layout Documentation](docs/LAYOUT.md) - Site structure and design details

## 🎨 Design Philosophy

- **Minimal & Clean**: Focuses on content with minimal visual clutter
- **Dark Theme**: Sophisticated dark background (#0a0a0a) with white text
- **Milky Pink Accents**: Soft pink highlights (#ffc4d6) for interactive elements
- **Accessible**: WCAG 2.1 compliant with keyboard navigation support
- **Responsive**: Seamlessly adapts from desktop to mobile

## 📁 File Structure

```
my-personal-website/
├── index.html                  # Main homepage with intro, bio, and featured articles
├── writing.html                # Blog archive with search and infinite scroll
├── 404.html                    # Custom 404 error page
├── styles.css                  # All styling (dark theme, responsive design)
├── script.js                   # Navigation and interactive features
├── writing-search.js           # Search functionality and infinite scroll for articles
├── auto-meta.js                # ⚡ Auto-generates meta tags for articles
├── favicon.svg                 # Site favicon (milky pink blob with PM)
├── sitemap.xml                 # ⚡ Auto-generated SEO sitemap
├── resume.pdf                  # Your PDF resume
├── profile.jpg                 # Your profile photo (optimized for web)
├── README.md                   # This file - main documentation
├── QUICK-START.md              # Fast setup guide
├── CHANGELOG.md                # Version history and changes
├── articles/                   # Individual article pages
│   └── my-job-is-internet.html
├── docs/                       # Detailed documentation guides
│   ├── ARTICLE-GENERATOR.md
│   ├── NOTION-TO-ARTICLE.md
│   ├── ADDING-ARTICLES.md
│   ├── DEPLOYMENT-GUIDE.md
│   └── ... (more guides)
├── scripts/                    # Utility scripts
│   ├── create-article.js       # ⚡ Article generator (Node.js)
│   ├── generate-sitemap.js     # ⚡ Sitemap generator
│   └── clean-notion-html.js    # ⚡ Notion HTML cleaner
└── backups/                    # Original files (gitignored)
```

### Key Files Explained

**index.html**
- Homepage with profile photo, bio, and contact information
- Shows 3 most recent articles from writing section
- "View All Articles" button links to full archive
- Minimal navigation (Home, Writing)

**writing.html**
- Complete article archive page
- Real-time search functionality (searches titles and content)
- Infinite scroll (loads 10 articles at a time)
- Loading indicator for smooth UX

**styles.css**
- Single CSS file for entire site
- Dark mode only design (no light mode switching)
- Responsive breakpoints for tablets (768px) and mobile (480px)
- Custom animations (wave emoji, loading spinner)

**script.js**
- Mobile hamburger menu functionality
- Smooth scrolling navigation
- Active nav link highlighting
- Accessibility features (skip links, keyboard navigation)

**writing-search.js**
- Article data storage and management
- Real-time search (filters by title and content)
- Infinite scroll implementation (10 articles per load)
- Throttled scroll events for performance

**404.html**
- Custom error page for broken links
- Matches site design and branding
- Provides helpful navigation back to homepage or blog

**favicon.svg**
- Scalable vector favicon
- Milky pink organic blob with "PM" text
- Displays in browser tabs and bookmarks

## ✨ Features

### Homepage
- **Flexbox two-column layout**: Profile photo (550px) on left, bio/info on right with 3rem spacing
- **Friendly greeting**: "Hi, I'm Paulina Mei 👋" with animated wave
- **Bio section**: Professional background and personal interests
- **Resume download**: Direct PDF download button
- **Featured articles**: 3 most recent blog posts (auto-populated)

### Writing Section
- **Search functionality**: Real-time filtering by title or content
- **Infinite scroll**: Loads 10 articles at a time as you scroll
- **Clean list layout**: Minimal design with title, description, and date
- **Individual article pages**: Full-width readable format (720px max)

### Navigation
- **Sticky header**: Always accessible at top of page
- **Mobile responsive**: Hamburger menu for small screens
- **Smooth scrolling**: Animated transitions between sections

### Accessibility
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators on interactive elements
- Skip links for keyboard users
- Support for reduced motion preferences
- High contrast mode support

### Contact & Social
- **Email**: paulinaxmei@gmail.com (footer)
- **LinkedIn**: linkedin.com/in/paulinamei (footer)
- Both with SVG icons that turn pink on hover

### SEO & Social Sharing
- **Open Graph tags**: Professional previews when sharing on Facebook, LinkedIn
- **Twitter Card tags**: Optimized previews for Twitter/X
- **Canonical URLs**: Prevents duplicate content issues
- **Meta descriptions**: Unique descriptions for each page
- **Article metadata**: Publication dates and author information for blog posts
- **Sitemap.xml**: Auto-generated for search engines

### ⚡ Automation Features (NEW!)

Making website maintenance effortless:

1. **Auto-formatting dates** 📅
   - Use ISO format (`2025-10-25`) in articles
   - Automatically displays as "Oct 2025" on site

2. **Auto-updating copyright** ©️
   - Footer year updates automatically
   - No manual changes needed

3. **Auto-generating meta tags** 🏷️
   - Meta tags update based on current page URL
   - No manual URL updates in articles

4. **Article generator script** ✍️
   - Run `node scripts/create-article.js`
   - Answer prompts, paste content
   - HTML file and search index auto-created

5. **Sitemap auto-generation** 🗺️
   - Run `node scripts/generate-sitemap.js`
   - Includes all articles automatically
   - Ready for Google Search Console

6. **Auto-populated homepage** 🏠
   - Shows 3 most recent articles
   - Updates automatically from articles array
   - No manual HTML editing needed

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local server) OR Node.js OR VS Code

### Running Locally

**Option 1: Python Simple Server**
```bash
# Navigate to project directory
cd /Users/paulina.mei/my-personal-website

# Start server (Python 3)
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

**Option 2: Node.js http-server**
```bash
# Install http-server globally (one time only)
npm install -g http-server

# Start server
http-server

# Open browser to http://localhost:8080
```

**Option 3: VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Adding Your Content

**1. Add Profile Photo**
- Save your photo as `profile.jpg` in the root folder
- Image will display at 550px width and maintain natural aspect ratio
- Recommended: High-resolution image (at least 1100px wide for retina displays)
- Format: JPG or PNG

**2. Add Resume PDF**
- Save your resume as `resume.pdf` in the root folder
- The download button will automatically work

**3. Update Bio**
- Edit `index.html` around line 40-54
- Replace placeholder text with your actual bio
- Add your personal interests where indicated

**4. Add Articles**

**✍️ Best Way: Write in Notion, Import with Script (Recommended)**

1. Write your article in Notion (better writing experience!)
2. Export as HTML from Notion
3. Clean the HTML: `node scripts/clean-notion-html.js notion-export.html`
4. Run article generator: `node scripts/create-article.js`
5. Paste the cleaned HTML

See [docs/NOTION-TO-ARTICLE.md](docs/NOTION-TO-ARTICLE.md) for complete Notion workflow.

**🎨 Quick Way: Article Generator Script**

```bash
node scripts/create-article.js
```

The script will:
- Ask for title, description, date, and content
- Generate complete HTML file with all meta tags
- Auto-update `writing-search.js`
- Make your article instantly available on the site

See [docs/ARTICLE-GENERATOR.md](docs/ARTICLE-GENERATOR.md) for detailed guide.

**📝 Manual Way:**

To add a new article manually (2 steps):

1. Create HTML file in `articles/` folder (copy `building-products-users-love.html` as template)
2. Add article to **TOP** of `writing-search.js` in the `allArticles` array:

```javascript
const allArticles = [
    {
        title: "Your New Article Title",
        description: "Brief description",
        content: "Full searchable text",
        url: "articles/your-article.html",
        date: "2025-11-15"  // ISO format (YYYY-MM-DD) - auto-formats to "Nov 2025"
    },
    // ... existing articles below
];
```

**That's it!** The homepage will automatically show the 3 most recent articles from this array.

See [docs/ADDING-ARTICLES.md](docs/ADDING-ARTICLES.md) for detailed manual instructions.

---

## 📖 Need More Help?

- **Getting Started**: See [QUICK-START.md](QUICK-START.md) for fast setup
- **Article Creation**: See [docs/ARTICLE-GENERATOR.md](docs/ARTICLE-GENERATOR.md) or [docs/NOTION-TO-ARTICLE.md](docs/NOTION-TO-ARTICLE.md)
- **Deployment**: See [docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md)
- **All Guides**: Browse the [docs/](docs/) folder for detailed documentation

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css` (lines 8-28):

```css
:root {
    --primary-color: #ffffff;        /* Text color */
    --accent-pink: #ffc4d6;          /* Highlight color */
    --bg-primary: #0a0a0a;           /* Main background */
    --bg-secondary: #1a1a1a;         /* Card backgrounds */
    --text-secondary: #b3b3b3;       /* Secondary text */
}
```

### Adjust Layout Widths

- Main content container: `.main-content { max-width: 950px; }` (line 176)
- Profile image width: `.main-section .profile-pic { width: 550px; }` (line 191)
- Spacing between image and text: `.main-content { gap: 3rem; }` (line 179)
- Writing archive: `.writing-archive .container { max-width: 800px; }` (line 516)
- Article pages: `.article-page .container { max-width: 720px; }` (line 602)

### Responsive Design

The website uses a mobile-first responsive approach:
- **Desktop**: Two-column flexbox layout (550px image + bio text)
- **Tablet (≤768px)**: Single column, image centered (max 400px), bio text padded (1.5rem)
- **Mobile (≤480px)**: Single column, image centered (max 280px), bio text padded (1rem)

### Infinite Scroll Settings

In `writing-search.js`, adjust:
- `ARTICLES_PER_PAGE = 10` (line 28) - articles per load
- `threshold = 200` (line 136) - pixels from bottom to trigger load

## 🌐 Deployment

**IMPORTANT**: Before deploying, update all URLs in the Open Graph and Twitter meta tags:
- Find and replace `https://paulinamei.com/` with your actual domain
- Update in: `index.html`, `writing.html`, and all article pages
- Also update the image URLs to point to your deployed profile photo

### Option 1: Netlify (Recommended)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live! You'll get a URL like `yourname.netlify.app`
4. Add custom domain in Settings → Domain Management

### Option 2: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import project from GitHub or upload directly
3. Deploy with one click
4. Add custom domain in Project Settings → Domains

### Option 3: GitHub Pages

1. Create GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select branch (usually `main`)
5. Your site will be at `https://yourusername.github.io/repository-name`

### Custom Domain Setup

**Purchase Domain:**
- Check availability for `paulina-mei.com` or `paulinamei.com`
- Recommended registrars: [Namecheap](https://namecheap.com), [Google Domains](https://domains.google), [Cloudflare](https://cloudflare.com)

**Connect Domain:**
- **Netlify**: Settings → Domain Management → Add custom domain
- **Vercel**: Project Settings → Domains → Add
- **GitHub Pages**: Create `CNAME` file with your domain name

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Custom Properties, sticky positioning
- **Vanilla JavaScript**: No frameworks or libraries
- **SVG Icons**: Inline SVG for scalability

## 📄 License

This project is for personal use. Feel free to use as a template for your own website.

## 📧 Contact

**Paulina Mei**
Senior Product Manager at Teachable

- Email: paulinaxmei@gmail.com
- LinkedIn: [linkedin.com/in/paulinamei](https://linkedin.com/in/paulinamei)

---

**Built with ❤️ using HTML, CSS, and JavaScript**
No frameworks. No build tools. Just clean, minimal code.