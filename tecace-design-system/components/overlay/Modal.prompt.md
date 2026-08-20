# Modal
Scrim + centered dialog shell. Provide title, body (children) and an optional footer (compose Buttons).

```jsx
<Modal open={o} title="설정" onClose={close} footer={<Button label="완료" style={{flex:1}} onClick={close}/>}>…</Modal>
```