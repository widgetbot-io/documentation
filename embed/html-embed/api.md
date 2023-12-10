---
prev:
  text: 'Attributes'
  link: '/embed/html-embed/attributes'
next:
  text: 'Intro'
  link:  '/embed/react-embed/'
---

# html-embed API

Once you've created a new WidgetBot element, the `html-embed` script adds the API methods onto the Elements prototype.

You can access them by simply querying the `<widgetbot>` element, example:

```html
<widgetbot server="299881420891881473" id="embed"></widgetbot>
...
<script>
const embed = document.getElementById('embed')
// embed.emit()
</script>
```

## Embed API

### Emit

::: tip Definition

```ts
type emit = <Event>(event: Event, data?: Events[Event]) => void
```
:::

Emits an event to the `embed-api`

For details, see [embed-api commands](/embed/embed-api/commands)

::: tip Usage

```js
// Send a message on the active Discord channel
embed.emit('sendMessage', 'hi')

// Send a message on a specific Discord channel
embed.emit('sendMessage', {
  channel: '123456789',
  message: 'hi'
})
```
:::
---

### On

::: tip Definition

```ts
type on = <Event>(event: Event, (data?: Events[Event]) => void) => void
```
:::

Listens for a specific event from the `embed-api`

For details, see [embed-api events](/embed/embed-api/events)

::: tip Usage

```js
// Listens for when the user has signed in
embed.on('signIn', (user) => {
  console.log(`User signed in as ${user.username}`, user)
})

// Listen for discord message events
embed.on('message', ({ message, channel }) => {
  console.log(`New message in #${channel.name}`, message)
})

// Listen for discord message delete events
embed.on('messageDelete', ({ channel, id }) => {
  console.log(`Message ${id} in #${channel.name} was deleted`)
})
```
:::
