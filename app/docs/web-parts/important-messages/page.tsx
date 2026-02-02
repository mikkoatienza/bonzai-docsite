import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Info, AlertTriangle, AlertCircle, CheckCircle, Bell, Building, Globe } from 'lucide-react';

export default function ImportantMessagesWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Important Messages</DocsTitle>
      <DocsDescription>
        Display announcements and alerts with targeting, dismissable options, and date-based activation.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Communication
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Important Messages Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Important Messages SharePoint list created (see schema below)',
            ]}
            steps={[
              {
                title: 'Create the Important Messages list',
                description: 'Create a SharePoint list with the required columns: Title, Body, Category, StartDate, EndDate.',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit the page, click +, search for "Important Messages", and add it to a section.',
              },
              {
                title: 'Select your list and configure',
                description: 'Open the property pane, select your list from the dropdown, optionally select a view, and publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Announce system maintenance or outages',
              'Share company-wide important updates',
              'Display emergency notifications',
              'Communicate policy changes or deadlines',
              'Target specific messages to departments or locations',
            ]}
            bestFor={[
              'Homepage — at the top for maximum visibility',
              'Department pages — for team-specific announcements',
              'Landing pages — for contextual alerts',
              'Any page header — first thing users see',
            ]}
            notFor={[
              'Long-form news articles — use News Rollup instead',
              'Permanent content — messages should be time-limited',
              'Interactive content — this is read-only',
            ]}
            alternatives={[
              { name: 'News Rollup', when: 'detailed news articles with images' },
              { name: 'Content Cards', when: 'static informational tiles' },
            ]}
          />

          {/* MESSAGE TYPES VISUAL */}
          <h2>Message Categories</h2>
          <p>Important Messages supports four visual styles based on the <code>Category</code> field:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <Info className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <span className="font-semibold text-blue-900 dark:text-blue-100">Info</span>
                <span className="ml-2 text-sm text-blue-700 dark:text-blue-300">General announcements and updates</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <span className="font-semibold text-amber-900 dark:text-amber-100">Warning</span>
                <span className="ml-2 text-sm text-amber-700 dark:text-amber-300">Important notices requiring attention</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <AlertCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
              <div>
                <span className="font-semibold text-red-900 dark:text-red-100">Error</span>
                <span className="ml-2 text-sm text-red-700 dark:text-red-300">Urgent alerts and emergencies</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <div>
                <span className="font-semibold text-green-900 dark:text-green-100">Success</span>
                <span className="ml-2 text-sm text-green-700 dark:text-green-300">Positive updates and confirmations</span>
              </div>
            </div>
          </div>

          <h2>Styling and Theme</h2>
          <ul>
            <li>Message background uses the site accent color for a banner-style appearance.</li>
            <li>Foreground text automatically switches between dark/light for contrast.</li>
            <li>Icons are based on the selected Category (Info, Warning, Error, Success).</li>
            <li>Dismiss action remains visible and styled to match the banner.</li>
          </ul>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create the Important Messages SharePoint list',
                description: 'Go to Site Contents → New → List. Name it "Important Messages". Add the columns from the schema below.',
                tip: 'Use the list template script if available in your Bonzai deployment package.',
              },
              {
                title: 'Add your first message to the list',
                description: 'Open the list, click "New", fill in the Title, Body (rich text), Category, StartDate, and EndDate fields.',
              },
              {
                title: 'Edit the page and add the web part',
                description: 'Navigate to your target page, click Edit, click the + button in a section, and search for "Important Messages".',
              },
              {
                title: 'Select your list in the property pane',
                description: 'Click the pencil icon on the web part, then select your list from the List dropdown picker.',
              },
              {
                title: 'Configure display options',
                description: 'Set the title (optional), adjust "Max Messages to Show" slider (1-10), and optionally set a fixed height.',
              },
              {
                title: 'Enable content targeting (optional)',
                description: 'Toggle on Content Targeting to show different messages to different user groups based on department, location, or role.',
              },
              {
                title: 'Publish and test',
                description: 'Save and publish the page. Verify messages appear with correct styling based on Category.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="Homepage Alert Banner"
              description="Critical alerts at the top of the homepage"
              useCase="Homepage, full-width above content"
              icon={<Bell className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Announcements' },
                { property: 'Max Messages to Show', value: '3' },
                { property: 'Content Targeting', value: 'Off' },
                { property: 'Fixed Height', value: '0 (auto)' },
              ]}
            />
            <RecipeCard
              title="Department Notices"
              description="Targeted messages for specific teams"
              useCase="Department landing pages"
              icon={<Building className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'HR Updates' },
                { property: 'Content Targeting', value: 'Enabled' },
                { property: 'View', value: 'HR Messages' },
                { property: 'Max Messages to Show', value: '5' },
              ]}
            />
            <RecipeCard
              title="Emergency Broadcast"
              description="High-visibility error alerts"
              useCase="Site-wide emergency communication"
              icon={<AlertCircle className="h-5 w-5" />}
              config={[
                { property: 'Title', value: '⚠️ Alert' },
                { property: 'View', value: 'Error Only' },
                { property: 'Max Messages to Show', value: '1' },
                { property: 'Fixed Height', value: '150' },
              ]}
            />
            <RecipeCard
              title="Regional Updates"
              description="Location-specific announcements"
              useCase="Regional office pages"
              icon={<Globe className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Local News' },
                { property: 'Content Targeting', value: 'Enabled' },
                { property: 'Max Messages to Show', value: '5' },
                { property: 'Site URL', value: '(current site)' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use date ranges for automatic activation">
            Set StartDate and EndDate on all messages so they automatically appear and disappear. 
            This eliminates the need to manually manage active messages.
          </Callout>

          <Callout type="tip" title="Reserve Error category for true emergencies">
            Using the Error category too often trains users to ignore it. 
            Save red styling for genuine urgent situations only.
          </Callout>

          <Callout type="pro" title="Create views for different contexts">
            Create SharePoint views like "Homepage Messages", "HR Only", "IT Alerts" and use the View picker 
            in the property pane to display context-appropriate messages on different pages.
          </Callout>

          <Callout type="warning" title="Always set end dates">
            Messages without EndDate may display indefinitely. 
            Set realistic end dates to keep content fresh and relevant.
          </Callout>

          <Callout type="info" title="AllowDismissal is a list field">
            The ability to dismiss individual messages is controlled per-message via the <code>AllowDismissal</code> 
            field in the SharePoint list, not a web part property. Set this to "No" for critical messages that 
            should always be visible.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Messages not appearing on the page',
                solution: 'Check that the message StartDate is today or earlier, EndDate is today or later, and MessageActive is set to Yes.',
                details: 'Also verify the web part is pointing to the correct list and that you have permission to view list items.',
              },
              {
                problem: 'Dismissed messages keep reappearing',
                solution: 'Dismissal data is stored in browser local storage. Clearing browser data resets dismissals. This is expected behavior.',
              },
              {
                problem: 'Content targeting not working',
                solution: 'Ensure Content Targeting is enabled on the web part and that messages have TargetAudience values. Verify user profiles have the required attributes in Azure AD.',
              },
              {
                problem: 'Styling looks wrong or colors are off',
                solution: 'Check that Category values match exactly: Info, Warning, Error, or Success. Custom themes may override default colors via Theme Manager.',
              },
              {
                problem: 'List not appearing in the dropdown',
                solution: 'The list must be on the same site as the page. Lists from other sites are not shown in the picker. Use the Site URL field to specify a different site.',
              },
              {
                problem: 'AllowDismissal field not working',
                solution: 'SharePoint encodes field names with special characters. The service auto-discovers the field name. Check browser console for field discovery logs.',
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
                <td>Web part title displayed above messages (default: "Important Messages")</td>
              </tr>
              <tr>
                <td><code>siteUrl</code></td>
                <td>Text</td>
                <td>No</td>
                <td>Site URL for cross-site queries. Leave empty for current site.</td>
              </tr>
              <tr>
                <td><code>listId</code></td>
                <td>List Picker</td>
                <td>Yes</td>
                <td>SharePoint list containing messages</td>
              </tr>
              <tr>
                <td><code>viewId</code></td>
                <td>View Picker</td>
                <td>No</td>
                <td>SharePoint view to filter messages</td>
              </tr>
              <tr>
                <td><code>enableContentTargeting</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Filter messages by user profile attributes (TargetAudience field)</td>
              </tr>
              <tr>
                <td><code>maxMessagesToShow</code></td>
                <td>Slider (1-10)</td>
                <td>No</td>
                <td>Maximum messages to display at once (default: 1)</td>
              </tr>
              <tr>
                <td><code>fixedHeight</code></td>
                <td>Slider (0-1000)</td>
                <td>No</td>
                <td>Fixed height in pixels. 0 = auto height based on content.</td>
              </tr>
            </tbody>
          </table>

          <h3>Required SharePoint List Schema</h3>

          <p>Create a SharePoint list with these columns:</p>

          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Internal Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td><code>Title</code></td>
                <td>Single line of text</td>
                <td>Yes</td>
                <td>Message title</td>
              </tr>
              <tr>
                <td>Body</td>
                <td><code>Body</code></td>
                <td>Multiple lines (Rich text)</td>
                <td>Yes</td>
                <td>Message content (HTML)</td>
              </tr>
              <tr>
                <td>Category</td>
                <td><code>Category</code></td>
                <td>Choice</td>
                <td>Yes</td>
                <td>Values: Info, Warning, Error, Success</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td><code>StartDate</code></td>
                <td>Date and Time</td>
                <td>Yes</td>
                <td>When message becomes active</td>
              </tr>
              <tr>
                <td>End Date</td>
                <td><code>EndDate</code></td>
                <td>Date and Time</td>
                <td>Yes</td>
                <td>When message expires</td>
              </tr>
              <tr>
                <td>Message Active?</td>
                <td><code>MessageActive</code></td>
                <td>Yes/No</td>
                <td>No</td>
                <td>Toggle to manually enable/disable message</td>
              </tr>
              <tr>
                <td>Allow Dismissal?</td>
                <td><code>AllowDismissal</code></td>
                <td>Yes/No</td>
                <td>No</td>
                <td>Can users dismiss this message? (default: Yes)</td>
              </tr>
              <tr>
                <td>Target Audience</td>
                <td><code>TargetAudience</code></td>
                <td>Single line of text</td>
                <td>No</td>
                <td>User group name for content targeting</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Four message categories with distinct styling (Info, Warning, Error, Success)</li>
            <li>✅ Date-based activation (StartDate/EndDate)</li>
            <li>✅ Per-message dismissal control (AllowDismissal field)</li>
            <li>✅ Dismissal state stored in browser local storage</li>
            <li>✅ Content targeting by user groups (TargetAudience field)</li>
            <li>✅ Dynamic list and view pickers in property pane</li>
            <li>✅ Configurable max messages (1-10)</li>
            <li>✅ Fixed height option for consistent layouts</li>
            <li>✅ Theme Manager integration</li>
            <li>✅ Responsive design</li>
            <li>✅ Cross-site data source support (siteUrl property)</li>
          </ul>

          <h3>Migration from Classic</h3>

          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Classic</th>
                <th>Modern</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Technology</td>
                <td>XmlWebPart + bonzai.min.js</td>
                <td>SPFx + React</td>
              </tr>
              <tr>
                <td>Message Colors</td>
                <td>Brick Theme Editor</td>
                <td>CSS Custom Properties via Theme Manager</td>
              </tr>
              <tr>
                <td>Dismissal Storage</td>
                <td>Property bags</td>
                <td>Browser Local Storage</td>
              </tr>
              <tr>
                <td>Date Filtering</td>
                <td>CAML queries</td>
                <td>REST API + client-side date comparison</td>
              </tr>
              <tr>
                <td>List Selection</td>
                <td>Manual list name entry</td>
                <td>Visual List Picker dropdown</td>
              </tr>
              <tr>
                <td>View Selection</td>
                <td>Manual view name entry</td>
                <td>Visual View Picker dropdown</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
