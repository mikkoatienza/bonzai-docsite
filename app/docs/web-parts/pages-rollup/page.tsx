import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { FileText, List, Grid, Clock } from 'lucide-react';

export default function PagesRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Pages Rollup</DocsTitle>
      <DocsDescription>
        Display SharePoint pages with sorting, filtering, multiple templates (Default and Card), comments, likes, and content targeting.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Content
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Pages Rollup Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Site Pages or a custom list with pages',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Pages Rollup" from the Bonzai category.' },
              { title: 'Select source list and view', description: 'Choose your pages list from the List picker. Optionally select a view to filter.' },
              { title: 'Configure display', description: 'Choose template (Default or Card), set items per page, and configure sort order.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display recent pages on the homepage',
              'Show pages by category or tag (via views)',
              'Create a knowledge base listing',
              'Display child pages of a section',
            ]}
            bestFor={[
              'Homepage — recent pages widget',
              'Category pages — filtered content',
              'Documentation hubs — page listings',
            ]}
            notFor={[
              'News specifically — use News Rollup',
              'Featured content — use Spotlight Rollup',
            ]}
            alternatives={[
              { name: 'News Rollup', when: 'news-specific content' },
              { name: 'Spotlight Rollup', when: 'featured/promoted content' },
            ]}
          />

          <h2>Recent Updates</h2>
          <ul>
            <li>Image selection prefers higher-resolution page images to avoid low-res thumbnails.</li>
          </ul>

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Recent Pages List"
              description="Recent pages in list format"
              useCase="Homepage sidebar"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Recent Pages' },
                { property: 'templateName', value: 'default' },
                { property: 'sortBy', value: 'modified' },
                { property: 'itemsPerPage', value: '10' },
                { property: 'showPaging', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Page Cards Gallery"
              description="Cards with thumbnails"
              useCase="Department page"
              icon={<Grid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Pages' },
                { property: 'templateName', value: 'card' },
                { property: 'itemsPerRow', value: '3' },
                { property: 'itemsPerPage', value: '6' },
                { property: 'showComments', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Featured Pages"
              description="Promoted pages only"
              useCase="Landing page"
              icon={<FileText className="h-5 w-5" />}
              config={[
                { property: 'showPromotedOnly', value: 'On' },
                { property: 'templateName', value: 'card' },
                { property: 'itemsPerRow', value: '4' },
              ]}
            />
            <RecipeCard
              title="Knowledge Base"
              description="Alphabetical page listing"
              useCase="Documentation hub"
              icon={<Clock className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Knowledge Base' },
                { property: 'sortBy', value: 'title' },
                { property: 'templateName', value: 'default' },
                { property: 'itemsPerPage', value: '20' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Sort by Modified for recent content">
            Set Sort By to &quot;Modified&quot; to show the most recently updated pages.
          </Callout>
          <Callout type="tip" title="Use views for filtering">
            Create SharePoint views to filter pages by category, then select the view in the web part.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Pages not appearing', solution: 'Verify pages are published, not drafts. Check the list and view selection.' },
              { problem: 'Wrong pages showing', solution: 'Select a specific view to filter pages. Or enable "Show Promoted Only" to filter.' },
              { problem: 'Items per row not changing', solution: 'Items per row only applies to the Card template. Switch to Card view to enable this setting.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title displayed above the content</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (default: Page)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for the &quot;Show More&quot; link (default: See all pages)</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for the &quot;Show More&quot; link (empty = hidden)</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the pages library is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>Source list (e.g., Site Pages)</td></tr>
              <tr><td><code>viewName</code></td><td>View Picker</td><td>View to filter pages (depends on selected list)</td></tr>
              <tr><td><code>sortBy</code></td><td>Dropdown</td><td>Sort by: Modified, Created, or Title</td></tr>
            </tbody>
          </table>

          <h4>Display Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>templateName</code></td><td>Dropdown</td><td>Display template: Default (list) or Card</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Items per row (2-4), only for Card template</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (1-20)</td><td>Number of pages to display per page</td></tr>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Show pagination controls (default: On)</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto)</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
              <tr><td><code>showPromotedOnly</code></td><td>Toggle</td><td>Show only promoted/featured pages</td></tr>
              <tr><td><code>showComments</code></td><td>Toggle</td><td>Show comment count (default: On)</td></tr>
              <tr><td><code>showLikes</code></td><td>Toggle</td><td>Show like count (default: On)</td></tr>
              <tr><td><code>enableContentTargeting</code></td><td>Toggle</td><td>Filter content by user profile attributes</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Default and Card display templates</li>
            <li>✅ View-based filtering</li>
            <li>✅ Multiple sort options (Modified, Created, Title)</li>
            <li>✅ Pagination support</li>
            <li>✅ Promoted pages filtering</li>
            <li>✅ Comments and likes display</li>
            <li>✅ Content targeting</li>
            <li>✅ Configurable items per row (Card template)</li>
            <li>✅ Custom title with icon and link</li>
            <li>✅ Show more link</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
