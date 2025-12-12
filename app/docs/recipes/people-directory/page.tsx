import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Step } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function PeopleDirectoryRecipe() {
  return (
    <DocsPage>
      <DocsTitle>People & Directory Recipe</DocsTitle>
      <DocsDescription>
        Build a complete people finder with employee directory, team listings, locations, and site directory.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              People
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
            This recipe creates a comprehensive people finder page with 
            employee search, team listings, office locations, and site directory.
          </p>

          <h2>Page Layout</h2>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="space-y-3">
              <div className="rounded bg-cyan-100 p-3 text-center text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300">
                Section 1: Full Width — Employee Directory
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded bg-blue-100 p-3 text-center text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  Left (50%) — People Listing
                </div>
                <div className="flex-1 rounded bg-green-100 p-3 text-center text-sm font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                  Right (50%) — Locations
                </div>
              </div>
              <div className="rounded bg-purple-100 p-3 text-center text-sm font-medium text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                Section 3: Full Width — Site Directory
              </div>
            </div>
          </div>

          <h2>Step-by-Step Setup</h2>

          <Step number={1} title="Create the People & Directory Page">
            <ol>
              <li>Go to <strong>Site Contents → Site Pages → + New → Page</strong></li>
              <li>Name the page <strong>"People & Directory"</strong></li>
              <li>Add to site navigation</li>
            </ol>
          </Step>

          <Step number={2} title="Add Section 1: Employee Directory" tip="Employee Directory works best in full width for browsing large organizations">
            <p>Add a full-width section for the main employee search.</p>
            <p><strong>Add web part:</strong> Bonzai Employee Directory</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Employee Directory</td></tr>
                <tr><td>Show Search</td><td>Yes</td></tr>
                <tr><td>Show Alphabetical Filter</td><td>Yes</td></tr>
                <tr><td>Items Per Page</td><td>12</td></tr>
                <tr><td>Show Picture</td><td>Yes</td></tr>
                <tr><td>Show Role</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>ContactCard</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={3} title="Add Section 2: Two Columns (50%/50%)">
            <p>Add a two-column section for team members and locations.</p>
            <p><strong>Left Column:</strong> Bonzai People Listing</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Team Members</td></tr>
                <tr><td>List Name</td><td>Employee Directory</td></tr>
                <tr><td>Display As</td><td>Cards</td></tr>
                <tr><td>Items Per Page</td><td>6</td></tr>
                <tr><td>Show Search</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>People</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={4} title="Add Locations to Right Column">
            <p><strong>Right Column:</strong> Bonzai Locations</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Our Offices</td></tr>
                <tr><td>List Name</td><td>Locations</td></tr>
                <tr><td>Display As</td><td>Cards</td></tr>
                <tr><td>Show Search</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>MapPin</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={5} title="Add Section 3: Site Directory">
            <p>Add a full-width section for the site directory.</p>
            <p><strong>Add web part:</strong> Bonzai Site Directory</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Site Directory</td></tr>
                <tr><td>Show Search</td><td>Yes</td></tr>
                <tr><td>Show Typeahead</td><td>Yes</td></tr>
                <tr><td>Items Per Page</td><td>10</td></tr>
                <tr><td>Show Favourites</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>SharepointLogo</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={6} title="Create Required Lists">
            <p>Before the page works fully, create these lists:</p>
            <ol>
              <li><strong>Employee Directory list</strong> — for People Listing</li>
              <li><strong>Locations list</strong> — for office locations</li>
              <li><strong>Site Directory list</strong> — for site listings</li>
            </ol>
          </Step>

          <Step number={7} title="Publish and Test">
            <ol>
              <li>Save and publish the page</li>
              <li>Add to site navigation</li>
              <li>Test employee search and A-Z filtering</li>
              <li>Verify locations and site directory display correctly</li>
            </ol>
          </Step>

          <Callout type="info" title="Employee Directory vs People Listing">
            <strong>Employee Directory</strong> pulls from Azure AD/SharePoint profiles (all users).
            <strong>People Listing</strong> pulls from a custom SharePoint list (curated team members).
            Use both for different purposes.
          </Callout>

          <h2>Required SharePoint Lists</h2>

          <h3>Locations List Schema</h3>
          <table>
            <thead>
              <tr><th>Column</th><th>Type</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Office name</td></tr>
              <tr><td>Address</td><td>Multiple lines of text</td><td>Full address</td></tr>
              <tr><td>Phone</td><td>Single line of text</td><td>Main phone number</td></tr>
              <tr><td>Email</td><td>Single line of text</td><td>Office email</td></tr>
              <tr><td>Image</td><td>Image</td><td>Office photo</td></tr>
            </tbody>
          </table>

          <h3>Site Directory List Schema</h3>
          <table>
            <thead>
              <tr><th>Column</th><th>Type</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Site name</td></tr>
              <tr><td>Description</td><td>Multiple lines of text</td><td>Site purpose</td></tr>
              <tr><td>URL</td><td>Hyperlink</td><td>Link to site</td></tr>
              <tr><td>Owner</td><td>Person</td><td>Site owner</td></tr>
              <tr><td>Image</td><td>Image</td><td>Site logo/thumbnail</td></tr>
            </tbody>
          </table>

          <Troubleshooting
            items={[
              {
                problem: 'Employee Directory shows no results',
                solution: 'Employee Directory uses SharePoint People Search. Ensure search is functioning and users exist in Azure AD.',
              },
              {
                problem: 'Profile photos not showing',
                solution: 'Photos come from Azure AD/Microsoft 365 profiles. Users must have photos set in their M365 profile.',
              },
              {
                problem: 'People Listing is empty',
                solution: 'Verify the Employee Directory list exists and has items. Check the List Name property matches exactly.',
              },
              {
                problem: 'A-Z filter letters not working',
                solution: 'The filter is based on DisplayName. Ensure names are formatted correctly (First Last) in Azure AD.',
              },
            ]}
          />

          <h2>Final Checklist</h2>

          <ul>
            <li>☐ Employee Directory showing users with photos</li>
            <li>☐ Search and A-Z filter working</li>
            <li>☐ People Listing displaying team members</li>
            <li>☐ Locations showing office cards</li>
            <li>☐ Site Directory with search and favourites</li>
            <li>☐ All required lists created with data</li>
            <li>☐ Page added to navigation</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

