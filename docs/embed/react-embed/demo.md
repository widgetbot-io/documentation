!!! example "react-embed"

    [`@widgetbot/react-embed`](/embed/react-embed) provides access to the embed as a React component. It provides syntactical sugar for the `embed-api`, with 100% type safety (using typescript).

    ```ts
    import * as React from 'react'
    import WidgetBot from '@widgetbot/react-embed'
    
    const App = () => (
      <WidgetBot
        server="299881420891881473"
        channel="355719584830980096"
        shard="https://disweb.dashflo.net"
      />
    )
    
    export default App
    ```
