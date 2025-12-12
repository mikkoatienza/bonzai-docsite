import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function SiteDirectoryWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Site Directory</DocsTitle>
      <DocsDescription>
        Search and browse SharePoint sites with typeahead and favourites.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              Navigation
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 90%
            </span>
          </div>

          <QuickStart
            title="Get Site Directory Working in 3 Steps"
            time="5 minutes"
            prerequisites={['Site Directory SharePoint list created']}
            steps={[
              { title: 'Create the site directory list', description: 'Create a list with Title, URL, Description, and Owner columns.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Site Directory".' },
              { title: 'Enable search and favourites', description: 'Toggle on typeahead search and favourites panel.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Create a searchable site catalog',
              'Allow users to find SharePoint sites',
              'Enable site bookmarking (favourites)',
              'Browse sites by category or department',
            ]}
            bestFor={[
              'People & Directory page — site listings',
              'Homepage — site search widget',
              'Navigation hub — all sites directory',
            ]}
            notFor={[
              'Quick links to specific pages — use Advanced Links',
              'Document search — use Document Portal',
            ]}
            alternatives={[
              { name: 'Favourite Sites', when: 'bookmarked sites only' },
              { name: 'Advanced Links', when: 'curated link lists' },
            ]}
          />

          <Callout type="tip" title="Enable typeahead for large directories">
            Typeahead search helps users find sites quickly in large organizations.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Sites not appearing', solution: 'Verify the Site Directory list has items with valid URLs.' },
              { problem: 'Typeahead not working', solution: 'Check "Show Typeahead" is enabled in property pane.' },
              { problem: 'Favourites not saving', solution: 'Favourites use browser storage. Check storage is enabled.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Site Directory List Schema</h3>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line</td><td>Yes</td></tr>
              <tr><td>URL</td><td>Hyperlink</td><td>Yes</td></tr>
              <tr><td>Description</td><td>Multiple lines</td><td>No</td></tr>
              <tr><td>Owner</td><td>Person</td><td>No</td></tr>
              <tr><td>Image</td><td>Image</td><td>No</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Site Directory list</td></tr>
              <tr><td><code>showSearch</code></td><td>Toggle</td><td>Enable search</td></tr>
              <tr><td><code>showTypeahead</code></td><td>Toggle</td><td>Enable typeahead</td></tr>
              <tr><td><code>showFavourites</code></td><td>Toggle</td><td>Show favourites panel</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Number</td><td>Items per page</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
