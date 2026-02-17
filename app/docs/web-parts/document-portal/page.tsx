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
        Full-featured document search with typeahead suggestions, popular searches, favourites, and multiple view modes.
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
            time="15-30 minutes"
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
                title: 'Configure result source (optional)',
                description: 'Open the property pane and set the Result Source to a specific search result source, or leave empty for default.',
              },
              {
                title: 'Enable favourites and previews',
                description: 'Toggle on "Show Favourite Documents" and "Show Document Previews" for the full experience, then publish.',
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
                title: 'Configure the Result Source (optional)',
                description: 'Open the property pane and set the Result Source to a specific SharePoint search result source name or ID, or leave empty for the default search.',
                tip: 'Result sources control which content is searched. Ask your admin for available result source names.',
              },
              {
                title: 'Configure typeahead display fields',
                description: 'Set "Typeahead Display Fields" to configure what appears in search suggestions. Format: "Label:ManagedProperty;Label2:Property2".',
              },
              {
                title: 'Choose the default view',
                description: 'Select "Default View" as List or Grid to control how search results display.',
              },
              {
                title: 'Enable favourite documents',
                description: 'Toggle "Show Favourite Documents" to display a favourites section where users can see their bookmarked documents.',
              },
              {
                title: 'Set items per page',
                description: 'Configure how many documents appear per page using the "Items Per Page" slider (10-100).',
              },
              {
                title: 'Publish and test search',
                description: 'Save and publish. Test by searching for known documents and verifying results appear correctly.',
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
                { property: 'title', value: 'Document Center' },
                { property: 'defaultView', value: 'list' },
                { property: 'showFavouriteDocuments', value: 'On' },
                { property: 'showDocumentPreviews', value: 'On' },
                { property: 'showPopularSearches', value: 'On' },
                { property: 'itemsPerPage', value: '30' },
              ]}
            />
            <RecipeCard
              title="Department Documents"
              description="Using a specific result source for a team"
              useCase="Team or department page"
              icon={<FolderOpen className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'HR Documents' },
                { property: 'resultSource', value: 'HR Documents Result Source' },
                { property: 'defaultView', value: 'grid' },
                { property: 'showFavouriteDocuments', value: 'On' },
                { property: 'itemsPerPage', value: '20' },
              ]}
            />
            <RecipeCard
              title="Policy Repository"
              description="Filtered to policy documents with search filters"
              useCase="Compliance and policy pages"
              icon={<Filter className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Policies & Procedures' },
                { property: 'resultSource', value: 'Policies' },
                { property: 'showFavouriteDocuments', value: 'On' },
                { property: 'showDocumentPreviews', value: 'On' },
                { property: 'sortOrder', value: 'name' },
              ]}
            />
            <RecipeCard
              title="My Documents Quick Access"
              description="Favourites-focused for personal bookmarks"
              useCase="Personal dashboard pages"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'My Documents' },
                { property: 'showFavouriteDocuments', value: 'On' },
                { property: 'enableWildcardSearch', value: 'On' },
                { property: 'itemsPerPage', value: '15' },
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
                problem: 'Typeahead suggestions are slow or missing',
                solution: 'Typeahead uses the SharePoint search suggest API. Ensure users have permission to the content and that search is functioning normally. Check the typeaheadDisplayFields configuration.',
              },
              {
                problem: 'Favourites not persisting',
                solution: 'Favourites are stored per-user. Ensure users are signed in. Clearing browser data may reset favourites.',
              },
              {
                problem: 'Results not scoped correctly',
                solution: 'Check the Result Source property. Ensure it points to the correct SharePoint search result source. Contact your admin to configure result sources.',
              },
              {
                problem: 'Sort dropdown not appearing',
                solution: 'Ensure "Show Sort Dropdown" toggle is enabled in the property pane Display Settings.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>FavouriteDocuments List Schema (optional)</h3>
          <p>
            The favourites section stores bookmarks in a SharePoint list named <strong>FavouriteDocuments</strong>.
            Create this list only if you enable &quot;Show Favourite Documents&quot;.
          </p>
          <ol>
            <li>Create a list named <strong>FavouriteDocuments</strong> in the same site.</li>
            <li>Add the required columns below.</li>
            <li>Ensure users have Contribute permissions to save favourites.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Document title</td></tr>
              <tr><td>DocumentPath</td><td>Hyperlink</td><td>Yes</td><td>Document URL</td></tr>
              <tr><td>DocumentId</td><td>Single line of text</td><td>Yes</td><td>Search DocId / UniqueId</td></tr>
              <tr><td>FileExtension</td><td>Single line of text</td><td>Yes</td><td>File extension (e.g., pdf, docx)</td></tr>
              <tr><td>AddedDate</td><td>Date/Time</td><td>Yes</td><td>Saved when favourite is added</td></tr>
            </tbody>
          </table>

          <h3>Related Components</h3>
          <p>Document Portal works with companion components:</p>
          <ul>
            <li><strong>Favourite Documents:</strong> User bookmarks for documents (integrated into Document Portal)</li>
            <li><strong>Documents Rollup:</strong> For displaying a fixed list of documents without search</li>
            <li><strong>Documents Table:</strong> For tabular document display</li>
          </ul>

          <h3>Property Pane Configuration</h3>

          <h4>Site Selection</h4>
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
                <td><code>siteSelectionMode</code></td>
                <td>Dropdown</td>
                <td>Select from available sites (picker) or enter a site URL manually</td>
              </tr>
              <tr>
                <td><code>selectedSiteUrl</code></td>
                <td>Dropdown</td>
                <td>Site dropdown (picker mode, loaded via Microsoft Graph)</td>
              </tr>
              <tr>
                <td><code>siteUrl</code></td>
                <td>Text</td>
                <td>Manual site URL (manual mode, optional)</td>
              </tr>
            </tbody>
          </table>

          <h4>Search Settings</h4>
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
                <td><code>resultSource</code></td>
                <td>Text</td>
                <td>SharePoint Search result source name/ID (optional)</td>
              </tr>
              <tr>
                <td><code>searchLabelOption</code></td>
                <td>Dropdown</td>
                <td>Preset search placeholder option (or Custom)</td>
              </tr>
              <tr>
                <td><code>searchLabel</code></td>
                <td>Text</td>
                <td>Custom placeholder text (used when searchLabelOption = custom)</td>
              </tr>
              <tr>
                <td><code>enableWildcardSearch</code></td>
                <td>Toggle</td>
                <td>Enable wildcard search (*term*)</td>
              </tr>
              <tr>
                <td><code>typeaheadFields</code></td>
                <td>Multi-select</td>
                <td>Managed properties shown in typeahead suggestions</td>
              </tr>
              <tr>
                <td><code>typeaheadDisplayFields</code></td>
                <td>Text (Multiline)</td>
                <td>Legacy/fallback format: &quot;Label:ManagedProperty;Label2:Property2&quot;</td>
              </tr>
              <tr>
                <td><code>searchFilterFields</code></td>
                <td>Multi-select</td>
                <td>Managed properties available as filters/refiners</td>
              </tr>
              <tr>
                <td><code>searchFilters</code></td>
                <td>Text (Multiline)</td>
                <td>Legacy/fallback filter configuration</td>
              </tr>
              <tr>
                <td><code>itemsPerPage</code></td>
                <td>Slider (10-100)</td>
                <td>Number of results per page</td>
              </tr>
            </tbody>
          </table>

          <h4>Display Settings</h4>
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
                <td><code>defaultView</code></td>
                <td>Dropdown</td>
                <td>Default view mode: List or Grid</td>
              </tr>
              <tr>
                <td><code>listViewColumns</code></td>
                <td>Multi-select</td>
                <td>Managed properties shown as columns in List view</td>
              </tr>
              <tr>
                <td><code>listViewDisplayProperties</code></td>
                <td>Text (Multiline)</td>
                <td>Legacy/fallback list columns format: &quot;Label:ManagedProperty;...&quot;</td>
              </tr>
              <tr>
                <td><code>gridViewColumns</code></td>
                <td>Multi-select</td>
                <td>Managed properties shown as fields in Grid view</td>
              </tr>
              <tr>
                <td><code>gridViewDisplayProperties</code></td>
                <td>Text (Multiline)</td>
                <td>Legacy/fallback grid format: &quot;Label:ManagedProperty;...&quot;</td>
              </tr>
              <tr>
                <td><code>visibleMetadataFields</code></td>
                <td>Multi-select</td>
                <td>Which metadata fields appear on each result</td>
              </tr>
              <tr>
                <td><code>showMetadataChips</code></td>
                <td>Toggle</td>
                <td>Show metadata chips on results</td>
              </tr>
              <tr>
                <td><code>showSortDropDown</code></td>
                <td>Toggle</td>
                <td>Show sort dropdown to users</td>
              </tr>
              <tr>
                <td><code>sortOrder</code></td>
                <td>Dropdown</td>
                <td>Default sort: Relevance, Date, or Name</td>
              </tr>
              <tr>
                <td><code>showViewToggle</code></td>
                <td>Toggle</td>
                <td>Show the List/Grid view toggle (disabled in Search-only mode)</td>
              </tr>
              <tr>
                <td><code>showFiltersPanel</code></td>
                <td>Toggle</td>
                <td>Show the filters panel when refiners exist (disabled in Search-only mode)</td>
              </tr>
              <tr>
                <td><code>trimDuplicates</code></td>
                <td>Toggle</td>
                <td>Remove duplicate results from search</td>
              </tr>
            </tbody>
          </table>

          <h4>Features</h4>
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
                <td><code>searchOnlyMode</code></td>
                <td>Toggle</td>
                <td>Minimal UI preset (hides some end-user controls)</td>
              </tr>
              <tr>
                <td><code>showResults</code></td>
                <td>Toggle</td>
                <td>Show search results section</td>
              </tr>
              <tr>
                <td><code>showPopularSearches</code></td>
                <td>Toggle</td>
                <td>Show popular searches section</td>
              </tr>
              <tr>
                <td><code>showFavouriteDocuments</code></td>
                <td>Toggle</td>
                <td>Show favourite documents section</td>
              </tr>
              <tr>
                <td><code>favouriteDocumentsLabel</code></td>
                <td>Text</td>
                <td>Label for the favourites section</td>
              </tr>
              <tr>
                <td><code>showCustomDocumentLinks</code></td>
                <td>Toggle</td>
                <td>Show a custom links section above/beside results</td>
              </tr>
              <tr>
                <td><code>customDocumentLinksLabel</code></td>
                <td>Text</td>
                <td>Label for the custom links section</td>
              </tr>
              <tr>
                <td><code>customDocumentLinks</code></td>
                <td>Collection Data</td>
                <td>Manually managed custom document links</td>
              </tr>
              <tr>
                <td><code>showDocumentPreviews</code></td>
                <td>Toggle</td>
                <td>Enable document preview functionality</td>
              </tr>
            </tbody>
          </table>

          <h4>Title &amp; Navigation</h4>
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
                <td><code>titleUrl</code></td>
                <td>Text</td>
                <td>URL to make the title clickable</td>
              </tr>
              <tr>
                <td><code>titleIconOption</code></td>
                <td>Dropdown</td>
                <td>Title icon mode: Select Icon or None</td>
              </tr>
              <tr>
                <td><code>titleIconName</code></td>
                <td>Icon Picker</td>
                <td>Fluent UI icon picker (default: DocumentSearch)</td>
              </tr>
              <tr>
                <td><code>titleIconUrl</code></td>
                <td>Text</td>
                <td>Custom icon URL (overrides icon name)</td>
              </tr>
            </tbody>
          </table>

          <h4>Appearance</h4>
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
                <td><code>chromeType</code></td>
                <td>Dropdown</td>
                <td>Chrome type: None, Title Only, Border Only, Title and Border</td>
              </tr>
              <tr>
                <td><code>fixedHeight</code></td>
                <td>Slider (200-800)</td>
                <td>Fixed height in pixels</td>
              </tr>
            </tbody>
          </table>

          <h4>Advanced</h4>
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
                <td><code>description</code></td>
                <td>Text (Multiline)</td>
                <td>Web part description</td>
              </tr>
              <tr>
                <td><code>helpUrl</code></td>
                <td>Text</td>
                <td>Help documentation URL</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Full-text document search</li>
            <li>✅ Typeahead suggestions (configurable display fields)</li>
            <li>✅ Popular searches section</li>
            <li>✅ Favourite documents integration</li>
            <li>✅ List and Grid view modes</li>
            <li>✅ Configurable sort options</li>
            <li>✅ Wildcard search support</li>
            <li>✅ Document previews</li>
            <li>✅ Pagination</li>
            <li>✅ Duplicate result trimming</li>
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
                <td>Configured via typeaheadDisplayFields property</td>
              </tr>
              <tr>
                <td>View Modes</td>
                <td>List only</td>
                <td>List and Grid view options</td>
              </tr>
              <tr>
                <td>Favourites</td>
                <td>Separate web part</td>
                <td>Integrated section (toggle)</td>
              </tr>
              <tr>
                <td>Popular Searches</td>
                <td>Not available</td>
                <td>Built-in section (toggle)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
