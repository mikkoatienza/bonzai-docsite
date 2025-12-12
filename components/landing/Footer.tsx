'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bonzai-700 text-white">
                <span className="font-heading text-lg font-bold">B</span>
              </div>
              <span className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                Bonzai 2
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Modern SharePoint intranet solution built with SPFx and React.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Documentation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started/installation"
                  className="text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/web-parts"
                  className="text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  Web Parts Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/migration/classic-vs-modern"
                  className="text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  Migration Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  SPFx Documentation
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://developer.microsoft.com/en-us/fluentui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  Fluent UI
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/docs/administration/theming"
                  className="text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  Theming Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Community
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://github.com/trilogy-group/bonzai-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-bonzai-600 dark:text-gray-400 dark:hover:text-bonzai-400"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Bonzai Development Team. 
            Built with Next.js and Fumadocs.
          </p>
        </div>
      </div>
    </footer>
  );
}

