<p align="center">
	<widgetbot
    server="299881420891881473"
    channel="355719584830980096"
    id="embed"
    height="300"
    width="500"
  />
	<script src="https://unpkg.com/@widgetbot/html-embed"></script>
  <p align="center">
    Discord chat widgets for your website.
  </p>
</p>
<p align="center">
  <a href="https://discord.gg/25vFWfb">
    <img src="https://img.shields.io/discord/299881420891881473.svg?colorB=7289DA&style=flat">
  </a>
</p>
<hr>

!!! info "Getting started"

    WidgetBot provides a rich client-sides wrappers around the widgets. Each wrapper provides access to the `embed-api`, allowing your website to programatically:

    - Listen for message events
    - Send messages through WidgetBot
    - Sign in with a specific username

    *and more*

## Integrations

!!! example "Crate (recommended)"

    `@widgetbot/crate` provides a little chat button in the corner of your website. It shows message notifications from your server and provides an extensive API.

    ```html
    <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async>
      const crate = new Crate({
        server: '299881420891881473',
        channel: '355719584830980096'
      })

      crate.notify('Test notification')
      crate.on('signIn', data => {
        console.log(`Guest signed in as ${data.name}`)
        crate.emit('sendMessage', 'Hello world')
      })
    </script>
    ```

---

!!! example "html-embed"

    `@widgetbot/html-embed` is a lightweight iframe wrapper, which provides access to the `embed-api`. It can be used with any framework and has no dependencies.

    ```html
    <widgetbot
      server="299881420891881473"
      channel="355719584830980096"
      id="embed"
    ></widgetbot>
    <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>

    <script>
      const embed = document.getElementById('embed')

      embed.on('signIn', data => {
        console.log(`Guest signed in as ${data.name}`)
        embed.emit('sendMessage', 'Hello world')
      })
    </script>
    ```

---

!!! example "react-embed"

    `@widgetbot/react-embed` provides access to the embed as a React component. It provides syntactical sugar for the `embed-api`, with 100% type safety (using typescript).

    ```ts
    import * as React from 'react'
    import WidgetBot from '@widgetbot/react-embed'

    const App = () => (
      <WidgetBot
        server="299881420891881473"
        channel="355719584830980096"
        onAPI={(api) => {
          api.on('signIn', user => {
            console.log(`Guest signed in as ${user.name}`, user)
            api.emit('sendMessage', 'Hello world')
          })
        }}
      />
    )

    export default App
    ```
