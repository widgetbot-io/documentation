# Automod

Many automod bots will ignore messages sent via WidgetBot, which can be annoying to admins. A solution is using [Pylon](https://pylon.bot) and code it yourself. In this guide, we'll make a simple check to delete invite links.

First, you'll need to [add the Pylon bot to your server](https://pylon.bot/studio/add-guild).  
Then, click your server in the list and click "Open Code Editor". Delete the example code in the editor, so it's blank.

This code will delete all messages sent invite links detected with a [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions):
```ts
const inviteRegex = /(discord\.(gg|io|me|li)|discord(app)?\.com\/invite)(\/.+)/i;

discord.on('MESSAGE_CREATE', async (msg) => {
  if (inviteRegex.test(msg.content)) await msg.delete();
});
```
Paste that in and save. Pylon should now instantly delete messages containing an invite link.

::: tip Need help with Pylon?
Go to the [Pylon Discord server](https://discord.gg/dY42R4SFAJ) to get help with using Pylon.
:::
