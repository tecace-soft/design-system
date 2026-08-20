---
name: tecace-design
description: Use this skill to generate well-branded interfaces and assets for TecAce, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts:
- Global CSS entry point: `styles.css` (imports fonts + tokens + typography). Link it, then use CSS custom properties (`--primary-normal`, `--label-normal`, `--fill-normal`, …) and the `.ta-*` type classes.
- Primary blue `#116DFF`. Korean-first copy. Pretendard (UI) + Poppins (display/numeric). No logo — set the brand as type.
- Components bundle to `window.TecAceDesignSystem_64e6de` via `_ds_bundle.js` (auto-generated). Each `components/<group>/` has a `.prompt.md` with usage.
