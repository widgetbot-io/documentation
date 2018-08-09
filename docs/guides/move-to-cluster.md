Discord now requires us to use sharding - something that will need to be worked on. WidgetBot may display "unable to locate this server" to some users, randomly. This will be fixed soon.

**In the meantime, we'd recommend all users to use one of the clusters**

* [Cluster 1 (cl1)](https://discordapp.com/oauth2/authorize?client_id=454690519952523267&scope=bot&permissions=537218112)
* [Cluster 2 (cl2)](https://discordapp.com/oauth2/authorize?client_id=454690621454548994&scope=bot&permissions=537218112)
* [Cluster 3 (cl3)](https://discordapp.com/oauth2/authorize?client_id=454690769010425856&scope=bot&permissions=537218112)
* [Cluster 4 (cl4)](https://discordapp.com/oauth2/authorize?client_id=454690860097863680&scope=bot&permissions=537218112)
* [Cluster 5 (cl5)](https://discordapp.com/oauth2/authorize?client_id=454690940968370188&scope=bot&permissions=537218112)

Alternatively, if you want beta features such as letting guests mention users and use custom emotes, use [the beta version](https://discordapp.com/oauth2/authorize?client_id=356856478495408129&scope=bot&permissions=537218112). Note that this may have bugs.

!!! note
  There is no difference between clusters 1 to 5.

## How can I use a cluster?

First, click on the link for a cluster and add the bot to your server.

!!! note
  The examples on this page use Cluster 1 (cl1), change it to the cluster you added to the server.
  
#### Jump to
* [iframes](#iframes)
* [crate](#crate)
* [html-embed](#html-embed)
* [react-embed](#react-embed)

### iframes

Preprend the cluster to the domain in the `src` url, for example `https://widgetbot.io/channels/34234/234432` => `https://cl4.widgetbot.io/channels/34234/234432`. For more info see [the iframe tutorial](/tutorial/iframes) (the cluster is the `shard`).

!!! example "iframe example with cluster"
  ```html
 <iframe src="https://cl1.widgetbot.io/channels/299881420891881473/355719584830980096" height="600" width="800"></iframe>
  ```

### Crate

Set the `shard` [option](/embed/crate/options):

!!! example "Crate example with cluster"
  ```html
  <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
  new Crate({
    server: '299881420891881473',
    channel: '355719584830980096',
    shard: 'https://cl1.widgetbot.io'
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
    shard="https://cl1.widgetbot.io"
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
      shard="https://cl1.widgetbot.io"
   />
  )

  export default App
  ```
