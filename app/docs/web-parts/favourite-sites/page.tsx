import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function FavouriteSitesWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Favourite Sites</DocsTitle>
      <DocsDescription>
        Display user-bookmarked SharePoint sites for quick access.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              Navigation
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Favourite Sites Working in 3 Steps"
            time="2 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Favourite Sites".' },
              { title: 'Select your site directory list', description: 'Choose the Site Directory list as the source.' },
              { title: 'Configure display', description: 'Set items to show and display options.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Provide quick access to frequently used sites',
              'Display personalized site shortcuts',
              'Create a "My Sites" panel',
            ]}
            bestFor={[
              'Homepage — personal site shortcuts',
              'Dashboard pages — quick access panel',
              'People pages — alongside Site Directory',
            ]}
            notFor={[
              'All sites listing — use Site Directory',
              'Static site links — use Advanced Links',
            ]}
          />

          <h2>How Favouriting Works</h2>
          <ol>
            <li>User clicks the star icon on a site in Site Directory</li>
            <li>Site is saved to their browser local storage</li>
            <li>Favourite Sites web part displays their starred sites</li>
          </ol>

          <Callout type="info" title="Per-user storage">
            Like Favourite Documents, favourites are stored in browser local storage.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Favourites empty', solution: 'User must star sites first in Site Directory.' },
              { problem: 'Favourites disappeared', solution: 'Browser data may have been cleared.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>
          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Site Directory list</td></tr>
              <tr><td><code>itemsToShow</code></td><td>Number</td><td>Max items displayed</td></tr>
              <tr><td><code>showDescription</code></td><td>Toggle</td><td>Show site descriptions</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
