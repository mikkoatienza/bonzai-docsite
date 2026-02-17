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
            time="15-30 minutes"
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
                title: 'Configure the title and default query',
                description: 'Open the property pane and set a title. Set "Default Query" to * to search all content.',
              },
              {
                title: 'Configure refiners',
                description: 'In "Refiners Config", enter refiners in format "Label:Property:DefaultValue;..." (e.g., "File Type:FileType:;Author:Author:").',
                tip: 'Common managed properties: contentclass, FileType, Author, ModifiedDate, Path',
              },
              {
                title: 'Set items per page and default view',
                description: 'Configure items per page (10-20 is typical) and choose a default view: List, Cards, or Table.',
              },
              {
                title: 'Configure display options',
                description: 'Toggle "Show Search Box", "Show Refiners", and "Show View Switcher" based on your needs.',
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
                { property: 'title', value: 'Search' },
                { property: 'defaultQuery', value: '*' },
                { property: 'refinersConfig', value: 'File Type:FileType:;Author:Author:' },
                { property: 'itemsPerPage', value: '20' },
                { property: 'defaultView', value: 'List' },
                { property: 'showRefiners', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Document Search"
              description="Focused search for documents only"
              useCase="Document center pages"
              icon={<Filter className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Find Documents' },
                { property: 'allowedContentTypes', value: 'STS_ListItem_DocumentLibrary' },
                { property: 'refinersConfig', value: 'File Type:FileType:;Author:Author:' },
                { property: 'defaultView', value: 'List' },
              ]}
            />
            <RecipeCard
              title="Homepage Search Widget"
              description="Compact search for homepage integration"
              useCase="Homepage hero section"
              icon={<Layout className="h-5 w-5" />}
              config={[
                { property: 'showSearchBox', value: 'On' },
                { property: 'showRefiners', value: 'Off' },
                { property: 'itemsPerPage', value: '5' },
                { property: 'chromeType', value: 'None' },
              ]}
            />
            <RecipeCard
              title="Site-Wide Search"
              description="Comprehensive search with all refiners"
              useCase="Navigation-linked search"
              icon={<Globe className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Enterprise Search' },
                { property: 'refinersConfig', value: 'Content Type:contentclass:;File Type:FileType:;Author:Author:' },
                { property: 'itemsPerPage', value: '20' },
                { property: 'defaultView', value: 'Cards' },
                { property: 'showViewSwitcher', value: 'On' },
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

          <h4>Title Settings</h4>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconOption</code></td><td>Dropdown</td><td>Title icon mode: Custom or None</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Fluent UI icon picker (default: Search)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for footer link</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for footer link (default: View All Results)</td></tr>
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
              <tr><td><code>defaultQuery</code></td><td>Text</td><td>Default search query (use * for all content)</td></tr>
              <tr><td><code>resultSourceId</code></td><td>Text</td><td>SharePoint Search result source ID or name</td></tr>
              <tr><td><code>searchScope</code></td><td>Text</td><td>Limit search to a specific path (e.g., /sites/Intranet/Documents)</td></tr>
            </tbody>
          </table>

          <h4>Refiners Configuration</h4>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>refinersConfig</code></td><td>Text (Multiline)</td><td>Refiners in format &quot;Label:Property:DefaultValue;...&quot; (e.g., Content Type:contentclass:;File Type:FileType:)</td></tr>
              <tr><td><code>refinersSortOrder</code></td><td>Dropdown</td><td>Sort refiners by count or alphabetically</td></tr>
              <tr><td><code>maxValuesPerRefiner</code></td><td>Slider (5-50)</td><td>Maximum values to show per refiner (step: 5)</td></tr>
            </tbody>
          </table>

          <h4>Filter Restrictions</h4>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>allowedContentTypes</code></td><td>Text (Multiline)</td><td>Comma-separated allowed content types (e.g., STS_ListItem_DocumentLibrary)</td></tr>
              <tr><td><code>allowedFileTypes</code></td><td>Text</td><td>Comma-separated allowed file types (e.g., docx,xlsx,pdf,pptx)</td></tr>
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
              <tr><td><code>defaultView</code></td><td>Dropdown</td><td>Default result view: List, Cards, or Table</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (5-50)</td><td>Results per page (step: 5, default: 20)</td></tr>
              <tr><td><code>showSearchBox</code></td><td>Toggle</td><td>Show search input box (default: On)</td></tr>
              <tr><td><code>showRefiners</code></td><td>Toggle</td><td>Show refinement filters panel (default: On)</td></tr>
              <tr><td><code>showViewSwitcher</code></td><td>Toggle</td><td>Show view switcher (List/Cards/Table) (default: On)</td></tr>
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
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto)</td></tr>
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
