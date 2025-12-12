'use client';

import Link from 'next/link';
import { Settings, Edit, Code, ArrowRight, Clock, BookOpen } from 'lucide-react';

const paths = [
  {
    title: 'Site Administrator',
    description: 'Learn to install, configure, and manage Bonzai 2 for your organization.',
    icon: Settings,
    color: 'bg-blue-500',
    time: '30 min',
    steps: [
      { label: 'Installation Guide', href: '/docs/getting-started/installation' },
      { label: 'Theme Configuration', href: '/docs/administration/theming' },
      { label: 'Page Recipes', href: '/docs/recipes' },
    ],
  },
  {
    title: 'Content Author',
    description: 'Master creating pages and configuring web parts for your intranet.',
    icon: Edit,
    color: 'bg-green-500',
    time: '20 min',
    steps: [
      { label: 'Web Parts Overview', href: '/docs/web-parts' },
      { label: 'Home Page Recipe', href: '/docs/recipes/home-page' },
      { label: 'News Rollup', href: '/docs/web-parts/news-rollup' },
    ],
  },
  {
    title: 'Developer',
    description: 'Understand the SPFx architecture and how to extend or customize.',
    icon: Code,
    color: 'bg-purple-500',
    time: '45 min',
    steps: [
      { label: 'Classic vs Modern', href: '/docs/migration/classic-vs-modern' },
      { label: 'Advanced Search', href: '/docs/web-parts/advanced-search' },
      { label: 'Theme Manager', href: '/docs/web-parts/theme-manager' },
    ],
  },
];

export function LearningPaths() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bonzai-100 px-3 py-1 text-sm font-medium text-bonzai-700 dark:bg-bonzai-900/50 dark:text-bonzai-300">
            <BookOpen className="h-4 w-4" />
            Start Here
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Follow a guided path based on your role to get up and running quickly.
          </p>
        </div>

        {/* Learning path cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.title}
                className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-bonzai-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-bonzai-600"
              >
                {/* Icon and time */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${path.color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    {path.time}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {path.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {path.description}
                </p>

                {/* Steps */}
                <div className="mt-6 flex-1 space-y-2">
                  {path.steps.map((step, index) => (
                    <Link
                      key={step.href}
                      href={step.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-600 dark:bg-gray-600 dark:text-gray-300">
                        {index + 1}
                      </span>
                      {step.label}
                      <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>

                {/* Start button */}
                <Link
                  href={path.steps[0].href}
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-gray-100 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-bonzai-100 hover:text-bonzai-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-bonzai-900 dark:hover:text-bonzai-300"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

