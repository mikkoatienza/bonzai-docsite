import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Step } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function NewsCommunicationRecipe() {
  return (
    <DocsPage>
      <DocsTitle>News & Communication Recipe</DocsTitle>
      <DocsDescription>
        Build a news and announcements page with important messages and news rollup.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Communication
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              2 Web Parts
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              30-45 min (first time)
            </span>
          </div>

          <h2>Overview</h2>
          <p>
            This recipe creates a central news and communication hub with targeted 
            announcements at the top and a comprehensive news feed below.
          </p>

          <h2>Page Layout</h2>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
            <div className="space-y-3">
              <div className="rounded bg-red-100 p-3 text-center text-sm font-medium text-red-800 dark:bg-red-900/50 dark:text-red-300">
                Section 1: Full Width — Important Messages
              </div>
              <div className="rounded bg-blue-100 p-3 text-center text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                Section 2: Full Width — News Rollup
              </div>
            </div>
          </div>

          <h2>Step-by-Step Setup</h2>

          <Step number={1} title="Create the News & Communication Page">
            <ol>
              <li>Go to <strong>Site Contents → Site Pages → + New → Page</strong></li>
              <li>Name the page <strong>"News & Communication"</strong></li>
              <li>Add to site navigation</li>
            </ol>
          </Step>

          <Step number={2} title="Add Section 1: Important Messages" tip="Place at the top for maximum visibility">
            <p>Add a full-width section for announcements.</p>
            <p><strong>Add web part:</strong> Bonzai Important Messages</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Important Announcements</td></tr>
                <tr><td>List Name</td><td>Important Messages</td></tr>
                <tr><td>Max Items</td><td>10</td></tr>
                <tr><td>Enable Content Targeting</td><td>Yes</td></tr>
                <tr><td>Show Dismiss</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>Info</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
                <tr><td>Fixed Height</td><td>300</td></tr>
              </tbody>
            </table>
          </Step>

          <Step number={3} title="Add Section 2: News Rollup">
            <p>Add another full-width section for the news feed.</p>
            <p><strong>Add web part:</strong> Bonzai News Rollup</p>
            <table>
              <thead><tr><th>Property</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Title</td><td>Company News</td></tr>
                <tr><td>List Name</td><td>Site Pages</td></tr>
                <tr><td>Showcase Value</td><td>News Rollup</td></tr>
                <tr><td>Template</td><td>List</td></tr>
                <tr><td>Items Per Page</td><td>10</td></tr>
                <tr><td>Show Pagination</td><td>Yes</td></tr>
                <tr><td>Title Icon</td><td>News</td></tr>
                <tr><td>Chrome Type</td><td>Title and Border</td></tr>
              </tbody>
            </table>
            <Callout type="info" title="Category column required">
              News Rollup queries the <strong>Category</strong> field on Site Pages even when you 
              are not filtering. Add a <strong>Category</strong> column (text or choice) to avoid 
              load errors.
            </Callout>
          </Step>

          <Step number={4} title="Add to Navigation and Publish">
            <ol>
              <li>Save and publish the page</li>
              <li>Add to site navigation</li>
              <li>Test important messages appear correctly</li>
              <li>Verify news articles display with correct styling</li>
            </ol>
          </Step>

          <Callout type="pro" title="Use Content Targeting for relevance">
            Enable Content Targeting on both web parts to show different announcements 
            and news to different departments or locations. This keeps content relevant 
            and reduces noise for users.
          </Callout>

          <h2>Required SharePoint Lists</h2>

          <table>
            <thead>
              <tr><th>List Name</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Important Messages</td><td>Alert messages with type, dates, dismissal</td></tr>
              <tr><td>Site Pages</td><td>News articles (built-in library)</td></tr>
            </tbody>
          </table>
          <p>
            <strong>Site Pages requirements:</strong> Add a <strong>Category</strong> column (text or choice) 
            and set <strong>Showcase</strong> to <strong>News Rollup</strong> for each news page you want displayed.
          </p>

          <h2>Important Messages List Schema</h2>

          <table>
            <thead>
              <tr><th>Column</th><th>Type</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Message headline</td></tr>
              <tr><td>Body</td><td>Multiple lines (Rich text)</td><td>Full message content</td></tr>
              <tr><td>MessageType</td><td>Choice</td><td>Info, Warning, Critical, Success</td></tr>
              <tr><td>StartDate</td><td>Date and Time</td><td>When to start showing</td></tr>
              <tr><td>EndDate</td><td>Date and Time</td><td>When to stop showing</td></tr>
              <tr><td>Dismissable</td><td>Yes/No</td><td>Can users hide it</td></tr>
            </tbody>
          </table>

          <Troubleshooting
            items={[
              {
                problem: 'Important Messages not appearing',
                solution: 'Check that messages have StartDate before today and EndDate after today. Verify Active flag is Yes.',
              },
              {
                problem: 'News articles not showing',
                solution: 'Ensure news pages have Showcase column set to "News Rollup", the Category column exists, and pages are published (not drafts).',
              },
              {
                problem: 'Content targeting not working',
                solution: 'Verify user profiles have department/location attributes populated in Azure AD.',
              },
            ]}
          />

          <h2>Final Checklist</h2>

          <ul>
            <li>☐ Important Messages showing active announcements</li>
            <li>☐ Message types displaying with correct colors</li>
            <li>☐ Dismissal working for dismissable messages</li>
            <li>☐ News Rollup displaying news articles</li>
            <li>☐ Pagination working for long news lists</li>
            <li>☐ Page added to site navigation</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}




