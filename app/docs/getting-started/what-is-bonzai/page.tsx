import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';

export default function WhatIsBonzai() {
  return (
    <DocsPage>
      <DocsTitle>What is Bonzai 2?</DocsTitle>
      <DocsDescription>
        Understanding the modern SharePoint intranet solution.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Overview</h2>
          
          <p>
            Bonzai 2 is a SharePoint Framework (SPFx) solution that provides a suite of 
            <strong> 21+ web parts</strong> for building modern intranet experiences on 
            SharePoint Online. It represents a complete architectural transformation from 
            the legacy Bonzai platform.
          </p>

          <div className="not-prose my-8 rounded-xl border border-bonzai-200 bg-bonzai-50 p-6 dark:border-bonzai-800 dark:bg-bonzai-950">
            <h3 className="mt-0 text-lg font-semibold text-bonzai-900 dark:text-bonzai-100">
              Key Differentiator
            </h3>
            <p className="mb-0 text-bonzai-700 dark:text-bonzai-300">
              Unlike the legacy Bonzai which required external AWS infrastructure (Brick administration, 
              Cognito authentication, DynamoDB storage, CloudFront CDN), Bonzai 2 runs 
              <strong> entirely within SharePoint Online</strong>.
            </p>
          </div>

          <h2>Architecture Comparison</h2>

          <h3>Classic Bonzai Architecture</h3>
          
          <pre className="not-prose"><code>{`┌─────────────────────────────────────────────────────────┐
│                    CLASSIC BONZAI                        │
├─────────────────────────────────────────────────────────┤
│  Browser  →  SharePoint Classic  →  Brick (AWS)         │
│                                     - Cognito Auth      │
│                                     - DynamoDB          │
│                                     - Lambda            │
│      ↓              ↓                    ↓              │
│  bonzai.min.js   Master Pages    CloudFront CDN         │
│  (from CDN)      Page Layouts    (S3 bucket)            │
│                                  - JS/CSS assets        │
│                                  - Theme files          │
└─────────────────────────────────────────────────────────┘`}</code></pre>

          <h3>Modern Bonzai 2 Architecture</h3>

          <pre className="not-prose"><code>{`┌─────────────────────────────────────────────────────────┐
│                    MODERN BONZAI 2                       │
├─────────────────────────────────────────────────────────┤
│  Browser  →  SharePoint Online (Everything Here!)       │
│                                                          │
│  ┌─────────────┐ ┌───────────────┐ ┌─────────────────┐  │
│  │ Modern Pages│ │  App Catalog  │ │ Office 365 CDN  │  │
│  │             │ │  (.sppkg)     │ │ (automatic)     │  │
│  └─────────────┘ └───────────────┘ └─────────────────┘  │
│                                                          │
│  Data: SPHttpClient REST API                            │
│  Config: Property Pane (native SharePoint)              │
│  Auth: SharePoint only (no external auth)               │
└─────────────────────────────────────────────────────────┘`}</code></pre>

          <h2>Technology Stack</h2>

          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Classic Bonzai</th>
                <th>Bonzai 2 (Modern)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UI Framework</td>
                <td>jQuery + Handlebars</td>
                <td>React 17 + Fluent UI</td>
              </tr>
              <tr>
                <td>Build System</td>
                <td>Gulp + custom scripts</td>
                <td>SPFx toolchain (Gulp + Webpack)</td>
              </tr>
              <tr>
                <td>Data Access</td>
                <td>JSOM (JavaScript Object Model)</td>
                <td>SPHttpClient REST API</td>
              </tr>
              <tr>
                <td>Query Language</td>
                <td>CAML</td>
                <td>OData REST queries</td>
              </tr>
              <tr>
                <td>Styling</td>
                <td>CSS from CDN</td>
                <td>SCSS Modules + CSS Custom Properties</td>
              </tr>
              <tr>
                <td>Configuration</td>
                <td>Property Bags + Brick settings</td>
                <td>Property Pane controls</td>
              </tr>
              <tr>
                <td>Deployment</td>
                <td>CDN upload via Brick</td>
                <td>App Catalog .sppkg upload</td>
              </tr>
              <tr>
                <td>Hosting</td>
                <td>AWS CloudFront CDN</td>
                <td>Office 365 CDN (automatic)</td>
              </tr>
            </tbody>
          </table>

          <h2>Key Benefits</h2>

          <h3>1. No External Infrastructure</h3>
          <p>
            All code runs within SharePoint. No AWS accounts, no Cognito credentials, 
            no CDN configuration. This dramatically simplifies deployment and reduces 
            operational overhead.
          </p>

          <h3>2. Instant Theming</h3>
          <p>
            Theme changes apply immediately via CSS Custom Properties. No more waiting 
            5-15 minutes for CDN propagation. The Theme Manager web part provides 
            on-page customization with real-time preview.
          </p>

          <h3>3. Native SharePoint Integration</h3>
          <p>
            Uses SPFx framework, Fluent UI components, and REST APIs. Configuration 
            through native property panes with dropdown pickers for lists and views.
          </p>

          <h3>4. Mobile-First Responsive Design</h3>
          <p>
            All web parts are responsive by default. No separate mobile templates needed.
          </p>

          <h3>5. Dark Mode Support</h3>
          <p>
            Built-in dark mode toggle with consistent theming across all web parts.
          </p>

          <h2>Target Audience</h2>

          <ul>
            <li><strong>IT Administrators:</strong> Deploy and manage the solution</li>
            <li><strong>Content Editors:</strong> Create and configure pages</li>
            <li><strong>Site Owners:</strong> Customize web parts and theming</li>
            <li><strong>End Users:</strong> Access the modern intranet experience</li>
          </ul>

          <h2>Requirements</h2>

          <ul>
            <li>SharePoint Online (Microsoft 365)</li>
            <li>Microsoft 365 E3/E5, SharePoint Online Plan 1/2, or equivalent</li>
            <li>SharePoint Administrator permissions (for deployment)</li>
            <li>Modern browser (Edge, Chrome, Firefox, Safari)</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

