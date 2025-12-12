import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Info, Search, Filter, Layout, Globe } from 'lucide-react';

export default function AdvancedSearchWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Advanced Search</DocsTitle>
      <DocsDescription>
        Unified search with refinement filters, typeahead, and multiple result templates.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              Search
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 85%
            </span>
          </div>

          <div className="not-prose mb-8 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Component Consolidation</h4>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  Advanced Search consolidates the legacy <strong>Search Box</strong> and 
                  <strong> Search Refinement</strong> web parts into a single, unified component.
                </p>
              </div>
            </div>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Advanced Search Working in 3 Steps"
            time="2 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'SharePoint Search configured and indexing content',
            ]}
            steps={[
              {
                title: 'Create a Search page',
                description: 'Create a new page named "Search" with a full-width layout.',
              },
              {
                title: 'Add the Advanced Search web part',
                description: 'Edit the page, click +, search for "Advanced Search", and add it to the full-width section.',
              },
              {
                title: 'Configure refiners and publish',
                description: 'Open the property pane, set refinement categories, choose a result template, and publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Create a centralized enterprise search page',
              'Provide users with refined search across all content',
              'Enable filtering by content type, date, author, and custom metadata',
              'Replace the classic Bonzai header search experience',
              'Build category-specific search pages (documents, people, news)',
            ]}
            bestFor={[
              'Search Center page — dedicated enterprise search',
              'Site homepage — embedded search experience',
              'Content-specific pages — filtered search (e.g., "Search Policies")',
            ]}
            notFor={[
              'Simple document search — use Document Portal for document-focused search',
              'People search only — use Employee Directory',
              'News search only — use News Rollup with filtering',
            ]}
            alternatives={[
              { name: 'Document Portal', when: 'document-focused search with favourites' },
              { name: 'Employee Directory', when: 'people search with A-Z browsing' },
            ]}
          />

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create a new Search page',
                description: 'Go to Site Pages, create a new page named "Search" or "Find Content". Use a single-column full-width layout.',
                tip: 'Add the page to your site navigation for easy access.',
              },
              {
                title: 'Add a full-width section',
                description: 'In edit mode, add a new section with a full-width layout to give search maximum space.',
              },
              {
                title: 'Add the Advanced Search web part',
                description: 'Click the + button, search for "Advanced Search", and add it to your section.',
              },
              {
                title: 'Configure the search box placeholder',
                description: 'Open the property pane and set a helpful placeholder text like "Search documents, people, and pages..."',
              },
              {
                title: 'Enable the vertical dropdown (optional)',
                description: 'Toggle "Show Vertical Dropdown" to let users switch between search categories (All, Documents, People, etc.).',
              },
              {
                title: 'Configure refinement categories',
                description: 'Enter comma-separated refiners in the Refinement Categories field: "FileType,Author,ModifiedDate,ContentType"',
                tip: 'Common refiners: FileType, Author, ModifiedDate, ContentType, Site, Department',
              },
              {
                title: 'Set items per page',
                description: 'Configure how many results display per page. 10-15 is standard for search results.',
              },
              {
                title: 'Choose a result template',
                description: 'Select from List, Cards, or Compact templates depending on your content type.',
              },
              {
                title: 'Publish and test',
                description: 'Save and publish. Test searches for various content types and verify refinement filters work.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Enterprise Search Center"
              description="Full-featured search for all site content"
              useCase="Dedicated Search page"
              icon={<Search className="h-5 w-5" />}
              config={[
                { property: 'Placeholder', value: 'Search the intranet...' },
                { property: 'Show Vertical Dropdown', value: 'Yes' },
                { property: 'Refinement Categories', value: 'FileType,Author,ModifiedDate' },
                { property: 'Items Per Page', value: '15' },
                { property: 'Result Template', value: 'List' },
              ]}
            />
            <RecipeCard
              title="Document Search"
              description="Focused search for documents only"
              useCase="Document center pages"
              icon={<Filter className="h-5 w-5" />}
              config={[
                { property: 'Placeholder', value: 'Search documents...' },
                { property: 'Show Vertical Dropdown', value: 'No' },
                { property: 'Refinement Categories', value: 'FileType,Author,ModifiedDate' },
                { property: 'Result Template', value: 'List' },
              ]}
            />
            <RecipeCard
              title="Homepage Search Widget"
              description="Compact search for homepage integration"
              useCase="Homepage hero section"
              icon={<Layout className="h-5 w-5" />}
              config={[
                { property: 'Placeholder', value: 'What are you looking for?' },
                { property: 'Show Vertical Dropdown', value: 'Yes' },
                { property: 'Items Per Page', value: '5' },
                { property: 'Chrome Type', value: 'None' },
              ]}
            />
            <RecipeCard
              title="Site-Wide Search"
              description="Comprehensive search with all refiners"
              useCase="Navigation-linked search"
              icon={<Globe className="h-5 w-5" />}
              config={[
                { property: 'Placeholder', value: 'Search...' },
                { property: 'Refinement Categories', value: 'FileType,Author,Site,ContentType' },
                { property: 'Items Per Page', value: '20' },
                { property: 'Result Template', value: 'Cards' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use descriptive placeholder text">
            Help users understand what they can search for with placeholder text like 
            "Search documents, news, and people..." rather than just "Search".
          </Callout>

          <Callout type="tip" title="Configure relevant refiners">
            Only show refinement categories that make sense for your content. 
            Too many refiners can overwhelm users; 3-5 is typically ideal.
          </Callout>

          <Callout type="pro" title="Create multiple search pages for different needs">
            Consider dedicated search pages for different content types: 
            "Search Documents", "Search People", "Search News" with pre-configured filters.
          </Callout>

          <Callout type="warning" title="Vertical dropdown requires managed properties">
            The vertical dropdown filters require corresponding managed properties 
            configured in SharePoint search schema. Contact your admin if filters don't work.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Search returns no results',
                solution: 'Verify SharePoint search is working. Try the same search in the SharePoint search center. New content may take 15-30 minutes to be indexed.',
              },
              {
                problem: 'Refinement filters not appearing',
                solution: 'Ensure the refinement categories match valid managed properties in SharePoint search schema. Common properties: FileType, Author, ModifiedDate, ContentType.',
              },
              {
                problem: 'Typeahead not showing suggestions',
                solution: 'Typeahead uses the SharePoint search suggestions API. Ensure users have permission to search content and that the search service is functioning.',
              },
              {
                problem: 'Vertical dropdown categories not filtering correctly',
                solution: 'Vertical filters require proper result source configuration in SharePoint admin. Contact your admin to verify result sources are set up correctly.',
              },
              {
                problem: 'Wrong content appearing in results',
                solution: 'Check the search scope. Advanced Search searches all content by default. Use refinement categories or a scoped result source to narrow results.',
              },
              {
                problem: 'Performance is slow',
                solution: 'Reduce items per page and limit refinement categories. Complex queries with many refiners can slow search response times.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Consolidated Components</h3>

          <p>
            Advanced Search consolidates functionality from two legacy Bonzai components:
          </p>

          <table>
            <thead>
              <tr>
                <th>Classic Component</th>
                <th>Location</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search Box</td>
                <td>Header (bonzai.min.js)</td>
                <td>Search input with typeahead, vertical dropdown</td>
              </tr>
              <tr>
                <td>Search Refinement</td>
                <td>Search pages</td>
                <td>Filtering panel with refiners and counts</td>
              </tr>
              <tr>
                <td>Search Result Templates</td>
                <td>bonzai.min.js</td>
                <td>Result display formatting</td>
              </tr>
            </tbody>
          </table>

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
                <td><code>searchBoxPlaceholder</code></td>
                <td>Text</td>
                <td>Placeholder text for search input</td>
              </tr>
              <tr>
                <td><code>showVerticalDropdown</code></td>
                <td>Toggle</td>
                <td>Show search vertical dropdown</td>
              </tr>
              <tr>
                <td><code>refinementCategories</code></td>
                <td>Text</td>
                <td>Comma-separated list of refiners</td>
              </tr>
              <tr>
                <td><code>itemsPerPage</code></td>
                <td>Number</td>
                <td>Results per page</td>
              </tr>
              <tr>
                <td><code>resultTemplate</code></td>
                <td>Dropdown</td>
                <td>Result display template (List, Cards, Compact)</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Search input box</li>
            <li>✅ Typeahead suggestions</li>
            <li>✅ Search vertical dropdown</li>
            <li>✅ Refinement panel with filters</li>
            <li>✅ Filter counts display</li>
            <li>✅ Multi-select filters</li>
            <li>✅ Clear filters functionality</li>
            <li>✅ Multiple result display templates</li>
            <li>✅ Pagination</li>
            <li>⚠️ Header integration requires SPFx Application Customizer</li>
          </ul>

          <h3>Implementation Changes</h3>

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
                <td>bonzai.min.js + JSOM</td>
                <td>SPFx + React</td>
              </tr>
              <tr>
                <td>Search Input</td>
                <td>Header integration</td>
                <td>Standalone or embedded</td>
              </tr>
              <tr>
                <td>Typeahead</td>
                <td>Brick configuration</td>
                <td>Property pane</td>
              </tr>
              <tr>
                <td>Refinement</td>
                <td>Separate component</td>
                <td>Integrated panel</td>
              </tr>
              <tr>
                <td>Refiners</td>
                <td>CAML-based</td>
                <td>SharePoint Search REST API</td>
              </tr>
            </tbody>
          </table>

          <h3>Migration Benefits</h3>

          <ol>
            <li><strong>Flexibility:</strong> Can be placed on any Modern page</li>
            <li><strong>No Master Page:</strong> Works without customization</li>
            <li><strong>Unified Experience:</strong> Single web part for complete search</li>
            <li><strong>Property Pane:</strong> No Brick login required for configuration</li>
            <li><strong>Real-time Preview:</strong> See changes immediately while editing</li>
          </ol>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
