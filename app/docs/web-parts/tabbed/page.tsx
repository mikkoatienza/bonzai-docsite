import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function TabbedWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Tabbed</DocsTitle>
      <DocsDescription>
        Organize content in tabs or accordion layouts.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              Layout
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Tabbed Working in 3 Steps"
            time="3 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Tabbed".' },
              { title: 'Choose mode', description: 'Select Tabs or Accordion layout mode.' },
              { title: 'Configure tabs', description: 'Add tab titles and content for each section.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Organize FAQs in an accordion',
              'Create tabbed content sections',
              'Display categorized information',
              'Save vertical space with collapsible content',
            ]}
            bestFor={[
              'FAQ pages — expandable Q&A',
              'Department pages — categorized info',
              'About pages — organized sections',
            ]}
            notFor={[
              'Long-form content — use regular page sections',
              'Navigation — use Advanced Links',
            ]}
          />

          <h2>Layout Modes</h2>
          <ul>
            <li><strong>Tabs:</strong> Horizontal tabs with content panels</li>
            <li><strong>Accordion:</strong> Collapsible sections (FAQ-style)</li>
          </ul>

          <Callout type="tip" title="Use accordion for mobile-first">
            Accordion layout works better on mobile devices than horizontal tabs.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Tabs not switching', solution: 'Check JavaScript is enabled. Try refreshing the page.' },
              { problem: 'Content not saving', solution: 'Ensure you click Apply in property pane before closing.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>
          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>mode</code></td><td>Dropdown</td><td>Tabs or Accordion</td></tr>
              <tr><td><code>tabs</code></td><td>Collection</td><td>Tab titles and content</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
