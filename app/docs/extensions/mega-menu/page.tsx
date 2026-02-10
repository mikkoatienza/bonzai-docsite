import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Menu, Smartphone, Monitor, ChevronRight, Layers, Building } from 'lucide-react';

export default function MegaMenuExtension() {
  return (
    <DocsPage>
      <DocsTitle>Mega Menu</DocsTitle>
      <DocsDescription>
        3-level hierarchical navigation with desktop mega menu panels and mobile drawer.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              Extension
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Application Customizer
            </span>
          </div>

          {/* IMPORTANT CALLOUT */}
          <Callout type="info" title="This is an Application Customizer, not a web part">
            Mega Menu is an SPFx Application Customizer that runs site-wide in the header 
            placeholder. You don&apos;t add it to individual pages — once activated, it appears 
            on every page in your site collection.
          </Callout>

          <Callout type="warning" title="Two-step activation required">
          After uploading the Bonzai 2 package to your App Catalog, you must also add 
          the Bonzai app to each site where you want to use Mega Menu. Go to 
          Site Contents → New → App → Bonzai 2.
          </Callout>

          <Callout type="info" title="License banner awareness">
            If a license warning or expired banner appears, Mega Menu may still render while web parts are gated.
            Contact support if the banner persists after activation.
          </Callout>

          <Callout type="info" title="Legacy package note">
            If your tenant previously deployed the separate <strong>bonzai-mega-menu</strong> package,
            remove that app from Site Contents after upgrading to the consolidated Bonzai 2 package
            to avoid duplicate initialization.
          </Callout>

          <h2>Admin-Blocked Apps Workaround</h2>

          <p>
            If “Apps you can add” is empty due to tenant policy, you can still activate Mega Menu
            by registering the Application Customizer in the Tenant Wide Extensions list.
          </p>

          <ol>
            <li>Open the App Catalog site: <code>https://&lt;tenant&gt;.sharepoint.com/sites/appcatalog</code></li>
            <li>Go to <strong>Site Contents</strong> → <strong>Tenant Wide Extensions</strong></li>
            <li>Click <strong>New</strong> → <strong>Application Customizer</strong></li>
            <li>Fill in the fields below and click <strong>Save</strong></li>
          </ol>

          <pre><code>{`Title: Bonzai Mega Menu
Component Id: a1b2c3d4-e5f6-7890-abcd-ef1234567890
Location: ClientSideExtension.ApplicationCustomizer
Component Properties:
{"navigationListName":"MegaMenuNavigation","hideNativeNavigation":true,"hideMobileAppBar":true,"licenseApiUrl":""}
Sequence: 100 (optional)
Web Template / List Template / Host Properties: leave blank`}</code></pre>

          {/* QUICK START */}
          <QuickStart
            title="Get Mega Menu Working in 4 Steps"
            time="45-60 minutes"
            prerequisites={[
              'Bonzai 2 package (.sppkg) uploaded to your tenant App Catalog',
              'Site Collection Administrator permissions on your target site',
              'Understanding of SharePoint list creation',
            ]}
            steps={[
              {
                title: 'Create the Navigation list',
                description: 'Create a SharePoint list named "MegaMenuNavigation" with the required columns (see schema below).',
              },
              {
                title: 'Add your navigation items',
                description: 'Create list items for your menu hierarchy: Level 1 items have no parent, Level 2/3 items reference their parent.',
              },
              {
                title: 'Add the Bonzai app to your site',
                description: 'Go to Site Contents → New → App, then add the Bonzai 2 app to activate the Mega Menu extension on this site.',
              },
              {
                title: 'Verify and customize',
                description: 'Navigate your site to confirm the menu appears. Use the toggle button to show/hide native SharePoint navigation.',
              },
            ]}
          />

          {/* KEY BENEFIT BOX */}
          <div className="not-prose my-8 rounded-xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
            <h3 className="mt-0 flex items-center gap-2 text-lg font-semibold text-violet-900 dark:text-violet-100">
              <Layers className="h-5 w-5" />
              3-Level Navigation Hierarchy
            </h3>
            <p className="mb-0 text-violet-700 dark:text-violet-300">
              Build rich navigation structures with up to 3 levels of nesting. Root items 
              appear in the top bar, second level items appear in mega menu panels, and 
              third level items appear as sub-links within those panels.
            </p>
          </div>

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Replace SharePoint\'s default horizontal navigation',
              'Create a consistent mega menu across all site pages',
              'Provide mobile-friendly slide-out navigation',
              'Organize deep navigation hierarchies (up to 3 levels)',
              'Centrally manage navigation from a SharePoint list',
            ]}
            bestFor={[
              'Intranet home sites — primary site navigation',
              'Hub sites — unified navigation across connected sites',
              'Communication sites — polished navigation experience',
              'Any site needing multi-level navigation',
            ]}
            notFor={[
              'Individual page navigation — use Advanced Links web part',
              'Footer links — Mega Menu only appears in the header',
              'Sites with simple single-level navigation — may be overkill',
            ]}
            alternatives={[
              { name: 'Advanced Links', when: 'link tiles on a specific page' },
              { name: 'SharePoint Hub Navigation', when: 'native hub site navigation' },
            ]}
          />

          <h2>Branding and Logo</h2>
          <ul>
            <li>Mega Menu reserves a logo slot on the left for desktop and mobile layouts.</li>
            <li>Set Mega Menu background and text colors in Theme Manager → Mega Menu Branding.</li>
            <li>Provide an absolute PNG logo URL in Theme Manager to display the logo.</li>
            <li>Accent and hover colors are derived from the Mega Menu Branding foreground color.</li>
          </ul>

          {/* NAVIGATION HIERARCHY VISUAL */}
          <h2>Navigation Hierarchy</h2>
          <p>Mega Menu supports a 3-level navigation structure:</p>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4">
              {/* Level 1 */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-violet-600 text-sm font-bold text-white">
                  1
                </div>
                <div className="flex-1 rounded bg-violet-100 px-4 py-2 font-semibold text-violet-900 dark:bg-violet-900 dark:text-violet-100">
                  Level 1: Top Bar Items
                </div>
              </div>
              <p className="ml-10 text-sm text-gray-600 dark:text-gray-400">
                Root navigation items displayed in the horizontal menu bar. Click or hover to open Level 2 panel.
              </p>

              {/* Level 2 */}
              <div className="ml-8 flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <div className="flex h-8 w-8 items-center justify-center rounded bg-violet-500 text-sm font-bold text-white">
                  2
                </div>
                <div className="flex-1 rounded bg-violet-50 px-4 py-2 font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                  Level 2: Mega Menu Panel Items
                </div>
              </div>
              <p className="ml-20 text-sm text-gray-600 dark:text-gray-400">
                Second-level items displayed in the dropdown mega menu panel. Can have Level 3 children.
              </p>

              {/* Level 3 */}
              <div className="ml-16 flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <div className="flex h-8 w-8 items-center justify-center rounded bg-violet-400 text-sm font-bold text-white">
                  3
                </div>
                <div className="flex-1 rounded bg-gray-100 px-4 py-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  Level 3: Sub-links within panels
                </div>
              </div>
              <p className="ml-28 text-sm text-gray-600 dark:text-gray-400">
                Third-level items displayed as links under their Level 2 parent. Maximum nesting depth.
              </p>
            </div>
          </div>

          {/* DESKTOP VS MOBILE */}
          <h2>Desktop and Mobile Behavior</h2>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-400">
                  <Monitor className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Desktop</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Horizontal bar + hover panels</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Level 1 items in horizontal bar</li>
                <li>Hover to open mega menu panels</li>
                <li>Keyboard accessible (Enter, Escape, Arrows)</li>
                <li>Smooth hover delay for usability</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-400">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Mobile</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hamburger + slide-out drawer</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Hamburger menu button</li>
                <li>Full-height slide-out drawer</li>
                <li>Expandable accordion for nested items</li>
                <li>Touch-friendly tap targets</li>
              </ul>
            </div>
          </div>

          {/* REQUIRED LIST SCHEMA */}
          <h2>Required Navigation List</h2>

          <p>
            Mega Menu reads navigation items from a SharePoint list. The default list name 
            is <code>MegaMenuNavigation</code>, but this can be configured in the extension properties.
          </p>

          <h3>List Schema</h3>

          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Internal Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td><code>Title</code></td>
                <td>Single line of text</td>
                <td>Yes</td>
                <td>Display text for the menu item</td>
              </tr>
              <tr>
                <td>URL</td>
                <td><code>URL</code></td>
                <td>Hyperlink</td>
                <td>Yes</td>
                <td>Navigation URL (relative or absolute)</td>
              </tr>
              <tr>
                <td>Parent</td>
                <td><code>Auto-detected</code></td>
                <td>Lookup (to same list)</td>
                <td>No</td>
                <td>Parent item for hierarchy. Internal name varies; Mega Menu auto-detects.</td>
              </tr>
              <tr>
                <td>Sort Order</td>
                <td><code>SortOrder</code></td>
                <td>Number</td>
                <td>Yes</td>
                <td>Display order within the same level (1, 2, 3...)</td>
              </tr>
              <tr>
                <td>Open In New Tab</td>
                <td><code>OpenInNewTab</code></td>
                <td>Yes/No</td>
                <td>No</td>
                <td>Open link in new browser tab</td>
              </tr>
              <tr>
                <td>Icon</td>
                <td><code>Icon</code></td>
                <td>Single line of text</td>
                <td>No</td>
                <td>Fluent UI icon name (e.g., &quot;Home&quot;, &quot;People&quot;)</td>
              </tr>
              <tr>
                <td>Is Enabled</td>
                <td><code>IsEnabled</code></td>
                <td>Yes/No</td>
                <td>No</td>
                <td>Show/hide item. Default: Yes</td>
              </tr>
            </tbody>
          </table>

          <Callout type="tip" title="Create the Parent lookup column">
            When creating the Parent column, set it as a Lookup to the same list 
            (MegaMenuNavigation), using the Title column as the display field. The internal
            name varies by tenant, and Mega Menu auto-detects it.
          </Callout>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Setup"
            steps={[
              {
                title: 'Create the navigation list',
                description: 'Go to Site Contents → New → List. Name it "MegaMenuNavigation" (exact spelling matters for default configuration).',
              },
              {
                title: 'Add the URL column',
                description: 'Add a column: Name = "URL", Type = Hyperlink. This stores the navigation destination.',
              },
              {
                title: 'Add the SortOrder column',
                description: 'Add a column: Name = "SortOrder", Type = Number. This controls display order within each level.',
              },
              {
                title: 'Add the Parent lookup column',
                description: 'Add a column: Name = "Parent", Type = Lookup. Select "MegaMenuNavigation" as the source list, "Title" as the display column.',
                tip: 'SharePoint generates the internal name automatically; Mega Menu auto-detects it.',
              },
              {
                title: 'Add optional columns',
                description: 'Add OpenInNewTab (Yes/No), Icon (Text), and IsEnabled (Yes/No) columns as needed.',
              },
              {
                title: 'Create Level 1 items first',
                description: 'Add your root navigation items. Leave Parent empty and set SortOrder (1, 2, 3, etc.).',
              },
              {
                title: 'Create Level 2 items',
                description: 'Add second-level items. Select their parent from the Parent dropdown and set SortOrder.',
              },
              {
                title: 'Create Level 3 items (optional)',
                description: 'Add third-level items, selecting Level 2 items as their parents.',
                tip: 'Maximum depth is 3 levels. Items with deeper nesting will be ignored.',
              },
              {
                title: 'Add the Bonzai app to your site',
                description: 'Go to Site Contents → New → App. Find "Bonzai 2" in the app list and click Add. This is a separate step from uploading the package to the App Catalog.',
                tip: 'The Bonzai package must first be uploaded to your tenant App Catalog. Then you add it to each site where you want to use Mega Menu.',
              },
              {
                title: 'Navigate your site',
                description: 'Visit any page on your site. The Mega Menu should appear in the header, replacing or supplementing native navigation.',
              },
              {
                title: 'Toggle native navigation (optional)',
                description: 'Click the chevron button on the right side of the menu bar to show/hide SharePoint\'s native navigation.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Example navigation structures:</p>

          <RecipeGrid>
            <RecipeCard
              title="Simple 2-Level Menu"
              description="Basic navigation with departments"
              useCase="Small to medium sites"
              icon={<Menu className="h-5 w-5" />}
              config={[
                { property: 'Level 1', value: 'Home, About, Services, Contact' },
                { property: 'Level 2', value: '2-3 items per Level 1' },
                { property: 'Level 3', value: 'Not used' },
                { property: 'Icons', value: 'Optional' },
              ]}
            />
            <RecipeCard
              title="Department Hub"
              description="Multi-department navigation"
              useCase="Large intranet sites"
              icon={<Building className="h-5 w-5" />}
              config={[
                { property: 'Level 1', value: 'HR, IT, Finance, Operations' },
                { property: 'Level 2', value: 'Policies, Tools, Team, FAQs per dept' },
                { property: 'Level 3', value: 'Specific pages/links' },
                { property: 'Icons', value: 'People, Settings, Money, Gear' },
              ]}
            />
            <RecipeCard
              title="Full 3-Level Structure"
              description="Deep navigation hierarchy"
              useCase="Complex sites with many pages"
              icon={<Layers className="h-5 w-5" />}
              config={[
                { property: 'Level 1', value: '5-8 main sections' },
                { property: 'Level 2', value: '3-6 subsections each' },
                { property: 'Level 3', value: '2-5 pages per subsection' },
                { property: 'External Links', value: 'OpenInNewTab = Yes' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use consistent SortOrder numbering">
            Use increments of 10 (10, 20, 30) instead of 1, 2, 3. This makes it easy to 
            insert items later without renumbering everything.
          </Callout>

          <Callout type="tip" title="Keep Level 1 concise">
            Limit top-level items to 5-8 entries. Too many Level 1 items create a 
            cluttered horizontal bar that may wrap on smaller screens.
          </Callout>

          <Callout type="pro" title="Use IsEnabled for seasonal items">
            Instead of deleting temporary menu items (like &quot;Holiday Schedule&quot;), 
            set IsEnabled to No. This preserves the item for future use.
          </Callout>

          <Callout type="warning" title="Test on mobile devices">
            The mobile drawer handles deep hierarchies differently than desktop. 
            Test on actual mobile devices or browser responsive mode.
          </Callout>

          <Callout type="info" title="Navigation caches for 5 minutes">
            The Mega Menu caches navigation data for performance. Changes to the list 
            may take up to 5 minutes to appear. Clear browser cache for immediate testing.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Apps you can add is empty (Bonzai 2 not listed)',
                solution: 'Register the Mega Menu using Tenant Wide Extensions instead of the app-add flow.',
                details: 'Go to the App Catalog → Tenant Wide Extensions → New → Application Customizer. Use Component Id a1b2c3d4-e5f6-7890-abcd-ef1234567890 and Location ClientSideExtension.ApplicationCustomizer.',
              },
              {
                problem: 'Mega Menu not appearing on pages',
                solution: 'Make sure you have added the Bonzai app to your specific site. Go to Site Contents → New → App and add "Bonzai 2".',
                details: 'There are two steps: (1) Upload the Bonzai 2 .sppkg package to your tenant App Catalog, and (2) Add the Bonzai app to each site where you want to use Mega Menu. Step 2 is often missed.',
              },
              {
                problem: 'Navigation items not loading',
                solution: 'Verify the "MegaMenuNavigation" list exists and has items. Check that required fields (Title, URL, SortOrder) are present.',
                details: 'Parent lookup internal names vary; Mega Menu auto-detects them. If using a different list name, update the extension properties.',
              },
              {
                problem: 'Hierarchy not working (all items at root)',
                solution: 'Check that the Parent column is a Lookup to the same list. Items need ParentId values set to create hierarchy.',
                details: 'Ensure the Parent lookup values are set for child items; Mega Menu detects the internal field automatically.',
              },
              {
                problem: 'Items appearing in wrong order',
                solution: 'Verify SortOrder values are set correctly. Items are sorted by SortOrder within each level, then by Title.',
              },
              {
                problem: 'Icons not showing',
                solution: 'Ensure icon names are valid Fluent UI icon names (e.g., "Home", "People", "Settings"). Names are case-sensitive.',
                details: 'Browse Fluent UI icon catalog at: https://developer.microsoft.com/en-us/fluentui#/styles/web/icons',
              },
              {
                problem: 'Native SharePoint navigation still visible',
                solution: 'Click the chevron toggle button on the right side of the Mega Menu bar. By default, native navigation is hidden.',
              },
              {
                problem: 'Mobile drawer not opening',
                solution: 'The hamburger menu button only appears on mobile/tablet viewports (under 768px). Use browser responsive mode to test.',
              },
              {
                problem: 'Changes to list not appearing in menu',
                solution: 'Navigation data is cached for 5 minutes. Wait or clear browser cache (Ctrl+Shift+R) to see changes immediately.',
              },
              {
                problem: 'Level 3 items not showing',
                solution: 'Verify Level 2 parent items exist and are enabled. Level 3 items reference Level 2 items via the Parent field.',
                details: 'Maximum depth is 3 levels. Items nested deeper than Level 3 are automatically skipped.',
              },
              {
                problem: 'External links not opening in new tab',
                solution: 'Set OpenInNewTab to Yes on the list item. Links only open in new tab if this field is explicitly set.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Extension Properties</h3>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>navigationListName</code></td>
                <td>Text</td>
                <td>MegaMenuNavigation</td>
                <td>Name of the SharePoint list containing navigation items</td>
              </tr>
              <tr>
                <td><code>hideNativeNavigation</code></td>
                <td>Boolean</td>
                <td>true</td>
                <td>Hide SharePoint&apos;s native site navigation</td>
              </tr>
              <tr>
                <td><code>hideMobileAppBar</code></td>
                <td>Boolean</td>
                <td>true</td>
                <td>Hide SharePoint&apos;s mobile sticky footer app bar</td>
              </tr>
            </tbody>
          </table>

          <h3>CSS Customization</h3>

          <p>
            Mega Menu uses Theme Manager branding variables (background, foreground, logo) and derives accent colors
            from the Mega Menu foreground color for hover/active states.
          </p>

          <h3>Keyboard Navigation</h3>

          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><kbd>Tab</kbd></td>
                <td>Move between Level 1 items</td>
              </tr>
              <tr>
                <td><kbd>Enter</kbd> / <kbd>Space</kbd></td>
                <td>Open mega menu panel for current item</td>
              </tr>
              <tr>
                <td><kbd>Escape</kbd></td>
                <td>Close open panel</td>
              </tr>
              <tr>
                <td><kbd>Arrow Down</kbd></td>
                <td>Open submenu if item has children</td>
              </tr>
              <tr>
                <td><kbd>Arrow Up</kbd></td>
                <td>Close submenu</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>3-level hierarchical navigation</li>
            <li>Desktop: horizontal bar with hover-triggered mega menu panels</li>
            <li>Mobile: hamburger menu with slide-out drawer</li>
            <li>SharePoint list-driven (centrally managed)</li>
            <li>Optional Fluent UI icons on menu items</li>
            <li>Open in new tab option per item</li>
            <li>Enable/disable individual items without deleting</li>
            <li>Toggle to show/hide native SharePoint navigation</li>
            <li>Toggle to show/hide SharePoint mobile app bar</li>
            <li>Keyboard accessible (WCAG compliant)</li>
            <li>5-minute cache for performance</li>
            <li>Theme Manager integration</li>
            <li>Responsive design</li>
          </ul>

          <h3>Migration from Classic Bonzai</h3>

          <p>
            The Mega Menu in Bonzai 2 provides similar navigation functionality to 
            Classic Bonzai, rebuilt as a modern SPFx Application Customizer. Key 
            improvements include responsive mobile drawer, keyboard accessibility, 
            and SharePoint list-based configuration instead of master page customization.
          </p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

