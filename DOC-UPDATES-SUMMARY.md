# Doc Updates Summary

This file summarizes the recent documentation updates applied to the Bonzai docsite.

### Commits included

- **`52a4dcd`** — **docs: align title icon + view picker docs**
- **`e6974cb`** — **docs: clarify footer suppression on admin pages**

### Package published (hosted on docsite)

- **Release version:** `1.0.355`
- **App Catalog version (embedded in .sppkg):** `1.0.0.352`

---

## Summary of changes

### Package refresh (this release)

- Updated the Download page metadata to match the newly hosted package:
  - Release version `1.0.355`
  - App Catalog version `1.0.0.352`
- Continued aligning docs with recent upgrade work (News Rollup reliability + footer behavior on SharePoint shell/admin surfaces).

### Document Portal (web part)

- **Aligned docs with the current property pane behavior**, including:
  - **Site selection**: `siteSelectionMode`, `selectedSiteUrl`, `siteUrl`
  - **Managed property configuration (multi-select)**: `typeaheadFields`, `searchFilterFields`
  - **Column configuration (multi-select)**: `listViewColumns`, `gridViewColumns`
  - **Metadata and display controls**: `visibleMetadataFields`, `showMetadataChips`, `showViewToggle`, `showFiltersPanel`
  - **Feature and custom links**: `searchOnlyMode`, `showCustomDocumentLinks`, `customDocumentLinksLabel`, `customDocumentLinks`
  - **Standardized title icon selector**: `titleIconOption` + `titleIconName` (Icon Picker) + `titleIconUrl`

### Title icon selector (standardized across web parts)

Updated multiple web part docs to reflect the standardized header icon configuration pattern:

- **`titleIconOption`**: Dropdown (**Custom** / **None**)
- **`titleIconName`**: **Icon Picker** (not a plain text field)
- **`titleIconUrl`**: Optional custom icon URL override

Web part pages updated include (non-exhaustive): Advanced Search, Site Directory, Documents Rollup, Documents Table, People Listing, Locations, Favourite Sites, Favourite Documents, Pages Rollup, Spotlight Rollup, Feedback, Slider, News Rollup, Events Rollup, and Document Portal.

### View picker documentation updates

- **Advanced Links**: documented `viewId` (**View Picker**) under data source settings.
- **Events Rollup**: documented `viewId` (**View Picker**) in the property pane table.

### News Rollup cleanup

- Removed outdated **content targeting** references from:
  - step-by-step setup text
  - recipe/config examples
  - troubleshooting items
  - feature checklists and reference tables
- Added `titleIconOption` to the property table to match the standardized header icon selector.

### Footer (extension) clarification

- Added an explicit doc callout stating **Footer intentionally does not render** on:
  - **Site Contents**
  - **modern list/library admin surfaces** (including list settings / list editor views)

This matches the Footer runtime suppression logic in the extension implementation and prevents false “footer is broken” reports on administrative pages.

