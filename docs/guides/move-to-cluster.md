Please switch to a cluster to resolve the issue.

Choose a cluster:

* [Cluster 1 (cl1)](https://add.widgetbot.io/cl1)
* [Cluster 2 (cl2)](https://add.widgetbot.io/cl2)
* [Cluster 3 (cl3)](https://add.widgetbot.io/cl3)

!!! tip "Important"
    WidgetBot will not work if you don't add a cluster bot to your server!

!!! note
    There is no difference between the clusters.

## How can I use a cluster?

First, click on the link for a cluster and add the bot to your server.

!!! note
    The examples on this page use Cluster 2 (cl2), change it to the cluster you added to the server.
  
#### Jump to
* [iframes](#iframes)
* [crate](#crate)
* [html-embed](#html-embed)
* [react-embed](#react-embed)

### iframes

Preprend the cluster to the domain in the `src` url, for example `https://widgetbot.io/channels/34234/234432` => `https://cl2.widgetbot.io/channels/34234/234432`.

!!! example "iframe example with cluster"
    ```html
    <iframe src="https://cl2.widgetbot.io/channels/299881420891881473/355719584830980096" height="600" width="800"></iframe>
    ```

For more info see [the iframe tutorial](/tutorial/iframes) (the cluster is the `shard`).

### Crate

Set the `shard` [option](/embed/crate/options):

!!! example "Crate example with cluster"
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
      new Crate({
        server: '299881420891881473',
        channel: '355719584830980096',
        shard: 'https://cl2.widgetbot.io'
      })
    </script>
    ```
  
For more info see [the Crate tutorial](/embed/crate/tutorial).

### html-embed

Add a `shard` [attribute](/embed/html-embed/attributes)

!!! example "html-embed example with cluster"
    ```html
    <widgetbot
      server="299881420891881473"
      channel="355719584830980096"
      width="800"
      height="600"
      shard="https://cl2.widgetbot.io"
    ></widgetbot>
    <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
    ```

For more info see [the html-embed tutorial](/embed/html-embed/tutorial).


### react-embed

Set the `shard` [prop](/embed/react-embed/props)

!!! example "react-embed example with cluster"
    ```js
    import * as React from 'react'
    import WidgetBot from '@widgetbot/react-embed'
    
    const App = () => (
      <WidgetBot
        server="299881420891881473"
        channel="355719584830980096"
        shard="https://cl2.widgetbot.io"
      />
    )
    
    export default App
    ```
