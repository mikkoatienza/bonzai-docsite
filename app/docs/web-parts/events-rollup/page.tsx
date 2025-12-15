import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Calendar, List, LayoutGrid, Star } from 'lucide-react';

export default function EventsRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Events Rollup</DocsTitle>
      <DocsDescription>
        Display events from Site Pages with list and tile layouts, promoted item highlighting, and pagination.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Communication
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 90%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Events Rollup Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Site Pages library with event pages',
            ]}
            steps={[
              {
                title: 'Add Events Rollup to your page',
                description: 'Edit the page, click +, search for "Events Rollup", and add it.',
              },
              {
                title: 'Select your list and template',
                description: 'Open the property pane, select your Site Pages list, and choose List or Tile template.',
              },
              {
                title: 'Configure items and publish',
                description: 'Set items per page, optionally enable pagination, and publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Display upcoming company events on the homepage',
              'Show event listings from Site Pages',
              'Create paginated event listings',
              'Highlight promoted/featured events',
              'Display events with comments',
            ]}
            bestFor={[
              'Homepage — upcoming events section',
              'Events page — comprehensive event listing with pagination',
              'Department pages — filtered events via SharePoint views',
            ]}
            notFor={[
              'Simple announcements without dates — use Important Messages',
              'News articles — use News Rollup',
              'RSVP/registration functionality — requires custom solution',
            ]}
            alternatives={[
              { name: 'News Rollup', when: 'news articles from Site Pages' },
              { name: 'Pages Rollup', when: 'any page type display' },
              { name: 'Important Messages', when: 'announcements without dates' },
            ]}
          />

          {/* DISPLAY TEMPLATES */}
          <h2>Display Templates</h2>
          <p>Events Rollup supports two display templates:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <List className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">List</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Compact rows — best for sidebars and narrow sections</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <LayoutGrid className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Tile</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Grid of tiles with configurable columns (1-6 items per row)</span>
              </div>
            </div>
          </div>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create event pages in Site Pages',
                description: 'Events are stored as pages in the Site Pages library. Create pages with event content.',
                tip: 'Use a "Category" column with value "Events" to distinguish from news articles.',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit your page, click +, search for "Events Rollup", and add it to a section.',
              },
              {
                title: 'Configure Title & Navigation',
                description: 'Set the web part title. Optionally add a title URL, "Show More" text and link.',
              },
              {
                title: 'Choose a display template',
                description: 'Select List for compact display or Tile for image grid. For Tile, configure items per row (1-6).',
              },
              {
                title: 'Select your data source',
                description: 'Choose the Site Pages list from the dropdown. Optionally select a view to filter events.',
              },
              {
                title: 'Configure display options',
                description: 'Enable "Show Promoted Items" to highlight featured events. Enable "Show Comment Count" to display comments.',
              },
              {
                title: 'Set up pagination (optional)',
                description: 'Enable "Show Paging" and set "Items per Page" (1-50) for paginated listings.',
              },
              {
                title: 'Publish and test',
                description: 'Save and publish. Verify events display correctly with your chosen template.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>

          <RecipeGrid>
            <RecipeCard
              title="Homepage Events Widget"
              description="Compact upcoming events for the homepage"
              useCase="Homepage sidebar"
              icon={<Calendar className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Upcoming Events' },
                { property: 'Template', value: 'List' },
                { property: 'Show Paging', value: 'No' },
                { property: 'Items per Page', value: '5' },
                { property: 'Show Comment Count', value: 'No' },
              ]}
            />
            <RecipeCard
              title="Full Events Page"
              description="Complete events listing with pagination"
              useCase="Dedicated events page"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Company Events' },
                { property: 'Template', value: 'Tile' },
                { property: 'Items per Row', value: '3' },
                { property: 'Show Paging', value: 'Yes' },
                { property: 'Items per Page', value: '12' },
              ]}
            />
            <RecipeCard
              title="Featured Events"
              description="Highlighted promoted events"
              useCase="Events landing page hero"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Featured Events' },
                { property: 'Template', value: 'Tile' },
                { property: 'Items per Row', value: '2' },
                { property: 'Show Promoted Items', value: 'Yes' },
                { property: 'Items per Page', value: '4' },
              ]}
            />
            <RecipeCard
              title="Events with View More"
              description="Events listing with link to full page"
              useCase="Department pages"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Upcoming Events' },
                { property: 'Template', value: 'List' },
                { property: 'Show More Text', value: 'View All Events' },
                { property: 'Show More URL', value: '/sites/intranet/events' },
                { property: 'Items per Page', value: '5' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use SharePoint views for filtering">
            Create SharePoint views on your Site Pages library to filter events by category, 
            date, or other criteria. Select the view in the property pane.
          </Callout>

          <Callout type="tip" title="Include event images">
            Events with images display much better in Tile mode. 
            Add banner images to your event pages for visual appeal.
          </Callout>

          <Callout type="pro" title="Use promoted items for featured events">
            Mark important events as "Promoted" using SharePoint's Promote feature. 
            Enable "Show Promoted Items" to highlight these in the rollup.
          </Callout>

          <Callout type="info" title="Configure items per row for Tile template">
            When using the Tile template, set "Items per Row" (1-6) to control the grid layout. 
            This option is disabled for the List template.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Events not appearing',
                solution: 'Verify the list is selected in the property pane. Check that event pages are published (not drafts).',
              },
              {
                problem: 'Wrong events showing',
                solution: 'Select a SharePoint view in the property pane to filter events. Create a view that filters by Category = "Events".',
              },
              {
                problem: 'Pagination not working',
                solution: 'Ensure "Show Paging" is enabled in the property pane. Check that "Items per Page" is set.',
              },
              {
                problem: 'Tile layout looks wrong',
                solution: 'Adjust "Items per Row" setting. Fewer items per row work better for narrow sections.',
              },
              {
                problem: 'Comment count not showing',
                solution: 'Enable "Show Comment Count" in the property pane. Comments must exist on the page.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>

          <h4>Page 1: Basic Settings</h4>
          <table>
            <thead>
              <tr><th>Property</th><th>Type</th><th>Group</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Title & Navigation</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Title & Navigation</td><td>Make title a link</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Title & Navigation</td><td>"View More" link text</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>Title & Navigation</td><td>"View More" link URL</td></tr>
              <tr><td><code>templateName</code></td><td>Dropdown</td><td>Display Options</td><td>list or tile</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Display Options</td><td>1-6 (tile only)</td></tr>
              <tr><td><code>showPromotedItems</code></td><td>Toggle</td><td>Display Options</td><td>Highlight promoted</td></tr>
              <tr><td><code>showCommentCount</code></td><td>Toggle</td><td>Display Options</td><td>Show comments</td></tr>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Data Source</td><td>Source site URL</td></tr>
              <tr><td><code>listId</code></td><td>List Picker</td><td>Data Source</td><td>Source list</td></tr>
              <tr><td><code>viewId</code></td><td>View Picker</td><td>Data Source</td><td>Filter view</td></tr>
            </tbody>
          </table>

          <h4>Page 2: Advanced Settings</h4>
          <table>
            <thead>
              <tr><th>Property</th><th>Type</th><th>Group</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Pagination</td><td>Enable pagination</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (1-50)</td><td>Pagination</td><td>Items per page</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-1000)</td><td>Layout</td><td>Fixed height in px</td></tr>
              <tr><td><code>enableContentTargeting</code></td><td>Toggle</td><td>Advanced</td><td>Content targeting</td></tr>
              <tr><td><code>description</code></td><td>Text (multiline)</td><td>Advanced</td><td>Web part description</td></tr>
              <tr><td><code>helpUrl</code></td><td>Text</td><td>Advanced</td><td>Help documentation URL</td></tr>
            </tbody>
          </table>

          <h3>Data Source</h3>
          <p>
            Events Rollup reads from the Site Pages library (default: "Pages"). 
            Events are standard SharePoint pages. Use the <strong>View Picker</strong> to 
            filter by category or date using a SharePoint view.
          </p>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Two display templates (List, Tile)</li>
            <li>✅ Configurable grid layout (1-6 items per row)</li>
            <li>✅ Pagination with configurable page size</li>
            <li>✅ Promoted/featured item highlighting</li>
            <li>✅ Comment count display</li>
            <li>✅ "View More" link configuration</li>
            <li>✅ List and View pickers</li>
            <li>✅ Content targeting</li>
            <li>✅ Fixed height option</li>
            <li>✅ Cross-site data source</li>
            <li>❌ RSVP/registration (not implemented)</li>
            <li>❌ Calendar view (not implemented)</li>
          </ul>

          <h3>Migration from Classic Bonzai</h3>
          <table>
            <thead>
              <tr><th>Classic Feature</th><th>Modern Equivalent</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>RSVP functionality</td><td>Not available</td><td>Requires custom solution</td></tr>
              <tr><td>Calendar view</td><td>Not available</td><td>Use SharePoint calendar</td></tr>
              <tr><td>Attendance tracking</td><td>Not available</td><td>Requires custom solution</td></tr>
              <tr><td>Display templates</td><td>List, Tile</td><td>2 templates available</td></tr>
              <tr><td>View filtering</td><td>View Picker</td><td>Visual picker</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
