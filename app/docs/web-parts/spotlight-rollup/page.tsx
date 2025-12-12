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
        Feature employees or content with image-focused card layouts.
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
            time="3 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Site Pages with Spotlight content type or Showcase column',
            ]}
            steps={[
              {
                title: 'Create spotlight pages',
                description: 'Create Site Pages with the Showcase column set to "Spotlight" and add banner images.',
              },
              {
                title: 'Add Spotlight Rollup to your page',
                description: 'Edit the page, click +, search for "Spotlight Rollup", and add it.',
              },
              {
                title: 'Configure and publish',
                description: 'Select Site Pages as the source, set items to show, and publish.',
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

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create spotlight content pages',
                description: 'Go to Site Pages and create pages for each spotlight item. Add large banner images and set Showcase to "Spotlight".',
                tip: 'Use 350x197 pixel images for best results in the rollup.',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit your target page (e.g., homepage), click +, and add "Spotlight Rollup".',
              },
              {
                title: 'Configure the data source',
                description: 'In the property pane, select "Site Pages" as the list source.',
              },
              {
                title: 'Set the showcase filter',
                description: 'Enter "Spotlight" in the Showcase Filter field to only show spotlight pages.',
              },
              {
                title: 'Choose a layout',
                description: 'Select from card layout styles based on your design needs.',
              },
              {
                title: 'Set items to show',
                description: 'Configure how many spotlight items to display (3-6 is typical for homepage).',
              },
              {
                title: 'Enable promoted filtering (optional)',
                description: 'Toggle "Show Promoted Only" to feature only marked items.',
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
                { property: 'Title', value: 'Featured' },
                { property: 'List Name', value: 'Site Pages' },
                { property: 'Showcase Filter', value: 'Spotlight' },
                { property: 'Items to Show', value: '3' },
                { property: 'Chrome Type', value: 'None' },
              ]}
            />
            <RecipeCard
              title="Employee Recognition"
              description="Highlight employee achievements"
              useCase="Recognition/HR pages"
              icon={<Award className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Employee Spotlight' },
                { property: 'Showcase Filter', value: 'Recognition' },
                { property: 'Items to Show', value: '4' },
                { property: 'Show Promoted Only', value: 'Yes' },
              ]}
            />
            <RecipeCard
              title="Team Highlights"
              description="Feature team members"
              useCase="About Us page"
              icon={<Users className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Our Team' },
                { property: 'Showcase Filter', value: 'Team' },
                { property: 'Items to Show', value: '6' },
                { property: 'Layout', value: 'Grid' },
              ]}
            />
            <RecipeCard
              title="Featured Projects"
              description="Showcase project achievements"
              useCase="Portfolio pages"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Featured Projects' },
                { property: 'Showcase Filter', value: 'Project' },
                { property: 'Items to Show', value: '4' },
                { property: 'Content Targeting', value: 'Enabled' },
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
                solution: 'Verify pages have Showcase column set to "Spotlight". Check that pages are published, not drafts.',
              },
              {
                problem: 'Images not displaying',
                solution: 'Ensure pages have banner images set. Images must be accessible to all users.',
              },
              {
                problem: 'Wrong items showing',
                solution: 'Check the Showcase Filter value matches exactly (case-sensitive).',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Source list (Site Pages)</td></tr>
              <tr><td><code>showcaseFilter</code></td><td>Text</td><td>Filter by Showcase value</td></tr>
              <tr><td><code>layout</code></td><td>Dropdown</td><td>Card layout style</td></tr>
              <tr><td><code>itemsToShow</code></td><td>Number</td><td>Number of items</td></tr>
              <tr><td><code>showPromotedOnly</code></td><td>Toggle</td><td>Show only promoted items</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Image-focused cards</li>
            <li>✅ Featured content display</li>
            <li>✅ Multiple layout options</li>
            <li>✅ Content targeting</li>
            <li>✅ Responsive design</li>
            <li>✅ Promoted item filtering</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
