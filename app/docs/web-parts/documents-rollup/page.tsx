import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { FileText, FolderOpen, Grid, List } from 'lucide-react';

export default function DocumentsRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Documents Rollup</DocsTitle>
      <DocsDescription>
        Display documents from SharePoint libraries with default list or card layouts, sorting, pagination, and view filtering.
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
            title="Get Documents Rollup Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'A document library with files',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Documents Rollup" from the Bonzai category.' },
              { title: 'Select a library', description: 'Choose your document library from the List picker in the property pane.' },
              { title: 'Configure display', description: 'Set template (Default or Card), sort order, and items per page, then publish.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display recent documents on a page',
              'Show department-specific files',
              'Create a simple document gallery',
              'Highlight featured documents',
            ]}
            bestFor={[
              'Homepage — recent documents widget',
              'Department pages — team documents',
              'Landing pages — featured file showcase',
            ]}
            notFor={[
              'Full search experience — use Document Portal',
              'Tabular data view — use Documents Table',
            ]}
            alternatives={[
              { name: 'Document Portal', when: 'full search and refinement' },
              { name: 'Documents Table', when: 'tabular view with sorting' },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Recent Documents"
              description="Show recently modified documents"
              useCase="Homepage sidebar"
              icon={<FileText className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Recent Documents' },
                { property: 'templateName', value: 'default' },
                { property: 'sortBy', value: 'modified' },
                { property: 'itemsPerPage', value: '10' },
                { property: 'showPaging', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Document Cards Gallery"
              description="Card layout with thumbnails"
              useCase="Department page"
              icon={<Grid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Department Files' },
                { property: 'templateName', value: 'card' },
                { property: 'itemsPerRow', value: '4' },
                { property: 'itemsPerPage', value: '12' },
                { property: 'showPaging', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Featured Documents"
              description="Show only promoted documents"
              useCase="Landing page"
              icon={<FolderOpen className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Featured Documents' },
                { property: 'showPromotedItems', value: 'On' },
                { property: 'templateName', value: 'card' },
                { property: 'itemsPerRow', value: '3' },
              ]}
            />
            <RecipeCard
              title="Compact Document List"
              description="Minimal list with link to library"
              useCase="Dashboard widget"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Documents' },
                { property: 'templateName', value: 'default' },
                { property: 'itemsPerPage', value: '5' },
                { property: 'showMoreText', value: 'View all documents' },
                { property: 'showMoreUrl', value: '/sites/docs/Documents' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Sort by Modified date">
            Set &quot;Sort By&quot; to Modified to show the most recently updated documents first.
          </Callout>
          <Callout type="tip" title="Use views for filtering">
            Create SharePoint views to filter documents, then select that view in the web part.
          </Callout>
          <Callout type="pro" title="Card layout for visual content">
            Use the Card template with 3-4 items per row for document libraries with images or visual content.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Documents not showing', solution: 'Verify the library has documents and the correct library is selected. Check that the view (if selected) returns items.' },
              { problem: 'Wrong files appearing', solution: 'Check the view filter or create a filtered view in the document library, then select it in the web part.' },
              { problem: 'Items per row not working', solution: 'Items per row only applies when using the Card template. Switch to Card view to enable this setting.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Document Library Schema</h3>
          <p>
            Documents Rollup uses standard document library fields. No custom columns are required, but you can add
            a Promoted/Featured column to mark promoted documents.
          </p>
          <ol>
            <li>Select an existing document library with files.</li>
            <li>Optional: add a <strong>Featured</strong> (Yes/No) or <strong>PromotedState</strong> (Number) field for promoted filtering.</li>
            <li>If using promoted filtering, set the field value on documents you want to feature.</li>
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
              <tr><td><code>title</code></td><td>Text</td><td>Web part title displayed above the content</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (e.g., DocumentSet, Document)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for the &quot;Show More&quot; link in footer</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for the &quot;Show More&quot; link (empty = hidden)</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the library is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>Document library to display files from</td></tr>
              <tr><td><code>viewName</code></td><td>View Picker</td><td>View to filter documents (depends on selected library)</td></tr>
              <tr><td><code>sortBy</code></td><td>Dropdown</td><td>Sort by: Name, Modified Date, Created Date, or File Size</td></tr>
              <tr><td><code>showPromotedItems</code></td><td>Toggle</td><td>Show only promoted/featured documents</td></tr>
            </tbody>
          </table>

          <h4>Display Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>templateName</code></td><td>Dropdown</td><td>Display template: Default (list) or Card</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Items per row in Card view (2-6), only for Card template</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (5-50)</td><td>Number of documents to display per page</td></tr>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Show pagination controls</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto height)</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
              <tr><td><code>enableContentTargeting</code></td><td>Toggle</td><td>Filter content by user profile attributes</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ List and Card display templates</li>
            <li>✅ View-based filtering</li>
            <li>✅ Multiple sort options (Name, Modified, Created, Size)</li>
            <li>✅ Pagination support</li>
            <li>✅ Promoted/featured items support</li>
            <li>✅ Content targeting</li>
            <li>✅ Configurable items per row (Card view)</li>
            <li>✅ Custom title with icon and link</li>
            <li>✅ Show more link</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
