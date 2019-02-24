Welcome to the self-hosting documentation!

To self-host WidgetBot, we currently suggest using [fluidsonic/widgetbot](https://github.com/fluidsonic/widgetbot).  
This is a community fork that has the stable version of WidgetBot, and it has setup instructions in the README.  
Make sure you copy `data/config.example.yml` in `server` to `data/config.yml`, and add your desired settings. For advanced configuration, look at the [config docs](config).

!!! question "Need help?"
    If you need any assistance self-hosting WidgetBot using the fluidsonic fork, please ask in [#self-hosting-support](https://discord.gg/c9ufcps).

You can also self-host [the `oss` branch in the official repo](https://github.com/widgetbot-io/widgetbot/tree/oss), however this is in active development and does not work fully.  
If you get an `@widgetbot/database` error, run `yarn workspace @widgetbot/database build`.  
For help self-hosting and developing on the `oss` branch, please ask in [#open-source-dev](https://discord.gg/D7Ndac8)
