import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { ShoppingCart, LayoutGrid, List, Search, Filter, Plus, Settings } from 'lucide-react';

export default function MarketplaceWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Marketplace</DocsTitle>
      <DocsDescription>
        Display any SharePoint list as a searchable, filterable catalog with grid or list layouts.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Lists
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 85%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Marketplace Working in 3 Steps"
            time="20-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'A SharePoint list with items to display',
            ]}
            steps={[
              {
                title: 'Add the web part to your page',
                description: 'Edit the page, click the + button, and search for "Marketplace" in the Bonzai category.',
              },
              {
                title: 'Select your list',
                description: 'Open the property pane, select your SharePoint list from the dropdown picker.',
              },
              {
                title: 'Configure columns and publish',
                description: 'Toggle which columns to display, set layout options, and publish your page.',
              },
            ]}
          />

          {/* KEY BENEFIT BOX */}
          <div className="not-prose my-8 rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
            <h3 className="mt-0 flex items-center gap-2 text-lg font-semibold text-amber-900 dark:text-amber-100">
              <Settings className="h-5 w-5" />
              Dynamic Schema Discovery
            </h3>
            <p className="mb-0 text-amber-700 dark:text-amber-300">
              Unlike traditional web parts that require specific list schemas, Marketplace 
              automatically discovers columns from any SharePoint list. Just point it at 
              your list and toggle which fields to display.
            </p>
          </div>

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Display IT service catalog or help desk offerings',
              'Create an internal product or equipment inventory',
              'Build a knowledge base or FAQ directory',
              'Show office supplies or asset catalog',
              'Display any structured list data with search and filtering',
            ]}
            bestFor={[
              'Service catalogs — IT services, HR resources, facilities',
              'Inventory pages — equipment, supplies, assets',
              'Directory listings — vendors, partners, resources',
              'Knowledge bases — FAQs, policies, procedures',
            ]}
            notFor={[
              'Document libraries — use Documents Rollup instead',
              'News articles — use News Rollup instead',
              'People/employees — use Employee Directory instead',
              'Events with dates — use Events Rollup instead',
            ]}
            alternatives={[
              { name: 'Documents Rollup', when: 'displaying files from document libraries' },
              { name: 'Advanced Links', when: 'simple link tiles without list data' },
              { name: 'Landing', when: 'manually curated content cards' },
            ]}
          />

          {/* LAYOUT TEMPLATES VISUAL */}
          <h2>Layout Templates</h2>
          <p>Marketplace supports two display layouts:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <LayoutGrid className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Grid (Tiles)</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Card-based grid with 2-5 columns per row — best for visual catalogs</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <List className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">List (Rows)</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Compact row-based layout — best for data-dense listings</span>
              </div>
            </div>
          </div>

          {/* FEATURES GRID */}
          <h2>Key Features</h2>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Search</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Filter items by title with debounced search</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400">
                  <Filter className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Category Filtering</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Auto-discovered from Choice columns</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sorting</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sort by any sortable column, ascending or descending</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400">
                  <Plus className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Create New</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Button opens SharePoint new item form</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create or identify your SharePoint list',
                description: 'Marketplace works with any SharePoint list. Create a new list or use an existing one with the data you want to display.',
                tip: 'Add a Choice column for categories — Marketplace will auto-discover it for filtering.',
              },
              {
                title: 'Edit your SharePoint page',
                description: 'Navigate to the page where you want to add the Marketplace. Click "Edit" in the top right corner.',
              },
              {
                title: 'Add the Marketplace web part',
                description: 'Click the + button in any section, type "Marketplace" in the search box, and select "Bonzai Marketplace" from the results.',
              },
              {
                title: 'Open the property pane',
                description: 'Click the pencil icon on the web part to open the property pane on the right side.',
              },
              {
                title: 'Set the title (optional)',
                description: 'Enter a descriptive title like "IT Services", "Equipment Catalog", or "Office Supplies".',
              },
              {
                title: 'Select your list',
                description: 'Use the List dropdown picker to select your SharePoint list. The web part will load the list schema automatically.',
                tip: 'To use a list from a different site, enter the Site URL first, then select the list.',
              },
              {
                title: 'Choose your layout',
                description: 'Select Grid (tiles) or List (rows) layout. For Grid, choose how many columns per row (2-5).',
              },
              {
                title: 'Configure column visibility',
                description: 'In the "Columns" section, toggle which fields to display on item cards. Title is shown by default.',
                tip: 'The column toggles are generated dynamically from your list schema.',
              },
              {
                title: 'Enable/disable features',
                description: 'Toggle Search, Sorting, Category Filter, and Create New button as needed for your use case.',
              },
              {
                title: 'Set pagination',
                description: 'Use the Items Per Page slider (6-50) to control how many items appear before pagination.',
              },
              {
                title: 'Save and publish',
                description: 'Click outside the property pane, then save and publish your page. Your marketplace is now live!',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations for common scenarios:</p>

          <RecipeGrid>
            <RecipeCard
              title="IT Service Catalog"
              description="Searchable IT services with categories"
              useCase="IT help desk, service portal"
              icon={<ShoppingCart className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'IT Services' },
                { property: 'Layout', value: 'Grid (3 columns)' },
                { property: 'Items Per Page', value: '12' },
                { property: 'Enable Search', value: 'Yes' },
                { property: 'Enable Category Filter', value: 'Yes' },
                { property: 'Show Create Button', value: 'No' },
              ]}
            />
            <RecipeCard
              title="Office Supplies Catalog"
              description="Orderable supplies with create option"
              useCase="Facilities, office management"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Office Supplies' },
                { property: 'Layout', value: 'Grid (4 columns)' },
                { property: 'Items Per Page', value: '24' },
                { property: 'Enable Search', value: 'Yes' },
                { property: 'Enable Sorting', value: 'Yes' },
                { property: 'Show Create Button', value: 'Yes' },
              ]}
            />
            <RecipeCard
              title="Equipment Inventory"
              description="Asset tracking with list view"
              useCase="IT asset management, facilities"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Equipment Inventory' },
                { property: 'Layout', value: 'List' },
                { property: 'Items Per Page', value: '20' },
                { property: 'Enable Search', value: 'Yes' },
                { property: 'Enable Sorting', value: 'Yes' },
                { property: 'Enable Category Filter', value: 'Yes' },
              ]}
            />
            <RecipeCard
              title="Knowledge Base"
              description="FAQ or policy directory"
              useCase="HR, Legal, internal documentation"
              icon={<Search className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Knowledge Base' },
                { property: 'Layout', value: 'List' },
                { property: 'Items Per Page', value: '15' },
                { property: 'Enable Search', value: 'Yes' },
                { property: 'Enable Category Filter', value: 'Yes' },
                { property: 'Show Create Button', value: 'No' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Add a Choice column for categories">
            If your list has a Choice column, Marketplace automatically discovers it and 
            creates a filter dropdown. This is the easiest way to enable category filtering.
          </Callout>

          <Callout type="tip" title="Use meaningful column names">
            Column titles are displayed in item cards. Use clear, user-friendly names 
            like "Description" instead of internal names like "Desc1".
          </Callout>

          <Callout type="pro" title="Configure columns for your use case">
            Show only the most important columns on cards. Too many columns create 
            cluttered cards. Users can click items to see full details in SharePoint.
          </Callout>

          <Callout type="info" title="Pagination handles large lists">
            Marketplace uses SharePoint paging tokens for efficient pagination. 
            It works well with lists containing thousands of items.
          </Callout>

          <Callout type="warning" title="User/Person fields show display names">
            Person columns are automatically expanded to show display names instead of IDs. 
            This requires an extra API call, which may slightly increase load time.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'List not appearing in the dropdown',
                solution: 'Ensure the list exists on the current site. For lists on other sites, enter the Site URL first, then the list picker will refresh.',
                details: 'Only generic lists (BaseTemplate 100) are shown. Document libraries, calendars, and other specialized lists are not displayed.',
              },
              {
                problem: 'No columns showing in the property pane',
                solution: 'Select a list first. Column toggles are generated dynamically after the list schema is loaded.',
              },
              {
                problem: 'Category filter dropdown is empty',
                solution: 'Add a Choice column to your list. Marketplace auto-discovers Choice fields for filtering.',
                details: 'The column must have predefined choices — not a plain text field.',
              },
              {
                problem: 'Items not loading or showing error',
                solution: 'Check that you have at least Read permission on the list. Also verify the Site URL is correct if using a cross-site list.',
              },
              {
                problem: 'Sorting not working on some columns',
                solution: 'Only certain column types support sorting: Text, Number, Currency, DateTime, Choice, Boolean. Lookup and User columns are not sortable.',
              },
              {
                problem: 'Create New button not working',
                solution: 'Ensure you have Contribute permission on the list. The button opens SharePoint\'s standard NewForm.aspx page.',
              },
              {
                problem: 'User/Person column showing "User #123"',
                solution: 'This happens when the User field could not be expanded. Check that the column is a valid Person field and that you have permission to read user profiles.',
              },
              {
                problem: 'Pagination showing wrong count',
                solution: 'When filters are active, exact counts are not available due to SharePoint API limitations. The count shows an estimate with "+" indicator.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Property Pane Configuration</h3>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Web part title displayed above the content</td>
              </tr>
              <tr>
                <td><code>siteUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Site URL for cross-site queries. Leave empty for current site.</td>
              </tr>
              <tr>
                <td><code>listName</code></td>
                <td>List Picker</td>
                <td>Yes</td>
                <td>SharePoint list to display</td>
              </tr>
              <tr>
                <td><code>layoutType</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>Grid (tiles) or List (rows). Default: Grid</td>
              </tr>
              <tr>
                <td><code>itemsPerRow</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>Columns per row for grid layout (2-5). Default: 3</td>
              </tr>
              <tr>
                <td><code>itemsPerPage</code></td>
                <td>Slider (6-50)</td>
                <td>No</td>
                <td>Items to display per page. Default: 12</td>
              </tr>
              <tr>
                <td><code>enableSearch</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show search box. Default: On</td>
              </tr>
              <tr>
                <td><code>enableSorting</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show sort dropdown. Default: On</td>
              </tr>
              <tr>
                <td><code>enableCategoryFilter</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show category filter dropdowns. Default: On</td>
              </tr>
              <tr>
                <td><code>showCreateButton</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show "Create New" button. Default: On</td>
              </tr>
              <tr>
                <td><code>displayColumns</code></td>
                <td>Column Toggles</td>
                <td>No</td>
                <td>Comma-separated list of column internal names to display</td>
              </tr>
            </tbody>
          </table>

          <h3>List Requirements</h3>

          <p>
            Marketplace works with any SharePoint list (BaseTemplate 100). The only required column is the
            default <strong>Title</strong> field, which is used for item names and search.
          </p>

          <h4>Minimum Columns</h4>
          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
                <th>Required</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Single line of text</td>
                <td>Yes</td>
                <td>Used for item name and search filtering</td>
              </tr>
              <tr>
                <td>Created</td>
                <td>Date/Time</td>
                <td>No</td>
                <td>Available for sorting and display</td>
              </tr>
              <tr>
                <td>Modified</td>
                <td>Date/Time</td>
                <td>No</td>
                <td>Default sort field when no custom sort is set</td>
              </tr>
              <tr>
                <td>Author</td>
                <td>Person</td>
                <td>No</td>
                <td>Expanded to show display name when present</td>
              </tr>
            </tbody>
          </table>

          <h4>Recommended Columns (Optional)</h4>

          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Single line of text</td>
                <td>Item name (always displayed)</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>Multiple lines of text</td>
                <td>Item details</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Choice</td>
                <td>Enables category filtering dropdown</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>Choice</td>
                <td>Item status (Active, Inactive, etc.)</td>
              </tr>
              <tr>
                <td>Owner</td>
                <td>Person</td>
                <td>Responsible person (displays name)</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>Dynamic schema discovery (works with any list)</li>
            <li>Grid and List layout options</li>
            <li>Configurable columns per row (2-5)</li>
            <li>Search with debounce (300ms)</li>
            <li>Category filtering (auto-discovered from Choice columns)</li>
            <li>Sorting by any sortable field (ascending/descending)</li>
            <li>Pagination with SharePoint paging tokens</li>
            <li>Create New button (opens SharePoint form)</li>
            <li>Click-to-view (opens SharePoint display form)</li>
            <li>User/Person field expansion (shows display names)</li>
            <li>Cross-site data source support</li>
            <li>Responsive design</li>
            <li>Theme Manager integration</li>
          </ul>

          <h3>Data Source</h3>

          <p>
            Marketplace queries SharePoint lists using the REST API. It uses efficient 
            paging tokens (<code>@odata.nextLink</code>) for pagination, which works well 
            with large lists. The web part caches list schema to reduce API calls.
          </p>

          <h3>Migration from Classic Bonzai</h3>

          <p>
            The Marketplace web part in Bonzai 2 provides similar functionality to the 
            Classic Bonzai Marketplace, with modernized architecture using React and 
            SPFx. Key improvements include dynamic schema discovery, SharePoint paging 
            tokens for large lists, and automatic User field expansion.
          </p>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

