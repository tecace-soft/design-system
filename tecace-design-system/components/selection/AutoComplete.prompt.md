Auto Complete — a text input with a filtered suggestion dropdown (keyboard + mouse).

```jsx
<AutoComplete options={["서울","부산","대구","인천"]} onSelect={setCity} />
```

- `options`: strings filtered by substring against the query. `onSelect` fires on pick; `onChange` on every keystroke.
- Arrow keys move the highlight, Enter selects, Escape closes.
