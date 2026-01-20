import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import Link from 'next/link';
import { Puzzle, Menu, Layers, Globe } from 'lucide-react';

const extensions = [
  {
    name: 'Mega Menu',
    slug: 'mega-menu',
    description: '3-level hierarchical navigation with desktop mega menu panels and mobile drawer.',
    icon: Menu,
  },
];

export default function ExtensionsOverview() {
  return (
    <DocsPage>
      <DocsTitle>Extensions</DocsTitle>
      <DocsDescription>
        Site-wide components that extend SharePoint beyond individual web parts.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              Extensions
            </span>
          </div>

          <h2>What are Extensions?</h2>

          <p>
            Extensions are SPFx Application Customizers that run site-wide, outside of 
            individual pages. Unlike web parts that you add to specific page sections, 
            extensions inject content into SharePoint&apos;s header or footer placeholders 
            on every page of your site.
          </p>

          {/* KEY DIFFERENCE BOX */}
          <div className="not-prose my-8 rounded-xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
            <h3 className="mt-0 flex items-center gap-2 text-lg font-semibold text-violet-900 dark:text-violet-100">
              <Puzzle className="h-5 w-5" />
              Extensions vs Web Parts
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <h4 className="font-semibold text-gray-900 dark:text-white">Web Parts</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>Added to individual pages</li>
                  <li>Configured per-instance</li>
                  <li>Visible on specific pages only</li>
                  <li>Placed in page sections/columns</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <h4 className="font-semibold text-gray-900 dark:text-white">Extensions</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>Run on every page site-wide</li>
                  <li>Configured once, applies everywhere</li>
                  <li>Always visible across the site</li>
                  <li>Placed in header/footer placeholders</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>How Extensions Work</h2>

          <p>
            Extensions use SharePoint&apos;s placeholder system to inject content into 
            designated areas of the page chrome:
          </p>

          <ul>
            <li><strong>Top Placeholder:</strong> Above the page content, typically used for navigation, banners, or alerts</li>
            <li><strong>Bottom Placeholder:</strong> Below the page content, typically used for footers</li>
          </ul>

          <p>
            Once activated on a site, an extension runs automatically on every page 
            load. Configuration is typically stored in extension properties or a 
            SharePoint list.
          </p>

          {/* ACTIVATION INFO */}
          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Activation Scope</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Extensions are activated per site collection. Once enabled, they apply to 
                  all pages within that site collection, including subsites.
                </p>
              </div>
            </div>
          </div>

          <h2>Bonzai 2 Extensions</h2>

          <p>
            Bonzai 2 currently includes one extension. More may be added in future releases.
          </p>

          <div className="not-prose grid gap-4">
            {extensions.map((ext) => {
              const Icon = ext.icon;
              return (
                <Link
                  key={ext.slug}
                  href={`/docs/extensions/${ext.slug}`}
                  className="group relative flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition-all hover:border-violet-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-violet-700"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700 transition-colors group-hover:bg-violet-700 group-hover:text-white dark:bg-violet-900 dark:text-violet-400 dark:group-hover:bg-violet-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-400">
                      {ext.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {ext.description}
                    </p>
                    <span className="mt-2 inline-block rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                      Application Customizer
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <h2>Deploying Extensions</h2>

          <p>
            Extensions are included in the Bonzai 2 SPFx package. Deployment is a 
            <strong> two-step process</strong>:
          </p>

          <ol>
            <li>
              <strong>Step 1: Upload to App Catalog</strong> — Upload the Bonzai 2 
              .sppkg file to your tenant App Catalog and approve the API permissions
            </li>
            <li>
              <strong>Step 2: Add to Site</strong> — Go to Site Contents → New → App 
              on each site where you want to use extensions, and add the Bonzai 2 app
            </li>
          </ol>

          <div className="not-prose my-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> Step 2 is often missed. The Mega Menu will not 
              appear until you add the Bonzai app to your 
              specific site, even if the package is already in the App Catalog.
            </p>
          </div>

          <p>
            See individual extension documentation for detailed setup steps.
          </p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

