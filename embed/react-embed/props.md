The WidgetBot component accepts the following props

## Props

::: tip Definitions

```ts
interface IProps {
  server: string
  channel?: string

  username?: string
  avatar?: string

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
