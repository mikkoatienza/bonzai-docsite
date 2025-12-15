import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Check, X, ArrowRight, Users, Wrench, Code, BookOpen, Zap, AlertTriangle } from 'lucide-react';
import { BeforeAfter, FeatureComparisonTable } from '@/components/docs';
import { MigrationChecklist, MigrationChecklistSection } from '@/components/docs';
import { Callout } from '@/components/docs';

export default function ClassicVsModern() {
  return (
    <DocsPage>
      <DocsTitle>Classic Bonzai vs Modern Bonzai 2</DocsTitle>
      <DocsDescription>
        A comprehensive guide to understanding the architectural differences and planning your migration from Classic SharePoint to Modern SharePoint with Bonzai 2.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          
          {/* Migration Reality Check */}
          <div className="not-prose mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">Setting Realistic Expectations</h3>
                <p className="mt-2 text-amber-800 dark:text-amber-200">
                  Migrating from Classic Bonzai to Bonzai 2 is <strong>not a simple upgrade</strong>. It involves:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Platform change:</strong> Classic SharePoint → Modern SharePoint (different page model)</li>
                  <li>• <strong>Content recreation:</strong> Modern pages must be built fresh; classic pages cannot be converted</li>
                  <li>• <strong>Configuration migration:</strong> Brick settings must be manually recreated in SharePoint</li>
                  <li>• <strong>User training:</strong> Content authors need to learn the new editing experience</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-amber-900 dark:text-amber-100">
                  Plan for weeks to months of work, depending on your site complexity and number of pages.
                </p>
              </div>
            </div>
          </div>

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
                  Migration planning, infrastructure decommissioning, and deployment coordination.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Migration planning
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    List/data migration
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Deployment steps
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50">
                  <Wrench className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Content Authors</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn the new editing workflow and understand what changes in your daily work.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Workflow differences
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Page editing changes
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    New capabilities
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Developers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Technical details on architecture changes, APIs, and customization options.
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    Tech stack changes
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <ArrowRight className="h-3 w-3 text-bonzai-500" />
                    API differences
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
          <Callout type="info" title="What This Migration Actually Means">
            <p>
              Bonzai 2 eliminates the need for Brick (AWS infrastructure) and simplifies deployment to a single .sppkg file. 
              However, this is a <strong>platform migration</strong>, not an upgrade. You are moving from Classic SharePoint 
              (publishing sites, master pages, JSOM) to Modern SharePoint (communication sites, SPFx, REST APIs). 
              This requires rebuilding pages and reconfiguring web parts.
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

          <h2>Workflow Comparisons</h2>

          <p>
            These comparisons illustrate how common tasks differ between Classic and Modern SharePoint. 
            Note that these are <strong>per-task</strong> comparisons—the overall migration effort involves 
            many such tasks across your entire site.
          </p>

          <BeforeAfter
            title="Adding a Web Part to a Page"
            description="Comparing the editing experience (not counting initial learning curve)"
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
              time: '5-10 minutes (experienced user)',
              painPoints: [
                'Manual list/view name entry prone to typos',
                'Fixed zones limit placement options',
                'Check-in/check-out workflow adds steps',
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
              time: '3-5 minutes (experienced user)',
              benefits: [
                'Dropdown pickers reduce errors',
                'Flexible placement on the page',
                'Real-time preview as you configure',
              ],
            }}
            timeSaved="Fewer steps, but new learning required"
          />

          <BeforeAfter
            title="Changing Theme Colors"
            description="After Theme Manager is already set up"
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
              time: '15-20 minutes (including wait time)',
              painPoints: [
                'Separate login required',
                'CDN propagation causes delays',
                'Cannot preview on actual page before publishing',
              ],
            }}
            after={{
              steps: [
                { step: 'Navigate to page with Theme Manager' },
                { step: 'Click Edit on page' },
                { step: 'Use Theme Manager color pickers' },
                { step: 'See changes in real-time' },
                { step: 'Click Save Theme, then Publish page' },
              ],
              time: '5-10 minutes',
              benefits: [
                'No separate login needed',
                'Changes visible immediately',
                'Preview on the actual page',
                'Dark mode toggle built-in',
              ],
            }}
            timeSaved="Faster iteration, no CDN wait"
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

          <div className="not-prose mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Time Estimates:</strong> These are rough estimates for a <strong>single site</strong> with moderate complexity 
              (~20-50 pages, standard web parts). Large organizations with multiple sites, custom configurations, 
              or complex content structures should expect significantly longer timelines. Plan for pilot testing 
              before full rollout.
            </p>
          </div>

          <MigrationChecklist
            title="Your Migration Journey"
            description="Work through these phases systematically. Do not rush—each phase builds on the previous."
          >
            <MigrationChecklistSection
              title="Phase 1: Discovery & Planning"
              phase="pre"
              icon={<BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
              items={[
                { id: 'inventory', task: 'Inventory all Classic Bonzai sites and pages', description: 'Document every page URL, web parts used, and content owners. This is critical for planning.', critical: true, estimatedTime: '1-3 days' },
                { id: 'audit-content', task: 'Audit content for migration priority', description: 'Identify which pages are actively used vs. outdated. Prioritize high-traffic pages.', estimatedTime: '1-2 days' },
                { id: 'export-themes', task: 'Export theme colors and branding from Brick', description: 'Screenshot or document primary, secondary, background colors and any custom CSS.', estimatedTime: '2-4 hours' },
                { id: 'document-ct', task: 'Document Content Targeting configuration', description: 'Export all targeting rules from Brick. Note which lists and web parts use targeting.', estimatedTime: '4-8 hours' },
                { id: 'list-icons', task: 'Map Font-Awesome icons to Fluent UI', description: 'Identify all icons in use and find Fluent UI equivalents.', estimatedTime: '2-4 hours' },
                { id: 'prepare-catalog', task: 'Prepare App Catalog', description: 'Ensure tenant App Catalog exists and you have deployment permissions.', critical: true, estimatedTime: '1-2 hours' },
                { id: 'plan-training', task: 'Plan user training and change management', description: 'Content authors will need training on the new editing experience.', estimatedTime: '2-4 hours' },
              ]}
            />
            <MigrationChecklistSection
              title="Phase 2: Infrastructure Setup"
              phase="during"
              icon={<Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
              items={[
                { id: 'upload-package', task: 'Upload Bonzai2.sppkg to App Catalog', critical: true, estimatedTime: '30 min' },
                { id: 'deploy-tenant', task: 'Enable tenant-wide deployment', estimatedTime: '30 min' },
                { id: 'create-comm-site', task: 'Create new Modern Communication Site(s)', description: 'Modern pages require Communication Sites or Team Sites with modern experience.', estimatedTime: '1-2 hours' },
                { id: 'setup-theme', task: 'Add Theme Manager and configure brand colors', description: 'Match your existing brand colors. Test on a few pages first.', estimatedTime: '2-4 hours' },
                { id: 'create-lists', task: 'Create or migrate SharePoint lists for web parts', description: 'Important Messages, Advanced Links, Locations, etc. Some lists may be migrated, others created fresh.', estimatedTime: '1-2 days' },
                { id: 'add-columns', task: 'Add Content Targeting columns to lists', description: 'Department, Location, Role columns for audience targeting.', estimatedTime: '4-8 hours' },
              ]}
            />
            <MigrationChecklistSection
              title="Phase 3: Content Recreation"
              phase="during"
              icon={<Wrench className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
              items={[
                { id: 'pilot-pages', task: 'Create pilot pages (3-5 key pages)', description: 'Start with your most important pages to validate the approach.', critical: true, estimatedTime: '2-5 days' },
                { id: 'pilot-review', task: 'Review pilot with stakeholders', description: 'Get feedback before proceeding with full migration.', estimatedTime: '1-2 days' },
                { id: 'create-pages', task: 'Create remaining modern pages', description: 'Each page must be built from scratch. Batch by page type for efficiency.', estimatedTime: '1-4 weeks (varies greatly)' },
                { id: 'add-webparts', task: 'Add and configure Bonzai 2 web parts on each page', description: 'Configure each web part, connect to lists, set up targeting.', estimatedTime: '1-3 weeks (varies greatly)' },
                { id: 'migrate-content', task: 'Migrate page content (text, images, documents)', description: 'Copy/paste text, re-upload or link images, update document links.', estimatedTime: '1-2 weeks' },
              ]}
            />
            <MigrationChecklistSection
              title="Phase 4: Testing & Rollout"
              phase="post"
              icon={<Check className="h-6 w-6 text-green-600 dark:text-green-400" />}
              items={[
                { id: 'verify-webparts', task: 'Test all web parts on all pages', critical: true, estimatedTime: '2-5 days' },
                { id: 'verify-theme', task: 'Verify theme consistency across pages', estimatedTime: '4-8 hours' },
                { id: 'test-ct', task: 'Test content targeting with different user profiles', description: 'Log in as users from different departments/locations to verify targeting.', estimatedTime: '1-2 days' },
                { id: 'test-mobile', task: 'Test on mobile devices and tablets', estimatedTime: '4-8 hours' },
                { id: 'train-users', task: 'Train content editors on new editing workflow', description: 'Hands-on training sessions. Provide documentation and reference materials.', estimatedTime: '1-3 days' },
                { id: 'soft-launch', task: 'Soft launch with limited user group', description: 'Roll out to a subset of users for feedback before full launch.', estimatedTime: '1-2 weeks' },
                { id: 'full-launch', task: 'Full launch and communication', description: 'Announce the new intranet, redirect old URLs if possible.', estimatedTime: '1-2 days' },
              ]}
            />
          </MigrationChecklist>

          <div className="not-prose mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <h4 className="font-semibold text-gray-900 dark:text-white">Realistic Total Timeline</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><strong>Small site (10-20 pages):</strong> 2-4 weeks with dedicated resources</li>
              <li><strong>Medium site (20-50 pages):</strong> 4-8 weeks with dedicated resources</li>
              <li><strong>Large site (50-100+ pages):</strong> 2-4 months, often done in phases</li>
              <li><strong>Enterprise (multiple sites):</strong> 6-12 months for full rollout</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
              These estimates assume dedicated migration resources. If migration is done alongside regular work, multiply by 2-3x.
            </p>
          </div>

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
            The 21 Bonzai 2 web parts cover the same functional areas as their legacy counterparts, 
            though some configuration options and behaviors differ due to the platform change. 
            The &quot;Parity&quot; column indicates approximate feature coverage—not all legacy options 
            are available, and some new options have been added:
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
