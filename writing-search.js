// Auto-format ISO dates to readable format (e.g., "2025-10-25" → "Oct 2025")
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Article data - In production, this would come from your CMS or API
// Use ISO date format (YYYY-MM-DD) - dates will be auto-formatted to "Month Year"
const allArticles = [
    {
        title: "You're not the problem. Your goals are trash.",
        description: "Your problem isn't \"motivation\"—it's vague, rigid, boring goals, and you can fix that by rewriting what you measure and actually rewarding yourself along the way.",
        content: "Goals are trash. Vague goals empty containers. SMART goals feelings emotional charge. Measure goals brittle systems movement flexible. Unmotivating goals discipline bribery treats massage dessert gadget takeout. Zero to one project iterate scope metrics. New year fresh start lazy terrible impossible progress. Be rich be fit eat better savings fitness health. Work out walking yoga movement furniture. Be healthier save money network beige wall slog. Treat milestone prototype win OKR performance review outcomes fun.",
        url: "articles/youre-not-the-problem-your-goals-are-trash.html",
        date: "2026-01-19"
    },
    {
        title: "Waiting for a chance is just procrastination with better branding",
        description: "How AI tools are changing what it means to break into product management.",
        content: "Breaking into product management. Proving you can do this. AI tools, portfolio building, validation, iteration. Building hero sections, reskinning schools, embed generators, certificate generators. Play not grind. Junior PMs, job market, shape-shifting role. Computer twenty bucks unhinged. Full team designers engineers analysts discovery building testing. Inflection point product lifecycle reasoning data analysis editor collaborator. Curiosity overeager assistant POC enrollments CSS customization WYSIWYG fields. Perfect team perfect role perfect moment weird bad laugh.",
        url: "articles/waiting-for-a-chance.html",
        date: "2025-11-07"
    },
    {
        title: "My job is internet",
        description: "I used to be internet famous, and now I help internet-famous people stay authentic and actually deliver value to their audiences—which might be the perfect ending to that story.",
        content: "I used to be internet famous, and now I help internet-famous people stay authentic and actually deliver value to their audiences. Growth means being uncomfortable. Writing more, going to events, trying new hobbies. Tumblr fame, Pokemon memes, streaming. The best way to stay on the internet isn't to be the star—it's to help others shine while keeping a little mystery for yourself.",
        url: "articles/my-job-is-internet.html",
        date: "2025-10-26"
    }
    // Add more articles here as needed
    // When you create new articles, add them to the TOP of this array
    // Example:
    // {
    //     title: "Your New Article",
    //     description: "Brief description here",
    //     content: "Searchable content here",
    //     url: "articles/your-new-article.html",
    //     date: "2025-11-01"
    // },
];

// Infinite scroll configuration
const ARTICLES_PER_PAGE = 10;
let currentPage = 0;
let isSearching = false;
let filteredArticles = [...allArticles];

const searchInput = document.getElementById('searchInput');
const articlesList = document.getElementById('articlesList');
const noResults = document.getElementById('noResults');
const loadingIndicator = document.getElementById('loadingIndicator');

// Create article HTML
function createArticleElement(article) {
    return `
        <article class="blog-item" data-title="${article.title}" data-content="${article.content}">
            <a href="${article.url}" class="blog-link">
                <div class="blog-info">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                </div>
                <span class="blog-date">${formatDate(article.date)}</span>
            </a>
        </article>
    `;
}

// Load more articles
function loadMoreArticles() {
    const startIndex = currentPage * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    if (articlesToShow.length === 0) {
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        return;
    }

    articlesToShow.forEach(article => {
        articlesList.insertAdjacentHTML('beforeend', createArticleElement(article));
    });

    currentPage++;

    // Hide loading indicator if no more articles
    if (endIndex >= filteredArticles.length && loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}

// Search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        isSearching = searchTerm !== '';

        if (isSearching) {
            // Filter articles based on search
            filteredArticles = allArticles.filter(article => {
                const title = article.title.toLowerCase();
                const content = article.content.toLowerCase();
                return title.includes(searchTerm) || content.includes(searchTerm);
            });

            // Reset and reload
            articlesList.innerHTML = '';
            currentPage = 0;
            loadMoreArticles();

            // Show/hide no results
            if (noResults) {
                noResults.style.display = filteredArticles.length === 0 ? 'block' : 'none';
            }
            if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
            }
        } else {
            // Reset to show all articles
            filteredArticles = [...allArticles];
            articlesList.innerHTML = '';
            currentPage = 0;
            loadMoreArticles();

            if (noResults) {
                noResults.style.display = 'none';
            }
            if (loadingIndicator && currentPage * ARTICLES_PER_PAGE < filteredArticles.length) {
                loadingIndicator.style.display = 'block';
            }
        }
    });

    // Clear search on Escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
}

// Infinite scroll
function handleInfiniteScroll() {
    if (isSearching) return; // Don't infinite scroll during search

    const scrollPosition = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 200; // Load more when 200px from bottom

    if (scrollPosition >= pageHeight - threshold) {
        loadMoreArticles();
    }
}

// Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleInfiniteScroll, 100);
});

// Initial load
if (articlesList) {
    loadMoreArticles();
}