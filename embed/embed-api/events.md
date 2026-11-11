# Events

`embed-api` events (server events) are used to listen to actions that occur in the embed.

:::tip Note
Object fields are subject to change with embed updates. Your application should be able to handle missing fields.
:::

### signIn

The signIn event is emitted when the user logs in to the widget. The payload is a [user object](https://github.com/widgetbot-io/embed-api/blob/master/src/user.ts).

::: tip Example
```js
embed.on('signIn', (user) => {
  console.log(`User signed in as ${user.username}`, user)
})
```
:::

### alreadySignedIn

The alreadySignedIn event is emitted when the widget loads and the user is already logged in. The payload is a [user object](https://github.com/widgetbot-io/embed-api/blob/master/src/user.ts).

::: tip Example
```js
embed.on('alreadySignedIn', (user) => {
  console.log(`User already signed in as ${user.username}`, user)
})
```
:::

### signOut

The signOut event is emitted when the user logs out of the widget. There is no payload.

::: tip Example
```js
embed.on('signOut', () => {
  console.log('User signed out')
})
```
:::

### message

The `message` event reports live channel activity. On Discord v3, it fires for the active channel. Earlier embeds can also emit it for other channels when notifications are enabled. The payload contains a channel and the new message. [Channel type](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/Channels.ts) · [Message type](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/NewMessage.ts)

::: tip Example
```js
embed.on('message', ({ message, channel }) => {
  console.log(`New message in #${channel.name}`, message)
})
```
:::

### unreadDirectMessageCount

On Discord v3, this event carries the signed-in user's total unread one-to-one and group direct messages for the current server. The payload is `{ count: number }`. The embed reports the initial count, updates it as messages arrive or are read, and sends `0` when the user signs out. Guild-wide system announcements and Discord channel messages are outside this count.

To show a red badge on your own chat button, keep the iframe mounted while the chat is closed. Use the same signed-in WidgetBot account the user reads their DMs with. Send `setChatVisible` whenever your button shows or hides the widget. In the example, use your Discord v3 embed origin and replace `SERVER_ID` and `CHANNEL_ID`. [Visibility command](commands#setchatvisible)

::: tip Example
```html
<button id="chat-toggle" aria-controls="widgetbot-chat" aria-expanded="false">
  Chat <span id="chat-unread" aria-hidden="true" style="color: #b91c1c" hidden>●</span>
</button>
<iframe id="widgetbot-chat" title="WidgetBot chat" width="800" height="600" hidden></iframe>
```

```js
import { Client } from '@widgetbot/embed-api'

const id = 'chat-badge'
const iframe = document.querySelector('#widgetbot-chat')
const button = document.querySelector('#chat-toggle')
const badge = document.querySelector('#chat-unread')
const embed = new Client({ id, iframe })

embed.on('unreadDirectMessageCount', ({ count }) => {
  badge.hidden = count === 0
  button.setAttribute('aria-label', count > 0 ? 'Chat, unread direct messages' : 'Chat')
})

embed.on('ready', () => embed.emit('setChatVisible', !iframe.hidden))

button.addEventListener('click', () => {
  iframe.hidden = !iframe.hidden
  const visible = !iframe.hidden
  button.setAttribute('aria-expanded', String(visible))
  embed.emit('setChatVisible', visible)
})

iframe.src = `WIDGETBOT_ORIGIN/channels/SERVER_ID/CHANNEL_ID?api=${id}`
```
:::

### messageUpdate

The messageUpdate event is emitted when a message is edited in the current channel. The payload contains a [channel object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/Channels.ts) and an [updated message object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/MessageUpdated.ts).

::: tip Example
```js
embed.on('messageUpdate', ({ message, channel }) => {
  console.log(`Message in #${channel.name} was edited`, message)
})
```
:::

### messageDelete

The messageDelete event is emitted when a message is deleted in the current channel. The payload contains a [channel object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/Channels.ts) and the ID of the deleted message.

::: tip Example
```js
embed.on('messageDelete', ({ channel, id }) => {
  console.log(`Message ${id} in #${channel.name} was deleted`)
})
```
:::

### messageDeleteBulk

The messageDeleteBulk event is emitted when messages are bulk deleted in the current channel. The payload contains a [channel object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/Channels.ts) and an array of deleted message IDs.

::: tip Example
```js
embed.on('messageDeleteBulk', ({ channel, ids }) => {
  console.log(`Messages ${ids.join(', ')} in #${channel.name} were deleted`)
})
```
:::

### sentMessage

The sentMessage event is emitted when a message is sent from the widget. The payload contains a [channel object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/Channels.ts), the content of the sent message, the thread ID if sent in a thread, and uploaded file data.

::: tip Definition
```ts
sentMessage: {
  channel: Channel;
  content: string;
  thread?: string | null;
  fileData?: string | null;
  fileName?: string | null;
  fileAlt?: string | null;
}
```
:::

::: tip Example
```js
embed.on('sentMessage', (data) => {
  console.log(`Sent message in #${data.channel.name}`, data)
})
```
:::
