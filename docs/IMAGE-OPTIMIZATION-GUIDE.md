# Image Optimization Guide 🖼️

Complete guide for optimizing images on your personal website for fast loading and better user experience.

## Why Optimize Images?

- **Faster loading**: Smaller files load quicker
- **Better SEO**: Google ranks faster sites higher
- **Lower bandwidth**: Saves data for mobile users
- **Better UX**: Visitors don't wait for large images

## Images on Your Site

### 1. Profile Photo (`profile.jpg`)

**Current specs:**
- Display size: 550px width
- Maintains natural aspect ratio
- Used on homepage only

**Optimization steps:**

1. **Recommended dimensions**:
   - Width: 1100px (2x for retina displays)
   - Height: Proportional to your photo
   - Format: JPG or WebP

2. **Compress the image**:

   **Online tools (easy):**
   - [TinyPNG](https://tinypng.com) - Upload and download compressed version
   - [Squoosh](https://squoosh.app) - Google's image optimizer
   - [Compressor.io](https://compressor.io) - Simple compression

   **Command line (advanced):**
   ```bash
   # Install ImageMagick
   brew install imagemagick  # macOS
   sudo apt install imagemagick  # Linux

   # Resize and compress
   convert profile-original.jpg -resize 1100x -quality 85 profile.jpg
   ```

3. **Target file size**: Under 200KB (ideally under 100KB)

### 2. Favicon (`favicon.svg`)

**Current specs:**
- Format: SVG (already optimal!)
- SVG is vector-based and tiny

**No optimization needed** - SVG files are already optimized.

### 3. Social Sharing Image (`profile.jpg`)

**Current usage:**
- Open Graph image for social media previews
- Facebook, LinkedIn, Twitter previews

**Recommendations:**

**Option 1: Use same profile photo**
- Already implemented
- Keep file under 200KB
- Minimum 1200x630px for best quality

**Option 2: Create custom social card**
- Size: 1200x630px (Facebook/LinkedIn optimal)
- Include: Your name, title, branded design
- Save as `social-card.jpg`
- Update meta tags to use this instead

## Optimization Workflow

### For Profile Photo

**Step 1: Prepare image**
- Use high-quality original photo
- Ensure good lighting and professional appearance
- Crop to desired framing

**Step 2: Resize**
```bash
# Using ImageMagick
convert original.jpg -resize 1100x -quality 85 profile.jpg

# Using macOS Preview
# Open image → Tools → Adjust Size → Width: 1100px → OK
```

**Step 3: Compress**
1. Go to [TinyPNG.com](https://tinypng.com)
2. Upload `profile.jpg`
3. Download compressed version
4. Replace original

**Step 4: Verify**
- File size: Under 200KB ✅
- Dimensions: 1100px width ✅
- Quality: Still looks sharp ✅

### For Future Article Images

**Best practices:**

1. **Dimensions**:
   - Max width: 1440px (720px display × 2 for retina)
   - Height: As needed
   - Aspect ratio: 16:9 or 4:3 recommended

2. **Format**:
   - Photos: JPG or WebP
   - Graphics/screenshots: PNG
   - Logos/icons: SVG when possible

3. **Compression**:
   - JPG quality: 80-85%
   - Target: Under 150KB per image
   - Use TinyPNG for batch compression

## Advanced: WebP Format

**Why WebP?**
- 25-35% smaller than JPG
- Better quality at same file size
- Supported by all modern browsers

**Convert to WebP:**

```bash
# Install cwebp (WebP encoder)
brew install webp  # macOS
sudo apt install webp  # Linux

# Convert image
cwebp -q 85 profile.jpg -o profile.webp
```

**Update HTML to use WebP with fallback:**

```html
<picture>
    <source srcset="profile.webp" type="image/webp">
    <img src="profile.jpg" alt="Paulina Mei" class="profile-pic">
</picture>
```

## Lazy Loading (Optional)

For sites with many images, implement lazy loading:

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

**Note:** Your current site has minimal images, so lazy loading isn't critical yet.

## Automated Image Optimization Script

For future use when you have multiple images:

### Using ImageMagick (Batch Process)

Create `optimize-images.sh`:

```bash
#!/bin/bash
# Image optimization script

QUALITY=85
MAX_WIDTH=1440

for img in *.jpg; do
    echo "Optimizing $img..."
    convert "$img" -resize ${MAX_WIDTH}x -quality ${QUALITY} "optimized-$img"
done

echo "Done! Optimized images have 'optimized-' prefix"
```

**Usage:**
```bash
chmod +x optimize-images.sh
./optimize-images.sh
```

### Using Node.js (Advanced)

Create `optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './images';
const outputDir = './images-optimized';

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Optimize all images
fs.readdirSync(imagesDir).forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        sharp(path.join(imagesDir, file))
            .resize(1440, null, { withoutEnlargement: true })
            .jpeg({ quality: 85 })
            .toFile(path.join(outputDir, file))
            .then(() => console.log(`✅ Optimized ${file}`))
            .catch(err => console.error(`❌ Error: ${file}`, err));
    }
});
```

**Setup:**
```bash
npm install sharp
node optimize-images.js
```

## Performance Testing

After optimization, test your site speed:

1. **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
2. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
3. **WebPageTest**: [webpagetest.org](https://webpagetest.org)

**Target scores:**
- PageSpeed: 90+ (mobile and desktop)
- Load time: Under 2 seconds
- Total page size: Under 1MB

## Image Checklist

Before deploying:

- [ ] Profile photo is under 200KB
- [ ] Profile photo is at least 1100px wide
- [ ] All images compressed with TinyPNG
- [ ] Alt text added to all images
- [ ] Images look sharp on retina displays
- [ ] Page loads in under 2 seconds

## Quick Reference

| Image Type | Recommended Size | Max File Size | Format |
|-----------|-----------------|---------------|--------|
| Profile photo | 1100×1100px | 200KB | JPG/WebP |
| Social card | 1200×630px | 200KB | JPG |
| Article images | 1440px width | 150KB each | JPG/PNG |
| Icons | Vector preferred | N/A | SVG |

## Tools Comparison

| Tool | Type | Best For | Cost |
|------|------|----------|------|
| TinyPNG | Online | Quick compression | Free |
| Squoosh | Online | Format conversion | Free |
| ImageMagick | CLI | Batch processing | Free |
| Sharp (Node.js) | CLI | Automation | Free |

## Best Practices Summary

1. **Always keep originals** - Store high-res versions in backup
2. **Compress before upload** - Never upload unoptimized images
3. **Test on mobile** - Images should load fast on 3G/4G
4. **Use appropriate format**:
   - Photos → JPG/WebP
   - Screenshots → PNG
   - Logos → SVG
5. **Alt text** - Always describe images for accessibility
6. **Responsive images** - Consider different sizes for mobile vs desktop

## Future: Responsive Images

When you add more images, consider srcset:

```html
<img
    srcset="profile-400.jpg 400w,
            profile-800.jpg 800w,
            profile-1100.jpg 1100w"
    sizes="(max-width: 768px) 400px,
           (max-width: 1024px) 800px,
           1100px"
    src="profile-1100.jpg"
    alt="Paulina Mei"
>
```

This serves smaller images to mobile devices automatically.

---

**Remember:** Optimize once, benefit forever. A few minutes of optimization can save hours of loading time for your visitors!
