Welcome to the Crate tutorial!

!!! warning "Important"
    **This tutorial assumes you have already completed the [Getting Started with WidgetBot](/tutorial) tutorial.** If you have not, please read it and **invite a cluster bot**.

!!! question "Need help?"
    If you need any assistance adding WidgetBot, please ask in [the server](https://discord.gg/NYBEhN7). **However**, please make sure you mention **what the issue is**, **send your code** in a codeblock (` ``` `), include **your server id and WidgetBot instance**, and optionally include **a link to your site**.

## Getting Started

To get started with Crate, add the following basic code to your website. This goes in your site's HTML source at the end of your website's `head`, right before the closing `</head>` tag. This might be in your theme or layout's code.

!!! example "Example Code"
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
      new Crate({
        server: '299881420891881473',
        channel: '355719584830980096',
        shard: 'https://cl2.widgetbot.io'
      })
    </script>
    ```

If you run your site with this code, you should see the little crate button in the bottom right corner. If you click it, it should show you the official WidgetBot server.

## Setting your server

As you can see, there are 3 parts to this code: the **Server ID**, **Channel ID**, and **shard**.

You can get the Server and Channel IDs from Discord.

* One way is to open Discord in your browser and take them from the URL. The URL has the following format: `https://discordapp.com/channels/SERVERID/CHANNELID`.
* Another way is to go to the Appearance tab in User Settings, and turn on Developer Mode. Then, right-click the server icon or channel and click `Copy ID`.

!!! info "Note"

    The Channel ID you choose will be the default channel that will show when Crate opens. However, the user can switch the channel.

The `shard` is the WidgetBot instance you are using. This can be one of the following:

* `https://cl2.widgetbot.io`
* `https://cl3.widgetbot.io`
* `https://disweb.deploys.io`
* Your self-hosted instance

!!! tip "Important"
    **You must use the correct shard for the bot you added to your server.** Also, make sure there is no slash at the end of the `shard`.

Once you set the Server ID, Channel ID, and Shard, the widget should now show your server when you open it.

!!! success "Complete!"
    You have successfully set up WidgetBot. However you can further customize WidgetBot to your needs. Read below for more info.

## Further customization

### Options
This tutorial showed you the `server`, `channel`, and `shard` options. However, there are many other options you can set, letting you do things such as change the location, the color and icon, toggling message notifications, and more. For a full list of options, click [here](/embed/crate/options).

### API
You can use Crate's API to do things such as changing options, showing notifications, and toggling the widget through JavaScript. You can also access WidgetBot's [embed-api](https://github.com/widgetbot-io/widgetbot/tree/2.5/packages/embed-api). For more info, click [here](/embed/crate/api).

### Examples
You can see tons of Crate examples [here](/embed/crate/examples).
