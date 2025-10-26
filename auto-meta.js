// Auto-generate meta tags for article pages
// This script automatically generates canonical URLs and updates meta tags
// based on the current page URL

(function() {
    // Get current page URL
    const currentURL = window.location.href;
    const currentPath = window.location.pathname;
    const isArticlePage = currentPath.includes('/articles/');

    // Only run on article pages
    if (!isArticlePage) return;

    // Get article title from page
    const articleTitleElement = document.querySelector('.article-title');
    const articleTitle = articleTitleElement ? articleTitleElement.textContent : '';

    // Get meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription ? metaDescription.content : '';

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && !canonicalLink.href.includes('http')) {
        // If canonical is relative, make it absolute
        canonicalLink.href = currentURL;
    }

    // Update Open Graph URLs
    const ogURL = document.querySelector('meta[property="og:url"]');
    if (ogURL) ogURL.content = currentURL;

    const twitterURL = document.querySelector('meta[property="twitter:url"]');
    if (twitterURL) twitterURL.content = currentURL;

    // Auto-generate missing meta tags if needed
    if (articleTitle && !document.querySelector('meta[property="og:title"]')) {
        const ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.content = articleTitle;
        document.head.appendChild(ogTitle);
    }

    if (description && !document.querySelector('meta[property="og:description"]')) {
        const ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        ogDesc.content = description;
        document.head.appendChild(ogDesc);
    }

    // Log for debugging (remove in production)
    console.log('Auto-meta: URLs updated', {
        canonical: canonicalLink ? canonicalLink.href : 'none',
        ogURL: currentURL
    });
})();
