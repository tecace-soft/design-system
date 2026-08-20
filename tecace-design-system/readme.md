# TecAce Design System

A comprehensive product design system extracted from **"TECACE DESIGN SYSTEM_JULY.fig"**. It is a Korean-first, mobile-and-web UI foundation — a large token-driven system (blue primary, Pretendard type) covering the TecAce product family.

> **Source of truth:** the attached Figma file (mounted read-only). It defines the token collections, the component families, and the type scale. Where this system resembles a well-known public kit, the *file's* values win — they were transcribed verbatim, never rounded to a grid.

## Products represented
The file names one brand with several sub-products (rendered as `TecAce` + descriptor):
**TecAce Space · TecAce Gigs · TecAce LaaS · TecAce OneID · TecAce Agent · TecAce 채용 솔루션** (recruitment solution). The recurring domain is hiring / careers / community.

## Sources
- **Figma:** `TECACE DESIGN SYSTEM_JULY.fig` — pages include `Color · Atomic`, `Color · Semantic`, `Typography`, `Icon`, `Logo`, `1-Theme / 2-Element / 3-Component` (the organized library, 8 categories), `Grid`, `Guidelines`.
- **Fonts (user-supplied):** Pretendard (Thin/ExtraLight/Medium/Bold) + Poppins (Thin→Bold) in `assets/fonts/`.

---

## CONTENT FUNDAMENTALS
- **Language:** Korean-first (한국어). English appears for product names, numbers, and technical terms.
- **Tone:** warm, direct, benefit-led. Polite declarative endings (`–합니다`, `–해요`). Speaks *to* the user.
- **Casing:** sentence-case English; never ALL-CAPS for emphasis. Product names keep the `TecAce` capitalization.
- **Emoji:** not used in product UI.
- **Examples:** "지원자에게 더 나은 경험을 제공합니다.", "채용을 다시 설계하다", button labels like "지원하기 / 저장 / 취소".

## VISUAL FOUNDATIONS
- **Color:** a single strong brand blue — `--primary-normal = rgb(17,109,255)` (#116DFF) — over a near-white, cool-grey neutral field. Semantic set: positive `#0ABE5C`, negative `#E83034`, cautionary `#E18A0F`. A saturated accent palette (violet/purple/pink/red-orange/lime/cyan) is reserved for data & illustration. **Full light + dark themes** plus mobile/desktop and viewport (S/M/L/XL) modes are defined as scoped token sets.
- **Text color:** emphasis by opacity on cool-neutral — `label/strong` (#000) → `normal` → `neutral` (.88) → `alternative` (.61) → `disable` (.16).
- **Type:** Pretendard for all UI/body; Poppins for display & numerics. A 19-step scale (Display 1 56px → Caption 2 11px) with tight negative tracking on large sizes, loosening to positive tracking at caption sizes. See `tokens/typography.css` (`.ta-*` classes).
- **Radius:** 5 (small icon) · 8 (sm btn) · 10 (md btn) · 12 (lg btn, field) · 16 (card) · 20 (dialog) · full (chip, switch). Values are exact, not grid-snapped.
- **Spacing:** 4-based rhythm (4 8 12 16 20 24 32 48 64).
- **Borders & shadows:** hairlines and outlines are translucent cool-grey — `inset 0 0 0 1px rgba(112,115,124,0.16/0.22)`. Elevation is soft and low: `0 1px 2px rgba(0,0,0,0.03)` up to ambient `rgba(23,23,25,0.06–0.16)`. No hard drop shadows.
- **Fills:** interactive/quiet surfaces use `--fill-*` translucent greys (0.05 / 0.08 / 0.16). Assistive buttons use a translucent fill + `backdrop-filter: blur(64px)`.
- **Surfaces / cards:** radius 16, either 1px inset border (outlined) or soft ambient shadow (elevated); white/elevated background.
- **Hover / press:** subtle — brightness/opacity shift on interaction overlays (the source uses `Interaction/Normal·Strong·Light` overlay layers); primary buttons darken toward `--primary-strong`. No bounce; transitions are short fades (.15s ease).
- **Imagery:** cool, clean, product-forward; avatars are circular (person) or rounded-square (company).

## ICONOGRAPHY
- The Figma **Icon** page defines a line-style glyph set (~125 icons: navigation, arrows, chevrons, logos, actions) drawn on a 24px grid, single-color, painted via `currentColor`.
- The glyphs are stored as boolean-masked vectors that did **not** extract cleanly as reusable SVG paths, so this build does **not** ship the full icon set as assets. Components accept icons as `ReactNode` slots (`leadingIcon`, `trailingIcon`, `icon`), and the demos/UI kit use small inline SVGs matching the 24px, ~2px-stroke line style.
  - **To complete the set:** export the Icon page from Figma as SVG (or connect the icon font) and drop it in `assets/icons/`. Flagged for the user below.
- No emoji; no unicode-glyph icons.

---

## Components (built)
Reusable primitives live in `components/<group>/` as `<Name>.jsx` + `.d.ts` + `.prompt.md`, bundled under `window.TecAceDesignSystem_64e6de`.

- **action/** — `Button`, `IconButton`, `Chip`, `FloatingActionButton`, `TextButton`
- **selection/** — `Switch`, `Checkbox`, `Radio`, `TextField`, `Select`, `SearchField`, `Stepper`, `Slider`
- **display/** — `Avatar` (+ `AvatarGroup`), `Badge`, `ContentBadge`, `Card`, `Divider`, `ListRow`, `SectionHeader`, `Accordion`, `Tag`
- **feedback/** — `Alert`, `Toast`, `Tooltip`, `Spinner`, `ProgressBar`, `Skeleton`, `Banner`, `EmptyState`
- **navigation/** — `Tab`, `BottomNavigation`, `Category`, `SegmentedControl`, `Pagination`, `Menu`, `Breadcrumb`
- **overlay/** — `Modal`, `BottomSheet`

### Coverage & intentional scope
The Figma kit enumerates **~885 component families**, but the overwhelming majority are **not distinct public components** — they are internal `.../Resource/...` sub-parts (e.g. `Button/Icon Button/Normal`, `Card/Resource/List/Trailing Content/*`), **per-platform duplicates** (the same control authored separately for iOS / Android / Web), **icon glyphs** (~125 `Name=…` symbols), `Decorate/Interaction/Opacity` helper overlays, `_Ratio`/`_Dummy`/`_Mask` scaffolding, and deprecated variants. Collapsing those, the kit's true public surface is on the order of ~30–40 families.

This build implements **46 public UI families** (including the extracted `Logo`, plus `ChipFilter`, `ChipMultiSelect`, `ToggleIcon`, `AutoComplete`, `DatePicker`), each a lean, prop-driven, token-referencing component with exact geometry transcribed from the source (no grid-snapping). **Intentionally skipped** (and why): the ~125 icon glyphs (extraction produced no clean SVG — ship the exported set instead, see ICONOGRAPHY); all `Resource/*` sub-parts (composed inside their parent component, not exposed); per-platform duplicate sets (one responsive component covers all three); and `Decorate/Interaction/Opacity/Dimmer/Ratio/Mask` helpers (handled with CSS `:hover`/overlays rather than as components). Remaining candidates are exhausted — `DatePicker` and `AutoComplete` are now built; what's left is the extracted **Icon** set (glyph extraction, see ICONOGRAPHY), not new interactive families.

## Files (index / manifest)
- `styles.css` — global entry (import this). Pulls in fonts, tokens, typography, base.
- `tokens/` — `fonts.css`, `fig-tokens.css` (488 vars, all themes/modes), `typography.css` (`.ta-*`), `fig-typography.css`, `base.css`.
- `components/` — the primitives above, one card `.html` per group (Design System tab).
- `components/brand/` — `Logo` (symbol / wordmark / lockup) built from the source vector art.
- `assets/logo/` — `tecace-symbol.svg`, `tecace-wordmark.svg` (exact vectors from the Figma Logo page).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/` — full-screen product recreations (see `ui_kits/*/README.md`).
- `assets/fonts/` — webfont binaries.
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent-Skills manifest.

## CAVEATS / substitutions
- **Fonts:** Pretendard **Regular (400)** and **SemiBold (600)** were not supplied — supplemented from the Pretendard CDN. `Pretendard JP` (heavily used in source) is aliased to Pretendard. Please supply the missing weights / the JP faces if exact rendering matters.
- **No logo:** ~~the source has no logo mark~~ **(corrected):** the Figma **Logo** page defines a real logo — a faceted blue-gem **symbol** and a navy (#213260) **"TecAce" wordmark**. Both were extracted verbatim as native vector paths to `assets/logo/tecace-symbol.svg` + `tecace-wordmark.svg` and wrapped as the `Logo` component (`components/brand/`, variants: lockup / symbol / wordmark).
- **Icons:** full glyph set not shipped (extraction limitation) — see ICONOGRAPHY.
