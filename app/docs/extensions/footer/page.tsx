import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { MessageSquare, Link2, Layout, Settings } from 'lucide-react';

export default function FooterExtension() {
  return (
    <DocsPage>
      <DocsTitle>Footer</DocsTitle>
      <DocsDescription>
        List-driven site footer with navigation columns, feedback form, and branding.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              Extension
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Application Customizer
            </span>
          </div>

          <Callout type="info" title="This is an Application Customizer">
            Footer runs site-wide in the bottom placeholder. You don&apos;t add it to individual pages —
            once activated, it appears on every page in your site collection.
          </Callout>

          <Callout type="warning" title="Two-step activation required">
            After uploading the Bonzai 2 package to your App Catalog, you must also add the Bonzai app
            to each site where you want to use Footer. Go to Site Contents → New → App → Bonzai 2.
          </Callout>

          <Callout type="info" title="Theme Manager integration">
            Footer colors and logo are controlled in Theme Manager → Footer Branding. Changes apply immediately.
          </Callout>

          <QuickStart
            title="Get Footer Working in 4 Steps"
            time="30-45 minutes"
            prerequisites={[
              'Bonzai 2 package (.sppkg) uploaded to your tenant App Catalog',
              'Site Collection Administrator permissions on your target site',
              'FooterNavigation list created (see schema below)',
            ]}
            steps={[
              {
                title: 'Create the FooterNavigation list',
                description: 'Create a SharePoint list named "FooterNavigation" with the required columns.',
              },
              {
                title: 'Add footer items',
                description: 'Create Link items in sections, plus one Feedback item and one Meta item.',
              },
              {
                title: 'Add the Bonzai app to your site',
                description: 'Go to Site Contents → New → App, then add the Bonzai 2 app.',
              },
              {
                title: 'Verify and brand',
                description: 'Refresh your site to confirm the footer appears, then set Footer Branding in Theme Manager.',
              },
            ]}
          />

          <WhenToUse
            useCases={[
              'Add global footer navigation across all pages',
              'Provide quick links to policies, help, and resources',
              'Capture feedback via a simple form in the footer',
              'Show company branding and copyright information',
            ]}
            bestFor={[
              'Intranet home sites',
              'Communication sites',
              'Sites with common navigation and support links',
            ]}
            notFor={[
              'Per-page navigation — use Advanced Links instead',
              'Complex forms — use a full feedback web part or form',
            ]}
            alternatives={[
              { name: 'Advanced Links', when: 'page-specific links and tiles' },
              { name: 'Mega Menu', when: 'primary header navigation' },
            ]}
          />

          <h2>Footer Layout</h2>
          <ul>
            <li><strong>Link Columns:</strong> Organized by Section with sortable links</li>
            <li><strong>Feedback Column:</strong> Optional textarea + button link</li>
            <li><strong>Meta Row:</strong> Optional copyright text</li>
          </ul>

          <h2>List Schema</h2>
          <p>Default list name: <code>FooterNavigation</code></p>
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
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td><td>Link text or meta label</td></tr>
              <tr><td>Section</td><td>Single line of text</td><td>No</td><td>Column heading for link groups</td></tr>
              <tr><td>SectionOrder</td><td>Number</td><td>No</td><td>Order of link columns</td></tr>
              <tr><td>LinkOrder</td><td>Number</td><td>No</td><td>Order within a section</td></tr>
              <tr><td>Url</td><td>Hyperlink</td><td>No</td><td>Link destination for Link items</td></tr>
              <tr><td>OpenInNewTab</td><td>Yes/No</td><td>No</td><td>Open link in a new tab</td></tr>
              <tr><td>ItemType</td><td>Choice</td><td>No</td><td>Link, Feedback, or Meta</td></tr>
              <tr><td>Description</td><td>Multiple lines</td><td>No</td><td>Feedback or meta text</td></tr>
              <tr><td>ButtonText</td><td>Single line of text</td><td>No</td><td>Feedback button label</td></tr>
              <tr><td>ButtonUrl</td><td>Hyperlink</td><td>No</td><td>Feedback button destination</td></tr>
            </tbody>
          </table>

          <h2>Item Types</h2>
          <ul>
            <li><strong>Link:</strong> Standard footer links grouped by Section</li>
            <li><strong>Feedback:</strong> Renders the feedback column (description + button)</li>
            <li><strong>Meta:</strong> Footer meta text (e.g., copyright)</li>
          </ul>

          <StepGuide
            title="Step-by-Step Setup"
            steps={[
              {
                title: 'Create the FooterNavigation list',
                description: 'Go to Site Contents → New → List. Name it "FooterNavigation".',
              },
              {
                title: 'Add sections and links',
                description: 'Create Link items with Section, SectionOrder, LinkOrder, Title, and Url.',
              },
              {
                title: 'Add feedback item (optional)',
                description: 'Add one item with ItemType = Feedback, plus Description, ButtonText, and ButtonUrl.',
              },
              {
                title: 'Add meta item (optional)',
                description: 'Add one item with ItemType = Meta to display copyright or support text.',
              },
              {
                title: 'Activate the Footer extension',
                description: 'Add the Bonzai 2 app to the site (Site Contents → New → App).',
              },
            ]}
          />

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use consistent ordering">
            Use increments of 10 for SectionOrder and LinkOrder so it is easy to insert new items later.
          </Callout>
          <Callout type="tip" title="Keep feedback simple">
            The feedback area is designed for short comments that route to a URL or form. For longer forms, link to a full page.
          </Callout>
          <Callout type="info" title="Footer is non-sticky">
            Footer renders inside the content scroll region and avoids sticky overlap by design.
          </Callout>

          <Troubleshooting
            items={[
              {
                problem: 'Footer not appearing',
                solution: 'Verify the Bonzai app is added to the site and the FooterNavigation list exists.',
                details: 'Extensions require both package deployment and site activation.',
              },
              {
                problem: 'Links appear but sections are missing',
                solution: 'Ensure Section values are set and SectionOrder is a number.',
              },
              {
                problem: 'Feedback button does nothing',
                solution: 'Set ButtonUrl on the Feedback item. The button is disabled if the URL is empty.',
              },
              {
                problem: 'Logo or colors not updating',
                solution: 'Update Footer Branding in Theme Manager and refresh the page.',
              },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Extension Properties</h3>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>footerListName</code></td>
                <td>Text</td>
                <td>FooterNavigation</td>
                <td>Name of the SharePoint list containing footer items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
