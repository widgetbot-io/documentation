# Crate Options

You can pass custom options to Crate when initializing it, for example:

```ts
new Crate({ server: '299881420891881473', location: ['top', 'left'] })
```

## Definitions

::: tip Typescript definitions

```ts
type url = string
type size = string

export type vertical = 'top' | 'bottom' | number
export type horizontal = 'left' | 'right' | number

interface Options {
  // Server + channel IDs
  server: string
  channel?: string

  // Where the button should appear on-screen
  location?: [vertical, horizontal]

  // The color of the button
  color?: string
  // The glyph to display on the button
  glyph?: [url, size]
  // Custom CSS to be injected into the Shadow root
  css?: string

  // Message notifications
  notifications?: boolean
  // Unread message indicator
  indicator?: boolean
  // Notification timeout
  timeout?: number

  // Only load the widget once the user opens it
  defer?: boolean
  // Connect to a custom WidgetBot server
  shard?: url
}

export default Options
```
