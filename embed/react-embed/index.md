---
next:
  text: 'Props'
  link:  '/embed/react-embed/props'
---

# react-embed

![Demo](https://i.imgur.com/b2SirC2.png)

---

:::tip react-embed
[`@widgetbot/react-embed`](/embed/react-embed/) provides access to the embed as a React component. It provides syntactical sugar for the `embed-api`, with 100% type safety (using TypeScript).
:::
```tsx
import WidgetBot from '@widgetbot/react-embed'

const App = () => (
  <WidgetBot
    server="299881420891881473"
    channel="355719584830980096"
  />
)

export default App
```
