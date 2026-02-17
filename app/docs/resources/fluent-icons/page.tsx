import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Callout } from '../../../../components/docs/Callout';
import { FluentIconDirectory } from '../../../../components/docs/FluentIconDirectory';
import { getFluentMdl2IconNames } from '../../../../lib/fluentIcons';

export default function FluentIconsPage() {
  const iconNames = getFluentMdl2IconNames();

  return (
    <DocsPage>
      <DocsTitle>Fluent Icon Directory</DocsTitle>
      <DocsDescription>
        Search and copy Fluent UI (Fabric MDL2) icon names for Bonzai configuration (e.g., title icons).
      </DocsDescription>
      <DocsBody>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <Callout type="info" title="Use these names in Bonzai settings">
            These icon names are what Bonzai&apos;s Icon Picker expects (for example, <code>titleIconName</code> in many web
            parts, or header icon settings like <code>DocumentSearch</code>, <code>News</code>, <code>MapPin</code>).
          </Callout>

          <Callout type="tip" title="How to use">
            Click any tile to copy the icon name, then paste it into your property pane field (or record it for your
            configuration standards).
          </Callout>

          <FluentIconDirectory iconNames={iconNames} />
        </div>
      </DocsBody>
    </DocsPage>
  );
}

