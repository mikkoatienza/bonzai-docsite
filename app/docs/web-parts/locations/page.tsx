import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { MapPin, Building, Search, LayoutGrid } from 'lucide-react';

export default function LocationsWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Locations</DocsTitle>
      <DocsDescription>
        Display office locations with addresses, contact info, images, and directions links.
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
            title="Get Locations Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'SharePoint list with location data',
            ]}
            steps={[
              { title: 'Create a locations list', description: 'Create a SharePoint list with Title, Address, Phone, Email, Hours, Image, and MapImage columns.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Locations" from the Bonzai category.' },
              { title: 'Select your list and configure', description: 'Choose your Locations list, configure field visibility, display layout (Cards/List), and publish.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display office locations',
              'Show branch contact information',
              'Create an office directory',
              'Feature regional offices with maps and directions',
            ]}
            bestFor={[
              'About Us page — office listings',
              'Contact page — office contacts',
              'People & Directory page — locations section',
              'Global offices page — international locations',
            ]}
            notFor={[
              'Interactive maps — use embedded maps',
              'People contacts — use People Listing',
            ]}
          />

          <h2>Common Configurations</h2>
          <RecipeGrid>
            <RecipeCard
              title="Office Directory"
              description="Full office listings with all details"
              useCase="Contact page"
              icon={<Building className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Our Offices' },
                { property: 'displayAs', value: 'Cards' },
                { property: 'itemsPerPage', value: '9' },
                { property: 'showSearch', value: 'On' },
                { property: 'showAddress', value: 'On' },
                { property: 'showPhone', value: 'On' },
                { property: 'showEmail', value: 'On' },
                { property: 'showDirections', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Regional Offices List"
              description="Compact list view of locations"
              useCase="Sidebar widget"
              icon={<MapPin className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Locations' },
                { property: 'displayAs', value: 'List' },
                { property: 'showImage', value: 'Off' },
                { property: 'showMapImage', value: 'Off' },
                { property: 'showHours', value: 'Off' },
                { property: 'itemsPerPage', value: '6' },
              ]}
            />
            <RecipeCard
              title="Searchable Office Finder"
              description="Focus on search with expanded field"
              useCase="Dedicated locations page"
              icon={<Search className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Find an Office' },
                { property: 'showSearch', value: 'On' },
                { property: 'expandSearchField', value: 'On' },
                { property: 'searchPlaceholder', value: 'Search by city or country...' },
                { property: 'showResultsOnLoad', value: 'Off' },
              ]}
            />
            <RecipeCard
              title="Visual Office Grid"
              description="Image-focused card layout"
              useCase="Homepage"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Global Offices' },
                { property: 'displayAs', value: 'Cards' },
                { property: 'showImage', value: 'On' },
                { property: 'showMapImage', value: 'On' },
                { property: 'itemsPerPage', value: '6' },
                { property: 'showPaging', value: 'Off' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>

          <Callout type="tip" title="Add location images">
            Office photos make the locations more recognizable and visually appealing.
          </Callout>

          <Callout type="tip" title="Include map images">
            Static map images help users quickly orient themselves. Use Google Maps or Bing Maps static image URLs.
          </Callout>

          <Callout type="pro" title="Enable directions links">
            The &quot;Get Directions&quot; link opens the address in Google Maps for easy navigation.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Locations not showing', solution: 'Verify the Locations list has items and the correct list is selected. Check that the selected view includes all locations.' },
              { problem: 'Images not displaying', solution: 'Ensure Image column has valid image URLs. Check that the images are accessible to all users.' },
              { problem: 'Search not finding results', solution: 'Verify "Show Search" is enabled. Locations search matches against Title and Address fields.' },
              { problem: 'Directions link not working', solution: 'Ensure the Address field contains a valid address that can be parsed by Google Maps.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Locations List Schema</h3>
          <p>Create a SharePoint list with these columns:</p>
          <ol>
            <li>Create a list to store locations (any name).</li>
            <li>Add required Title column entries for each location.</li>
            <li>Add optional columns for address, contact, and map details.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Office/location name</td></tr>
              <tr><td>Address</td><td>Multiple lines of text</td><td>No</td><td>Full street address</td></tr>
              <tr><td>City</td><td>Single line of text</td><td>No</td><td>Used for search and display</td></tr>
              <tr><td>State</td><td>Single line of text</td><td>No</td><td>Used for search and display</td></tr>
              <tr><td>PostalCode</td><td>Single line of text</td><td>No</td><td>Postal/ZIP code</td></tr>
              <tr><td>Country</td><td>Single line of text</td><td>No</td><td>Used for search and display</td></tr>
              <tr><td>Phone</td><td>Single line of text</td><td>No</td><td>Contact phone number</td></tr>
              <tr><td>Email</td><td>Single line of text</td><td>No</td><td>Contact email address</td></tr>
              <tr><td>Hours</td><td>Single line of text</td><td>No</td><td>Operating hours</td></tr>
              <tr><td>Image</td><td>Image or Hyperlink</td><td>No</td><td>Office photo URL</td></tr>
              <tr><td>MapImageUrl</td><td>Image or Hyperlink</td><td>No</td><td>Static map image URL (MapImage also supported)</td></tr>
              <tr><td>Latitude</td><td>Number</td><td>No</td><td>Optional coordinate for directions</td></tr>
              <tr><td>Longitude</td><td>Number</td><td>No</td><td>Optional coordinate for directions</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconOption</code></td><td>Dropdown</td><td>Title icon mode: Custom or None</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Fluent UI icon picker (default: MapPin)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for footer link</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for footer link</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
            </tbody>
          </table>

          <h4>Data Source</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where list is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>SharePoint list containing locations</td></tr>
              <tr><td><code>viewName</code></td><td>View Picker</td><td>View to filter locations</td></tr>
            </tbody>
          </table>

          <h4>Search Options</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>showSearch</code></td><td>Toggle</td><td>Enable search functionality (default: On)</td></tr>
              <tr><td><code>searchPlaceholder</code></td><td>Text</td><td>Placeholder text for search box</td></tr>
              <tr><td><code>showResultsOnLoad</code></td><td>Toggle</td><td>Show all results initially (default: On)</td></tr>
              <tr><td><code>expandSearchField</code></td><td>Toggle</td><td>Expand search field on focus (default: Off)</td></tr>
            </tbody>
          </table>

          <h4>Field Visibility</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>showAddress</code></td><td>Toggle</td><td>Show address (default: On)</td></tr>
              <tr><td><code>showPhone</code></td><td>Toggle</td><td>Show phone number (default: On)</td></tr>
              <tr><td><code>showEmail</code></td><td>Toggle</td><td>Show email address (default: On)</td></tr>
              <tr><td><code>showHours</code></td><td>Toggle</td><td>Show operating hours (default: Off)</td></tr>
              <tr><td><code>showImage</code></td><td>Toggle</td><td>Show office image (default: On)</td></tr>
              <tr><td><code>showMapImage</code></td><td>Toggle</td><td>Show map image (default: On)</td></tr>
              <tr><td><code>showDirections</code></td><td>Toggle</td><td>Show &quot;Get Directions&quot; link (default: On)</td></tr>
            </tbody>
          </table>

          <h4>Display Options</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>displayAs</code></td><td>Dropdown</td><td>Cards or List</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (3-24)</td><td>Locations per page (step: 3, default: 9)</td></tr>
              <tr><td><code>showPaging</code></td><td>Toggle</td><td>Enable pagination (default: On)</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto)</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Cards and List display layouts</li>
            <li>✅ Search functionality</li>
            <li>✅ Office images and map images</li>
            <li>✅ Contact information (phone, email)</li>
            <li>✅ Operating hours</li>
            <li>✅ &quot;Get Directions&quot; link (Google Maps)</li>
            <li>✅ Pagination</li>
            <li>✅ View-based filtering</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
