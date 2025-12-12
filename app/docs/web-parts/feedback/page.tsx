import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { MessageSquare, Star, HelpCircle, Send } from 'lucide-react';

export default function FeedbackWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Feedback</DocsTitle>
      <DocsDescription>
        Collect user feedback with customizable forms and rating options.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Interactive
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Feedback Working in 3 Steps"
            time="5 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Feedback list created with required columns',
            ]}
            steps={[
              {
                title: 'Create the Feedback list',
                description: 'Create a SharePoint list named "Feedback" with Title, Category, Rating, and Comments columns.',
              },
              {
                title: 'Add Feedback web part',
                description: 'Edit the page, add the Bonzai Feedback web part to your desired section.',
              },
              {
                title: 'Configure and publish',
                description: 'Select your Feedback list, enable rating if desired, and publish the page.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Collect user feedback on the intranet',
              'Gather feature requests and suggestions',
              'Enable quick contact with site administrators',
              'Capture ratings for content or services',
              'Create support request forms',
            ]}
            bestFor={[
              'Homepage footer — quick feedback access',
              'Support pages — contact forms',
              'Department pages — team feedback collection',
              'Any page — sidebar feedback widget',
            ]}
            notFor={[
              'Complex multi-step forms — use PowerApps',
              'Survey with multiple questions — use Microsoft Forms',
              'Anonymous voting — use separate polling tools',
            ]}
            alternatives={[
              { name: 'Microsoft Forms', when: 'complex surveys' },
              { name: 'PowerApps', when: 'custom business forms' },
            ]}
          />

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create a Feedback SharePoint list',
                description: 'Go to Site Contents → New → List. Name it "Feedback".',
              },
              {
                title: 'Add required columns',
                description: 'Add: Category (Choice), Rating (Number 1-5), Comments (Multiple lines), Email (Single line optional).',
                tip: 'Include a Category column with options like "Bug Report", "Feature Request", "General Feedback".',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit the target page, click +, and add "Bonzai Feedback".',
              },
              {
                title: 'Select the Feedback list',
                description: 'In the property pane, select your Feedback list from the dropdown.',
              },
              {
                title: 'Enable rating (optional)',
                description: 'Toggle "Show Rating" to display a star rating component.',
              },
              {
                title: 'Configure category filter',
                description: 'Toggle "Show Category Filter" to let users categorize their feedback.',
              },
              {
                title: 'Set success message',
                description: 'Customize the message shown after successful submission.',
              },
              {
                title: 'Publish and test',
                description: 'Publish the page and submit test feedback to verify it saves to the list.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>

          <RecipeGrid>
            <RecipeCard
              title="Footer Feedback Widget"
              description="Quick feedback in the page footer"
              useCase="Site-wide feedback collection"
              icon={<MessageSquare className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Share Your Feedback' },
                { property: 'Show Rating', value: 'Yes' },
                { property: 'Show Category', value: 'No' },
                { property: 'Chrome Type', value: 'Compact' },
              ]}
            />
            <RecipeCard
              title="Full Feedback Form"
              description="Complete form with categories"
              useCase="Dedicated feedback page"
              icon={<Send className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Feedback & Suggestions' },
                { property: 'Show Rating', value: 'Yes' },
                { property: 'Show Category', value: 'Yes' },
                { property: 'Items Per Page', value: '5' },
              ]}
            />
            <RecipeCard
              title="Support Request"
              description="IT or HR support form"
              useCase="Help desk pages"
              icon={<HelpCircle className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Submit a Request' },
                { property: 'Show Category', value: 'Yes' },
                { property: 'Show Rating', value: 'No' },
                { property: 'Required Fields', value: 'Category, Comments' },
              ]}
            />
            <RecipeCard
              title="Rating Collection"
              description="Star rating focused"
              useCase="Content rating pages"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Rate This Page' },
                { property: 'Show Rating', value: 'Yes' },
                { property: 'Show Category', value: 'No' },
                { property: 'Chrome Type', value: 'Compact' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Make feedback easy to find">
            Place the Feedback web part in a consistent location across pages 
            (e.g., footer or sidebar) so users know where to find it.
          </Callout>

          <Callout type="tip" title="Review feedback regularly">
            Set up Power Automate notifications to alert admins when new 
            feedback is submitted. Respond promptly to build engagement.
          </Callout>

          <Callout type="pro" title="Use categories for routing">
            Categories help route feedback to the right team. Set up 
            different views in SharePoint for IT, HR, and Content teams.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Feedback not saving',
                solution: 'Verify users have Contribute permission on the Feedback list.',
              },
              {
                problem: 'Rating stars not appearing',
                solution: 'Ensure "Show Rating" is enabled in the property pane.',
              },
              {
                problem: 'Categories not showing',
                solution: 'Check that the Category column exists in your list and has choice options.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Feedback List Schema</h3>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td></tr>
              <tr><td>Rating</td><td>Number (1-5)</td><td>No</td></tr>
              <tr><td>Comments</td><td>Multiple lines</td><td>Yes</td></tr>
              <tr><td>Email</td><td>Single line</td><td>No</td></tr>
              <tr><td>SubmittedBy</td><td>Person</td><td>Auto</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Feedback list</td></tr>
              <tr><td><code>showRating</code></td><td>Toggle</td><td>Show star rating</td></tr>
              <tr><td><code>showCategory</code></td><td>Toggle</td><td>Show category dropdown</td></tr>
              <tr><td><code>successMessage</code></td><td>Text</td><td>Post-submit message</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Feedback form submission</li>
            <li>✅ Star rating (1-5)</li>
            <li>✅ Category selection</li>
            <li>✅ Rich text comments</li>
            <li>✅ Success confirmation</li>
            <li>✅ Responsive design</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
