!!! example "html-embed"

    [`@widgetbot/html-embed`](/html-embed) is a lightweight iframe wrapper, which provides access to the `embed-api`. It can be used with any framework and has no dependencies.

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
