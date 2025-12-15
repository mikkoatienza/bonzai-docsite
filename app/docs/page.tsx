import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, BookOpen, Layers, Settings } from 'lucide-react';

export default function DocsIndex() {
  return (
    <DocsPage>
      <DocsTitle>Bonzai 2 Documentation</DocsTitle>
      <DocsDescription>
        SharePoint Framework (SPFx) solution for Modern SharePoint Online intranets.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="lead">
            Bonzai 2 is a SharePoint Framework (SPFx) solution that provides 21+ web parts 
            for building intranets on Modern SharePoint Online. It replaces the legacy 
            Classic SharePoint Bonzai solution, eliminating the need for external AWS infrastructure.
          </p>
          
          <div className="not-prose my-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Migrating from Classic Bonzai?</strong> This is a platform change, not an upgrade. 
              Modern pages must be built from scratch. See the{' '}
              <Link href="/docs/migration/classic-vs-modern" className="font-semibold underline">
                Migration Guide
              </Link>{' '}
              for details.
            </p>
          </div>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/docs/getting-started/what-is-bonzai"
              className="group flex flex-col rounded-xl border border-gray-200 p-6 transition-all hover:border-bonzai-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-bonzai-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 group-hover:bg-bonzai-700 group-hover:text-white dark:bg-bonzai-900 dark:text-bonzai-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">What is Bonzai 2?</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Learn about the architecture and key benefits.
              </p>
            </Link>

            <Link
              href="/docs/getting-started/installation"
              className="group flex flex-col rounded-xl border border-gray-200 p-6 transition-all hover:border-bonzai-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-bonzai-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 group-hover:bg-bonzai-700 group-hover:text-white dark:bg-bonzai-900 dark:text-bonzai-400">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Installation Guide</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Deploy Bonzai 2 to your SharePoint tenant.
              </p>
            </Link>

            <Link
              href="/docs/web-parts"
              className="group flex flex-col rounded-xl border border-gray-200 p-6 transition-all hover:border-bonzai-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-bonzai-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 group-hover:bg-bonzai-700 group-hover:text-white dark:bg-bonzai-900 dark:text-bonzai-400">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Web Parts</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Explore all 21+ web parts and their features.
              </p>
            </Link>
          </div>

          <h2>Key Features</h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">No External Infrastructure</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Unlike Classic Bonzai which required AWS (Cognito, DynamoDB, Lambda, CloudFront), 
                  Bonzai 2 runs 100% within SharePoint Online.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Instant Theming</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Change colors in real-time using CSS Custom Properties. No more waiting 
                  5-15 minutes for CDN propagation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Modern Technology Stack</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Built with React 17, Fluent UI, and TypeScript. Uses SPHttpClient REST API 
                  instead of legacy JSOM/CAML.
                </p>
              </div>
            </div>
          </div>

          <h2>Web Parts Overview</h2>

          <p>
            Bonzai 2 includes <strong>21+ web parts</strong> organized into categories:
          </p>

          <ul>
            <li><strong>Communication:</strong> Important Messages, News Rollup, Events Rollup, Feedback</li>
            <li><strong>Content:</strong> Landing, Slider, Spotlight Rollup, Pages Rollup, Tabbed</li>
            <li><strong>Documents:</strong> Document Portal, Documents Rollup, Documents Table, Favourite Documents</li>
            <li><strong>People:</strong> Employee Directory, People Listing, Locations</li>
            <li><strong>Navigation:</strong> Advanced Links, Site Directory, Favourite Sites</li>
            <li><strong>Search:</strong> Advanced Search (consolidates Search Box + Search Refinement)</li>
            <li><strong>Utility:</strong> Theme Manager (NEW - on-page theming with dark mode)</li>
          </ul>

          <div className="not-prose mt-8">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center gap-2 rounded-lg bg-bonzai-700 px-4 py-2 text-sm font-semibold text-white hover:bg-bonzai-600"
            >
              Get Started with Installation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

