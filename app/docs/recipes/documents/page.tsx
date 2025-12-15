import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Step } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function DocumentsRecipe() {
  return (
    <DocsPage>
      <DocsTitle>Documents Page Recipe</DocsTitle>
      <DocsDescription>
        Build a complete document management page with search, rollups, tables, and favourites.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Documents
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              4 Web Parts
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              ~15 minutes
            </span>
          </div>

          <h2>Overview</h2>
          <p>
            This recipe creates a comprehensive document management page with 
            full-text search, recent documents, tabular browsing, and user favourites.
          </p>

          <h2>Page Layout</h2>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="space-y-3">
              <div className="rounded bg-amber-100 p-3 text-center text-sm font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                Section 1: Full Width — Document Portal (Search)
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded bg-blue-100 p-3 text-center text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  Left (50%) — Documents Rollup
                </div>
                <div className="flex-1 rounded bg-green-100 p-3 text-center text-sm font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                  Right (50%) — Documents Table
                </div>
              </div>
              <div className="rounded bg-yellow-100 p-3 text-center text-sm font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                Section 3: Full Width — Favourite Documents
              </div>
            </div>
          </div>

          <h2>Step-by-Step Setup</h2>

          <Step number={1} title="Create the Documents Page">
            <ol>
              <li>Go to <strong>Site Contents → Site Pages → + New → Page</strong></li>
              <li>Name the page <strong>"Documents"</strong></li>
              <li>Add to site navigation</li>
            </ol>
          </Step>

          <Step number={2} title="Add Section 1: Document Portal" tip="Document Portal works best as the primary feature in full width">
            <p>Add a full-width section for the main document search.</p>
            <p><strong>Add web part:</strong> Bonzai Document Portal</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Document Search</td></tr>
                <tr><td>Show Refiners</td><td>Yes</td></tr>
                <tr><td>Show Sort</td><td>Yes</td></tr>
                <tr><td>Results Per Page</td><td>10</td></tr>
                <tr><td>Title Icon</td><td>DocumentSearch</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={3} title="Add Section 2: Two Columns (50%/50%)">
            <p>Add a two-column section for rollup and table views.</p>
            <p><strong>Left Column:</strong> Bonzai Documents Rollup</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Recent Documents</td></tr>
                <tr><td>Library</td><td>Documents</td></tr>
                <tr><td>Template</td><td>Cards</td></tr>
                <tr><td>Items Per Page</td><td>5</td></tr>
                <tr><td>Sort By</td><td>Modified</td></tr>
                <tr><td>Title Icon</td><td>DocumentSet</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={4} title="Add Documents Table to Right Column">
            <p><strong>Right Column:</strong> Bonzai Documents Table</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>All Documents</td></tr>
                <tr><td>Library</td><td>Documents</td></tr>
                <tr><td>Items Per Page</td><td>10</td></tr>
                <tr><td>Show Pagination</td><td>Yes</td></tr>
                <tr><td>Sortable Columns</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>Table</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={5} title="Add Section 3: Favourite Documents">
            <p>Add a full-width section for user favourites.</p>
            <p><strong>Add web part:</strong> Bonzai Favourite Documents</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>My Favorites</td></tr>
                <tr><td>Library</td><td>Documents</td></tr>
                <tr><td>Showcase Value</td><td>Favorite</td></tr>
                <tr><td>Title Icon</td><td>FavoriteStar</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
                <tr><td>Fixed Height</td><td>250</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={6} title="Publish and Test">
            <ol>
              <li>Save and publish the page</li>
              <li>Add to site navigation</li>
              <li>Test document search functionality</li>
              <li>Verify refiners and sorting work</li>
              <li>Test adding documents to favourites</li>
            </ol>
          </Step>

          <Callout type="warning" title="Allow time for search indexing">
            New documents may take 15-30 minutes to appear in Document Portal search results. 
            SharePoint indexes content periodically, not in real-time.
          </Callout>

          <h2>Document Libraries</h2>

          <p>This page works with the default Documents library. You can also:</p>

          <ul>
            <li>Create additional libraries for specific document types</li>
            <li>Use managed metadata for better filtering</li>
            <li>Set up content types for categorization</li>
          </ul>

          <Troubleshooting
            items={[
              {
                problem: 'Document Portal search returns no results',
                solution: 'Ensure documents have been indexed by SharePoint search. Wait 15-30 minutes for new uploads.',
              },
              {
                problem: 'Documents Rollup is empty',
                solution: 'Verify the Documents library exists and contains files. Check the Library property points to the correct library.',
              },
              {
                problem: 'Favourites not saving',
                solution: 'Users must be signed in. Favourites are stored per-user in browser storage.',
              },
              {
                problem: 'Table columns not sortable',
                solution: 'Enable "Sortable Columns" in the property pane. Some column types may not support sorting.',
              },
            ]}
          />

          <h2>Final Checklist</h2>

          <ul>
            <li>☐ Document Portal search working</li>
            <li>☐ Refinement filters functional</li>
            <li>☐ Documents Rollup showing recent files</li>
            <li>☐ Documents Table displaying with pagination</li>
            <li>☐ Favourite Documents panel visible</li>
            <li>☐ Starring documents adds to favourites</li>
            <li>☐ Page added to navigation</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}



