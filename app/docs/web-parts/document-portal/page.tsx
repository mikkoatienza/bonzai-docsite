import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { FileSearch, Filter, FolderOpen, Star } from 'lucide-react';

export default function DocumentPortalWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Document Portal</DocsTitle>
      <DocsDescription>
        Full-featured document search with typeahead, filtering, and refinement panels.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Documents
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 85%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Document Portal Working in 3 Steps"
            time="3 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Documents in a SharePoint library (indexed by search)',
            ]}
            steps={[
              {
                title: 'Add the web part to a full-width section',
                description: 'Edit the page, add a full-width section, click + and search for "Document Portal".',
              },
              {
                title: 'Configure search scope',
                description: 'Open the property pane and set the search scope to your document library or site path.',
              },
              {
                title: 'Enable refinement and favourites',
                description: 'Toggle on "Show Refinement" and "Show Favourites" for the full experience, then publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Create a dedicated document search center',
              'Enable users to find documents across multiple libraries',
              'Provide document filtering by type, author, date, or custom metadata',
              'Allow users to bookmark frequently accessed documents',
              'Build a department-specific document repository page',
            ]}
            bestFor={[
              'Document Center page — dedicated full-page experience',
              'Department landing page — filtered to department documents',
              'Knowledge base page — searchable documentation library',
              'Policies page — regulatory and policy documents',
            ]}
            notFor={[
              'Displaying a fixed list of specific documents — use Documents Rollup',
              'Showing recent documents only — use Documents Rollup with date filter',
              'Simple file list without search — use Documents Table',
            ]}
            alternatives={[
              { name: 'Documents Rollup', when: 'simple document list or cards' },
              { name: 'Documents Table', when: 'tabular view without search' },
              { name: 'Favourite Documents', when: 'bookmarked documents only' },
            ]}
          />

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create a new page for your Document Portal',
                description: 'Go to Site Pages, create a new page named "Document Center" or "Documents". Use a single-column layout for best results.',
                tip: 'Document Portal works best as the main content on a dedicated page.',
              },
              {
                title: 'Add a full-width section',
                description: 'In edit mode, add a new section with a full-width layout. This gives the portal maximum space.',
              },
              {
                title: 'Add the Document Portal web part',
                description: 'Click the + button, search for "Document Portal", and add it to the full-width section.',
              },
              {
                title: 'Set the search scope',
                description: 'Open the property pane and configure the Search Scope. Use a site URL, library path, or leave empty for all content.',
                tip: 'To limit to one library: /sites/intranet/Shared%20Documents',
              },
              {
                title: 'Enable typeahead search',
                description: 'Toggle "Show Typeahead" to enable search suggestions as users type.',
              },
              {
                title: 'Configure the refinement panel',
                description: 'Toggle "Show Refinement" to enable the filter sidebar. Users can filter by file type, author, date, and custom metadata.',
              },
              {
                title: 'Enable the favourites panel',
                description: 'Toggle "Show Favourites" to display a panel where users can see their bookmarked documents.',
              },
              {
                title: 'Set results per page',
                description: 'Configure how many documents appear per page. 10-20 is typical for a comfortable browsing experience.',
              },
              {
                title: 'Publish and test search',
                description: 'Save and publish. Test by searching for known documents and verifying refinement filters work.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Company Document Center"
              description="Full-featured search for all company documents"
              useCase="Dedicated document search page"
              icon={<FileSearch className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Document Center' },
                { property: 'Search Scope', value: '/sites/intranet' },
                { property: 'Show Typeahead', value: 'Yes' },
                { property: 'Show Refinement', value: 'Yes' },
                { property: 'Show Favourites', value: 'Yes' },
                { property: 'Results Per Page', value: '20' },
              ]}
            />
            <RecipeCard
              title="Department Documents"
              description="Scoped to a specific team's library"
              useCase="Team or department page"
              icon={<FolderOpen className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'HR Documents' },
                { property: 'Search Scope', value: '/sites/HR/Documents' },
                { property: 'Show Typeahead', value: 'Yes' },
                { property: 'Show Refinement', value: 'Yes' },
                { property: 'Results Per Page', value: '15' },
              ]}
            />
            <RecipeCard
              title="Policy Repository"
              description="Filtered to policy documents only"
              useCase="Compliance and policy pages"
              icon={<Filter className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Policies & Procedures' },
                { property: 'Search Scope', value: '/sites/policies' },
                { property: 'Show Refinement', value: 'Yes' },
                { property: 'Show Favourites', value: 'Yes' },
              ]}
            />
            <RecipeCard
              title="My Documents Quick Access"
              description="Favourites-focused for personal bookmarks"
              useCase="Personal dashboard pages"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'My Documents' },
                { property: 'Show Favourites', value: 'Yes (Primary)' },
                { property: 'Show Typeahead', value: 'Yes' },
                { property: 'Results Per Page', value: '10' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Allow time for search indexing">
            Newly uploaded documents may take 15-30 minutes to appear in search results. 
            SharePoint search crawls content periodically, not in real-time.
          </Callout>

          <Callout type="tip" title="Use specific search scopes for performance">
            Narrowing the search scope to a specific site or library improves query speed 
            and gives users more relevant results.
          </Callout>

          <Callout type="pro" title="Add metadata for better refinement">
            Documents with rich metadata (document type, department, project) enable 
            more useful refinement filters. Encourage content owners to tag documents.
          </Callout>

          <Callout type="warning" title="Verify permissions before publishing">
            Document Portal respects SharePoint permissions. Users will only see documents 
            they have access to. Test with a regular user account before launch.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Documents not appearing in search results',
                solution: 'Ensure documents have been indexed by SharePoint search. New or recently uploaded files may take 15-30 minutes to appear.',
                details: 'You can request a re-crawl via Site Settings → Search and offline availability → Reindex site.',
              },
              {
                problem: 'Refinement filters not showing expected values',
                solution: 'Refinement is based on managed properties configured in SharePoint search schema. Contact your admin to verify custom properties are mapped.',
              },
              {
                problem: 'Typeahead suggestions are slow or missing',
                solution: 'Typeahead uses the SharePoint search suggest API. Ensure users have permission to the content and that search is functioning normally.',
              },
              {
                problem: 'Favourites not persisting',
                solution: 'Favourites are stored per-user. Ensure users are signed in. Clearing browser data may reset favourites.',
              },
              {
                problem: 'Results from wrong site or library',
                solution: 'Check the Search Scope property. Ensure it points to the correct site or library path. Use full URLs for clarity.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Related Components</h3>
          <p>Document Portal works with companion components:</p>
          <ul>
            <li><strong>Favourite Documents:</strong> User bookmarks for documents</li>
            <li><strong>Document Portal Refinement:</strong> Filtering/refinement panel (can be separate or embedded)</li>
          </ul>

          <h3>Property Pane Configuration</h3>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>Text</td>
                <td>Web part title</td>
              </tr>
              <tr>
                <td><code>searchScope</code></td>
                <td>Text</td>
                <td>Search scope/path (site or library URL)</td>
              </tr>
              <tr>
                <td><code>showTypeahead</code></td>
                <td>Toggle</td>
                <td>Enable typeahead suggestions</td>
              </tr>
              <tr>
                <td><code>showRefinement</code></td>
                <td>Toggle</td>
                <td>Show refinement filter panel</td>
              </tr>
              <tr>
                <td><code>showFavourites</code></td>
                <td>Toggle</td>
                <td>Show favourites panel</td>
              </tr>
              <tr>
                <td><code>resultsPerPage</code></td>
                <td>Number</td>
                <td>Results displayed per page</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Full-text document search</li>
            <li>✅ Typeahead suggestions</li>
            <li>✅ Result filtering</li>
            <li>✅ Favourites integration</li>
            <li>✅ Refinement panel</li>
            <li>✅ Pagination</li>
            <li>✅ File type icons</li>
            <li>✅ Preview links</li>
            <li>⚠️ Refinement may be embedded or separate component</li>
          </ul>

          <h3>Migration from Classic</h3>

          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Classic</th>
                <th>Modern</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Technology</td>
                <td>JSOM + CAML queries</td>
                <td>SPFx + SharePoint Search REST API</td>
              </tr>
              <tr>
                <td>Typeahead</td>
                <td>Brick configuration</td>
                <td>Property pane toggle</td>
              </tr>
              <tr>
                <td>Refinement</td>
                <td>Separate web part</td>
                <td>Embedded or separate</td>
              </tr>
              <tr>
                <td>Favourites</td>
                <td>Separate web part</td>
                <td>Integrated panel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
