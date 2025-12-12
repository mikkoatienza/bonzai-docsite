import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { QuickStart } from '../../../../components/docs/QuickStart';
import { WhenToUse } from '../../../../components/docs/WhenToUse';
import { StepGuide } from '../../../../components/docs/StepGuide';
import { RecipeCard, RecipeGrid } from '../../../../components/docs/RecipeCard';
import { Callout } from '../../../../components/docs/Callout';
import { Troubleshooting } from '../../../../components/docs/Troubleshooting';
import { Calendar, List, LayoutGrid, Users } from 'lucide-react';

export default function EventsRollupWebPart() {
  return (
    <DocsPage>
      <DocsTitle>Events Rollup</DocsTitle>
      <DocsDescription>
        Display events with RSVP functionality, attendance tracking, and multiple display modes.
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
            title="Get Events Rollup Working in 3 Steps"
            time="5 minutes"
            prerequisites={[
              'Bonzai 2 package installed on your site',
              'Events list created with required columns',
            ]}
            steps={[
              {
                title: 'Create the Events list',
                description: 'Create a SharePoint list with Title, EventDate, EndDate, Location, and Description columns.',
              },
              {
                title: 'Add Events Rollup to your page',
                description: 'Edit the page, click +, search for "Events Rollup", and add it.',
              },
              {
                title: 'Select your list and display mode',
                description: 'Open property pane, select your Events list, choose display mode, and publish.',
              },
            ]}
          />

          {/* WHEN TO USE */}
          <WhenToUse
            useCases={[
              'Display upcoming company events on the homepage',
              'Create a calendar of team meetings and workshops',
              'Show event listings with RSVP functionality',
              'Track event attendance',
              'Filter events by department or category',
            ]}
            bestFor={[
              'Homepage — upcoming events sidebar or section',
              'Events page — comprehensive event listing',
              'Department pages — team-specific events',
              'HR pages — company-wide events and holidays',
            ]}
            notFor={[
              'Simple announcements without dates — use Important Messages',
              'News articles with dates — use News Rollup',
              'External calendar integration — use SharePoint calendar web parts',
            ]}
            alternatives={[
              { name: 'News Rollup', when: 'news articles with publish dates' },
              { name: 'Important Messages', when: 'announcements without RSVP' },
            ]}
          />

          {/* STEP-BY-STEP CONFIGURATION */}
          <StepGuide
            title="Step-by-Step Configuration"
            steps={[
              {
                title: 'Create an Events list',
                description: 'Go to Site Contents → New → List. Name it "Events". Add the required columns (see schema below).',
              },
              {
                title: 'Add sample events',
                description: 'Create 3-5 test events with future dates, locations, and descriptions.',
              },
              {
                title: 'Add the web part to your page',
                description: 'Edit your page, click +, search for "Events Rollup", and add it to a section.',
              },
              {
                title: 'Select your Events list',
                description: 'Open the property pane and select "Events" from the list dropdown.',
              },
              {
                title: 'Choose a display mode',
                description: 'Select List for compact display, Tiles for image cards, or Calendar for calendar view.',
              },
              {
                title: 'Configure RSVP settings',
                description: 'Toggle "Show RSVP" to enable RSVP buttons on events.',
                tip: 'RSVP data is stored in a linked list. Ensure users have contribute permissions.',
              },
              {
                title: 'Set items to show',
                description: 'Configure how many events to display. Set date filtering to show future events only.',
              },
              {
                title: 'Publish and test',
                description: 'Save and publish. Test RSVP functionality and verify events display correctly.',
              },
            ]}
          />

          {/* COMMON CONFIGURATIONS (RECIPES) */}
          <h2>Common Configurations</h2>

          <RecipeGrid>
            <RecipeCard
              title="Homepage Events Widget"
              description="Compact upcoming events for the homepage"
              useCase="Homepage sidebar"
              icon={<Calendar className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Upcoming Events' },
                { property: 'Display Mode', value: 'List' },
                { property: 'Items to Show', value: '5' },
                { property: 'Show RSVP', value: 'No' },
                { property: 'Show Past Events', value: 'No' },
              ]}
            />
            <RecipeCard
              title="Full Events Page"
              description="Complete events listing with RSVP"
              useCase="Dedicated events page"
              icon={<LayoutGrid className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Company Events' },
                { property: 'Display Mode', value: 'Tiles' },
                { property: 'Items to Show', value: '12' },
                { property: 'Show RSVP', value: 'Yes' },
                { property: 'Show Pagination', value: 'Yes' },
              ]}
            />
            <RecipeCard
              title="Team Calendar"
              description="Calendar view for team meetings"
              useCase="Department pages"
              icon={<List className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Team Calendar' },
                { property: 'Display Mode', value: 'Calendar' },
                { property: 'Show RSVP', value: 'Yes' },
                { property: 'Filter', value: 'By Department' },
              ]}
            />
            <RecipeCard
              title="RSVP Events"
              description="Events focused on attendance tracking"
              useCase="Workshop/training pages"
              icon={<Users className="h-5 w-5" />}
              config={[
                { property: 'Title', value: 'Register for Events' },
                { property: 'Display Mode', value: 'Tiles' },
                { property: 'Show RSVP', value: 'Yes' },
                { property: 'Show Attendee Count', value: 'Yes' },
              ]}
            />
          </RecipeGrid>

          {/* BEST PRACTICES */}
          <h2>Best Practices</h2>

          <Callout type="tip" title="Use future date filtering">
            Configure the web part to hide past events automatically. This keeps 
            the event list current without manual maintenance.
          </Callout>

          <Callout type="tip" title="Include event images">
            Events with images display much better in Tiles mode. 
            Add an Image column to your Events list for visual appeal.
          </Callout>

          <Callout type="pro" title="Set up event categories">
            Add a Category column to your Events list. This enables filtering 
            by event type (Training, Social, Meeting, etc.).
          </Callout>

          <Callout type="warning" title="RSVP requires permissions">
            Users need Contribute permission on the Events list to RSVP. 
            Verify permissions before launching.
          </Callout>

          {/* TROUBLESHOOTING */}
          <Troubleshooting
            items={[
              {
                problem: 'Events not appearing',
                solution: 'Check that events have dates in the future. Verify the list is selected in the property pane.',
              },
              {
                problem: 'RSVP button not working',
                solution: 'Ensure users have Contribute permission on the Events list. Check browser console for errors.',
              },
              {
                problem: 'Past events still showing',
                solution: 'Enable "Hide Past Events" in the property pane to filter out expired events.',
              },
              {
                problem: 'Calendar view not displaying correctly',
                solution: 'Verify EventDate and EndDate columns exist and have correct date values.',
              },
            ]}
          />

          {/* REFERENCE SECTION */}
          <hr className="my-12" />
          <h2>Reference</h2>

          <h3>Events List Schema</h3>
          <table>
            <thead><tr><th>Column</th><th>Type</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>Title</td><td>Single line of text</td><td>Yes</td></tr>
              <tr><td>EventDate</td><td>Date and Time</td><td>Yes</td></tr>
              <tr><td>EndDate</td><td>Date and Time</td><td>Yes</td></tr>
              <tr><td>Location</td><td>Single line of text</td><td>No</td></tr>
              <tr><td>Description</td><td>Multiple lines</td><td>No</td></tr>
              <tr><td>Image</td><td>Image</td><td>No</td></tr>
              <tr><td>Category</td><td>Choice</td><td>No</td></tr>
            </tbody>
          </table>

          <h3>Property Pane Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>Text</td><td>Web part title</td></tr>
              <tr><td><code>listId</code></td><td>Dropdown</td><td>Events list</td></tr>
              <tr><td><code>displayMode</code></td><td>Dropdown</td><td>List, Tiles, Calendar</td></tr>
              <tr><td><code>itemsToShow</code></td><td>Number</td><td>Number of events</td></tr>
              <tr><td><code>showRSVP</code></td><td>Toggle</td><td>Enable RSVP button</td></tr>
              <tr><td><code>hidePastEvents</code></td><td>Toggle</td><td>Filter out past events</td></tr>
            </tbody>
          </table>

          <h3>Features Checklist</h3>
          <ul>
            <li>✅ Event listing with date/time</li>
            <li>✅ RSVP functionality</li>
            <li>✅ Attendance tracking</li>
            <li>✅ Multiple display modes</li>
            <li>✅ Date-based filtering</li>
            <li>✅ Content targeting</li>
            <li>⚠️ Calendar integration may differ from legacy</li>
          </ul>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
