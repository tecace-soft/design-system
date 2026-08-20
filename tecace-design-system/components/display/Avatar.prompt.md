# Avatar / AvatarGroup
User (circular) or company (rounded-square) avatar; image, initials, or placeholder. AvatarGroup overlaps with +N overflow.

```jsx
<Avatar src={url} name="김민아" size="md" />
<Avatar variant="company" name="TA" />
<AvatarGroup avatars={[{name:'A'},{name:'B'}]} max={3} />
```

Sizes xs|sm|md|lg|xl|2xl or a number.