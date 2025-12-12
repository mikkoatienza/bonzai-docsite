import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function PagesRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Pages Rollup</DocsTitle>
      <DocsDescription>
        Display SharePoint pages with sorting, filtering, and multiple templates.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Content
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Pages Rollup Working in 3 Steps"
            time="2 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Pages Rollup".' },
              { title: 'Select Site Pages', description: 'Choose Site Pages as the source.' },
              { title: 'Configure display', description: 'Choose template (Cards/List) and sort order.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Display recent pages on the homepage',
              'Show pages by category or tag',
              'Create a knowledge base listing',
              'Display child pages of a section',
            ]}
            bestFor={[
              'Homepage — recent pages widget',
              'Category pages — filtered content',
              'Documentation hubs — page listings',
            ]}
            notFor={[
              'News specifically — use News Rollup',
              'Featured content — use Spotlight Rollup',
            ]}
            alternatives={[
              { name: 'News Rollup', when: 'news-specific content' },
              { name: 'Spotlight Rollup', when: 'featured/promoted content' },
            ]}
          />

          <Callout type="tip" title="Sort by Modified for recent content">
            Set Sort By to "Modified" to show the most recently updated pages.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Pages not appearing', solution: 'Verify pages are published, not drafts.' },
              { problem: 'Wrong pages showing', solution: 'Use a view filter or Showcase column to narrow results.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>
          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Source list</td></tr>
              <tr><td><code>template</code></td><td>Dropdown</td><td>Cards, List</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Number</td><td>Pages to display</td></tr>
              <tr><td><code>sortBy</code></td><td>Dropdown</td><td>Sort column</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
