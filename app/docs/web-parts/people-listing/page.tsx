import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Users, Building2, List, LayoutGrid } from 'lucide-react';

export default function PeopleListingWebPart() {
  return (
    <DocsPage>
      <DocsTitle>People Listing</DocsTitle>
      <DocsDescription>
        Display people from People Search API or a curated SharePoint list with card or list layouts.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              People
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get People Listing Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'For List mode: a SharePoint list with person entries',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai People Listing" from the Bonzai category.' },
              { title: 'Choose data source', description: 'Select "People Search" for Azure AD users or "SharePoint List" for curated people.' },
              { title: 'Configure display options', description: 'Choose Cards or List layout, set items per page, toggle field visibility, and publish.' },
            ]}
          />

          <Callout type="info" title="Two data source modes">
            People Listing supports two modes: <strong>People Search</strong> (pulls from Azure AD via SharePoint Search) 
            or <strong>SharePoint List</strong> (pulls from a custom list you manage).
          </Callout>

          <h2>Data Source Modes</h2>
          <ul>
            <li>
              <strong>People Search:</strong> Uses SharePoint People Search API to display users from Azure AD. 
              Great for organization-wide listings with automatic profile data.
            </li>
            <li>
              <strong>SharePoint List:</strong> Pulls from a custom SharePoint list with a Person/User column. 
              Ideal for curated teams, project groups, or external contacts.
            </li>
          </ul>

          <WhenToUse
            useCases={[
              'Display a curated team member list',
              'Show specific people (leadership, project team)',
              'Create an "Our Team" section',
              'Feature new hires or key contacts',
              'Display external contacts not in Azure AD',
            ]}
            bestFor={[
              'About Us page — leadership team',
              'Department pages — team members',
              'Project pages — project team',
              'Homepage — team spotlight widget',
            ]}
            notFor={[
              'Full employee search with A-Z filter — use Employee Directory',
            ]}
            alternatives={[
              { name: 'Employee Directory', when: 'searchable A-Z directory' },
              { name: 'Spotlight Rollup', when: 'featured employee stories' },
            ]}
          />

          <h2>Common Configurations</h2>
          <RecipeGrid>
            <RecipeCard
              title="Organization Team Grid"
              description="Card layout from People Search"
              useCase="People page"
              icon={<Users className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Our Team' },
                { property: 'dataSource', value: 'People Search' },
                { property: 'displayAs', value: 'Cards' },
                { property: 'itemsPerPage', value: '12' },
                { property: 'showPhoto', value: 'On' },
                { property: 'showJobTitle', value: 'On' },
                { property: 'showDepartment', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Leadership Team"
              description="Curated list of executives"
              useCase="About Us page"
              icon={<Building2 className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Leadership' },
                { property: 'dataSource', value: 'SharePoint List' },
                { property: 'listName', value: 'Leadership Team' },
                { property: 'displayAs', value: 'Cards' },
                { property: 'showPaging', value: 'Off' },
              ]}
            />
            <RecipeCard
              title="Project Team List"
              description="Compact list view of team"
              useCase="Project page"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Project Team' },
                { property: 'dataSource', value: 'SharePoint List' },
                { property: 'listName', value: 'Project Teams' },
                { property: 'displayAs', value: 'List' },
                { property: 'showTableHeaders', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Department Members"
              description="Cards with contact info"
              useCase="Department page"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'HR Team' },
                { property: 'dataSource', value: 'People Search' },
                { property: 'displayAs', value: 'Cards' },
                { property: 'showEmail', value: 'On' },
                { property: 'showPhone', value: 'On' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use People Search for dynamic data">
            People Search mode automatically pulls photos, titles, and departments from Azure AD profiles.
          </Callout>
          <Callout type="tip" title="Use List mode for curated content">
            List mode gives you full control over who appears and in what order.
          </Callout>
          <Callout type="pro" title="Combine with views">
            In List mode, create SharePoint views to filter by department or project and select that view.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'People not showing (People Search mode)', solution: 'Ensure users exist in Azure AD and have been indexed. New accounts may take 24-48 hours to appear.' },
              { problem: 'People not showing (List mode)', solution: 'Verify the list has items and the correct list is selected. Check that the Person column is correctly configured.' },
              { problem: 'Photos not displaying', solution: 'In People Search mode, users must have photos in Microsoft 365. In List mode, ensure the list has image URLs or is using a Person column.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>People List Schema (for List mode)</h3>
          <p>When using SharePoint List mode, create a list with a Person/User column:</p>
          <ol>
            <li>Create a SharePoint list for curated people.</li>
            <li>Add a Person/Group column and select it in the web part property pane.</li>
            <li>Optional: add extra fields for external contacts or custom metadata.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Entry title or name</td></tr>
              <tr><td>Person</td><td>Person or Group</td><td>Yes</td><td>The user column (configure via Person Column property)</td></tr>
              <tr><td>External Name (configurable)</td><td>Single line of text</td><td>No</td><td>Optional for external contacts (map via External Name field)</td></tr>
              <tr><td>External Email (configurable)</td><td>Single line of text</td><td>No</td><td>Map to email field for external contacts</td></tr>
              <tr><td>External Job Title (configurable)</td><td>Single line of text</td><td>No</td><td>Map to job title field</td></tr>
              <tr><td>External Department (configurable)</td><td>Single line of text</td><td>No</td><td>Map to department field</td></tr>
              <tr><td>External Location (configurable)</td><td>Single line of text</td><td>No</td><td>Map to location field</td></tr>
              <tr><td>External Phone (configurable)</td><td>Single line of text</td><td>No</td><td>Map to phone field</td></tr>
              <tr><td>External Photo URL (configurable)</td><td>Hyperlink</td><td>No</td><td>Map to photo URL field</td></tr>
              <tr><td>(Additional)</td><td>Various</td><td>No</td><td>Custom columns for display (configure via Additional Columns property)</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (default: People)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for footer link</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for footer link</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
            </tbody>
          </table>

          <h4>Data Source Selection</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>dataSource</code></td><td>Dropdown</td><td>People Search or SharePoint List</td></tr>
            </tbody>
          </table>

          <h4>People Search Settings (when dataSource = People Search)</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>resultSource</code></td><td>Text</td><td>SharePoint search result source (default: Local People Results)</td></tr>
              <tr><td><code>searchPlaceholder</code></td><td>Text</td><td>Placeholder text for search box</td></tr>
            </tbody>
          </table>

          <h4>List Settings (when dataSource = SharePoint List)</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where list is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>SharePoint list with person entries</td></tr>
              <tr><td><code>viewName</code></td><td>View Picker</td><td>View to filter people</td></tr>
              <tr><td><code>personColumn</code></td><td>Text</td><td>Internal name of the Person/User column</td></tr>
              <tr><td><code>additionalColumns</code></td><td>Text (Multiline)</td><td>Additional columns to display (format: Title:InternalName;...)</td></tr>
              <tr><td><code>showPromotedItems</code></td><td>Toggle</td><td>Show only promoted items</td></tr>
            </tbody>
          </table>

          <h4>Field Visibility</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>showPhoto</code></td><td>Toggle</td><td>Display profile photos (default: On)</td></tr>
              <tr><td><code>showJobTitle</code></td><td>Toggle</td><td>Display job title (default: On)</td></tr>
              <tr><td><code>showDepartment</code></td><td>Toggle</td><td>Display department (default: On)</td></tr>
              <tr><td><code>showLocation</code></td><td>Toggle</td><td>Display location (default: On)</td></tr>
              <tr><td><code>showEmail</code></td><td>Toggle</td><td>Display email (default: On)</td></tr>
              <tr><td><code>showPhone</code></td><td>Toggle</td><td>Display phone (default: On)</td></tr>
            </tbody>
          </table>

          <h4>Display Options</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>displayAs</code></td><td>Dropdown</td><td>Cards or List</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (6-30)</td><td>People per page (step: 3, default: 12)</td></tr>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Enable pagination (default: On)</td></tr>
              <tr><td><code>showSearch</code></td><td>Toggle</td><td>Enable search box (default: On)</td></tr>
              <tr><td><code>showTableHeaders</code></td><td>Toggle</td><td>Show table headers in List view (default: On)</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto)</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Two data source modes (People Search, SharePoint List)</li>
            <li>✅ Cards and List display layouts</li>
            <li>✅ Configurable field visibility</li>
            <li>✅ Search functionality</li>
            <li>✅ Pagination</li>
            <li>✅ View-based filtering (List mode)</li>
            <li>✅ Profile photos</li>
            <li>✅ Contact information display</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
