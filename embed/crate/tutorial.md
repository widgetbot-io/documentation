# Crate Tutorial

Welcome to the Crate tutorial!

::: warning Important
**This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial) tutorial.** If you have not, please read it and **invite the bot**.
:::

::: tip Need help?
If you need any assistance adding WidgetBot, please ask in [the server](https://discord.gg/NYBEhN7). **However**, please make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server and channel IDs**, and optionally include **a link to your site**.
:::

## Getting Started

**To get started with Crate, send `??crate` in your server.** You should run it in the channel you want to show as default on your website. (Note that users can switch between the public channels in the sidebar). WidgetBot should send code that looks like this:

```html
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
  new Crate({
    server: '299881420891881473',
    channel: '355719584830980096'
  })
</script>
```

The code sent by the bot goes in your site's HTML source at the end of your website's `head`, right before the closing `</head>` tag. This might be in your theme or layout's code.

If you run your site with this code, you should see the little crate button in the bottom right corner. If you click it, it should show your server, with the correct default channel.

(If there's an issue, please go to [the WidgetBot server](https://discord.gg/NYBEhN7), and make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server and channel IDs**, and optionally include **a link to your site**.)

::: tip Complete!
You have successfully set up WidgetBot. However you can further customize WidgetBot to your needs. Read below for more info.
:::

## Further customization

### Options
This tutorial showed you the `server` and `channel` options. However, there are many other options you can set, letting you do things such as change the location, the color and icon, toggling message notifications, and more. For a full list of options, click [here](/embed/crate/options).

### API
You can use Crate's API to do things such as changing options, showing notifications, and toggling the widget through JavaScript. You can also access WidgetBot's [embed-api](https://github.com/widgetbot-io/embed-api). For more info, click [here](/embed/crate/api).

### Examples
You can see tons of Crate examples [here](/embed/crate/examples.md).
