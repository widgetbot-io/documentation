<p align="center">
	<a href="https://crate.widgetbot.io/?ref=logo">
		<img src="https://github.com/widgetbot-io/crate/raw/master/assets/crate.png" width="100">
	</a>
  <h3 align="center">Crate</h3>
  <p align="center">
    Popup Discord widgets for your website.
  </p>
</p>
<p align="center">
	<b>
		<a href="https://crate.widgetbot.io/?ref=demo">
			Demo
		</a>&nbsp;|
		<a href="https://trello.com/b/">
			Trello
    </a>&nbsp;|
		<a href="https://beta.widgetbot.io/demo/">
			Discord
		</a>
	</b>
	<br><br>
  <a href="https://crate.widgetbot.io/v2">
		<img src="https://img.shields.io/badge/Version-2.0.0-7289DA.svg">
	</a>
	<a href="https://discord.gg/25vFWfb">
		<img src="https://img.shields.io/discord/299881420891881473.svg?colorB=7289DA&style=flat">
	</a>
</p>
<h2></h2>

![Demo](https://i.imgur.com/GjHSu16.gif)

## What is crate?

## Adding WidgetBot to your server
Head over to [`WidgetBot.io`](https://widgetbot.io) and follow the straight-forward process of inviting the bot to your server and enabling the widget for your chosen channel.


## Getting started

Simply load the crate Javascript library and specify your server & channel ID:

```html
<script src="https://crate.widgetbot.io/v2">
  new Crate({
    server: '299881420891881473',
    channel: '355719584830980096'
  })
</script>
```

A new instance of the Crate button will be created, and it's API available at `window.crate`.




## Configuration

Crate is built to be highly customizable and dynamic. You can specify the configuration to use as a Javascript object inside the `new Crate()` constructor.


## API

As soon as you've loaded the Crate Javascript library, a global `Crate` constructor becomes available to use anywhere on your website.

This opens up the ability for your website to dynamically interact with Crate, modify it's state and change the configuration in __real time__

## Examples
### Using the default `window.crate` API
```html
<head>
  <script src="https://crate.widgetbot.io/v2">
    new Crate({
      server: '299881420891881473',
      channel: '355719584830980096'
    })
  </script>
</head>
<body>
  <script>
    console.log(crate.state)
    crate.toggle()
  </script>
</body>
```

### Initialising a custom crate object
```html
<script src="https://crate.widgetbot.io/v2"></script>

<script>
  let myCrateButton = new Crate({
    server: '299881420891881473',
    channel: '355719584830980096'
  })

  myCrateButton.toggle()
</script>
```

### Manipulating the state with dynamic content
```html
<script src="https://crate.widgetbot.io/v2"></script>

<script>
  let config = {
    server: '299881420891881473',
    channel: '355719584830980096',
    buttons: {
      primary: `The date is ${new Date().toLocaleDateString()}`
    }
  }

  let myCrateButton = new Crate(config)

  // Toggle Crate every 2 seconds
  setInterval(() => {
    myCrateButton.toggle()
    console.log(`open: ${myCrateButton.state.view.open}`)
  }, 2 * 1000)

  // Remove crate after 30 seconds
  setTimeout(() => {
    myCrateButton.remove()
  }, 30 * 1000)
</script>
```

### Using multiple instances of crate at the same time
```html
<script src="https://crate.widgetbot.io/v2"></script>

<script>
  let crateOne = new Crate({
    server: '299881420891881473',
    channel: '355719584830980096',
    position: {
      x: 'right',
      y: 'bottom'
    }
  })

  let crateTwo = new Crate({
    server: '299881420891881473',
    channel: '355719584830980096',
    position: {
      x: 'left',
      y: 'top'
    },
    colors: {
      toggle: '#000'
    }
  }) 
</script>
```