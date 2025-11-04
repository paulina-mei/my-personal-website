/**
 * Site Configuration
 *
 * Centralized configuration for site-wide settings.
 * Update these values to change site metadata across all pages.
 */

const SITE_CONFIG = {
    // Site Information
    url: 'https://paulinamei.com',
    title: 'Paulina Mei | Senior Product Manager',
    author: 'Paulina Mei',
    description: 'Senior Product Manager at Teachable. Building products that empower creators and educators. Passionate about user-centered experiences and data-driven decision making.',

    // Contact & Social
    email: 'paulinaxmei@gmail.com',
    linkedin: 'https://www.linkedin.com/in/paulinamei/',

    // Assets
    profileImage: 'profile.jpg',
    favicon: 'favicon.svg',
    resume: 'resume.pdf',
    resumeDownloadName: 'Paulina_Mei_Resume.pdf',

    // Homepage Settings
    featuredArticlesCount: 3,

    // Blog/Writing Settings
    articlesPerPage: 10,
    infiniteScrollEnabled: true,
};

// Export for use in scripts (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
