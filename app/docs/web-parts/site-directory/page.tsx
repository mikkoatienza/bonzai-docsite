import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Search, Star, Building } from 'lucide-react';

export default function SiteDirectoryWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Site Directory</DocsTitle>
      <DocsDescription>
        Search and browse SharePoint sites using SharePoint Search with typeahead and favourites.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              Navigation
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 90%
            </span>
          </div>

          <QuickStart
            title="Get Site Directory Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'SharePoint sites indexed by search',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Site Directory" from the Bonzai category.' },
              { title: 'Configure display options', description: 'Open the property pane and configure which site details to display (owner, date, description).' },
              { title: 'Enable features', description: 'Toggle on favourites and typeahead search, then publish your page.' },
            ]}
          />

          <Callout type="info" title="Search-based discovery">
            Site Directory uses SharePoint Search to automatically discover and display sites. 
            No manual list configuration is required — sites are indexed by SharePoint automatically.
          </Callout>

          <WhenToUse
            useCases={[
              'Create a searchable site catalog',
              'Allow users to find SharePoint sites',
              'Enable site bookmarking (favourites)',
              'Browse all sites in the organization',
            ]}
            bestFor={[
              'Intranet homepage — site search widget',
              'Navigation hub — all sites directory',
              'People & Directory page — site listings',
            ]}
            notFor={[
              'Quick links to specific pages — use Advanced Links',
              'Document search — use Document Portal',
              'Curated list of sites — use Favourite Sites',
            ]}
            alternatives={[
              { name: 'Favourite Sites', when: 'curated/bookmarked sites from a list' },
              { name: 'Advanced Links', when: 'custom link collections' },
            ]}
          />

          <h2>Common Configurations</h2>
          <RecipeGrid>
            <RecipeCard
              title="Full Site Directory"
              description="Complete site search with all details"
              useCase="Dedicated sites page"
              icon={<Search className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'All Sites' },
                { property: 'itemsPerPage', value: '12' },
                { property: 'showFavourites', value: 'On' },
                { property: 'showCreatedDate', value: 'On' },
                { property: 'showSiteOwner', value: 'On' },
                { property: 'showDescription', value: 'On' },
                { property: 'enableTypeahead', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Compact Site Search"
              description="Minimal site finder for homepage"
              useCase="Homepage widget"
              icon={<Building className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Find a Site' },
                { property: 'itemsPerPage', value: '8' },
                { property: 'showFavourites', value: 'On' },
                { property: 'showCreatedDate', value: 'Off' },
                { property: 'showSiteOwner', value: 'Off' },
                { property: 'showDescription', value: 'Off' },
                { property: 'enableTypeahead', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Favourites Focus"
              description="Quick access to bookmarked sites"
              useCase="Personal dashboard"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'My Sites' },
                { property: 'showFavourites', value: 'On' },
                { property: 'showDescription', value: 'On' },
                { property: 'additionalLinkText', value: 'View All Sites' },
                { property: 'additionalLinkUrl', value: '/sites/intranet/sites' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>

          <Callout type="tip" title="Enable typeahead for large organizations">
            Typeahead search helps users find sites quickly in organizations with many sites.
          </Callout>

          <Callout type="tip" title="Use result source for scoping">
            Optionally configure a custom Result Source ID to limit which sites appear in the directory.
          </Callout>

          <Callout type="pro" title="Favourites are stored locally">
            Site favourites are stored in the user&apos;s browser local storage, providing quick access without server configuration.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Sites not appearing', solution: 'Ensure sites have been indexed by SharePoint search. New sites may take time to appear. Check that users have permission to view the sites.' },
              { problem: 'Typeahead not working', solution: 'Verify "Enable Typeahead" is toggled on in the property pane.' },
              { problem: 'Favourites not saving', solution: 'Favourites use browser local storage. Ensure local storage is enabled and not blocked by browser settings.' },
              { problem: 'Too few/too many sites appearing', solution: 'Adjust "Items Per Page" in the property pane or configure a custom "Result Source ID" to filter sites.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>How It Works</h3>
          <p>
            Site Directory uses the SharePoint Search API to discover and display sites. 
            Unlike web parts that require a manually maintained list, Site Directory automatically 
            finds all sites that users have access to. You can optionally scope results using a 
            custom Result Source ID.
          </p>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title (default: Site Directory)</td></tr>
              <tr><td><code>titleIconName</code></td><td>Text</td><td>Fluent UI icon name (default: SharepointLogo)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
            </tbody>
          </table>

          <h4>Data Source</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>resultSourceId</code></td><td>Text</td><td>Optional Result Source ID to scope site search results</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (4-50)</td><td>Number of sites to display per page (step: 4, default: 12)</td></tr>
            </tbody>
          </table>

          <h4>Display Options</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>showFavourites</code></td><td>Toggle</td><td>Show favourites toggle and section (default: On)</td></tr>
              <tr><td><code>showCreatedDate</code></td><td>Toggle</td><td>Show site created date (default: On)</td></tr>
              <tr><td><code>showSiteOwner</code></td><td>Toggle</td><td>Show site owner (default: On)</td></tr>
              <tr><td><code>showDescription</code></td><td>Toggle</td><td>Show site description (default: On)</td></tr>
              <tr><td><code>enableTypeahead</code></td><td>Toggle</td><td>Enable typeahead search suggestions (default: On)</td></tr>
            </tbody>
          </table>

          <h4>Additional Link</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>additionalLinkText</code></td><td>Text</td><td>Text for the footer link (e.g., &quot;View All Sites&quot;)</td></tr>
              <tr><td><code>additionalLinkUrl</code></td><td>Text</td><td>URL for the footer link</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ SharePoint Search-based site discovery</li>
            <li>✅ Typeahead search suggestions</li>
            <li>✅ Site favourites (browser local storage)</li>
            <li>✅ Pagination</li>
            <li>✅ Show/hide site metadata (owner, date, description)</li>
            <li>✅ Custom Result Source filtering</li>
            <li>✅ Responsive design</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
