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
        Display events with list and tile layouts, search and filters, metadata toggles, and RSVP support.
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
              'Optional for RSVP: EventAttendees list with required columns',
            ]}
            steps={[
              {
                title: 'Add Events Rollup to your page',
                description: 'Edit the page, click +, search for "Events Rollup", and add it.',
              },
              {
                title: 'Select your list and template',
                description: 'Open the property pane, select a site and list, then choose List or Tile template.',
              },
              {
                title: 'Configure options and publish',
                description: 'Set paging, metadata toggles, and optional search/filters, then publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Display upcoming company events on the homepage',
              'Show event listings from Site Pages',
              'Create paginated event listings',
              'Highlight featured or promoted events',
              'Allow users to RSVP to events',
            ]}
            bestFor={[
              'Homepage — upcoming events section',
              'Events page — comprehensive event listing with pagination',
              'Department pages — filtered events via SharePoint views',
            ]}
            notFor={[
              'Simple announcements without dates — use Important Messages',
              'News articles — use News Rollup',
              'Complex registration workflows — use a dedicated registration system',
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

          <h2>Recent Updates</h2>
          <ul>
            <li>Search and filter UI (page type, category, tags, date range).</li>
            <li>Metadata toggles (date, time, author, category, tags, likes).</li>
            <li>Icon picker, site picker, and list picker improvements.</li>
            <li>Event URL field is preferred when present, with FileRef fallback.</li>
            <li>Progressive REST fallbacks to avoid 400 errors on schema differences.</li>
          </ul>

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
                title: 'Select your site and list',
                description: 'Use Site Selection Mode (picker or manual URL), then choose the list with the List Picker.',
              },
              {
                title: 'Configure filters and metadata',
                description: 'Set category/tag filters, toggle Search/Filters, and choose which metadata to show (date, time, author, tags, likes).',
              },
              {
                title: 'Enable RSVP (optional)',
                description: 'Create the EventAttendees list with required fields and verify permissions so users can RSVP.',
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

          <Callout type="info" title="RSVP prerequisites (EventAttendees list)">
            RSVP relies on a list named <code>EventAttendees</code> (or <code>Event Attendees</code>) with
            fields for EventPageItemId, UserId, and IsAttending. The service auto-discovers field names,
            but the list and write permissions must exist.
          </Callout>

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
                { property: 'Show Date', value: 'Yes' },
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
                { property: 'Enable Search', value: 'On' },
                { property: 'Enable Filters', value: 'On' },
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

          <Callout type="tip" title="Use categories and tags for filtering">
            Add Category and Tags fields to your events, then enable Filters so users can narrow results.
          </Callout>

          <Callout type="tip" title="Include event images">
            Events with images display much better in Tile mode. 
            Add banner images to your event pages for visual appeal.
          </Callout>

          <Callout type="pro" title="Enable RSVP only when the list is ready">
            RSVP requires an EventAttendees list and write permissions. Add it before enabling RSVP in production.
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
                solution: 'Verify the site/list selection and that event pages are published (not drafts).',
              },
              {
                problem: 'Wrong events showing',
                solution: 'Use Category/Tags filters or enable Search/Filters to narrow results.',
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
                problem: 'RSVP buttons not working',
                solution: 'Confirm the EventAttendees list exists and that users have Contribute permissions.',
                details: 'The list name is detected automatically (EventAttendees or Event Attendees). Required fields are auto-discovered by the service.',
              },
              {
                problem: 'Like count not showing',
                solution: 'Like counts are pulled from the linked event page; the heart icon hides when likes are unavailable.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Event Pages Schema</h3>
          <p>
            Events Rollup reads event pages from Site Pages (fallbacks: <code>Pages</code>, <code>SitePages</code>, <code>Site Pages</code>).
            The service discovers common field names, so you can use these recommended columns:
          </p>
          <ol>
            <li>Create event pages in the Site Pages library.</li>
            <li>Add a <strong>Start Date</strong> column (Date/Time) — required.</li>
            <li>Optional: add End Date, Location, Address, Category, Tags, and RSVP fields.</li>
            <li>Publish pages so they are visible to readers.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Start Date</td><td>Date/Time</td><td>Yes</td><td>Maps to OwlEventPageStartDate or EventDate</td></tr>
              <tr><td>End Date</td><td>Date/Time</td><td>No</td><td>Maps to OwlEventPageEndDate or EventEndDate</td></tr>
              <tr><td>Location</td><td>Single line of text</td><td>No</td><td>Maps to OwlEventPageLocation / Location</td></tr>
              <tr><td>Address</td><td>Multiple lines of text</td><td>No</td><td>Maps to OwlEventPageAddress / Address</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td><td>Maps to OwlEventPageCategory / Category</td></tr>
              <tr><td>Tags</td><td>Managed Metadata</td><td>No</td><td>Enterprise Keywords / Tags for filters</td></tr>
              <tr><td>Requires Attendance</td><td>Yes/No</td><td>No</td><td>Maps to OwlEventPageRequiresAttendance / RSVP</td></tr>
              <tr><td>Max Attendees</td><td>Number</td><td>No</td><td>Maps to OwlEventPageMaxAttendees / MaximumAttendees</td></tr>
              <tr><td>Event URL</td><td>Hyperlink</td><td>No</td><td>Preferred link target when present</td></tr>
              <tr><td>Promoted</td><td>Yes/No or Number</td><td>No</td><td>OwlPromoteItem / PromotedState used for featured events</td></tr>
            </tbody>
          </table>

          <h3>EventAttendees List Schema (for RSVP)</h3>
          <p>RSVP requires a separate list to store attendance records.</p>
          <ol>
            <li>Create a list named <strong>EventAttendees</strong> (or <strong>Event Attendees</strong>).</li>
            <li>Add the required columns below.</li>
            <li>Ensure users have Contribute permissions to submit RSVP responses.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>OwlEventPageItemId</td><td>Number</td><td>Yes</td><td>Event page item ID (variants supported: EventPageItemId, EventId)</td></tr>
              <tr><td>OwlEventUserId</td><td>Number</td><td>Yes</td><td>Current user ID (variants supported: UserId, AttendeeUserId)</td></tr>
              <tr><td>OwlEventIsAttending</td><td>Yes/No</td><td>Yes</td><td>RSVP state (variants supported: IsAttending, RSVP)</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Page 1: Basic Settings</h4>
          <table>
            <thead>
              <tr><th>Property</th><th>Type</th><th>Group</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Title & Navigation</td><td>Web part title (blank hides header row)</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Title & Navigation</td><td>Fluent UI icon for the header</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Title & Navigation</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Title & Navigation</td><td>Make title a link</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Title & Navigation</td><td>"View More" link text</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>Title & Navigation</td><td>"View More" link URL</td></tr>
              <tr><td><code>templateName</code></td><td>Dropdown</td><td>Display Options</td><td>List or Tile</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Display Options</td><td>1-6 (tile only)</td></tr>
              <tr><td><code>showPromotedItems</code></td><td>Toggle</td><td>Display Options</td><td>Sort promoted items first</td></tr>
              <tr><td><code>showDate</code></td><td>Toggle</td><td>Display Options</td><td>Show date</td></tr>
              <tr><td><code>showTime</code></td><td>Toggle</td><td>Display Options</td><td>Show time</td></tr>
              <tr><td><code>showAuthor</code></td><td>Toggle</td><td>Display Options</td><td>Show author</td></tr>
              <tr><td><code>showCategory</code></td><td>Toggle</td><td>Display Options</td><td>Show category label</td></tr>
              <tr><td><code>showTags</code></td><td>Toggle</td><td>Display Options</td><td>Show tags</td></tr>
              <tr><td><code>showLikes</code></td><td>Toggle</td><td>Display Options</td><td>Show likes count when available</td></tr>
              <tr><td><code>enableSearch</code></td><td>Toggle</td><td>Display Options</td><td>Show search box</td></tr>
              <tr><td><code>enableFilters</code></td><td>Toggle</td><td>Display Options</td><td>Show filter controls (page type, category, tags, date range)</td></tr>
              <tr><td><code>siteUrlMode</code></td><td>Dropdown</td><td>Data Source</td><td>Pick a site or enter a manual URL</td></tr>
              <tr><td><code>selectedSites</code></td><td>Site Picker</td><td>Data Source</td><td>Selected site when using Site Picker</td></tr>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Data Source</td><td>Manual site URL when Site Selection Mode = manual</td></tr>
              <tr><td><code>listId</code></td><td>List Picker</td><td>Data Source</td><td>Source list</td></tr>
              <tr><td><code>selectedCategories</code></td><td>Multi-select</td><td>Data Source</td><td>Pre-filter categories (optional)</td></tr>
              <tr><td><code>selectedTags</code></td><td>Multi-select</td><td>Data Source</td><td>Pre-filter tags (optional)</td></tr>
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
              <tr><td><code>enableContentTargeting</code></td><td>Toggle</td><td>Advanced</td><td>Content targeting by SharePoint group</td></tr>
              <tr><td><code>description</code></td><td>Text (multiline)</td><td>Advanced</td><td>Web part description</td></tr>
              <tr><td><code>helpUrl</code></td><td>Text</td><td>Advanced</td><td>Help documentation URL</td></tr>
            </tbody>
          </table>

          <h3>Data Source</h3>
          <p>
            Events Rollup reads from Site Pages by default and supports list selection by ID for rename resilience.
            If no list is selected, it tries <code>Pages</code>, <code>SitePages</code>, and <code>Site Pages</code>.
            Event URLs prefer an explicit URL field when present, with FileRef fallback.
          </p>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Two display templates (List, Tile)</li>
            <li>✅ Configurable grid layout (1-6 items per row)</li>
            <li>✅ Pagination with configurable page size</li>
            <li>✅ Promoted/featured item sorting</li>
            <li>✅ Search and filter UI (page type, category, tags, date range)</li>
            <li>✅ Metadata toggles (date, time, author, category, tags, likes)</li>
            <li>✅ Like count display (when available from linked page)</li>
            <li>✅ Event URL resolution from URL fields or page FileRef</li>
            <li>✅ Tile image extraction from page content</li>
            <li>✅ "View More" link configuration</li>
            <li>✅ Site picker and list picker</li>
            <li>✅ Content targeting (SharePoint groups)</li>
            <li>✅ Fixed height option</li>
            <li>✅ Cross-site data source</li>
            <li>✅ RSVP/attendance (EventAttendees list required)</li>
            <li>❌ Calendar view (not implemented)</li>
          </ul>

          <h3>Migration from Classic Bonzai</h3>
          <table>
            <thead>
              <tr><th>Classic Feature</th><th>Modern Equivalent</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>RSVP functionality</td><td>Available</td><td>Requires EventAttendees list + permissions</td></tr>
              <tr><td>Calendar view</td><td>Not available</td><td>Use SharePoint calendar</td></tr>
              <tr><td>Attendance tracking</td><td>Available</td><td>Stored in EventAttendees list</td></tr>
              <tr><td>Display templates</td><td>List, Tile</td><td>2 templates available</td></tr>
              <tr><td>View filtering</td><td>Not available</td><td>Use category/tags filters instead</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
