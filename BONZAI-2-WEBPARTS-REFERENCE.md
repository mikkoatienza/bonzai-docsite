# Bonzai 2 Web Parts Reference

> **Quick Reference:** All 22 Bonzai 2 web parts with descriptions and available configurations.
> 
> **Full Documentation:** https://document.bonzai-intranet.com/docs/web-parts

---

## Communication

### Important Messages
**Description:** Display announcements and alerts with targeting, dismissable options, and date-based activation.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title (default: "Important Messages") |
| `siteUrl` | Text | Site URL for cross-site queries |
| `listId` | List Picker | SharePoint list containing messages (Required) |
| `viewId` | View Picker | SharePoint view to filter messages |
| `enableContentTargeting` | Toggle | Filter by user profile attributes |
| `maxMessagesToShow` | Slider (1-10) | Max messages to display (default: 1) |
| `fixedHeight` | Slider (0-1000) | Fixed height in pixels. 0 = auto |

**Message Categories:** Info, Warning, Error, Success (color-coded)

---

### News Rollup
**Description:** Display news articles with multiple templates, category filtering, and content targeting.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title (default: "News") |
| `siteUrl` | Text | Source site URL |
| `listName` | Text | Source list name (default: "Site Pages") |
| `viewName` | Dropdown | Category filter (auto-discovered) |
| `displayTemplate` | Dropdown | List, Tile, or Card |
| `maxNewsToShow` | Slider (1-20) | Max articles to display |
| `fixedHeight` | Slider (0-1000) | Fixed height in pixels |
| `showCommentCount` | Toggle | Show comment count |
| `showPromotedItems` | Toggle | Highlight featured articles |
| `enableContentTargeting` | Toggle | Filter by user profile |
| `showMoreText` | Text | "View More" link text |
| `showMoreUrl` | Text | "View More" link URL |

**Display Templates:** List (compact rows), Tile (image grid), Card (rich cards)

---

### Events Rollup
**Description:** Display events with RSVP functionality, attendance tracking, and multiple display modes.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `listId` | List Picker | SharePoint list with events |
| `viewId` | View Picker | View to filter events |
| `displayTemplate` | Dropdown | List, Card, or Calendar |
| `maxEventsToShow` | Slider | Max events to display |
| `showPastEvents` | Toggle | Include past events |
| `enableRSVP` | Toggle | Enable RSVP functionality |
| `enableContentTargeting` | Toggle | Target by user profile |

---

### Feedback
**Description:** Quick feedback submission with star ratings and optional anonymous mode.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `listId` | List Picker | List to store feedback |
| `enableAnonymous` | Toggle | Allow anonymous submission |
| `enableStarRating` | Toggle | Show star rating selector |
| `maxStars` | Slider (1-5) | Max stars for rating |
| `successMessage` | Text | Message after submission |

---

## Documents

### Document Portal
**Description:** Full-featured document search with typeahead, filtering, and refinement panels.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `libraryId` | List Picker | Document library |
| `showRefiners` | Toggle | Show refinement panel |
| `enableTypeahead` | Toggle | Enable search suggestions |
| `resultsPerPage` | Slider | Results per page |
| `sortField` | Dropdown | Default sort column |
| `sortDirection` | Dropdown | Ascending or Descending |

---

### Documents Rollup
**Description:** Display documents from libraries with customizable templates and targeting.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `libraryId` | List Picker | Document library |
| `viewId` | View Picker | View filter |
| `displayTemplate` | Dropdown | List, Tile, or Table |
| `maxItemsToShow` | Slider | Max documents |
| `showFileIcon` | Toggle | Show file type icons |
| `enableContentTargeting` | Toggle | Target by user profile |

---

### Documents Table
**Description:** Sortable table view of documents with column configuration and pagination.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `libraryId` | List Picker | Document library |
| `viewId` | View Picker | View filter |
| `columns` | Multi-select | Columns to display |
| `itemsPerPage` | Slider | Rows per page |
| `enableSorting` | Toggle | Allow column sorting |
| `showFileIcon` | Toggle | Show file type icons |

---

### Favourite Documents
**Description:** User bookmarks for quick document access with star icon toggle.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title (default: "My Documents") |
| `maxItemsToShow` | Slider | Max documents to show |
| `displayTemplate` | Dropdown | List or Tile |
| `showFileIcon` | Toggle | Show file type icons |
| `emptyMessage` | Text | Message when no favorites |

---

## Search

### Advanced Search
**Description:** Unified search with refinement filters, typeahead, and multiple result templates.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `searchScope` | Dropdown | Current site, Hub, or All |
| `showRefiners` | Toggle | Show refinement panel |
| `enableTypeahead` | Toggle | Enable suggestions |
| `resultsPerPage` | Slider | Results per page |
| `resultTemplate` | Dropdown | List, Card, or Table |
| `showPagination` | Toggle | Show page navigation |

---

## Content

### Spotlight Rollup
**Description:** Feature employees or content with image-focused card layouts.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `listId` | List Picker | SharePoint list |
| `displayTemplate` | Dropdown | Card, Carousel, or Grid |
| `maxItemsToShow` | Slider | Max items |
| `showImage` | Toggle | Display images |
| `imageField` | Text | Image column name |

---

### Landing
**Description:** Responsive grid layouts with 1-6 items per row and overlay templates.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `itemsPerRow` | Slider (1-6) | Columns per row |
| `layoutStyle` | Dropdown | Card, Overlay, or Minimal |
| `aspectRatio` | Dropdown | 16:9, 4:3, 1:1, or Auto |
| `items` | Collection | Manual item configuration |
| `enableLinks` | Toggle | Make items clickable |

---

### Slider
**Description:** Featured content carousel with auto-play and transition animations.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `listId` | List Picker | SharePoint list |
| `autoPlay` | Toggle | Auto-advance slides |
| `autoPlayInterval` | Slider | Seconds between slides |
| `showNavigation` | Toggle | Show prev/next arrows |
| `showIndicators` | Toggle | Show dot indicators |
| `transitionEffect` | Dropdown | Fade, Slide, or None |

---

### Pages Rollup
**Description:** Display pages from SharePoint libraries with various view templates.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `pageTypes` | Multi-select | Article, News, Site Page |
| `displayTemplate` | Dropdown | List, Tile, or Card |
| `maxPagesToShow` | Slider | Max pages |
| `sortField` | Dropdown | Sort column |
| `sortDirection` | Dropdown | Ascending or Descending |
| `enableContentTargeting` | Toggle | Target by user profile |

---

### Tabbed
**Description:** Organize content into tabs or accordion panels with custom styling.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `tabStyle` | Dropdown | Tabs or Accordion |
| `tabPosition` | Dropdown | Top, Left, or Right |
| `tabs` | Collection | Tab definitions |
| `defaultTab` | Number | Initially open tab (0-based) |
| `iconPosition` | Dropdown | Before, After, or None |

---

## Navigation

### Advanced Links
**Description:** Display links with tiles, list, or text-only templates and targeting.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `listId` | List Picker | Links list |
| `displayTemplate` | Dropdown | Tiles, List, or Text |
| `itemsPerRow` | Slider | Columns per row (tiles) |
| `showIcons` | Toggle | Display icons |
| `openInNewTab` | Toggle | Open links in new tab |
| `enableContentTargeting` | Toggle | Target by user profile |

---

### Site Directory
**Description:** Browse and discover SharePoint sites with search and favorites.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `hubSiteFilter` | Dropdown | Filter by hub site |
| `displayTemplate` | Dropdown | List, Tile, or Card |
| `maxSitesToShow` | Slider | Max sites |
| `enableSearch` | Toggle | Show search box |
| `showFavorites` | Toggle | Allow site bookmarking |
| `sortField` | Dropdown | Sort column |

---

### Favourite Sites
**Description:** Quick access to bookmarked SharePoint sites.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title (default: "My Sites") |
| `maxSitesToShow` | Slider | Max sites |
| `displayTemplate` | Dropdown | List or Tile |
| `emptyMessage` | Text | Message when no favorites |

---

## People

### Employee Directory
**Description:** Employee search with A-Z filtering, profile photos, and contact info.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `enableSearch` | Toggle | Show search box |
| `enableAZFilter` | Toggle | Show A-Z letter filter |
| `displayTemplate` | Dropdown | List, Card, or Grid |
| `maxPeopleToShow` | Slider | Max people per page |
| `showProfilePhoto` | Toggle | Display photos |
| `showDepartment` | Toggle | Show department |
| `showJobTitle` | Toggle | Show job title |
| `showEmail` | Toggle | Show email |
| `showPhone` | Toggle | Show phone |

---

### People Listing
**Description:** Display people from organization directory with search.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `listId` | List Picker | People list |
| `displayTemplate` | Dropdown | List, Card, or Grid |
| `maxPeopleToShow` | Slider | Max people |
| `showImage` | Toggle | Display photos |
| `imageField` | Text | Photo column name |

---

### Locations
**Description:** Display office locations with contact details and directions.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Source site URL |
| `listId` | List Picker | Locations list |
| `displayTemplate` | Dropdown | List, Card, or Map |
| `showAddress` | Toggle | Display address |
| `showPhone` | Toggle | Display phone |
| `showDirections` | Toggle | Show directions link |
| `enableContentTargeting` | Toggle | Target by user profile |

---

## Utility

### Theme Manager
**Description:** On-page theming with real-time preview and dark mode support.

| Property | Type | Description |
|----------|------|-------------|
| `showThemePicker` | Toggle | Show theme selector UI |
| `enableDarkMode` | Toggle | Enable dark mode toggle |
| `customCSS` | Text (multiline) | Custom CSS overrides |
| `brandPrimaryColor` | Color picker | Primary brand color |
| `brandSecondaryColor` | Color picker | Secondary brand color |

---

## Lists

### Marketplace
**Description:** Display any SharePoint list as a searchable, filterable catalog with grid or list layouts.

| Property | Type | Description |
|----------|------|-------------|
| `title` | Text | Web part title |
| `siteUrl` | Text | Site URL for cross-site queries |
| `listName` | List Picker | SharePoint list to display (Required) |
| `layoutType` | Dropdown | Grid (tiles) or List (rows) |
| `itemsPerRow` | Dropdown | Columns per row for grid (2-5) |
| `itemsPerPage` | Slider (6-50) | Items per page |
| `enableSearch` | Toggle | Show search box |
| `enableSorting` | Toggle | Show sort dropdown |
| `enableCategoryFilter` | Toggle | Show category filter dropdowns |
| `showCreateButton` | Toggle | Show "Create New" button |
| `displayColumns` | Column Toggles | Which fields to display on cards |

**Key Features:** Dynamic schema discovery, auto-discovered category filters, pagination, cross-site support

---

## Extensions

### Mega Menu
**Type:** Application Customizer (site-wide navigation)

**Description:** 3-level hierarchical navigation with desktop mega menu panels and mobile drawer.

| Property | Type | Description |
|----------|------|-------------|
| `siteUrl` | Text | Source site for navigation list |
| `listName` | Text | Navigation items list name |
| `enableMobileDrawer` | Boolean | Enable mobile navigation |
| `maxDepth` | Number | Max navigation depth (1-3) |

**Required List Schema:**
- Title (Single line text) - Menu item label
- URL (URL) - Link destination
- Parent (Lookup to self) - Parent navigation item
- Order (Number) - Sort order
- OpenInNewTab (Yes/No) - Link behavior

---

## Common Properties

These properties are available on most web parts:

| Property | Description |
|----------|-------------|
| `title` | Display title above the web part |
| `siteUrl` | Source site for cross-site queries |
| `listId` / `listName` | SharePoint list selection |
| `viewId` | SharePoint view for filtering |
| `enableContentTargeting` | Filter by user profile attributes |
| `fixedHeight` | Fixed height in pixels (0 = auto) |
| `displayTemplate` | Layout/rendering template |

---

## Notes

- **Feature Parity:** Each web part provides 85-95% of Classic Bonzai functionality
- **Technology:** Built with SPFx, React, and Fluent UI
- **Theming:** All web parts integrate with Theme Manager
- **Responsive:** All web parts support mobile devices

---

*Generated: January 2025*  
*Full documentation: https://document.bonzai-intranet.com*

