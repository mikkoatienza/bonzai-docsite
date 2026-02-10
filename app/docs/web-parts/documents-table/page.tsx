import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Table, FileText, Settings } from 'lucide-react';

export default function DocumentsTableWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Documents Table</DocsTitle>
      <DocsDescription>
        Display documents in a paginated table format with configurable columns for name, modified date, author, size, and type.
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
            title="Get Documents Table Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'A document library with files',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Documents Table Rollup" from the Bonzai category.' },
              { title: 'Select a library', description: 'Choose your document library from the List picker in the property pane.' },
              { title: 'Configure columns', description: 'Toggle which columns to show (Name, Modified, Author, Size, Type) and set items per page.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display documents in a structured table',
              'Show metadata columns (author, modified, size, type)',
              'Create a file browser experience',
              'Provide a compact document listing',
            ]}
            bestFor={[
              'Document library pages — structured browsing',
              'Admin pages — file management',
              'Archive pages — historical documents',
              'Knowledge base pages — organized files',
            ]}
            notFor={[
              'Visual document display — use Documents Rollup',
              'Full search — use Document Portal',
              'Card-based layouts — use Documents Rollup',
            ]}
            alternatives={[
              { name: 'Documents Rollup', when: 'card-based or list display with thumbnails' },
              { name: 'Document Portal', when: 'search and refinement' },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Full Document Table"
              description="All columns visible with pagination"
              useCase="Document library page"
              icon={<Table className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Documents' },
                { property: 'showName', value: 'On' },
                { property: 'showModified', value: 'On' },
                { property: 'showAuthor', value: 'On' },
                { property: 'showSize', value: 'On' },
                { property: 'showType', value: 'On' },
                { property: 'itemsPerPage', value: '20' },
              ]}
            />
            <RecipeCard
              title="Compact File List"
              description="Name and modified date only"
              useCase="Dashboard widget"
              icon={<FileText className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Recent Files' },
                { property: 'showName', value: 'On' },
                { property: 'showModified', value: 'On' },
                { property: 'showAuthor', value: 'Off' },
                { property: 'showSize', value: 'Off' },
                { property: 'itemsPerPage', value: '10' },
              ]}
            />
            <RecipeCard
              title="Admin File View"
              description="Size and type for file management"
              useCase="Admin pages"
              icon={<Settings className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'File Manager' },
                { property: 'sortBy', value: 'size' },
                { property: 'showName', value: 'On' },
                { property: 'showSize', value: 'On' },
                { property: 'showType', value: 'On' },
                { property: 'itemsPerPage', value: '25' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Choose relevant columns">
            Only show columns that are useful for your audience. Hiding unnecessary columns makes the table cleaner.
          </Callout>
          <Callout type="tip" title="Set reasonable page size">
            10-20 items per page works well. Too many items can slow down the page.
          </Callout>
          <Callout type="pro" title="Use Show More link">
            Add a Show More URL to link to the full document library for users who need to browse more files.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Documents not showing', solution: 'Verify the library has documents and the correct library is selected in the List picker.' },
              { problem: 'Table too wide', solution: 'Reduce visible columns by toggling off less important ones (Size, Type).' },
              { problem: 'Column headers not showing', solution: 'Ensure "Show Table Headers" is toggled On in Display settings.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Document Library Schema</h3>
          <p>
            Documents Table uses standard document library fields. No custom columns are required, but you can add
            a Promoted/Featured column to support promoted filtering.
          </p>
          <ol>
            <li>Select an existing document library with files.</li>
            <li>Optional: add a <strong>Featured</strong> (Yes/No) or <strong>PromotedState</strong> (Number) field for promoted filtering.</li>
            <li>Ensure documents are published and accessible to viewers.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Default library field</td></tr>
              <tr><td>FileLeafRef</td><td>Single line of text</td><td>Yes</td><td>File name (built-in)</td></tr>
              <tr><td>FileRef</td><td>Hyperlink</td><td>Yes</td><td>Server-relative path (built-in)</td></tr>
              <tr><td>Modified</td><td>Date/Time</td><td>Yes</td><td>Used for sorting</td></tr>
              <tr><td>Created</td><td>Date/Time</td><td>No</td><td>Fallback sort</td></tr>
              <tr><td>Featured</td><td>Yes/No</td><td>No</td><td>Optional promoted filter (PromotedState also supported)</td></tr>
              <tr><td>PromotedState</td><td>Number</td><td>No</td><td>Optional promoted filter (SharePoint system field)</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title displayed above the table</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (e.g., Table)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for the footer link</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for the footer link</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the library is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>Document library to display files from</td></tr>
              <tr><td><code>sortBy</code></td><td>Dropdown</td><td>Sort by: Name, Modified Date, Created Date, or File Size</td></tr>
              <tr><td><code>showPromotedItems</code></td><td>Toggle</td><td>Show only promoted/featured documents</td></tr>
            </tbody>
          </table>

          <h4>Column Visibility</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>showName</code></td><td>Toggle</td><td>On</td><td>Show the document name column</td></tr>
              <tr><td><code>showModified</code></td><td>Toggle</td><td>On</td><td>Show the modified date column</td></tr>
              <tr><td><code>showAuthor</code></td><td>Toggle</td><td>On</td><td>Show the author column</td></tr>
              <tr><td><code>showSize</code></td><td>Toggle</td><td>On</td><td>Show the file size column</td></tr>
              <tr><td><code>showType</code></td><td>Toggle</td><td>Off</td><td>Show the file type column</td></tr>
            </tbody>
          </table>

          <h4>Display Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>itemsPerPage</code></td><td>Slider (5-50)</td><td>Number of documents to display per page</td></tr>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Show pagination controls</td></tr>
              <tr><td><code>showTableHeaders</code></td><td>Toggle</td><td>Show column headers in the table</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto height)</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Tabular document display</li>
            <li>✅ Configurable column visibility (Name, Modified, Author, Size, Type)</li>
            <li>✅ Multiple sort options</li>
            <li>✅ Pagination support</li>
            <li>✅ Show table headers toggle</li>
            <li>✅ Promoted items support</li>
            <li>✅ Custom title with icon and link</li>
            <li>✅ Show more link</li>
            <li>✅ Fixed height option</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
