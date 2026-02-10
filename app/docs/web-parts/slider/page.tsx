import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Play, Pause, Sparkles, RotateCw } from 'lucide-react';

export default function SliderWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Slider</DocsTitle>
      <DocsDescription>
        Rotating banner carousel for featured content with multiple transition animations and auto-play.
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
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Site Pages with banner images',
              'Pages tagged with Showcase (or Featured) = "Slider"',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Slider" to a full-width section.' },
              { title: 'Choose your data source', description: 'Select a site and list, then set the Showcase value (default: Slider). Optionally pre-filter by tags.' },
              { title: 'Configure animation and display', description: 'Choose a transition animation, enable auto-play, and set overlay/metadata options.' },
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

          <h2>Animation Options</h2>
          <p>The slider supports multiple transition animations:</p>
          <ul>
            <li><strong>Fade:</strong> Smooth fade transition between slides</li>
            <li><strong>Slide:</strong> Horizontal slide transition</li>
            <li><strong>Flip X:</strong> Horizontal flip animation</li>
            <li><strong>Flip Y:</strong> Vertical flip animation</li>
            <li><strong>Rotate:</strong> Rotation animation</li>
          </ul>

          <h2>Auto-Play Settings</h2>
          <ul>
            <li><strong>Interval:</strong> 2-30 seconds (default: 5 seconds)</li>
            <li><strong>Transition Duration:</strong> 1-10 seconds (default: 3 seconds)</li>
            <li><strong>Pause on hover:</strong> Automatically pauses when user hovers</li>
          </ul>

          <h2>Recent Updates</h2>
          <ul>
            <li>Site picker, list picker, and title icon picker.</li>
            <li>Showcase selector + tag multi-select for curated slides.</li>
            <li>Search and filter UI with metadata toggles (date/author/tags).</li>
          </ul>

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Homepage Hero"
              description="Auto-playing hero carousel"
              useCase="Homepage"
              icon={<Play className="h-5 w-5" />}
              config={[
                { property: 'List', value: 'Site Pages' },
                { property: 'Showcase Value', value: 'Slider' },
                { property: 'autoPlay', value: 'On' },
                { property: 'autoPlayInterval', value: '5' },
                { property: 'transitionAnimation', value: 'fade' },
              ]}
            />
            <RecipeCard
              title="Static Banner"
              description="Manual navigation only"
              useCase="Landing page"
              icon={<Pause className="h-5 w-5" />}
              config={[
                { property: 'autoPlay', value: 'Off' },
                { property: 'showOverlay', value: 'On' },
                { property: 'fixedHeight', value: '400' },
              ]}
            />
            <RecipeCard
              title="Dynamic Slide Effect"
              description="Slide animation with fast transitions"
              useCase="News page"
              icon={<RotateCw className="h-5 w-5" />}
              config={[
                { property: 'transitionAnimation', value: 'slide' },
                { property: 'transitionDuration', value: '2' },
                { property: 'autoPlayInterval', value: '4' },
              ]}
            />
            <RecipeCard
              title="Tagged Highlights"
              description="Curated slider items by tag"
              useCase="News center"
              icon={<Sparkles className="h-5 w-5" />}
              config={[
                { property: 'Showcase Value', value: 'Slider' },
                { property: 'Filter Tags', value: 'Leadership, Featured' },
                { property: 'Show Tags', value: 'On' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Limit to 3-5 slides">
            Too many slides reduces engagement. Keep the most important content visible.
          </Callout>

          <Callout type="warning" title="Accessibility consideration">
            Some users prefer to disable auto-play. The slider includes navigation controls for manual browsing.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Slider is empty', solution: 'Ensure pages are tagged with Showcase = "Slider" and have banner images. Check site/list selection.' },
              { problem: 'Auto-play not working', solution: 'Check "Auto Play" toggle is enabled in property pane and interval is set.' },
              { problem: 'Wrong pages appearing', solution: 'Verify Showcase value and any selected tag filters in the property pane.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>

          <h4>Main Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title (blank hides header row)</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Fluent UI icon for the header</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional title link URL</td></tr>
              <tr><td><code>siteUrlMode</code></td><td>Dropdown</td><td>Pick a site or enter a manual URL</td></tr>
              <tr><td><code>selectedSites</code></td><td>Site Picker</td><td>Selected site when using Site Picker</td></tr>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Manual site URL when Site Selection Mode = manual</td></tr>
              <tr><td><code>listId</code></td><td>List Picker</td><td>Source list (Site Pages) from the selected site</td></tr>
              <tr><td><code>showcaseValue</code></td><td>Dropdown</td><td>Showcase/Featured value used to include items (default: Slider)</td></tr>
              <tr><td><code>selectedTags</code></td><td>Multi-select</td><td>Pre-filter by tags (optional)</td></tr>
              <tr><td><code>transitionAnimation</code></td><td>Dropdown</td><td>Animation: Fade, Slide, Flip X, Flip Y, Rotate</td></tr>
              <tr><td><code>transitionDuration</code></td><td>Text (Number)</td><td>Transition duration in seconds (1-10)</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (200-800)</td><td>Slider height in pixels (default: 500)</td></tr>
              <tr><td><code>textScale</code></td><td>Slider</td><td>Scale the overlay text size (percent)</td></tr>
              <tr><td><code>autoPlay</code></td><td>Toggle</td><td>Enable auto-rotation (default: On)</td></tr>
              <tr><td><code>autoPlayInterval</code></td><td>Slider (2-30)</td><td>Seconds between slides (default: 5)</td></tr>
              <tr><td><code>showOverlay</code></td><td>Toggle</td><td>Show dark overlay for text readability (default: On)</td></tr>
              <tr><td><code>showDate</code></td><td>Toggle</td><td>Show published/modified date</td></tr>
              <tr><td><code>showAuthor</code></td><td>Toggle</td><td>Show author</td></tr>
              <tr><td><code>showCategory</code></td><td>Toggle</td><td>Show category label when the field exists</td></tr>
              <tr><td><code>showTags</code></td><td>Toggle</td><td>Show tags when available</td></tr>
              <tr><td><code>showExcerpt</code></td><td>Toggle</td><td>Show excerpt/description</td></tr>
              <tr><td><code>showLikes</code></td><td>Toggle</td><td>Show likes count when available</td></tr>
              <tr><td><code>showComments</code></td><td>Toggle</td><td>Show comments count when available</td></tr>
              <tr><td><code>enableSearch</code></td><td>Toggle</td><td>Show search box</td></tr>
              <tr><td><code>enableFilters</code></td><td>Toggle</td><td>Show filter controls (tags, page type, date range)</td></tr>
            </tbody>
          </table>

          <h4>Advanced Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Web part description</td></tr>
              <tr><td><code>helpUrl</code></td><td>Text</td><td>Help documentation URL</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Multiple transition animations (Fade, Slide, Flip X, Flip Y, Rotate)</li>
            <li>✅ Configurable auto-play with interval</li>
            <li>✅ Pause on hover</li>
            <li>✅ Navigation controls (dots and arrows)</li>
            <li>✅ Dark overlay option</li>
            <li>✅ Showcase-based curation + optional tag pre-filter</li>
            <li>✅ Search and filter UI (search, tags, page type, date range)</li>
            <li>✅ Metadata toggles (date, author, tags, likes, comments)</li>
            <li>✅ Configurable height</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
