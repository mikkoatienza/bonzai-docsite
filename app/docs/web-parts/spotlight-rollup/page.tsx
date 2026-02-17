import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Lightbulb, Award, Star, Users } from 'lucide-react';

export default function SpotlightRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Spotlight Rollup</DocsTitle>
      <DocsDescription>
        Feature employees or content with image-focused card or image layouts, supporting comments and likes.
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

          {/* QUICK START */}
          <QuickStart
            title="Get Spotlight Rollup Working in 3 Steps"
            time="10-20 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Site Pages or a custom list with banner images',
            ]}
            steps={[
              {
                title: 'Create spotlight content',
                description: 'Create Site Pages with banner images. Optionally create a filtered view for spotlight items.',
              },
              {
                title: 'Add Spotlight Rollup to your page',
                description: 'Edit the page, click +, search for "Spotlight Rollup", and add it.',
              },
              {
                title: 'Configure and publish',
                description: 'Select your list, choose a view to filter, set template (Card or Image), and publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Highlight employee achievements and recognitions',
              'Feature team members or new hires',
              'Showcase special projects or initiatives',
              'Create a "Featured" section on your homepage',
              'Display promotional content with large images',
            ]}
            bestFor={[
              'Homepage — featured content hero section',
              'About Us page — team highlights',
              'Recognition page — employee of the month',
              'Project pages — showcasing achievements',
            ]}
            notFor={[
              'News articles — use News Rollup',
              'Generic page listings — use Pages Rollup',
              'Small profile grids — use People Listing',
            ]}
            alternatives={[
              { name: 'News Rollup', when: 'time-based news content' },
              { name: 'Pages Rollup', when: 'general page listings' },
              { name: 'People Listing', when: 'team member grid from a list' },
            ]}
          />

          <h2>Recent Updates</h2>
          <ul>
            <li>Image selection prefers higher-resolution page images to avoid low-res thumbnails.</li>
          </ul>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create spotlight content pages',
                description: 'Go to Site Pages and create pages for each spotlight item. Add large banner images.',
                tip: 'Use 350x197 pixel images for best results in the rollup.',
              },
              {
                title: 'Create a view for filtering (optional)',
                description: 'Create a SharePoint view in Site Pages to filter spotlight items (e.g., by category or promoted state).',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit your target page (e.g., homepage), click +, and add "Spotlight Rollup".',
              },
              {
                title: 'Configure the data source',
                description: 'In the property pane, select your list (e.g., Site Pages) and optionally select a view.',
              },
              {
                title: 'Choose a template',
                description: 'Select Card or Image template based on your design needs.',
              },
              {
                title: 'Set items per page and row',
                description: 'Configure how many spotlight items to display (3-6 is typical for homepage) and items per row (2-4).',
              },
              {
                title: 'Enable promoted filtering (optional)',
                description: 'Toggle "Show Promoted Only" to feature only items marked as promoted.',
              },
              {
                title: 'Publish',
                description: 'Save and publish the page. Spotlight items should appear with large images.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>

          <RecipeGrid>
            <RecipeCard
              title="Homepage Feature"
              description="Large spotlight cards for the homepage"
              useCase="Homepage hero section"
              icon={<Lightbulb className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Featured' },
                { property: 'listName', value: 'Site Pages' },
                { property: 'templateName', value: 'card' },
                { property: 'itemsPerPage', value: '3' },
                { property: 'itemsPerRow', value: '3' },
                { property: 'chromeType', value: 'none' },
              ]}
            />
            <RecipeCard
              title="Employee Recognition"
              description="Highlight employee achievements"
              useCase="Recognition/HR pages"
              icon={<Award className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Employee Spotlight' },
                { property: 'templateName', value: 'image' },
                { property: 'itemsPerPage', value: '4' },
                { property: 'showPromotedOnly', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Team Highlights"
              description="Feature team members"
              useCase="About Us page"
              icon={<Users className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Our Team' },
                { property: 'templateName', value: 'card' },
                { property: 'itemsPerPage', value: '6' },
                { property: 'itemsPerRow', value: '3' },
                { property: 'showComments', value: 'Off' },
              ]}
            />
            <RecipeCard
              title="Featured Projects"
              description="Showcase project achievements"
              useCase="Portfolio pages"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'Featured Projects' },
                { property: 'itemsPerPage', value: '4' },
                { property: 'itemsPerRow', value: '2' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use high-quality images">
            Spotlight is image-focused. Use professional, high-resolution images 
            sized at 350x197 pixels for consistent, crisp display.
          </Callout>

          <Callout type="tip" title="Keep titles concise">
            Spotlight titles display on image overlays. Keep them short 
            (3-5 words) for readability.
          </Callout>

          <Callout type="pro" title="Rotate featured content regularly">
            Update your spotlight content weekly or monthly to keep the 
            homepage fresh and engaging.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Spotlight items not appearing',
                solution: 'Verify the list is selected and contains items. If using a view, ensure the view returns items. Check that pages are published, not drafts.',
              },
              {
                problem: 'Images not displaying',
                solution: 'Ensure pages have banner images set. Images must be accessible to all users.',
              },
              {
                problem: 'Wrong items showing',
                solution: 'Select a filtered view in the View picker to control which items appear. Or enable "Show Promoted Only" toggle.',
              },
              {
                problem: 'Items per row not changing',
                solution: 'Items per row only applies to the Card template. The Image template uses a full-width layout.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Site Pages Schema</h3>
          <p>
            Spotlight Rollup reads from a selected list (commonly Site Pages). If no list is selected, it returns no items.
            Use these columns to curate spotlight items:
          </p>
          <ol>
            <li>Select Site Pages (or a custom list) in the property pane.</li>
            <li>Add a <strong>Showcase</strong> column (Choice or Text) and set value <strong>Spotlight</strong> on spotlight items.</li>
            <li>Add banner images to pages for best visuals.</li>
            <li>Optional: add Category or Promoted fields if you use filtered views.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Default column</td></tr>
              <tr><td>Banner Image</td><td>Image</td><td>No</td><td>Used for card/image layouts</td></tr>
              <tr><td>Showcase</td><td>Choice or Text</td><td>Yes</td><td>Set to <strong>Spotlight</strong> (PromotedState also supported)</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td><td>Optional for filtered views</td></tr>
              <tr><td>PromotedState</td><td>Number</td><td>No</td><td>Optional for promoted filtering</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>

          <h4>Title Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title displayed above the content</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Optional URL to make the title clickable</td></tr>
              <tr><td><code>titleIconOption</code></td><td>Dropdown</td><td>Title icon mode: Custom or None</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Fluent UI icon picker (default: Lightbulb)</td></tr>
              <tr><td><code>titleIconUrl</code></td><td>Text</td><td>Custom icon URL (overrides icon name)</td></tr>
              <tr><td><code>description</code></td><td>Text (Multiline)</td><td>Optional description below the title</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Text for the &quot;Show More&quot; link (default: See all)</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>URL for the &quot;Show More&quot; link (empty = hidden)</td></tr>
            </tbody>
          </table>

          <h4>Data Source Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Site URL where the list is located (empty = current site)</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>Source list (e.g., Site Pages)</td></tr>
              <tr><td><code>viewName</code></td><td>View Picker</td><td>View to filter items (depends on selected list)</td></tr>
              <tr><td><code>showPromotedOnly</code></td><td>Toggle</td><td>Show only promoted/featured items</td></tr>
              <tr><td><code>sortBy</code></td><td>Dropdown</td><td>Sort by: Modified, Created, or Title</td></tr>
            </tbody>
          </table>

          <h4>Display Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>templateName</code></td><td>Dropdown</td><td>Display template: Card or Image</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Items per row (2-4), only for Card template</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Slider (1-20)</td><td>Number of items to display</td></tr>
              <tr><td><code>showComments</code></td><td>Toggle</td><td>Show comment count (default: On)</td></tr>
              <tr><td><code>showLikes</code></td><td>Toggle</td><td>Show like count (default: On)</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Fixed height in pixels (0 = auto)</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Chrome type: None, Title Only, Border Only, Title and Border</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Card and Image display templates</li>
            <li>✅ Image-focused layouts</li>
            <li>✅ View-based filtering</li>
            <li>✅ Promoted item filtering</li>
            <li>✅ Comments and likes display</li>
            <li>✅ Multiple sort options</li>
            <li>✅ Configurable items per row (Card template)</li>
            <li>✅ Custom title with icon and link</li>
            <li>✅ Show more link</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
