import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Star, Globe, Link } from 'lucide-react';

export default function FavouriteSitesWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Favourite Sites</DocsTitle>
      <DocsDescription>
        Display sites marked as &quot;favourite&quot; in a SharePoint list for quick access.
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
            title="Get Favourite Sites Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'SharePoint list with site entries and a "Showcase" column',
            ]}
            steps={[
              { title: 'Prepare your site list', description: 'Create a SharePoint list with site entries (Title, URL, Description). Add a "Showcase" column to mark favourites.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Favourite Sites" from the Bonzai category.' },
              { title: 'Configure data source', description: 'Select your site list, specify the Showcase column name and value (e.g., "Favorite"), and publish.' },
            ]}
          />

          <Callout type="info" title="Column-based favouriting">
            Unlike browser-based favourites, this web part displays sites that have been explicitly 
            marked in a SharePoint list using a specific column and value (similar to Favourite Documents).
          </Callout>

          <WhenToUse
            useCases={[
              'Provide quick access to curated important sites',
              'Display organization-wide recommended sites',
              'Create a "Featured Sites" section',
            ]}
            bestFor={[
              'Homepage — featured sites panel',
              'Dashboard pages — quick access to key sites',
              'Navigation hub — curated site shortcuts',
            ]}
            notFor={[
              'Search-based site discovery — use Site Directory',
              'Generic link lists — use Advanced Links',
              'Per-user browser-based bookmarks',
            ]}
            alternatives={[
              { name: 'Site Directory', when: 'searchable site catalog using SharePoint Search' },
              { name: 'Advanced Links', when: 'custom link collections' },
            ]}
          />

          <h2>How Favouriting Works</h2>
          <p>
            Favourite Sites displays sites that have been marked in a SharePoint list using a specific column and value.
            For example, if you have a &quot;Site Directory&quot; list, you can add a column named &quot;Showcase&quot; 
            and set the value to &quot;Favorite&quot; for sites you want to appear in this web part.
          </p>
          <ol>
            <li>Create or use an existing SharePoint list with site information</li>
            <li>Add a column (e.g., &quot;Showcase&quot;) to mark sites as favourites</li>
            <li>Set the column value (e.g., &quot;Favorite&quot;) on sites you want to feature</li>
            <li>Configure the web part to read from that list and filter by the column/value</li>
          </ol>

          <h2>Required List Schema</h2>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Site display name</td></tr>
              <tr><td>URL</td><td>Hyperlink</td><td>Yes</td><td>Site URL</td></tr>
              <tr><td>Description</td><td>Multiple lines of text</td><td>No</td><td>Site description</td></tr>
              <tr><td>Owner</td><td>Person or Text</td><td>No</td><td>Site owner information</td></tr>
              <tr><td>Showcase</td><td>Single line of text or Choice</td><td>No</td><td>Column for marking favourites (e.g., value = &quot;Favorite&quot;)</td></tr>
            </tbody>
          </table>

          <h2>Common Configurations</h2>
          <RecipeGrid>
            <RecipeCard
              title="Featured Sites Panel"
              description="Display curated important sites"
              useCase="Homepage"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Featured Sites' },
                { property: 'listName', value: 'Site Directory' },
                { property: 'showcaseColumnName', value: 'Showcase' },
                { property: 'showcaseValue', value: 'Favorite' },
                { property: 'maxItems', value: '6' },
                { property: 'showDescription', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Quick Site Access"
              description="Compact list of key sites"
              useCase="Dashboard widget"
              icon={<Globe className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'My Sites' },
                { property: 'listName', value: 'Site Directory' },
                { property: 'showcaseColumnName', value: 'Showcase' },
                { property: 'showcaseValue', value: 'Favorite' },
                { property: 'maxItems', value: '10' },
                { property: 'showDescription', value: 'Off' },
                { property: 'usePaging', value: 'Off' },
              ]}
            />
            <RecipeCard
              title="Paginated Site List"
              description="Full list with pagination"
              useCase="Dedicated sites page"
              icon={<Link className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Bookmarked Sites' },
                { property: 'listName', value: 'Site Directory' },
                { property: 'showcaseColumnName', value: 'Showcase' },
                { property: 'showcaseValue', value: 'Favorite' },
                { property: 'usePaging', value: 'On' },
                { property: 'itemsPerPage', value: '5' },
                { property: 'showOwner', value: 'On' },
                { property: 'manageSitesText', value: 'View All Sites' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use a consistent Showcase value">
            Use a consistent value like &quot;Favorite&quot; or &quot;Featured&quot; across all your favourite sites to ensure they appear correctly.
          </Callout>
          <Callout type="pro" title="Combine with Site Directory">
            Use this web part alongside Site Directory. Site Directory provides search functionality while Favourite Sites shows curated content.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Favourites empty', solution: 'Verify your list has items with the correct Showcase column value. Check that "Showcase Column Name" and "Showcase Value" in the property pane match your list exactly (case-sensitive).' },
              { problem: 'Wrong sites appearing', solution: 'Double-check the Showcase column name and value. Ensure you are selecting the correct SharePoint list.' },
              { problem: 'Paging not working', solution: 'Ensure "Use Paging" is toggled on and "Items Per Page" is set to a valid number.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (default: Globe)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>manageSitesUrl</code></td><td>Text</td><td>URL for the &quot;Browse All Sites&quot; link</td></tr>
              <tr><td><code>manageSitesText</code></td><td>Text</td><td>Text for the browse link (default: Browse All Sites)</td></tr>
            </tbody>
          </table>

          <h4>Data Source</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the list is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>SharePoint list containing site information</td></tr>
              <tr><td><code>showcaseColumnName</code></td><td>Text</td><td>Column name to filter by (default: Showcase)</td></tr>
              <tr><td><code>showcaseValue</code></td><td>Text</td><td>Value to look for in the column (default: Favorite)</td></tr>
            </tbody>
          </table>

          <h4>Display Options</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>maxItems</code></td><td>Slider (1-50)</td><td>Maximum sites to display</td></tr>
              <tr><td><code>showDescription</code></td><td>Toggle</td><td>Show site descriptions (default: On)</td></tr>
              <tr><td><code>showOwner</code></td><td>Toggle</td><td>Show site owner (default: Off)</td></tr>
            </tbody>
          </table>

          <h4>Paging</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>usePaging</code></td><td>Toggle</td><td>Enable pagination (default: Off)</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (3-20)</td><td>Items per page when pagination is enabled</td></tr>
            </tbody>
          </table>

          <h4>Appearance</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto)</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Column-based favourite filtering</li>
            <li>✅ Configurable title with icon</li>
            <li>✅ Pagination support</li>
            <li>✅ Show/hide site details (description, owner)</li>
            <li>✅ Cross-site list support</li>
            <li>✅ Chrome type options</li>
            <li>✅ Fixed height option</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
