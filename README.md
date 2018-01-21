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
		<a href="https://trello.com/b/X9ZFUHmv/crate">
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
<script src="https://crate.widgetbot.io/v2" async defer>
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
### [Synchronously: Using the default `window.crate` API](https://codepen.io/samdenty99/pen/WdPLLV)
<p data-height="265" data-theme-id="dark" data-slug-hash="WdPLLV" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="WdPLLV" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/WdPLLV/">WdPLLV</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### [Asynchronously: Using the default `window.crate` API](https://codepen.io/samdenty99/pen/YYBdBL)
<p data-height="265" data-theme-id="dark" data-slug-hash="YYBdBL" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="YYBdBL" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/YYBdBL/">YYBdBL</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### [Synchronously: Initialising a custom crate object](https://codepen.io/samdenty99/pen/ppGqYJ)
<p data-height="265" data-theme-id="dark" data-slug-hash="ppGqYJ" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="ppGqYJ" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/ppGqYJ/">ppGqYJ</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### [Asynchronously: Initialising a custom crate object](https://codepen.io/samdenty99/pen/rpPoRW)
<p data-height="265" data-theme-id="dark" data-slug-hash="rpPoRW" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="rpPoRW" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/rpPoRW/">rpPoRW</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### [Asynchronously: Using multiple instances of crate at the same time](https://codepen.io/samdenty99/pen/aEXPMw)
<p data-height="265" data-theme-id="dark" data-slug-hash="aEXPMw" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="aEXPMw" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/aEXPMw/">aEXPMw</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### [Asynchronously: Dynamically updating the state](https://codepen.io/samdenty99/pen/LeqMae)
<p data-height="265" data-theme-id="dark" data-slug-hash="LeqMae" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="LeqMae" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/LeqMae/">LeqMae</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### [Asynchronously: Dynamically interacting with the button](https://codepen.io/samdenty99/pen/goqZEZ)
<p data-height="265" data-theme-id="dark" data-slug-hash="goqZEZ" data-default-tab="html,result" data-user="samdenty99" data-embed-version="2" data-pen-title="goqZEZ" class="codepen">See the Pen <a href="https://codepen.io/samdenty99/pen/goqZEZ/">goqZEZ</a> by Sam Denty (<a href="https://codepen.io/samdenty99">@samdenty99</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>