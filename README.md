### iggins
Irken plugin for listening for key combinations

####[Docs](/docs/iggins.md)

#### How to use iggins:
Register iggins on an Irken application.

#### What iggins does:
It exposes a `keypress` function that is used to register 'keyActions' on the Irken application. A 'keyAction' is comprised of:
 * the string representation of a key combination (i.e., 'CTRL_SHIFT_L'), and
 * the behavior(function) that should associated with the key event.

Upon successfully registering a keyAction, the `keypress` function will return another function that can be used at a later time to remove newly registered 'keyAction' from the application.

#### Who uses the returned function?
The returned function is particularly important when the newly registered keyAction handler is bound to a DOM element that may at some future time cease to exist.  The returned function can be passed to the caller and invoked when the reference needs to be broken to allow for garbage collection.
