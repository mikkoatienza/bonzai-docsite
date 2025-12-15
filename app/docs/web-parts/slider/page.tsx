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
              'A view to filter slider items (e.g., TodayAndBeforeFeaturedNews)',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Slider" to a full-width section.' },
              { title: 'Configure data source', description: 'Set the list name (default: Site Pages) and view name to filter which pages appear.' },
              { title: 'Configure animation and auto-play', description: 'Choose a transition animation, enable auto-play, and set the rotation interval.' },
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
                { property: 'listName', value: 'Site Pages' },
                { property: 'viewName', value: 'Featured' },
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
              title="Featured News"
              description="Promoted items only"
              useCase="News center"
              icon={<Sparkles className="h-5 w-5" />}
              config={[
                { property: 'showPromotedItems', value: 'On' },
                { property: 'showCommentCount', value: 'On' },
                { property: 'enableContentTargeting', value: 'On' },
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
              { problem: 'Slider is empty', solution: 'Ensure the view returns published pages with banner images. Check the listName and viewName settings.' },
              { problem: 'Auto-play not working', solution: 'Check "Auto Play" toggle is enabled in property pane and interval is set.' },
              { problem: 'Wrong pages appearing', solution: 'Create and select a specific view to filter which pages appear in the slider.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>

          <h4>Main Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL (empty = auto-detect from current site)</td></tr>
              <tr><td><code>listName</code></td><td>Text</td><td>Source list name (default: Site Pages)</td></tr>
              <tr><td><code>viewName</code></td><td>Text</td><td>View to filter slides (default: TodayAndBeforeFeaturedNews)</td></tr>
              <tr><td><code>transitionAnimation</code></td><td>Dropdown</td><td>Animation: Fade, Slide, Flip X, Flip Y, Rotate</td></tr>
              <tr><td><code>transitionDuration</code></td><td>Text (Number)</td><td>Transition duration in seconds (1-10)</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (200-800)</td><td>Slider height in pixels (default: 500)</td></tr>
              <tr><td><code>autoPlay</code></td><td>Toggle</td><td>Enable auto-rotation (default: On)</td></tr>
              <tr><td><code>autoPlayInterval</code></td><td>Slider (2-30)</td><td>Seconds between slides (default: 5)</td></tr>
              <tr><td><code>showOverlay</code></td><td>Toggle</td><td>Show dark overlay for text readability (default: On)</td></tr>
              <tr><td><code>showCommentCount</code></td><td>Toggle</td><td>Show comment count on slides (default: On)</td></tr>
              <tr><td><code>showPromotedItems</code></td><td>Toggle</td><td>Show only promoted/featured items (default: On)</td></tr>
              <tr><td><code>enableContentTargeting</code></td><td>Toggle</td><td>Filter content by user profile attributes</td></tr>
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
            <li>✅ Comment count display</li>
            <li>✅ Promoted items filtering</li>
            <li>✅ Content targeting</li>
            <li>✅ View-based filtering</li>
            <li>✅ Configurable height</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
