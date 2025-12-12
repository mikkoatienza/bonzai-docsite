import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function DocumentsRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Documents Rollup</DocsTitle>
      <DocsDescription>
        Display documents from SharePoint libraries with card or list layouts.
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
            title="Get Documents Rollup Working in 3 Steps"
            time="2 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Documents Rollup".' },
              { title: 'Select a library', description: 'Choose your document library from the property pane dropdown.' },
              { title: 'Configure display', description: 'Set template (Cards/List), sort order, and items per page.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display recent documents on a page',
              'Show department-specific files',
              'Create a simple document gallery',
              'Highlight featured documents',
            ]}
            bestFor={[
              'Homepage — recent documents widget',
              'Department pages — team documents',
              'Landing pages — featured file showcase',
            ]}
            notFor={[
              'Full search experience — use Document Portal',
              'Tabular data view — use Documents Table',
            ]}
            alternatives={[
              { name: 'Document Portal', when: 'full search and refinement' },
              { name: 'Documents Table', when: 'tabular view with sorting' },
            ]}
          />

          <h2>Best Practices</h2>
          <Callout type="tip" title="Sort by Modified date">
            Set "Sort By" to Modified to show the most recently updated documents first.
          </Callout>
          <Callout type="tip" title="Use views for filtering">
            Create SharePoint views to filter documents, then select that view in the web part.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Documents not showing', solution: 'Verify the library has documents and the correct library is selected.' },
              { problem: 'Wrong files appearing', solution: 'Check the view filter or create a filtered view.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>
          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>libraryId</code></td><td>Dropdown</td><td>Document library</td></tr>
              <tr><td><code>template</code></td><td>Dropdown</td><td>Cards, List</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Number</td><td>Documents per page</td></tr>
              <tr><td><code>sortBy</code></td><td>Dropdown</td><td>Sort column</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
