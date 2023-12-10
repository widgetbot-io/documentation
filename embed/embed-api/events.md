---
prev:
  text: 'Commands'
  link: '/embed/embed-api/commands'
next:
  text: 'Moderation'
  link:  '/bot/moderation'
---

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

The message event is emitted when a message is sent in a channel. If notifications are enabled for the embed, this event will be emitted for all channels, otherwise it will only be emitted for the current channel. The payload contains a [channel object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/Channels.ts) and a [new message object](https://github.com/widgetbot-io/embed-api/blob/master/src/embed/NewMessage.ts).

::: tip Example
```js
embed.on('message', ({ message, channel }) => {
  console.log(`New message in #${channel.name}`, message)
})
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
