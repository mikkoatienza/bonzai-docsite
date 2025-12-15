import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { StepGuide, Step } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function HomePageRecipe() {
  return (
    <DocsPage>
      <DocsTitle>Home Page Recipe</DocsTitle>
      <DocsDescription>
        Build a complete intranet homepage with featured content, news, favourites, and quick access widgets.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Essential
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              5 Web Parts
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              ~15 minutes
            </span>
          </div>

          <h2>Overview</h2>
          <p>
            This recipe creates a complete intranet homepage with featured spotlight content, 
            favourite sites and documents for quick access, and a theme manager for customization.
          </p>

          <h2>Page Layout</h2>
          <p>Use this structure for your homepage:</p>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="space-y-3">
              <div className="rounded bg-bonzai-100 p-3 text-center text-sm font-medium text-bonzai-800 dark:bg-bonzai-900/50 dark:text-bonzai-300">
                Section 1: Full Width — Spotlight Rollup
              </div>
              <div className="flex gap-3">
                <div className="flex-[2] rounded bg-blue-100 p-3 text-center text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  Left (66%) — Favourite Sites
                </div>
                <div className="flex-1 rounded bg-amber-100 p-3 text-center text-sm font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                  Right (33%) — Favourite Documents
                </div>
              </div>
              <div className="rounded bg-gray-200 p-3 text-center text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                Section 3: Full Width — Theme Manager (edit mode only)
              </div>
            </div>
          </div>

          <h2>Step-by-Step Setup</h2>

          <Step number={1} title="Create the Home Page">
            <ol>
              <li>Go to <strong>Site Contents → Site Pages → + New → Page</strong></li>
              <li>Name the page <strong>"Home"</strong></li>
              <li>Keep it as a draft until fully configured</li>
            </ol>
          </Step>

          <Step number={2} title="Add Section 1: Spotlight Feature" tip="Use Full Width layout for maximum visual impact">
            <p>Add a full-width section at the top of the page.</p>
            <p><strong>Add web part:</strong> Bonzai Spotlight Rollup</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Featured Content</td></tr>
                <tr><td>List Name</td><td>Site Pages</td></tr>
                <tr><td>Showcase Filter</td><td>Spotlight</td></tr>
                <tr><td>Items Per Page</td><td>3</td></tr>
                <tr><td>Show Promoted Only</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>Lightbulb</td></tr>
                <tr><td>Chrome Type</td><td>None</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={3} title="Add Section 2: Two Columns (66%/33%)">
            <p>Add a two-column section below the spotlight.</p>
            <p><strong>Left Column:</strong> Bonzai Favourite Sites</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>My Sites</td></tr>
                <tr><td>List Name</td><td>Site Directory</td></tr>
                <tr><td>Showcase Value</td><td>Favorite</td></tr>
                <tr><td>Show Description</td><td>Yes</td></tr>
                <tr><td>Show Owner</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>FavoriteStar</td></tr>
                <tr><td>Chrome Type</td><td>Title Only</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={4} title="Add Favourite Documents to Right Column">
            <p><strong>Right Column:</strong> Bonzai Favourite Documents</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>My Documents</td></tr>
                <tr><td>Library</td><td>Documents</td></tr>
                <tr><td>Showcase Value</td><td>Favorite</td></tr>
                <tr><td>Items to Show</td><td>5</td></tr>
                <tr><td>Title Icon</td><td>FavoriteStar</td></tr>
                <tr><td>Chrome Type</td><td>Title Only</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={5} title="Add Section 3: Theme Manager">
            <p>Add a full-width section at the bottom for the Theme Manager.</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Show in Edit Mode Only</td><td>Yes</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={6} title="Set as Home Page and Publish">
            <ol>
              <li>Save and publish the page</li>
              <li>Go to <strong>Site Settings → Change Site Address</strong> or set via site navigation</li>
              <li>Set this page as the site home page</li>
            </ol>
          </Step>

          <Callout type="tip" title="Optional: Add Important Messages">
            Consider adding an Important Messages web part at the very top of the page 
            for emergency alerts and announcements that need immediate visibility.
          </Callout>

          <h2>Required SharePoint Lists</h2>

          <table>
            <thead>
              <tr><th>List Name</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Site Pages</td><td>Source for Spotlight articles (built-in)</td></tr>
              <tr><td>Site Directory</td><td>Sites for Favourite Sites web part</td></tr>
              <tr><td>Documents</td><td>Library for Favourite Documents</td></tr>
            </tbody>
          </table>

          <Troubleshooting
            items={[
              {
                problem: 'Spotlight not showing any content',
                solution: 'Ensure you have pages in Site Pages with the Showcase column set to "Spotlight" and promoted/featured flag enabled.',
              },
              {
                problem: 'Favourite Sites is empty',
                solution: 'Users need to mark sites as favourites first. Ensure the Site Directory list exists and has items.',
              },
              {
                problem: 'Theme Manager not visible',
                solution: 'Theme Manager only appears in edit mode. Enter page edit mode to see and configure it.',
              },
            ]}
          />

          <h2>Final Checklist</h2>

          <ul>
            <li>☐ Spotlight Rollup showing featured content</li>
            <li>☐ Favourite Sites displaying user bookmarks</li>
            <li>☐ Favourite Documents showing quick access files</li>
            <li>☐ Theme Manager available in edit mode</li>
            <li>☐ Page set as site home page</li>
            <li>☐ Page is responsive on mobile devices</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}



