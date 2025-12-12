import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function FavouriteDocumentsWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Favourite Documents</DocsTitle>
      <DocsDescription>
        Display user-bookmarked documents for quick access.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Documents
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Favourite Documents Working in 3 Steps"
            time="2 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Favourite Documents".' },
              { title: 'Select a library', description: 'Choose the document library users can favourite from.' },
              { title: 'Configure display', description: 'Set items to show and publish.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Provide quick access to frequently used documents',
              'Let users bookmark important files',
              'Create a personalized document panel',
            ]}
            bestFor={[
              'Homepage — personal document shortcuts',
              'Dashboard pages — quick access panel',
              'Document Center — alongside Document Portal',
            ]}
            notFor={[
              'Displaying all documents — use Documents Rollup',
              'Shared favourites — this is per-user',
            ]}
          />

          <h2>How Favouriting Works</h2>
          <ol>
            <li>User clicks the star icon on a document in Document Portal or Documents Rollup</li>
            <li>Document is saved to their browser local storage</li>
            <li>Favourite Documents web part displays their starred items</li>
          </ol>

          <Callout type="info" title="Per-user storage">
            Favourites are stored in browser local storage, not SharePoint. 
            Clearing browser data resets favourites.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Favourites not appearing', solution: 'User must star documents first. Check browser storage is enabled.' },
              { problem: 'Favourites disappeared', solution: 'Browser data may have been cleared. Favourites need to be re-added.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>
          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>libraryId</code></td><td>Dropdown</td><td>Source library</td></tr>
              <tr><td><code>itemsToShow</code></td><td>Number</td><td>Max items displayed</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
