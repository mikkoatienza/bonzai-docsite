export const siteConfig = {
  name: 'Bonzai 2',
  description: 'Modern SharePoint Intranet Solution',
  url: 'https://bonzai-docs.vercel.app',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/trilogy-group/bonzai-2',
  },
  creator: 'Bonzai Development Team',
};

export const webPartCategories = [
  {
    name: 'Communication',
    description: 'Web parts for news, messages, and feedback',
    webParts: ['Important Messages', 'News Rollup', 'Feedback'],
  },
  {
    name: 'Content',
    description: 'Display and organize content beautifully',
    webParts: ['Landing', 'Slider', 'Spotlight Rollup', 'Pages Rollup', 'Tabbed'],
  },
  {
    name: 'Documents',
    description: 'Document management and discovery',
    webParts: ['Document Portal', 'Documents Rollup', 'Documents Table', 'Favourite Documents'],
  },
  {
    name: 'People',
    description: 'Employee directory and people search',
    webParts: ['Employee Directory', 'People Listing', 'Locations'],
  },
  {
    name: 'Navigation',
    description: 'Site navigation and quick access',
    webParts: ['Advanced Links', 'Site Directory', 'Site Directory Favourites', 'Favourite Sites'],
  },
  {
    name: 'Search',
    description: 'Unified search experience',
    webParts: ['Advanced Search'],
  },
  {
    name: 'Utility',
    description: 'Theme and configuration',
    webParts: ['Theme Manager'],
  },
];

