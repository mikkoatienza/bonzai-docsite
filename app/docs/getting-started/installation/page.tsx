import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function InstallationGuide() {
  return (
    <DocsPage>
      <DocsTitle>Installation Guide</DocsTitle>
      <DocsDescription>
        Deploy Bonzai 2 to your SharePoint Online tenant.
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="not-prose mb-8 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Package Information</h4>
                <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li><strong>Package Name:</strong> Bonzai-2.0.sppkg</li>
                  <li><strong>Framework:</strong> SharePoint Framework (SPFx) 1.18.x</li>
                  <li><strong>Compatibility:</strong> SharePoint Online only</li>
                  <li><strong>Permissions:</strong> Site-level (no tenant-wide permissions required)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Prerequisites</h2>

          <h3>SharePoint Online Requirements</h3>

          <table>
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Platform</td>
                <td>SharePoint Online (Microsoft 365)</td>
              </tr>
              <tr>
                <td>License</td>
                <td>Microsoft 365 E3/E5, SharePoint Online Plan 1/2, or equivalent</td>
              </tr>
              <tr>
                <td>Site Type</td>
                <td>Communication Sites or Team Sites (Modern experience)</td>
              </tr>
              <tr>
                <td>CDN</td>
                <td>Office 365 CDN (automatically configured)</td>
              </tr>
            </tbody>
          </table>

          <h3>Administrator Permissions</h3>

          <p>You will need one of the following roles:</p>

          <ul>
            <li><strong>SharePoint Administrator:</strong> Full access to App Catalog and tenant settings</li>
            <li><strong>Global Administrator:</strong> Full access to all Microsoft 365 services</li>
            <li><strong>App Catalog Administrator:</strong> Access to upload and deploy apps</li>
          </ul>

          <h3>App Catalog Setup</h3>

          <p>Before installing Bonzai, ensure your tenant has an App Catalog:</p>

          <ol>
            <li>Go to SharePoint Admin Center: <code>https://[tenant]-admin.sharepoint.com</code></li>
            <li>Click <strong>More features</strong> → <strong>Apps</strong> → <strong>App Catalog</strong></li>
            <li>If prompted, create a new App Catalog</li>
          </ol>

          <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <h4 className="font-semibold text-gray-900 dark:text-white">Create App Catalog (if needed)</h4>
            <ol className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>1. In SharePoint Admin Center, go to <strong>More features</strong> → <strong>Apps</strong></li>
              <li>2. Click <strong>App Catalog</strong></li>
              <li>3. Select <strong>Create a new app catalog site</strong></li>
              <li>4. Fill in: Title, URL (<code>https://[tenant].sharepoint.com/sites/appcatalog</code>), Administrator</li>
              <li>5. Click <strong>OK</strong> and wait for creation (may take a few minutes)</li>
            </ol>
          </div>

          <h3>Pre-Installation Checklist</h3>

          <div className="not-prose my-6 space-y-2">
            {[
              'SharePoint Online tenant active',
              'App Catalog exists and accessible',
              'Administrator permissions confirmed',
              'Bonzai package file (.sppkg) downloaded from the Download page',
              'Bonzai app ready to add to target sites (Mega Menu activation)',
              'Modern browser available',
            ].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-bonzai-600 focus:ring-bonzai-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </label>
            ))}
          </div>

          <h2>Installation Steps</h2>

          <h3>Step 1: Download the Package</h3>
          <p>
            Download the Bonzai SPFx package file (<code>Bonzai-2.0.sppkg</code>) from our{' '}
            <a href="/docs/getting-started/download">Download page</a>.
          </p>

          <h3>Step 2: Access SharePoint Admin Center</h3>
          <ol>
            <li>Open your browser and navigate to: <code>https://[your-tenant]-admin.sharepoint.com</code></li>
            <li>Sign in with your administrator credentials</li>
          </ol>

          <h3>Step 3: Navigate to App Catalog</h3>
          <ol>
            <li>In the SharePoint Admin Center, click <strong>More features</strong> in the left navigation</li>
            <li>Under <strong>Apps</strong>, click <strong>Open</strong></li>
            <li>Click <strong>App Catalog</strong> to open the App Catalog site</li>
            <li>Click <strong>Apps for SharePoint</strong> in the left navigation</li>
          </ol>

          <h3>Step 4: Upload the Package</h3>
          <ol>
            <li>Click <strong>Upload</strong> in the toolbar (or drag and drop the file)</li>
            <li>Select the <code>Bonzai-2.0.sppkg</code> file from your computer</li>
            <li>Click <strong>Open</strong> to upload</li>
          </ol>

          <h3>Step 5: Trust and Deploy</h3>
          <ol>
            <li>A deployment dialog will appear showing the solution name and web parts included</li>
            <li>Review the permissions (Bonzai typically requests read access to site content)</li>
            <li><strong>Optional:</strong> Check &quot;Make this solution available to all sites in the organization&quot; for tenant-wide deployment</li>
            <li>Click <strong>Deploy</strong> to complete the installation</li>
            <li>The package status should change to &quot;Deployed&quot; (green checkmark)</li>
          </ol>

          <h3>Step 6: Add the Bonzai App to Your Site (Mega Menu Activation)</h3>
          <ol>
            <li>Open the modern site where you want to use Bonzai</li>
            <li>Go to <strong>Site Contents</strong> → <strong>New</strong> → <strong>App</strong></li>
            <li>Find <strong>Bonzai 2</strong> and click <strong>Add</strong></li>
            <li>This activates the Mega Menu on the site; you can fully configure it later</li>
          </ol>

          <h3>Step 7: Wait for CDN Propagation</h3>

          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Typical Wait Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First deployment</td>
                <td>2-5 minutes</td>
              </tr>
              <tr>
                <td>Package updates</td>
                <td>5-15 minutes</td>
              </tr>
            </tbody>
          </table>

          <h3>Step 8: Verify Installation</h3>
          <ol>
            <li>Navigate to any modern SharePoint site in your tenant</li>
            <li>Edit a page (click <strong>Edit</strong> button)</li>
            <li>Click the <strong>+</strong> button to add a web part</li>
            <li>Search for &quot;<strong>Bonzai</strong>&quot; in the web part picker</li>
            <li>You should see the Bonzai web parts listed (News Rollup, Events Rollup, etc.)</li>
          </ol>

          <div className="not-prose my-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">Success!</h4>
                <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                  If web parts appear when searching for &quot;Bonzai&quot;, the installation was successful.
                </p>
              </div>
            </div>
          </div>

          <h2>Verification Checklist</h2>

          <h3>Package Verification</h3>
          <ul>
            <li>Package appears in App Catalog with &quot;Deployed&quot; status</li>
            <li>Package version matches expected version</li>
            <li>No error messages in App Catalog</li>
          </ul>

          <h3>Web Part Verification</h3>
          <ul>
            <li>Bonzai app added to the site (Mega Menu activated)</li>
            <li>Web parts appear in web part picker when searching &quot;Bonzai&quot;</li>
            <li>At least one web part can be added to a page</li>
            <li>Web part property pane opens when clicking pencil icon</li>
          </ul>

          <h2>Troubleshooting</h2>

          <h3>Package Won&apos;t Upload</h3>

          <div className="not-prose my-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Solutions:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Check file size is reasonable (~54MB for current version)</li>
                  <li>Verify you have App Catalog admin rights</li>
                  <li>Re-download the package if corrupted</li>
                  <li>Try a different browser (Chrome/Edge recommended)</li>
                  <li>Clear browser cache and try again</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Web Parts Don&apos;t Appear in Picker</h3>

          <ul>
            <li><strong>Wait for CDN:</strong> Wait 5-15 minutes for CDN propagation</li>
            <li><strong>Hard refresh:</strong> Press Ctrl+Shift+R to force refresh</li>
            <li><strong>Check deployment:</strong> Verify package shows &quot;Deployed&quot; in App Catalog</li>
            <li><strong>Check site type:</strong> Ensure you&apos;re on a Modern page (not classic)</li>
            <li><strong>Clear cache:</strong> Clear all cached data for SharePoint</li>
          </ul>

          <h3>Web Part Shows Error</h3>

          <ul>
            <li>Open F12 Developer Tools → Console for error details</li>
            <li>Verify list/view selections are valid in property pane</li>
            <li>Ensure current user can access the configured list</li>
            <li>Try removing and re-adding the web part</li>
          </ul>

          <div className="not-prose my-6 rounded-lg border border-bonzai-200 bg-bonzai-50 p-4 dark:border-bonzai-800 dark:bg-bonzai-950">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Still need help?</strong>{' '}
              <a
                href="https://support.bonzai.aurea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bonzai-600 hover:text-bonzai-700 dark:text-bonzai-400 dark:hover:text-bonzai-300"
              >
                Contact Bonzai Support →
              </a>
            </p>
          </div>

          <h2>PowerShell Deployment (Alternative)</h2>

          <p>For scripted deployments, use PnP PowerShell:</p>

          <pre><code>{`# Install PnP PowerShell module (if not already installed)
Install-Module -Name PnP.PowerShell -Scope CurrentUser

# Connect to SharePoint Admin Center
Connect-PnPOnline -Url "https://[tenant]-admin.sharepoint.com" -Interactive

# Upload and deploy the solution
Add-PnPApp -Path "C:\\path\\to\\Bonzai-2.0.sppkg" -Scope Tenant -Publish -Overwrite

# Verify deployment
Get-PnPApp | Where-Object {$_.Title -like "*Bonzai*"}`}</code></pre>

          <h2>Next Steps</h2>

          <p>After installation:</p>
          <ul>
            <li><a href="/docs/web-parts">Web Parts Reference</a> - Explore all 21+ web parts</li>
            <li><a href="/docs/administration/theming">Theme Manager</a> - Customize colors and branding</li>
            <li><a href="/docs/getting-started/what-is-bonzai">What is Bonzai 2?</a> - Learn about the architecture</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}

