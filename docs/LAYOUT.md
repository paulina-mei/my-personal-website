# Layout Documentation

This document provides detailed information about the layout structure and spacing of the website.

## Main Homepage Layout

### Structure
The homepage uses a **Flexbox-based two-column layout** for optimal control over spacing and positioning.

```
┌─────────────────────────────────────────────────────────┐
│                    Main Header                          │
│              "Hi, I'm Paulina Mei 👋"                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────┐   3rem gap   ┌────────────────────────┐
│                  │               │                        │
│  Profile Image   │               │      Bio Text          │
│    (550px)       │               │      (flexible)        │
│                  │               │                        │
│   - Sticky       │               │  - Professional info   │
│   - 550px wide   │               │  - Resume download     │
│   - Auto height  │               │  - Flex: 1             │
│                  │               │                        │
└──────────────────┘               └────────────────────────┘
        ↓                                     ↓
   Max width: 950px (combined container)
```

### Key Measurements

**Container:**
- Max-width: `950px`
- Padding: `0` (no padding to minimize spacing)
- Display: `flex`
- Gap: `3rem` (48px between columns)

**Profile Image:**
- Width: `550px` (fixed)
- Height: `auto` (maintains aspect ratio)
- Position: `sticky` (stays visible on scroll)
- Flex: `0 1 auto` (won't shrink via `flex-shrink: 0`)

**Bio Text:**
- Width: Flexible (uses remaining space)
- Flex: `1` (grows to fill available space)
- Padding-left: `0` (spacing controlled by gap)

### Spacing Breakdown

Total container width: `950px`
- Profile image: `550px` (58% of container)
- Gap: `48px` (3rem = 5% of container)
- Bio text: `~352px` (37% of container, flexible)

## Responsive Breakpoints

### Tablet (max-width: 768px)
- Layout switches to **single column** (flex-direction: column)
- Profile image **centered** using flexbox
- Image max-width: `400px`
- Gap: `2.5rem` (between stacked elements)
- Bio text padding: `0 1.5rem` (horizontal padding for breathing room)
- Sticky positioning removed (position: static)
- Image stacks on top, bio text below

### Mobile (max-width: 480px)
- Single column maintained (flex-direction: column)
- Profile image **centered** using flexbox
- Image max-width: `280px`
- Gap: `2rem` (between stacked elements)
- Bio text padding: `0 1rem` (horizontal padding for breathing room)
- Sticky positioning removed (position: static)
- Image stacks on top, bio text below

## Color Reference

**Background:**
- Primary: `#0a0a0a` (near black)
- Secondary: `#1a1a1a` (cards/inputs)

**Text:**
- Primary: `#ffffff` (white)
- Secondary: `#b3b3b3` (gray)

**Accent:**
- Pink: `#ffc4d6` (milky pink)
- Pink hover: `#ffb3c9` (darker pink)

## Typography

**Headings:**
- Main heading (h1): `2.75rem` (44px)
- Section title (h2): `2.5rem` (40px)
- Article title (h3): `1.25rem` (20px)

**Body:**
- Bio text: `1.05rem` (16.8px)
- Line height: `1.8`
- Font family: System font stack

## Customization Guide

### To change profile image size:
Edit `styles.css` line 183:
```css
.main-section .profile-pic {
    width: 550px;  /* Change this value */
    height: auto;
}
```

### To adjust spacing between image and text:
Edit `styles.css` line 171:
```css
.main-content {
    gap: 3rem;  /* Change this value (1rem = 16px) */
}
```

### To change container max-width:
Edit `styles.css` line 168:
```css
.main-content {
    max-width: 950px;  /* Change this value */
}
```

## CSS Selector Reference

| Element | Selector | Purpose |
|---------|----------|---------|
| Main container | `.main-section .container` | Removes default padding |
| Content wrapper | `.main-content` | Flexbox container with gap |
| Image column | `.profile-image` | Sticky positioning wrapper |
| Profile picture | `.main-section .profile-pic` | Fixed 550px width |
| Text column | `.main-text` | Flexible width text container |
| Bio section | `.bio` | Biography paragraphs |
| Resume button | `.btn-download` | PDF download link |

## Performance Notes

- **Sticky positioning** uses GPU acceleration
- **Flexbox** provides better browser support than Grid for this layout
- **System fonts** load instantly (no web font downloads)
- **SVG icons** scale perfectly at any resolution
- **No JavaScript** required for layout (pure CSS)

## Accessibility

- Semantic HTML structure (`<section>`, `<article>`, `<nav>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all clickable elements
- High contrast mode support
- Reduced motion preference support
- Screen reader friendly text
