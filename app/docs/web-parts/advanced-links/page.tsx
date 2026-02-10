import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Link, Grid, List, FileText } from 'lucide-react';

export default function AdvancedLinksWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Advanced Links</DocsTitle>
      <DocsDescription>
        Display link collections with multiple display styles: list, tiles, descriptions, text only, or image gallery.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              Navigation
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Advanced Links Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Either a SharePoint list with links (Title, URL columns required) or Manual Links mode',
            ]}
            steps={[
              { title: 'Choose your data source', description: 'Select SharePoint List or Manual Links mode in the property pane.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Advanced Links" from the Bonzai category.' },
              { title: 'Configure and publish', description: 'Select a display style, configure pagination, and publish.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Create quick links sections',
              'Display resource links with descriptions',
              'Build navigation menus with icons',
              'Organize external tool links',
            ]}
            bestFor={[
              'Homepage — quick links widget',
              'Resource pages — categorized links',
              'Department pages — team resources',
            ]}
            notFor={[
              'Site directory — use Site Directory',
              'Page listings — use Pages Rollup',
            ]}
            alternatives={[
              { name: 'Site Directory', when: 'SharePoint site listings' },
              { name: 'Landing', when: 'visual tile navigation' },
            ]}
          />

          <h2>Display Styles</h2>
          <ul>
            <li><strong>List with Icons:</strong> Vertical list with icons (default)</li>
            <li><strong>Tiles:</strong> Icon tiles in a grid layout</li>
            <li><strong>Links with Descriptions:</strong> Detailed link cards with descriptions</li>
            <li><strong>Text Only:</strong> Simple text links without icons</li>
            <li><strong>Image Gallery:</strong> Grid of image tiles with overlay text</li>
          </ul>

          <h2>Data Source Modes</h2>
          <ul>
            <li><strong>SharePoint List:</strong> Use a links list with Title and URL columns</li>
            <li><strong>Manual Links:</strong> Add links directly in the web part settings</li>
          </ul>

          <h3>Manual Links Fields</h3>
          <ul>
            <li><strong>Type:</strong> Link or Divider</li>
            <li><strong>Title:</strong> Display text</li>
            <li><strong>URL:</strong> Link destination</li>
            <li><strong>Description:</strong> Optional description</li>
            <li><strong>Icon:</strong> Dropdown with auto-detect</li>
            <li><strong>Image:</strong> File picker (stock, OneDrive, site files, upload)</li>
            <li><strong>Open in New Tab:</strong> Toggle</li>
          </ul>

          <h2>Recent Updates</h2>
          <ul>
            <li>Title icon now uses an icon picker with visual browsing.</li>
            <li>New Manual Links mode for list-free configurations.</li>
            <li>New Image Gallery display style.</li>
            <li>Pagination now works across all display styles (showPaging + itemsPerPage).</li>
          </ul>

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Quick Links List"
              description="Vertical list with icons"
              useCase="Homepage sidebar"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Quick Links' },
                { property: 'displayStyle', value: 'list' },
                { property: 'iconSize', value: 'small' },
              ]}
            />
            <RecipeCard
              title="App Tiles"
              description="Grid of link tiles"
              useCase="App launcher"
              icon={<Grid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Applications' },
                { property: 'displayStyle', value: 'tile' },
                { property: 'numberOfLinks', value: '4' },
                { property: 'showPaging', value: 'On' },
                { property: 'itemsPerPage', value: '12' },
                { property: 'iconSize', value: 'large' },
              ]}
            />
            <RecipeCard
              title="Resource Cards"
              description="Links with descriptions"
              useCase="Resource page"
              icon={<FileText className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Resources' },
                { property: 'displayStyle', value: 'description' },
                { property: 'numberOfLinks', value: '3' },
                { property: 'showPaging', value: 'On' },
                { property: 'itemsPerPage', value: '9' },
              ]}
            />
            <RecipeCard
              title="Footer Links"
              description="Text-only compact links"
              useCase="Page footer"
              icon={<Link className="h-5 w-5" />}
              config={[
                { property: 'displayStyle', value: 'text' },
                { property: 'showPaging', value: 'Off' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use Fluent UI icons">
            The Icon column in your list should contain Fluent UI icon names (e.g., &quot;Home&quot;, &quot;Mail&quot;, &quot;Calendar&quot;).
          </Callout>
          <Callout type="tip" title="Use the title icon picker">
            Title icons are selected via a visual picker. Use a custom icon URL only when necessary.
          </Callout>
          <Callout type="tip" title="Custom tile colors">
            In Tile mode, you can customize icon and tile background colors for branded navigation.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Links not appearing', solution: 'Verify the list has items and the correct list is selected. Check that the list is in the current site or specify the Site URL.' },
              { problem: 'Icons not showing', solution: 'Check icon names are valid Fluent UI icons in your list data.' },
              { problem: 'Items per row not working', solution: 'Items per row only applies to Tile, Description, and Image Gallery styles.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Links List Schema</h3>
          <p>Create a SharePoint list with these columns:</p>
          <Callout type="info" title="Manual Links mode bypasses the list">
            If you choose Manual Links, you can skip list setup and define links directly in the web part.
          </Callout>
          <ol>
            <li>Create a list to store link items.</li>
            <li>Add required Title and URL fields.</li>
            <li>Optional: add Icon, Description, Category, Parent, and ordering fields for richer layouts.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Link display text</td></tr>
              <tr><td>URL</td><td>Hyperlink</td><td>Yes</td><td>Link destination URL (URL/Link/Url fields supported)</td></tr>
              <tr><td>Icon</td><td>Single line of text</td><td>No</td><td>Fluent UI icon name</td></tr>
              <tr><td>Description</td><td>Multiple lines of text</td><td>No</td><td>Link description (for Description style)</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td><td>Category for grouping</td></tr>
              <tr><td>Parent</td><td>Number or Text</td><td>No</td><td>Parent link reference for grouping</td></tr>
              <tr><td>OpenInNewWindow</td><td>Yes/No</td><td>No</td><td>Open link in a new tab</td></tr>
              <tr><td>LinkOrder</td><td>Number</td><td>No</td><td>Sort order (Order/ItemOrder also supported)</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title (default: Links)</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Fluent UI icon picker (default: Link)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>dataSourceMode</code></td><td>Dropdown</td><td>SharePoint List or Manual Links</td></tr>
              <tr><td><code>siteSelectionMode</code></td><td>Dropdown</td><td>Select from available sites or enter site URL manually</td></tr>
              <tr><td><code>sitePicker</code></td><td>Picker</td><td>Site dropdown (picker mode)</td></tr>
              <tr><td><code>subsitePicker</code></td><td>Dropdown</td><td>Cascading subsite dropdown (picker mode)</td></tr>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Manual site URL (manual mode)</td></tr>
              <tr><td><code>listId</code></td><td>List Picker</td><td>Links list (updates based on selected site)</td></tr>
            </tbody>
          </table>

          <h4>Display Options</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>displayStyle</code></td><td>Dropdown</td><td>Display style: List, Tiles, Descriptions, Text, Image Gallery</td></tr>
              <tr><td><code>iconSize</code></td><td>Dropdown</td><td>Icon size: Small, Medium, Large</td></tr>
              <tr><td><code>numberOfLinks</code></td><td>Dropdown</td><td>Items per row (1-6, for Tile and Description styles)</td></tr>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Enable pagination</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (3-50)</td><td>Items per page when pagination is enabled</td></tr>
            </tbody>
          </table>

          <h4>Tile Options (Tile display style only)</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>fontSize</code></td><td>Slider (10-24)</td><td>Font size for tile text</td></tr>
              <tr><td><code>tileHeight</code></td><td>Slider</td><td>Tile height in pixels (0 = auto)</td></tr>
              <tr><td><code>iconColor</code></td><td>Text</td><td>Icon color (hex code)</td></tr>
              <tr><td><code>tileColor</code></td><td>Text</td><td>Tile background color (hex code)</td></tr>
            </tbody>
          </table>

          <h4>Gallery Options (Image Gallery display style only)</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>galleryHeight</code></td><td>Slider</td><td>Gallery height in pixels</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Five display styles (List, Tiles, Descriptions, Text, Image Gallery)</li>
            <li>✅ Configurable icon sizes</li>
            <li>✅ Custom tile colors</li>
            <li>✅ Pagination support across all styles</li>
            <li>✅ Manual Links mode (no list required)</li>
            <li>✅ Auto-loading list picker</li>
            <li>✅ Custom title with icon and link</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
