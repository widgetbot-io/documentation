# html-embed Tutorial

Welcome to the html-embed tutorial!

:::tip Important
**This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial/) tutorial.** If you have not, please read it and **invite the bot**.
:::

:::tip Need help?
If you need any assistance adding WidgetBot, please ask in [the server](https://discord.gg/NYBEhN7). **However**, please make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server and channel IDs**, and optionally include **a link to your site**.
:::

## Getting Started

To get started, add the following code where you want the widget to display.

::: tip Example Code
```html
<widgetbot
  server="299881420891881473"
  channel="355719584830980096"
  width="800"
  height="600"
></widgetbot>
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
```
:::

If you run your site with this code, you should see the widget, showing the official WidgetBot server.

## Setting your server

As you can see, there are 2 parts to this code: the **Server ID**, **Channel ID**. (There's also the width and height for setting the size of the embed.)

You can get the Server and Channel IDs from Discord: Go to the Appearance tab in User Settings, and turn on Developer Mode. Then, right-click the server icon or channel and click `Copy ID`.

:::tip Note
The Channel ID you choose will be the default channel that will show when Crate opens. However, the user can switch the channel.
:::
Once you set the Server ID and Channel ID, the widget should now show your server when you open it.

:::tip Complete!
You have successfully set up WidgetBot. However you can further customize WidgetBot to your needs. Read below for more info.
:::
## API
You can use html-embed's API to access WidgetBot's [embed-api](/embed/embed-api/). For more info, click [here](/embed/html-embed/api).
