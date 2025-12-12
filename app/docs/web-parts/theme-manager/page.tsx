import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Palette, Sun, Moon, Sparkles } from 'lucide-react';

export default function ThemeManagerWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Theme Manager</DocsTitle>
      <DocsDescription>
        On-page theming with real-time preview and dark mode support.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 flex items-center gap-4">
            <span className="rounded-full bg-bonzai-100 px-3 py-1 text-sm font-medium text-bonzai-700 dark:bg-bonzai-900/30 dark:text-bonzai-400">
              Utility
            </span>
            <span className="rounded-full bg-bonzai-500 px-3 py-1 text-sm font-medium text-white">
              NEW in Bonzai 2
            </span>
          </div>

          {/* QUICK START */}
          <QuickStart
            title="Get Theme Manager Working in 3 Steps"
            time="2 minutes"
            steps={[
              {
                title: 'Add Theme Manager to your homepage',
                description: 'Edit your homepage, add the Bonzai Theme Manager web part to any section.',
              },
              {
                title: 'Select colors using the pickers',
                description: 'Open the property pane and use color pickers to set primary, secondary, and background colors.',
              },
              {
                title: 'Publish — changes apply instantly',
                description: 'Save and publish. Theme changes apply immediately to all Bonzai web parts.',
              },
            ]}
          />

          <div className="not-prose my-8 rounded-xl border border-bonzai-200 bg-bonzai-50 p-6 dark:border-bonzai-800 dark:bg-bonzai-950">
            <h3 className="mt-0 flex items-center gap-2 text-lg font-semibold text-bonzai-900 dark:text-bonzai-100">
              <Sparkles className="h-5 w-5" />
              Key Benefit
            </h3>
            <p className="mb-0 text-bonzai-700 dark:text-bonzai-300">
              Unlike Classic Bonzai which required logging into Brick and waiting 5-15 
              minutes for CDN propagation, Theme Manager applies changes 
              <strong> instantly</strong> using CSS Custom Properties.
            </p>
          </div>

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Customize your intranet brand colors',
              'Enable dark mode for users',
              'Apply preset themes quickly',
              'Test color schemes before committing',
              'Allow site owners to manage branding without admin access',
            ]}
            bestFor={[
              'Homepage — centralized theme control',
              'Admin page — dedicated theming section',
              'Any page — theme applies site-wide',
            ]}
            notFor={[
              'Per-page theming — theme applies globally',
              'Complex CSS customization — use SharePoint themes',
            ]}
          />

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Navigate to your homepage',
                description: 'Theme Manager works best when placed on the homepage so theme settings apply site-wide.',
              },
              {
                title: 'Add the Theme Manager web part',
                description: 'Edit the page, click +, and add "Bonzai Theme Manager". Place it at the bottom of the page.',
                tip: 'Set "Show in Edit Mode Only" to hide it from regular users.',
              },
              {
                title: 'Open the property pane',
                description: 'Click the pencil icon to access color pickers and theme settings.',
              },
              {
                title: 'Set the primary color',
                description: 'Use the color picker to select your brand\'s primary color. This affects buttons, links, and accents.',
              },
              {
                title: 'Set the secondary color',
                description: 'Choose a complementary secondary color for highlights and secondary elements.',
              },
              {
                title: 'Configure background and text colors',
                description: 'Set background and text colors. Ensure sufficient contrast for accessibility.',
              },
              {
                title: 'Enable dark mode toggle',
                description: 'Toggle "Enable Dark Mode" to let users switch between light and dark themes.',
              },
              {
                title: 'Select a preset (optional)',
                description: 'Choose from preset themes for quick application: Corporate Blue, Modern Purple, Warm Orange, etc.',
              },
              {
                title: 'Publish',
                description: 'Save and publish. Theme changes apply instantly to all Bonzai web parts.',
              },
            ]}
          />

          {/* FEATURES GRID */}
          <h2>Features</h2>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Real-time Preview</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">See color changes instantly</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                  <Sun className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Color Pickers</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Primary, secondary, background, text</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                  <Moon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Dark Mode Toggle</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Built-in dark mode support</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bonzai-100 text-bonzai-700 dark:bg-bonzai-900 dark:text-bonzai-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Preset Themes</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Quick-apply theme presets</p>
                </div>
              </div>
            </div>
          </div>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Place on homepage only">
            You only need Theme Manager on one page (typically the homepage). 
            Theme settings apply to all Bonzai web parts across the site.
          </Callout>

          <Callout type="tip" title="Hide from regular users">
            Enable "Show in Edit Mode Only" to hide the Theme Manager from 
            regular users. Only editors will see it when editing.
          </Callout>

          <Callout type="pro" title="Test contrast for accessibility">
            Ensure your color choices meet WCAG accessibility guidelines. 
            Text should have a contrast ratio of at least 4.5:1 with the background.
          </Callout>

          <Callout type="warning" title="Theme affects all Bonzai web parts">
            Color changes apply to all Bonzai web parts site-wide. 
            Test on multiple pages before publishing.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Theme changes not appearing',
                solution: 'Clear browser cache and refresh. Ensure the page with Theme Manager is published.',
              },
              {
                problem: 'Dark mode toggle not visible',
                solution: 'Enable "Show Dark Mode Toggle" in the property pane.',
              },
              {
                problem: 'Colors look wrong on some pages',
                solution: 'Ensure at least one Bonzai web part is on each page to load theme CSS.',
              },
              {
                problem: 'Theme Manager visible to all users',
                solution: 'Enable "Show in Edit Mode Only" in the property pane.',
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
              <tr><td><code>primaryColor</code></td><td>Color Picker</td><td>Main brand/accent color</td></tr>
              <tr><td><code>secondaryColor</code></td><td>Color Picker</td><td>Secondary accent color</td></tr>
              <tr><td><code>backgroundColor</code></td><td>Color Picker</td><td>Page background color</td></tr>
              <tr><td><code>textColor</code></td><td>Color Picker</td><td>Primary text color</td></tr>
              <tr><td><code>enableDarkMode</code></td><td>Toggle</td><td>Show dark mode toggle</td></tr>
              <tr><td><code>preset</code></td><td>Dropdown</td><td>Apply a preset theme</td></tr>
              <tr><td><code>showInEditModeOnly</code></td><td>Toggle</td><td>Hide from regular users</td></tr>
            </tbody>
          </table>

          <h3>Preset Themes</h3>
          <ul>
            <li><strong>Default:</strong> Teal primary color (Bonzai brand)</li>
            <li><strong>Corporate Blue:</strong> Professional blue theme</li>
            <li><strong>Modern Purple:</strong> Contemporary purple accent</li>
            <li><strong>Warm Orange:</strong> Energetic orange theme</li>
            <li><strong>Forest Green:</strong> Natural green palette</li>
          </ul>

          <h3>Comparison with Classic Theming</h3>
          <table>
            <thead><tr><th>Aspect</th><th>Classic (Brick)</th><th>Modern (Theme Manager)</th></tr></thead>
            <tbody>
              <tr><td>Access</td><td>Separate AWS login required</td><td>On-page, no login needed</td></tr>
              <tr><td>Preview</td><td>Preview section in Brick</td><td>Real-time on actual page</td></tr>
              <tr><td>Apply Changes</td><td>Publish to CDN, wait 5-15 min</td><td>Instant</td></tr>
              <tr><td>Dark Mode</td><td>Not available</td><td>Built-in toggle</td></tr>
              <tr><td>Technology</td><td>CDN-hosted CSS files</td><td>CSS Custom Properties</td></tr>
            </tbody>
          </table>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
