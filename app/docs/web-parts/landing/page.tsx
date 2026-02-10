import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Grid, LayoutGrid, Columns, Square } from 'lucide-react';

export default function LandingWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Landing</DocsTitle>
      <DocsDescription>
        Display content tiles in grid layouts for landing page banners, with configurable overlays and content targeting.
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
            title="Get Landing Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'A SharePoint list with landing items (default: Bonzai_Landing)',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Landing" to a full-width section.' },
              { title: 'Select your list source', description: 'Choose your landing list from the List picker. Optionally select a view.' },
              { title: 'Configure grid layout', description: 'Set items per row (1-6), choose a template (Default or Description), and configure overlay settings.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Create landing page tile banners',
              'Display category navigation tiles',
              'Show featured content in a grid',
              'Build department or topic entry points',
            ]}
            bestFor={[
              'Homepage — main navigation grid',
              'Landing pages — category tiles',
              'Department pages — sub-section links',
            ]}
            notFor={[
              'News articles — use News Rollup',
              'Rotating content — use Slider',
            ]}
            alternatives={[
              { name: 'Pages Rollup', when: 'general page listings' },
              { name: 'Slider', when: 'rotating banner content' },
            ]}
          />

          <h2>Grid Layouts</h2>
          <p>Landing supports 1-6 items per row. Use wider layouts for prominent content:</p>
          <ul>
            <li><strong>1 column:</strong> Full-width hero banner</li>
            <li><strong>2 columns:</strong> Large feature tiles</li>
            <li><strong>3-4 columns:</strong> Standard navigation grid</li>
            <li><strong>5-6 columns:</strong> Compact category tiles</li>
          </ul>

          <h2>Templates</h2>
          <p>Two display templates are available:</p>
          <ul>
            <li><strong>Default:</strong> Image tiles with title overlay</li>
            <li><strong>Description:</strong> Image tiles with title and description overlay</li>
          </ul>

          <h2>Recent Updates</h2>
          <ul>
            <li>Supports SharePoint Image column values (modern Image field format) including attachment payloads.</li>
            <li>Improved image parsing to avoid broken tile thumbnails.</li>
            <li>Tiles now use a subtle 20% black overlay for better text contrast.</li>
          </ul>

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Homepage Navigation"
              description="Main navigation grid for homepage"
              useCase="Homepage"
              icon={<Grid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Explore' },
                { property: 'templateName', value: 'default' },
                { property: 'itemsPerRow', value: '4' },
                { property: 'showOverlay', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Department Tiles"
              description="Category tiles with descriptions"
              useCase="Landing page"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Departments' },
                { property: 'templateName', value: 'description' },
                { property: 'itemsPerRow', value: '3' },
                { property: 'overlayFontSize', value: '18' },
              ]}
            />
            <RecipeCard
              title="Hero Banner"
              description="Full-width single tile hero"
              useCase="Page header"
              icon={<Square className="h-5 w-5" />}
              config={[
                { property: 'itemsPerRow', value: '1' },
                { property: 'showOverlay', value: 'On' },
                { property: 'overlayFontSize', value: '24' },
              ]}
            />
            <RecipeCard
              title="Compact Navigation"
              description="Many category tiles"
              useCase="Directory page"
              icon={<Columns className="h-5 w-5" />}
              config={[
                { property: 'templateName', value: 'default' },
                { property: 'itemsPerRow', value: '6' },
                { property: 'showOverlay', value: 'On' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use overlay for readability">
            Enable &quot;Show Overlay&quot; to darken images and improve title visibility.
          </Callout>
          <Callout type="tip" title="Consistent image sizes">
            Use images with the same aspect ratio for a consistent grid layout.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Tiles not showing images', solution: 'Use a SharePoint Image column (recommended) or a valid hyperlink URL column such as ImageUrl.' },
              { problem: 'Tiles show but links do not work', solution: 'Ensure the list has a valid LinkUrl column (or equivalent). The service discovers link fields by name.' },
              { problem: 'Targeted tiles aren’t appearing', solution: 'Ensure TargetAudience values match SharePoint group names the user belongs to.' },
              { problem: 'Grid layout looks uneven', solution: 'Use images with similar aspect ratios across all items.' },
              { problem: 'View picker is disabled', solution: 'Select a list first. The view picker depends on the selected list.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Required List Schema</h3>
          <p>Create a SharePoint list (default name: Bonzai_Landing) with these columns:</p>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Tile title</td></tr>
              <tr><td>Description</td><td>Multiple lines of text</td><td>Tile description (for Description template)</td></tr>
              <tr><td>Image</td><td>Image (SharePoint Image column)</td><td>Tile background image (recommended, supports attachment payloads)</td></tr>
              <tr><td>ImageUrl</td><td>Hyperlink or URL</td><td>Alternative image URL column</td></tr>
              <tr><td>LinkUrl</td><td>Hyperlink or URL</td><td>Tile click destination</td></tr>
              <tr><td>SortOrder</td><td>Number</td><td>Display order (optional)</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Basic Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>templateName</code></td><td>Dropdown</td><td>Display template: Default or Description</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Grid columns (1-6)</td></tr>
              <tr><td><code>showOverlay</code></td><td>Toggle</td><td>Dark overlay on images for text readability</td></tr>
              <tr><td><code>overlayFontSize</code></td><td>Slider (12-32)</td><td>Font size for overlay text</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the list is located (empty = current site)</td></tr>
              <tr><td><code>listId</code></td><td>List Picker</td><td>Source list for landing items (default: Bonzai_Landing)</td></tr>
              <tr><td><code>viewId</code></td><td>View Picker</td><td>View to filter items (depends on selected list)</td></tr>
              <tr><td><code>enableContentTargeting</code></td><td>Toggle</td><td>Filter content by SharePoint group membership</td></tr>
            </tbody>
          </table>

          <h4>Layout Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-1000)</td><td>Fixed height in pixels (0 = auto)</td></tr>
            </tbody>
          </table>

          <h4>Advanced Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Web part description</td></tr>
              <tr><td><code>helpUrl</code></td><td>Text</td><td>Help documentation URL</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Default and Description templates</li>
            <li>✅ Configurable items per row (1-6)</li>
            <li>✅ Image overlay with configurable font size</li>
            <li>✅ View-based filtering</li>
            <li>✅ Content targeting by SharePoint group</li>
            <li>✅ Fixed height option</li>
            <li>✅ Custom title with link (blank title hides header row)</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
