Welcome to the iframe tutorial!

::: tip Important
**This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial) tutorial.** If you have not, please read it and **invite a cluster bot**.
:::

::: tip Need help?
If you need any assistance adding WidgetBot, please ask in [the server](https://discord.gg/NYBEhN7). **However**, please make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server id and WidgetBot instance**, and optionally include **a link to your site**.
:::

::: warning Important
Using an iframe may break the browser's back button. We recommend using [html-embed](/embed/html-embed/tutorial) or [react-embed](/embed/react-embed) when you can use JavaScript.
:::

## Getting Started

To get started, add the following code where you want the widget to display.

:::tip Example Code
```html
<iframe src="https://e.widgetbot.io/channels/299881420891881473/355719584830980096" height="600" width="800"></iframe>
```
:::
If you run your site with this code, you should see the widget, showing the official WidgetBot server.

## Setting your server

The WidgetBot URL has the following format:
```
https://e.widgetbot.io/channels/SERVERID/CHANNELID
```

In the example code, the SERVERID is `299881420891881473` and the CHANNELID is `355719584830980096`.

To set it to your server, you must change the shard, Server ID, and Channel ID.

You can get the Server and Channel IDs from Discord: Go to the Appearance tab in User Settings, and turn on Developer Mode. Then, right-click the server icon or channel and click `Copy ID`.

::: tip Note
The Channel ID you choose will be the default channel that will show when the widget loads. However, the user can switch the channel.
:::
Once you set the Server ID and Channel ID, the widget should now show your server.

::: tip Complete!
You have successfully set up WidgetBot.
:::
