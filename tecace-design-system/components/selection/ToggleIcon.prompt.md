Toggle icon — a tappable glyph that swaps color on/off (bookmark, like, follow).

```jsx
<ToggleIcon icon={<BookmarkGlyph/>} active={saved} onClick={()=>setSaved(!saved)} />
```

- `active` paints the icon primary blue; inactive is neutral grey. Pass any SVG as `icon` (uses currentColor).
