# API

Once you've initialised a new constructor, you can manipulate it using the following methods

## Interaction

### `#!js toggle(open?: boolean)`

Toggles the message view, with an optional param to set it.

!!! example "Usage"

    ```js
    // Toggle
    crate.toggle()

    // Toggle open
    crate.toggle(true)

    // Toggle closed
    crate.toggle(false)
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.toggle()">toggle()</button>
    <button class="try-it" onClick="crate.toggle(true)">toggle(true)</button>
    <button class="try-it" onClick="crate.toggle(false)">toggle(false)</button>

### `#!js pulse(pulsing?: boolean)`

Pulses the button with with an optional param to set it.

!!! example "Usage"

    ```js
    // Toggle pulse
    crate.pulse()

    // Start pulsing
    crate.pulse(true)

    // Stop pulsing
    crate.pulse(false)
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.pulse()">pulse()</button>
    <button class="try-it" onClick="crate.pulse(true)">pulse(true)</button>
    <button class="try-it" onClick="crate.pulse(false)">pulse(false)</button>

### `#!js message(content: string, timeout?: number, avatar?: url)`

Programmatically displays a toast message. Supports discords markdown

!!! example "Usage"

    ```js
    // Hello world
    crate.message(`**hello** world`)

    // Display for 2 seconds
    crate.message('`2 seconds`', 2000)

    // Custom avatar
    crate.message('samdd', false, 'https://cdn.samdd.me/samdd-logo/variations/logo.png')
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.message('**hello** world')">hello world</button>
    <button class="try-it" onClick="crate.message('\`2 seconds\`', 2000)">2 seconds</button>
    <button class="try-it" onClick="crate.message('samdd', false, 'https://cdn.samdd.me/samdd-logo/variations/logo.png')">custom avatar</button>

### `#!js config(new: Config)`

Updates the configuration for crate in real time. [Available options](/options/)

!!! example "Usage"

    ```js
    // Change toggle to a random color
    crate.config({
      colors: {
        ...crate.state.config.colors,
        toggle: '#'+Math.random().toString(16).slice(2, 8)
      }
    })

    // Switch position
    crate.config({
      position: {
        x: crate.state.config.position.x === 'left' ? 'right' : 'left',
        y: crate.state.config.position.y,
      }
    })
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.config({colors: {...crate.state.config.colors,toggle: '#'+Math.random().toString(16).slice(2, 8)}})">change colors</button>
    <button class="try-it" onClick="crate.config({position:{x:'left'===crate.state.config.position.x?'right':'left',y:crate.state.config.position.y}});">switch position</button>

---

## Visibility

### `#!js show()`

Un-hides the entire widget by re-attaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will now appear
    crate.show()
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.show()">show()</button>

### `#!js hide()`

Hides the entire widget by detaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will now disappear
    crate.hide()
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.hide()">hide()</button>

### `#!js remove()`

Permanently removes the entire widget by detaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will disappear
    crate.remove()
    ```

    <b>Try it:</b> <button class="try-it" onClick="crate.remove()">remove()</button>

---
