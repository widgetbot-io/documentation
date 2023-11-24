# react-embed API

You can access [embed-api](/embed/embed-api/) by passing a function to the `onAPI` prop.

```ts
import WidgetBot from '@widgetbot/react-embed'

const onAPI = (api: WidgetBot['api']) => {
  api.on('signIn', (user) => {
    console.log(`User signed in as ${user.username}`, user)
  })
}
  
const App = () => (
  <WidgetBot
    server="299881420891881473"
    channel="355719584830980096"
    onAPI={onAPI}
  />
)

export default App
```
