# API

Once you've initialised a new constructor, you can hook onto events using the `.on()` event listener API

## Available events

Below defines all possible events and their callbacked values

!!! info "Events"

    ```ts
    interface Events {
      // Message event
      message: Message

      // Once the iframe has loaded
      widget-loaded

      // Toast click event
      message-click: Message

      // Button toggle event
      toggle: boolean

      // API .show() and .hide() events
      visibility: boolean

      // API .pulse() event
      pulse: boolean
    }
    ```

---

## Listen to a specific event

### `#!js on(eventName: string, callback: Function)`

Listens for a specific event, calling the callback when triggered

!!! example "Usage"

    ```js
    // Listen for toggle events
    crate.on('toggle', open => {
      alert(`Crate is now ${open ? 'open' : 'hidden'}`)
    })
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.on('toggle', function(open){alert('Open:'+open)})">Listen for event</button>
    <button class="try-it" onClick="crate.crateEvent('toggle', true)">Trigger event</button>

---

## Listen for all events

### `#!js onEvent(callback: Function)`

Listens for all events, calling the callback when any event is fired

!!! example "Usage"

    ```js
    // Listen for any events and create a message once received
    crate.onEvent((data) => {
      crate.message(JSON.stringify(data))
    })
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.onEvent(function(data) {crate.message(JSON.stringify(data))})">Listen for events</button>
    <button class="try-it" onClick="crate.crateEvent('toggle', true)">Trigger event</button>

---

## Fake an event

### `#!js crateEvent(name: string, data?: any)`

Fires an event to all attached listeners

!!! example "Usage"

    ```js
    // Fakes an event without actually doing anything
    crate.crateEvent('toggle', true)
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.on('toggle', function(open){alert('Open:'+open)})">Listen for events</button>
    <button class="try-it" onClick="crate.crateEvent('toggle', true)">Fake event</button>

