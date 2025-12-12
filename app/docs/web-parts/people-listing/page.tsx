import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function PeopleListingWebPart() {
  return (
    <DocsPage>
      <DocsTitle>People Listing</DocsTitle>
      <DocsDescription>
        Display team members from a curated SharePoint list.
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
            time="5 minutes"
            prerequisites={['Employee Directory SharePoint list created']}
            steps={[
              { title: 'Create the people list', description: 'Create a list with Name, Title, Email, Photo, and Department columns.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai People Listing".' },
              { title: 'Select your list', description: 'Choose your people list and configure display options.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display a curated team member list',
              'Show specific people (leadership, project team)',
              'Create an "Our Team" section',
              'Feature new hires or key contacts',
            ]}
            bestFor={[
              'About Us page — leadership team',
              'Department pages — team members',
              'Project pages — project team',
            ]}
            notFor={[
              'Full employee search — use Employee Directory',
              'Dynamic people search — use Employee Directory',
            ]}
            alternatives={[
              { name: 'Employee Directory', when: 'searchable org-wide directory' },
              { name: 'Spotlight Rollup', when: 'featured employee stories' },
            ]}
          />

          <Callout type="info" title="Curated vs. Dynamic">
            People Listing pulls from a custom SharePoint list you manage.
            Employee Directory pulls dynamically from Azure AD.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'People not showing', solution: 'Verify the list has items and correct list is selected.' },
              { problem: 'Photos not displaying', solution: 'Ensure Photo column has valid image URLs.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>People List Schema</h3>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>Title (Name)</td><td>Single line</td><td>Yes</td></tr>
              <tr><td>JobTitle</td><td>Single line</td><td>No</td></tr>
              <tr><td>Email</td><td>Single line</td><td>No</td></tr>
              <tr><td>Photo</td><td>Image or URL</td><td>No</td></tr>
              <tr><td>Department</td><td>Choice</td><td>No</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>People list</td></tr>
              <tr><td><code>displayAs</code></td><td>Dropdown</td><td>Cards or List</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Number</td><td>People per page</td></tr>
              <tr><td><code>showSearch</code></td><td>Toggle</td><td>Enable search</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
