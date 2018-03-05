# API

Once you've initialised a new constructor, you can manipulate it using the following methods

## `#!js toggle(open?: boolean)`

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

---

## `#!js show()`

Shows the message view. Alias for `toggle(true)`

!!! example "Usage"

    ```js
    // Toggle open
    crate.show()
    ```

---

## `#!js hide()`

Hides the message view. Alias for `toggle(false)`

!!! example "Usage"

    ```js
    // Toggle closed
    crate.show()
    ```

---

## `#!js attach()`

Un-hides the entire widget by re-attaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will now appear
    crate.attach()
    ```

---

## `#!js detach()`

Hides the entire widget by detaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will now disappear
    crate.detach()
    ```

---

## `#!js remove()`

Permanently removes the entire widget by detaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will disappear
    crate.remove()
    ```

---
