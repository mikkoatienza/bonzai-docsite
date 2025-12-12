import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import Link from 'next/link';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';

export default function ThemingGuide() {
  return (
    <DocsPage>
      <DocsTitle>Theming Guide</DocsTitle>
      <DocsDescription>
        Customize the look and feel of your Bonzai 2 intranet.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          
          {/* QUICK START */}
          <QuickStart
            title="Set Up Theming in 3 Steps"
            time="5 minutes"
            steps={[
              {
                title: 'Add Theme Manager to your homepage',
                description: 'Edit your homepage, add the "Bonzai Theme Manager" web part to any section.',
              },
              {
                title: 'Configure brand colors',
                description: 'Use color pickers to set primary, secondary, background, and text colors.',
              },
              {
                title: 'Enable dark mode and publish',
                description: 'Toggle dark mode support if desired, then save and publish. Changes apply instantly!',
              },
            ]}
          />

          <h2>Overview</h2>
          
          <p>
            Bonzai 2 uses CSS Custom Properties (CSS Variables) for theming, enabling 
            instant color changes without waiting for CDN propagation. The Theme Manager 
            web part provides an intuitive interface for customization.
          </p>

          <Callout type="success" title="Major improvement over Classic">
            Unlike Classic Bonzai which required Brick access and 5-15 minute CDN 
            propagation, Modern Bonzai applies theme changes instantly on-page.
          </Callout>

          <h2>Theme Manager vs Brick</h2>

          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Classic (Brick)</th>
                <th>Modern (Theme Manager)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Access</td>
                <td>Separate AWS Cognito login</td>
                <td>On-page, SharePoint permissions</td>
              </tr>
              <tr>
                <td>Changes</td>
                <td>5-15 min CDN propagation</td>
                <td>Instant</td>
              </tr>
              <tr>
                <td>Preview</td>
                <td>Brick preview section</td>
                <td>Live on actual page</td>
              </tr>
              <tr>
                <td>Dark Mode</td>
                <td>Not supported</td>
                <td>Built-in toggle</td>
              </tr>
              <tr>
                <td>User Access</td>
                <td>Requires Brick credentials</td>
                <td>Any page editor</td>
              </tr>
            </tbody>
          </table>

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Complete Theming Setup"
            steps={[
              {
                title: 'Navigate to your homepage',
                description: 'Go to your intranet homepage. Theme Manager works best here as settings apply site-wide.',
              },
              {
                title: 'Edit the page',
                description: 'Click "Edit" in the top right to enter page edit mode.',
              },
              {
                title: 'Add the Theme Manager web part',
                description: 'Click the + button, search for "Theme Manager", and add it to a section (bottom of page works well).',
                tip: 'Enable "Show in Edit Mode Only" to hide it from regular users.',
              },
              {
                title: 'Set your primary color',
                description: 'Open the property pane and use the color picker to set your brand\'s primary color. This affects buttons, links, and accents.',
              },
              {
                title: 'Set secondary and accent colors',
                description: 'Choose complementary colors for secondary elements and highlights.',
              },
              {
                title: 'Configure background and text colors',
                description: 'Set the page background and text colors. Ensure there\'s sufficient contrast for accessibility.',
              },
              {
                title: 'Enable dark mode (recommended)',
                description: 'Toggle "Enable Dark Mode" to let users switch between light and dark themes.',
              },
              {
                title: 'Select a preset (optional)',
                description: 'Use preset themes as a starting point: Corporate Blue, Modern Purple, Warm Orange, Forest Green.',
              },
              {
                title: 'Test and publish',
                description: 'Preview changes on the page, then save and publish. Changes apply immediately site-wide.',
              },
            ]}
          />

          <h2>CSS Custom Properties</h2>

          <p>
            All Bonzai 2 web parts use these CSS variables for consistent theming:
          </p>

          <pre><code>{`:root {
  /* Primary brand color */
  --bonzai-primary: #0f766e;
  
  /* Secondary accent color */
  --bonzai-secondary: #14b8a6;
  
  /* Accent/highlight color */
  --bonzai-accent: #2dd4bf;
  
  /* Background colors */
  --bonzai-bg: #ffffff;
  --bonzai-bg-secondary: #f9fafb;
  
  /* Text colors */
  --bonzai-text: #1f2937;
  --bonzai-text-secondary: #6b7280;
  
  /* Border colors */
  --bonzai-border: #e5e7eb;
}

/* Dark mode overrides */
.dark {
  --bonzai-primary: #2dd4bf;
  --bonzai-secondary: #14b8a6;
  --bonzai-bg: #0f172a;
  --bonzai-bg-secondary: #1e293b;
  --bonzai-text: #f9fafb;
  --bonzai-text-secondary: #9ca3af;
  --bonzai-border: #374151;
}`}</code></pre>

          <h2>Dark Mode</h2>

          <p>
            Bonzai 2 includes built-in dark mode support. When enabled via Theme Manager:
          </p>

          <ul>
            <li>Users see a dark mode toggle on the page</li>
            <li>Preference is stored in browser local storage</li>
            <li>System preference is respected by default</li>
            <li>All Bonzai web parts automatically adapt</li>
          </ul>

          <Callout type="tip" title="Respect user preferences">
            Dark mode respects system settings (prefers-color-scheme). 
            Users on devices set to dark mode will see the dark theme by default.
          </Callout>

          <h2>Best Practices</h2>

          <Callout type="tip" title="Place Theme Manager on homepage only">
            You only need Theme Manager on one page. Settings apply to all Bonzai 
            web parts across the entire site.
          </Callout>

          <Callout type="tip" title="Start with preset themes">
            Use one of the built-in presets (Corporate Blue, Modern Purple, etc.) 
            as a starting point, then fine-tune individual colors.
          </Callout>

          <Callout type="warning" title="Test accessibility contrast">
            Ensure text colors have at least 4.5:1 contrast ratio with backgrounds 
            for WCAG 2.1 AA compliance. Test both light and dark modes.
          </Callout>

          <Callout type="pro" title="Hide from regular users">
            Enable "Show in Edit Mode Only" to hide the Theme Manager control 
            from regular users. Only editors will see it during page editing.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Theme changes not appearing on other pages',
                solution: 'Ensure the page with Theme Manager is published, not just saved as a draft.',
                details: 'Theme settings are saved on publish. Save and publish the page, then navigate to other pages to verify.',
              },
              {
                problem: 'Colors look different than expected',
                solution: 'Check that you\'re viewing the page without browser extensions that modify colors. Try incognito mode.',
                details: 'Some browser extensions (dark mode plugins, accessibility tools) can override CSS colors.',
              },
              {
                problem: 'Theme not applying after page refresh',
                solution: 'Hard refresh the browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac) to clear cached CSS.',
              },
              {
                problem: 'Dark mode toggle not visible to users',
                solution: 'Ensure "Enable Dark Mode" is toggled on in the Theme Manager property pane.',
              },
              {
                problem: 'Some elements not changing color',
                solution: 'Only Bonzai web parts respond to Theme Manager. Native SharePoint elements use SharePoint themes.',
                details: 'For SharePoint native elements, use the SharePoint site theme settings in Site Settings → Change the Look.',
              },
              {
                problem: 'Theme Manager visible to all users (not just editors)',
                solution: 'Enable "Show in Edit Mode Only" in the Theme Manager property pane.',
              },
              {
                problem: 'Dark mode preference not persisting',
                solution: 'Dark mode preference is stored in browser local storage. Clearing browser data resets it.',
                details: 'This is per-browser, per-device. Users need to set their preference on each device.',
              },
              {
                problem: 'CSS variables not recognized in custom code',
                solution: 'Ensure you\'re using the correct variable names (--bonzai-primary, etc.) and that the Theme Manager is on the page.',
              },
            ]}
          />

          <h2>Related Resources</h2>

          <ul>
            <li>
              <Link href="/docs/web-parts/theme-manager">Theme Manager Web Part</Link> — 
              Detailed configuration reference
            </li>
            <li>
              <Link href="/docs/recipes/home-page">Home Page Recipe</Link> — 
              Setting up Theme Manager on your homepage
            </li>
            <li>
              <Link href="/docs/migration/classic-vs-modern">Classic vs Modern</Link> — 
              Migration considerations for theming
            </li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
