!!! tip "What is it?"

    Each WidgetBot server accepts a `config.yml` (or `config.js`). Each time when the server starts, it logs into Discord using the token specified in it amongst other things.

    You need to copy `data/config.example.yml` in `server` to `data/config.yml` and fill it in. On this page you can see all the available configuration options. You can leave most of it as the default.

## Available configuration

```ts
{
  /**
   * NEDB configuration - see https://github.com/louischatriot/nedb/wiki/Creating-loading-the-database
   */
  database: {
    /**
     * The path to where the NeDB database should be stored
     */
    dir: string
    /**
     * The secret to use when verifying JWT tokens.
     *
     * **WARNING:** Keep this private! if an attacker gains ahold
     * of this, server security is severely compromised!
     */
    jwt_secret: string
  }

  /**
   * Discord configuration
   */
  discord: {
    /**
     * Bot token
     */
    token: string
    /**
     * Discord channel to send server events to
     * FORMAT: [server, channel]
     */
    events: {
      /**
       * Log events - joined guild etc.
       */
      logs: [string, string]
      /**
       * Status events - server started etc.
       */
      status: [string, string]
    }
    /**
     * The name of the webhook to generate when sending messages
     */
    webhook: string
    /**
     * Playing statuses for the bot - set to falsy to disable
     */
    statuses: string[]
    /**
     * Admins of the bot
     */
    admins: string[]
  }

  /**
   * Express web server configuration
   */
  express: {
    /**
     * The port to host the site on
     */
    port: number
    /**
     * GraphiQL - online GraphQL editor
     * Test it out in your browser at /api/graphql
     */
    graphiql: boolean
    /**
     * Rate limiting of the API
     * see https://www.npmjs.com/package/express-rate-limit#configuration
     */
    rateLimit: {
      /**
       * how long to keep records of requests in memory.
       */
      windowMs: number
      /**
       * max number of connections during windowMs milliseconds before sending a 429 response.
       */
      max: number
      /**
       * max number of connections during windowMs before starting to delay responses.
       */
      delayAfter: number
      /**
       * how long to delay the response, multiplied by number of recent hits
       */
      delayMs: number
    }
  }

  /**
   * Embed configuration
   */
  embed: {
    /**
     * Default embed theme
     */
    theme: {
      /**
       * Default colors to be applied to all servers
       */
      colors: {
        primary: string
        accent: string
        background: string
      }
      /**
       * Default CSS to be applied to all servers.
       */
      css: string
    }
    /**
     * Embed configuration
     */
    config: {
      /**
       * Pick between random avatar services or
       * specify a URL to use, for guests avatars.
       */
      avatar: 'adorable' | 'identicon' | 'robohash' | 'retro' | string
      /**
       * Notifications to display on embed load
       */
      notifications: Notification[]
    }
  }

  /**
   * Configure memoizee
   */
  cache: {
    /**
     * How many messages to store in cache
     */
    'graphql.messageHistory': number
    /**
     * How long until the message cache should be purged
     */
    'graphql.messageHistoryExpiration': string
    /**
     * How long to cache the channels for each server for
     */
    'graphql.channelsExpiration': string
    /**
     * How long to cache the permissions for each server for
     */
    'graphql.permissionsExpiration': string
  }

  /**
   * Select a logging level to use for Winston
   */
  log_level: 'error' | 'warn' | 'info' | 'debug' | 'verbose' | 'silly'
}
```