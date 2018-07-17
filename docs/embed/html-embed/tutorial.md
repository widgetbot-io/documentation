Welcome to the html-embed tutorial!

This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial) tutorial.

## Getting Started

To get started, add the following code where you want the widget to display.

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

If you run your site with this code, you should see the widget, showing the official WidgetBot server.

## Setting your server

As you can see, there are 3 parts to this code: the **Server ID**, **Channel ID**, and **shard**. (There's also the width and height for setting the size of the embed.)

You can get the Server and Channel IDs from Discord.

* One way is to open Discord in your browser and take them from the URL. The URL has the following format: `https://discordapp.com/channels/SERVERID/CHANNELID`.
* Another way is to go to the Appearance tab in User Settings, and turn on Developer Mode. Then, right-click the server icon or channel and click `Copy ID`.

!!! info "Note"

    The Channel ID you choose will be the default channel that will show when Crate opens. However, the user can switch the channel.

The `shard` is the WidgetBot cluster you are using. This can be one of the following:

* `https://cl1.widgetbot.io`
* `https://cl2.widgetbot.io`
* `https://cl3.widgetbot.io`
* `https://cl4.widgetbot.io`
* `https://cl5.widgetbot.io`
* `https://beta.widgetbot.io`

You must use the correct one for the bot you added to your server. Also, make sure there is no slash at the end.

Once you set the Server ID, Channel ID, and Shard, the widget should now show your server when you open it.

## API
You can use html-embed's API to access WidgetBot's [embed-api](https://github.com/widgetbot-io/embed-api). For more info, click [here](/embed/html-embed/api).