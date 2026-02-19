import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import Link from 'next/link';
import { Download, Package, Clock, CheckCircle, HelpCircle, ExternalLink, Shield, Globe, Monitor, Headphones } from 'lucide-react';

export default function DownloadPage() {
  // Note: SharePoint's App Catalog shows the version embedded in the .sppkg (AppManifest.xml),
  // which may differ from our human-facing release version.
  const releaseVersion = '1.0.355';
  const appCatalogVersion = '1.0.0.352';
  const publishedDate = 'February 19, 2026';
  const packageSize = '~5 MB';
  const downloadUrl = '/downloads/Bonzai-2.0.sppkg';

  return (
    <DocsPage>
      <DocsTitle>Download Bonzai 2</DocsTitle>
      <DocsDescription>
        Get the latest Bonzai 2 SPFx package for SharePoint Online.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          
          {/* HERO DOWNLOAD SECTION */}
          <div className="not-prose mb-10 rounded-2xl border-2 border-bonzai-200 bg-gradient-to-br from-bonzai-50 to-white p-8 dark:border-bonzai-800 dark:from-bonzai-950 dark:to-gray-900">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-bonzai-100 p-4 dark:bg-bonzai-900">
                <Package className="h-10 w-10 text-bonzai-600 dark:text-bonzai-400" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                Bonzai 2 for SharePoint Online
              </h2>
              <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                Version {releaseVersion} (App Catalog: {appCatalogVersion}) • Published {publishedDate} • {packageSize}
              </p>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-500">
                Bonzai-2.0.sppkg
              </p>
              <a
                href={downloadUrl}
                download="Bonzai-2.0.sppkg"
                className="inline-flex items-center gap-2 rounded-lg bg-bonzai-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-bonzai-700 hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                Download Bonzai 2
              </a>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                Requires SharePoint Administrator permissions to install
              </p>
            </div>
          </div>

          {/* QUICK INFO BOX */}
          <div className="not-prose mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-bonzai-600 dark:text-bonzai-400" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Platform</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SharePoint Online only</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-bonzai-600 dark:text-bonzai-400" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Framework</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SPFx 1.21.1</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-bonzai-600 dark:text-bonzai-400" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Format</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">.sppkg (App Catalog)</p>
                </div>
              </div>
            </div>
          </div>


          {/* VERSION HISTORY */}
          <h2>Version History</h2>
          
          <p>
            Recent releases with key changes. For questions about specific versions or to report issues, visit our{' '}
            <a href="https://support.bonzai.aurea.com/" target="_blank" rel="noopener noreferrer">
              support portal
            </a>.
          </p>

          <div className="not-prose my-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Version</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="bg-bonzai-50/50 dark:bg-bonzai-950/30">
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 font-medium text-bonzai-700 dark:text-bonzai-400">
                      {releaseVersion}
                      <span className="rounded bg-bonzai-100 px-1.5 py-0.5 text-xs font-semibold text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-300">
                        Latest
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Feb 2026</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">News Rollup cross-site reliability + field discovery, Footer placement hardening on SharePoint shell pages, and theming/branding alignment improvements</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300">1.0.221</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Feb 2026</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">News Rollup layout and pagination upgrades, Mega Menu branding + logo support, higher-res images across rollups, and Events Rollup UI/like count improvements</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300">1.0.190</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Jan 2026</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Mega Menu navigation reliability: fixes Hyperlink URL fields (prevents /sites/[object Object]) and improves hierarchy parsing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300">1.0.1</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Jan 2025</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Bug fixes, performance improvements, licensing system integration</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300">1.0.0</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Dec 2024</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Initial release with 22+ web parts, Mega Menu, Theme Manager</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SYSTEM REQUIREMENTS */}
          <h2>System Requirements</h2>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <Monitor className="h-5 w-5 text-bonzai-600" />
                SharePoint Environment
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  SharePoint Online (Microsoft 365)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Modern Sites (Communication or Team)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  App Catalog configured
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <Shield className="h-5 w-5 text-bonzai-600" />
                Permissions Required
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  SharePoint Administrator, or
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Global Administrator, or
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  App Catalog Administrator
                </li>
              </ul>
            </div>
          </div>

          <div className="not-prose mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <div className="flex items-start gap-3">
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Not supported</h4>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  SharePoint Server (on-premises) and Classic Sites are not supported. 
                  Bonzai 2 requires SharePoint Online with Modern experience.
                </p>
              </div>
            </div>
          </div>

          {/* INSTALLATION CTA */}
          <h2>Ready to Install?</h2>

          <p>
            After downloading, follow our step-by-step installation guide to deploy 
            Bonzai 2 to your SharePoint tenant.
          </p>

          <div className="not-prose my-6 rounded-xl border-2 border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Installation Overview
            </h3>
            <ol className="mb-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bonzai-100 text-xs font-bold text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-300">
                  1
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Upload <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs dark:bg-gray-800">Bonzai-2.0.sppkg</code> to your App Catalog
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bonzai-100 text-xs font-bold text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-300">
                  2
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Trust and deploy the solution (optionally tenant-wide)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bonzai-100 text-xs font-bold text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-300">
                  3
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Add the Bonzai 2 app to each site to activate Mega Menu and Footer, then place Bonzai web parts on pages
                </span>
              </li>
            </ol>
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              View Full Installation Guide
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div className="not-prose mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Apps blocked by tenant policy?</strong> You can still activate Mega Menu and Footer
              using the Tenant Wide Extensions list. See the installation guide for the exact steps and
              Component IDs.
            </p>
          </div>

          {/* SUPPORT SECTION */}
          <h2>Need Help?</h2>

          <div className="not-prose grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <HelpCircle className="h-5 w-5 text-bonzai-600" />
                Documentation
              </h4>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Browse our comprehensive guides for each web part and feature.
              </p>
              <Link
                href="/docs/web-parts"
                className="text-sm font-medium text-bonzai-600 hover:text-bonzai-700 dark:text-bonzai-400 dark:hover:text-bonzai-300"
              >
                View Web Parts Reference →
              </Link>
            </div>
            <div className="rounded-xl border-2 border-bonzai-200 bg-bonzai-50/50 p-5 dark:border-bonzai-800 dark:bg-bonzai-950/50">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <Headphones className="h-5 w-5 text-bonzai-600" />
                Contact Support
              </h4>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Get help from our support team for installation or configuration issues.
              </p>
              <a
                href="https://support.bonzai.aurea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-bonzai-600 hover:text-bonzai-700 dark:text-bonzai-400 dark:hover:text-bonzai-300"
              >
                Open Support Portal
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                <Clock className="h-5 w-5 text-bonzai-600" />
                Report Issues
              </h4>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Found a bug or have a feature request? Let us know through support.
              </p>
              <a
                href="https://support.bonzai.aurea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-bonzai-600 hover:text-bonzai-700 dark:text-bonzai-400 dark:hover:text-bonzai-300"
              >
                Open Support Portal →
              </a>
            </div>
          </div>

        </div>
      </DocsBody>
    </DocsPage>
  );
}

