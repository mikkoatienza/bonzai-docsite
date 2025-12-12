import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Step } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function ContentShowcaseRecipe() {
  return (
    <DocsPage>
      <DocsTitle>Content Showcase Recipe</DocsTitle>
      <DocsDescription>
        Build a rich content display page with landing tiles, pages rollup, content cards, and slider.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              Content
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              5 Web Parts
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              ~20 minutes
            </span>
          </div>

          <h2>Overview</h2>
          <p>
            This recipe creates a visually rich content showcase page perfect for 
            department landing pages, resource centers, or content hubs. It combines 
            multiple content display formats for maximum visual impact.
          </p>

          <h2>Page Layout</h2>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="space-y-3">
              <div className="rounded bg-purple-100 p-3 text-center text-sm font-medium text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                Section 1: Full Width — Landing Web Part (Banner Tiles)
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded bg-blue-100 p-3 text-center text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  Left (50%) — Pages Rollup
                </div>
                <div className="flex-1 rounded bg-green-100 p-3 text-center text-sm font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">
                  Right (50%) — Content Cards
                </div>
              </div>
              <div className="rounded bg-amber-100 p-3 text-center text-sm font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                Section 3: Full Width — Slider (Highlights)
              </div>
            </div>
          </div>

          <h2>Step-by-Step Setup</h2>

          <Step number={1} title="Create the Content Showcase Page">
            <ol>
              <li>Go to <strong>Site Contents → Site Pages → + New → Page</strong></li>
              <li>Name the page <strong>"Content Showcase"</strong></li>
              <li>Add to site navigation</li>
            </ol>
          </Step>

          <Step number={2} title="Add Section 1: Landing Banner" tip="Use 4 items per row for a balanced grid">
            <p>Add a full-width section for the landing tiles banner.</p>
            <p><strong>Add web part:</strong> Bonzai Landing</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Welcome</td></tr>
                <tr><td>List Name</td><td>Site Pages</td></tr>
                <tr><td>Template</td><td>Description</td></tr>
                <tr><td>Items Per Row</td><td>4</td></tr>
                <tr><td>Show Overlay</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>ViewAll</td></tr>
                <tr><td>Chrome Type</td><td>None</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={3} title="Add Section 2: Two Columns (50%/50%)">
            <p>Add a two-column section for Pages Rollup and Content Cards.</p>
            <p><strong>Left Column:</strong> Bonzai Pages Rollup</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Recent Pages</td></tr>
                <tr><td>List Name</td><td>Site Pages</td></tr>
                <tr><td>Template</td><td>Cards</td></tr>
                <tr><td>Items Per Page</td><td>4</td></tr>
                <tr><td>Sort By</td><td>Modified</td></tr>
                <tr><td>Title Icon</td><td>Page</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={4} title="Add Content Cards to Right Column">
            <p><strong>Right Column:</strong> Bonzai Content Cards</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Featured Resources</td></tr>
                <tr><td>Cards</td><td>4 manual cards</td></tr>
                <tr><td>Layout</td><td>Grid</td></tr>
                <tr><td>Title Icon</td><td>GridViewMedium</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
            <Callout type="tip" title="Content Cards are manually configured">
              Unlike other web parts, Content Cards are configured manually with 
              title, description, link, and optional image for each card.
            </Callout>
          </Step>

          <Step number={5} title="Add Section 3: Slider">
            <p>Add a full-width section for the rotating slider.</p>
            <p><strong>Add web part:</strong> Bonzai Slider</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Highlights</td></tr>
                <tr><td>List Name</td><td>Site Pages</td></tr>
                <tr><td>Showcase Value</td><td>Slider</td></tr>
                <tr><td>Auto-play</td><td>Yes</td></tr>
                <tr><td>Interval</td><td>5 seconds</td></tr>
                <tr><td>Show Navigation</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>Slider</td></tr>
                <tr><td>Chrome Type</td><td>None</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={6} title="Publish and Test">
            <ol>
              <li>Save and publish the page</li>
              <li>Add to site navigation</li>
              <li>Verify all web parts display content correctly</li>
              <li>Test slider auto-rotation and navigation controls</li>
            </ol>
          </Step>

          <h2>Showcase Values</h2>

          <p>This page uses Showcase column values to filter content:</p>

          <table>
            <thead>
              <tr><th>Web Part</th><th>Showcase Value</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Landing</td><td>(uses all pages)</td><td>Banner grid tiles</td></tr>
              <tr><td>Slider</td><td>Slider</td><td>Rotating highlight content</td></tr>
              <tr><td>Pages Rollup</td><td>(sorted by date)</td><td>Recent pages</td></tr>
            </tbody>
          </table>

          <Callout type="info" title="About the Showcase column">
            The Showcase column is a choice column on Site Pages that categorizes content 
            for different web parts. Common values: News Rollup, Slider, Spotlight, Landing.
          </Callout>

          <Troubleshooting
            items={[
              {
                problem: 'Landing tiles not showing',
                solution: 'Ensure Site Pages have banner images set and are published.',
              },
              {
                problem: 'Slider is empty',
                solution: 'Add the "Slider" value to pages you want in the rotation via the Showcase column.',
              },
              {
                problem: 'Pages Rollup shows wrong content',
                solution: 'Check Sort By setting. Use Modified for recent content, Created for new content.',
              },
            ]}
          />

          <h2>Final Checklist</h2>

          <ul>
            <li>☐ Landing banner showing tile grid</li>
            <li>☐ Pages Rollup displaying recent pages</li>
            <li>☐ Content Cards configured with resources</li>
            <li>☐ Slider rotating through highlights</li>
            <li>☐ Page added to navigation</li>
            <li>☐ Responsive layout on mobile</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

