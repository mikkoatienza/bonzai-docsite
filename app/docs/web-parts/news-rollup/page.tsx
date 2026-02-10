import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Newspaper, LayoutGrid, List, Star } from 'lucide-react';

export default function NewsRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>News Rollup</DocsTitle>
      <DocsDescription>
        Display news articles with list, tile, or card templates, responsive layout controls, and pagination.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Communication
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 90%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get News Rollup Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Site Pages library with news articles',
              'News pages tagged with Showcase (or Featured) = "News Rollup"',
              'Optional: Category and Tags fields if you want metadata or filters',
            ]}
            steps={[
              {
                title: 'Add the web part to your page',
                description: 'Edit the page, click the + button, and search for "News Rollup" in the Bonzai category.',
              },
              {
                title: 'Choose your data source',
                description: 'Select a site (picker or manual URL), choose your list, and set the Showcase value.',
              },
              {
                title: 'Configure display and publish',
                description: 'Pick a template, set items to show, enable search/filters if needed, then publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Display company news and announcements on the homepage',
              'Show department-specific news on team pages',
              'Create a news archive or news center page',
              'Highlight curated news using a Showcase value',
              'Filter by tags or page type (News vs Page)',
            ]}
            bestFor={[
              'Homepage — main news feed in prominent position',
              'Department landing pages — filtered by department category',
              'News center page — full archive with pagination',
              'Sidebar widget — compact list for secondary placement',
            ]}
            notFor={[
              'You need to display events with dates and registration — use Events Rollup',
              'You want to show documents or files — use Documents Rollup',
              'You need a hero carousel — use Slider web part',
            ]}
            alternatives={[
              { name: 'Slider', when: 'rotating hero banner for featured news' },
              { name: 'Pages Rollup', when: 'displaying any page type, not just news' },
              { name: 'Spotlight Rollup', when: 'highlighting specific people or achievements' },
            ]}
          />

          {/* DISPLAY TEMPLATES VISUAL */}
          <h2>Display Templates</h2>
          <p>News Rollup supports three display templates:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <List className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">List</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Compact rows with thumbnails — best for sidebars and narrow sections</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <LayoutGrid className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Tile</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Grid of image tiles — best for visual layouts with strong imagery</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <Newspaper className="h-5 w-5 shrink-0 text-bonzai-600 dark:text-bonzai-400" />
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">Card</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Rich cards with metadata — best for detailed news with dates and comments</span>
              </div>
            </div>
          </div>

          <h2>Recent Updates</h2>
          <ul>
            <li>Search and filter UI (search box, tag filter, page type filter, date range).</li>
            <li>Showcase selector + tag multi-select in the property pane.</li>
            <li>Metadata toggles (date, category, tags, likes, comments, excerpt).</li>
            <li>Site picker, list picker, and title icon picker options.</li>
          </ul>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Edit your SharePoint page',
                description: 'Navigate to the page where you want to add news. Click "Edit" in the top right corner to enter edit mode.',
                tip: 'You can add News Rollup to any section layout — it works great in full-width, two-column, or three-column layouts.',
              },
              {
                title: 'Add the News Rollup web part',
                description: 'Click the + button in any section, type "News" in the search box, and select "Bonzai News Rollup" from the results.',
              },
              {
                title: 'Open the property pane',
                description: 'Click the pencil icon on the web part to open the property pane on the right side of the screen.',
              },
              {
                title: 'Set the title (optional)',
                description: 'Enter a descriptive title like "Company News" or "Latest Updates". Leave it blank to hide the header row.',
              },
              {
                title: 'Choose a display template',
                description: 'Select from: List (compact rows), Tile (image grid), or Card (rich cards with metadata).',
              },
              {
                title: 'Select your site and list',
                description: 'Use Site Selection Mode (picker or manual URL), then choose the list with the List Picker.',
              },
              {
                title: 'Set Showcase value and tags',
                description: 'Choose the Showcase value (default: "News Rollup") and optionally pre-filter by tags.',
              },
              {
                title: 'Configure display options',
                description: 'Set Items to Show, tile/card size, max columns, and featured-first options for visual layouts.',
              },
              {
                title: 'Set metadata + filters',
                description: 'Toggle metadata (date, category, tags, likes, comments, excerpt) and enable Search/Filters if you want user-facing filters.',
              },
              {
                title: 'Enable content targeting (optional)',
                description: 'Toggle on Content Targeting and set TargetAudience values to SharePoint group names.',
              },
              {
                title: 'Save and publish',
                description: 'Click outside the property pane, then save and publish your page. Your news feed is now live!',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>
            Copy these ready-to-use configurations for common scenarios:
          </p>

          <RecipeGrid>
            <RecipeCard
              title="Homepage News Feed"
              description="Main news display for your intranet homepage"
              useCase="Homepage, full-width section"
              icon={<Newspaper className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Company News' },
                { property: 'Display Template', value: 'List' },
                { property: 'Items to Show', value: '5' },
                { property: 'Showcase Value', value: 'News Rollup' },
                { property: 'Show Date', value: 'On' },
                { property: 'Show Comments', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Department News"
              description="Filtered news for a specific department"
              useCase="Department pages, team sites"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'HR News' },
                { property: 'Display Template', value: 'Card' },
                { property: 'Showcase Value', value: 'News Rollup' },
                { property: 'Filter Tags', value: 'HR, Benefits' },
                { property: 'Enable Filters', value: 'On' },
                { property: 'Items to Show', value: '6' },
                { property: 'Content Targeting', value: 'Enabled (SharePoint groups)' },
              ]}
            />
            <RecipeCard
              title="Compact Sidebar Widget"
              description="Small news list for sidebar placement"
              useCase="Sidebar columns, narrow sections"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Latest News' },
                { property: 'Display Template', value: 'List' },
                { property: 'Items to Show', value: '3' },
                { property: 'Fixed Height', value: '300' },
                { property: 'Show Excerpt', value: 'Off' },
                { property: 'Show Tags', value: 'Off' },
              ]}
            />
            <RecipeCard
              title="News Archive (Paged)"
              description="Full news listing with pagination"
              useCase="News center landing page"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'All News' },
                { property: 'Display Template', value: 'Tile' },
                { property: 'Items to Show', value: '10' },
                { property: 'Enable Search', value: 'On' },
                { property: 'Enable Filters', value: 'On' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Curate with the Showcase value">
            Set the Showcase (or Featured) field on pages to <strong>News Rollup</strong> so only curated items appear.
          </Callout>

          <Callout type="tip" title="Optimize images for faster loading">
            Use images sized around 1200x630 pixels for news articles. 
            Larger images slow down page load times, especially when displaying multiple articles.
          </Callout>

          <Callout type="pro" title="Use tags and filters intentionally">
            Add tags to your pages and enable Filters so users can narrow results by tag or page type.
          </Callout>

          <Callout type="info" title="Category and Tags are optional">
            Category and Tags are optional metadata. If the fields don’t exist, those labels and filters won’t appear.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'News articles are not appearing',
                solution: 'Check that the Site URL is correct and that you have permission to access the source site. Verify that news pages exist and that Showcase is set to "News Rollup".',
                details: 'If using a cross-site URL, ensure the news pages are published (not drafts) and that your account has at least Read permission on the source site.',
              },
              {
                problem: 'Tags dropdown is empty',
                solution: 'Ensure your list has a Tags/Keywords field and that items have tags assigned.',
                details: 'The tag picker only shows values discovered from the selected list schema.',
              },
              {
                problem: 'Filters are not showing',
                solution: 'Enable the Filters toggle in the property pane and publish the page.',
              },
              {
                problem: 'Images are not displaying',
                solution: 'Ensure news pages have a Banner Image set in their page properties. The image must be accessible to all users.',
                details: 'Go to Page Details on each news page and verify the Banner Image field is populated with a valid image.',
              },
              {
                problem: 'Wrong articles appearing',
                solution: 'Check the Showcase value and any selected Tags. Remove pre-filters to show all news.',
              },
              {
                problem: 'Content targeting not working',
                solution: 'Ensure Content Targeting is enabled and that TargetAudience values match SharePoint group names.',
              },
              {
                problem: 'Comments or likes not showing',
                solution: 'Enable the Show Comments/Show Likes toggles. Counts appear only when data is available from the page.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Property Pane Configuration</h3>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Web part title (blank hides header row)</td>
              </tr>
              <tr>
                <td><code>titleIconName</code></td>
                <td>Icon Picker</td>
                <td>No</td>
                <td>Fluent UI icon for the header</td>
              </tr>
              <tr>
                <td><code>titleIconUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Custom icon URL (overrides icon name)</td>
              </tr>
              <tr>
                <td><code>titleUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Optional title link URL</td>
              </tr>
              <tr>
                <td><code>siteUrlMode</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>Pick a site or enter a manual URL</td>
              </tr>
              <tr>
                <td><code>selectedSites</code></td>
                <td>Site Picker</td>
                <td>No</td>
                <td>Selected site when using Site Picker</td>
              </tr>
              <tr>
                <td><code>siteUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Manual site URL when Site Selection Mode = manual</td>
              </tr>
              <tr>
                <td><code>listId</code></td>
                <td>List Picker</td>
                <td>No</td>
                <td>Source list (Site Pages) from the selected site</td>
              </tr>
              <tr>
                <td><code>showcaseValue</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>Showcase/Featured value used to include items (default: News Rollup)</td>
              </tr>
              <tr>
                <td><code>selectedTags</code></td>
                <td>Multi-select</td>
                <td>No</td>
                <td>Pre-filter by tags (optional)</td>
              </tr>
              <tr>
                <td><code>displayTemplate</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>List, Tile, or Card (default: "List")</td>
              </tr>
              <tr>
                <td><code>tileScale</code></td>
                <td>Slider (60-140)</td>
                <td>No</td>
                <td>Tile size scale for Tile template (percent)</td>
              </tr>
              <tr>
                <td><code>tileMaxColumns</code></td>
                <td>Slider (1-4)</td>
                <td>No</td>
                <td>Max tiles per row for Tile template</td>
              </tr>
              <tr>
                <td><code>enableFeaturedTile</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Make the first tile featured (Tile template)</td>
              </tr>
              <tr>
                <td><code>cardScale</code></td>
                <td>Slider (60-140)</td>
                <td>No</td>
                <td>Card size scale for Card template (percent)</td>
              </tr>
              <tr>
                <td><code>cardMaxColumns</code></td>
                <td>Slider (1-4)</td>
                <td>No</td>
                <td>Max cards per row for Card template</td>
              </tr>
              <tr>
                <td><code>enableFeaturedCard</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Make the first card featured (Card template)</td>
              </tr>
              <tr>
                <td><code>maxNewsToShow</code></td>
                <td>Slider (1-20)</td>
                <td>No</td>
                <td>Items to show per page (pagination appears when more exist)</td>
              </tr>
              <tr>
                <td><code>fixedHeight</code></td>
                <td>Slider (0-1000)</td>
                <td>No</td>
                <td>Fixed height in pixels. 0 = auto height.</td>
              </tr>
              <tr>
                <td><code>showDate</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show published/modified date</td>
              </tr>
              <tr>
                <td><code>showCategory</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show Category label when the field exists</td>
              </tr>
              <tr>
                <td><code>showTags</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show tags when available</td>
              </tr>
              <tr>
                <td><code>showExcerpt</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show excerpt/description on cards</td>
              </tr>
              <tr>
                <td><code>showLikes</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show likes count when available</td>
              </tr>
              <tr>
                <td><code>showComments</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show comments count when available</td>
              </tr>
              <tr>
                <td><code>enableSearch</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show search box</td>
              </tr>
              <tr>
                <td><code>enableFilters</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show filter controls (tags, page type, date range)</td>
              </tr>
              <tr>
                <td><code>showPromotedItems</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Legacy toggle; Showcase value controls curation</td>
              </tr>
              <tr>
                <td><code>enableContentTargeting</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Filter by SharePoint group membership (TargetAudience field)</td>
              </tr>
            </tbody>
          </table>

          <h3>Data Source</h3>

          <p>
            News Rollup reads from the Site Pages library. The web part tries multiple list name 
            variations: <code>SitePages</code>, <code>Site Pages</code>, <code>Pages</code>. 
            Articles should be created as SharePoint pages with:
          </p>

          <ul>
            <li><strong>Title:</strong> Article headline</li>
            <li><strong>Banner Image:</strong> Featured image for the article</li>
            <li><strong>Showcase/Featured:</strong> Set to <strong>News Rollup</strong> for items to appear</li>
            <li><strong>Category:</strong> Optional label if you want category metadata</li>
            <li><strong>Tags:</strong> Optional field for tag filters</li>
            <li><strong>Author:</strong> Article author</li>
            <li><strong>First Published:</strong> Publication date</li>
            <li><strong>PromotedState:</strong> Used to infer page type (News vs Page)</li>
          </ul>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Three display templates (List, Tile, Card)</li>
            <li>✅ Showcase-based curation + optional tag pre-filter</li>
            <li>✅ Search and filter UI (search, tags, page type, date range)</li>
            <li>✅ Metadata toggles (date, category, tags, likes, comments, excerpt)</li>
            <li>✅ Content targeting by SharePoint group</li>
            <li>✅ Pagination based on Items to Show</li>
            <li>✅ Fixed height option</li>
            <li>✅ Cross-site news aggregation</li>
            <li>✅ Responsive design</li>
            <li>✅ Tile and card layout controls (scale, max columns, featured first)</li>
            <li>✅ Theme Manager integration</li>
          </ul>

          <h3>Migration from Classic Bonzai</h3>

          <table>
            <thead>
              <tr>
                <th>Classic Feature</th>
                <th>Modern Equivalent</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Display templates</td>
                <td><code>displayTemplate</code> dropdown</td>
                <td>3 templates: List, Tile, Card</td>
              </tr>
              <tr>
                <td>Showcase + Tags</td>
                <td>Showcase value + tag filters</td>
                <td>Showcase marks items; tags refine filters</td>
              </tr>
              <tr>
                <td>Content targeting</td>
                <td><code>enableContentTargeting</code> toggle</td>
                <td>Uses SharePoint group membership</td>
              </tr>
              <tr>
                <td>View name text field</td>
                <td>Showcase + filters</td>
                <td>Legacy viewName is retained but not used</td>
              </tr>
              <tr>
                <td>Brick theme colors</td>
                <td>Theme Manager web part</td>
                <td>CSS custom properties</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
