Welcome to the self-hosting documentation!

!!! warning
    The current version of WidgetBot, v2, is not available for self-hosting. You can only self-host v1, the old version, which has bugs and is missing features. Self-hosting is not recommended or officially supported.

To self-host WidgetBot, we currently suggest using [fluidsonic/widgetbot](https://github.com/fluidsonic/widgetbot).  
This is a community fork that has the stable version of WidgetBot, and it has setup instructions in the README.  
Make sure you copy `data/config.example.yml` in `server` to `data/config.yml`, and add your desired settings. For advanced configuration, look at the [config docs](config).

!!! question "Need help?"
    If you need any assistance self-hosting WidgetBot using the fluidsonic fork, please ask in [#self-hosting-support](https://discord.gg/c9ufcps).

You can also self-host [the `oss` branch in the official repo](https://github.com/widgetbot-io/embed/tree/oss), however it may not be possible to get it working, as the versions may be mismatched..  
If you get an `@widgetbot/database` error, run `yarn workspace @widgetbot/database build`.  
For help self-hosting, feel free to ask in [#self-hosting](https://discord.gg/c9ufcps), but we may not be able to help you.
