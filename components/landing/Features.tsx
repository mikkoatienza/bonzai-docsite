'use client';

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
} from 'lucide-react';

const webParts = [
  {
    name: 'Important Messages',
    description: 'Announcements and alerts with targeting',
    icon: MessageSquare,
    category: 'Communication',
  },
  {
    name: 'News Rollup',
    description: 'Display news with multiple templates',
    icon: Newspaper,
    category: 'Communication',
  },
  {
    name: 'Events Rollup',
    description: 'Events with RSVP functionality',
    icon: Calendar,
    category: 'Communication',
  },
  {
    name: 'Document Portal',
    description: 'Full-featured document search',
    icon: FileSearch,
    category: 'Documents',
  },
  {
    name: 'Documents Rollup',
    description: 'Document library display',
    icon: FolderOpen,
    category: 'Documents',
  },
  {
    name: 'Advanced Search',
    description: 'Unified search with refinement',
    icon: Search,
    category: 'Search',
  },
  {
    name: 'Spotlight Rollup',
    description: 'Feature employees and content',
    icon: Star,
    category: 'Content',
  },
  {
    name: 'Landing',
    description: 'Responsive grid layouts',
    icon: Layout,
    category: 'Content',
  },
  {
    name: 'Slider',
    description: 'Carousel with animations',
    icon: Image,
    category: 'Content',
  },
  {
    name: 'Advanced Links',
    description: 'Multiple link templates',
    icon: Link2,
    category: 'Navigation',
  },
  {
    name: 'Employee Directory',
    description: 'People search and profiles',
    icon: Users,
    category: 'People',
  },
  {
    name: 'Site Directory',
    description: 'Browse SharePoint sites',
    icon: Building,
    category: 'Navigation',
  },
  {
    name: 'Locations',
    description: 'Office locations display',
    icon: MapPin,
    category: 'People',
  },
  {
    name: 'Theme Manager',
    description: 'On-page theming with dark mode',
    icon: Palette,
    category: 'Utility',
  },
  {
    name: 'Tabbed',
    description: 'Tabs and accordion panels',
    icon: Layers,
    category: 'Content',
  },
  {
    name: 'Documents Table',
    description: 'Sortable document table',
    icon: Table,
    category: 'Documents',
  },
  {
    name: 'Favourite Sites',
    description: 'Quick access to bookmarks',
    icon: Heart,
    category: 'Navigation',
  },
  {
    name: 'Pages Rollup',
    description: 'Display pages with metadata',
    icon: Globe,
    category: 'Content',
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
};

export function Features() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            21+ Powerful Web Parts
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to build a modern, engaging intranet experience.
            All built with React and Fluent UI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {webParts.map((webPart) => {
            const Icon = webPart.icon;
            return (
              <div
                key={webPart.name}
                className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-bonzai-300 hover:shadow-lg hover:shadow-bonzai-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-bonzai-700 dark:hover:shadow-bonzai-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 transition-colors group-hover:bg-bonzai-700 group-hover:text-white dark:bg-bonzai-900 dark:text-bonzai-400 dark:group-hover:bg-bonzai-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {webPart.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {webPart.description}
                    </p>
                    <span
                      className={`mt-3 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[webPart.category]}`}
                    >
                      {webPart.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Plus: People Listing, Feedback, Favourite Documents, and more...
          </p>
        </div>
      </div>
    </section>
  );
}

