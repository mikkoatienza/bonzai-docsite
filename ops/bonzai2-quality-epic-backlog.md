## Bonzai 2 Solution Quality Epic — Docsite Backlog (Internal)

**Purpose:** This is the running backlog of what needs to be updated or added to the docsite as we manually review each Bonzai 2 component (web parts + extensions/services).\n
**How to use:** For every component investigation, add an entry under **Backlog Entries** using the template below.\n
> Note: This file intentionally lives outside `app/` so it is not published as a customer-facing route.

---

### Component inventory (starting set from current site pages)

This list will be finalized after a full inventory of `development-workspace/bonzai-2/src/webparts` and `development-workspace/bonzai-2/src/extensions`.

- Navigation / Extensions: Mega Menu (Application Customizer), License integration, Theme system
- Search-driven: Advanced Search, Employee Directory, People Listing, Site Directory, Document Portal (if present)
- Content/Comms: News Rollup, Important Messages, Events Rollup, Feedback
- Personalization: Favourite Sites, Favourite Documents
- UI widgets: Slider, Marketplace
- Admin: Theme Manager
- Other: Pages Rollup, Documents Rollup, Documents Table, Landing, Spotlight Rollup, Tabbed

---

### Backlog entry template (copy/paste per component)

#### [ComponentName] — [Web Part / Extension / Service]

- Status: Not started | In progress | Shipped | Blocked
- Customer intent(s) supported:
  - [Intent 1]
  - [Intent 2]
- Current behavior summary:
  - [What it does today]
- Standards alignment (notes):
  - Architecture:
  - Reliability:
  - UX:
  - Performance:
  - Security/Permissions:
  - Accessibility:
  - Logging/Diagnostics:
- Flexibility gaps (multi-customer needs):
  - [Gap]
- Proposed improvements:
  - [Improvement]
- Changes implemented (if any):
  - [Change]
- Manual test matrix executed (results):
  - [Link/summary]
- Docsite updates required:
  - Update: `/docs/web-parts/[slug]` — [what to add/change]
  - Update: `/docs/recipes/[slug]` — [what to add/change]
  - Update: `/docs/getting-started/*` — [what to add/change]
- Release note (customer-facing, abstracted):
  - [1–3 bullets, no internal jargon]

---

### Backlog Entries

#### Advanced Search — Web Part

- Status: In progress
- Customer intent(s) supported:
  - A single “Search Center” page for multiple content types
  - Narrowed search experiences (documents-only, news-only, site-only)
  - Refinement filters to help users quickly find the right result
- Current behavior summary:
  - Runs SharePoint Search queries with client-side refinement aggregation; supports query scoping via `Path:"<scope>*"`, view switching, pagination.
- Standards alignment (notes):
  - Architecture: Service class exists (`AdvancedSearchService`), React class component patterns used.
  - Reliability: Has selectproperties fallback, but relied heavily on verbose logging; refinement accuracy depended on over-fetching limited rows.
  - UX: Good docsite coverage with recipes; error copy is generic (“Error loading results”) with retry patterns elsewhere.
  - Performance: Previously over-fetched for refiners; improved by preferring server-side refinement buckets where available.
  - Security/Permissions: Uses SPHttpClient; KQL sanitization present.
  - Accessibility: Needs explicit verification (keyboard/focus for refiners and view switcher).
  - Logging/Diagnostics: Switched verbose logs behind a debug toggle (query param / sessionStorage) to reduce production noise.
- Flexibility gaps (multi-customer needs):
  - Customers often want different “vertical” search pages; guidance exists, but runtime behavior should remain resilient across tenants with different search schemas.
  - Refiners depend on tenant search schema; need clear fallback behavior and docs guidance.
- Changes implemented (this iteration):
  - Prefer **server-side refinement results** when possible; fall back to client-side aggregation if tenant schema/config doesn’t support refiners.
  - Gate verbose logs behind `bonzaiDebug=true` (or `sessionStorage.bonzaiDebug=true`) in both component + service.
- Manual test matrix executed (results):
  - Pending: tenant manual validation across (1) no query (default `*`), (2) scoped path query, (3) multiple refiners, (4) large result sets, (5) mobile layout.
- Docsite updates required:
  - Update: `/docs/web-parts/advanced-search` — add “Debug mode” (how to enable) and clarify refinement behavior differences by tenant.
- Release note (customer-facing, abstracted):
  - Improved reliability and performance for Advanced Search filtering experiences.

### Manual test matrix template (reuse for every component)

For each component, execute and record results for the relevant items below.

#### Configuration permutations
- Data source variations (list/library/site), view/no-view
- Template variations (list/card/tile/table), if applicable
- Paging on/off, different page sizes
- Limits/thresholds (min/max values)
- Optional features toggled (search, filters, promoted items, etc.)

#### Data conditions
- Empty dataset
- Small dataset (1–10)
- Medium dataset (50–200)
- Large dataset (500+), where applicable
- Missing/renamed fields
- Non-standard list names (if SharePoint list name varies)

#### User/permission conditions
- Site owner/admin
- Member
- Visitor/Read-only
- External/guest (if supported)

#### Environment/UI conditions
- Desktop, tablet, mobile (responsive)
- Modern SharePoint page with different sections/columns
- Dark mode / theme changes (Theme Manager impact)

#### Failure modes
- API 400/401/403/404/500 handling
- Search service unavailable / tenant-specific quirks
- Timeout / partial results


