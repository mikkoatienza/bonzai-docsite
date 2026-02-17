import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Users, Building2, Search, UserCircle } from 'lucide-react';

export default function EmployeeDirectoryWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Employee Directory</DocsTitle>
      <DocsDescription>
        Employee directory with search mode and pinned employee mode.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              People
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 90%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Employee Directory Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'User profiles configured in Azure AD / SharePoint',
            ]}
            steps={[
              {
                title: 'Add the web part to your page',
                description: 'Edit the page, click +, search for "Employee Directory", and add it to a section.',
              },
              {
                title: 'Choose display mode',
                description: 'Select Search Directory (default) or Pinned Employees in the Display Mode section.',
              },
              {
                title: 'Configure fields and publish',
                description: 'Use Configure Fields to choose which properties show, then publish your page.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Create a company-wide employee directory',
              'Enable users to find colleagues by name or department',
              'Display contact information for employees',
              'Link to user profiles in SharePoint/Delve',
              'Browse employees alphabetically',
              'Show pinned employees on a team page',
            ]}
            bestFor={[
              'People page — dedicated employee directory',
              'About Us page — company org overview',
              'Department pages — team member listings',
              'Contact page — find the right person',
            ]}
            notFor={[
              'Displaying a specific list of featured people — use People Listing',
              'Showing organizational hierarchy — use Org Chart solutions',
              'Listing external contacts — use a custom list with People Listing',
            ]}
            alternatives={[
              { name: 'People Listing', when: 'curated list from a SharePoint list' },
              { name: 'Locations', when: 'office locations with contacts' },
            ]}
          />

          <h2>Display Modes</h2>
          <ul>
            <li><strong>Search Directory:</strong> Full directory with search and A–Z filtering</li>
            <li><strong>Pinned Employees:</strong> Curated people list (by individuals or criteria)</li>
          </ul>

          <h2>Configure Fields</h2>
          <ul>
            <li>Enable/disable fields, reorder, and choose managed properties</li>
            <li>Select display type per field (Text, Email Link, Phone Link, Link, Icon + Text, Image)</li>
            <li>Reset to default if needed</li>
          </ul>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Navigate to your target page',
                description: 'Go to the page where you want to add the directory (e.g., People, About Us, or a dedicated Directory page).',
              },
              {
                title: 'Add a section with appropriate width',
                description: 'Employee Directory works best in a full-width or two-thirds width section to display multiple columns of results.',
              },
              {
                title: 'Add the Employee Directory web part',
                description: 'Click the + button, search for "Employee Directory", and add it to your section.',
              },
              {
                title: 'Configure the title',
                description: 'Open the property pane and set a title like "Employee Directory", "Find a Colleague", or "Our Team".',
                tip: 'Leave blank for a cleaner look if the page title already indicates the purpose.',
              },
              {
                title: 'Select display mode',
                description: 'Choose Search Directory (default) or Pinned Employees in the Display Mode section.',
              },
              {
                title: 'Configure pinned options (if used)',
                description: 'Pick employees directly or filter by criteria, then set pinned layout (items per row/page).',
              },
              {
                title: 'Set items per page',
                description: 'Configure how many employees display per page using the slider. 20-28 is typical for a grid layout.',
              },
              {
                title: 'Configure fields',
                description: 'Use Configure Fields to enable/disable fields, change order, and select managed properties.',
              },
              {
                title: 'Publish and test',
                description: 'Save and publish. Test by searching for known employees and using the A-Z filter.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Company Directory"
              description="Full directory with all features enabled"
              useCase="Dedicated People page"
              icon={<Users className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Employee Directory' },
                { property: 'itemsPerPage', value: '28' },
                { property: 'displayMode', value: 'Search Directory' },
                { property: 'enableWildcardSearch', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Department Team Page"
              description="Compact directory for team pages"
              useCase="Department landing pages"
              icon={<Building2 className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Our Team' },
                { property: 'displayMode', value: 'Pinned Employees' },
                { property: 'pinnedSelectionMode', value: 'Select Individuals' },
                { property: 'pinnedItemsPerRow', value: '4' },
                { property: 'pinnedItemsPerPage', value: '12' },
              ]}
            />
            <RecipeCard
              title="Quick People Search"
              description="Search-focused minimal directory"
              useCase="Homepage sidebar widget"
              icon={<Search className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Find a Colleague' },
                { property: 'searchText', value: 'Search employees...' },
                { property: 'itemsPerPage', value: '8' },
                { property: 'displayMode', value: 'Search Directory' },
              ]}
            />
            <RecipeCard
              title="Browse by Name"
              description="Alphabetical browsing focus"
              useCase="Contact directory pages"
              icon={<UserCircle className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Staff Directory' },
                { property: 'alphabeticalFilterField', value: 'PreferredName' },
                { property: 'itemsPerPage', value: '20' },
                { property: 'displayMode', value: 'Search Directory' },
                { property: 'Configure Fields', value: 'Role, Location' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Ensure user profiles are complete">
            The directory pulls from Azure AD and SharePoint user profiles. 
            Encourage employees to update their profile photos and job titles for best results.
          </Callout>

          <Callout type="tip" title="Use on a full-width section for large organizations">
            For companies with 100+ employees, a full-width layout allows the grid to display 
            more results at once, reducing pagination clicks.
          </Callout>

          <Callout type="pro" title="Combine with People Listing for featured staff">
            Use Employee Directory for the full org, and People Listing 
            on department pages to highlight specific team members or leadership.
          </Callout>

          <Callout type="warning" title="Search indexing may affect results">
            People search relies on SharePoint/Azure AD indexing. 
            New employees may take 24-48 hours to appear in search results.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Employees not appearing in search results',
                solution: 'Ensure the user has a valid Azure AD account and that their profile has been indexed. New accounts may take 24-48 hours to appear.',
              },
              {
                problem: 'Profile photos not displaying',
                solution: 'Verify users have uploaded photos to their Microsoft 365 profile. Photos must be set in Outlook, Teams, or the Microsoft 365 profile page.',
              },
              {
                problem: 'Job titles showing as blank',
                solution: 'Job titles come from Azure AD. Ensure the "Job Title" attribute is populated in Azure AD for each user.',
              },
              {
                problem: 'A-Z filter showing wrong letters',
                solution: 'The filter is based on the DisplayName attribute. Ensure names are formatted correctly (First Last) in Azure AD.',
              },
              {
                problem: 'Search returns no results',
                solution: 'Check that the people search result source is enabled in SharePoint admin. Verify users have permission to use people search.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Property Pane Configuration</h3>

          <h4>Basic Settings</h4>
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
                <td>Web part title (default: Employee Directory)</td>
              </tr>
              <tr>
                <td><code>titleIconOption</code></td>
                <td>Dropdown</td>
                <td>Title icon mode: Custom or None</td>
              </tr>
              <tr>
                <td><code>titleIconName</code></td>
                <td>Icon Picker</td>
                <td>Fluent UI icon picker (default: ContactCard)</td>
              </tr>
              <tr>
                <td><code>titleIconUrl</code></td>
                <td>Text</td>
                <td>Custom icon URL (overrides icon name)</td>
              </tr>
              <tr>
                <td><code>resultSource</code></td>
                <td>Dropdown</td>
                <td>SharePoint Search result source (with Custom GUID option)</td>
              </tr>
              <tr>
                <td><code>searchText</code></td>
                <td>Text</td>
                <td>Placeholder text for the search box (default: Search)</td>
              </tr>
              <tr>
                <td><code>alphabeticalFilterField</code></td>
                <td>Text</td>
                <td>Field to use for A-Z filtering (default: PreferredName)</td>
              </tr>
              <tr>
                <td><code>itemsPerPage</code></td>
                <td>Slider (4-100)</td>
                <td>Results displayed per page (step: 4, default: 28)</td>
              </tr>
            </tbody>
          </table>

          <h4>Display Mode</h4>
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
                <td><code>displayMode</code></td>
                <td>Choice</td>
                <td>Search Directory (default) or Pinned Employees</td>
              </tr>
              <tr>
                <td><code>pinnedSelectionMode</code></td>
                <td>Choice</td>
                <td>Select Individual Employees or Filter by Criteria</td>
              </tr>
              <tr>
                <td><code>pinnedEmployees</code></td>
                <td>People Picker</td>
                <td>Multi-select people (individual mode only)</td>
              </tr>
              <tr>
                <td><code>pinnedCriteriaField</code></td>
                <td>Dropdown</td>
                <td>Managed property to filter by (criteria mode)</td>
              </tr>
              <tr>
                <td><code>pinnedCriteriaValue</code></td>
                <td>Dropdown</td>
                <td>Value for the selected criteria field</td>
              </tr>
            </tbody>
          </table>

          <h4>Pinned Layout</h4>
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
                <td><code>pinnedItemsPerRow</code></td>
                <td>Slider (1-6)</td>
                <td>Number of employee cards per row (default: 4)</td>
              </tr>
              <tr>
                <td><code>pinnedItemsPerPage</code></td>
                <td>Slider (1-50)</td>
                <td>Employees per page (default: 12)</td>
              </tr>
            </tbody>
          </table>

          <h4>Search Options</h4>
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
                <td><code>enableWildcardSearch</code></td>
                <td>Toggle</td>
                <td>Enable wildcard search for partial matches (default: On)</td>
              </tr>
              <tr>
                <td><code>trimDuplicates</code></td>
                <td>Toggle</td>
                <td>Remove duplicate results from search (default: Off)</td>
              </tr>
            </tbody>
          </table>

          <h4>Display Options</h4>
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
                <td><code>fieldConfigJson</code></td>
                <td>Collection</td>
                <td>Enable/disable fields, reorder, and map managed properties</td>
              </tr>
            </tbody>
          </table>

          <h4>Additional Link</h4>
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
                <td><code>additionalLinkText</code></td>
                <td>Text</td>
                <td>Text for an additional link in the footer</td>
              </tr>
              <tr>
                <td><code>additionalLinkUrl</code></td>
                <td>Text</td>
                <td>URL for the additional link</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Name search</li>
            <li>✅ Alphabetical A-Z filter</li>
            <li>✅ Profile photos from Azure AD</li>
            <li>✅ Contact information</li>
            <li>✅ Profile links to Delve/SharePoint</li>
            <li>✅ Pagination</li>
            <li>✅ Pinned Employees mode</li>
            <li>✅ Configurable field mapping</li>
            <li>✅ Responsive grid layout</li>
          </ul>

          <h3>Data Source</h3>

          <p>Employee Directory uses the SharePoint People Search API, which indexes:</p>

          <ul>
            <li>Azure AD user profiles</li>
            <li>SharePoint user profile properties</li>
            <li>Microsoft 365 profile information</li>
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
                <td>bonzai.min.js + JSOM</td>
                <td>SPFx + People Search API</td>
              </tr>
              <tr>
                <td>Photos</td>
                <td>SharePoint User Profile</td>
                <td>Azure AD / M365 Profile</td>
              </tr>
              <tr>
                <td>Profile Links</td>
                <td>MySite</td>
                <td>Delve / SharePoint Profile</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
