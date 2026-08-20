Filter chip — a pill with a trailing chevron and optional selection count; used in filter bars.

```jsx
<ChipFilter label="지역" expand={open} onClick={()=>setOpen(!open)} />
<ChipFilter label="지역" count={3} state="selected" />
```

- `size`: `"md"` | `"lg"`. `state`: `default` / `selected` / `disabled` / `selected disabled`.
- `expand` flips the chevron; `count` shows a blue selection number before it.
