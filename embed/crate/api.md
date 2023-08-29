# Crate API

Once you've initialised a new constructor, you can manipulate it using the following methods

## Crate APIs

### Toggle

:::tip Definition

```ts
type toggle = (open?: boolean) => void
```
:::

Toggles the widget's visibility, with an optional param to set it.

::: tip Usage

```js
// Toggle
crate.toggle()

// Toggle open
crate.toggle(true)

// Toggle closed
crate.toggle(false)
```
:::
<b>Try it:</b> <button class="try-it" onClick="crate.toggle()">toggle()</button>
<button class="try-it" onClick="crate.toggle(true)">toggle(true)</button>
<button class="try-it" onClick="crate.toggle(false)">toggle(false)</button>

---

### Notify

::: tip Definition
```ts
type notify = (
  content:
    | string
    | Notification & {
      content: string
      timeout?: number
    }
  ) => { hide: Function; delete: Function }
```
:::
Displays a notification message to the user. Markdown supported

::: tip Usage
```js
// Hello world
crate.notify(`**hello** world`)

// Display for 2 seconds + custom avatar
crate.notify({
  content: '`2 seconds`',
  timeout: 2000,
  avatar: 'https://cdn.discordapp.com/avatars/293731150239891456/f7d78d0c7e6522ed296bfa315b3a1969.png'
})

// Programmatically hide notification
const notification = crate.notify({
  content: 'Test',
  timeout: false
})
/* business logic */
notification.hide()
```
:::
<b>Try it:</b> <button class="try-it" onClick="crate.notify('**hello** world')">hello world</button>
<button class="try-it" onClick="crate.notify({content:'\`2 seconds\`',timeout:2000, avatar:'https://cdn.discordapp.com/avatars/293731150239891456/f7d78d0c7e6522ed296bfa315b3a1969.png'})">2 seconds + avatar</button>

---

### Update options

::: tip Definition

```ts
type setOptions = (newOptions: Options) => Options
```
:::
Updates the options for crate in real time. [Available options](options.md)

::: tip Usage

```js
// Update an option by mutating it
crate.options.color = '#'+Math.random().toString(16).slice(2, 8) // random color

// Update options by passing an object
crate.setOptions({
  location: [-Math.random() * 200), 'right'], // Random position
})
```
:::
<b>Try it:</b> <button class="try-it" onClick="crate.options.color='#'+Math.random().toString(16).slice(2, 8)">change colors</button>
<button class="try-it" onClick="crate.setOptions({location: [-Math.random() * 200, 'right']})">random position</button>

---

### Visibility

::: tip Definition

```ts
type hide = () => void
type show = () => void
```
:::
Hides / un-hides the crate instance, eg. the button, notifications and widget

::: tip Usage

```js
// Button will now disappear
crate.hide()

// Button will now re-appear
crate.show()
```
:::
<b>Try it:</b> <button class="try-it" onClick="crate.hide()">hide()</button> <button class="try-it" onClick="crate.show()">show()</button>

---

### Navigation

::: tip Definition

```ts
type navigate = (channelID: string) => void
```
:::
Navigates to a different channel and opens the widget if it's closed

::: tip Usage

```js
// Navigates to #general
crate.navigate('368427726358446110')

// Navigates to #live-demo
crate.navigate('355719584830980096')
```
:::
<b>Try it:</b> <button class="try-it" onClick="crate.navigate('368427726358446110')">#general</button> <button class="try-it" onClick="crate.navigate('355719584830980096')">#live-demo</button>

---

## Embed API


### Emit

::: tip Definition

```ts
type emit = <Event>(event: Event, data?: Events[Event]) => void
```
:::
Emits an event to the `embed-api`

For details, see [embed-api commands](/embed/embed-api/commands.md)

::: tip Usage

```js
// Navigate to a different server/channel
crate.emit('navigate', {
  guild: '299881420891881473',
  channel: '368427726358446110'
})

// Request login
crate.emit('login')

// Log out
crate.emit('logout')
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

For details, see [embed-api events](/embed/embed-api/events.md)

::: tip Usage

```js
// Listens for when the user has signed in
crate.on('signIn', (user) => {
  console.log(`User signed in as ${user.username}`, user)
})

// Listen for discord message events
crate.on('message', ({ message, channel }) => {
  console.log(`New message in #${channel.name}`, message)
})

// Listen for discord message delete events
crate.on('messageDelete', ({ channel, id }) => {
  console.log(`Message ${id} in #${channel.name} was deleted`)
})
```
:::
