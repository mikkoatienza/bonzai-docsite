import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function AdvancedLinksWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Advanced Links</DocsTitle>
      <DocsDescription>
        Display categorized link collections with icons and descriptions.
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
            title="Get Advanced Links Working in 3 Steps"
            time="5 minutes"
            prerequisites={['Advanced Links SharePoint list created']}
            steps={[
              { title: 'Create the links list', description: 'Create a list with Title, URL, Icon, Description, and Category columns.' },
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Advanced Links".' },
              { title: 'Select your list', description: 'Choose your links list and enable category grouping.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Create quick links sections',
              'Display categorized resource links',
              'Build navigation menus with icons',
              'Organize external tool links',
            ]}
            bestFor={[
              'Homepage — quick links widget',
              'Resource pages — categorized links',
              'Department pages — team resources',
            ]}
            notFor={[
              'Site directory — use Site Directory',
              'Page listings — use Pages Rollup',
            ]}
            alternatives={[
              { name: 'Site Directory', when: 'SharePoint site listings' },
              { name: 'Landing', when: 'visual tile navigation' },
            ]}
          />

          <h2>Display Templates</h2>
          <ul>
            <li><strong>Tiles:</strong> Icon tiles in a grid</li>
            <li><strong>List with Icons:</strong> Vertical list with icons</li>
            <li><strong>Links with Descriptions:</strong> Detailed link cards</li>
            <li><strong>Text Only:</strong> Simple text links</li>
          </ul>

          <Callout type="tip" title="Use Fluent UI icons">
            Icon column uses Fluent UI icon names (e.g., "Home", "Mail", "Calendar").
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Links not appearing', solution: 'Verify the Advanced Links list has items and correct list is selected.' },
              { problem: 'Icons not showing', solution: 'Check icon names are valid Fluent UI icons.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Links List Schema</h3>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line</td><td>Yes</td></tr>
              <tr><td>URL</td><td>Hyperlink</td><td>Yes</td></tr>
              <tr><td>Icon</td><td>Single line</td><td>No</td></tr>
              <tr><td>Description</td><td>Multiple lines</td><td>No</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td></tr>
              <tr><td>LinkOrder</td><td>Number</td><td>No</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Links list</td></tr>
              <tr><td><code>template</code></td><td>Dropdown</td><td>Display template</td></tr>
              <tr><td><code>showCategories</code></td><td>Toggle</td><td>Group by category</td></tr>
              <tr><td><code>showIcons</code></td><td>Toggle</td><td>Display icons</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
