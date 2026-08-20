# TextField
Single-line text input with label, helper, error, and icon slots. radius 12, focus → primary border.

```jsx
<TextField label="이메일" placeholder="you@tecace.com" onChange={e=>set(e.target.value)} />
<TextField error helper="확인이 필요합니다" />
```

Props: `error`, `disable`, `leadingIcon`, `trailingIcon`, `helper`, `type`.