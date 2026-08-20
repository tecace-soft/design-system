The TecAce brand logo — faceted gem **symbol**, the **wordmark**, or the horizontal **lockup** (default). Use for headers, footers, splash, and brand cards.

```jsx
<Logo variant="lockup" size={32} />
<Logo variant="symbol" size={44} />
<Logo variant="wordmark" size={28} color="#fff" />
```

- `variant`: `"lockup"` (symbol + wordmark) · `"symbol"` · `"wordmark"`.
- `size`: drives the symbol edge / wordmark height (px).
- `color`: wordmark fill only — the symbol keeps its multi-color blue facets. Use `#fff` on dark backgrounds.
