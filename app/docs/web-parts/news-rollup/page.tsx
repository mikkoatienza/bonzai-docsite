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
        Display news articles with multiple templates, category filtering, and content targeting.
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
            ]}
            steps={[
              {
                title: 'Add the web part to your page',
                description: 'Edit the page, click the + button, and search for "News Rollup" in the Bonzai category.',
              },
              {
                title: 'Select your display template',
                description: 'Open the property pane and choose List, Tile, or Card layout.',
              },
              {
                title: 'Set max items and publish',
                description: 'Configure how many articles to display (1-20), then save and publish your page.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Display company news and announcements on the homepage',
              'Show department-specific news on team pages',
              'Create a news archive or news center page',
              'Highlight promoted/featured news stories',
              'Display news filtered by category (e.g., HR, IT, Finance)',
            ]}
            bestFor={[
              'Homepage — main news feed in prominent position',
              'Department landing pages — filtered by department category',
              'News center page — full archive with "View More" link',
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
                title: 'Set the title',
                description: 'Enter a descriptive title like "Company News", "Latest Updates", or "Department Announcements". The title appears above the news list.',
                tip: 'Leave the title empty if you want a cleaner look without a header.',
              },
              {
                title: 'Choose a display template',
                description: 'Select from: List (compact rows), Tile (image grid), or Card (rich cards with metadata).',
              },
              {
                title: 'Configure the data source',
                description: 'By default, News Rollup reads from the current site\'s Site Pages library. To pull news from another site, enter that site\'s URL in the Site URL field.',
              },
              {
                title: 'Filter by category (optional)',
                description: 'Use the Category dropdown to show only news from a specific category. Categories are auto-discovered from your pages.',
              },
              {
                title: 'Configure display settings',
                description: 'Set "Max News to Show" slider (1-20). Enable "Show Promoted Items" to highlight articles marked as promoted/featured.',
              },
              {
                title: 'Set up "View More" link (optional)',
                description: 'Configure "Show More Text" and "Show More URL" to add a link to your full news archive page.',
              },
              {
                title: 'Enable content targeting (optional)',
                description: 'Toggle on Content Targeting to show different news to different audiences based on their profile attributes like department or location.',
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
                { property: 'Max News to Show', value: '5' },
                { property: 'Show Promoted Items', value: 'Yes' },
                { property: 'Show Comment Count', value: 'Yes' },
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
                { property: 'Category', value: 'HR (from dropdown)' },
                { property: 'Max News to Show', value: '6' },
                { property: 'Content Targeting', value: 'Enabled' },
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
                { property: 'Max News to Show', value: '3' },
                { property: 'Fixed Height', value: '300' },
                { property: 'Show Comment Count', value: 'No' },
              ]}
            />
            <RecipeCard
              title="News Archive with View More"
              description="Full news listing with link to archive"
              useCase="News center landing page"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'All News' },
                { property: 'Display Template', value: 'Tile' },
                { property: 'Max News to Show', value: '10' },
                { property: 'Show More Text', value: 'View All News →' },
                { property: 'Show More URL', value: '/sites/intranet/news' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use promoted items strategically">
            Mark important news articles as "Promoted" using SharePoint's Promote feature or the PromotedState page property. 
            Enable "Show Promoted Items" to highlight these articles.
          </Callout>

          <Callout type="tip" title="Optimize images for faster loading">
            Use images sized around 1200x630 pixels for news articles. 
            Larger images slow down page load times, especially when displaying multiple articles.
          </Callout>

          <Callout type="pro" title="Use content targeting for personalization">
            Enable Content Targeting to show different news to different user groups. 
            For example, show US office news only to US employees, or IT-specific news only to the IT department.
          </Callout>

          <Callout type="info" title="Categories are auto-discovered">
            The Category dropdown automatically discovers category values from your Site Pages library. 
            You don't need to configure this manually — just add a "Category" column to your pages.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'News articles are not appearing',
                solution: 'Check that the Site URL is correct and that you have permission to access the source site. Also verify that news pages exist in the Site Pages library.',
                details: 'If using a cross-site URL, ensure the news pages are published (not drafts) and that your account has at least Read permission on the source site.',
              },
              {
                problem: 'Category dropdown is empty',
                solution: 'Add a "Category" column to your Site Pages library and populate it on your news pages. The dropdown auto-discovers categories from existing pages.',
                details: 'The web part queries up to 1000 items to discover unique category values.',
              },
              {
                problem: 'Images are not displaying',
                solution: 'Ensure news pages have a Banner Image set in their page properties. The image must be accessible to all users.',
                details: 'Go to Page Details on each news page and verify the Banner Image field is populated with a valid image.',
              },
              {
                problem: 'Wrong articles appearing',
                solution: 'Check your Category selection in the property pane. Select "All Categories" to show all news.',
              },
              {
                problem: 'Content targeting not working',
                solution: 'Ensure Content Targeting is enabled on the web part. User profile attributes must be populated in Azure AD.',
              },
              {
                problem: 'Comment count not showing',
                solution: 'Enable "Show Comment Count" toggle in the property pane. Comments are only visible if the page has comments.',
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
                <td>Web part title (default: "News")</td>
              </tr>
              <tr>
                <td><code>siteUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Source site URL. Leave empty for current site.</td>
              </tr>
              <tr>
                <td><code>listName</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Source list name (default: "Site Pages")</td>
              </tr>
              <tr>
                <td><code>viewName</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>Category filter (auto-discovered from pages)</td>
              </tr>
              <tr>
                <td><code>displayTemplate</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>List, Tile, or Card (default: "List")</td>
              </tr>
              <tr>
                <td><code>maxNewsToShow</code></td>
                <td>Slider (1-20)</td>
                <td>No</td>
                <td>Maximum articles to display (default: 1)</td>
              </tr>
              <tr>
                <td><code>fixedHeight</code></td>
                <td>Slider (0-1000)</td>
                <td>No</td>
                <td>Fixed height in pixels. 0 = auto height.</td>
              </tr>
              <tr>
                <td><code>showCommentCount</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Show comment count on articles (default: true)</td>
              </tr>
              <tr>
                <td><code>showPromotedItems</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Highlight promoted/featured articles</td>
              </tr>
              <tr>
                <td><code>enableContentTargeting</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Filter by user profile attributes</td>
              </tr>
              <tr>
                <td><code>showMoreText</code></td>
                <td>Text</td>
                <td>No</td>
                <td>"View More" link text (default: "More")</td>
              </tr>
              <tr>
                <td><code>showMoreUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>"View More" link URL</td>
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
            <li><strong>Category:</strong> News category for filtering</li>
            <li><strong>Author:</strong> Article author</li>
            <li><strong>First Published:</strong> Publication date</li>
            <li><strong>PromotedState:</strong> Mark as promoted/featured</li>
          </ul>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Three display templates (List, Tile, Card)</li>
            <li>✅ Category filtering (auto-discovered dropdown)</li>
            <li>✅ Content targeting by user profile</li>
            <li>✅ Promoted/featured article highlighting</li>
            <li>✅ Comment count display</li>
            <li>✅ "View More" link configuration</li>
            <li>✅ Fixed height option</li>
            <li>✅ Cross-site news aggregation</li>
            <li>✅ Responsive design</li>
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
                <td>Category dropdown</td>
                <td><code>viewName</code> dropdown</td>
                <td>Auto-discovered from pages</td>
              </tr>
              <tr>
                <td>Content targeting</td>
                <td><code>enableContentTargeting</code> toggle</td>
                <td>Uses Azure AD attributes</td>
              </tr>
              <tr>
                <td>View name text field</td>
                <td>Category dropdown</td>
                <td>Visual picker replaces text entry</td>
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
