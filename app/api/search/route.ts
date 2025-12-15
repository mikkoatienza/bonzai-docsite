import { NextRequest, NextResponse } from 'next/server';

// Search index for all documentation pages
const searchIndex = [
  // Getting Started
  {
    title: 'Introduction',
    url: '/docs',
    description: 'Welcome to Bonzai 2 documentation. Learn how to build beautiful SharePoint intranets.',
    keywords: ['introduction', 'getting started', 'welcome', 'overview'],
    category: 'Getting Started',
  },
  {
    title: 'What is Bonzai 2?',
    url: '/docs/getting-started/what-is-bonzai',
    description: 'Learn about Bonzai 2, a modern SharePoint Framework solution for building feature-rich intranets.',
    keywords: ['what is', 'bonzai', 'spfx', 'sharepoint', 'framework', 'intranet'],
    category: 'Getting Started',
  },
  {
    title: 'Installation',
    url: '/docs/getting-started/installation',
    description: 'Step-by-step guide to install Bonzai 2 in your SharePoint Online environment.',
    keywords: ['install', 'setup', 'deploy', 'app catalog', 'sppkg', 'package'],
    category: 'Getting Started',
  },
  
  // Migration
  {
    title: 'Classic vs Modern',
    url: '/docs/migration/classic-vs-modern',
    description: 'Compare Classic Bonzai with Modern Bonzai 2. Migration guide with checklists.',
    keywords: ['classic', 'modern', 'migration', 'upgrade', 'brick', 'aws', 'differences', 'compare'],
    category: 'Migration',
  },
  
  // Web Parts - Communication
  {
    title: 'Important Messages',
    url: '/docs/web-parts/important-messages',
    description: 'Display announcements and alerts with targeting, dismissable options, and date ranges.',
    keywords: ['important', 'messages', 'announcements', 'alerts', 'notifications', 'targeting'],
    category: 'Web Parts',
  },
  {
    title: 'News Rollup',
    url: '/docs/web-parts/news-rollup',
    description: 'Display news articles with multiple templates, category filtering, and content targeting.',
    keywords: ['news', 'rollup', 'articles', 'templates', 'filtering', 'category'],
    category: 'Web Parts',
  },
  {
    title: 'Events Rollup',
    url: '/docs/web-parts/events-rollup',
    description: 'Display events with RSVP functionality, attendance tracking, and calendar integration.',
    keywords: ['events', 'rollup', 'rsvp', 'calendar', 'attendance', 'upcoming'],
    category: 'Web Parts',
  },
  {
    title: 'Feedback',
    url: '/docs/web-parts/feedback',
    description: 'Quick feedback submission with star ratings and optional anonymous options.',
    keywords: ['feedback', 'ratings', 'stars', 'anonymous', 'submit', 'form'],
    category: 'Web Parts',
  },
  
  // Web Parts - Documents
  {
    title: 'Document Portal',
    url: '/docs/web-parts/document-portal',
    description: 'Full-featured document search with typeahead, filtering, and refinement panels.',
    keywords: ['document', 'portal', 'search', 'typeahead', 'filtering', 'refinement'],
    category: 'Web Parts',
  },
  {
    title: 'Documents Rollup',
    url: '/docs/web-parts/documents-rollup',
    description: 'Display documents from libraries with customizable templates and content targeting.',
    keywords: ['documents', 'rollup', 'library', 'templates', 'files'],
    category: 'Web Parts',
  },
  {
    title: 'Documents Table',
    url: '/docs/web-parts/documents-table',
    description: 'Sortable table view of documents with column configuration and pagination.',
    keywords: ['documents', 'table', 'sortable', 'columns', 'pagination'],
    category: 'Web Parts',
  },
  {
    title: 'Favourite Documents',
    url: '/docs/web-parts/favourite-documents',
    description: 'User bookmarks for quick document access with star icon.',
    keywords: ['favourite', 'favorite', 'documents', 'bookmarks', 'star'],
    category: 'Web Parts',
  },
  
  // Web Parts - Content
  {
    title: 'Spotlight Rollup',
    url: '/docs/web-parts/spotlight-rollup',
    description: 'Featured content showcase with image-focused layouts for employee highlights.',
    keywords: ['spotlight', 'rollup', 'featured', 'highlight', 'employee'],
    category: 'Web Parts',
  },
  {
    title: 'Landing',
    url: '/docs/web-parts/landing',
    description: 'Responsive grid layout with overlay and description templates.',
    keywords: ['landing', 'grid', 'layout', 'overlay', 'hero'],
    category: 'Web Parts',
  },
  {
    title: 'Slider',
    url: '/docs/web-parts/slider',
    description: 'Featured news carousel with transition animations and auto-play.',
    keywords: ['slider', 'carousel', 'banner', 'rotating', 'animation'],
    category: 'Web Parts',
  },
  {
    title: 'Pages Rollup',
    url: '/docs/web-parts/pages-rollup',
    description: 'Display SharePoint pages with various view templates and metadata.',
    keywords: ['pages', 'rollup', 'templates', 'metadata', 'listing'],
    category: 'Web Parts',
  },
  {
    title: 'Tabbed',
    url: '/docs/web-parts/tabbed',
    description: 'Organize content into tabs or accordion panels with customizable styling.',
    keywords: ['tabbed', 'tabs', 'accordion', 'panels', 'organize'],
    category: 'Web Parts',
  },
  
  // Web Parts - Navigation
  {
    title: 'Advanced Links',
    url: '/docs/web-parts/advanced-links',
    description: 'Collection of links with icons, descriptions, and content targeting.',
    keywords: ['advanced', 'links', 'icons', 'navigation', 'quick links'],
    category: 'Web Parts',
  },
  {
    title: 'Site Directory',
    url: '/docs/web-parts/site-directory',
    description: 'Browse and discover SharePoint sites with search and favorites.',
    keywords: ['site', 'directory', 'browse', 'discover', 'favorites'],
    category: 'Web Parts',
  },
  {
    title: 'Favourite Sites',
    url: '/docs/web-parts/favourite-sites',
    description: 'Quick access to bookmarked SharePoint sites.',
    keywords: ['favourite', 'favorite', 'sites', 'bookmarks', 'quick access'],
    category: 'Web Parts',
  },
  
  // Web Parts - People
  {
    title: 'Employee Directory',
    url: '/docs/web-parts/employee-directory',
    description: 'Employee directory with search, alphabetical filtering, and profile information.',
    keywords: ['employee', 'directory', 'people', 'search', 'profiles', 'staff'],
    category: 'Web Parts',
  },
  {
    title: 'People Listing',
    url: '/docs/web-parts/people-listing',
    description: 'Display people from organization directory with search and contact info.',
    keywords: ['people', 'listing', 'directory', 'contacts', 'team'],
    category: 'Web Parts',
  },
  {
    title: 'Locations',
    url: '/docs/web-parts/locations',
    description: 'Office and facility locations with contact information and maps.',
    keywords: ['locations', 'offices', 'facilities', 'maps', 'address', 'contact'],
    category: 'Web Parts',
  },
  
  // Web Parts - Search & Utility
  {
    title: 'Advanced Search',
    url: '/docs/web-parts/advanced-search',
    description: 'Unified search with typeahead, refinement filters, and multiple result templates.',
    keywords: ['advanced', 'search', 'typeahead', 'refinement', 'filters'],
    category: 'Web Parts',
  },
  {
    title: 'Theme Manager',
    url: '/docs/web-parts/theme-manager',
    description: 'On-page theme customization with color pickers, dark mode, and presets.',
    keywords: ['theme', 'manager', 'colors', 'dark mode', 'branding', 'customize'],
    category: 'Web Parts',
  },
  
  // Page Recipes
  {
    title: 'Page Recipes Overview',
    url: '/docs/recipes',
    description: 'Pre-built page configurations for common intranet scenarios.',
    keywords: ['recipes', 'templates', 'configurations', 'examples'],
    category: 'Recipes',
  },
  {
    title: 'Home Page Recipe',
    url: '/docs/recipes/home-page',
    description: 'Build an engaging intranet home page with Bonzai 2 web parts.',
    keywords: ['home', 'page', 'recipe', 'landing', 'intranet'],
    category: 'Recipes',
  },
  {
    title: 'News & Communication Recipe',
    url: '/docs/recipes/news-communication',
    description: 'Create a news and announcements hub page.',
    keywords: ['news', 'communication', 'announcements', 'hub'],
    category: 'Recipes',
  },
  {
    title: 'Content Showcase Recipe',
    url: '/docs/recipes/content-showcase',
    description: 'Display rich content with sliders, spotlights, and featured items.',
    keywords: ['content', 'showcase', 'featured', 'display'],
    category: 'Recipes',
  },
  {
    title: 'Documents Recipe',
    url: '/docs/recipes/documents',
    description: 'Create a document management center page.',
    keywords: ['documents', 'management', 'center', 'files'],
    category: 'Recipes',
  },
  {
    title: 'People & Directory Recipe',
    url: '/docs/recipes/people-directory',
    description: 'Build a people directory and organizational page.',
    keywords: ['people', 'directory', 'organization', 'staff'],
    category: 'Recipes',
  },
  
  // Administration
  {
    title: 'Theming',
    url: '/docs/administration/theming',
    description: 'Configure brand colors, dark mode, and visual customization.',
    keywords: ['theming', 'colors', 'branding', 'dark mode', 'customize', 'css'],
    category: 'Administration',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase() || '';

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  // Search through the index
  const results = searchIndex
    .filter((item) => {
      const searchableText = `${item.title} ${item.description} ${item.keywords.join(' ')} ${item.category}`.toLowerCase();
      return searchableText.includes(query);
    })
    .map((item) => ({
      id: item.url,
      title: item.title,
      url: item.url,
      content: item.description,
      category: item.category,
    }))
    .slice(0, 10); // Limit to 10 results

  return NextResponse.json(results);
}



