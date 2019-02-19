[assets]: https://github.com/widgetbot-io/documentation/tree/master/docs/assets
[embed]: https://github.com/widgetbot-io/documentation/tree/master/docs/embed
[guides]: https://github.com/widgetbot-io/documentation/tree/master/docs/guides
[self-hosted]: https://github.com/widgetbot-io/documentation/tree/master/docs/self-hosted]
[tutorial]: https://github.com/widgetbot-io/documentation/tree/master/docs/tutorial
[crate]: https://github.com/widgetbot-io/documentation/tree/master/docs/embed/crate
[html-embed]: https://github.com/widgetbot-io/documentation/tree/master/docs/embed/html-embed
[react-embed]: https://github.com/widgetbot-io/documentation/tree/master/docs/embed/react-embed

# WidgetBot documentation
This repository contains the documentation, that can be found at https://docs.widgetbot.io/  
Any contributions and improvements of the documentation are welcome.

# Content

## [assets]
Contains files like images and general css/js stuff for defining the style of the site.  
Please don't touch those.

## [embed]
Contains documentation about the [crate], the [html-embed] and the [react-embed].

## [guides]
General guides about fixing issues (currently how to switch to a cluster).

## [self-hosted]
Information about how to self-host the WidgetBot.

## [tutorial]
Tutorials.

# Styling
The used sites are saved as markdown-files (`.md`) and use markdown and some basic html, like iframes.  
But there is also some own additional styling used in order to provide additional stuff.

## Boxes
The documentation can have boxes containing infos, tips or similar.  
Each type of box follows a similar pattern.

You start with three exclamation marks (`!`) followed by the type (info, tip, note, example, question, warning or success) and the title of the box.  
The title needs to be in `"` (Example: `!!! info "Hello there"`)  
The actual content of the box needs to be on a seperate line and start with 4 spaces.

### Info
```
!!! info "Note"
    This section is for self-hosting the WidgetBot **server**, not the embed or other things. Only Legendary [patrons](https://widgetbot.io/patron) can self-host the server.
```

**Result**:  
![](https://i.imgur.com/MCLHVly.png)

----
### tip
```
!!! tip "Important"
    WidgetBot will not work if you don't add a cluster bot to your server!
```

**Result**:  
![](https://i.imgur.com/j8cmLrw.png)

----
### note
```
!!! note
    There is no difference between the clusters.
```

**Result**:  
![](https://i.imgur.com/eTY0aSc.png)

----
### example
```
!!! example "iframe example with cluster"
    ```html
    <iframe src="https://cl2.widgetbot.io/channels/299881420891881473/355719584830980096" height="600" width="800"></iframe>
    ```
```

**Result**:  
![](https://i.imgur.com/lK2SfSL.png)

----
### question
```
!!! question "Need help?"
    If you need any assistance adding WidgetBot, please ask in [the server](https://discord.gg/NYBEhN7). **However**, please make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server id and cluster**, and optionally include **a link to your site**.
```

**Result**:  
![](https://i.imgur.com/l8q0MCz.png)

----
### warning
```
!!! warning "Important"
    **This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial) tutorial.** If you have not, please read it and **invite a cluster bot**.
```

**Result**:  
![](https://i.imgur.com/nyMTMDD.png)

----
### success
```
!!! success "Complete!"
    You have successfully set up WidgetBot.
```

**Result**:  
![](https://i.imgur.com/J0Xa7tf.png)
