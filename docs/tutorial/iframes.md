Welcome to the iframe tutorial!

This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial) tutorial.

## Getting Started

To get started, add the following code where you want the widget to display.

```html
<iframe src="https://cl1.widgetbot.io/channels/299881420891881473/355719584830980096" height="600" width="800"></iframe>
```

If you run your site with this code, you should see the widget, showing the official WidgetBot server.

## Setting your server

The WidgetBot URL has the following format:
```
https://SHARD.widgetbot.io/channels/SERVERID/CHANNELID
```

In the example code, the SHARD is `cl1`, the SERVERID is `299881420891881473`, and the Channel ID is `355719584830980096`.

To set it to your server, you must change the shard, Server ID, and Channel ID.

You can get the Server and Channel IDs from Discord.

* One way is to open Discord in your browser and take them from the URL. The URL has the following format: `https://discordapp.com/channels/SERVERID/CHANNELID`.
* Another way is to go to the Appearance tab in User Settings, and turn on Developer Mode. Then, right-click the server icon or channel and click `Copy ID`.

!!! info "Note"

    The Channel ID you choose will be the default channel that will show when the widget loads. However, the user can switch the channel.

The `shard` is the WidgetBot cluster you are using. This can be one of the following: `cl1`, `cl2`, `cl3`, `cl4`, `cl5`, or `beta`.

You must use the correct one for the bot you added to your server.

Once you set the Server ID, Channel ID, and Shard, the widget should now show your server.
