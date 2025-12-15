'use client';

import { Check, X, ArrowRight } from 'lucide-react';

const comparisons = [
  {
    feature: 'Infrastructure',
    classic: 'AWS (Cognito, DynamoDB, CloudFront, Lambda)',
    modern: 'SharePoint Online only (no external services)',
    classicBad: false,
  },
  {
    feature: 'Configuration',
    classic: 'Brick (AWS-hosted admin app)',
    modern: 'SharePoint property panes + Theme Manager',
    classicBad: false,
  },
  {
    feature: 'Theme Updates',
    classic: 'CDN publish (5-15 min propagation)',
    modern: 'CSS Custom Properties (instant)',
    classicBad: false,
  },
  {
    feature: 'UI Framework',
    classic: 'jQuery + Handlebars',
    modern: 'React 17 + Fluent UI',
    classicBad: false,
  },
  {
    feature: 'Data Access',
    classic: 'JSOM / CAML queries',
    modern: 'SPHttpClient REST API',
    classicBad: false,
  },
  {
    feature: 'Dark Mode',
    classic: 'Not available',
    modern: 'Built-in toggle',
    classicBad: false,
  },
  {
    feature: 'Mobile Support',
    classic: 'Separate mobile templates',
    modern: 'Responsive by default',
    classicBad: false,
  },
  {
    feature: 'List/View Selection',
    classic: 'Type names manually',
    modern: 'Dropdown pickers',
    classicBad: false,
  },
  {
    feature: 'Authentication',
    classic: 'SharePoint + AWS Cognito',
    modern: 'SharePoint only',
    classicBad: false,
  },
  {
    feature: 'Deployment',
    classic: 'CDN + Brick provisioning',
    modern: 'App Catalog .sppkg upload',
    classicBad: false,
  },
];

export function ComparisonTable() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Classic Bonzai vs Bonzai 2
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Key architectural differences between the legacy Classic SharePoint solution 
            and the modern SPFx-based Bonzai 2.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Mobile view */}
          <div className="space-y-4 lg:hidden">
            {comparisons.map((item) => (
              <div
                key={item.feature}
                className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.feature}
                </h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      Classic
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.classic}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 rounded bg-bonzai-100 px-2 py-0.5 text-xs font-medium text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                      Modern
                    </span>
                    <span className="text-sm font-medium text-bonzai-700 dark:text-bonzai-400">
                      {item.modern}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Classic Bonzai
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-bonzai-700 dark:text-bonzai-400">
                    Bonzai 2 (Modern)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {comparisons.map((item) => (
                  <tr key={item.feature} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/30">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        {item.classicBad && (
                          <X className="h-4 w-4 shrink-0 text-red-500" />
                        )}
                        <span>{item.classic}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-bonzai-700 dark:text-bonzai-400">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-bonzai-500" />
                        <span>{item.modern}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/docs/migration/classic-vs-modern"
              className="inline-flex items-center gap-2 text-bonzai-700 hover:text-bonzai-600 dark:text-bonzai-400 dark:hover:text-bonzai-300"
            >
              View full comparison guide
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

