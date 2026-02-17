import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { LayoutList, Palette, ChevronDown, Settings } from 'lucide-react';

export default function TabbedWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Tabbed</DocsTitle>
      <DocsDescription>
        Organize content in accordion, tabs, or tiles layouts with configurable pagination and rich text content.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              Layout
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feature Parity: 95%
            </span>
          </div>

          <QuickStart
            title="Get Tabbed Working in 3 Steps"
            time="15-30 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
            ]}
            steps={[
              { title: 'Add the web part', description: 'Edit your page and add "Bonzai Tabbed" from the Bonzai category.' },
              { title: 'Choose layout mode', description: 'Select a Display Mode: Accordion, Tabs, or Tiles.' },
              { title: 'Configure tabs and items', description: 'Use "Manage Tabs" to create tabs, then "Manage Items" to add links/content to each tab.' },
            ]}
          />

          <WhenToUse
            useCases={[
              'Organize FAQs in an accordion',
              'Create tabbed content sections',
              'Display categorized links and apps',
              'Save vertical space with collapsible content',
            ]}
            bestFor={[
              'FAQ pages — expandable Q&A',
              'Department pages — categorized info',
              'App launchers — grouped links',
              'Resource pages — organized content',
            ]}
            notFor={[
              'Long-form content — use regular page sections',
              'Navigation menu — use Advanced Links',
            ]}
            alternatives={[
              { name: 'Advanced Links', when: 'simple link navigation' },
              { name: 'Landing', when: 'tile-based navigation' },
            ]}
          />

          <h2>Layout Modes</h2>
          <ul>
            <li><strong>Accordion:</strong> Collapsible sections with expand/collapse icons (FAQ-style)</li>
            <li><strong>Tabs:</strong> Horizontal tab navigation with content panels</li>
            <li><strong>Tiles:</strong> Visual card grid of tab groups</li>
          </ul>

          <h2>Accordion Display Modes</h2>
          <p>When using accordion mode, you can choose:</p>
          <ul>
            <li><strong>Single:</strong> Only one panel can be open at a time</li>
            <li><strong>Multiple:</strong> Multiple panels can be open simultaneously</li>
          </ul>

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>
          <p>Copy these ready-to-use configurations:</p>

          <RecipeGrid>
            <RecipeCard
              title="FAQ Accordion"
              description="Collapsible Q&A sections"
              useCase="FAQ page"
              icon={<ChevronDown className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'FAQs' },
                { property: 'displayMode', value: 'Accordion' },
                { property: 'accordionDisplayMode', value: 'Single' },
                { property: 'collapsePanelsByDefault', value: 'On' },
              ]}
            />
            <RecipeCard
              title="App Launcher"
              description="Tabbed app categories"
              useCase="Homepage"
              icon={<LayoutList className="h-5 w-5" />}
              config={[
                { property: 'title', value: 'My Apps & Documents' },
                { property: 'displayMode', value: 'Tabs' },
                { property: 'tilesPerPage', value: 'Show All' },
                { property: 'showPanelTitle', value: 'On' },
              ]}
            />
            <RecipeCard
              title="Styled Accordion"
              description="Custom colors for branding"
              useCase="Department page"
              icon={<Palette className="h-5 w-5" />}
              config={[
                { property: 'displayMode', value: 'Accordion' },
                { property: 'accordionTextColour', value: '#333333' },
                { property: 'accordionBackgroundColour', value: '#f5f5f5' },
                { property: 'accordionBorderColour', value: '#70a7af' },
              ]}
            />
            <RecipeCard
              title="Expanded by Default"
              description="All panels open initially"
              useCase="Reference page"
              icon={<Settings className="h-5 w-5" />}
              config={[
                { property: 'displayMode', value: 'Accordion' },
                { property: 'accordionDisplayMode', value: 'Multiple' },
                { property: 'collapsePanelsByDefault', value: 'Off' },
              ]}
            />
          </RecipeGrid>

          <h2>Best Practices</h2>
          <Callout type="tip" title="Use accordion for mobile-first">
            Accordion layout works better on mobile devices than horizontal tabs.
          </Callout>
          <Callout type="tip" title="Add tabs before items">
            Create tabs first using &quot;Manage Tabs&quot;, then add items to each tab using &quot;Manage Items&quot;.
          </Callout>

          <Troubleshooting
            items={[
              { problem: 'Tabs not switching', solution: 'Check JavaScript is enabled. Try refreshing the page.' },
              { problem: 'Items not appearing in tabs', solution: 'Make sure items are assigned to the correct tab using the "Parent Tab" dropdown.' },
              { problem: 'Colors not applying', solution: 'Use the color picker in the Styling section. Colors may be overridden by theme.' },
            ]}
          />

          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Property Pane Configuration</h3>

          <h4>Basic Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title (default: My Apps &amp; Documents)</td></tr>
              <tr><td><code>titleIconOption</code></td><td>Dropdown</td><td>Title icon mode: Custom or None</td></tr>
              <tr><td><code>titleIconName</code></td><td>Icon Picker</td><td>Fluent UI icon picker (default: Sections)</td></tr>
              <tr><td><code>displayMode</code></td><td>Dropdown</td><td>Accordion, Tabs, or Tiles</td></tr>
              <tr><td><code>showPanelTitle</code></td><td>Toggle</td><td>Show panel titles (default: On)</td></tr>
              <tr><td><code>accordionDisplayMode</code></td><td>Dropdown</td><td>Single (one open) or Multiple (many open)</td></tr>
              <tr><td><code>collapsePanelsByDefault</code></td><td>Toggle</td><td>Start with panels collapsed (default: Off)</td></tr>
              <tr><td><code>tilesPerRow</code></td><td>Dropdown</td><td>Tiles columns (Auto, 2-6)</td></tr>
              <tr><td><code>tilesPerPage</code></td><td>Dropdown</td><td>Pagination for Tiles and Accordion (also labeled “Tabs per page” in Accordion mode)</td></tr>
              <tr><td><code>itemsPerRow</code></td><td>Dropdown</td><td>Content layout: List or 2-6 columns</td></tr>
              <tr><td><code>itemsPerPage</code></td><td>Dropdown</td><td>Items pagination within tabs</td></tr>
            </tbody>
          </table>

          <h4>Styling Settings</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>accordionTextColour</code></td><td>Color Picker</td><td>Text color for accordion headers</td></tr>
              <tr><td><code>accordionBackgroundColour</code></td><td>Color Picker</td><td>Background color for accordion headers</td></tr>
              <tr><td><code>accordionBorderColour</code></td><td>Color Picker</td><td>Border color for accordion panels</td></tr>
            </tbody>
          </table>

          <h4>Tab Configuration</h4>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>tabsCollection</code></td><td>Collection Data</td><td>Define tabs with title and icon</td></tr>
              <tr><td><code>tabItemsCollection</code></td><td>Collection Data</td><td>Define items with parent tab, title, URL, icon, and open in new tab option</td></tr>
            </tbody>
          </table>

          <h3>Tab Collection Fields</h3>
          <table>
            <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Tab title (required)</td></tr>
              <tr><td><code>icon</code></td><td>Dropdown</td><td>Fluent UI icon for the tab</td></tr>
              <tr><td><code>contentType</code></td><td>Dropdown</td><td>Items/Links or Rich Text Article</td></tr>
              <tr><td><code>richTextContent</code></td><td>Rich Text</td><td>HTML content when contentType is Rich Text</td></tr>
            </tbody>
          </table>

          <h3>Tab Item Collection Fields</h3>
          <table>
            <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>tabId</code></td><td>Dropdown</td><td>Parent tab to assign this item to (required)</td></tr>
              <tr><td><code>title</code></td><td>Text</td><td>Item title (required)</td></tr>
              <tr><td><code>url</code></td><td>Text</td><td>Link URL</td></tr>
              <tr><td><code>icon</code></td><td>Dropdown</td><td>Fluent UI icon for the item</td></tr>
              <tr><td><code>openInNewTab</code></td><td>Boolean</td><td>Open link in new tab</td></tr>
              <tr><td><code>description</code></td><td>Rich Text</td><td>Item description (HTML)</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Accordion, Tabs, and Tiles layout modes</li>
            <li>✅ Single or Multiple panel display</li>
            <li>✅ Customizable colors (text, background, border)</li>
            <li>✅ Collapsible panels</li>
            <li>✅ Icon support for tabs and items</li>
            <li>✅ Open in new tab option</li>
            <li>✅ Collection-based configuration</li>
            <li>✅ Rich text content tabs</li>
            <li>✅ Theme-aware styling</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
