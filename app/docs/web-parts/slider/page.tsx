import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function SliderWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Slider</DocsTitle>
      <DocsDescription>
        Rotating banner carousel for featured content.
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
            title="Get Slider Working in 3 Steps"
            time="3 minutes"
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Slider" to a section.' },
              { title: 'Tag pages for slider', description: 'Set Showcase column to "Slider" on pages you want to include.' },
              { title: 'Configure auto-play', description: 'Enable auto-play and set rotation interval.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Create a rotating hero banner',
              'Highlight multiple featured stories',
              'Display promotional content',
              'Showcase news highlights',
            ]}
            bestFor={[
              'Homepage — hero carousel',
              'News center — featured stories',
              'Event pages — upcoming highlights',
            ]}
            notFor={[
              'Static content — use Landing',
              'All news articles — use News Rollup',
            ]}
            alternatives={[
              { name: 'Landing', when: 'static tile grid' },
              { name: 'Spotlight Rollup', when: 'static featured cards' },
            ]}
          />

          <h2>Auto-Play Settings</h2>
          <ul>
            <li><strong>Interval:</strong> 3-10 seconds typical</li>
            <li><strong>Pause on hover:</strong> Automatically pauses when user hovers</li>
            <li><strong>Navigation:</strong> Dots and arrows for manual control</li>
          </ul>

          <Callout type="tip" title="Limit to 3-5 slides">
            Too many slides reduces engagement. Keep the most important content visible.
          </Callout>

          <Callout type="warning" title="Accessibility consideration">
            Some users prefer to disable auto-play. Always include navigation controls.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Slider is empty', solution: 'Ensure pages have Showcase set to "Slider" and are published.' },
              { problem: 'Auto-play not working', solution: 'Check Auto-play is enabled in property pane.' },
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
              <tr><td><code>showcaseFilter</code></td><td>Text</td><td>Filter value (e.g., "Slider")</td></tr>
              <tr><td><code>autoPlay</code></td><td>Toggle</td><td>Enable auto-rotation</td></tr>
              <tr><td><code>interval</code></td><td>Number</td><td>Seconds between slides</td></tr>
              <tr><td><code>showNavigation</code></td><td>Toggle</td><td>Show dots/arrows</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
