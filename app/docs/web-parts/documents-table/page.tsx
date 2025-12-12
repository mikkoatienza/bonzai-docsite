import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function DocumentsTableWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Documents Table</DocsTitle>
      <DocsDescription>
        Display documents in a sortable, paginated table format.
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
            title="Get Documents Table Working in 3 Steps"
            time="2 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Documents Table".' },
              { title: 'Select a library', description: 'Choose your document library from the dropdown.' },
              { title: 'Enable sorting', description: 'Toggle "Sortable Columns" and set items per page.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display documents in a structured table',
              'Enable column sorting for users',
              'Show metadata columns (author, modified, type)',
              'Create a file browser experience',
            ]}
            bestFor={[
              'Document library pages — structured browsing',
              'Admin pages — file management',
              'Archive pages — historical documents',
            ]}
            notFor={[
              'Visual document display — use Documents Rollup',
              'Full search — use Document Portal',
            ]}
            alternatives={[
              { name: 'Documents Rollup', when: 'card-based display' },
              { name: 'Document Portal', when: 'search and refinement' },
            ]}
          />

          <h2>Best Practices</h2>
          <Callout type="tip" title="Enable column sorting">
            Let users sort by clicking column headers. This improves findability.
          </Callout>
          <Callout type="tip" title="Set reasonable page size">
            10-20 items per page works well. Too many slows performance.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Columns not sortable', solution: 'Enable "Sortable Columns" in the property pane.' },
              { problem: 'Table too wide', solution: 'Reduce visible columns or use a wider section.' },
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
              <tr><td><code>itemsPerPage</code></td><td>Number</td><td>Items per page</td></tr>
              <tr><td><code>showPagination</code></td><td>Toggle</td><td>Enable pagination</td></tr>
              <tr><td><code>sortableColumns</code></td><td>Toggle</td><td>Enable column sorting</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
