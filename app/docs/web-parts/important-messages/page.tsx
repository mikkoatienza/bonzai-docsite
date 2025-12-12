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
            time="5 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Important Messages SharePoint list created (see schema below)',
            ]}
            steps={[
              {
                title: 'Create the Important Messages list',
                description: 'Create a SharePoint list with the required columns: Title, Body, MessageType, StartDate, EndDate.',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit the page, click +, search for "Important Messages", and add it to a section.',
              },
              {
                title: 'Select your list and configure',
                description: 'Open the property pane, select your list, enable dismissal options if desired, and publish.',
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
          <h2>Message Types</h2>
          <p>Important Messages supports four visual styles to convey urgency:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <Info className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <span className="font-semibold text-blue-900 dark:text-blue-100">Informational</span>
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
                <span className="font-semibold text-red-900 dark:text-red-100">Critical</span>
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
                description: 'Open the list, click "New", fill in the Title, Body (rich text), MessageType, StartDate, and EndDate fields.',
              },
              {
                title: 'Edit the page and add the web part',
                description: 'Navigate to your target page, click Edit, click the + button in a section, and search for "Important Messages".',
              },
              {
                title: 'Select your list in the property pane',
                description: 'Click the pencil icon on the web part, then select "Important Messages" from the List dropdown.',
              },
              {
                title: 'Configure display options',
                description: 'Set the title (optional), enable "Allow Dismissal" if you want users to close messages, and configure max items.',
              },
              {
                title: 'Enable content targeting (optional)',
                description: 'Toggle on Content Targeting to show different messages to different user groups based on department, location, or role.',
              },
              {
                title: 'Publish and test',
                description: 'Save and publish the page. Verify messages appear with correct styling and that dismissal works if enabled.',
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
                { property: 'Max Items', value: '3' },
                { property: 'Allow Dismissal', value: 'Yes' },
                { property: 'Chrome Type', value: 'None' },
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
                { property: 'View Filter', value: 'HR Messages' },
                { property: 'Allow Dismissal', value: 'Yes' },
              ]}
            />
            <RecipeCard
              title="Emergency Broadcast"
              description="Non-dismissable critical alerts"
              useCase="Site-wide emergency communication"
              icon={<AlertCircle className="h-5 w-5" />}
              config={[
                { property: 'Title', value: '' },
                { property: 'View Filter', value: 'Critical Only' },
                { property: 'Allow Dismissal', value: 'No' },
                { property: 'Chrome Type', value: 'None' },
              ]}
            />
            <RecipeCard
              title="Regional Updates"
              description="Location-specific announcements"
              useCase="Regional office pages"
              icon={<Globe className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Local News' },
                { property: 'Content Targeting', value: 'By Location' },
                { property: 'Max Items', value: '5' },
                { property: 'Allow Dismissal', value: 'Yes' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use date ranges for automatic activation">
            Set StartDate and EndDate on all messages so they automatically appear and disappear. 
            This eliminates the need to manually manage active messages.
          </Callout>

          <Callout type="tip" title="Reserve Critical for true emergencies">
            Using Critical type too often trains users to ignore it. 
            Save red/critical styling for genuine urgent situations only.
          </Callout>

          <Callout type="pro" title="Create views for different contexts">
            Create SharePoint views like "Homepage Messages", "HR Only", "IT Alerts" and use View Filter 
            in the property pane to display context-appropriate messages on different pages.
          </Callout>

          <Callout type="warning" title="Always set end dates">
            Messages without EndDate may display indefinitely. 
            Set realistic end dates to keep content fresh and relevant.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Messages not appearing on the page',
                solution: 'Check that the message StartDate is today or earlier, EndDate is today or later, and Active is set to Yes.',
                details: 'Also verify the web part is pointing to the correct list and that you have permission to view list items.',
              },
              {
                problem: 'Dismissed messages keep reappearing',
                solution: 'Dismissal data is stored in browser local storage. Clearing browser data resets dismissals. This is expected behavior.',
              },
              {
                problem: 'Content targeting not working',
                solution: 'Ensure Content Targeting is enabled both on the web part and that messages have targeting metadata. Verify user profiles have the required attributes in Azure AD.',
              },
              {
                problem: 'Styling looks wrong or colors are off',
                solution: 'Check that MessageType values match exactly: Info, Warning, Critical, or Success. Custom themes may override default colors via Theme Manager.',
              },
              {
                problem: 'List not appearing in the dropdown',
                solution: 'The list must be on the same site as the page. Lists from other sites are not shown in the picker.',
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
                <td>Web part title displayed above messages</td>
              </tr>
              <tr>
                <td><code>listId</code></td>
                <td>Dropdown</td>
                <td>Yes</td>
                <td>SharePoint list containing messages</td>
              </tr>
              <tr>
                <td><code>viewId</code></td>
                <td>Dropdown</td>
                <td>No</td>
                <td>View to filter messages</td>
              </tr>
              <tr>
                <td><code>allowDismissal</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Allow users to dismiss messages</td>
              </tr>
              <tr>
                <td><code>maxItems</code></td>
                <td>Number</td>
                <td>No</td>
                <td>Maximum messages to display</td>
              </tr>
              <tr>
                <td><code>enableContentTargeting</code></td>
                <td>Toggle</td>
                <td>No</td>
                <td>Filter by user profile attributes</td>
              </tr>
            </tbody>
          </table>

          <h3>Required SharePoint List Schema</h3>

          <p>Create a SharePoint list with these columns:</p>

          <table>
            <thead>
              <tr>
                <th>Column</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Single line of text</td>
                <td>Yes</td>
                <td>Message title</td>
              </tr>
              <tr>
                <td>Body</td>
                <td>Multiple lines (Rich text)</td>
                <td>Yes</td>
                <td>Message content</td>
              </tr>
              <tr>
                <td>MessageType</td>
                <td>Choice</td>
                <td>Yes</td>
                <td>Info, Warning, Critical, Success</td>
              </tr>
              <tr>
                <td>StartDate</td>
                <td>Date and Time</td>
                <td>Yes</td>
                <td>When message becomes active</td>
              </tr>
              <tr>
                <td>EndDate</td>
                <td>Date and Time</td>
                <td>Yes</td>
                <td>When message expires</td>
              </tr>
              <tr>
                <td>Dismissable</td>
                <td>Yes/No</td>
                <td>No</td>
                <td>Can users dismiss this message</td>
              </tr>
              <tr>
                <td>Active</td>
                <td>Yes/No</td>
                <td>No</td>
                <td>Is message currently active</td>
              </tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>

          <ul>
            <li>✅ Four message types with distinct styling</li>
            <li>✅ Date-based activation (StartDate/EndDate)</li>
            <li>✅ Dismissable messages (stored in local storage)</li>
            <li>✅ Content targeting by department, location, role</li>
            <li>✅ Real-time configuration preview</li>
            <li>✅ Theme Manager integration</li>
            <li>✅ Responsive design</li>
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
                <td>CSS Custom Properties</td>
              </tr>
              <tr>
                <td>Dismissal Storage</td>
                <td>Property bags</td>
                <td>Local Storage</td>
              </tr>
              <tr>
                <td>Date Filtering</td>
                <td>CAML queries</td>
                <td>Client-side date comparison</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
