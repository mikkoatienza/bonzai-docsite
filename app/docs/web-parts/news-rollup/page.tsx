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

          {/* QUICK START - NEW */}
          <QuickStart
            title="Get News Rollup Working in 3 Steps"
            time="2 minutes"
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
                description: 'Open the property pane and choose List, Tiles, Cards, or Featured layout.',
              },
              {
                title: 'Set items to show and publish',
                description: 'Configure how many articles to display, then save and publish your page.',
              },
            ]}
          />

          {/* WHEN TO USE - NEW */}
          <WhenToUse
            useCases={[
              'Display company news and announcements on the homepage',
              'Show department-specific news on team pages',
              'Create a news archive or news center page',
              'Highlight featured or breaking news stories',
              'Display news filtered by category (e.g., HR, IT, Finance)',
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

          {/* STEP-BY-STEP CONFIGURATION - NEW */}
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
                description: 'Select from: List (compact rows), Tiles (image grid), Cards (rich cards with metadata), or Featured (hero layout with spotlight article).',
              },
              {
                title: 'Configure the data source',
                description: 'By default, News Rollup reads from the current site\'s Site Pages library. To pull news from another site, enter that site\'s URL in the Site URL field.',
              },
              {
                title: 'Set filtering options (optional)',
                description: 'Use the Category Filter field to show only news from a specific category. Enter the exact category name as it appears on your news pages.',
              },
              {
                title: 'Configure display settings',
                description: 'Set "Items to Show" (typically 3-10 for homepage, 10-20 for news archive). Enable "Show Featured" to highlight articles marked as featured.',
              },
              {
                title: 'Enable content targeting (optional)',
                description: 'Toggle on Content Targeting to show different news to different audiences based on their profile attributes like department or location.',
              },
              {
                title: 'Save and publish',
                description: 'Click "Apply" in the property pane, then save and publish your page. Your news feed is now live!',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) - NEW */}
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
                { property: 'Show Featured', value: 'Yes' },
                { property: 'Show Pagination', value: 'No' },
              ]}
            />
            <RecipeCard
              title="Department News"
              description="Filtered news for a specific department"
              useCase="Department pages, team sites"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'HR News' },
                { property: 'Display Template', value: 'Cards' },
                { property: 'Category Filter', value: 'HR' },
                { property: 'Items to Show', value: '6' },
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
                { property: 'Items to Show', value: '3' },
                { property: 'Show Images', value: 'No' },
                { property: 'Chrome Type', value: 'Title Only' },
              ]}
            />
            <RecipeCard
              title="Featured News Hero"
              description="Large featured article with supporting stories"
              useCase="News center landing page"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: '' },
                { property: 'Display Template', value: 'Featured' },
                { property: 'Items to Show', value: '5' },
                { property: 'Show Featured', value: 'Yes' },
                { property: 'Show Pagination', value: 'Yes' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES - NEW */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use the Featured flag strategically">
            Mark important news articles as "Featured" in their page properties. 
            The News Rollup will highlight these articles prominently when "Show Featured" is enabled.
          </Callout>

          <Callout type="tip" title="Optimize images for faster loading">
            Use images sized around 1200x630 pixels for news articles. 
            Larger images slow down page load times, especially when displaying multiple articles.
          </Callout>

          <Callout type="pro" title="Use content targeting for personalization">
            Enable Content Targeting to show different news to different user groups. 
            For example, show US office news only to US employees, or IT-specific news only to the IT department.
          </Callout>

          <Callout type="warning" title="Category names are case-sensitive">
            When setting the Category Filter, make sure the category name matches exactly 
            (including capitalization) as it appears in your news page properties.
          </Callout>

          {/* TROUBLESHOOTING - NEW */}
          <Troubleshooting
            items={[
              {
                problem: 'News articles are not appearing',
                solution: 'Check that the Site URL is correct and that you have permission to access the source site. Also verify that news pages exist in the Site Pages library.',
                details: 'If using a cross-site URL, ensure the news pages are published (not drafts) and that your account has at least Read permission on the source site.',
              },
              {
                problem: 'Category filter is not working',
                solution: 'Verify the category name matches exactly, including capitalization. Check that your news pages have the category field populated.',
                details: 'Categories are case-sensitive. "Company News" is different from "company news" or "COMPANY NEWS".',
              },
              {
                problem: 'Images are not displaying',
                solution: 'Ensure news pages have a Banner Image set in their page properties. The image must be accessible to all users.',
                details: 'Go to Page Details on each news page and verify the Banner Image field is populated with a valid image.',
              },
              {
                problem: 'Wrong articles appearing',
                solution: 'Check your view filter settings in the property pane. The web part may be filtering by an unexpected category or date range.',
              },
              {
                problem: 'Dates showing incorrectly',
                solution: 'Verify the date column mapping in the property pane. News Rollup uses the "First Published" date by default.',
                details: 'You can change this to use "Modified" or "Created" date in advanced settings.',
              },
              {
                problem: 'Content targeting not working',
                solution: 'Ensure Content Targeting is enabled both on the web part and on individual news pages. User profile attributes must be populated in Azure AD.',
              },
            ]}
          />

          {/* REFERENCE SECTION (EXISTING CONTENT - REORGANIZED) */}
          <hr className="my-12" />
          <h2>Reference</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technical details for developers and advanced users.
          </p>

          <h3>Display Templates</h3>

          <ul>
            <li><strong>List:</strong> Compact list view with thumbnails</li>
            <li><strong>Tiles:</strong> Grid of image tiles (single or double)</li>
            <li><strong>Featured:</strong> Hero layout with featured article</li>
            <li><strong>Cards:</strong> Card-based layout with metadata</li>
          </ul>

          <h3>Property Pane Configuration</h3>

          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>Text</td>
                <td>Web part title</td>
              </tr>
              <tr>
                <td><code>siteUrl</code></td>
                <td>Text</td>
                <td>Source site URL (optional)</td>
              </tr>
              <tr>
                <td><code>displayTemplate</code></td>
                <td>Dropdown</td>
                <td>List, Tiles, Featured, Cards</td>
              </tr>
              <tr>
                <td><code>categoryFilter</code></td>
                <td>Text</td>
                <td>Filter by category</td>
              </tr>
              <tr>
                <td><code>itemsToShow</code></td>
                <td>Number</td>
                <td>Number of articles to display</td>
              </tr>
              <tr>
                <td><code>showFeatured</code></td>
                <td>Toggle</td>
                <td>Highlight featured articles</td>
              </tr>
              <tr>
                <td><code>showPagination</code></td>
                <td>Toggle</td>
                <td>Enable pagination for long lists</td>
              </tr>
              <tr>
                <td><code>enableContentTargeting</code></td>
                <td>Toggle</td>
                <td>Filter by user profile attributes</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Multiple display templates</li>
            <li>✅ Category filtering</li>
            <li>✅ Content targeting</li>
            <li>✅ Pagination</li>
            <li>✅ Featured article highlighting</li>
            <li>✅ Responsive design</li>
            <li>✅ Cross-site news aggregation</li>
            <li>⚠️ Some legacy templates may have minor styling differences</li>
          </ul>

          <h3>Data Source</h3>

          <p>
            News Rollup reads from the Site Pages library. Articles should be created 
            as SharePoint pages with the following metadata:
          </p>

          <ul>
            <li><strong>Title:</strong> Article headline</li>
            <li><strong>Banner Image:</strong> Featured image for the article</li>
            <li><strong>Category:</strong> News category for filtering</li>
            <li><strong>Author:</strong> Article author</li>
            <li><strong>First Published:</strong> Publication date</li>
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
                <td>Template dropdown</td>
                <td>All templates supported</td>
              </tr>
              <tr>
                <td>Category dropdown</td>
                <td>Category filter field</td>
                <td>Text-based filter</td>
              </tr>
              <tr>
                <td>Content targeting</td>
                <td>Content targeting toggle</td>
                <td>Uses Azure AD attributes</td>
              </tr>
              <tr>
                <td>Brick theme colors</td>
                <td>Theme Manager</td>
                <td>Managed via Theme Manager web part</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
