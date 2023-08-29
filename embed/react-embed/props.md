The WidgetBot component accepts the following props

## Props

::: tip Definitions

```ts
interface IProps {
  server: string
  channel?: string

  thread?: string

  username?: string
  avatar?: string

  accessibility?: string[]
  settingsGroup?: string

  token?: string

  notifications?: boolean
  notificationTimeout?: number

  defer?: boolean

  shard?: string

  className?: string
  onAPI?: (api: Client) => void

  style?: React.CSSProperties
  height?: number
  width?: number

  options?: { [key: string]: string }
}

export default IProps
```
:::
