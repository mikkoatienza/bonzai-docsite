'use client';

import Link from 'next/link';
import { 
  Newspaper, 
  AlertCircle, 
  Search, 
  FolderSearch, 
  Users, 
  Palette,
  ChefHat,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const popularLinks = [
  { label: 'News Rollup', href: '/docs/web-parts/news-rollup', icon: Newspaper },
  { label: 'Important Messages', href: '/docs/web-parts/important-messages', icon: AlertCircle },
  { label: 'Advanced Search', href: '/docs/web-parts/advanced-search', icon: Search },
  { label: 'Document Portal', href: '/docs/web-parts/document-portal', icon: FolderSearch },
  { label: 'Employee Directory', href: '/docs/web-parts/employee-directory', icon: Users },
  { label: 'Theme Manager', href: '/docs/web-parts/theme-manager', icon: Palette },
  { label: 'Page Recipes', href: '/docs/recipes', icon: ChefHat },
  { label: 'All Web Parts', href: '/docs/web-parts', icon: BookOpen },
];

export function PopularLinks() {
  return (
    <section className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
            Most Popular
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Jump straight to the most-used documentation pages
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {popularLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-bonzai-100 group-hover:text-bonzai-700 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-bonzai-900 dark:group-hover:text-bonzai-400">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/docs/web-parts"
            className="inline-flex items-center gap-2 text-sm font-medium text-bonzai-700 hover:text-bonzai-600 dark:text-bonzai-400 dark:hover:text-bonzai-300"
          >
            Browse all 21 web parts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

