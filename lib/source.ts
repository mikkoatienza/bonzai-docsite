import type { PageTree } from 'fumadocs-core/server';

// Static page tree for navigation
export const pageTree: PageTree.Root = {
  name: 'Docs',
  children: [
    {
      type: 'folder',
      name: 'Getting Started',
      children: [
        { type: 'page', name: 'Introduction', url: '/docs' },
        { type: 'page', name: 'What is Bonzai 2?', url: '/docs/getting-started/what-is-bonzai' },
        { type: 'page', name: 'Installation', url: '/docs/getting-started/installation' },
      ],
    },
    {
      type: 'folder',
      name: 'Migration',
      children: [
        { type: 'page', name: 'Classic vs Modern', url: '/docs/migration/classic-vs-modern' },
      ],
    },
    {
      type: 'folder',
      name: 'Web Parts',
      children: [
        { type: 'page', name: 'Overview', url: '/docs/web-parts' },
        {
          type: 'separator',
          name: 'Communication',
        },
        { type: 'page', name: 'Important Messages', url: '/docs/web-parts/important-messages' },
        { type: 'page', name: 'News Rollup', url: '/docs/web-parts/news-rollup' },
        { type: 'page', name: 'Events Rollup', url: '/docs/web-parts/events-rollup' },
        { type: 'page', name: 'Feedback', url: '/docs/web-parts/feedback' },
        {
          type: 'separator',
          name: 'Documents',
        },
        { type: 'page', name: 'Document Portal', url: '/docs/web-parts/document-portal' },
        { type: 'page', name: 'Documents Rollup', url: '/docs/web-parts/documents-rollup' },
        { type: 'page', name: 'Documents Table', url: '/docs/web-parts/documents-table' },
        { type: 'page', name: 'Favourite Documents', url: '/docs/web-parts/favourite-documents' },
        {
          type: 'separator',
          name: 'Content',
        },
        { type: 'page', name: 'Spotlight Rollup', url: '/docs/web-parts/spotlight-rollup' },
        { type: 'page', name: 'Landing', url: '/docs/web-parts/landing' },
        { type: 'page', name: 'Slider', url: '/docs/web-parts/slider' },
        { type: 'page', name: 'Pages Rollup', url: '/docs/web-parts/pages-rollup' },
        { type: 'page', name: 'Tabbed', url: '/docs/web-parts/tabbed' },
        {
          type: 'separator',
          name: 'Navigation',
        },
        { type: 'page', name: 'Advanced Links', url: '/docs/web-parts/advanced-links' },
        { type: 'page', name: 'Site Directory', url: '/docs/web-parts/site-directory' },
        { type: 'page', name: 'Favourite Sites', url: '/docs/web-parts/favourite-sites' },
        {
          type: 'separator',
          name: 'People',
        },
        { type: 'page', name: 'Employee Directory', url: '/docs/web-parts/employee-directory' },
        { type: 'page', name: 'People Listing', url: '/docs/web-parts/people-listing' },
        { type: 'page', name: 'Locations', url: '/docs/web-parts/locations' },
        {
          type: 'separator',
          name: 'Search',
        },
        { type: 'page', name: 'Advanced Search', url: '/docs/web-parts/advanced-search' },
        {
          type: 'separator',
          name: 'Utility',
        },
        { type: 'page', name: 'Theme Manager', url: '/docs/web-parts/theme-manager' },
        {
          type: 'separator',
          name: 'Lists',
        },
        { type: 'page', name: 'Marketplace', url: '/docs/web-parts/marketplace' },
      ],
    },
    {
      type: 'folder',
      name: 'Extensions',
      children: [
        { type: 'page', name: 'Overview', url: '/docs/extensions' },
        { type: 'page', name: 'Mega Menu', url: '/docs/extensions/mega-menu' },
      ],
    },
    {
      type: 'folder',
      name: 'Page Recipes',
      children: [
        { type: 'page', name: 'Overview', url: '/docs/recipes' },
        { type: 'page', name: 'Home Page', url: '/docs/recipes/home-page' },
        { type: 'page', name: 'News & Communication', url: '/docs/recipes/news-communication' },
        { type: 'page', name: 'Content Showcase', url: '/docs/recipes/content-showcase' },
        { type: 'page', name: 'Documents', url: '/docs/recipes/documents' },
        { type: 'page', name: 'People & Directory', url: '/docs/recipes/people-directory' },
      ],
    },
    {
      type: 'folder',
      name: 'Administration',
      children: [
        { type: 'page', name: 'Theming', url: '/docs/administration/theming' },
      ],
    },
  ],
};
