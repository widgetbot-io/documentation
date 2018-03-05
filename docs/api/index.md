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

Un-hides the entire widget by re-attaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will now appear
    crate.show()
    ```

---

## `#!js hide()`

Hides the entire widget by detaching the React component from the DOM.

!!! example "Usage"

    ```js
    // Button will now disappear
    crate.hide()
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
