iOS-style triple wheel date picker — year / month / day columns; scroll each to pick.

```jsx
<DatePicker value={new Date()} onChange={setDate} />
```

- `minYear` / `maxYear` bound the year wheel. `onChange` fires a `Date` when any wheel settles. Day count adjusts per month.
