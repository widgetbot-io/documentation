# Moderation

WidgetBot messages can be seen and deleted in Discord clients and by other bots. However, you cannot see WidgetBot user details or ban them from your server like normal users. Instead, we have set up context menu commands to let you moderate WidgetBot users as easily as moderating regular users. On mobile, you'll need to send a command for now.

WidgetBot has 3 moderation actions:

- **Ban**: Prevents the user who sent this message from sending more messages through WidgetBot
- **Unban**: Removes a ban if the user is already banned, allowing them to send messages again
- **User**: Shows some information about the user who sent the message

The **Ban Members** Discord permission is required to use these.

## Context Menus

You can moderate using the message context menu. In the desktop client, you can open this by right-clicking the message sent through WidgetBot. You can also open it by hovering over the message and clicking the three-dot button at the right. On mobile, hold the message.

In the context menu, you should see an "Apps" button. Hover over it or tap it on mobile, and the WidgetBot commands should appear, along with commands from other applications you might have in your server. Click an action to do it.

![The context menu, showing WidgetBot's commands](https://i.imgur.com/KWk64Zd.png)

:::tip Don't see it?
If you have WidgetBot in your server but you do not see the Apps button, or it does not include any WidgetBot commands, you'll have to [give it access](https://discord.com/api/oauth2/authorize?client_id=543225764036870167&scope=applications.commands). In most servers, the commands should show without needing to do this.
:::

## Commands

As an alternative to context menus, you can moderate with slash commands.

To use the /ban or /user commands, you'll need to first copy the ID of the WidgetBot message. There are 2 ways to do this:
- Enable Developer Mode in User Settings > Appearance, then hold the message to show its context menu on mobile, and tap "Copy ID"
- Hold the message to show its context menu on mobile, tap "Copy Message Link", then copy just the ID at the end of the link

Discord IDs are long numbers, an example is 543225764036870167.

You'll need to use a WidgetBot slash command. Type / to show commands, and type the command name to filter it.
- /ban id: 543225764036870167
- /unban id: 543225764036870167
- /user id: 543225764036870167

![WidgetBot slash command response](https://i.imgur.com/3AeucLz.png)

The /unban slash command supports autocomplete to see the currently banned users and select one. You can also use the /listbans command to see all the banned users.
