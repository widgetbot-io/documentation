---
prev:
  text: 'Intro'
  link: '/embed/embed-api/'
next:
  text: 'Events'
  link:  '/embed/embed-api/events'
---

# Commands

`embed-api` commands (client events) are used to control the state of the embed.

### navigate

The navigate command changes the active channel of the embed.

::: tip Usage
```js
embed.emit('navigate', {
  guild: '299881420891881473',
  channel: '368427726358446110'
})
```
:::

### login

The login command requests the user to log in, if they aren't already logged in. It will show a guest login modal or a Discord login button, depending on whether the guild has guests enabled.

::: tip Usage
```js
embed.emit('login')
```
:::

### logout

The logout command logs the user out, if they are logged in.

::: tip Usage
```js
embed.emit('logout')
```
:::

### Demo

<iframe height="580" style="width: 100%;" scrolling="no" title="embed-api commands" src="https://codepen.io/advaith1/embed/NWexQLJ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/advaith1/pen/NWexQLJ">
  embed-api commands</a> by Advaith (<a href="https://codepen.io/advaith1">@advaith1</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>