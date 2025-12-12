import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function LandingWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Landing</DocsTitle>
      <DocsDescription>
        Display content tiles in grid layouts for landing page banners.
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
            title="Get Landing Working in 3 Steps"
            time="3 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Landing" to a full-width section.' },
              { title: 'Select your page source', description: 'Choose Site Pages as the source list.' },
              { title: 'Configure grid layout', description: 'Set items per row (2-6) and choose a template.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Create landing page tile banners',
              'Display category navigation tiles',
              'Show featured content in a grid',
              'Build department or topic entry points',
            ]}
            bestFor={[
              'Homepage — main navigation grid',
              'Landing pages — category tiles',
              'Department pages — sub-section links',
            ]}
            notFor={[
              'News articles — use News Rollup',
              'Rotating content — use Slider',
            ]}
            alternatives={[
              { name: 'Pages Rollup', when: 'general page listings' },
              { name: 'Slider', when: 'rotating banner content' },
            ]}
          />

          <h2>Grid Layouts</h2>
          <p>Landing supports 1-6 items per row. Use wider layouts for prominent content:</p>
          <ul>
            <li><strong>1 column:</strong> Full-width hero banner</li>
            <li><strong>2 columns:</strong> Large feature tiles</li>
            <li><strong>3-4 columns:</strong> Standard navigation grid</li>
            <li><strong>5-6 columns:</strong> Compact category tiles</li>
          </ul>

          <Callout type="tip" title="Use overlay for readability">
            Enable "Show Overlay" to darken images and improve title visibility.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Tiles not showing images', solution: 'Ensure pages have banner images set in page properties.' },
              { problem: 'Grid layout looks uneven', solution: 'Use pages with similar image aspect ratios.' },
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
              <tr><td><code>template</code></td><td>Dropdown</td><td>Display template</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Number</td><td>Grid columns (1-6)</td></tr>
              <tr><td><code>showOverlay</code></td><td>Toggle</td><td>Dark overlay on images</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
