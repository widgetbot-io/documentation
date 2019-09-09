To get started with WidgetBot, first you must invite the bot to your server.

!!! question "Need help?"
    If you need any assistance adding WidgetBot, please ask in [the server](https://discord.gg/NYBEhN7). **However**, please make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server id and cluster**, and optionally include **a link to your site**.


## Adding the Bot

**[Add the official bot](https://disweb.deploys.io/api/invite)**

You can also [host WidgetBot yourself](/self-hosted), however this is not recommended..


!!! tip "Important"
    WidgetBot will not work if you don't add the bot to your server!

<!--!!! note
    The instances are mostly identical, however there are some small differences: cl2 and DisWeb render mentions, but cl3 doesn't. cl3 renders animated emojis, but cl2 and DisWeb don't. Also, cl2 will not work on a server with the 2FA Requirement on.-->

<!-- Alternatively, if you want beta features such as letting guests mention users and use custom emotes, use [the beta version](https://discordapp.com/oauth2/authorize?client_id=356856478495408129&scope=bot&permissions=537218112). Note that this may have bugs. -->

After you add one of the bots to your server, you need to pick a format to use in your website.  
You can choose between Crate and one of our inline formats.

## Formats

* **[Crate (recommended)](/embed/crate/tutorial)**: Shows a little chat button in the corner of your website. It shows message notifications and provides an API. [Info](https://widgetbot.io/crate), [Tutorial](/embed/crate/tutorial), [Documentation](/embed/crate)

### Inline formats
These let you put a chat box in your site you can change the size, etc.

* **[html-embed](/embed/html-embed/tutorial)**: A lightweight iframe wrapper which provides access to the [embed-api](https://github.com/widgetbot-io/embed-api). Requires JavaScript. [Tutorial](/embed/html-embed/tutorial), [Documentation](/embed/html-embed)
* **[react-embed](/embed/react-embed)**: Provides access to the embed as a React component, and lets you use the [embed-api](https://github.com/widgetbot-io/embed-api). [Documentation](/embed/react-embed)
* **[iframe](iframes)**: Use this when you can't use JavaScript. It does not provide access to the [embed-api](https://github.com/widgetbot-io/embed-api), and may break the browser back button. [Tutorial](iframes)

Choose one of the formats to continue the tutorial and learn about adding the embed to your website.
