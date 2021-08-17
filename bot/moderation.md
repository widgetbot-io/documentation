# Moderation

WidgetBot messages can be seen and deleted in Discord clients and by other bots. However, you cannot see WidgetBot user details or ban them from your server like normal users. Instead, we have set up context menu commands to let you moderate WidgetBot users as easily as moderating regular users. On mobile, you'll need to send a command for now.

WidgetBot has 3 moderation actions:

- **Ban**: Prevents the user who sent this message from sending more messages through WidgetBot
- **Unban**: Removes a ban if the user is already banned, allowing them to send messages again
- **User**: Shows some information about the user who sent the message

## Context Menus

If you're using Discord on desktop or web, you can moderate using the message context menu. In the desktop client, you can open this by right-clicking the message sent through WidgetBot. You can also open it by hovering over the message and clicking the three-dot button at the right.

In the context menu, you should see an "Apps" item. Hover over it, and the WidgetBot items should appear, along with items from other applications you might have in your server. Click an action to do it.

![The context menu, showing WidgetBot's items](https://i.imgur.com/KWk64Zd.png)

:::tip Don't see it?
If you have WidgetBot in your server but you do not see the Apps item, or it does not include any WidgetBot items, you'll have to [give it access](https://discord.com/api/oauth2/authorize?client_id=543225764036870167&scope=applications.commands). In most servers, the items should show without needing to do this.
:::

## Commands

Discord hasn't added context menu support to mobile yet, so for now, you'll have to send commands instead.

To use a command, you'll need to first copy the ID of the WidgetBot message. There are 2 ways to do this:
- Enable Developer Mode in User Settings > Appearance, then hold the message to show its context menu on mobile, and tap "Copy ID"
- Hold the message to show its context menu on mobile, tap "Copy Message Link", then copy just the ID at the end of the link

Discord IDs are long numbers, an example is 543225764036870167.

You'll need to send a message starting with WidgetBot's prefix (defaults to `??`) to use the command. For example:
- ??ban 543225764036870167
- ??unban 543225764036870167
- ??user 543225764036870167

![The command message and WidgetBot's response](https://i.imgur.com/RnUnj3z.png)
