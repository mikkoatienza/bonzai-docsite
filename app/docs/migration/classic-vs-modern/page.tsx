import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Check, X, ArrowRight, Users, Wrench, Code, BookOpen, Zap } from 'lucide-react';
import { BeforeAfter, FeatureComparisonTable } from '@/components/docs';
import { MigrationChecklist, MigrationChecklistSection } from '@/components/docs';
import { Callout } from '@/components/docs';

export default function ClassicVsModern() {
  return (
    <DocsPage>
      <DocsTitle>Classic Bonzai vs Modern Bonzai 2</DocsTitle>
      <DocsDescription>
        Your complete guide to understanding the differences, migrating successfully, and leveraging new capabilities.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          
          {/* Who This Guide Is For */}
          <div className="not-prose mb-12 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Who This Guide Is For
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Site Administrators</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn about migration planning, infrastructure changes, and deployment steps.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Migration checklist
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Theming migration
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Deployment changes
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50">
                  <Wrench className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Content Authors</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Understand how your day-to-day editing experience improves with Bonzai 2.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Workflow comparisons
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Page editing changes
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    What&apos;s easier now
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Developers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Technical details on architecture changes, APIs, and customization.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Tech stack changes
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    API migration
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Icon mapping
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Message */}
          <Callout type="tip" title="The Big Picture">
            <p>
              Bonzai 2 eliminates the need for Brick (AWS infrastructure), simplifies deployment to a single .sppkg upload, 
              and gives you instant theming without CDN wait times. Everything is now native to SharePoint.
            </p>
          </Callout>

          <h2>Executive Summary</h2>
          
          <p>
            This document provides a comprehensive comparison between Legacy Bonzai 
            (running on Classic SharePoint with Brick administration) and Modern Bonzai 2 
            (running on Modern SharePoint with SPFx).
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Aspect</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">Classic Bonzai</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-bonzai-700 dark:text-bonzai-400">Bonzai 2 (Modern)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Platform</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Classic SharePoint (Publishing Sites)</td>
                  <td className="px-4 py-3 text-sm text-bonzai-700 dark:text-bonzai-400">Modern SharePoint (Communication Sites)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Technology</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">bonzai.min.js + JSOM/CAML</td>
                  <td className="px-4 py-3 text-sm text-bonzai-700 dark:text-bonzai-400">SPFx + React + REST API</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Administration</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Brick (AWS-hosted)</td>
                  <td className="px-4 py-3 text-sm text-bonzai-700 dark:text-bonzai-400">SharePoint native + Theme Manager</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Deployment</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">CDN + Brick provisioning</td>
                  <td className="px-4 py-3 text-sm text-bonzai-700 dark:text-bonzai-400">App Catalog .sppkg upload</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Theming</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Brick Theme Editor</td>
                  <td className="px-4 py-3 text-sm text-bonzai-700 dark:text-bonzai-400">Theme Manager web part</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">Web Parts</td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">23 XmlWebPart-based</td>
                  <td className="px-4 py-3 text-sm text-bonzai-700 dark:text-bonzai-400">21 SPFx React-based</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What Changed & Why</h2>

          <p>
            Understanding <strong>why</strong> things changed helps you make better decisions during migration. 
            Here are the key architectural changes and their benefits:
          </p>

          <div className="not-prose my-6 space-y-4">
            {[
              { 
                title: 'No external infrastructure required', 
                desc: 'All code runs within SharePoint, no AWS/CDN dependency',
                why: 'Microsoft modern SharePoint doesn\'t support custom master pages or external script injection. SPFx runs safely in the SharePoint container.'
              },
              { 
                title: 'No Brick administration', 
                desc: 'All configuration done in SharePoint property panes',
                why: 'Eliminates separate login, reduces costs, and keeps configuration close to the content.'
              },
              { 
                title: 'Instant updates', 
                desc: 'No CDN propagation wait time (previously 5-15 minutes)',
                why: 'SPFx packages are hosted by Office 365 CDN automatically, with immediate cache invalidation.'
              },
              { 
                title: 'Native SharePoint integration', 
                desc: 'Uses SPFx framework, Fluent UI, and REST APIs',
                why: 'Aligns with Microsoft\'s roadmap, ensuring long-term compatibility and support.'
              },
              { 
                title: 'Responsive by default', 
                desc: 'Mobile-first design built into all web parts',
                why: 'No separate mobile templates needed - one design works everywhere.'
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-bonzai-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-500">
                      <strong>Why:</strong> {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2>Before & After: Real Workflow Comparisons</h2>

          <p>
            See exactly how common tasks differ between Classic and Modern Bonzai. 
            These comparisons show the time savings and simplified workflows you&apos;ll enjoy.
          </p>

          <BeforeAfter
            title="Adding a Web Part to a Page"
            description="One of the most common tasks for content authors"
            before={{
              steps: [
                { step: 'Log in to SharePoint (Classic)', detail: 'Navigate to site' },
                { step: 'Click "Edit Page"' },
                { step: 'Identify the correct web part zone' },
                { step: 'Go to Insert → Web Part' },
                { step: 'Find "Bonzai" category in list' },
                { step: 'Select web part and click "Add"' },
                { step: 'Click dropdown → Edit Web Part' },
                { step: 'Type list name manually', detail: 'Exact spelling required!' },
                { step: 'Type view name manually' },
                { step: 'Click "OK"' },
                { step: 'Check in page' },
                { step: 'Publish page' },
              ],
              time: '10-15 minutes',
              painPoints: [
                'Manual list/view name entry prone to typos',
                'Fixed zones limit placement options',
                'Check-in/check-out workflow slows editing',
              ],
            }}
            after={{
              steps: [
                { step: 'Navigate to page' },
                { step: 'Click "Edit" button' },
                { step: 'Click "+" where you want the web part' },
                { step: 'Type "Bonzai" → Select web part' },
                { step: 'Click pencil → Select list from dropdown → Publish' },
              ],
              time: '2-3 minutes',
              benefits: [
                'Dropdown pickers eliminate typos',
                'Place web parts anywhere on the page',
                'Real-time preview as you configure',
              ],
            }}
            timeSaved="8-12 minutes per web part"
          />

          <BeforeAfter
            title="Changing Theme Colors"
            description="Brand updates and color adjustments"
            before={{
              steps: [
                { step: 'Open new browser tab' },
                { step: 'Navigate to Brick URL' },
                { step: 'Log in with AWS Cognito credentials' },
                { step: 'Search for your site collection' },
                { step: 'Click theme icon to open Theme Editor' },
                { step: 'Find color property in editor' },
                { step: 'Change color value' },
                { step: 'Click "Save"' },
                { step: 'Click "Publish"' },
                { step: 'Wait 5-15 minutes for CDN propagation' },
                { step: 'Hard refresh SharePoint page' },
              ],
              time: '20-30 minutes',
              painPoints: [
                'Separate login required',
                'CDN propagation causes delays',
                'Can\'t preview on actual page',
              ],
            }}
            after={{
              steps: [
                { step: 'Click Edit on page with Theme Manager' },
                { step: 'Open Theme Manager property pane' },
                { step: 'Pick color from color picker' },
                { step: 'See instant preview → Publish' },
              ],
              time: '1-2 minutes',
              benefits: [
                'No separate login needed',
                'Changes apply instantly',
                'Preview on the actual page',
                'Dark mode toggle built-in',
              ],
            }}
            timeSaved="18-28 minutes per change"
          />

          <h2>Feature Migration Guide</h2>

          <p>
            Each Classic Bonzai feature has a modern equivalent. This table shows what changed 
            and what action you need to take:
          </p>

          <FeatureComparisonTable
            title="Key Features: What Changed"
            features={[
              { feature: 'Theme Editor', classic: 'Brick (AWS)', modern: 'Theme Manager web part', action: 'Recreate colors' },
              { feature: 'Content Targeting', classic: 'Brick config', modern: 'SharePoint list columns', action: 'Add metadata columns' },
              { feature: 'Header Search', classic: 'bonzai.min.js', modern: 'Advanced Search web part', action: 'Add to search page' },
              { feature: 'Navigation', classic: 'Term sets via Brick', modern: 'SharePoint navigation', action: 'Configure site nav' },
              { feature: 'Comments', classic: 'Bonzai Engine / Yammer', modern: 'SharePoint comments', action: 'Enable on pages' },
              { feature: 'Icons', classic: 'Font-Awesome', modern: 'Fluent UI', action: 'Update icon names' },
            ]}
          />

          <h2>Migration Checklist</h2>

          <MigrationChecklist
            title="Your Migration Journey"
            description="Work through these phases to successfully migrate from Classic to Modern Bonzai."
          >
            <MigrationChecklistSection
              title="Pre-Migration Preparation"
              phase="pre"
              icon={<BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
              items={[
                { id: 'inventory', task: 'Inventory all Classic Bonzai sites', description: 'Document URLs and web parts in use', critical: true, estimatedTime: '2-4 hours' },
                { id: 'export-themes', task: 'Export theme colors from Brick', description: 'Note primary, secondary, background colors', estimatedTime: '30 min' },
                { id: 'document-ct', task: 'Document Content Targeting mappings', description: 'Export from Brick configuration', estimatedTime: '1 hour' },
                { id: 'list-icons', task: 'Identify Font-Awesome icons in use', description: 'Map to Fluent UI equivalents', estimatedTime: '1 hour' },
                { id: 'prepare-catalog', task: 'Prepare App Catalog', description: 'Ensure tenant App Catalog is configured', critical: true, estimatedTime: '30 min' },
              ]}
            />
            <MigrationChecklistSection
              title="Migration Execution"
              phase="during"
              icon={<Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
              items={[
                { id: 'upload-package', task: 'Upload Bonzai2.sppkg to App Catalog', critical: true, estimatedTime: '5 min' },
                { id: 'deploy-tenant', task: 'Enable tenant-wide deployment', estimatedTime: '5 min' },
                { id: 'setup-theme', task: 'Add Theme Manager and configure brand colors', estimatedTime: '30 min' },
                { id: 'create-lists', task: 'Create SharePoint lists for web parts', description: 'Important Messages, Advanced Links, etc.', estimatedTime: '2 hours' },
                { id: 'add-columns', task: 'Add Content Targeting columns to lists', description: 'Department, Location, Role', estimatedTime: '1 hour' },
                { id: 'create-pages', task: 'Create modern pages', estimatedTime: '4-8 hours' },
                { id: 'add-webparts', task: 'Add and configure Bonzai 2 web parts', estimatedTime: '4-8 hours' },
              ]}
            />
            <MigrationChecklistSection
              title="Post-Migration Verification"
              phase="post"
              icon={<Check className="h-6 w-6 text-green-600 dark:text-green-400" />}
              items={[
                { id: 'verify-webparts', task: 'Test all web parts display correctly', critical: true, estimatedTime: '2 hours' },
                { id: 'verify-theme', task: 'Verify theme colors match brand', estimatedTime: '30 min' },
                { id: 'test-ct', task: 'Test content targeting with different users', estimatedTime: '1 hour' },
                { id: 'test-mobile', task: 'Test on mobile devices', estimatedTime: '30 min' },
                { id: 'train-users', task: 'Train content editors on new workflow', estimatedTime: '2-4 hours' },
              ]}
            />
          </MigrationChecklist>

          <h2>Cancelled Web Parts & Alternatives</h2>

          <p>
            Some Classic Bonzai web parts are not available in Bonzai 2. Here&apos;s why, and what to use instead:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-100">Marketplace</h4>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                    <strong>Why removed:</strong> The Marketplace relied on full CRUD operations via custom master pages, 
                    which Modern SharePoint&apos;s security model intentionally prevents to protect against malicious code injection.
                  </p>
                  <div className="mt-3 rounded bg-white/60 p-3 dark:bg-black/20">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      <strong>Alternative:</strong> Use SharePoint List + Power Apps
                    </p>
                    <ol className="mt-2 list-inside list-decimal text-sm text-gray-600 dark:text-gray-400">
                      <li>Create a SharePoint list with item fields</li>
                      <li>Build a Power App for submitting/editing items</li>
                      <li>Embed the Power App on a modern page</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <div className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-100">Delve</h4>
                  <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                    <strong>Why removed:</strong> Microsoft is retiring Delve as a standalone experience. 
                    Its functionality is being integrated into other Microsoft 365 experiences.
                  </p>
                  <div className="mt-3 rounded bg-white/60 p-3 dark:bg-black/20">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      <strong>Alternatives:</strong>
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Trending documents → SharePoint home &quot;Recommended&quot;</li>
                      <li>• Find people → Microsoft Search</li>
                      <li>• View profiles → Microsoft 365 profile cards</li>
                      <li>• Content discovery → Viva Connections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>What You Don&apos;t Need Anymore</h2>

          <p>
            One of the best parts of migrating to Bonzai 2 is all the complexity you can <strong>stop worrying about</strong>:
          </p>

          <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
            {[
              { item: 'Brick login/account', status: 'Not needed - all in SharePoint' },
              { item: 'AWS Cognito credentials', status: 'Not needed' },
              { item: 'CDN propagation wait time', status: 'Not needed - instant updates' },
              { item: 'Custom master pages', status: 'Replaced by SPFx' },
              { item: 'Image rendition definitions', status: 'Native responsive images' },
              { item: 'JSOM/CAML knowledge', status: 'REST API via SPHttpClient' },
              { item: 'Font-Awesome icons', status: 'Fluent UI icons' },
              { item: 'Publishing site infrastructure', status: 'Communication sites work' },
            ].map((item) => (
              <div key={item.item} className="flex items-center gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/30">
                <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                <div>
                  <span className="font-medium text-gray-900 line-through dark:text-white">{item.item}</span>
                  <span className="ml-2 text-sm text-green-700 dark:text-green-300">→ {item.status}</span>
                </div>
              </div>
            ))}
          </div>

          <h2>Web Part Mapping</h2>

          <p>
            All 21 implemented web parts maintain 85-95% feature parity with their 
            legacy counterparts:
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">#</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Legacy Web Part</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Modern Equivalent</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Status</th>
                  <th className="px-3 py-2 text-left font-semibold text-gray-900 dark:text-white">Parity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  { num: 1, legacy: 'Advanced Links', modern: 'Bonzai Advanced Links', parity: '95%' },
                  { num: 2, legacy: 'Important Messages', modern: 'Bonzai Important Messages', parity: '95%' },
                  { num: 3, legacy: 'Feedback', modern: 'Bonzai Feedback', parity: '90%' },
                  { num: 4, legacy: 'Document Rollup', modern: 'Bonzai Documents Rollup', parity: '95%' },
                  { num: 5, legacy: 'Favourite Documents', modern: 'Bonzai Favourite Documents', parity: '95%' },
                  { num: 6, legacy: 'Favourite Sites', modern: 'Bonzai Favourite Sites', parity: '95%' },
                  { num: 7, legacy: 'News Rollup', modern: 'Bonzai News Rollup', parity: '90%' },
                  { num: 8, legacy: 'Events Rollup', modern: 'Bonzai Events Rollup', parity: '90%' },
                  { num: 9, legacy: 'Spotlight Rollup', modern: 'Bonzai Spotlight Rollup', parity: '95%' },
                  { num: 10, legacy: 'Landing', modern: 'Bonzai Landing', parity: '90%' },
                  { num: 11, legacy: 'Slider', modern: 'Bonzai Slider', parity: '90%' },
                  { num: 12, legacy: 'Pages Rollup', modern: 'Bonzai Pages Rollup', parity: '95%' },
                  { num: 13, legacy: 'Documents Table', modern: 'Bonzai Documents Table', parity: '95%' },
                  { num: 14, legacy: 'Document Portal', modern: 'Bonzai Document Portal', parity: '85%' },
                  { num: 15, legacy: 'Employee Directory', modern: 'Bonzai Employee Directory', parity: '90%' },
                  { num: 16, legacy: 'People Listing', modern: 'Bonzai People Listing', parity: '90%' },
                  { num: 17, legacy: 'Locations', modern: 'Bonzai Locations', parity: '90%' },
                  { num: 18, legacy: 'Site Directory', modern: 'Bonzai Site Directory', parity: '90%' },
                  { num: 19, legacy: 'Site Directory Favourites', modern: 'Bonzai Site Directory Favourites', parity: '95%' },
                  { num: 20, legacy: 'Search Box + Refinement', modern: 'Bonzai Advanced Search', parity: '85%' },
                  { num: 21, legacy: 'Tabbed', modern: 'Bonzai Tabbed', parity: '90%' },
                ].map((item) => (
                  <tr key={item.num} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{item.num}</td>
                    <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{item.legacy}</td>
                    <td className="px-3 py-2 font-medium text-bonzai-700 dark:text-bonzai-400">{item.modern}</td>
                    <td className="px-3 py-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <Check className="h-3 w-3" /> Implemented
                      </span>
                    </td>
                    <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{item.parity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout type="info" title="NEW in Bonzai 2: Theme Manager">
            <p>
              The Theme Manager web part is completely new with no legacy equivalent. 
              It provides on-page theme customization, dark mode toggle, and instant preview without needing Brick access.
            </p>
          </Callout>

          <div className="not-prose mt-8 flex flex-wrap gap-4">
            <a
              href="/docs/web-parts"
              className="inline-flex items-center gap-2 rounded-lg bg-bonzai-700 px-4 py-2 text-sm font-semibold text-white hover:bg-bonzai-600"
            >
              Explore Web Parts
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/docs/getting-started/installation"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Installation Guide
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
