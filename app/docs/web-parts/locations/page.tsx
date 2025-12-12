import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function LocationsWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Locations</DocsTitle>
      <DocsDescription>
        Display office locations with contact information and addresses.
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
            time="5 minutes"
            prerequisites={['Locations SharePoint list created']}
            steps={[
              { title: 'Create the locations list', description: 'Create a list with Title, Address, Phone, and Image columns.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Locations".' },
              { title: 'Select your list', description: 'Choose your Locations list and configure display.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display office locations',
              'Show branch contact information',
              'Create an office directory',
              'Feature regional offices',
            ]}
            bestFor={[
              'About Us page — office listings',
              'Contact page — office contacts',
              'People & Directory page — locations section',
            ]}
            notFor={[
              'Interactive maps — use embedded maps',
              'People contacts — use People Listing',
            ]}
          />

          <Callout type="tip" title="Add location images">
            Office photos make the locations more recognizable and visually appealing.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Locations not showing', solution: 'Verify the Locations list has items.' },
              { problem: 'Images not displaying', solution: 'Ensure Image column has valid URLs.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Locations List Schema</h3>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line</td><td>Yes</td></tr>
              <tr><td>Address</td><td>Multiple lines</td><td>No</td></tr>
              <tr><td>Phone</td><td>Single line</td><td>No</td></tr>
              <tr><td>Email</td><td>Single line</td><td>No</td></tr>
              <tr><td>Image</td><td>Image</td><td>No</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Locations list</td></tr>
              <tr><td><code>displayAs</code></td><td>Dropdown</td><td>Cards or List</td></tr>
              <tr><td><code>showSearch</code></td><td>Toggle</td><td>Enable search</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
