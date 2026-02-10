import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Star, FileText, Folder } from 'lucide-react';

export default function FavouriteDocumentsWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Favourite Documents</DocsTitle>
      <DocsDescription>
        Display documents marked as favourites using a SharePoint column filter (Showcase column).
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Documents
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Favourite Documents Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'A document library with a "Showcase" column (or custom column) to mark favourites',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Favourite Documents" from the Bonzai category.' },
              { title: 'Select a library and column', description: 'Choose the document library, set the Showcase column name and the value to filter by (e.g., "Favorite").' },
              { title: 'Configure display', description: 'Set max items, toggle file type and location display, then publish.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display documents marked as favourites in a SharePoint column',
              'Highlight important or featured documents',
              'Create a curated document showcase',
            ]}
            bestFor={[
              'Homepage — featured document showcase',
              'Dashboard pages — important files panel',
              'Document Center — alongside Document Portal',
              'Department pages — curated content',
            ]}
            notFor={[
              'Displaying all documents — use Documents Rollup',
              'Per-user favourites — this filters by a shared column value',
            ]}
            alternatives={[
              { name: 'Documents Rollup', when: 'show all documents with filtering' },
              { name: 'Document Portal', when: 'full search with personal favourites' },
            ]}
          />

          <h2>How Favourites Work</h2>
          <p>
            This web part filters documents from a SharePoint library based on a column value:
          </p>
          <ol>
            <li>Create a column in your document library (default name: &quot;Showcase&quot;)</li>
            <li>Set the column value to &quot;Favorite&quot; (or your custom value) for documents you want to feature</li>
            <li>The web part displays documents matching that column filter</li>
          </ol>

          <Callout type="info" title="Shared favourites">
            Unlike browser-based favourites, documents shown here are determined by the SharePoint column value.
            All users see the same favourited documents. To personalize, users can set their own column values.
          </Callout>

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Featured Documents"
              description="Show documents marked as favorites"
              useCase="Homepage sidebar"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Featured Documents' },
                { property: 'showcaseColumnName', value: 'Showcase' },
                { property: 'showcaseValue', value: 'Favorite' },
                { property: 'maxItems', value: '10' },
                { property: 'showFileType', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Important Policies"
              description="Filter by policy category"
              useCase="Policies page"
              icon={<FileText className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Key Policies' },
                { property: 'showcaseColumnName', value: 'Priority' },
                { property: 'showcaseValue', value: 'High' },
                { property: 'maxItems', value: '5' },
                { property: 'showSiteLocation', value: 'Off' },
              ]}
            />
            <RecipeCard
              title="Team Resources"
              description="Department curated documents"
              useCase="Team page"
              icon={<Folder className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Team Resources' },
                { property: 'showcaseColumnName', value: 'Team' },
                { property: 'showcaseValue', value: 'Marketing' },
                { property: 'usePaging', value: 'On' },
                { property: 'itemsPerPage', value: '5' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use a Choice column">
            Create a Choice column in your library with options like &quot;Favorite&quot;, &quot;Featured&quot;, &quot;Important&quot;
            to easily categorize and filter documents.
          </Callout>
          <Callout type="tip" title="Configure the column name">
            The default column name is &quot;Showcase&quot; with value &quot;Favorite&quot;. Customize these to match your library&apos;s column structure.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'No documents appearing', solution: 'Ensure documents have the Showcase column set to the configured value (default: "Favorite"). Check column name matches exactly.' },
              { problem: 'Wrong documents showing', solution: 'Verify the showcaseColumnName and showcaseValue match your library column configuration.' },
              { problem: 'Library not appearing in picker', solution: 'Ensure you are selecting a Document Library (not a list). Check siteUrl if using a different site.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Required Library Setup</h3>
          <p>Favourite Documents uses a document library and filters items by a Showcase-style column.</p>
          <ol>
            <li>Select an existing document library with files.</li>
            <li>Add a <strong>Showcase</strong> column (Choice or Text) if it does not exist.</li>
            <li>Set the Showcase value (default: <strong>Favorite</strong>) on documents you want to feature.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Document title (built-in)</td></tr>
              <tr><td>FileLeafRef</td><td>Single line of text</td><td>Yes</td><td>File name (built-in)</td></tr>
              <tr><td>FileRef</td><td>Hyperlink</td><td>Yes</td><td>Server-relative path (built-in)</td></tr>
              <tr><td>Modified</td><td>Date/Time</td><td>Yes</td><td>Used for sorting (built-in)</td></tr>
              <tr><td>Created</td><td>Date/Time</td><td>No</td><td>Fallback sort</td></tr>
              <tr><td>Author</td><td>Person</td><td>No</td><td>Displayed when available</td></tr>
              <tr><td>Showcase</td><td>Choice or Text</td><td>Yes</td><td>Column to filter by (default name). Add choice &quot;Favorite&quot; as an option.</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title displayed above the content</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (default: FavoriteStar)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>manageDocsUrl</code></td><td>Text</td><td>URL for the &quot;Show More&quot; link</td></tr>
              <tr><td><code>manageDocsText</code></td><td>Text</td><td>Text for the &quot;Show More&quot; link (default: Show More)</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the library is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>Document library to display files from</td></tr>
              <tr><td><code>showcaseColumnName</code></td><td>Text</td><td>Column name to filter by (default: Showcase)</td></tr>
              <tr><td><code>showcaseValue</code></td><td>Text</td><td>Value to look for in the column (default: Favorite)</td></tr>
            </tbody>
          </table>

          <h4>Display Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>maxItems</code></td><td>Slider (1-50)</td><td>Maximum number of documents to display</td></tr>
              <tr><td><code>showFileType</code></td><td>Toggle</td><td>Show file type icon (default: On)</td></tr>
              <tr><td><code>showSiteLocation</code></td><td>Toggle</td><td>Show site location (default: On)</td></tr>
              <tr><td><code>showAddedDate</code></td><td>Toggle</td><td>Show when document was added (default: Off)</td></tr>
            </tbody>
          </table>

          <h4>Paging Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>usePaging</code></td><td>Toggle</td><td>Enable pagination (default: Off)</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (3-20)</td><td>Items per page when paging is enabled</td></tr>
            </tbody>
          </table>

          <h4>Appearance</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto height)</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Filter by SharePoint column value</li>
            <li>✅ Configurable column name and value</li>
            <li>✅ File type icons</li>
            <li>✅ Site location display</li>
            <li>✅ Added date display</li>
            <li>✅ Pagination support</li>
            <li>✅ Custom title with icon and link</li>
            <li>✅ Show more link</li>
            <li>✅ Fixed height option</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
