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
        Collect user feedback with customizable forms, star ratings, categories, and submission history.
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
            title="Get Feedback Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Feedback list created with required columns',
            ]}
            steps={[
              {
                title: 'Create the Feedback list',
                description: 'Create a SharePoint list named "Feedback" with Title, Description, Category, Rating, and IsAnonymous columns.',
              },
              {
                title: 'Add Feedback web part',
                description: 'Edit the page, add the Bonzai Feedback web part to your desired section.',
              },
              {
                title: 'Configure and publish',
                description: 'Select your Feedback list, configure categories and rating options, then publish.',
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
              'Allow anonymous or identified feedback',
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
              'Event registration — use Events Rollup',
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
                description: 'Add: Title, Description (Multiple lines), Category (Choice), Rating (Number), IsAnonymous (Yes/No), SubmittedBy (Text), SubmittedByName (Text).',
                tip: 'Title is already a default column. Create a Choice column for Category with your feedback types.',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit the target page, click +, and add "Bonzai Feedback".',
              },
              {
                title: 'Select the Feedback list',
                description: 'In the property pane, select your Feedback list from the List Picker.',
              },
              {
                title: 'Configure categories',
                description: 'Enter comma-separated categories like "General,Bug Report,Feature Request,Other".',
              },
              {
                title: 'Configure rating options',
                description: 'Toggle "Show Rating" and set the maximum rating (3-10 stars).',
              },
              {
                title: 'Configure anonymous option',
                description: 'Enable "Allow Anonymous" to let users submit feedback without their name.',
              },
              {
                title: 'Set up submissions display',
                description: 'Enable "Show My Submissions" to let users see their past feedback. Optionally enable "Show All Submissions" for transparency.',
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
              title="Quick Feedback Widget"
              description="Compact feedback in the page footer"
              useCase="Site-wide feedback collection"
              icon={<MessageSquare className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Share Your Feedback' },
                { property: 'Show Rating', value: 'Yes' },
                { property: 'Max Rating', value: '5' },
                { property: 'Categories', value: 'General,Suggestion' },
                { property: 'Chrome Type', value: 'Title Only' },
              ]}
            />
            <RecipeCard
              title="Full Feedback Form"
              description="Complete form with all options"
              useCase="Dedicated feedback page"
              icon={<Send className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Feedback & Suggestions' },
                { property: 'Show Rating', value: 'Yes' },
                { property: 'Allow Anonymous', value: 'Yes' },
                { property: 'Show My Submissions', value: 'Yes' },
                { property: 'Max Items', value: '10' },
              ]}
            />
            <RecipeCard
              title="Support Request"
              description="IT or HR support form"
              useCase="Help desk pages"
              icon={<HelpCircle className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Submit a Request' },
                { property: 'Categories', value: 'Hardware,Software,Access,Other' },
                { property: 'Show Rating', value: 'No' },
                { property: 'Allow Anonymous', value: 'No' },
                { property: 'Chrome Type', value: 'Title and Border' },
              ]}
            />
            <RecipeCard
              title="Content Rating"
              description="Star rating focused"
              useCase="Content rating pages"
              icon={<Star className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Rate This Page' },
                { property: 'Show Rating', value: 'Yes' },
                { property: 'Max Rating', value: '5' },
                { property: 'Is Collapsible', value: 'Yes' },
                { property: 'Default Collapsed', value: 'Yes' },
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

          <Callout type="info" title="Anonymous vs. Identified feedback">
            When "Allow Anonymous" is enabled, users can choose to hide their identity. 
            Anonymous submissions store "(Anonymous)" instead of the user's name.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: '"Failed to load submissions" error',
                solution: 'The Feedback list may be on a different site. Check the Site URL in the property pane matches where your list is located. Leave empty for current site.',
              },
              {
                problem: '"List not found" but list exists',
                solution: 'Ensure the Site URL points to the correct site. The web part looks for the list on the configured site, not necessarily where the page is.',
              },
              {
                problem: 'Feedback not saving / 400 error',
                solution: 'Verify all required columns exist (Title, Description, Category, Rating, IsAnonymous, SubmittedBy, SubmittedByName). Users need Contribute permission.',
              },
              {
                problem: 'Rating stars not appearing',
                solution: 'Ensure "Show Rating" is enabled in the property pane.',
              },
              {
                problem: 'Categories not showing in dropdown',
                solution: 'Check that the "Categories" text field in property pane has comma-separated values (e.g., "General,Bug Report,Feature Request").',
              },
              {
                problem: 'My Submissions section empty',
                solution: 'Enable "Show My Submissions" in property pane. Only feedback submitted by the current user will appear.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Feedback List Schema</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Create a SharePoint list named &quot;Feedback&quot; with these columns:
          </p>
          <ol>
            <li>Create a list named <strong>Feedback</strong>.</li>
            <li>Add the required columns below (Title is already present).</li>
            <li>Ensure users have Contribute permissions to submit feedback.</li>
          </ol>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Default column — feedback subject</td></tr>
              <tr><td>Description</td><td>Multiple lines of text</td><td>Yes</td><td>Plain text feedback content</td></tr>
              <tr><td>Category</td><td>Choice</td><td>Yes</td><td>e.g., General, Bug Report, Feature Request</td></tr>
              <tr><td>Rating</td><td>Number</td><td>Yes</td><td>Stores star rating value</td></tr>
              <tr><td>IsAnonymous</td><td>Yes/No</td><td>Yes</td><td>Whether user chose anonymous</td></tr>
              <tr><td>SubmittedBy</td><td>Single line of text</td><td>Yes</td><td>User email (auto-populated)</td></tr>
              <tr><td>SubmittedByName</td><td>Single line of text</td><td>Yes</td><td>User display name (auto-populated)</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Group</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Title & Navigation</td><td>Web part title</td></tr>
              <tr><td><code>titleUrl</code></td><td>Text</td><td>Title & Navigation</td><td>Make title a link</td></tr>
              <tr><td><code>titleIconOption</code></td><td>Dropdown</td><td>Title & Navigation</td><td>Title icon mode: Custom or None</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Title & Navigation</td><td>Fluent UI icon picker</td></tr>
              <tr><td><code>description</code></td><td>Text</td><td>Title & Navigation</td><td>Description below title</td></tr>
              <tr><td><code>showMoreUrl</code></td><td>Text</td><td>Title & Navigation</td><td>"View All" link URL</td></tr>
              <tr><td><code>showMoreText</code></td><td>Text</td><td>Title & Navigation</td><td>"View All" link text</td></tr>
              <tr><td><code>siteUrl</code></td><td>Text</td><td>Data Source</td><td>Site where list is located</td></tr>
              <tr><td><code>listName</code></td><td>List Picker</td><td>Data Source</td><td>Feedback list</td></tr>
              <tr><td><code>categories</code></td><td>Text (multiline)</td><td>Form Config</td><td>Comma-separated categories</td></tr>
              <tr><td><code>showRating</code></td><td>Toggle</td><td>Form Config</td><td>Show star rating (default: true)</td></tr>
              <tr><td><code>maxRating</code></td><td>Slider (3-10)</td><td>Form Config</td><td>Maximum rating value (default: 5)</td></tr>
              <tr><td><code>allowAnonymous</code></td><td>Toggle</td><td>Form Config</td><td>Allow anonymous submissions</td></tr>
              <tr><td><code>showMySubmissions</code></td><td>Toggle</td><td>Submissions</td><td>Show user's past feedback</td></tr>
              <tr><td><code>showAllSubmissions</code></td><td>Toggle</td><td>Submissions</td><td>Show all users' feedback</td></tr>
              <tr><td><code>maxItems</code></td><td>Slider (1-50)</td><td>Submissions</td><td>Max submissions to display</td></tr>
              <tr><td><code>chromeType</code></td><td>Dropdown</td><td>Appearance</td><td>None/Title Only/Border Only/Title and Border</td></tr>
              <tr><td><code>fixedHeight</code></td><td>Slider (0-800)</td><td>Appearance</td><td>Fixed height in pixels</td></tr>
              <tr><td><code>isCollapsible</code></td><td>Toggle</td><td>Appearance</td><td>Allow collapse/expand</td></tr>
              <tr><td><code>defaultCollapsed</code></td><td>Toggle</td><td>Appearance</td><td>Start collapsed</td></tr>
              <tr><td><code>successMessage</code></td><td>Text</td><td>Messages</td><td>Post-submit confirmation</td></tr>
              <tr><td><code>enableAudienceTargeting</code></td><td>Toggle</td><td>Audience</td><td>Enable audience targeting</td></tr>
              <tr><td><code>targetAudience</code></td><td>Text</td><td>Audience</td><td>Comma-separated groups/emails</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Feedback form submission</li>
            <li>✅ Configurable star rating (3-10 stars)</li>
            <li>✅ Customizable categories</li>
            <li>✅ Anonymous submission option</li>
            <li>✅ View past submissions</li>
            <li>✅ View all submissions (admin feature)</li>
            <li>✅ Chrome type configuration</li>
            <li>✅ Collapsible/expandable</li>
            <li>✅ Custom success message</li>
            <li>✅ Audience targeting</li>
            <li>✅ "View More" link</li>
            <li>✅ Responsive design</li>
          </ul>

          <h3>Migration from Classic Bonzai</h3>
          <table>
            <thead><tr><th>Classic Feature</th><th>Modern Equivalent</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Feedback form</td><td>Feedback component</td><td>Same functionality</td></tr>
              <tr><td>Star rating</td><td><code>showRating</code> + <code>maxRating</code></td><td>Configurable 3-10 stars</td></tr>
              <tr><td>Category dropdown</td><td><code>categories</code> property</td><td>Comma-separated text</td></tr>
              <tr><td>Anonymous mode</td><td><code>allowAnonymous</code></td><td>Toggle in property pane</td></tr>
              <tr><td>Chrome types</td><td><code>chromeType</code></td><td>4 options available</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
