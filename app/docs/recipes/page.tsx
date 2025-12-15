import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { PageRecipeCard } from '../../../components/docs/RecipeCard';
import { Callout } from '../../../components/docs/Callout';

export default function RecipesIndex() {
  return (
    <DocsPage>
      <DocsTitle>Page Recipes</DocsTitle>
      <DocsDescription>
        Ready-to-use page configurations with pre-configured web parts. Copy these recipes to quickly build your intranet pages.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            Page Recipes are complete page configurations showing exactly which web parts 
            to use, how to configure them, and where to place them. Each recipe includes 
            step-by-step instructions and recommended property values.
          </p>

          <Callout type="tip" title="How to use these recipes">
            Each recipe includes the page layout, web part list, section structure, 
            and exact property values. Follow the steps to recreate the page on your site.
          </Callout>

          <h2>Available Recipes</h2>

          <div className="not-prose grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PageRecipeCard
              title="Home Page"
              description="Main landing page with featured content, news, favourites, and quick access widgets."
              webPartCount={5}
              href="/docs/recipes/home-page"
              tags={['Essential', 'Homepage']}
            />
            <PageRecipeCard
              title="News & Communication"
              description="News feed with important announcements and targeted messaging."
              webPartCount={2}
              href="/docs/recipes/news-communication"
              tags={['Communication']}
            />
            <PageRecipeCard
              title="Content Showcase"
              description="Landing pages, sliders, and content rollups for rich content display."
              webPartCount={5}
              href="/docs/recipes/content-showcase"
              tags={['Content']}
            />
            <PageRecipeCard
              title="Documents"
              description="Document search, browsing, and favourites for document management."
              webPartCount={4}
              href="/docs/recipes/documents"
              tags={['Documents']}
            />
            <PageRecipeCard
              title="People & Directory"
              description="Employee directory, people search, locations, and site directory."
              webPartCount={4}
              href="/docs/recipes/people-directory"
              tags={['People']}
            />
          </div>

          <h2>Prerequisites</h2>

          <p>Before setting up pages from these recipes, ensure you have:</p>

          <ol>
            <li><strong>Created a Communication Site</strong> — Go to SharePoint and create a new Communication Site</li>
            <li><strong>Installed the Bonzai 2 Package</strong> — Upload and deploy the Bonzai2.sppkg to your App Catalog</li>
            <li><strong>Created Required SharePoint Lists</strong> — Set up lists for Important Messages, Site Directory, Locations, etc.</li>
            <li><strong>Uploaded Sample Images</strong> — Add images to SiteAssets for banners and profiles</li>
          </ol>

          <h2>Web Parts Summary</h2>

          <p>These recipes use 23 Bonzai web parts across different categories:</p>

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Web Parts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Communication</td>
                <td>Important Messages, News Rollup, Feedback</td>
              </tr>
              <tr>
                <td>Documents</td>
                <td>Document Portal, Documents Rollup, Documents Table, Favourite Documents</td>
              </tr>
              <tr>
                <td>Content</td>
                <td>Landing, Slider, Pages Rollup, Spotlight Rollup, Tabbed</td>
              </tr>
              <tr>
                <td>Navigation</td>
                <td>Advanced Links, Site Directory, Favourite Sites</td>
              </tr>
              <tr>
                <td>People</td>
                <td>Employee Directory, People Listing, Locations</td>
              </tr>
              <tr>
                <td>Search</td>
                <td>Advanced Search</td>
              </tr>
              <tr>
                <td>Admin</td>
                <td>Theme Manager</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}



