# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-10-26 - Automation Release ⚡

### Added - Automation Features
This release focuses on making website maintenance effortless with comprehensive automation.

- **Auto-formatting Dates** 📅
  - Dates now use ISO format (`2025-10-25`) in `writing-search.js`
  - Automatically display as readable format ("Oct 2025") on the site
  - `formatDate()` function in `writing-search.js` handles conversion
  - No manual date formatting needed when adding articles

- **Auto-updating Copyright Year** ©️
  - Footer copyright year updates automatically using JavaScript
  - `new Date().getFullYear()` replaces hardcoded year
  - Applied to all pages: index.html, writing.html, article pages, 404.html
  - Never need to manually update year again

- **Auto-generating Meta Tags** 🏷️
  - New `auto-meta.js` script automatically updates meta tags
  - Canonical URLs update based on current page URL
  - Open Graph and Twitter Card URLs auto-populate
  - Detects article pages and generates missing meta tags
  - Eliminates manual URL updates in article files

- **Article Generator Script** ✍️
  - New `create-article.js` Node.js script
  - Interactive prompts for title, description, date, content
  - Automatically generates complete HTML file with all meta tags
  - Auto-creates URL-friendly filename (slug generation)
  - Automatically adds entry to `writing-search.js` at top of array
  - Reduces article creation from manual editing to simple prompts
  - See `ARTICLE-GENERATOR.md` for usage guide

- **Sitemap Auto-generation** 🗺️
  - New `generate-sitemap.js` script creates `sitemap.xml`
  - Automatically includes all articles from `writing-search.js`
  - Includes static pages (homepage, blog archive)
  - Proper SEO tags (priority, changefreq, lastmod)
  - Ready for Google Search Console submission
  - Run `node generate-sitemap.js` after adding articles
  - See `SITEMAP-GUIDE.md` for details

### Added - Documentation
- **DEPLOYMENT-GUIDE.md**: Complete guide for deploying to Netlify, Vercel, or GitHub Pages
  - Pre-deployment checklist
  - Step-by-step deployment instructions
  - Custom domain setup
  - DNS configuration
  - Continuous deployment workflow
  - Troubleshooting common issues

- **IMAGE-OPTIMIZATION-GUIDE.md**: Best practices for optimizing images
  - Profile photo optimization steps
  - Recommended dimensions and file sizes
  - Compression tools and techniques
  - WebP format conversion
  - Automated optimization scripts
  - Performance testing

- **SITEMAP-GUIDE.md**: SEO sitemap generation and management
  - What sitemaps are and why they matter
  - How to generate and customize
  - Submitting to search engines
  - Priority and change frequency guidelines
  - Automated workflow integration

- **ARTICLE-GENERATOR.md**: Guide for using the article generator script
  - Quick start instructions
  - Example usage with screenshots
  - Content formatting tips
  - Troubleshooting

### Changed
- Updated `ADDING-ARTICLES.md` to reflect new ISO date format
  - Examples now show `"2025-11-15"` instead of `"Nov 2025"`
  - Added note about automatic date formatting
  - Included both automated (script) and manual methods

- Updated `README.md` with new automation features section
  - Highlighted 6 key automation features
  - Updated file structure with new scripts and guides
  - Added automation as a key feature

- Updated all article dates in `writing-search.js` to ISO format
  - "Oct 2025" → "2025-10-25"
  - "Oct 2025" → "2025-10-20" (Data-Driven Decision Making)
  - "Oct 2025" → "2025-10-15" (My Journey in Product Management)

### Technical Details
- New JavaScript automation scripts (Node.js)
- Date formatting using month array lookup
- RegEx-based article parsing for sitemap generation
- Dynamic meta tag injection via JavaScript
- Slug generation for URL-friendly filenames
- XML sitemap generation with proper structure

## [1.0.3] - 2025-10-26

### Added
- **Automatic Homepage Blog Updates**: Homepage now automatically displays 3 most recent articles
  - Articles are pulled from `writing-search.js` array
  - No need to manually edit `index.html` when adding new posts
  - Just add new article to top of array in `writing-search.js`
  - Significantly reduces maintenance work

### Changed
- Simplified article addition process from 3 steps to 2 steps
- Updated documentation to reflect new automated workflow

## [1.0.2] - 2025-10-26

### Added
- **Favicon**: Custom SVG favicon with milky pink organic blob and "PM" text
  - Displays in browser tabs and bookmarks
  - Scalable vector format for crisp display on all devices
  - Added to all HTML pages
- **404 Error Page**: Custom 404 page with site branding
  - Matches dark theme design
  - Provides navigation back to homepage or blog
  - Helpful error message for users
  - Responsive design for mobile devices
- **Open Graph & Social Media Meta Tags**: Professional link previews when sharing
  - Open Graph tags for Facebook, LinkedIn, WhatsApp
  - Twitter Card tags for Twitter/X
  - Canonical URLs for SEO
  - Article metadata (publish date, author) for blog posts
  - Unique meta descriptions for each page
  - Uses profile photo as default share image

### Changed
- **Terminology Update**: Changed "Writing" to "Blog" and "Articles" to "Posts" throughout the site
  - Navigation now says "Blog" instead of "Writing"
  - "View All Articles" → "View All Posts"
  - "Back to Writing" → "Back to All Posts"
  - Consistent terminology across all pages
- **Bug Fix**: Fixed navigation links not working on non-homepage pages
  - JavaScript now only prevents default for hash links (#home, #blog)
  - Full URL navigation (index.html, writing.html) works properly

## [1.0.1] - 2025-10-26

### Changed
- **Navigation Structure**: Updated navigation to work properly across different pages
  - Logo (Paulina Mei) now clickable and links to homepage on all pages
  - "Writing" link now goes to `writing.html` (writing archive) instead of scrolling to blog section on homepage
  - "Home" link now properly navigates to `index.html` from all pages
  - Removed underline from logo link
  - Added hover effect to logo (darker pink)

### Removed
- **Reading Time**: Removed "X min read" from article pages to simplify content updates
  - Only publication date is now required when adding new articles
  - Makes it easier to add new content without calculating reading time

## [1.0.0] - 2025-10-25

### Added
- Initial release of personal website
- Dark-themed minimal design with milky pink (#ffc4d6) accents
- Homepage with profile photo and bio section
- Flexbox-based two-column layout for optimal spacing
- Writing/blog section with featured articles
- Complete writing archive page (writing.html)
- Real-time search functionality for articles
- Infinite scroll implementation (10 articles per load)
- Individual article page template
- Responsive design with mobile hamburger menu
- Sticky navigation bar
- Sticky profile image on scroll
- Resume PDF download button
- Footer with email and LinkedIn contact links
- WCAG 2.1 accessibility compliance
- Keyboard navigation support
- Reduced motion preferences support
- High contrast mode support

### Design Specifications
- **Background**: Dark (#0a0a0a) with minimal visual clutter
- **Typography**: System font stack for optimal performance
- **Profile Image**: 550px width, maintains natural aspect ratio
- **Layout Spacing**: 3rem gap between profile image and bio text
- **Container Width**: 950px max-width for main content
- **Archive Width**: 800px max-width for writing archive
- **Article Width**: 720px max-width for readable long-form content

### Technical Details
- Vanilla HTML, CSS, and JavaScript (no frameworks)
- CSS Flexbox for main layout
- CSS Custom Properties for theming
- Throttled scroll events for performance
- SVG icons for scalability
- No build process required

### Files
- `index.html` - Main homepage
- `writing.html` - Writing archive with search
- `styles.css` - Complete styling (dark theme only)
- `script.js` - Navigation and interactive features
- `writing-search.js` - Search and infinite scroll logic
- `articles/building-products-users-love.html` - Sample article template
- `README.md` - Project documentation

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
