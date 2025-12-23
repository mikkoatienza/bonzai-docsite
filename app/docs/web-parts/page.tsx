import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import Link from 'next/link';
import {
  MessageSquare,
  Newspaper,
  Calendar,
  FileSearch,
  FolderOpen,
  Search,
  Star,
  Layout,
  Image,
  Link2,
  Users,
  Building,
  MapPin,
  Palette,
  Layers,
  Table,
  Heart,
  Globe,
  ThumbsUp,
  FileText,
  ShoppingCart,
} from 'lucide-react';

const webParts = [
  {
    name: 'Important Messages',
    slug: 'important-messages',
    description: 'Display announcements and alerts with targeting, dismissable options, and date-based activation.',
    icon: MessageSquare,
    category: 'Communication',
    parity: '95%',
  },
  {
    name: 'News Rollup',
    slug: 'news-rollup',
    description: 'Display news articles with multiple templates, category filtering, and content targeting.',
    icon: Newspaper,
    category: 'Communication',
    parity: '90%',
  },
  {
    name: 'Events Rollup',
    slug: 'events-rollup',
    description: 'Display events with RSVP functionality, attendance tracking, and multiple display modes.',
    icon: Calendar,
    category: 'Communication',
    parity: '90%',
  },
  {
    name: 'Feedback',
    slug: 'feedback',
    description: 'Quick feedback submission with star ratings and optional anonymous mode.',
    icon: ThumbsUp,
    category: 'Communication',
    parity: '90%',
  },
  {
    name: 'Document Portal',
    slug: 'document-portal',
    description: 'Full-featured document search with typeahead, filtering, and refinement panels.',
    icon: FileSearch,
    category: 'Documents',
    parity: '85%',
  },
  {
    name: 'Documents Rollup',
    slug: 'documents-rollup',
    description: 'Display documents from libraries with customizable templates and targeting.',
    icon: FolderOpen,
    category: 'Documents',
    parity: '95%',
  },
  {
    name: 'Documents Table',
    slug: 'documents-table',
    description: 'Sortable table view of documents with column configuration and pagination.',
    icon: Table,
    category: 'Documents',
    parity: '95%',
  },
  {
    name: 'Favourite Documents',
    slug: 'favourite-documents',
    description: 'User bookmarks for quick document access with star icon toggle.',
    icon: Heart,
    category: 'Documents',
    parity: '95%',
  },
  {
    name: 'Advanced Search',
    slug: 'advanced-search',
    description: 'Unified search with refinement filters, typeahead, and multiple result templates.',
    icon: Search,
    category: 'Search',
    parity: '85%',
  },
  {
    name: 'Spotlight Rollup',
    slug: 'spotlight-rollup',
    description: 'Feature employees or content with image-focused card layouts.',
    icon: Star,
    category: 'Content',
    parity: '95%',
  },
  {
    name: 'Landing',
    slug: 'landing',
    description: 'Responsive grid layouts with 1-6 items per row and overlay templates.',
    icon: Layout,
    category: 'Content',
    parity: '90%',
  },
  {
    name: 'Slider',
    slug: 'slider',
    description: 'Featured content carousel with auto-play and transition animations.',
    icon: Image,
    category: 'Content',
    parity: '90%',
  },
  {
    name: 'Pages Rollup',
    slug: 'pages-rollup',
    description: 'Display pages from SharePoint libraries with various view templates.',
    icon: FileText,
    category: 'Content',
    parity: '95%',
  },
  {
    name: 'Tabbed',
    slug: 'tabbed',
    description: 'Organize content into tabs or accordion panels with custom styling.',
    icon: Layers,
    category: 'Content',
    parity: '90%',
  },
  {
    name: 'Advanced Links',
    slug: 'advanced-links',
    description: 'Display links with tiles, list, or text-only templates and targeting.',
    icon: Link2,
    category: 'Navigation',
    parity: '95%',
  },
  {
    name: 'Site Directory',
    slug: 'site-directory',
    description: 'Browse and discover SharePoint sites with search and favorites.',
    icon: Building,
    category: 'Navigation',
    parity: '90%',
  },
  {
    name: 'Favourite Sites',
    slug: 'favourite-sites',
    description: 'Quick access to bookmarked SharePoint sites.',
    icon: Globe,
    category: 'Navigation',
    parity: '95%',
  },
  {
    name: 'Employee Directory',
    slug: 'employee-directory',
    description: 'Employee search with A-Z filtering, profile photos, and contact info.',
    icon: Users,
    category: 'People',
    parity: '90%',
  },
  {
    name: 'People Listing',
    slug: 'people-listing',
    description: 'Display people from organization directory with search.',
    icon: Users,
    category: 'People',
    parity: '90%',
  },
  {
    name: 'Locations',
    slug: 'locations',
    description: 'Display office locations with contact details and directions.',
    icon: MapPin,
    category: 'People',
    parity: '90%',
  },
  {
    name: 'Theme Manager',
    slug: 'theme-manager',
    description: 'On-page theming with real-time preview and dark mode support. NEW in Bonzai 2.',
    icon: Palette,
    category: 'Utility',
    parity: 'N/A',
    isNew: true,
  },
  {
    name: 'Marketplace',
    slug: 'marketplace',
    description: 'Display any SharePoint list as a searchable, filterable catalog with grid or list layouts.',
    icon: ShoppingCart,
    category: 'Lists',
    parity: 'N/A',
    isNew: true,
  },
];

const categoryColors: Record<string, string> = {
  Communication: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Documents: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Search: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Content: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Navigation: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  People: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  Utility: 'bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900/30 dark:text-bonzai-400',
  Lists: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
};

export default function WebPartsOverview() {
  return (
    <DocsPage>
      <DocsTitle>Web Parts Reference</DocsTitle>
      <DocsDescription>
        Complete reference for all 22+ Bonzai 2 web parts.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Bonzai 2 includes <strong>22 web parts</strong> including the new Theme Manager 
            and Marketplace, organized into 8 categories. Each web part is built with 
            React and Fluent UI for Modern SharePoint.
          </p>

          <div className="not-prose mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>About Feature Parity:</strong> The percentage shown indicates approximate 
              coverage of legacy Bonzai functionality. Some configuration options differ due to 
              platform changes. Not all legacy options are available, and some new options have 
              been added. See individual web part documentation for details.
            </p>
          </div>

          <h2>All Web Parts</h2>

          <div className="not-prose grid gap-4 sm:grid-cols-2">
            {webParts.map((webPart) => {
              const Icon = webPart.icon;
              return (
                <Link
                  key={webPart.slug}
                  href={`/docs/web-parts/${webPart.slug}`}
                  className="group relative flex flex-col rounded-xl border border-gray-200 p-5 transition-all hover:border-bonzai-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-bonzai-700"
                >
                  {webPart.isNew && (
                    <span className="absolute -top-2 right-3 rounded-full bg-bonzai-500 px-2 py-0.5 text-xs font-medium text-white">
                      NEW
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 transition-colors group-hover:bg-bonzai-700 group-hover:text-white dark:bg-bonzai-900 dark:text-bonzai-400 dark:group-hover:bg-bonzai-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-bonzai-700 dark:text-white dark:group-hover:text-bonzai-400">
                        {webPart.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                        {webPart.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[webPart.category]}`}
                        >
                          {webPart.category}
                        </span>
                        {webPart.parity !== 'N/A' && (
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {webPart.parity} parity
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <h2>Categories</h2>

          <h3>Communication</h3>
          <p>
            Web parts for news, announcements, events, and user feedback. 
            Includes Important Messages, News Rollup, Events Rollup, and Feedback.
          </p>

          <h3>Documents</h3>
          <p>
            Document management and discovery tools. Includes Document Portal, 
            Documents Rollup, Documents Table, and Favourite Documents.
          </p>

          <h3>Search</h3>
          <p>
            Unified search experience with Advanced Search, which consolidates 
            the legacy Search Box and Search Refinement web parts.
          </p>

          <h3>Content</h3>
          <p>
            Display and organize content beautifully. Includes Spotlight Rollup, 
            Landing, Slider, Pages Rollup, and Tabbed.
          </p>

          <h3>Navigation</h3>
          <p>
            Site navigation and quick access links. Includes Advanced Links, 
            Site Directory, and Favourite Sites.
          </p>

          <h3>People</h3>
          <p>
            Employee directory and people search. Includes Employee Directory, 
            People Listing, and Locations.
          </p>

          <h3>Utility</h3>
          <p>
            Theme and configuration tools. Includes the new Theme Manager web part 
            for on-page theming with dark mode support.
          </p>

          <h3>Lists</h3>
          <p>
            Display SharePoint list data with flexible layouts. Includes the new 
            Marketplace web part for searchable, filterable list catalogs.
          </p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

